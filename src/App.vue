<template>
  <div class="content">
    <MenuComponent></MenuComponent>
    <main>
      <RouterView v-slot="{ Component }" name="main">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import MenuComponent from "./components/MenuComponent.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --white: #ffffff;
  --white-light: #f5f5f5;
  --text: #474747;
  --blue: #0007ae;
  --blue-medium: #292fdc;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  background-color: var(--white-light);
  color: var(--text);
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background: var(--blue-medium);
  border-radius: 12px;
}

.content {
  display: flex;
  height: 100vh;
}

main {
  width: calc(100% - 240px);
  margin-left: 240px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  overflow-y: overlay;
  padding: 32px;
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
