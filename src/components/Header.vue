<template>
  <header>
    <div class="header_logo">
      <img src="../assets/img/planet.png" alt="pizza logo" />
      <h1 href="/">PIZZA PLANET</h1>
    </div>
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

<script lang="ts">
export default {
  name: 'appHeader'
};
</script>

<style scoped lang="scss">
.header_logo {
  background-image: linear-gradient(
    45deg,
    #d85226 25%,
    #f79e38 25% 50%,
    #d85226 50% 75%,
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
}

@media screen and (min-width: 768px) {
  .header_logo {
    img {
      max-width: 20vw;
    }
  }
}
</style>
