<!-- <template>
  <div class="login-box flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="w-full max-w-lg space-y-8">

      <form class=" space-y-6 p-9 shadow-2xl bg-gray-100" @submit.prevent="registerUser">
        <input type="hidden" name="remember" value="true">
        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input
              class=" appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name" required type="text" placeholder="Enter First Name" v-model="firstName">

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" required type="text" placeholder="Enter last Name" v-model="lastName">
          </div>
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input id="email-address" name="email" type="email" required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Email address" v-model="email">
          </div>
          <div>
            <label for="password" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Password</label>
            <input id="password" name="password" type="password"  required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-15 text-indigo-400 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            SignUp
          </button>
        </div>
      </form>
    </div>
  </div>
</template> -->
<template>
  <div id="nav">
    <top-svg></top-svg>
    <div class="bg-design w-full pt-2 p-4">

      <div class="mt-[-300px] mx-auto md:p-6 md:container lg:w-1/2">
        <div class=" mb-2 bg-white flex  justify-center rounded">
          <span class="text-3xl  text-blue-500 font-bold p-3 ">
            Sign-Up
          </span>

        </div>

        <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
          <form method="POST" @submit.prevent="loginUser">
            <div class="md:flex justify-between gap-4">
              <div class="mb-8">
                <label for="fistName" class="block text-gray-700 text-sm font-bold mb-2">
                  <span class="text-red-500">&nbsp;*</span>
                  First Name
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input name="firstName" id="firstName" type="fistName" placeholder="First Name" v-model="firstName"
                    required
                    class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out">
                </div>
              </div>
              <div class="mb-8">
                <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">
                  <span class="text-red-500">&nbsp;*</span>
                  Last Name
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input name="lastName" id="lastName" type="lastName" placeholder="Last Name" v-model="lastName" required
                    class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out">
                </div>
              </div>
            </div>
            <div class="mb-8">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
                <span class="text-red-800">&nbsp;*</span>
                Email Address ( <strong class="text-red-500 text-sm italic">email is required )</strong>
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">

                <input id="email" type="email" v-model="email" placeholder="you@gmail.com" required
                  class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out" />
              </div>

            </div>

            <div class="mb-8">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                <span class="text-red-500">&nbsp;*</span>
                Password
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">

                <input name="password" id="password" type="password" placeholder="**********" v-model="password" required
                  class="block pr-10 shadow appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 transition duration-500 ease-in-out">
              </div>
            </div>

            <div class="mb-6">
              <div class="flex items-center justify-between">
                <div>
                  <label class="block text-gray-500 font-bold" for="remember">
                    <input class="ml-2 leading-tight" type="checkbox" id="remember" name="remember">
                    <span class="text-sm">
                      remember me
                    </span>
                  </label>
                </div>
                <div>
                  <a class="font-bold text-sm text-blue-700 hover:text-blue-900" href="#password-request">
                    forgot password
                  </a>
                </div>
              </div>
            </div>

            <div class="mb-4 text-center">
              <button
                class="transition duration-500 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Register
              </button>
            </div>
            <hr>
            <div class="mt-3">
              <p class="text-sm text-center">
                Already have an account
                <nuxt-link to="/login" class="font-bold text-lg text-blue-500 hover:text-blue-600 italic pl-3">
                  Login
                </nuxt-link>
              </p>
            </div>
          </form>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }),
  methods: {
    registerUser() {

      this.$fire.auth.createUserWithEmailAndPassword(
        this.email,
        this.password,
      )
        .then(async (userCredential) => {
          await this.$fire.firestore.collection("users").doc(userCredential.user.uid).set({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
          })
          this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.password = '',
            this.$router.push('/login')
        })
        .catch((e) => console.log(e.message))
    },
  }

}
</script>

<style scoped>
.bg-design{
  backdrop-filter: saturate(200%) blur(25px);
}
</style>