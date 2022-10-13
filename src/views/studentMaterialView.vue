<template>
  <div>
    <h1>Material de estudo</h1>
    <p>Possui um novo material para estudar?</p>

    <router-link to="form-add-material">
      <button>+ ADICIONAR MATERIAL</button>
    </router-link>


  </div>
</template>

<script setup>
import FormAddMaterial from "../components/studentMaterial/FormAddMaterial.vue";
</script>

<style scoped></style>
