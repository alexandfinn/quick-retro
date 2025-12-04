<template>
  <section
    class="flex h-full flex-col gap-4 rounded-2xl border bg-white/5 p-4 shadow-lg shadow-black/10 backdrop-blur"
    :style="columnStyle"
  >
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="inline-flex h-3 w-3 rounded-full" :style="{ backgroundColor: color }"></span>
        <h2 class="text-lg font-semibold text-white drop-shadow-sm">{{ title }}</h2>
      </div>
      <span class="rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-white/80">
        {{ Object.keys(cards).length }}
      </span>
    </div>
    <div
      class="h-2 rounded-lg border border-dashed border-white/20 bg-white/5 transition-all"
      @dragover="onDragOverSpacer"
      @dragleave="onDragLeaveSpacer"
      @drop="onDropSpacer"
    ></div>
    <ul class="flex flex-col gap-3">
      <li v-for="(card, cardId) in cards" class="list-none">
        <Card
          :id="cardId"
          :key="cardId"
          :author="card.author"
          :text="card.text"
          :color="color"
          :onDelete="onDelete"
          :board-id="boardId"
          :column-id="columnId"
        />
        <div
          v-if="Object.keys(cards).length > 0"
          class="h-2 rounded-lg border border-dashed border-white/10 bg-white/5 transition-all"
          @dragover="onDragOverSpacer"
          @dragleave="onDragLeaveSpacer"
          @drop="onDropSpacer"
        ></div>
      </li>
    </ul>
    <div v-if="Object.keys(cards).length > 0" class="h-4"></div>
    <CardInput :color="color" placeholder="Add new card" @save="addNewCard" />
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { addCard, moveCard, removeCard } from "../database";
import Card from "./Card.vue";
import CardInput from "./CardInput.vue";

const { columnId, boardId, color } = defineProps<{
  title: string;
  color: string;
  boardId: string;
  columnId: string;
  cards: { [cardId: string]: { text: string; author: string } };
}>();

const user = inject<{ uid: string }>("user");

const columnStyle = computed(() => ({
  backgroundColor: `${color}14`,
  borderColor: `${color}33`,
}));

function addNewCard(newText: string) {
  if (newText.trim() === "") return;
  if (!user?.uid) return;

  addCard(boardId, columnId, {
    text: newText,
    author: user.uid,
  });
}

function onDelete(cardId: string) {
  removeCard(boardId, columnId, cardId);
}

function onDragOverSpacer(e: DragEvent) {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  if (e.target) (e.target as HTMLDivElement).style.height = "64px";
}

function onDragLeaveSpacer(e: DragEvent) {
  if (e.target) (e.target as HTMLDivElement).style.height = "8px";
}

function onDropSpacer(e: DragEvent) {
  if (e.target) (e.target as HTMLDivElement).style.height = "8px";

  const data = JSON.parse(e.dataTransfer?.getData("application/json") ?? "{}");

  moveCard(boardId, data.columnId, data.cardId, columnId);
}
</script>
