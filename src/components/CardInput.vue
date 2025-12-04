<template>
  <div
    class="input-container relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-inner shadow-black/40 backdrop-blur"
  >
    <Input
      class="input !bg-transparent !text-white"
      ref="inputRef"
      v-model:value="state.inputText"
      type="textarea"
      autosize
      :placeholder="placeholder"
      @keydown="onInputKeyUp"
      @focus="onFocus"
      @blur="onBlur"
      :style="{
        '--n-border-radius': '16px',
        '--n-color': 'transparent',
        '--n-border': '1px solid transparent',
        '--n-border-hover': '1px solid rgba(255,255,255,0.3)',
        '--n-placeholder-color': 'rgba(255,255,255,0.55)',
        '--n-text-color': '#fff',
        '--n-box-shadow-focus': '0 10px 40px rgba(0,0,0,0.25)',
      }"
    />
    <button
      v-if="state.isFocused"
      class="save-button absolute bottom-3 right-3 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-[1px] hover:opacity-100"
      :style="{ backgroundColor: color }"
      @mousedown.prevent
      @click="onSave"
    >
      save
    </button>
  </div>
</template>

<script setup lang="ts">
import { NInput as Input } from "naive-ui";
import { onMounted, reactive, ref } from "vue";

const emit = defineEmits(["save", "blur"]);

const inputRef = ref();

const {
  color,
  placeholder,
  initialValue = "",
  autofocus = false,
  saveOnBlur = false,
} = defineProps<{
  color: string;
  placeholder: string;
  initialValue?: string;
  autofocus?: boolean;
  saveOnBlur?: boolean;
}>();

const state = reactive({
  inputText: initialValue,
  isFocused: false,
});

function onSave() {
  emit("save", state.inputText);
  if (!saveOnBlur) state.inputText = "";
}

function onInputKeyUp(e: KeyboardEvent) {
  if (e.metaKey && e.key === "Enter") {
    e.preventDefault();
    onSave();
  }
}

function onBlur() {
  state.isFocused = false;
  if (saveOnBlur) onSave();
}

function onFocus() {
  state.isFocused = true;
}

if (autofocus) {
  onMounted(() => {
    inputRef.value.focus?.();
  });
}
</script>
