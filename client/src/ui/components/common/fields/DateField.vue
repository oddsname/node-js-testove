<script setup>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

const emit = defineEmits(['saveField', 'update:modelValue', 'input']);

const props = defineProps({
  modelValue: {
    type: Date | undefined,
    default: undefined,
  },
  value: {
    type: String,
  },
  name: {
    type: String,
    default: 'name',
  },
  placeholder: {
    type: String,
  },
  width: {
    type: String,
    default: 'auto',
  }
})

const saveField = (fieldValue) => {
  emit('input', fieldValue)
  emit('update:modelValue', fieldValue)
  emit('saveField', fieldValue);
}
</script>
<template>
  <div :style="{width: props.width}">
    <datepicker
        :model-value="props.modelValue"
        @update:modelValue="saveField"
    />
  </div>
</template>
<style>

.date-field[readonly] {
  background: #fff;
}
</style>