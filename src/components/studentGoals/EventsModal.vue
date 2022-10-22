<template>
  <ModalComponent :width="425" @close="emit('close')" :background="'#f9f9f9'">
    <div class="events">
      <h1>{{ date }}</h1>
      <div class="events-content">
        <h2>Eventos do dia:</h2>
        <ul class="event-list">
          <li
            v-for="(event, index) in events"
            :key="index"
            :style="`border-color: var(--${event.color});`"
          >
            <p>{{ event.title }}</p>
            <IconComponent
              :icon="'mdi-book-open-variant'"
              :style="`color: var(--${event.color})`"
            ></IconComponent>
          </li>
        </ul>
      </div>
    </div>
  </ModalComponent>
</template>

<script setup>
import { useApp } from "@/js/app";
import { computed } from "vue";
import ModalComponent from "../utilities/ModalComponent.vue";
import IconComponent from "../utilities/IconComponent.vue";

const emit = defineEmits(["close"]);

const { moment } = useApp();

const props = defineProps({
  events: Array,
  day: String,
});

const date = computed(() =>
  moment(props.day, "DDMMYYYY").locale("pt-br").format("dddd, LL")
);
</script>

<style scoped>
*{
    --purple: #E500C0;
    --orange: #FF6B00;
}

.events, .events-content, .event-list{
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

h1 {
  font-size: 1.4em;
}

h1::first-letter {
  text-transform: uppercase;
}

.events-content{
    row-gap: 12px;
}

.events-content h2{
    font-size: 1em;
    color: #6f6f6f;
    font-weight: 400;
}

.event-list li{
    background-color: var(--white);
    box-shadow: var(--shadow);
    padding: 10px 16px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: 12px solid;
    color: black;
    font-weight: 400;
    text-transform: capitalize;
}
</style>
