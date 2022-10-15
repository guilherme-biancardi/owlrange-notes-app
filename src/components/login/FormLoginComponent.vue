<template>
  <form @submit.prevent="emit('submitForm')">
    <InputLoginComponent
      v-for="(input, index) in inputs"
      :key="index"
      :type="input.type"
      :placeholder="input.placeholder"
      :icon="input.icon"
    ></InputLoginComponent>
    <slot></slot>
    <button type="submit">
      <p>{{ buttonText }}</p>
      <IconComponent :icon="'mdi-arrow-right'" :size="22"></IconComponent>
    </button>
  </form>
</template>

<script setup>
import InputLoginComponent from "./InputLoginComponent.vue";
import IconComponent from "../utilities/IconComponent.vue";

const emit = defineEmits(["submitForm"]);

defineProps({
  inputs: Array,
  buttonText: String,
});
</script>

<style scoped>
form {
  min-width: 370px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 32px;
}

button {
  background-color: var(--blue);
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: var(--blue-medium);
}

button > p {
  font-size: 1.3em;
}
</style>
