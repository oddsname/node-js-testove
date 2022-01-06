<script setup>
import {routeNames} from "../../../router";

const headerMenu = [
  {text: 'Home', route: routeNames.filesList},
  {text: 'UserFile Create', route: routeNames.fileCreate},
  {text: 'Login', route: routeNames.login},
]
</script>
<template>
  <div>
    <div class="app-header">
      <div>
        <h3 class=" font-weight-bold pt-0">
          Header
        </h3>
      </div>

      <div class="d-flex justify-content-space-between mr-4">
        <div class="nav-item" v-for="item in headerMenu" :key="item.text">
          <router-link class="nav-link black-text" :to="{name: item.route}">
            {{item.text}}
          </router-link>
        </div>
      </div>

    </div>
  </div>

</template>
<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  background-color: #f1f1f1;
  padding: 20px 20px;
  position: fixed;
}
</style>