<template>
  <div class="calendar">
    <FullCalendar
      :options="{
        plugins: [dayGridPlugin, interaction],
        initialView: 'dayGridMonth',
        events: [
          { title: 'event 1', date: '2022-10-01' },
          { title: 'event 2', date: '2022-10-02' },
        ],
        height: 460,
        headerToolbar: {
          left: 'title',
          right: 'prev,next',
        },
        locale: 'pt-br',
      }"
    >
    </FullCalendar>
  </div>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
</script>

<style>
* {
  --fc-button-bg-color: var(--blue);
  --fc-button-border-color: transparent;
  --fc-button-active-border-color: transparent;
  --fc-button-hover-bg-color: var(--blue-medium);
  --fc-button-hover-border-color: transparent;
  --fc-button-active-bg-color: var(--blue);
}

.calendar {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
}
</style>
