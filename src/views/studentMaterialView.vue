<template>
  <div class="container">
    <h2>Material de estudo</h2>

    <div class="add-material">
      <h3>Possui um novo material para estudar?</h3>
      <router-link to="add-material">
        <button class="btn">
          <icon-component icon="mdi-plus" size="24"></icon-component>
          <p>ADICIONAR MATERIAL</p>
        </button>
      </router-link>
    </div>

    <div>
      <h3>Acesse seus materiais:</h3>
      <div class="filter">
        <icon-component icon="mdi-filter-outline" size="24"></icon-component>
        <p>Mostrar Todos</p>
      </div>
    </div>

    <div class="search">
      <h3>Pesquise pelo nome:</h3>
      <div class="search-bar">
        <icon-component icon="mdi-magnify" size="24"></icon-component>
        <input
          type="text"
          class="txtSearch"
          placeholder="Digite o nome do material"
        />
      </div>      
    </div>

    <h3 class="search-paste">Ou encontre nas pastas:</h3>

  <MaterialProgress></MaterialProgress>

  </div>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import MaterialProgress from "@/components/studentMaterial.vue/MaterialProgress.vue";

</script>

<style scoped>
.container {
  padding: 12px 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.add-material {
  padding: 36px 0px;
}

button {
  background-color: var(--blue);
  color: white;
  border-radius: 8px;
  padding: 12px 24px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 18px 0px;
}
button:hover {
  background-color: var(--blue-medium);
}
button > p {
  font-size: 1.25em;
}
.filter {
  display: flex;
  margin: 18px 0px;
  gap: 10px;
}


.search{
padding: 36px 0px;
}
.search-bar {
  background-color: var(--white);
  display: flex;
  border-radius: 8px;
  width: 600px;
  padding-left: 10px;
  margin: 18px 0px;
}

.txtSearch {
  padding: 14px 10px;
  font-size: 1.1em;
  border: none;
}
.search-paste {
  padding-bottom: 36px;
}
</style>
