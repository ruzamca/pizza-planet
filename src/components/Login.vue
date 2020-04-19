<template>
  <div class="login-wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" v-model="password" />
      </div>
      <button type="button" class="green-btn" @click.prevent="signIn">Sign in</button>
    </form>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password
      };
      store.dispatch("signIn", user);
    }
  }
};
</script>

<style lang="scss">
.login-wrapper {
  margin: 8px;
  padding: 16px;

  label {
    display: block;
  }
  input {
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    background: rgb(254, 254, 252);
    border: 1px solid #f79e38;
    margin-bottom: 8px;
  }

  .green-btn {
    background: green;
    color: white;
    border: 0;
    border-radius: 4px;
    padding: 5px 15px;
    cursor: pointer;
    margin-top: 16px;
  }
}
</style>