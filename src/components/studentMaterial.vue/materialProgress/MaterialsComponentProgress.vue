<template>
  <li class="material">
    <div class="material-text">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <ProgressBar
      :size="60"
      :text="'concluído'"
      :max="state.categories.length"
      :progressCount="state.completedProgress"
    >
    </ProgressBar>
    <IconComponent :icon="icon" :size="size || 22"></IconComponent>
  </li>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import ProgressBar from "@/components/utilities/ProgressBar.vue";

const props = defineProps({
  title: String,
  numeroMaterials: String,
  dateExpire: String,
  color: String,
  dateExpire: String,
});
</script>

<style scoped>
* {
  --orange: #ff6b00;
  --aqua: #00e5ca;
  --purple: #e500c0;
  --yellow: #f1c40f;
}
.material {
  width: 100%;
  padding: 12px 28px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
  border-left: 18px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
