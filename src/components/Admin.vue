<template>
  <div class="admin-wrapper">
    <div class="current-user-wrapper">
      <div>Logged in as: {{ currentUser }}</div>
      <button type="button" v-if="currentUser" class="btn-red" @click.prevent="signOut">Sign out</button>
    </div>
    <NewPizza />
    <div class="menu-wrapper">
      <h3>Menu:</h3>
      <div class="menu-table">
        <div class="table-title-row">
          <div class="title">Pizza</div>
          <div class="title">Remove from menu</div>
        </div>
        <div class="table-item-row" v-for="(item,index) in getMenuItems" :key="index">
          <div class="item">{{item.name}}</div>
          <button class="red-btn">&times;</button>
        </div>
      </div>
    </div>
    <div class="order-wrapper">
      <h3 :style="numberOfOrders > 0 ? '' : 'margin-bottom: 0;'">Current orders ({{numberOfOrders}})</h3>
      <div class="menu-table" v-if="numberOfOrders > 0">
        <div class="table-title-row">
          <div class="title">Order</div>
          <div class="title">Size</div>
          <div class="title">Qantity</div>
          <div class="title">Price</div>
        </div>
        <div class="table-item-row" v-for="(order,index) in getOrders" :key="index">
          <div class="item-order">
            <div>Order number: {{order.id}}</div>
            <button class="red-btn">&times;</button>
          </div>
          <div class="order-item" v-for="(orderItem,index) in order.items" :key="index">
            <div class="order-item-name">{{orderItem.name}}</div>
            <div class="order-item-size">{{orderItem.size}}</div>
            <div class="order-item-quantity">{{orderItem.quantity}}</div>
            <div class="order-item-price">{{orderItem.price}}</div>
          </div>
        </div>
      </div>
    </div>
    <Login />
  </div>
</template>

<script>
import NewPizza from "@/components/NewPizza.vue";
import Login from "@/components/Login.vue";
import { store } from "../store/store";
import { mapGetters } from "vuex";

export default {
  name: "admin",
  components: {
    NewPizza,
    Login
  },
  data() {
    return {
      name: "Ruben"
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      alert(`Hi, ${vm.name}`);
    });
  },
  computed: {
    ...mapGetters([
      "getMenuItems",
      "getOrders",
      "numberOfOrders",
      "currentUser"
    ])
  },
  methods: {
    async signOut() {
      store.dispatch("signOut");
    }
  }
};
</script>

<style lang="scss">
.admin-wrapper {
  .red-btn {
    background: rgb(211, 1, 1);
    color: white;
    border: 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }
  .current-user-wrapper {
    border: 1px solid #f79e38;
    padding: 16px;
    margin: 8px;

    h3 {
      margin-top: 0;
    }
  }
  .menu-wrapper {
    border: 1px solid #f79e38;
    padding: 16px;
    margin: 8px;

    h3 {
      margin-top: 0;
    }

    .menu-table {
      max-width: 500px;
      .table-title-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .title {
          font-weight: 500;
        }
      }
      .table-item-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        .item {
          font-size: 14px;
        }
      }
    }
  }
  .order-wrapper {
    border: 1px solid #f79e38;
    padding: 16px;
    margin: 8px;

    h3 {
      margin-top: 0;
    }

    .menu-table {
      max-width: 700px;
      .table-title-row {
        display: flex;
        margin-bottom: 8px;
        .title {
          width: 25%;
          text-align: center;
          font-weight: 500;
          &:first-child {
            text-align: left;
          }
        }
      }
      .table-item-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 4px;
        margin-bottom: 8px;
        .item-order {
          width: 100%;
          background: #c8c8c8;
          font-size: 14px;
          display: flex;
          align-items: center;
          text-align: center;

          &:first-child {
            text-align: left;
          }

          & > div {
            margin-right: 4px;
          }
        }

        .order-item {
          display: flex;
          font-size: 14px;

          & > div {
            width: 25%;
            text-align: center;

            &:first-child {
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>