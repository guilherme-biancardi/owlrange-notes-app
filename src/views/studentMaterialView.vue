<template>
  <div class="student-material">
    <h2>Material de estudo</h2>

    <div class="add-material">
      <h3>Possui um novo material para estudar?</h3>
      <ButtonComponent
        :icon="'mdi-plus'"
        :text="'adicionar material'"
        @click="addMaterial"
      ></ButtonComponent>
    </div>

    <div class="filter-content">
      <h3>Acesse seus materiais:</h3>
      <div class="filter">
        <icon-component icon="mdi-filter-outline" :size="24"></icon-component>
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

    <div class="folders">
      <h3>Ou encontre nas pastas:</h3>
      <MaterialProgress :folders="searchFolders"></MaterialProgress>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import MaterialProgress from "@/components/studentMaterial/MaterialProgress.vue";
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const state = reactive({
  search: "",
  folders: [
    {
      completedProgress: 0,
      title: "Como treinar costas deitado",
      color: "aqua",
      dateExpire: "30/12/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        }
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
      title: "Engravidar sem transar (golpe em ricos)",
      color: "purple",
      dateExpire: "09/11/2022",
      material: [
        {
          title: "Poderes Administrativos",
          status: false,
        }
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
        }
      ],
    },
    {
      completedProgress: 0,
      title: "Direito Machistas",
      color: "yellow",
      dateExpire: "29/12/2024",
      material: [
        {
          title: "Poderes Administrativos",
          status: true,
        }
      ],
    },
  ],
});

const addMaterial = () => router.push('add-material')

const searchFolders = computed(() =>
  state.folders.filter(({ title }) =>
    title.toLowerCase().match(state.search.toLowerCase())
  )
);
</script>

<style scoped>
h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.05em;
}

.student-material {
  padding: 0px 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.student-material :is(.add-material, .filter-content, .search, .folders) {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar {
  position: relative;
}

.search-bar > input {
  background-color: var(--white);
  padding: 12px 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  font-size: 1em;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
}

.search-icon {
  position: absolute;
  left: 8px;
  top: 10px;
  color: #747474;
}
</style>
