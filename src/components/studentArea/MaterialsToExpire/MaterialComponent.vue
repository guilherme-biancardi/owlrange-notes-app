<template>
  <li class="material" :style="`border-color: var(--${color})`">
    <div class="material-item">
      <img
        src="../../../assets/seta.svg"
        alt="icone de seta iindicando o material a expirar"
      />
      <IconComponent :icon="icon" :size="size || 22"></IconComponent>
      <div class="material-text">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
    </div>
    <span>{{ getDaystoExpire() }}</span>
  </li>
</template>

<script setup>
import IconComponent from "@/components/utilities/IconComponent.vue";
import { useApp } from "@/js/app";
import { computed } from "vue";

const { moment } = useApp();

const date = computed(() => moment().startOf("day"));
const expireDate = computed(() =>
  moment(props.dateExpire.split("/").reverse().join(""))
);

const getDaystoExpire = () => {
  const daystoExpire = expireDate.value.diff(date.value, "days");
  const isPlural = daystoExpire > 1 ? "s" : "";

  return `${daystoExpire} dia${isPlural} restante${isPlural}`;
};

const props = defineProps({
  title: String,
  subtitle: String,
  icon: String,
  dateExpire: String,
  color: String,
  size: Number
});
</script>

<style scoped>
* {
  --orange: #ff6b00;
  --aqua: #00E5CA;
  --purple: #E500C0;
  --yellow: #f1c40f;
}

.material {
  width: 100%;
  padding: 12px 28px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
  border-left: 18px solid;
  display: flex; 
  align-items: center;
  justify-content: space-between;
}

span{
    padding: 4px 14px;
    background-color: var(--blue);
    color: white;
    border-radius: 12px;
    font-size: 0.8em;
    font-weight: 500;
}

.material-item {
  display: flex;
  column-gap: 18px;
  align-items: center;
}

.material-item img {
  max-width: 22px;
}

.material-text {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
}

.material-text h2 {
  font-size: 1.2em;
}

.material-item p {
  font-size: 0.95em;
}
</style>
