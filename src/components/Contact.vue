<template>
  <div class="contact-wrapper">
    <h4>Contact</h4>
    <address>
      <strong>Pizza planet</strong>
      <br />Address 1
      <br />Address 2
      <br />Phone (123) 456-789
    </address>
    <address>
      <strong>Email:</strong>
      <br />
      <p>contact@pizzaplanet.com</p>
    </address>
  </div>
</template>

<script lang="ts">
export default {
  name: "contact"
};
</script>

<style lang="scss">
.contact-wrapper {
  background: #f1e6da;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}
</style>