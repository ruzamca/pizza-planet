<template>
  <div id="app">
    <app-header />
    <Home />
    <Menu />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home,
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap");

body {
  font-family: Roboto;
  color: #393939;
  margin: 0 auto;
}
</style>
