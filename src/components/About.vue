<template>
  <div class="about-wrapper">
    <h3>~ Click on the link bellow for more info ~</h3>
    <nav>
      <ul>
        <router-link :to="{name: 'historyLink'}">
          <a class="nav-link">Our history</a>
        </router-link>
        <span>|</span>
        <router-link :to="{name: 'orderingGuideLink'}">
          <a class="nav-link">Ordering guide</a>
        </router-link>
        <span>|</span>
        <router-link :to="{name: 'deliveryLink'}">
          <a class="nav-link">Delivery</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
}
</style>