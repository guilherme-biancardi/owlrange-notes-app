<template>
  <div class="add-goal-content">
    <BreadcrumbComponent
      :locations="['Cronograma de Metas', 'Adicionar Meta']"
    ></BreadcrumbComponent>

    <h1>adicionar meta</h1>

    <form @submit.prevent="addGoal">
      <div class="input">
        <label>Escolha a data:</label>
        <Datepicker
          v-model="state.dateValue"
          :locale="'pt-br'"
          :format="'dd/MM/yyyy'"
          :minDate="currentDate.format('YYYY-MM-DD')"
          :closeOnScroll="true"
          :monthNameFormat="'long'"
          :cancelText="'cancelar'"
          :selectText="'selecionar'"
          :style="'width: 300px'"
          :clearable="false"
          :dayNames="['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']"
          :enableTimePicker="false"
        >
        </Datepicker>
      </div>
      <MaterialListComponent
        :filterTitle="'Selecione os materiais que você quer estudar na data escolhida:'"
      ></MaterialListComponent>
      <div class="buttons">
        <ButtonComponent
          v-for="(button, index) in state.buttons"
          :key="index"
          :text="button.text"
          :icon="button.icon"
          :reverseColor="button.reverseColor"
          :type="button.type"
          @click="button.click"
        ></ButtonComponent>
      </div>
    </form>

    <AddedSucessComponent
      :title="state.addedGoal.title"
      :text="state.addedGoal.text"
      :confirmButton="state.addedGoal.confirmButton"
      :backButton="state.addedGoal.backButton"
      v-if="state.addedGoalVisibility"
    ></AddedSucessComponent>
  </div>
</template>

<script setup>
import BreadcrumbComponent from "@/components/utilities/BreadcrumbComponent.vue";
import MaterialListComponent from "@/components/utilities/MaterialListComponent.vue";
import ButtonComponent from "@/components/utilities/ButtonComponent.vue";
import { computed, reactive, onMounted } from "vue";
import { useApp } from "@/js/app";
import AddedSucessComponent from "@/components/utilities/AddedSucessComponent.vue";
import Datepicker from "@vuepic/vue-datepicker";

const { moment, router } = useApp();

const currentDate = computed(() => moment());

const addGoal = () => {
  state.addedGoalVisibility = true;
};

const state = reactive({
  dateValue: "",
  buttons: [
    {
      text: "concluir",
      icon: "mdi-calendar-check-outline",
      type: "submit",
    },
    {
      text: "cancelar",
      icon: "mdi-cancel",
      click: router.back,
      reverseColor: true,
    },
  ],
  addedGoalVisibility: false,
  addedGoal: {
    title: "meta adicionada com sucesso",
    text: "Em instantes você poderá ver as atualizações em seu calendário",
    confirmButton: {
      text: "adicionar nova meta",
      click: () => {
        state.addedGoalVisibility = false;
        state.dateValue = currentDate.value;
        window.scrollTo({ top: 0 });
      },
    },
    backButton: {
      text: "retornar ao cronograma",
      click: router.back,
    },
  },
});

onMounted(() => (state.dateValue = currentDate.value));
</script>

<style>
@import url("../../../node_modules/@vuepic/vue-datepicker/dist/main.css");

.dp__theme_light {
  --dp-success-color: var(--blue);
  --dp-primary-color: var(--blue-medium);
}

.dp__cell_inner {
  border-radius: 50%;
}

.dp__menu {
  min-width: 300px;
}

.dp__input {
  box-shadow: var(--shadow);
  border: none;
}
</style>

<style scoped>
.add-goal-content,
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

h1 {
  font-size: 1.4em;
  text-transform: capitalize;
}

form {
  row-gap: 32px;
}

.input {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.input > input {
  padding: 8px 16px;
  max-width: 200px;
  border-radius: 8px;
  font-size: 1em;
  box-shadow: var(--shadow);
}

.buttons,
.btn-cancel {
  display: flex;
  align-items: center;
  align-self: center;
  column-gap: 12px;
}

.btn-cancel {
  min-width: 160px;
}

.buttons {
  margin-top: 12px;
}
</style>
