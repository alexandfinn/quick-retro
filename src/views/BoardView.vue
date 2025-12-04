<script setup lang="ts">
import { provide } from "vue";
import Board from "../components/Board.vue";
import Spinner from "../components/Spinner.vue";
import { useBoard } from "../database";
import BoardData from "../types";

const { boardId } = defineProps<{ boardId: string }>()

const board = useBoard(boardId) as BoardData;

provide("boardId", boardId);
provide<BoardData>("board", board);
</script>

<template>
  <main
    class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10"
    v-if="!board.loading"
  >
    <Board v-if="board.exists" />
    <div
      v-if="!board.exists"
      class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg text-slate-200 shadow-soft backdrop-blur"
    >
      Couldn't find board
    </div>
  </main>
  <main class="flex items-center justify-center py-12" v-if="board.loading">
    <Spinner />
  </main>
</template>
