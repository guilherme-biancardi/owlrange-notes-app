<template>
  <div class="cronogram">
    <BreadcrumbComponent></BreadcrumbComponent>
    <div class="cronogram-header">
      <h1>Cronograma de Metas</h1>
      <ButtonComponent
        :icon="'mdi-plus'"
        :text="'adicionar meta'"
        @click="addGoal"
      ></ButtonComponent>
    </div>
    <CalendarComponent
      @setDayEvents="setDayEvents"
      :events="[
        { title: 'teste', date: '19/10/2022', color: 'purple' },
        { title: 'teste', date: '20/10/2022', color: 'orange' },
        { title: 'teste', date: '21/10/2022', color: 'orange' },
        { title: 'teste', date: '31/12/2022', color: 'purple' },
      ]"
    ></CalendarComponent>
    <EventsModal
      :events="state.dayEvents?.events"
      :day="state.dayEvents?.day"
      v-if="state.eventsModalVisibility"
      @close="state.eventsModalVisibility = false"
    ></EventsModal>
  </div>
</template>

<script setup>
import CalendarComponent from "@/components/studentGoals/CalendarComponent.vue";
import EventsModal from "@/components/studentGoals/EventsModal.vue";
import { reactive } from "vue";
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { useRouter } from "vue-router";
import BreadcrumbComponent from "@/components/utilities/BreadcrumbComponent.vue";

const router = useRouter()

const state = reactive({
  dayEvents: {
    events: [],
    day: "19/10/2022",
  },
  eventsModalVisibility: false,
});

const setDayEvents = (dayEvents) => {
  state.dayEvents = dayEvents;
  state.eventsModalVisibility = true;
};

const addGoal = () => router.push('add-goal')
</script>

<style scoped>
.cronogram {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
}

.cronogram-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cronogram-header h1 {
  font-size: 1.5em;
}
</style>
