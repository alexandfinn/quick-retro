<template>
  <button
    class="inline-flex min-w-[180px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-[1px] hover:border-cyan-300/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const { text } = defineProps<{ text: string }>();
</script>
