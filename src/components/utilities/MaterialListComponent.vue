<template>
  <div class="material-list-content">
    <div class="filter-content">
      <h3>{{ filterTitle }}</h3>
      <div class="filter">
        <IconComponent :icon="'mdi-filter-outline'" :size="24"></IconComponent>
        <p>Mostrar Todos</p>
      </div>
    </div>

    <div class="search">
      <h3>Pesquise pelo nome:</h3>
      <div class="search-bar">
        <icon-component
          icon="mdi-magnify"
          :size="24"
          class="search-icon"
        ></icon-component>
        <input
          type="text"
          placeholder="Digite o nome do material"
          v-model="state.search"
        />
      </div>
    </div>

    <div class="folders" v-if="searchFolders.length">
      <h3>Ou encontre nas pastas:</h3>
      <ul class="material-list">
        <MaterialsComponentProgress
          v-for="(folder, index) in searchFolders"
          :key="index"
          :title="folder.title"
          :date-expire="folder.dateExpire"
          :color="folder.color"
          :material="folder.material"
          :progress="countProgress(folder.material)"
          @showMaterials="emit('showMaterialModal', folder.material)"
        ></MaterialsComponentProgress>
      </ul>
    </div>
    <NotFoldersComponent v-else></NotFoldersComponent>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import NotFoldersComponent from "../materialList/NotFoldersComponent.vue";
import IconComponent from "./IconComponent.vue";
import MaterialsComponentProgress from "../materialList/materialProgress/MaterialsComponentProgress.vue";

defineProps({
  filterTitle: String,
});

const emit = defineEmits(['showMaterialModal'])

const state = reactive({
  search: "",
  folders: [
    {
      completedProgress: 0,
      title: "Como treinar costas deitado",
      color: "purple",
      dateExpire: "30/12/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        },
      ],
    },
    {
      completedProgress: 0,
      title: "Javascript avançado",
      color: "orange",
      dateExpire: "29/10/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        },
        {
          title: "Poderes Administrativos",
          status: false,
        },
      ],
    },
    {
      completedProgress: 0,
      title: "Direito Administrativo",
      color: "aqua",
      dateExpire: "29/10/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        },
      ],
    },
  ],
});

const searchFolders = computed(() =>
  state.folders.filter(({ title }) =>
    title.toLowerCase().match(state.search.toLowerCase())
  )
);


const countProgress = (materials) =>
  materials.filter(({ status }) => status).length;
</script>

<style scoped>
.material-list {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  width: 100%;
}

.material-list-content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

h2 {
  font-size: 1.5em;
}

.material-list-content :is(.filter-content, .search, .folders) {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.filter {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #747474;
}

.search-bar {
  position: relative;
}

.search-bar > input {
  background-color: var(--white);
  padding: 12px 44px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  font-size: 1em;
  box-shadow: var(--shadow);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 10px;
  color: #747474;
}
</style>
