
// store/cart.js
let cartItems = localStorage.getItem('cart_storage')
export const state = () => ({
  cartItems: cartItems ? JSON.parse(cartItems) : [],
  price: []

})
export const getters = {
  getCartItems(state) {
    return state.cartItems
  },
  getTotal: state => {
    return state.cartItems.reduce((total, lineItem) => total + (lineItem.quantity * lineItem.price), 0);
  }

}

export const mutations = {
  addToCart(state, item) {
    let existingProduct = state.cartItems.find(product => product.name == item.name);
    if (existingProduct) {
      existingProduct.quantity++
    }
    else {
      state.cartItems.push(item)
    }
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
