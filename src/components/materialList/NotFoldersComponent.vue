<template>
  <div class="no-data">
    <img src="../../assets/undraw_no_data_re_kwbl.svg" alt="" />
    <div>
      <IconComponent :icon="'mdi-package-variant'" :size="25"></IconComponent>
      <p>Parece que você não possui materiais ainda.</p>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "../utilities/IconComponent.vue";
</script>

<style scoped>
.no-data {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 24px;
  row-gap: 16px;
  border-radius: 12px;
  color: var(--blue);
  align-self: center;
}

img {
  max-width: 170px;
}

.no-data > div{
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
