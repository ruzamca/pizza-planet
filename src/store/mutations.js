export const addOrder = (state, order) => state.orders.push(order);

export const userStatus = (state, user) => {
  user ? state.currentUser = user.email : state.currentUser = null
};