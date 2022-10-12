<template>
  <div class="container">
    <div>
      <h1>O que vc deseja fazer?</h1>
      <CardsMenu></CardsMenu>
    </div>

    <div>
      <h1>Como está o seu progresso hoje?</h1>
      <CronogramResume></CronogramResume>
    </div>
  </div>
</template>

<script setup>
import CardsMenu from "@/components/studentArea/CardsMenu.vue";
import CronogramResume from "@/components/studentArea/CronogramResume.vue";
</script>

<style scoped>
.container {
  align-content: flex-start;
  flex: 1;
  padding: 20px;
}
</style>
