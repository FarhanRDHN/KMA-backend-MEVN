<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/navComp.vue';
import '@/styles/main.css'
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
