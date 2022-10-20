<template>
  <div class="cronogram">
    <div class="cronogram-header">
      <h1>Cronograma de Metas</h1>
      <button class="btn-goals">
        <IconComponent :icon="'mdi-plus'" :size="24"></IconComponent>
        <p>adicionar meta</p>
      </button>
    </div>
    <CalendarComponent
      @setDayEvents="setDayEvents"
      :events="[
        { title: 'teste', date: '19/10/2022', color: 'purple' },
        { title: 'teste', date: '19/10/2022', color: 'orange' },
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
import IconComponent from "@/components/utilities/IconComponent.vue";
import CalendarComponent from "@/components/studentGoals/CalendarComponent.vue";
import EventsModal from "@/components/studentGoals/EventsModal.vue";
import { reactive } from "vue";

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
</script>

<style scoped>
.cronogram {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
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

.cronogram-header button {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: var(--blue);
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9em;
  column-gap: 6px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
