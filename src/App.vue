<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComp from './components/headerComp.vue';
import sidebarComp from './components/sidebarComp.vue';

</script>

<template>
  <headerComp></headerComp>
  <div class="flex flex-grow">
    <div class=" p-5 pr-3">
      <sidebarComp class=""></sidebarComp>
    </div>

    <div class="w-full p-5 pl-2">
      <div class="bg-white rounded-xl">
        <RouterView />
      </div>
    </div>
  </div>



</template>

<style></style>
