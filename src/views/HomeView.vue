<template>
  <div class="page">
    <header class="hero card">
      <div class="badge">quick retro {{ isTesting ? "(emulated)" : "" }}</div>
      <div class="hero__body">
        <div class="stack">
          <p class="eyebrow">Structured feedback. Familiar shadcn look.</p>
          <h1>Run a retro in seconds.</h1>
          <p class="lede">
            Spin up a fresh board from a template or jump back into one of your recent sessions.
          </p>
          <div class="hero__actions">
            <button
              v-if="templates.length"
              class="btn"
              type="button"
              @click="createNewBoard(templates[0])"
            >
              Start with classic
            </button>
            <button class="btn btn-ghost" type="button" @click="navigateToBoards">
              View my boards
            </button>
          </div>
        </div>
        <div class="hero__meta">
          <div class="pill">Lightweight, collaborative, sharable.</div>
          <div class="pill pill--soft">Automatic previews for every column.</div>
        </div>
      </div>
    </header>

    <main class="content">
      <section class="panel card">
        <div class="section-heading">
          <div class="stack">
            <p class="eyebrow">Templates</p>
            <h2>Start a new board</h2>
          </div>
          <p class="muted">Pick a layout and we'll handle the rest.</p>
        </div>
        <div class="card-grid">
          <BoardCard
            v-for="template in templates"
            :key="template.title"
            @click="createNewBoard(template)"
            :board="template"
            :is-template="true"
          />
        </div>
      </section>

      <section class="panel card">
        <div class="section-heading">
          <div class="stack">
            <p class="eyebrow">Your space</p>
            <h2>Your boards</h2>
          </div>
          <p class="muted">Keep iterating where your team left off.</p>
        </div>
        <div class="card-grid" v-if="Object.keys(ownBoards).length">
          <BoardCard
            v-for="(board, boardId) in ownBoards"
            :key="boardId as unknown as string"
            @click="navigateToBoard(boardId as unknown as string)"
            @delete="onDeleteBoard(boardId as unknown as string)"
            :board="board"
            :is-template="false"
          />
        </div>
        <div v-else class="empty">
          <div class="pill">No boards yet</div>
          <p class="muted">Use a template above to create your first retro.</p>
        </div>
      </section>
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

function navigateToBoards() {
  const ids = Object.keys(ownBoards.value);
  if (ids.length) {
    navigateToBoard(ids[0]);
  }
}

async function createNewBoard(template: Template) {
  if (!user?.uid) return;
  const boardId = await addNewBoard(user.uid, template);
  if (boardId) navigateToBoard(boardId);
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  margin: 0 auto;
  max-width: 1200px;
}

.hero {
  text-align: left;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero__body {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.hero h1 {
  font-size: 36px;
  margin: 0;
}

.hero .lede {
  margin: 0;
  color: var(--muted-foreground);
  max-width: 620px;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero__meta {
  display: grid;
  gap: 10px;
  align-self: flex-end;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--radius-full);
  background: var(--muted);
  color: var(--muted-foreground);
  font-weight: 600;
  font-size: 13px;
}

.pill--soft {
  background: rgba(59, 130, 246, 0.12);
  color: #1e3a8a;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: var(--muted-foreground);
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.panel {
  padding: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.panel .muted {
  color: var(--muted-foreground);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
}

.empty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.muted {
  color: var(--muted-foreground);
}

@media (max-width: 720px) {
  .page {
    padding: 20px;
  }

  .hero h1 {
    font-size: 30px;
  }
}
</style>
