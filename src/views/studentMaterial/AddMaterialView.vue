<template>
  <div class="add-material">
    <BreadcrumbComponent
      :locations="['Material de Estudo', 'Adicionar Material']"
    ></BreadcrumbComponent>
    <h2>Adicionar material de estudo</h2>
    <!-- <FormAddMaterial></FormAddMaterial> -->
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BreadcrumbComponent from "@/components/utilities/BreadcrumbComponent.vue";
// import FormAddMaterial from "../../components/studentMaterial/FormAddMaterial.vue";

const state = reactive({});
</script>

<style scoped>
.add-material {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
