import { firebaseAuth } from '../../firebase'

const state = {
  currentUser: null
}

const mutations = {
  userStatus: (state, user) => {
    user ? state.currentUser = user.email : state.currentUser = null
  }
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
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

export default {
  state,
  mutations,
  getters,
  actions
}
