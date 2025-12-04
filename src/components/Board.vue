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
  <div class="relative">
    <div
      class="relative flex w-full flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <input
        :class="[
          'w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-2xl font-semibold text-white shadow-inner shadow-black/10 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-soft',
          title === 'Untitled Retro' ? 'text-slate-400' : 'text-white',
        ]"
        v-model="title"
        @keypress="onTitleKeyPress"
        @focusout="onTitleBlur"
        @focusin="onTitleFocus"
      />
      <section
        class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
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
    <section class="absolute right-0 top-0 z-20">
      <div class="flex flex-col items-end gap-3">
        <div class="rounded-xl border border-white/10 bg-white/10 px-3 py-2 shadow-soft backdrop-blur">
          <Button @click="toggleCardsHidden" :text="getToggleText()" />
        </div>
      </div>
    </section>
    <section class="absolute left-0 top-0 z-20">
      <div class="flex max-w-xs justify-center">
        <Timer />
      </div>
    </section>
  </div>
</template>
