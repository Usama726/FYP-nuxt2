<template>
  <div class="mb-8 pt-24">
    <p class="text-center text-blue-500 text-4xl font-bold animate-pulse">Product Details</p>

    <div class="px-8 pt-6  container mx-auto product-preview grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="img-section border-2 border-black h-2/4 w-full ">
        <img class="h-full w-full" :src="product.imageUrl">
      </div>
      <div class=" p-5 product-details border-2 border-black h-screen">
        <h1 class="text-sm md:text-lg font-bold">{{ product.name }}</h1>
        <p class="mb-2">{{ product.description }}</p>
        <p class="font-bold mb-2">{{ product.price }}</p>
        <div class="btn-align">

          <button v-if="!added" @click="changeButton()"
            class="text-blue-600 border-2 border-blue-500 hover:bg-blue-600 px-3 py-1 rounded hover:text-white text-xl font-bold">ADD
            TO
            CART</button>
          <nuxt-link v-else to="/checkout"
            class="text-blue-600 border-2 border-blue-500 hover:bg-blue-600 px-3 py-1 rounded hover:text-white text-xl font-bold">
            Checkout
          </nuxt-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data: () => ({
    product: {},
    // cart: [],
    added: false
  }),
  async created() {

    const doc = await this.$fire.firestore.collection('products').doc(this.$route.params.id)
      .get()
    this.product = doc.exists ? doc.data() : {}


  },
  methods: {
    // addToCart() {
    //   this.cart.push(this.product)
    //   const stringArray = JSON.stringify(this.cart)
    //   localStorage.setItem('products', stringArray)
    // },
    changeButton(){
      this.added=true
    }
  }

};

</script>