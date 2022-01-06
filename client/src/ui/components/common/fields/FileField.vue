<script setup>
import {ref} from "vue";

const emit = defineEmits(['saveFile', 'saveField', 'input']);

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
  }
})

const textFieldValue = ref(null);
const fileField = ref(null);

const saveField = (fieldValue) => {
  textFieldValue.value = fieldValue

  emit('saveField', fieldValue);
}

const triggerFileField = () => {
  fileField.value.click()
}

const saveFile = (file) => {
  const uploadedFile = file.target.files[0];

  emit('saveFile', uploadedFile)

  saveField(uploadedFile?.name || null);
}
</script>
<template>
  <div class="row">
    <div class="col-9 input-group mr-0 pr-0" :style="{width} ">
      <input
          @click="triggerFileField"
          class="form-control"
          :name="props.name"
          v-model="textFieldValue"
          :placeholder="props.placeholder"
          aria-label="Username"
          readonly
      />
      <div v-if="props.errorMessage" class="invalid-feedback">
        {{props.errorMessage}}
      </div>

      <div class="d-none">
        <input ref="fileField" type="file" @change="saveFile">
      </div>
    </div>
    <div class="ml-0 pl-1 col-3">
      <button @click="triggerFileField" type="button" class="btn btn-primary" style="width: 100%">Upload</button>
    </div>
  </div>

</template>