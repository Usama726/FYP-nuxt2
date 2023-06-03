<template>
  <div>
    <navbar /> 
    <Nuxt />
    <Thefooter :links="links"></Thefooter>
  </div>
</template>


<script>

export default {
  data: () => ({
    links: [
      { id: 1, name: "Lab Tests", link: "lab-tests" },
      { id: 2, name: "Compounded", link: "compounded" },
      { id: 3, name: "Doctor Consulatation", link: "consultation" },
      { id: 4, name: "Medicines", link: "medicines" },
    ],

  }),
}
</script>

<style scoped>
body{
  scroll-behavior: smooth;
}
</style>