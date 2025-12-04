<script setup lang="ts">
import { ref, onUnmounted, inject, watch } from 'vue';
import Button from './Button.vue';
import { startTimer as startTimerDB, stopTimer as stopTimerDB, resetTimer as resetTimerDB, useTimer } from '../database';

// Timer duration in seconds (7 minutes = 420 seconds)
const TIMER_DURATION = 420;

// Get boardId from parent component
const boardId = inject("boardId") as string;

// Use the Firebase timer
const timer = useTimer(boardId);
const localTimeRemaining = ref(timer.timeRemaining);
let timerInterval: number | null = null;

// Watch for changes in the Firebase timer
watch(() => timer.isRunning, (isRunning) => {
  if (isRunning) {
    startLocalTimer();
  } else {
    stopLocalTimer();
  }
});

watch(() => timer.timeRemaining, (newTime) => {
  localTimeRemaining.value = newTime;
});

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startLocalTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  timerInterval = window.setInterval(() => {
    if (localTimeRemaining.value > 0) {
      localTimeRemaining.value--;
    } else {
      stopLocalTimer();
    }
  }, 1000);
}

function stopLocalTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  const endTime = Date.now() + (localTimeRemaining.value * 1000);
  startTimerDB(boardId, endTime);
}

function stopTimer() {
  stopTimerDB(boardId, localTimeRemaining.value);
}

function resetTimer() {
  resetTimerDB(boardId, TIMER_DURATION);
}

// Clean up interval when component is unmounted
onUnmounted(() => {
  stopLocalTimer();
});
</script>

<template>
  <div
    class="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white shadow-lg shadow-black/30 backdrop-blur"
  >
    <div
      class="timer-display flex items-center gap-2 rounded-xl px-3 py-2 text-lg font-semibold tracking-tight"
      :class="{
        'text-rose-200': localTimeRemaining <= 60,
        'text-emerald-200': timer.isRunning,
      }"
    >
      <span
        class="relative inline-flex h-2.5 w-2.5 rounded-full"
        :class="timer.isRunning ? 'bg-emerald-300' : 'bg-white/60'"
      >
        <span
          v-if="timer.isRunning"
          class="absolute inset-0 animate-ping rounded-full bg-emerald-400/70"
        ></span>
      </span>
      {{ formatTime(localTimeRemaining) }}
    </div>
    <div
      class="timer-controls flex max-h-0 flex-wrap justify-center gap-2 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100"
    >
      <Button
        v-if="!timer.isRunning"
        @click="startTimer"
        text="Start"
      />
      <Button
        v-else
        @click="stopTimer"
        text="Stop"
      />
      <Button
        @click="resetTimer"
        text="Reset"
      />
    </div>
  </div>
</template>
