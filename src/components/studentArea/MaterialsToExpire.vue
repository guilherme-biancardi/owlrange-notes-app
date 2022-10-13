<template>
  <ul class="material-list">
    <MaterialComponent
      v-for="(material, index) in state.materials"
      :key="index"
      :title="material.title"
      :subtitle="material.subtitle"
      :color="material.color"
      :icon="material.icon"
      :size="material.size"
      :dateExpire="material.dateExpire"
    ></MaterialComponent>
  </ul>
</template>

<script setup>
import { reactive } from "vue";
import MaterialComponent from "./MaterialsToExpire/MaterialComponent.vue";

const state = reactive({
  materials: [
    {
      title: "Poderes Administrativos",
      subtitle: "Gran Cursos",
      color: "orange",
      icon: "mdi-video-outline",
      dateExpire: "25/10/2022",
      size: 26
    },
    {
      title: "Princípios da Administração Pública",
      subtitle: "Qconcursos",
      color: "yellow",
      icon: "mdi-open-in-new",
      dateExpire: "30/10/2022",
    },
    {
      title: "Direitos Sociais",
      subtitle: "Passei Direto",
      color: "aqua",
      icon: "mdi-link-variant",
      dateExpire: "10/11/2022",
    },
    {
      title: "Improbidade Administrativa (Lei)",
      subtitle: "Passei Direto",
      color: "purple",
      icon: "mdi-link-variant",
      dateExpire: "12/11/2022",
    },
  ],
});
</script>

<style scoped>
.material-list{
    display: flex;
    flex-direction: column;
    row-gap: 18px;
}
</style>
