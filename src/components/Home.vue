<template>
  <div class="background">
    <div class="background-overlay">
      <h2>Welcome to Pizza Planet!</h2>
      <img src="../assets/img/roller.png" alt="Roller" />
      <h3>Feeling hungry?</h3>
      <button class="order-btn">Let's order!</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  background: url("../assets/img/dough.jpg") center;
  background-size: cover;
  height: 30vw;
  display: flex;
  align-items: center;

  .background-overlay {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background: #f1e6da;
    opacity: 0.8;
    color: #393939;

    h2,
    h3 {
      margin: 2%;
    }

    img {
      width: 15%;
    }

    .order-btn {
        border-radius: 4px;
        border: 0;
        background: coral;
        padding: 8px;
        cursor: pointer;
    }
  }
}
</style>

<script lang="ts">
export default {
  name: "Home"
};
</script>