<script setup>
import LabelField from "../common/fields/LabelField.vue";
import TextField from "../common/fields/TextField.vue";
import FileField from "../common/fields/FileField.vue";
import DateField from "../common/fields/DateField.vue";
import {UserFile} from "../../../models/user-file.js";
import TextAreaField from "../common/fields/TextAreaField.vue";

const emit = defineEmits(['save'])

const props = defineProps({
  userFile: {
    type: UserFile,
    required: true,
  }
})

const onSaveFile = (file) => {
   props.userFile.file.setFile(file);
   props.userFile.file.name = file?.name || '';
}

const onSaveDate = (date) => {

}

const onSubmit = () => {
  emit('save', props.userFile);
}

</script>
<template>
  <div class="row">
    <div class="col-5">
      <div>
        <label-field>
          File Name
        </label-field>

        <text-field
            v-model="props.userFile.file.name"
        />
      </div>

      <div class="mt-2">
        <label-field>
          Upload File
        </label-field>

        <file-field
            @saveFile="onSaveFile"
        />
      </div>

      <div class="mt-2">
        <label-field>
          Delete Date
        </label-field>

        <date-field
            v-model="props.userFile.delete_date"
            width="100%"
        />
      </div>
    </div>

    <div class="col-7">
      <label-field>Comment</label-field>
      <text-area-field
          v-model="props.userFile.comment"
          :rows="7"
      />
    </div>
  </div>

  <div class="d-flex justify-content-end">
    <button class="btn btn-success" @click="onSubmit">
      Save
    </button>
  </div>
</template>