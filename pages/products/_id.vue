<template>
  <div>
    <navbar />
    <div class="pt-24 mb-8">
      <p class="text-4xl font-bold text-center text-blue-500 animate-pulse">Product Details</p>

      <div class="container grid grid-cols-1 gap-5 px-8 pt-6 mx-auto product-preview md:grid-cols-2">
        <div class="w-full border-2 border-black img-section h-2/4 ">
          <img class="w-full h-full" :src="product.imageUrl">
        </div>
        <div class="h-screen p-5 border-2 border-black product-details">
          <h1 class="text-sm font-bold md:text-lg">{{ product.name }}</h1>
          <p class="mb-2">{{ product.description }}</p>
          <p class="mb-2 font-bold">{{ product.price }}</p>
          <div class="flex items-center space-x-3 mb-4">
            <p class=" text-2xl"> quantity : {{ product.quantity }}</p>
            <button class="px-2 text-2xl rounded-lg font-bold border-2 border-blue-400 text-blue-400"
              @click="product.quantity++">+</button>
            <button class="px-3 rounded-lg text-2xl font-bold border-2 border-blue-400 text-blue-400"
              @click="decrement">-</button>
          </div>
          <div class="btn-align">

            <button v-if="!added" @click="addToCart(product)"
              class="px-3 py-1 text-xl font-bold text-blue-600 border-2 border-blue-500 rounded hover:bg-blue-600 hover:text-white">ADD
              TO
              CART</button>

            <div v-else class="flex items-center justify-between ">
              <nuxt-link to="/checkout"
                class="px-3 py-1 text-xl font-bold text-blue-600 border-2 border-blue-500 rounded hover:bg-blue-600 hover:text-white">
                Checkout
              </nuxt-link>
              <nuxt-link to="/medicines" class="text-xl text-center text-blue-700 underline">&larr; Continue
                Shopping</nuxt-link>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  data: () => ({
    product: {},
    cart: [],
    added: false,

  }),
  async created() {
    const doc = await this.$fire.firestore.collection('products').doc(this.$route.params.id)
      .get()
    this.product = doc.exists ? doc.data() : {}
  },
  mounted() {

  },

  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', this.product)
      this.added = true
    },
    decrement() {
      if (this.product.qunatity > 0) {
        this.product.quantity--;
      }
      else{
        this.product.quantity ;
      }
    }
  }
};

</script>
