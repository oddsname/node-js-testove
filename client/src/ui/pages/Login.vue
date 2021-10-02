<script setup>
import {ref} from "vue";
import {serverApi} from "../../api/server/server-api.js";

const email = ref('');
const password = ref('');

const status = ref('default');

</script>
<template>
  <div class="card w-50">
    <div class="card-header">
      <h4 class="card-title">Login</h4>
    </div>

    <div class="card-body">

      <div class="pt-3">
        <p >Email</p>

        <it-input
            v-model="email"
            name="email"
            type="email"
        />
      </div>

      <div class="mt-2">
        <p>Password</p>

        <it-input
            v-model="password"
            name="password"
            type="password"
        />
      </div>

      <div class="mt-4 float-right">
        <it-button type="black">Login</it-button>
      </div>
    </div>
  </div>
</template>