<template>
  <div class="cronogram">
    <div class="cronogram-header">
      <h1>Cronograma de Metas</h1>
      <button class="btn-goals">
        <IconComponent :icon="'mdi-plus'" :size="24"></IconComponent>
        <p>adicionar meta</p>
      </button>
    </div>
    <CalendarComponent></CalendarComponent>
  </div>
</template>

<script setup>
import CalendarComponent from "../components/studentGoals/CalendarComponent.vue";
import IconComponent from "@/components/utilities/IconComponent.vue";
</script>

<style scoped>
.cronogram{
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
}

.cronogram-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cronogram-header h1{
  font-size: 1.5em;
}

.cronogram-header button{
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: var(--blue);
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9em;
  column-gap: 6px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
