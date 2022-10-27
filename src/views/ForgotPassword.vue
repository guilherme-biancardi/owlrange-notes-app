<template>
  <img src="../assets/logo-owlrange.svg" alt="logo da olwrange" />
  <div class="forgot">
    <div class="forgot-content">
      <div class="forgot-text">
        <div>
          <IconComponent :icon="content?.icon" :size="24"></IconComponent>
          <h2>{{ content?.title }}</h2>
        </div>
        <p>{{ content?.text }}</p>
      </div>
      <ButtonComponent
        v-if="state.isSent"
        @click="backButton"
        :icon="'mdi-arrow-left'"
        :text="'voltar'"
        :borderRadius="24"
      >
      </ButtonComponent>
      <FormLoginComponent
        v-else
        :buttonText="'Enviar'"
        :inputs="state.inputs"
        @submitForm="sentEmailForgotPassword"
      ></FormLoginComponent>
    </div>
  </div>
</template>

<script setup>
import FormLoginComponent from "@/components/login/FormLoginComponent.vue";
import { computed, reactive } from "vue";
import IconComponent from "@/components/utilities/IconComponent.vue";
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { useApp } from "@/js/app";

const { router } = useApp();

const content = computed(() => state.content[state.isSent]);

const sentEmailForgotPassword = () => (state.isSent = true);

const backButton = () => router.push("/sign-in");

const state = reactive({
  isSent: false,
  content: {
    true: {
      icon: "mdi-check",
      title: "E-mail enviado!",
      text: "Verifique sua caixa de entrada, spams ou lixo eletrônico",
    },
    false: {
      icon: "mdi-form-textbox-password",
      title: "Esqueceu sua senha?",
      text: "Enviaremos um e-mail para a alteração da senha",
    },
  },
  inputs: [
    {
      type: "email",
      placeholder: "Insira um e-mail válido",
      icon: "mdi-email",
    },
  ],
});
</script>

<style scoped>
img {
  position: absolute;
  width: 150px;
  top: 4px;
  left: 12px;
}

.forgot,
.forgot-content,
.forgot-text,
.forgot-text > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.forgot {
  width: 100%;
  height: 100vh;
}

.forgot-content {
  padding: 20px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: var(--shadow);
  flex-direction: column;
  row-gap: 24px;
}

.forgot-text {
  flex-direction: column;
  row-gap: 8px;
}

.forgot-text > div {
  column-gap: 8px;
}

.forgot-text > div * {
  color: var(--blue);
}

button {
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
  transition: all 0.2s ease;
}

button:hover {
  background-color: var(--blue-medium);
}

button > p {
  font-size: 1.3em;
}
</style>
