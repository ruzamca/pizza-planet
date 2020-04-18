<template>
  <div id="app">
    <app-header />
    <Home />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from '@/components/Home.vue';

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body { 
  font-family: Roboto;
}
</style>
