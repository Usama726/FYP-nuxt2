<template>
  <div>
    <!-- Top SVG of Page -->
    <top-svg />
    <!-- Top Banner Of Every Page -->
    <div class="container  mx-auto px-6 md:px-12 xl:px-32 mb-6 z-20">
      <div class="rotate-[-5deg] animate-bounce mt-[-280px] block px-6 py-6 md:py-2 md:px-12 ">
        <span
          class=" text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:display-none text-white">Contact
          Us</span>
      </div>
    </div>


    <!-- Conatct Form -->
    <!-- Container for demo purpose -->
    <div class="mt-48 container my-24 mx-auto md:px-6">
      <!-- Section: Design Block -->
      <section class="mt-24 ">
        <div class="py-12 md:px-12">
          <div class="container mx-auto xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div class="relative z-[10] block rounded-lg bg-white px-6 py-12 md:px-12 lg:-mr-14 shadow-lg">
                  <h2 class="bg-blue-500 animate-pulse rounded-lg p-2 mb-12 text-3xl font-bold text-center text-white">Contact us</h2>
                  <form>
                    <div class="mb-8">
                      <label  class="block text-gray-700 text-sm font-bold mb-2">
                        <span class="text-red-500">&nbsp;*</span>
                      Full Name
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="text" placeholder="Enter Your Full Name"
                          required
                          class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label  class="block text-gray-700 text-sm font-bold mb-2">
                        <span class="text-red-500">&nbsp;*</span>
                      Email Address
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <input type="email" placeholder="Enter Your Email"
                          required
                          class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out">
                      </div>
                    </div>
                    <div class="mb-8">
                      <label  class="block text-gray-700 text-sm font-bold mb-2">
                        <span class="text-red-500">&nbsp;*</span>
                      Message
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">

                        <textarea type="text" placeholder="Enter Your Message"
                          required
                          class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full h-24 py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out"></textarea>
                      </div>
                    </div>
                    
                    <button type="button" data-te-ripple-init data-te-ripple-color="light"
                      class="block rounded border border-blue-500 px-6 pt-2.5 pb-2 text-md font-bold uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white ">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div class="md:mb-12 lg:mb-0 hidden lg:block rotate-[5deg]">
                <div class="relative  h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg"
                    class="absolute left-0 top-0 h-full w-full rounded-lg" frameborder="0" allowfullscreen>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
  </div>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 1s;
}

@keyframes bounce {

  0% {
    transform: translatex(-100%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translatex(0%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  75% {
    transform: translatex(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  100% {
    transform: translatex(0%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>