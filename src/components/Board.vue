<script setup lang="ts">
import { inject, ref, watch, watchEffect } from "vue";
import { changeBoardTitle, joinBoard, setCardsHidden } from "../database";
import BoardData from "../types";
import Button from "./Button.vue";
import Column from "./Column.vue";
import Timer from "./Timer.vue";

const board = inject("board") as BoardData;
const boardId = inject("boardId") as string;
const user = inject("user") as { uid: string };

watchEffect(() => {
  if (user.uid) joinBoard(user.uid, boardId);
});

function toggleCardsHidden() {
  setCardsHidden(boardId, !board.cardsHidden);
}

function getToggleText() {
  return board.cardsHidden ? "Show all cards" : "Hide other cards";
}

function onTitleKeyPress(e: KeyboardEvent) {
  if (e.key === "Enter") {
    (e.target as HTMLInputElement).blur();
    e.preventDefault();
  }
}

function onTitleBlur(e: Event) {
  const newTitle = (e?.target as HTMLInputElement).value.trim();
  changeBoardTitle(boardId, newTitle);
  title.value = newTitle || "Untitled Retro";
}

function onTitleFocus() {
  if (title.value === "Untitled Retro") {
    title.value = "";
  }
}

const title = ref(board.title || "Untitled Retro");

watch(board, (newBoard) => {
  title.value = newBoard.title || "Untitled Retro";
});
</script>

<template>
  <div class="board">
    <div class="board-header">
      <div class="timer-wrapper">
        <Timer />
      </div>
      <input
        :class="{ untitled: title === 'Untitled Retro' }"
        v-model="title"
        @keypress="onTitleKeyPress"
        @focusout="onTitleBlur"
        @focusin="onTitleFocus"
      />
      <div class="options-container">
        <Button @click="toggleCardsHidden" :text="getToggleText()" />
      </div>
    </div>
    <section class="columns">
      <Column
        v-for="(column, columnId) in board.columns"
        :cards="column.cards ?? []"
        :column-id="String(columnId)"
        :board-id="boardId"
        :key="String(columnId)"
        :title="column.title"
        :color="column.color"
      />
    </section>
  </div>
</template>

<style scoped>
input {
  font-size: 32px;
  font-weight: bold;
  outline: none;
  text-align: center;
  border: 0;
  background-color: transparent;
}

.untitled {
  color: #777777cb;
}

.columns {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.board {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
}

.board-header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: #f6f6f6;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 2;
}

.board-header input {
  margin: 0 auto;
  width: 100%;
}

.options-container {
  display: flex;
  justify-content: flex-end;
}

.timer-wrapper {
  display: flex;
  justify-content: flex-start;
  max-width: 200px;
}
</style>
