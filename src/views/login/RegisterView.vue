<template>
  <FormLoginComponent
    :inputs="state.inputs"
    :buttonText="'Registrar'"
    @submitForm="registerUser"
  ></FormLoginComponent>
</template>

<script setup>
import { reactive } from "vue";
import FormLoginComponent from "@/components/login/FormLoginComponent.vue";
import { useApp } from "@/js/app";

const { router } = useApp();

const state = reactive({
  inputs: [
    {
      type: "text",
      placeholder: "Insira seu nome",
      icon: "mdi-account",
    },
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
    {
      type: "password",
      placeholder: "Confirme sua senha",
      icon: "mdi-lock-check",
    },
  ],
});

const registerUser = () => router.push("/sign-in");
</script>

<style scoped></style>
