
<template>
  <div class=" flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 ">
    <div class=" w-full px-16">
      <div class=" max-w-2xl mx-auto ">
        <div class="bg-blue-500 mt-16 mb-2 flex  justify-center rounded">
          <span class="text-3xl  text-white font-bold p-3 ">
            Add New Product
          </span>

        </div>

        <form class=" max-w-2xl mx-auto space-y-6 p-9 shadow-lg " @submit.prevent="handleSubmit">
          <div class=" flex-wrap -mx-3 mb-6">
            <div class="w-full  mb-4 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Product Image
              </label>
              <input type="file" ref="fileInput"
                class=" bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

            </div>

            <div class="w-full  mb-4 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Product Name
              </label>
              <input
                class=" appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required type="text" id="productName" placeholder="Enter Product Name" v-model="productName">

            </div>
            <div class="w-full mb-4 ">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Description
              </label>
              <textarea
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required type="text" id="description" placeholder="Enter Product Description"
                v-model="description"></textarea>
            </div>

            <div class="w-full">

              <label class="">Product Price</label>
              <input id="price" name="price" type="number" required
                class=" block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
                placeholder=" Enter Product Price" v-model="price">
            </div>

          </div>

          <div>
            <button type="submit"
              class="group relative flex w-md justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-md font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

              Add Product
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      description: '',
      price: 0,
      imageUrl: null,
    }
  },
  methods: {

    async handleSubmit() {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`images/${file.name}`)
      const snapshot = await imageRef.put(file)
      this.imageUrl = await snapshot.ref.getDownloadURL()

      this.$fire.firestore.collection('products').add({
        name: this.productName,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl,
      })
        .then(() => {
          alert('Product added successfully!')
          this.productName = '',
            this.description = '',
            this.price = 0,
            this.$refs.fileInput.files = null,
            this.$router.push('/medicines')
        })
        .catch(error => {
          console.error(error)
          alert('Error adding product')
        })

    }
  }
}

</script> 
