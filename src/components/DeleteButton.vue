<template>
  <button class="ghost" @click="onClick">✖</button>
</template>

<script setup lang="ts">
const { color } = defineProps<{ color?: string }>();
const emit = defineEmits(["delete"]);

function onClick(e: Event) {
  e.stopPropagation();
  emit("delete");
}
</script>

<style scoped>
.ghost {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--border);
  color: v-bind(color || 'white');
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 120ms ease, background-color 120ms ease;
}

.ghost:hover {
  background-color: rgba(15, 23, 42, 0.08);
  transform: scale(1.05);
}
</style>
