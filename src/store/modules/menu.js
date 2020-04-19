import { firestoreAction } from 'vuexfire'
import { dbMenuRef } from '../../firebase'

const state = {
  menuItems: []
}

const mutations = {

}

const getters = {
  getMenuItems: state => state.menuItems
}

const actions = {
  setMenuRef: firestoreAction(context => {
    return context.bindFirestoreRef('menuItems', dbMenuRef)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}