<template>
  <li class="material" :style="`border-color: var(--${color})`">
    <div class="material-text">
      <h2>{{ title }}</h2>
      <div class="material-expire">
        <p>
          {{ material.length }}
          {{ material.length > 1 ? "materiais" : "material" }}
        </p>
        <p>{{ dateExpire }}</p>
      </div>
    </div>
    <div class="progress">
      <ProgressBar
        size="100"
        :max="material.length"
        :progressCount="progress"
      ></ProgressBar>

      <IconComponent icon="mdi-chevron-down" size="36"></IconComponent>
    </div>
  </li>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import ProgressBar from "@/components/utilities/ProgressBar.vue";

const props = defineProps({
  title: String,
  color: String,
  dateExpire: String,
  material: [],
  progress: Number,
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
.material-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.material-expire {
  display: flex;
  gap: 12px;
}
.progress {
  display: flex;
  gap: 12px;
}
</style>
