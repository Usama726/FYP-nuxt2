
// store/cart.js
let cartItems = localStorage.getItem('cart_storage')
export const state = () => ({
  cartItems: cartItems ? JSON.parse(cartItems) : [],

})
export const getters = {
  getCartItems(state) {
    return state.cartItems
  }
}

export const mutations = {
  addToCart(state, item) {
    let existingProduct = state.cartItems.filter(product => product.id == item.id);
    if (existingProduct) {
      existingProduct.quantity++
    }
    else {
      state.cartItems.push(item)
    }
    console.log(existingProduct);
    localStorage.setItem("cart_storage", JSON.stringify(state.cartItems))

  },
  removeFromCart(state, item) {
    const index = state.cartItems.indexOf(item)
    if (index > -1) {
      state.cartItems.splice(index, 1)
      localStorage.setItem("cart_storage", JSON.stringify(state.cartItems))

    }
  },

}

export const actions = {
  addToCart({ commit }, item) {
    commit('addToCart', item)
  },
  removeFromCart({ commit }, item) {
    commit('removeFromCart', item)
  },


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
