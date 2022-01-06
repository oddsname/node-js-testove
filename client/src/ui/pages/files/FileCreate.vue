<script setup>
import AppBlock from "../../components/common/blocks/AppBlock.vue";
import FileForm from "../../components/user/FileForm.vue";
import {UserFile} from "../../../models/user-file.js";
import {useUserFile} from "../../../composable/domain/user-file.js";

const userFile = UserFile.empty();

const {createUserFile} = useUserFile();

const onSaveForm = async (userFile) => {
  const success = await createUserFile(userFile)

  console.log(success);
}

</script>
<template>
  <div class="mt-12">
    <h2>Create UserFile</h2>

    <app-block class="mt-2">
      <file-form
          :user-file="userFile"
          @save="onSaveForm"
      />
    </app-block>
  </div>
</template>
