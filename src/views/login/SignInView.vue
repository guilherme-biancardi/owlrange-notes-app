<template>
  <FormLoginComponent
    :inputs="state.inputs"
    @submitForm="loginUser"
    :buttonText="'Entrar'"
  >
    <RouterLink to="/forgot-password" class="forgot-link">
      Esqueceu sua senha?
    </RouterLink>
  </FormLoginComponent>
</template>

<script setup>
import { reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import FormLoginComponent from "@/components/login/FormLoginComponent.vue";
import { useApp } from "@/js/app";

const userStore = useUserStore();
const { router } = useApp();

const state = reactive({
  inputs: [
    {
      type: "email",
      placeholder: "Insira seu e-mail",
      icon: "mdi-email",
    },
    {
      type: "password",
      placeholder: "Insira sua senha",
      icon: "mdi-lock",
    },
  ],
});

const loginUser = () => {
  userStore.setLogin(true);
  router.push("/app");
};
</script>

<style scoped>
.forgot-link {
  color: var(--blue);
  text-decoration: underline;
  align-self: flex-start;
}
</style>
