<script setup>
</script>
<template>
  <div class="app-block">
    <slot />
  </div>
</template>
<style scoped>
.app-block {
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 20%);
  padding: .75rem 1.25rem;
}
</style>