<script setup>
</script>
<template>
  <div>
    <div class="guest-content">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.guest-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>