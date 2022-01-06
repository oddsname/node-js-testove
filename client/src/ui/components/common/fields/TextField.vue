<script setup>
const emit = defineEmits(['saveField', 'update:modelValue', 'input']);

const props = defineProps({
  modelValue: {
    type: String,
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
  type: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  width: {
    type: String,
    default: 'auto',
  },
  readonly: {
    type: Boolean,
    default: false,
  }
})

const saveField = (fieldValue) => {
  emit('saveField', fieldValue, props.name)
  emit('input', fieldValue)
  emit('update:modelValue', fieldValue)
}
</script>
<template>
  <div class="input-group" :style="{width} ">
    <input
        :type="props.type"
        class="form-control"
        :readonly="props.readonly"
        :name="props.name"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        aria-label="Username"
        @input="saveField($event.target.value)"
    />
    <div v-if="props.errorMessage" class="invalid-feedback">
      {{props.errorMessage}}
    </div>
  </div>
</template>