<template>
  <div class="pt-12">
    <nuxt-link :to="`/products/${product.id}`">
      <div class="product-box  rounded-lg border-2 border-blue-500">

        <div class="hover:scale-110 ">
          <img class="w-56 h-48 " :src="product.imageUrl" alt="productImage">
        </div>
        <div class="p-4">
          <h1 class="text-sm md:text-lg font-bold">{{ product.name }}</h1>
          <p class="mb-2">{{ product.description }}</p>
          <p class="font-bold mb-2">{{ product.price }}</p>
          <div class="btn-align">

            <button
              class="text-blue-600 border-2 border-blue-500 hover:bg-blue-600 px-3 py-1 rounded hover:text-white">ADD
              TO CART</button>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },

  },

};

</script>

<style lang="css" scoped>
.product-box {
  max-width: 350px;
  background-color: rgb(236, 233, 233);
  overflow: hidden;

}

.btn-align {
  text-align: center;
}
</style>