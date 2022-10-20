<template>
  <ModalComponent
    @close="emit('close')"
    :closeButton="false"
    :width="540"
    :height="260"
  >
    <div class="added">
      <div class="added-text">
        <IconComponent :icon="'mdi-check'" :size="56"></IconComponent>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
      <div class="added-buttons">
        <ButtonComponent
          :text="confirmButton?.text"
          @click="confirmButton?.click"
        ></ButtonComponent>
        <ButtonComponent
          :text="backButton?.text"
          @click="backButton?.click"
          :reverseColor="true"
          :borderNone="true"
        ></ButtonComponent>
      </div>
    </div>
  </ModalComponent>
</template>

<script setup>
import ModalComponent from "./ModalComponent.vue";
import IconComponent from "./IconComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";

const emit = defineEmits(["close"]);

defineProps({
  title: String,
  text: String,
  confirmButton: Object,
  backButton: Object,
});
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-size: 1.6em;
  text-align: center;
}

.added,
.added-text,
.added-buttons {
  display: flex;
  flex-direction: column;
  row-gap: 36px;
}

.added-text {
  row-gap: 10px;
}

.added-buttons {
  flex-direction: row;
  column-gap: 6px;
}
</style>
