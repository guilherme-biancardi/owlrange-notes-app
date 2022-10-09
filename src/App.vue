<template>
  <div>
    {{ state.teste }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  teste: "fhhh",
});
</script>

<style scoped></style>
