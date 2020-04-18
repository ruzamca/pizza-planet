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

<script lang="ts">
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.background {
  background: url("../assets/img/dough.jpg") center;
  background-size: cover;
  height: 20vw;
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

    h2,
    h3 {
      margin: 2%;
      font-weight: 500;
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

@media screen and (max-width: 768px) {
  .background {
    height: 25vw;

    .background-overlay {
      width: 75%;

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .background {
    height: 30vw;

    .background-overlay {

      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .background {
    height: 35vw;
  }
}

@media screen and (max-width: 320px) {
  .background {
    height: 40vw;
  }
}
</style>
