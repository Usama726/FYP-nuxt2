<template>
  <div class="w-full z-40
    text-white
    bg-gray-600
    px-6
    py-2          
    md:flex
    justify-between
    items-center">
    <div class="logo">
      <NuxtLink to="/">
        <img class="logo-img" src="~/assets/images/logo.png" alt="logo">
      </NuxtLink>
    </div>
    <ul class="flex text-lg items-center font-bold sm:mt-2">
      <li v-for="link in links" :key="link.id" class=" md:mx-3 my-2 sm:mb-2">
        <NuxtLink :to="link.link" class=" hover:text-gray-300">{{ link.name }}
        </NuxtLink>
      </li>

      <headerbtn>
        <NuxtLink :to="login.link">{{ login.name }}</NuxtLink>
      </headerbtn>
      <headerbtn>
        <NuxtLink :to="signup.link">{{ signup.name }}</NuxtLink>
      </headerbtn>


    </ul>


  </div>
</template>

<script>


export default {

  props: {
    links: {
      type: Array,
      required: true
    }
  },

  data: () => ({

    login: { name: "Login", link: "login" },
    signup: { name: "SignUp", link: "signup" },

  }),
};
</script> 

<style scoped>
.logo-img {
  width: 10rem;
  height: 2.5rem;
}
</style>