<template>
  <header>
    <div class="header_logo">
      <img src="../assets/img/planet.png" alt="pizza logo" />
      <h1 href="/">PIZZA PLANET</h1>
      <div class="header-basket">
        <img src="../assets/img/cart.png" alt="carrito" @click="toogleBasketStatus" />
        <div class="basket-quantity">{{getBasketQuantity}}</div>
      </div>
    </div>
    <Basket :active="basketActive" />
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'homeLink'}">
            <a>Home</a>
          </router-link>
        </li>
        <span>|</span>
        <li>
          <router-link :to="{name: 'menuLink'}">
            <a>Menu</a>
          </router-link>
        </li>
        <span>|</span>
        <li>
          <router-link :to="{name: 'contactLink'}">
            <a>Contact</a>
          </router-link>
          <!-- <a href="/contact">Contact us</a> -->
        </li>
        <span>|</span>
        <li>
          <router-link :to="{name: 'aboutLink'}">
            <a>About us</a>
          </router-link>
          <!-- <a href="/about">About us</a> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Basket from "./Basket";
import { store } from "../store/store";
import { mapGetters } from "vuex";

export default {
  name: "appHeader",
  data() {
    return {
      basketActive: false
    };
  },
  components: {
    Basket
  },
  computed: {
    ...mapGetters(["getBasketQuantity"])
  },
  methods: {
    toogleBasketStatus() {
      store.dispatch("changeBasketStatus");
    }
  }
};
</script>

<style scoped lang="scss">
.header_logo {
  background-image: linear-gradient(
    45deg,
    #f34e17 25%,
    #f79e38 25% 50%,
    #f34e17 50% 75%,
    #f79e38 75%,
    #f79e38 100%
  );
  background-size: 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 25vw;
  }

  h1 {
    font-size: 1.3em;
  }

  .header-basket {
    position: absolute;
    top: 16px;
    right: 16px;

    img {
      width: 32px;
    }

    .basket-quantity {
      position: absolute;
      top: -8px;
      right: -8px;
      background: white;
      padding: 4px;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
    }
  }
}

@media screen and (min-width: 768px) {
  .header_logo {
    img {
      max-width: 20vw;
    }
  }
}
</style>
