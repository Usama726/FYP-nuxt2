 <template>
  <div class="login-box flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="w-full max-w-md space-y-8">

      <form class=" space-y-6 p-9 shadow-2xl bg-gray-100" action="#" >
        <input type="hidden" name="remember" value="true">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="mb-2">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Email address"  v-model="loginEmail" >
          </div>
          <div>
            <label for="password" class="mb-2">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Password" v-model="loginPassword">
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
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    loginEmail: "",
    loginPassword: ""
  }),
  methods: {
    async loginUser() {
      console.log("strted");
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.loginEmail,
          this.loginPassword
        );
        alert('Successfully logged in');
        this.$router.push("/medicines");
      } catch (e) {
       alert(e);
      }
    }
  }
};
</script>
<!--

@submit.prevent="handleLogin"
  v-model="creds.email"
v-model="creds.password"

<script >

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const creds = reactive({
  email: '',
  password: '',
})
console.log(creds.email, creds.password)

const handleLogin = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, creds.email, creds.password)

    .then((userCredential) => {

      alert('Successfully logged in');

    })
    .catch(error => alert(error.message));
}
</script>

<style scoped>
.login-box {
  padding-top: 8rem;
}
</style> -->