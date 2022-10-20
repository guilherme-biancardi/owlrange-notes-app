<template>
  <div class="calendar">
    <div class="buttons">
      <h2>{{ format(state.currentMonth, "MMMM yyyy", { locale: br }) }}</h2>
      <div class="buttons">
        <button class="btn-today" @click="resetToToday">hoje</button>
        <button
          v-for="(button, index) in state.buttons"
          :key="index"
          @click="button.click"
        >
          <IconComponent :icon="button.icon" :size="30"></IconComponent>
        </button>
      </div>
    </div>
    <div class="days">
      <div
        class="day"
        v-for="(day, index) in daysOfCurrentMonth()"
        :key="day"
        :class="{ today: isToday(day) }"
        :style="`grid-column: column(${index}); grid-column-start: 0`"
      >
        <p>
          {{ format(day, "eeeeee, dd MMM", { locale: br }) }}
        </p>
        <div class="events-content" v-if="getEventsByDay(day).length">
          <div
            class="event-header"
            @click="emit('setDayEvents', {events: getEventsByDay(day), day})"
          >
            <p>eventos</p>
            <IconComponent :icon="'mdi-calendar-text-outline'" :size="16"></IconComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  startOfMonth,
  addMonths,
  format,
  sub,
  add,
  eachDayOfInterval,
  isToday,
} from "date-fns";

import br from "date-fns/locale/pt-BR/index.js";
import { computed, reactive } from "vue";
import IconComponent from "../utilities/IconComponent.vue";

const props = defineProps({
  events: Array,
});

const emit = defineEmits(['setDayEvents'])

const substractOneMonth = () =>
  (state.currentMonth = sub(state.currentMonth, { months: 1 }));

const addOneMonth = () =>
  (state.currentMonth = add(state.currentMonth, { months: 1 }));

const state = reactive({
  currentMonth: startOfMonth(new Date()),
  buttons: [
    {
      icon: "mdi-chevron-left",
      click: substractOneMonth,
    },
    {
      icon: "mdi-chevron-right",
      click: addOneMonth,
    },
  ],
  modalVisibility: false,
  events: [],
});

const nextMonth = computed(() =>
  startOfMonth(addMonths(new Date(state.currentMonth), 1))
);

const daysOfCurrentMonth = () => {
  return eachDayOfInterval({
    start: state.currentMonth,
    end: sub(nextMonth.value, { days: 1 }),
  });
};

const resetToToday = () => (state.currentMonth = startOfMonth(new Date()));

const getEventsByDay = (day) =>
  props.events.filter((e) => e.date === format(day, "dd/M/yyyy"));

const showModalEvents = (events) => {
  (state.modalVisibility = true), (state.events = events);
};
</script>

<style scoped>
h2 {
  text-transform: capitalize;
}

.calendar {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  min-height: 510px;
  padding: 20px 28px;
  background-color: var(--white);
  border-radius: 12px;
}

.days {
  display: grid;
  text-align: center;
  grid-template-columns: repeat(7, 1fr);
  grid-column: 7;
  border-radius: 12px;
  overflow: auto;
}

.day {
  position: relative;
  padding: 8px;
  height: 83px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 4px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
}

.buttons button:not(.btn-today) {
  width: 32px;
  height: 32px;
  background-color: transparent;
  cursor: pointer;
}

.btn-today {
  padding: 8px 16px;
  border: 2px solid var(--blue);
  color: var(--blue);
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
}

.today {
  background-color: rgba(41, 47, 220, 0.07);
  border-radius: 4px;
}

.event-list {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
}

.event-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  font-size: 0.85em;
}

.circle-event {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--blue);
}

.event-header {
  display: flex;
  column-gap: 5px;
  font-size: 0.85em;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--blue);
  padding: 4px 8px;
  border-radius: 4px;
  transition: all .1s ease;
}

.event-header:hover{
  background-color: var(--blue-medium);
  color: white;
}

.event-list {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: var(--white);
  padding: 12px;
  transform: scale(1.1);
  z-index: 1;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
}
</style>
