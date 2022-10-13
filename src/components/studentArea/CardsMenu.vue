<template>
  <div class="card-container">
    <div class="card" v-for="(card, index) in state.cards" :key="index">
      <img :src="card.image" :alt="card.imageAlt" />
      <div class="card-text">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  cards: [
    {
      image: require("../../assets/adicionar-material.svg"),
      title: "adicionar material",
      description:
        "Adicione novos materiais de estudo e escolha em que pastas vão ficar",
      imageAlt: "icone adicionar material",
    },
    {
      image: require("../../assets/acessar-material.svg"),
      title: "acessar material",
      description:
        "Veja e edite todos os materiais de estudo adicionados em sua conta",
      imageAlt: "icone acessar material",
    },
    {
      image: require("../../assets/definir-metas.svg"),
      title: "definir metas",
      description: "Adicione novas metas ao seu cronograma de estudos",
      imageAlt: "icone definir metas",
    },
    {
      image: require("../../assets/ver-metas.svg"),
      title: "ver todas as metas",
      description:
        "Acesse as metas definidas por dia em seu cronograma e acompanhe o progresso diário",
      imageAlt: "icone ver metas",
    },
  ],
});
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
}

.card {
  max-width: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding: 20px 12px;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
  border: 3px solid transparent;
  transition: all 0.1s ease;
}

.card img {
  color: #747474;
  width: 35px;
  height: 35px;
}

.card:hover {
  border-color: var(--blue-medium);
}

.card-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  row-gap: 12px;
}

.card-text h2 {
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  color: #747474;
  text-transform: uppercase;
  max-width: 10ch;
}
.card-text p {
  font-size: 0.85em;
  font-weight: 500;
  text-align: center;
  color: #747474;
}
</style>
