<template>
  <li class="material" :style="`border-color: var(--${color})`">
    <div class="material-text">
      <h2>{{ title }}</h2>
      <div class="material-expire">
        <p>
          {{ material.length }}
          {{ material.length > 1 ? "materiais" : "material" }}
        </p>
        -
        <p class="text-expire">Próximo material expira em {{ getExpireDate(expiredate) }}</p>
      </div>
    </div>
    <div class="progress">
      <ProgressBar
        :size="55"
        :textSize="0.85"
        :border="5"
        :max="material.length"
        :progressCount="progress"
      ></ProgressBar>

      <IconComponent icon="mdi-chevron-down" :size="32">      
      </IconComponent>
    
    </div>
  </li>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import ProgressBar from "@/components/utilities/ProgressBar.vue";
import { useApp } from "@/js/app";
import { computed } from "vue";

const { moment } = useApp();

const date = computed(() => moment().startOf("day"));

const expiredate = computed(() =>
  moment(props.dateExpire.split("/").reverse().join(""))
);

const getExpireDate = (day) => {
  const diffDays = day.diff(date.value, "days");

  return `${diffDays} dia${diffDays > 1 ? "s" : ""}`;
};

const props = defineProps({
  title: String,
  color: String,
  dateExpire: String,
  material: Array,
  progress: Number,
});
</script>

<style scoped>
* {
  --orange: #ff6b00;
  --aqua: #00e5ca;
  --purple: #e500c0;
  --yellow: #f1c40f;
}

.material {
  width: 100%;
  padding: 10px 28px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
  border-left: 18px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.material-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.material-expire {
  display: flex;
  gap: 5px;
}

.material-expire > p {
  color: #747474;
  font-size: 0.95em;
}

.progress {
  display: flex;
  gap: 12px;
}

h2 {
  font-size: 1.15em;
}
</style>
