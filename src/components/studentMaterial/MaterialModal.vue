<template>
  <ModalComponent :width="425" :background="'#f9f9f9'" @close="emit('close')">
    <h1>teste</h1>
    {{ materials }}
  </ModalComponent>
</template>

<script setup>
import ModalComponent from "../utilities/ModalComponent.vue";

const emit = defineEmits(["close"]);

defineProps({
  materials: Array,
});
</script>

<style scoped></style>
