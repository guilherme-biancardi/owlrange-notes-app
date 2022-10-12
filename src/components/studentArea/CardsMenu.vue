<template>
  <div class="card-container">
    <div class="card" v-for="(card, index) in state.cards" :key="index">
      <img :src="card.image" :alt="card.imageAlt" />
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
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
      description:
        "Adicione novas metas ao seu cronograma de estudos",
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
  display: flex;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 12px;
  height: 240px;
  width: 160px;
  margin: 40px;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border: 3px solid transparent;
  transition: all .1s ease;
}

.card img {
  display: block;
  margin: 0 auto;
  color: #747474;
  width: 45px;
  height: 45px;
}

.card:hover {
  border-color: var(--blue);
}

.card h2 {
  text-align: center;
  padding-top: 12px;
  font-family: Roboto;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #747474;
  text-transform: uppercase;
}
.card p {
  text-align: center;
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 0.85em;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-align: center;
  color: #747474;
}
</style>
