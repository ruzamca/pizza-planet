<template>
  <div class="menu-wrapper">
    <!-- menu -->
    <div class="menu-content">
      <h3 class="menu-title">~ Authentic handmade pizza ~</h3>
      <div class="dish-item" v-for="(item, index) in getMenuItems" :key="index">
        <div class="dish-name">- {{item.name}} -</div>
        <div class="dish-description">{{item.description}}</div>
        <div class="dish-option" v-for="(option, index) in item.options" :key="index">
          <div class="dish-size">{{option.size}}"</div>
          <div class="dish-add-wrapper">
            <div class="dish-price">{{option.price | currency}}</div>
            <button type="button" class="green-btn" @click="addToBasket(item, option)">+</button>
          </div>
        </div>
      </div>
    </div>
    <!-- basket -->
    <div class="basket-content">
      <h3 class="basket-title">~ Basket ~</h3>
      <div class="basket-items" v-if="basket.length > 0">
        <div class="basket-item" v-for="(item,index) in basket" :key="index">
          <div class="quantity-info">
            <button type="button" class="green-btn" @click="decreaseQuantity(item)">-</button>
            <div class="item-quantity">{{item.quantity}}</div>
            <button type="button" class="green-btn" @click="increaseQuantity(item)">+</button>
          </div>
          <div class="item-info">
            <div class="item-name">{{item.name}} -</div>
            <div class="item-size">{{item.size}}" -</div>
            <div class="item-price">{{(item.price * item.quantity).toFixed(2) | currency}}</div>
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
        <div>{{basketText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      basket: [],
      basketText: "Your basket is empty"
    };
  },
  computed: {
    ...mapGetters(["getMenuItems"]),
    getTotalOrder() {
      let total = 0;
      this.basket.map(item => {
        total += item.quantity * item.price;
      });
      return total.toFixed(2);
    }
  },
  methods: {
    async addToBasket(item, option) {
      const pizzaExists = await this.basket.find(
        pizza => pizza.name === item.name && pizza.size === option.size
      );

      if (pizzaExists) {
        pizzaExists.quantity++;
        return;
      }
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      });
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromBasket(item);
      }
    },
    addNewOrder() {
      const order = {
        pizzas: this.basket,
        createdAt: new Date(),
        state: "Created"
      };
      store.dispatch("addNewOrder", order);
      this.basket = [];
      this.basketText = "Thank you, your order has been placed";
    }
  }
};
</script>

<style scoped lang="scss">
.menu-wrapper {
  display: flex;

  .green-btn {
    background: green;
    color: white;
    border: 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }

  .menu-content {
    background: #f1e6da;
    margin: 8px 4px 8px 8px;
    border-radius: 4px;
    width: 65vw;
    padding: 16px;
    .menu-title {
      text-align: center;
      font-weight: bold;
    }
    .dish-item {
      .dish-name {
        font-weight: 500;
        margin-bottom: 4px;
        font-style: italic;
      }
      .dish-description {
        font-size: 15px;
        margin-bottom: 16px;
      }
      .dish-option {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin: 0 16px;
        margin-bottom: 8px;
        .dish-add-wrapper {
          display: flex;
          align-items: center;

          .dish-price {
            margin-right: 8px;
          }
        }
      }
    }
  }

  .basket-content {
    background: #f1e6da;
    margin: 8px 8px 8px 4px;
    width: 35vw;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .basket-title {
      text-align: center;
      font-weight: bold;
    }

    .basket-items {
      .basket-item {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 14px;
        .quantity-info {
          display: flex;
          align-items: center;

          .item-quantity {
            margin: 0 8px;
          }
        }

        .item-info {
          display: flex;
          margin-left: 16px;
          .item-name {
            margin-right: 8px;
          }
          .item-size {
            margin-right: 8px;
          }
          .item-price {
          }
        }
      }

      .total-order {
        display: flex;
        flex-direction: column;
        .text {
          margin: 16px 0 8px 0;
        }
        button {
          display: block;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu-wrapper {
    flex-direction: column;
    .menu-content {
      width: 100vw;
    }

    .basket-content {
      width: 100vw;
    }
  }
}
</style>
