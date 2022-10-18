<template>
  <div class="add-material">
    <header>
      <div class="locations">
        <p>Material de Estudo</p>
        <IconComponent :icon="'mdi-chevron-right'" :size="20"></IconComponent>
        <p>Adicionar Material</p>
      </div>
      <button @click="router.back()">
        <IconComponent :icon="'mdi-arrow-left-top'" :size="20"></IconComponent>
        <p>voltar</p>
      </button>
    </header>
    <h2>Adicionar material de estudo</h2>
    <!-- <FormAddMaterial></FormAddMaterial> -->
  </div>
</template>

<script setup>
import { reactive } from "vue";
import IconComponent from "@/components/utilities/IconComponent.vue";
import { useRouter } from "vue-router";
// import FormAddMaterial from "../../components/studentMaterial/FormAddMaterial.vue";

const state = reactive({});
const router = useRouter()
</script>

<style scoped>
.add-material{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: flex-start;
}

header > button{
  display: flex;
  align-items: center;
  column-gap: 5px;
  background-color: transparent;
  text-transform: capitalize;
  font-size: 0.9em;
  cursor: pointer;
}

.locations {
  display: flex;
  align-items: center;
  column-gap: 2px;
}
</style>
