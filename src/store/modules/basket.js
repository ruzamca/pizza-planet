import { dbOrdersRef } from '../../firebase'

const state = {
  basket: [],
  basketText: "Your basket is empty. Please, add new pizzas to star a new order.",
  basketStatus: false
}

const mutations = {
}

const getters = {
  getBasket: state => state.basket,
  getBasketQuantity: state => {
    let qt = 0;
    state.basket.map(item => {
      qt += item.quantity;
    });
    return qt;
  },
  getBasketText: state => state.basketText,
  getTotalOrder: state => {
    let total = 0;
    state.basket.map(item => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  },
  getBasketStatus: state => state.basketStatus
}

const actions = {
  changeBasketStatus: async (context) => {
    context.state.basketStatus = !context.state.basketStatus
  },
  addToBasket: async (context, pizzaObject) => {
    try {
      const pizzaExists = await context.state.basket.find(
        pizza => pizza.name === pizzaObject.pizza.name && pizza.size === pizzaObject.option.size
      );

      if (pizzaExists) {
        pizzaExists.quantity++;
        return;
      }
      context.state.basket.push({
        name: pizzaObject.pizza.name,
        price: pizzaObject.option.price,
        size: pizzaObject.option.size,
        quantity: 1
      });
    } catch (error) {
      alert(`Sorry, the pizza has not been correct added ${error}`)
    }
  },
  removeFromBasket: async (context, pizza) => {
    context.state.basket.splice(context.state.basket.indexOf(pizza), 1);
  },
  addNewOrder: async (context) => {
    try {
      const order = {
        pizzas: context.state.basket,
        createdAt: new Date(),
        state: "Created"
      };
      await dbOrdersRef.add(order)
      context.state.basket = [];
      context.state.basketText = "Thank you, your order has been placed";
    } catch (error) {
      alert('Sorry, there was a problem placing your order, please try again...')
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}