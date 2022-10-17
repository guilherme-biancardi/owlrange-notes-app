<template>
  <ul class="material-list">
    <MaterialsComponentProgress
      v-for="(folder, index) in state.folders"
      :key="index"
      :title="folder.title"
      :date-expire="folder.dateExpire"
      :color="folder.color"
      :material="folder.material"
      :progress="folder.completedProgress"
    ></MaterialsComponentProgress>
  </ul>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import MaterialsComponentProgress from "./materialProgress/MaterialsComponentProgress.vue";

const state = reactive({
  folders: [
    {
      completedProgress: 0,
      title: "Direito Administrativo",
      color: "aqua",
      dateExpire: "30/10/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        },
        {
          title: "Controle da Administração pública",
          status: true,
        },
        {
          title: "Agentes Públicos",
          status: false,
        },
        {
          title: "Responsabilidade Civil do Estado",
          status: false,
        },
      ],
    },
    {
      completedProgress: 0,
      title: "Direito Constitucional",
      color: "yellow",
      dateExpire: "30/10/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        },
      ],
    },
    {
      completedProgress: 0,
      title: "Legislação",
      color: "purple",
      dateExpire: "30/10/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: false,
        },
        {
          title: "Controle da Administração pública",
          status: false,
        },
        {
          title: "Agentes Públicos",
          status: false,
        },
        {
          title: "Responsabilidade Civil do Estado",
          status: false,
        },
        {
          title: "Meu gato de botas",
          status: true,
        },
      ],
    },
  ],
});

onMounted(() => {
  state.folders.forEach(({ material }, index) => {
    material.forEach(({ status }) => {
      state.folders[index].completedProgress += status;
    });
  });
});
</script>

<style scoped>
.material-list {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
}
</style>
