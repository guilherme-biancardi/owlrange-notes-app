<template>
  <nav>
    <RouterLink to="student-area" class="logo-link"
      ><img src="../assets/logo-owlrange.svg" alt="logo da owlrange"
    /></RouterLink>
    <hr />
    <div class="user">
      <img src="../assets/user.svg" class="user-photo" />
      <div class="user-text">
        <h2>Jamile</h2>
        <p>assinatura gratuita</p>
      </div>
    </div>
    <ul class="menu-list">
      <li v-for="(item, index) in state.menuItems" :key="index">
        <RouterLink :to="item.route">
          <IconComponent :icon="item.icon" :size="24"></IconComponent>
          <p>{{ item.text }}</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from "vue";
import IconComponent from "./utilities/IconComponent.vue";

const state = reactive({
  menuItems: [
    {
      icon: "mdi-account-school-outline",
      route: "student-area",
      text: "Área do Estudante",
    },
    {
      icon: "mdi-calendar-blank-outline",
      route: "goals-schedule",
      text: "Cronograma de Metas",
    },
    {
      icon: "mdi-notebook-edit-outline",
      route: "material-student",
      text: "Material de Estudo",
    },
    {
      icon: "mdi-account-outline",
      route: "account",
      text: "Perfil",
    },
    {
      icon: "mdi-cog-outline",
      route: "settings",
      text: "Configurações",
    },
  ],
});
</script>

<style scoped>
* {
  --text-light: rgba(71, 71, 71, 0.55);
}

nav {
  position: fixed;
  width: 240px;
  background-color: var(--white);
  padding: 12px 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
}

.logo-link{
  align-self: center;
}

.logo-link img {
  max-width: 150px;
}

hr {
  border: 1px solid var(--white-light);
  height: 0;
}

.user {
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.user-photo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.user-text {
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
}

.user-text h2 {
  font-size: 1.2em;
  font-weight: 400;
}

.user-text p {
  font-size: 0.8em;
  color: var(--text-light);
  font-style: italic;
}

.menu-list {
  width: 100%;
  display: flex;
  row-gap: 18px;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
}

.menu-list a {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 0.85em;
  color: var(--text);
  font-weight: 500;
  border-radius: 8px;
  padding: 6px;
  transition: all 0.1s ease;
}

.menu-list a i {
  color: var(--blue);
}

.menu-list a:hover {
  background-color: var(--blue-medium);
  color: var(--white);
  transform: scale(1.1) translateX(8px);
}

.menu-list a:hover i {
  color: white;
}
</style>
