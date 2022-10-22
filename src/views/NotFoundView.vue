<template>
  <div class="not-found">
    <div>
      <h1>Parece que essa página não existe</h1>
      <p>Verifique o endereço e tente novamente</p>
    </div>
    <img
      src="../assets/not-found.svg"
      alt="pessoa com deficiência visual atravessando uma rua"
    />
    <ButtonComponent
      @click="router.push('/app/student-area')"
      text="voltar"
      icon="mdi-arrow-u-left-top"
      :borderRadius="24"
    ></ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { useApp } from "@/js/app";

const { router } = useApp();
</script>

<style scoped>
.not-found,
.not-found > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
}

.not-found {
  width: 100%;
  height: 100vh;
  background-color: var(--white);
}

.not-found > div {
  row-gap: 5px;
}

.not-found img {
  max-width: 325px;
  object-fit: cover;
  object-position: center;
}

h1 {
  color: var(--blue);
  font-size: 1.8em;
}

p {
  font-size: 1.15em;
  color: #747474;
}
</style>
