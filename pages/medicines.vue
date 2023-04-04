<template>
  <div class="product-page flex justify-around flex-wrap ">
    <the-product :product="product" v-for="product in products" :key="product.id">
    </the-product>

  </div>
</template>

<script>

import TheProduct from '../components/theProduct.vue';

export default {
  components: { TheProduct },
  data: () => ({
    products: [
      {
        id: 1,
        image: "surbexZ.jpg",
        name: "Surbex Z",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 550.00",
      },
      {
        id: 2,
        image: "acicon20.jpg",
        name: "Acicon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 63.00",
      },
      {
        id: 3,
        image: "amlo-q5.jpg",
        name: "Amlo-Q 5mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 175.00",
      },
      {
        id: 4,
        image: "antial-syrup.jpg",
        name: "Antial Syrup",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 138.00",
      },
      {
        id: 5,
        image: "atarax10.jpg",
        name: "Atarax 10mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 225.00",
      },
      {
        id: 6,
        image: "calamox156.25-syrup.jpg",
        name: "Calamox156.25 Syrup",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 250.00",
      },
      {
        id: 7,
        image: "clarion500.jpg",
        name: "Clarion 500mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 448.00",
      },
      {
        id: 8,
        image: "ensure.jpg",
        name: "Ensure",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 1250.00",
      },
      {
        id: 9,
        image: "erythrocin250.jpg",
        name: "Erythrocin 250mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 1150.00",
      },
      {
        id: 10,
        image: "febrol120-syrup.jpg",
        name: "Febrol 120mg Syrup",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 38.00",
      },
      {
        id: 12,
        image: "eskem20.jpg",
        name: "Eskem 20mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 475.00",
      },
      {
        id: 13,
        image: "mirabet25.jpg",
        name: "Mirabet 25mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 310.00",
      },
      {
        id: 14,
        image: "regnum.jpg",
        name: "Regnum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 419.00",
      },
      {
        id: 15,
        image: "omezol20.jpg",
        name: "Omezol 20mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 480.00",
      },
      {
        id: 16,
        image: "vitamax.jpg",
        name: "VitaMax",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 380.00",
      },
      {
        id: 17,
        image: "wellwoman.jpg",
        name: "Wellwoman",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 1350.00",
      },
      {
        id: 18,
        image: "rova10.jpg",
        name: "Rova 10mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 420.00",
      },
      {
        id: 19,
        image: "pyodine60ml.jpg",
        name: "Pyodine 60ml",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 150.00",
      },
      {
        id: 20,
        image: "risek40.jpg",
        name: "Risek 40mg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "PKR 520.00",
      },

    ],

  }),
};
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 0;
  gap: 1.5rem;

}
</style>