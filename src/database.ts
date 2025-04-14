import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  connectDatabaseEmulator,
  DataSnapshot,
  get,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { reactive } from "vue";
import { Template } from "./templates";

const firebaseConfig = {
  apiKey: "AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",
  authDomain: "quick-retro.firebaseapp.com",
  projectId: "quick-retro",
  storageBucket: "quick-retro.appspot.com",
  messagingSenderId: "293134428599",
  appId: "1:293134428599:web:bad71d4fedbda8080ce032",
  databaseURL:
    "https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
if (import.meta.env.MODE === "test") {
  connectDatabaseEmulator(database, "localhost", 9000);
}

const boards = reactive<any>({});

export function useBoards(userId: string | undefined) {
  if (!userId) return boards;

  const userBoardsRef = ref(database, `users/${userId}/boards`);
  const boardListeners: { [boardId: string]: () => void } = {};

  onValue(userBoardsRef, onUserBoardListChanged, onError);

  function onUserBoardListChanged(snapshot: DataSnapshot) {
    const boardIds = (
      snapshot.exists() ? Object.values(snapshot.val()) : []
    ) as string[];
    for (const boardId of boardIds) {
      if (boardListeners[boardId]) continue;

      const unsubscribe = onValue(
        ref(database, `boards/${boardId}`),
        onBoardChanged.bind(null, boardId),
        onError
      );
      boardListeners[boardId] = unsubscribe;
    }

    for (const boardId in boardListeners) {
      if (boardIds.includes(boardId)) continue;

      boardListeners[boardId]();
      delete boardListeners[boardId];
      delete boards[boardId];
    }
  }

  function onBoardChanged(boardId: string, snapshot: DataSnapshot) {
    boards[boardId] = snapshot.val();
  }

  function onError(e: Error) {
    console.error(e);
  }

  return boards;
}

export function useBoard(id: string) {
  const board = reactive<{ [key: string]: any }>({ loading: true });

  onValue(
    ref(database, `boards/${id}`),
    (snapshot) => {
      board.exists = snapshot.exists();
      board.loading = false;

      if (!board.exists) return;

      Object.entries(snapshot.val()).forEach(([key, value]) => {
        board[key] = value;
      });
    },
    onError
  );

  function onError(e: Error) {
    console.log(e);
    board.exists = false;
    board.loading = false;
  }

  return board;
}

interface CardDb {
  text: string;
  author: string;
}

export function setCardsHidden(boardId: string, hidden: boolean) {
  const board = ref(database, `boards/${boardId}`);
  update(board, { cardsHidden: hidden });
}

export function changeBoardTitle(boardId: string, title: string) {
  const board = ref(database, `boards/${boardId}`);
  update(board, { title });
}

export function startTimer(boardId: string, endTime: number) {
  const timerRef = ref(database, `boards/${boardId}/timer`);
  update(timerRef, { 
    isRunning: true,
    endTime: endTime
  });
}

export function stopTimer(boardId: string, timeRemaining: number) {
  const timerRef = ref(database, `boards/${boardId}/timer`);
  update(timerRef, { 
    isRunning: false,
    timeRemaining: timeRemaining
  });
}

export function resetTimer(boardId: string, duration: number) {
  const timerRef = ref(database, `boards/${boardId}/timer`);
  update(timerRef, { 
    isRunning: false,
    timeRemaining: duration
  });
}

export function useTimer(boardId: string) {
  const timer = reactive({
    isRunning: false,
    timeRemaining: 420, // Default 7 minutes
    endTime: 0
  });

  onValue(
    ref(database, `boards/${boardId}/timer`),
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        timer.isRunning = data.isRunning || false;
        
        if (data.isRunning && data.endTime) {
          // Calculate remaining time based on server end time
          timer.endTime = data.endTime;
          timer.timeRemaining = Math.max(0, Math.floor((data.endTime - Date.now()) / 1000));
        } else if (data.timeRemaining !== undefined) {
          timer.timeRemaining = data.timeRemaining;
        }
      }
    },
    (error) => {
      console.error("Error fetching timer data:", error);
    }
  );

  return timer;
}

export function addCard(boardId: string, columnId: string, card: CardDb) {
  const cards = ref(database, `boards/${boardId}/columns/${columnId}/cards`);
  push(cards, card);
}

export function removeCard(boardId: string, columnId: string, cardId: string) {
  remove(
    ref(database, `boards/${boardId}/columns/${columnId}/cards/${cardId}`)
  );
}

export async function moveCard(
  boardId: string,
  columnId: string,
  cardId: string,
  newColumnId: string
) {
  const card = ref(
    database,
    `boards/${boardId}/columns/${columnId}/cards/${cardId}`
  );
  const newColumn = ref(
    database,
    `boards/${boardId}/columns/${newColumnId}/cards`
  );

  const cardSnapshot = await get(card);
  push(newColumn, cardSnapshot.val());
  remove(card);
}

export function updateCard(
  boardId: string,
  columnId: string,
  cardId: string,
  card: Partial<CardDb>
) {
  update(
    ref(database, `boards/${boardId}/columns/${columnId}/cards/${cardId}`),
    card
  );
}

export async function addNewBoard(authorId: string, template: Template) {
  const boards = ref(database, "boards");
  const newBoard = await push(boards, {
    author: authorId,
    cardsHidden: true,
    title: "",
    columns: template.columns.map((column) => ({ ...column, cards: {} })),
  });

  if (!newBoard.key) return;

  await joinBoard(authorId, newBoard.key);

  return newBoard.key;
}

export async function leaveBoard(userId: string, boardId: string) {
  const userBoards = ref(database, `users/${userId}/boards`);
  const userBoardsSnapshot = await get(userBoards);

  if (!userBoardsSnapshot.exists()) return;

  const boardsWithoutLeavingBoard = Object.fromEntries(
    Object.entries(userBoardsSnapshot.val()).filter(
      ([key, aBoardId]) => boardId !== aBoardId
    )
  );

  await set(userBoards, boardsWithoutLeavingBoard);
}

export async function joinBoard(userId: string, boardId: string) {
  const userBoardsSnapshot = await get(ref(database, `users/${userId}/boards`));

  const boardIds = (
    userBoardsSnapshot.exists() ? Object.values(userBoardsSnapshot.val()) : []
  ) as string[];

  if (boardIds.includes(boardId)) return;

  const userBoards = ref(database, `users/${userId}/boards`);
  await push(userBoards, boardId);
}

export function useUser() {
  const user = reactive<{ [key: string]: any }>({});

  const auth = getAuth();

  signInAnonymously(auth).catch((error) => {
    console.error(error);
  });

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      Object.entries(firebaseUser).forEach(([key, value]) => {
        user[key] = value;
      });
    }
  });

  return user;
}
