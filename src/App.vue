<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComp from './components/headerComp.vue';
import sidebarComp from './components/sidebarComp.vue';

</script>

<template>
  <headerComp></headerComp>
  <div class="flex flex-row">
    <sidebarComp class=""></sidebarComp>
    <div class="p-5">
      <RouterView />
    </div>
  </div>



</template>

<style></style>
