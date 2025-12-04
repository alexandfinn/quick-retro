<template>
  <div class="container mx-auto flex max-w-6xl flex-col items-center px-6 py-12">
    <main
      class="w-full rounded-[32px] border border-white/10 bg-white/5 px-8 py-10 shadow-soft backdrop-blur"
    >
      <div class="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-cyan-200">retro toolkit</p>
          <h1 class="text-3xl font-bold text-white md:text-4xl">
            🚀 quick retro {{ isTesting ? "(emulated)" : "" }}🚀
          </h1>
        </div>
        <span class="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100">
          realtime boards
        </span>
      </div>

      <div class="mt-10">
        <h2 class="text-2xl font-semibold text-white">Start a new board</h2>
        <section class="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BoardCard
            v-for="template in templates"
            @click="createNewBoard(template)"
            :board="template"
            :is-template="true"
          />
        </section>
      </div>

      <div class="mt-10">
        <h2 class="text-2xl font-semibold text-white">Your boards</h2>
        <section class="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BoardCard
            v-for="(board, boardId) in ownBoards"
            @click="navigateToBoard(boardId as unknown as string)"
            @delete="onDeleteBoard(boardId as unknown as string)"
            :board="board"
            :is-template="false"
          />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import BoardCard from "../components/BoardCard.vue";
import { addNewBoard, useBoards, leaveBoard } from "../database";
import { Template, templates } from "../templates";
import BoardData from "../types";

const isTesting = import.meta.env.MODE === "test";

const { navigateToBoard } = defineProps<{
  navigateToBoard: (boardId: string) => void;
}>();

const user = inject("user") as { uid: string };

const ownBoards = computed(
  () => useBoards(user.uid) as { [boardId: string]: BoardData }
);

function onDeleteBoard(boardId: string) {
  leaveBoard(user.uid, boardId)
}

async function createNewBoard(template: Template) {
  if (!user?.uid) return;
  const boardId = await addNewBoard(user.uid, template);
  if (boardId) navigateToBoard(boardId);
}
</script>
