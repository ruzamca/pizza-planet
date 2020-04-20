<template>
  <div class="basket-wrapper" v-if="getBasketStatus">
    <!-- basket -->
    <div class="basket-content">
      <h3 class="basket-title">BASKET</h3>
      <div class="basket-items" v-if="getBasket.length > 0">
        <div class="basket-item" v-for="(item,index) in getBasket" :key="index">
          <div class="item-info">
            <div class="item-name">{{item.name}} - {{item.size}}"</div>
            <div class="item-price">{{(item.price * item.quantity).toFixed(2) | currency}}</div>
          </div>
          <div class="quantity-info">
            <button type="button" class="green-btn" @click="decreaseQuantity(item)">-</button>
            <div class="item-quantity">{{item.quantity}}</div>
            <button type="button" class="green-btn" @click="increaseQuantity(item)">+</button>
          </div>
        </div>
        <div class="total-order">
          <div class="text">
            Total order:
            <span>{{getTotalOrder | currency}}</span>
          </div>
          <button type="button" class="green-btn" @click="addNewOrder">Place order</button>
        </div>
      </div>
      <div class="basket-empty" v-else>
        <div>{{getBasketText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store } from "../store/store";

export default {
  name: "Basket",
  computed: {
    ...mapGetters([
      "getBasket",
      "getBasketText",
      "getTotalOrder",
      "getBasketStatus"
    ])
  },
  mutations: {
    setActiveFalse() {
      this.active = false;
    }
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        store.dispatch("removeFromBasket", item);
      }
    },
    addNewOrder() {
      store.dispatch("addNewOrder");
      setTimeout(() => {
        store.dispatch("changeBasketStatus");
      }, 3000);
    }
  }
};
</script>

<style scoped lang="scss">
.basket-wrapper {
  position: fixed;
  top: 24px;
  right: 0;
  background: white;
  width: 90%;
  margin: 20px;
  max-width: 250px;
  border-radius: 4px;
  .green-btn {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 4px;
    background: green;
    color: white;
  }
  .basket-content {
    box-shadow: 0 0 5px rgba(50, 50, 51, 0.05),
      0 6px 12px rgba(50, 50, 51, 0.15);
    .basket-title {
      border-radius: 4px 4px 0 0;
      font-size: 16px;
      margin: 0;
      padding: 8px;
      background: yellow;
      text-align: center;
    }
    .basket-items {
      padding: 16px;
      .basket-item {
        margin-bottom: 16px;
        .item-info {
          font-size: 14px;
          margin-bottom: 4px;
          .item-name {
            font-weight: 500;
          }
        }
        .quantity-info {
          display: flex;
          align-items: center;
          font-size: 14px;
          .item-quantity {
            margin: 0 8px;
          }
        }
      }
      .total-order {
        margin-top: 16px;
        border-top: 1px solid #c8c8c8;
        padding-top: 16px;
        .text {
          margin-bottom: 8px;
        }
      }
    }
    .basket-empty {
      padding: 16px;
      font-size: 14px;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .basket-wrapper {
  }
}
</style>