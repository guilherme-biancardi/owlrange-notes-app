<template>
  <form>
    <InputLoginComponent
      v-for="(input, index) in state.inputs"
      :key="index"
      :type="input.type"
      :placeholder="input.placeholder"
      :icon="input.icon"
    ></InputLoginComponent>
    <RouterLink to="/forgot-password" class="forgot-link">
      Esqueceu sua senha?
    </RouterLink>
    <button type="submit">
        <p>Entrar</p>
        <IconComponent :icon="'mdi-arrow-right'" :size="22"></IconComponent>
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import InputLoginComponent from "@/components/login/InputLoginComponent.vue";
import IconComponent from "@/components/utilities/IconComponent.vue";

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
</script>

<style scoped>
form {
  min-width: 370px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 28px;
}

.forgot-link {
  color: var(--blue);
  text-decoration: underline;
  align-self: flex-start;
}

button{
    background-color: var(--blue);
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    cursor: pointer;
    transition: all .2s ease;
}

button:hover{
    background-color: var(--blue-medium);
}

button > p{
    font-size: 1.3em;
}
</style>
