<template>
  <div
    class="board group relative flex h-56 w-full cursor-pointer flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-soft"
    :class="{ template: isTemplate }"
  >
    <DeleteButton v-if="!isTemplate" color="white" @click="onDelete">✖</DeleteButton>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-semibold text-white">
        {{ board.title || "Untitled Retro" }}
      </h3>
      <p class="text-xs uppercase tracking-[0.18em] text-white/70">
        {{ isTemplate ? "Template" : "Board" }}
      </p>
    </div>
    <div class="columns flex flex-1 flex-row items-end gap-2">
      <div
        class="column flex-1 rounded-lg px-3 py-2 text-xs font-semibold text-white shadow-md"
        v-for="column in board.columns"
        v-bind:style="{ backgroundColor: column.color }"
        :style="{
          height: getColumnHeight(column),
        }"
      >
        <div class="truncate">{{ column.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Template } from "../templates";
import BoardData from "../types";
import DeleteButton from "./DeleteButton.vue";

const { board, isTemplate } = defineProps<{
  board: BoardData | Template;
  isTemplate: boolean;
}>();

const emit = defineEmits(["delete"]);

function onDelete(e: Event) {
  e.stopPropagation();
  emit("delete");
}

const largestColumn = computed(() => {
  let largestValue = 0;
  for (const columns of Object.values(board.columns)) {
    console.log(columns);
    const numberOfCards = Object.keys(columns.cards ?? {}).length;
    if (numberOfCards > largestValue) {
      largestValue = numberOfCards;
    }
  }
  return largestValue;
});

function getColumnHeight(column: any) {
  const minHeight = 20;

  if (isTemplate) return "100%";
  if (largestColumn.value === 0) return `${minHeight}%`;

  const numberOfCardsInColumn = Object.keys(column?.cards ?? {}).length;

  return `${
    (numberOfCardsInColumn / largestColumn.value) * (100 - minHeight) +
    minHeight
  }%`;
}
</script>
