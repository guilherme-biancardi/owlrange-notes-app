<template>
  <section class="student-area">
    <article v-for="(article, index) in state.articles" :key="index">
      <h1>{{ article.title }}</h1>
      <component :is="article.component"></component>
    </article>
  </section>
</template>

<script setup>
import CardsMenu from "@/components/studentArea/CardsMenu.vue";
import CronogramResume from "@/components/studentArea/CronogramResume.vue";
import { reactive, markRaw} from "vue";

const state = reactive({
  articles: [
    {
      title: "O que vc deseja fazer?",
      component: markRaw(CardsMenu),
    },
    {
      title: 'Como está o seu progresso hoje?',
      component: markRaw(CronogramResume)
    }
  ],
});
</script>

<style scoped>
.student-area, article{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

article{
  row-gap: 20px;
}

article > h1{
  font-size: 1.25em;
}
</style>
