import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAuth } from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menuItems: [
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
    ],
    orders: [],
    currentUser: null
  },
  getters: {
    getMenuItems: state => state.menuItems,
    getOrders: state => state.orders,
    numberOfOrders: state => state.orders.length,
    currentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, order) => state.orders.push(order),
    userStatus: (state, user) => {
      user ? state.currentUser = user.email : state.currentUser = null
    }
  },
  actions: {
    signIn: async ({ commit }, user) => {
      try {
        const userData = await firebaseAuth.signInWithEmailAndPassword(
          user.email,
          user.password
        );
        commit('userStatus', userData.user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "aut/wrong-password") {
          alert("Wrong password");
        } else {
          alert(errorMessage);
        }
      }
    },
    signOut: async ({ commit }) => {
      try {
        await firebaseAuth.signOut();
      } catch (error) {
        alert(`Error signing out, ${error}`);
      }
      commit('userStatus', null)

    }
  }
})