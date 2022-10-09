<template>
  <div class="app">
    <header>
      <img src="./assets/logo-owlrange.svg" alt="logo da owlrange notes" />
    </header>
    <div class="content">
      <MenuComponent></MenuComponent>
      <main>
        <RouterView></RouterView>
      </main>
    </div>
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
  --blue: #0007AE;
}

ul {
  list-style: none;
}

a{
  text-decoration: none;
}

.app {
  background-color: var(--white-light);
  color: var(--text);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

header {
  background-color: var(--white);
  padding: 10px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

header > img {
  max-width: 130px;
  object-fit: cover;
  object-position: center;
}

.content {
  display: flex;
  flex-grow: 1;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
