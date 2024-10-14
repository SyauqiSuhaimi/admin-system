<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComp from './components/headerComp.vue';
import sidebarComp from './components/sidebarComp.vue';

</script>

<template>
  <headerComp></headerComp>
  <div class="flex flex-grow">
    <div class=" p-5 pr-3 pt-8">
      <sidebarComp class=""></sidebarComp>
    </div>

    <div class="w-full p-5 pl-2 overflow-x-auto">
      <RouterView />
    </div>
  </div>



</template>

<style></style>
