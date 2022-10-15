<template>
  <div class="input">
    <input :type="type || 'text'" :placeholder="placeholder"/>
    <IconComponent :icon="icon" class="icon" :size="24"></IconComponent>
  </div>
</template>

<script setup>
import IconComponent from '../utilities/IconComponent.vue';
defineProps({
  type: String,
  placeholder: String,
  icon: String,
});
</script>

<style scoped>
.input{
    width: 100%;
    position: relative;
}

input{
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 8px 0px;
    font-size: 1em;
    transition: all .2s ease;
}

input:focus{
    border-color: var(--blue);
    padding: 12px 0;
}

input:focus ~ .icon{
    bottom: 10px;
}

.icon{
    position: absolute;
    bottom: 6px;
    right: 0;
    color: var(--blue);
    transition: all .2s ease;
}
</style>
