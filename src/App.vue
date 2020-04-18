<template>
  <div id="app">
    <app-header />
    <Home />
    <div class="menu-basket-wrapper">
      <Menu />
      <Basket />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import Menu from "@/components/Menu.vue";
import Basket from "@/components/Basket.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home,
    Menu,
    Basket
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

#app {
  .menu-basket-wrapper {
    display: flex;
    padding: 8px;
  }
}

@media screen and (max-width: 768px){
  #app {
    .menu-basket-wrapper {
      flex-direction: column;
    }
  }
}
</style>
