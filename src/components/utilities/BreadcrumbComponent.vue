<template>
  <header>
    <div>
      <RouterLink
        :to="location.path"
        class="breadcrumb"
        v-for="(location, index) in breadcrumb"
        :key="index"
      >
        <p>{{ location.name }}</p>
        <IconComponent
          :icon="'mdi-chevron-right'"
          :size="20"
          v-if="index !== breadcrumb.length - 1"
        ></IconComponent>
      </RouterLink>
    </div>
    <button @click="router.back">
      <IconComponent :icon="'mdi-arrow-left-top'" :size="20"></IconComponent>
      <p>voltar</p>
    </button>
  </header>
</template>

<script setup>
import { useApp } from "@/js/app";
import { computed } from "vue";
import IconComponent from "./IconComponent.vue";

const { router, route } = useApp();

const breadcrumb = computed(() => route.meta.breadcrumb);
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

.breadcrumb {
  color: var(--text);
}

.breadcrumb:hover p {
  text-decoration: underline;
}
</style>
