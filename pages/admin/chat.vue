<template>
  <div class="flex">
    <adminNav />
    <!-- Users List  -->
    <div class="w-[300px] border-r-2 border-gray-800 bg-gray-700 h-screen overflow-y-auto p-5">
      <ul v-for="(user, index) in users" :key="index">
          <li class="border px-8 rounded-full py-4 my-2">
            <p class="text-white">{{ user.firstName }} {{ user.lastName }}</p>
          </li>
      </ul>
    </div>
    <div class=" h-[500px] overflow-y-auto border-2 border-black mt-8 mb-4 p-2  sm:w-1/2 m-auto ">
      <ul class="w-2/3" :class="{ 'ml-auto': message.isAdmin }" v-for="message in messages" :key="message.id">
        <li>
          <!-- {{ message.text }} -->
          <div class=" mr-auto flex flex-col bg-gray-200 rounded-md mb-2">
            <p class="bg-gray-100 pl-1">{{ message.email }}</p>
            <p class="p-2"> {{ message.text }}</p>
          </div>
        </li>
      </ul>
      <form @submit.prevent="sendMessage">
        <input class="border-2 border-black focus:outline-none mt-2 p-1 w-3/4" v-model="newMessage" type="text" required>
        <button class="bg-blue-300 py-2 px-3 rounded-lg" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      messages: [],
      newMessage: '',
      users:[],
      user:''
    }
  },
  async created() {
    
    await this.$fire.auth.onAuthStateChanged(async user => {
      this.user=user;
      if(user){
      const userRef = this.$fire.firestore.collection('users').doc(user.uid)
      await userRef.collection('messages')
        .orderBy('timestamp', "asc")
        .onSnapshot(querySnapshot => {
          this.messages = querySnapshot.docs.map(doc => doc.data())
          
        })
      }
    });

    const userslist = []
    await this.$fire.firestore.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userslist.push({
          id: doc.id,
          ...doc.data()
        })
      });

      this.users = userslist
    })

  },
  methods: {
    async sendMessage() {
      if (this.user && this.newMessage != '') {
        const userRef = this.$fire.firestore.collection('users').doc(this.user.uid)
        await userRef.collection('messages').add({
          email: this.user.email,
          text: this.newMessage,
          timestamp: new Date(),
          isAdmin: true

        })
        this.newMessage = ''

      }
    }
  }
}
</script>