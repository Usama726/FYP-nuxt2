<template>
  <div>
    <div class=" bg-gray-600">
      <div class="
          container
          lg:flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          justify-around
          md:items-center
    
          md:justify-center
        md:flex-row md:flex-nowrap
      ">
        <div class="flex-shrink-0 w-64 mx-auto  md:mx-auto md:items-center lg:justify-start">
          <a href="http://localhost:3000/" class="logo
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            text-blue-700
            md:justify-start
          ">
            <img class="logo" src="~/assets/images/logo.png" alt="footer-logo">
          </a>
          <p class="mt-6 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam, laborum praesentium obcaecati, a
            nemo corrupti deserunt numquam, eligendi quibusdam quod eum necessitatibus illo porro. Sit non harum alias
            culpa.
          </p>
        </div>
        <div class=" text-center ">
          <div class="w-full px-4 mt-8 mb-8 ">
            <h2 class="mb-2 font-bold text-2xl text-gray-900 mt-4 ">
              Follow Us
            </h2>
            <!-- <ul class="flex text-sm list-none gap-4 justify-center">

              <li class="">
                <a href="https://www.youtube.com/">
                  <icon class="w-10 h-10 text-white hover:text-gray-800 " name="uil:facebook" />
                </a>
              </li>
              <li class="">
                <a href="https://www.youtube.com/">
                  <icon class="w-10 h-10 text-white hover:text-gray-800" name="uil:instagram" />
                </a>
              </li>
              <li class="">
                <a href="https://www.youtube.com/">
                  <icon class="w-10 h-10 text-white hover:text-gray-800" name="uiw:twitter" />
                </a>
              </li>
            </ul> -->
          </div>
        </div>
        <div>
          <div class=" w-full px-4 ">
            <ul class="text-lg items-center text-center font-bold sm:mt-2">
              <li v-for="link in links" :key="link.id" class=" mt-4 md:mx-3 my-2 sm:mb-2">
                <NuxtLink :to="link.link"
                  class="text-gray-100 font-bold text-xl mr-4 p-1.5 rounded-lg hover:bg-gray-800 cursor-pointer">{{
                    link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="flex justify-center mb-2  p-3">
        <p class="text-base text-gray-100 underline">
          All rights reserved | Wahab Online Pharmacy
        </p>
      </div>
    </div>
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

};
</script>
<style scoped>
.logo {
  width: 10rem;
  height: 2.5rem;
}
</style>
