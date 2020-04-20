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
            <button
              type="button"
              class="green-btn"
              @click="addToBasket({pizza: item, option:option})"
            >+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMenuItems"])
  },
  methods: {
    async addToBasket(pizzaObject) {
      store.dispatch("addToBasket", pizzaObject);
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
    margin: 8px auto;
    border-radius: 4px;
    padding: 16px;
    max-width: 800px;
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
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        margin: 0 16px;
        margin-bottom: 8px;
        max-width: 200px;
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
}
</style>
