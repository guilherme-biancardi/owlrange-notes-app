<template>
  <div>
    <h2>Material de estudo</h2>

    <div>
      <h3>Possui um novo material para estudar?</h3>
      <router-link to="/add-material">
        <button>
          <icon-component icon="mdi-plus" size="24"></icon-component>
          ADICIONAR MATERIAL
        </button>
      </router-link>
    </div>

    <div class="filter">
      <h3>Acesse seus materiais:</h3>
      <icon-component icon="mdi-filter-outline" size="24"></icon-component>
      <p>Mostrar Todos</p>
    </div>
    <div class="pesquise">
      <h3>Pesquise pelo nome:</h3>
      <div class="search">
        <icon-component icon="mdi-magnify" size="24"></icon-component>
        <input
          type="text"
          id="txtSearch"
          placeholder="Digite o nome do material"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import IconComponent from "@/components/utilities/IconComponent.vue";

const state = reactive({});
</script>

<style scoped>
button {
  background-color: var(--blue);
  color: white;
  border-radius: 4px;
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

.search {
  background-color: var(--white);
  display: flex;
  border-radius: 8px;
  width: 300px;
  padding-left: 10px;
}

#txtSearch {
  padding-left: 5px;
  font-style: italic;
  font-size: 1rem;
  border: none;
  padding: 12px;
}
</style>
