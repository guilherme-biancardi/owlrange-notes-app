<template>
  <ul class="material-list">
    <MaterialsComponentProgress
      v-for="(folder, index) in folders"
      :key="index"
      :title="folder.title"
      :date-expire="folder.dateExpire"
      :color="folder.color"
      :material="folder.material"
      :progress="countProgress(folder.material)"
    ></MaterialsComponentProgress>
  </ul>
</template>

<script setup>
import MaterialsComponentProgress from './materialProgress/MaterialsComponentProgress.vue';


const props = defineProps({
  folders: Array,
});

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
</style>
