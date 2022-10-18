<template>
    <MenuComponent></MenuComponent>
    <main>
      <RouterView v-slot="{ Component }" name="main">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
</script>

<style scoped>
main {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-y: overlay;
  padding: 28px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  margin-top: -12px;
}

.fade-leave-to {
  margin-top: 8px;
}
</style>
