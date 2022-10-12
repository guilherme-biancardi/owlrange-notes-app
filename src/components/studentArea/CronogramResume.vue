<template>
  <div class="cronogram-container">
    <div>
      <h3 class="title">Quinta, 08 de set.</h3>
      <div
        class="category"
        v-for="(categoria, index) in state.categorias"
        :key="index"
      >
        <div class="icons">
          <img :src="categoria.image" :alt="categoria.imageAlt" />
          <div class="circle"></div>
          <IconComponent :icon="categoria.icon" :size="24"></IconComponent>
        </div>

        <div class="text">
          <h3>{{ categoria.title }}</h3>
          <p>{{ categoria.institution }}</p>
        </div>

        <div>
          <button class="btn">
            <span>CONCLUÍDO</span>
            <img src="../../assets/seta-button.svg" alt="abrir dropdown" />
          </button>
        </div>
      </div>




      
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import IconComponent from "../utilities/IconComponent.vue";

const state = reactive({
  categorias: [
    {
      image: require("../../assets/seta.svg"),
      title: "Organização da Administração Pública",
      institution: "Gran Cursos",
      imageAlt: "icone ir para categorias",
      icon: "mdi-video-minus-outline",
    },
    {
      image: require("../../assets/seta.svg"),
      title: "Princípio da Administração Pública",
      institution: "Qconcursos",
      imageAlt: "icone ir para categorias",
      icon: "mdi-export",
    },
    {
      image: require("../../assets/seta.svg"),
      title: "Responsabilidade Civil do Estado",
      institution: "Passei Direto",
      imageAlt: "icone ir para categorias",
      icon: "mdi-paperclip",
    },
    {
      image: require("../../assets/seta.svg"),
      title: "Controle da Administração Pública",
      institution: "Gran Cursos",
      imageAlt: "icone ir para categorias",
      icon: "mdi-paperclip",
    },
  ],
});
</script>

<style scoped>
.cronogram-container {
  display: flex;
  padding: 24px 12px;
}
.title {
  text-align: center;
}
.category {
  display: flex;
  align-items: center;
  font-family: "Roboto";
  gap: 16px;
  align-items: center;
  padding-top: 1.5rem;
  gap: 100px;
}
.category h3 {
  font-weight: 400;
}
.category p {
  color: #747474;
  font-weight: 300;
}

.text {
  width: 360px;
}
.circle {
  background: #ff6b00;
  border-radius: 50%;
  width: 14px;
  height: 14px;
}
.btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 36px;
  border-radius: 8px;
  padding: 4px 8px;
  gap: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  color: #0007ae;
  border: 2px solid #0007ae;
  box-shadow: 0px 4.5283px 4.5283px rgba(0, 0, 0, 0.1);
}
.icons {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
