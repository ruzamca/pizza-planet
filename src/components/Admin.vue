<template>
  <div class="admin-wrapper">
    <AdminContent v-if="currentUser" />
    <Login v-else />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import { mapGetters } from "vuex";
const AdminContent = () => import("../components/adminContent");

export default {
  name: "admin",
  components: {
    Login,
    AdminContent
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>

<style lang="scss">
</style>