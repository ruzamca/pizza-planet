<template>
  <div class="new-pizza-form">
    <form action>
      <h3>Add new pizza:</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newPizza.name"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" id="description" v-model="newPizza.description"></textarea>
      </div>
      <p class="option-title">Option 1</p>
      <div class="form-group">
        <label for="size1">Size (")</label>
        <input type="text" id="size1" v-model="newPizza.options[0].size"/>
      </div>
      <div class="form-group">
        <label for="price1">Price</label>
        <input type="text" id="price1" v-model="newPizza.options[0].price"/>
      </div>
      <p class="option-title">Option 2</p>
      <div class="form-group">
        <label for="size2">Size (")</label>
        <input type="text" id="size2" v-model="newPizza.options[1].size"/>
      </div>
      <div class="form-group">
        <label for="price2">Price</label>
        <input type="text" id="price2" v-model="newPizza.options[1].price"/>
      </div>
      <button type="button" class="green-btn" @click="add">Add</button>
    </form>
  </div>
</template>

<script>
import { dbMenuRef } from '../firebase';  

export default {
  name: "newPizza",
  data() {
    return {
      newPizza: {
        name: "Eg. Margherita",
        description:
          "Eg. A delicious tomato based pizza topped with mozzarella",
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
      }
    };
  },
  methods: {
      add() {
          dbMenuRef.add(this.newPizza); 
      } 
  }
};
</script>

<style lang="scss">
.new-pizza-form {
  margin: 8px;
  padding: 16px;

  .green-btn {
    background: green;
    color: white;
    border: 0;
    border-radius: 4px;
    padding: 5px 15px;
    cursor: pointer;
    margin-top: 16px;
  }

  .form-group {
    margin-bottom: 4px;
    label {
      display: block;
    }
    input,
    textarea {
      width: 50%;
      padding: 5px;
      box-sizing: border-box;
      background: rgb(254, 254, 252);
      border: 1px solid #f79e38;
    }
  }
}
</style>