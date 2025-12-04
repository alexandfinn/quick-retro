<template>
  <article class="board" :class="{ template: isTemplate }">
    <div class="board__header">
      <div class="stack">
        <p class="eyebrow">{{ isTemplate ? "Template" : "Board" }}</p>
        <h3>{{ board.title || "Untitled Retro" }}</h3>
      </div>
      <DeleteButton
        v-if="!isTemplate"
        color="black"
        class="delete"
        @click="onDelete"
      >
        ✖
      </DeleteButton>
    </div>

    <div class="board__preview">
      <div
        class="column"
        v-for="column in board.columns"
        :key="column.title"
        :style="{ backgroundColor: column.color, height: getColumnHeight(column) }"
      >
        <span>{{ column.title }}</span>
        <span class="count" v-if="!isTemplate">{{ getColumnCount(column) }} cards</span>
      </div>
    </div>
  </article>
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

function getColumnCount(column: any) {
  return Object.keys(column?.cards ?? {}).length;
}
</script>

<style scoped>
.board {
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 18px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: transform 160ms ease, box-shadow 160ms ease;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.board:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
}

.board__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

h3 {
  margin: 0;
}

.board__preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  width: 100%;
}

.column {
  border-radius: var(--radius-sm);
  color: white;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 80px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);
  text-align: left;
  font-weight: 700;
}

.count {
  font-size: 12px;
  opacity: 0.85;
}

.template {
  border-style: dashed;
  border-color: rgba(0, 0, 0, 0.08);
}

.delete {
  position: static;
}
</style>
