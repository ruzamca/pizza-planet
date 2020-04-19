<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap");

body {
  font-family: Roboto;
  color: #393939;
  margin: 0 auto;

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      list-style: none;
      background-color: #f1e6da;
      a {
        text-decoration: none;
        color: #393939;
        margin: 0 8px;
      }
    }
  }
}
</style>
