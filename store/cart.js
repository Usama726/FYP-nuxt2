// store/cart.js

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addToCart(state, item) {
    state.cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  },
  removeFromCart(state, index) {
    state.cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  },
  clearCart(state) {
    state.cartItems = [];
    localStorage.removeItem("cart");
  },
  initializeCart(state, cartItems) {
    state.cartItems = cartItems;
  },
};
