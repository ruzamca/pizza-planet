<template>
  <div class="menu-wrapper">
    <!-- menu -->
    <h3 class="menu-title">~ Authentic handmade pizza ~</h3>
    <div class="menu-content">
      <div class="dish-item" v-for="item in getMenuItems" :key="item">
        <div class="dish-name">{{item.name}}</div>
        <div class="dish-description">{{item.description}}</div>
        <div class="dish-option" v-for="option in item.options" :key="option">
          <div class="dish-size">{{option.size}}"</div>
          <div class="dish-add-wrapper">
            <div class="dish-price">{{option.price}}€</div>
            <button type="button" class="add-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMenuItems: [
        {
          name: "Margherita",
          description: "A delicious tomato based pizza topped with mozzarella",
          options: [
            {
              size: 9,
              price: 6.95
            },
            {
              size: 12,
              price: 10.95
            }
          ]
        },
        {
          name: "Pepperoni",
          description:
            "A delicious tomato based pizza topped with mozzarella and pepperoni",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        },
        {
          name: "Ham and Pineapple",
          description:
            "A delicious tomato based pizza topped with mozzarella, ham and pineapple",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.menu-wrapper {
  background: #f1e6da;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  border-radius: 4px;
  margin-right: 8px;

  .menu-title {
    font-weight: bold;
  }
  .menu-content {
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
          .add-btn {
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
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu-wrapper {
    width: 100%;
    padding: 0;
  }
}
</style>
