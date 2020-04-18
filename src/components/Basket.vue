<template>
  <div class="basket-wrapper">Hola</div>
</template>

<script lang="ts">
export default {
  name: "Basket"
};
</script>

<style lang="scss">
.basket-wrapper {
  background: #f1e6da;
  width: 35%;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .basket-wrapper {
    width: 100%;
    margin-top: 8px;
  }
}
</style>