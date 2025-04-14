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
  <div class="timer-container">
    <div 
      class="timer-display" 
      :class="{ 'timer-ending': localTimeRemaining <= 60, 'timer-running': timer.isRunning }"
    >
      {{ formatTime(localTimeRemaining) }}
    </div>
    <div class="timer-controls">
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

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(245, 245, 245, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
  width: fit-content;
  min-width: 80px;
}

.timer-container:hover {
  background-color: rgba(245, 245, 245, 0.95);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.timer-display {
  font-size: 18px;
  font-weight: bold;
  font-family: monospace;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.timer-ending {
  color: #e53935;
}

.timer-running {
  position: relative;
}

.timer-running::after {
  content: '';
  position: absolute;
  top: 0;
  right: -12px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #4caf50;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.timer-controls {
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.timer-container:hover .timer-controls {
  display: flex;
  opacity: 1;
  height: auto;
  overflow: visible;
}
</style> 