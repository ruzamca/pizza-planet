<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <div class="info-block-wrapper">
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
      <router-view name="history"></router-view>
    </div>
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

  .info-block-wrapper {
    display: flex;
    flex-direction: column;

    .info-block {
      background: #f1e6da;
      margin: 8px 0;
      padding: 8px;

      h3 {
        text-align: center;
      }

      .info-block-content {
        display: flex;
        align-items: center;

        p {
          font-size: 14px;
          margin-right: 8px;
        }

        img {
          width: 30%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  body {
    .info-block-wrapper {
      flex-direction: row;
      .info-block {
        width: 100%;
        &:nth-child(2) {
          margin: 8px;
          img {
            order: -1;
          }
        }
        .info-block-content {
          flex-direction: column;
          align-items: center;
          p{
            margin-right: 0;
          }
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
