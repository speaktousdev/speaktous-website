<template>
  <main class="max-w-screen-xl p-4 mx-auto">
    <div class="flex flex-row items-center">
      <span
        v-if="isOnline"
        class="inline-block w-4 h-4 bg-green-300 rounded-full"
      />
      <span v-else class="inline-block w-4 h-4 bg-gray-500 rounded-full" />

      <div v-if="isOnline" class="ml-3 text-sm sm:text-xl">ONLINE</div>
      <div v-else class="ml-3 text-sm sm:text-xl">OFFLINE</div>
    </div>

    <div class="text-center sm:mt-4">
      <h1 class="text-4xl text-gray-800 sm:text-6xl">
        Chat With Us
        <br class="sm:hidden" />Online
      </h1>
      <div class="text-center">
        <svg class="inline-block w-24 h-2">
          <rect class="w-24 h-2" style="fill:green;" />
        </svg>
      </div>
      <p class="mt-4 text-xl underline sm:text-3xl">Online hours:</p>
      <p class="text-xl sm:text-3xl">Every Sunday, 7 - 9 pm CDT</p>

      <div class="text-center">
        <!-- <ChatMainIcon class="inline-block w-32 h-32 sm:w-48 sm:h-48" /> -->
      </div>

      <button
        v-if="isOnline"
        class="px-20 py-2 mt-4 text-center text-white bg-green-400 rounded hover:bg-green-700"
        @click="openChat"
      >
        Chat now!
      </button>
      <button
        v-else
        class="px-20 py-2 text-center text-white bg-gray-400 rounded hover:bg-gray-700"
      >
        Offline
      </button>
      <div class="mt-12">
        <h1 class="text-2xl sm:text-3xl">
          Need us outside online hours?<br class="sm:hidden" />
          Email us!
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
// import ChatMainIcon from '~/components/svg/chatpage/ChatMainIcon.vue'

export default {
  components: {
    // ChatMainIcon
  },
  data() {
    return {
      isOnline: true,
      chatLink: 'https://google.com'
    }
  },
  methods: {
    openChat() {
      window.open(this.chatLink, '_blank')
    }
  }
}
</script>

<style scoped></style>
