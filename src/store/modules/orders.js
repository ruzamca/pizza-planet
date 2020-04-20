import { firestoreAction } from 'vuexfire'
import { dbOrdersRef } from '../../firebase'

const state = {
  orders: []
}

const mutations = {

}

const getters = {
  getOrders: state => state.orders,
  numberOfOrders: state => state.orders.length
}

const actions = {
  setOrdersRef: firestoreAction(context => {
    return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
  }),
  removeOrder: async (context, id) => {
    try {
      const order = await dbOrdersRef.doc(id)
      order.delete()
    } catch (error) {
      alert(`Sorry, there was a problem removing the order ${error}`)
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}