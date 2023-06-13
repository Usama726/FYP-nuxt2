
<template>
  <div id="nav">
    <navbar />
    <top-svg></top-svg>
    <div class="bg-design w-full pt-2 px-12">

      <div class="mt-[-400px] max-w-2xl mx-auto">
        <div class=" mt-24 mb-2 bg-white flex  justify-center rounded">
          <span class="text-3xl  text-blue-500 font-bold p-3 ">
            Sign-Up
          </span>

        </div>

        <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-16">
          <form method="POST" @submit.prevent="registerUser">
            <div class="md:grid grid-cols-2  gap-8">
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
    <thefooter />
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
            timestamp: new Date()
          })
          this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.password = '',
            this.$router.push('/')
        })
        .catch((e) => alert(e.message))
    },
  }

}
</script>

<style scoped>
.bg-design{
  backdrop-filter: saturate(200%) blur(25px);
}
</style>