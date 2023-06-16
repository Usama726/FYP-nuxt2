<template>
  <div>
    <navbar />
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <top-header>Get your All <span class="text-red-800 ">Medicines+</span><br>From Here</top-header>
    <div class="mt-[180px] mb-24 flex justify-around flex-wrap gap-4">
      <the-product :product="product"  v-for="(product, index) in products" :key="`${product.id}-product-${index}`">
      </the-product>
    </div>
    <thefooter />
  </div>
</template>

<script>

import TheProduct from '../components/theProduct.vue';

export default {
  components: { TheProduct },
  data: () => ({
    products: [],
    cart: [],
  }),
  async created() {
    const items = []
    await this.$fire.firestore.collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })

      });

      this.products = items
    })
  },
 
};
</script>