<template>
  <header>
    <div class="header_logo">
      <img src="../assets/img/planet.png" alt="pizza logo" />
      <h1 href="/">PIZZA PLANET</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <span>|</span>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <span>|</span>
        <li>
          <a href="/contact">Contact us</a>
        </li>
        <span>|</span>
        <li>
          <a href="/about">About us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

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
    color: #393939;
  }
}

nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    li {
      margin: 8px;
      display: inline-block;
      a {
        text-decoration: none;
        color: #393939;
      }
    }
    span {
      margin: 8px;
    }
  }
}

@media screen and (min-width: 900px) {
  .header_logo {
    img {
      max-width: 20vw;
    }
  }
}
</style>

<script lang="ts">
export default {};
</script>