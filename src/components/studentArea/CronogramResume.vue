<template>
  <div class="cronogram-container">
    <h3 class="date-title">{{ date }}</h3>
    <div>
      <ul class="category-list">
        <li
          v-for="(category, index) in state.categories"
          :key="index"
          class="category"
        >
          <div class="icons">
            <img
              src="../../assets/seta.svg"
              alt="icone de seta inidcando uma categoria"
            />
            <div class="circle"></div>
            <IconComponent
              :icon="category.icon"
              :size="category?.size || 18"
            ></IconComponent>
          </div>

          <div class="category-text">
            <h3>{{ category.title }}</h3>
            <p>{{ category.institution }}</p>
          </div>

          <div>
            <button class="btn-category">
              <span>{{ buttonProgress[category.status] }}</span>
              <IconComponent
                :icon="'mdi-chevron-down'"
                :size="24"
              ></IconComponent>
            </button>
          </div>
        </li>
      </ul>
      <ProgressBar
        :size="200"
        :textSize="1.3"
        :text="'concluído'"
        :max="state.categories.length"
        :progressCount="state.completedProgress"
      ></ProgressBar>
    </div>
  </div>
</template>

<script setup>
import { useApp } from "@/js/app";
import { computed, onMounted, reactive } from "vue";
import IconComponent from "../utilities/IconComponent.vue";
import ProgressBar from "../utilities/ProgressBar.vue";

const { moment } = useApp();

const date = computed(() => moment().locale("pt-br").format("dddd, ll"));

const state = reactive({
  completedProgress: 0,
  categories: [
    {
      title: "Organização da Administração Pública",
      institution: "Gran Cursos",
      icon: "mdi-video-outline",
      size: 22,
      status: "complete",
    },
    {
      title: "Princípio da Administração Pública",
      institution: "Qconcursos",
      icon: "mdi-open-in-new",
      status: "complete",
    },
    {
      title: "Responsabilidade Civil do Estado",
      institution: "Passei Direto",
      icon: "mdi-link-variant",
      status: "complete",
    },
    {
      title: "Controle da Administração Pública",
      institution: "Gran Cursos",
      icon: "mdi-link-variant",
      status: "complete",
    },
  ],
});

const buttonProgress = {
  complete: "concluído",
  pending: "pendente",
};

onMounted(() => {
  state.categories.forEach(({ status }) =>
    status === "complete" ? state.completedProgress++ : null
  );
});
</script>

<style scoped>
.cronogram-container {
  display: flex;
  flex-direction: column;
  padding: 32px 36px;
  background-color: var(--white);
  row-gap: 48px;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
}

.cronogram-container > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
}

.date-title {
  align-self: center;
}

.date-title::first-letter {
  text-transform: uppercase;
}

.category {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
}

.category-text {
  display: flex;
  flex-direction: column;
  max-width: 29ch;
  row-gap: 2px;
}

.category h3 {
  font-weight: 500;
  font-size: 1.1em;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.category p {
  color: #747474;
  font-weight: 300;
  font-size: 0.95em;
}

.text {
  width: 360px;
}

.btn-category {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 130px;
  height: 36px;
  border-radius: 8px;
  padding: 4px 8px;
  gap: 4px;
  font-weight: 600;
  color: var(--blue);
  border: 2px solid var(--blue);
  box-shadow: 0px 4.5283px 4.5283px rgba(0, 0, 0, 0.1);
}

.btn-category span {
  text-transform: uppercase;
}

.icons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.icons img {
  max-width: 18px;
}

.circle {
  background: #ff6b00;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
</style>
