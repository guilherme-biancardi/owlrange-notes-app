<template>
  <ul class="material-list">
    <MaterialsComponentProgress
      v-for="(material, index) in state.materials"
      :key="index"
      :title="material.title"
      :numero-materials="material.numeroMaterials"
      :date-expire="material.dateExpire"
      :color="material.color"
      :icon="material.icon"
    ></MaterialsComponentProgress>
  </ul>
</template>

<script setup>
import { reactive } from "vue";
import MaterialsComponentProgress from "./materialProgress/MaterialsComponentProgress.vue";

const state = reactive({
  materials: [
    {
      title: "Direito Administrativo",
      numeroMaterials: "7 materias",
      dateExpire: "Proximo material expira em 12 dias",
      color: "yellow",
      dateExpire: "30/10/2022",
      icon: "mdi-open",
    },
  ],
});
</script>

<style scoped>
.material-list {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}
</style>
