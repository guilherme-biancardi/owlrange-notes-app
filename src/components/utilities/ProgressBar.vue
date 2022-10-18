<template>
  <div class="progress" :style="`--size: ${size}px; --font-size: ${textSize}em;`">
    <div class="progress-text">
      <p>{{ parseInt(value) }}%</p>
      <p v-if="text">{{ text }}</p>
    </div>
    <CircleProgress
      :percent="value"
      :viewport="true"
      :size="size"
      :fill-color="'#0007ae'"
      :border-width="border || 15"
      :border-bg-width="border || 15"
    ></CircleProgress>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CircleProgress from "vue3-circle-progress";

const props = defineProps({
  max: Number,
  progressCount: Number,
  size: Number,
  text: String,
  border: Number,
  textSize: Number
});

const value = computed(() => (props.progressCount / props.max) * 100)
</script>

<style scoped>
@import url("../../../node_modules/vue3-circle-progress/dist/circle-progress.css");

.progress {
  position: relative;
  --size: 0;
  --font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress-text {
  width: var(--size);
  height: var(--size);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  text-transform: capitalize;
  row-gap: 4px;
}
</style>
