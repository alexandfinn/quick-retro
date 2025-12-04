<template>
  <button
    @click="onClick"
    class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-sm font-bold text-white opacity-0 shadow-md transition hover:scale-105 hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 group-hover:opacity-100"
    :style="{ color: color || 'white' }"
  >
    ✖
  </button>
</template>

<script setup lang="ts">
const { color } = defineProps<{ color?: string }>();
const emit = defineEmits(["delete"]);

function onClick(e: Event) {
  e.stopPropagation();
  emit("delete");
}
</script>
