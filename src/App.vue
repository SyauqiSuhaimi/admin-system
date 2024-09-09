<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComp from './components/headerComp.vue';
import sidebarComp from './components/sidebarComp.vue';

</script>

<template>
  <headerComp></headerComp>
  <sidebarComp></sidebarComp>

  <RouterView />
</template>

<style scoped></style>
