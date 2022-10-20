<template>
  <header>
    <div>
      <div
        class="breadcrumb"
        v-for="(location, index) in locations"
        :key="index"
      >
        <p>{{ location }}</p>
        <IconComponent
          :icon="'mdi-chevron-right'"
          :size="20"
          v-if="index !== locations.length - 1"
        ></IconComponent>
      </div>
    </div>
    <button @click="router.back()">
      <IconComponent :icon="'mdi-arrow-left-top'" :size="20"></IconComponent>
      <p>voltar</p>
    </button>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import IconComponent from "./IconComponent.vue";

const router = useRouter();

defineProps({
  locations: Array,
});
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: flex-start;
}

header > button {
  display: flex;
  align-items: center;
  column-gap: 5px;
  background-color: transparent;
  text-transform: capitalize;
  font-size: 0.9em;
  cursor: pointer;
}

header > div,
.breadcrumb {
  display: flex;
  align-items: center;
  column-gap: 2px;
}
</style>
