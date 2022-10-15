<template>
  <div class="login-grid">
    <img src="../../assets/logo-owlrange.svg" alt="logo da olwrange" />
    <div class="login-content">
      <ul class="buttons">
        <li
          v-for="(button, index) in state.buttons"
          :key="index"
          :class="{ 'button-selected': state.buttonSelected === index }"
        >
          <RouterLink :to="button.to">
            {{ button.text }}
          </RouterLink>
        </li>
      </ul>
      <RouterView name="login"> </RouterView>
    </div>
    <div class="login-background">
      <div class="login-image">
        <h2>Não deixe mais vencer o prazo de seus estudos.</h2>
        <p>Conquiste hoje suas metas!</p>
        <img
          src="../../assets/login-image.svg"
          alt="imagem ilustrativa de uma mulher sentada organizando e discutindo suas metas"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentRoute = computed(() => route.fullPath);

const setButtonSelected = () =>
  (state.buttonSelected = currentRoute.value === "/sign-in" ? 0 : 1);

watch(currentRoute, setButtonSelected);
onMounted(setButtonSelected);

const state = reactive({
  buttonSelected: 0,
  buttons: [
    {
      to: "sign-in",
      text: "login",
    },
    {
      to: "register",
      text: "registrar",
    },
  ],
});
</script>

<style scoped>
.login-grid {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  --buttons: #ddd;
  --buttons-text: #bbb;
}

.login-grid > img {
  position: absolute;
  width: 150px;
  top: 4px;
  left: 12px;
}

.login-content {
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 32px;
}

.buttons,
.buttons li a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons li {
  min-width: 140px;
  height: 40px;
  text-align: center;
  border: 3px solid var(--buttons);
  text-transform: capitalize;
  transition: all 0.15s ease;
}

.buttons li > a {
  width: 100%;
  height: 100%;
  color: var(--buttons-text);
  font-weight: 500;
  font-size: 1.1em;
}

.button-selected {
  border-color: var(--blue) !important;
}

.button-selected a {
  color: var(--blue-medium) !important;
}

.login-background {
  background: url("../../assets/mesh-634.png");
  background-size: cover;
  background-position: bottom right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-image {
  width: 60%;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 14px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 1px 1px 16px 5px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(8px);
  padding: 16px 24px;
  border-radius: 16px;
}

.login-image img {
  max-width: 100%;
  height: 270px;
  transform: translateY(-10px);
  filter: drop-shadow(1px 1px 12px rgba(255, 255, 255, 0.452));
}

.login-image :is(h2, p) {
  position: relative;
  padding: 8px 16px;
  border-radius: 10px;
}

.login-image :is(h2, p)::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.login-image h2 {
  color: white;
  background: linear-gradient(to right, var(--blue) 40%, var(--blue-medium));
  font-size: 1.25em;
}

.login-image h2::before {
  border-top: 17px solid var(--blue);
  top: 0px;
  left: -10px;
}

.login-image p {
  align-self: flex-end;
  font-size: 1.1em;
  background: linear-gradient(to right, white 40%, #eee);
  color: var(--blue);
}

.login-image p::before {
  border-bottom: 13px solid #eee;
  bottom: 0px;
  right: -11px;
}
</style>
