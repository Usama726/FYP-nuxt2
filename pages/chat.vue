<template>
  <div class="w-96 mt-8 mb-4 m-auto border-2 border-black">
    <ul class="p-2">
      <li v-for="(message, index) in messages" :key="index">
        {{ message.text }}
      </li>
    </ul>
    <form class=" p-10" @submit.prevent="sendMessage">
      <input class="border-2 border-black h-8 focus:outline-none" v-model="newMessage" type="text">
      <headerbtn v-if="newMessage!=''" type="submit">Send</headerbtn>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    }
  },
  async created() {
    await this.$fire.firestore.collection('messages')
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        this.messages = querySnapshot.docs.map(doc => doc.data())
      })
  },
  methods: {
    async sendMessage() {
      await this.$fire.firestore.collection('messages').add({
        text: this.newMessage,
        createdAt: new Date()
      })
      this.newMessage = ''
    }
  }
}
</script>
