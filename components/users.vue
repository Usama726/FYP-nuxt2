<template>
  <div>
    <!-- <button @click="modalIsOpen = true" class="md:hidden p-3 w-full bg-black">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-9 h-9 fill-current dark:text-gray-100">
        <rect width="352" height="32" x="80" y="96"></rect>
        <rect width="352" height="32" x="80" y="240"></rect>
        <rect width="352" height="32" x="80" y="384"></rect>
      </svg>
    </button> -->
    <div class="md:block px-5 pt-3 w-full md:w-[300px] border-r-2 border-gray-800 bg-gray-700 h-screen overflow-y-auto">
      <p class="text-2xl text-center text-white mb-5">Users List</p>
      <ul v-for="(user, index) in users" :key="index">
        <nuxt-link :to="`/admin/chatUser/${user.id}`">
          <li class="border px-8 rounded-full py-4 my-2">
            <div class="flex items-center justify-between">
              <p class="text-white text-sm md:text-md">{{ user.firstName }} {{ user.lastName }}</p>
              <span class="bg-green-600 p-1 rounded-full" v-if="unreadMessageCount > 0">{{ unreadMessageCount }}</span>
            </div>
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      users: [],
      modalIsOpen: false

    }
  },

  async created() {
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
  computed: {
    ...mapGetters(['unreadMessageCount']),
  },
  // methods: {
  //   async markMessageAsRead() {
  //     // Update the message status in Firebase
  //     const userRef = this.$fire.firestore.collection('users').doc(this.$route.params.id)
  //     await userRef.collection('messages').doc().update({ isRead: true });

  //     // Update the unreadMessageCount in Vuex
  //     this.$store.dispatch('updateUnreadMessageCount', this.$store.getters.unreadMessageCount = 0);
  //   }
  // }
}
</script>


<style scoped></style>