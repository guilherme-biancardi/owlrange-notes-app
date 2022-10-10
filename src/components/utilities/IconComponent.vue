<template>
  <i class="mdi" :class="icon" :style="`font-size: ${size}px`"></i>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: String,
  size: Number
});
</script>

<style scoped>
@import url("../../../node_modules/@mdi/font/css/materialdesignicons.min.css");

i {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
