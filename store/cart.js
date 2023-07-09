
// store/cart.js

export const state = () => ({
  cartItems: [],
  
})
export const getters = {
  getCartItems(state) {
    return state.cartItems
  }
}

export const mutations = {
  addToCart(state, item) {
    state.cartItems.push(item)

    localStorage.setItem("cart_storage", JSON.stringify(state.cartItems))

    console.log('Hello World')
  },
  removeFromCart(state, item) {
    const index = state.cartItems.indexOf(item)
    if (index > -1) {
      state.cartItems.splice(index, 1)
    }
  }
}

export const actions = {
  addToCart({ commit }, item) {
    commit('addToCart', item)
  },
  removeFromCart({ commit }, item) {
    commit('removeFromCart', item)
  },
  JSON.parse(localStorage.getItem("cart_storage"))

}


// export const state = () => ({
//   cart: []
// })

// export const mutations = {

//   ADD_ITEM(state, payload) {
//     let inCart = state.cart.find(p => p.id === payload.id)

//     if (!inCart) {
//       state.cart.push(payload)
//     } else {
//       console.log("Item already added")
//     }
//   },
// }

// export const actions = {
//   addToCart({ commit }, item) {
//     commit('ADD_ITEM', item)
//     localStorage.getItem(JSON.parse(item))
//   },

//   DELETE_ITEM(state, payload) {
//     let item = state.cart.find(p => p.id === payload)
//     let index = state.cart.indexOf(item)
//     state.cart.splice(index, 1)
//   }
// }
