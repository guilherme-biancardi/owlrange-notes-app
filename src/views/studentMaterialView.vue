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

    <MaterialListComponent :filterTitle="'Acessar material:'">
    </MaterialListComponent>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { useRouter } from "vue-router";
import MaterialListComponent from "@/components/utilities/MaterialListComponent.vue";

const router = useRouter();

const addMaterial = () => router.push("add-material");
</script>

<style scoped>
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

.add-material {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
</style>
