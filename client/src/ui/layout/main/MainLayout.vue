<script setup>
import MainHeader from "./MainHeader.vue"

</script>
<template>
  <div>
    <main-header />
    <div class="container app-margin">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.app-margin {
  padding-top: 120px;
}
</style>