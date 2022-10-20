<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      :style="`width: ${width || 'max-content'}px; 
      height: ${height || 'max-content'};
      background-color: ${background || 'var(--white)'}`"
    >
      <button @click="emit('close')">
        <IconComponent :icon="'mdi-close'" :size="24"></IconComponent>
      </button>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "./IconComponent.vue";

const emit = defineEmits(["close"]);

defineProps({
  width: Number,
  height: Number,
  background: String,
});
</script>

<style scoped>
.modal-backdrop {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.097);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
}

.modal {
  position: relative;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.08);
}

.modal > button {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  cursor: pointer;
  color: var(--blue);
}

.modal > div{
  margin-top: 12px;
}
</style>
