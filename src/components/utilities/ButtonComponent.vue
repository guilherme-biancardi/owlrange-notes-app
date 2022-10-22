<template>
  <button
    @click="emit('click')"
    :style="`${
      reverse ? 'flex-direction: row-reverse' : null
    }; border-radius: ${borderRadius || 5}px`"
    :class="[{'reverse': reverseColor}, {'border-none': borderNone}]"
    :type="type || 'button'"
  >
    <IconComponent :icon="icon" :size="24" v-if="icon"></IconComponent>
    <p>{{ text }}</p>
  </button>
</template>

<script setup>
import IconComponent from "./IconComponent.vue";

const emit = defineEmits(["click"]);

defineProps({
  icon: String,
  text: String,
  reverse: Boolean,
  borderRadius: Number,
  type: String,
  reverseColor: Boolean,
  borderNone: Boolean
});
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding: 8px 16px;
  background-color: var(--blue);
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.15s ease;
  width: max-content;
  min-width: 160px;
  border: 2px solid var(--blue);
}

button:hover {
  background-color: var(--blue-medium);
  border-color: var(--blue-medium);
}

p {
  text-transform: uppercase;
}

.reverse{
  color: var(--blue);
  background-color: var(--white);
}

.reverse:hover{
  border-color: #777;
  background-color: #bbb;
  color: white;
}

.border-none{
  border: none !important;
}
</style>
