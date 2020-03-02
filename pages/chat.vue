<template>
  <main class="max-w-screen-xl p-4 lg:mx-auto sm:mx-20">
    <div class="flex flex-row items-center mt-4">
      <span
        v-if="isOnline"
        class="inline-block w-4 h-4 bg-green-300 rounded-full"
      />
      <span v-else class="inline-block w-4 h-4 bg-gray-500 rounded-full" />

      <div v-if="isOnline" class="ml-3 text-sm sm:text-xl">ONLINE</div>
      <div v-else class="ml-3 text-sm sm:text-xl">OFFLINE</div>
    </div>

    <div class="mb-8 text-center sm:mt-16">
      <h1 class="font-serif text-4xl text-gray-800 sm:text-6xl">
        Chat With Us
        <br class="sm:hidden" />Online
      </h1>
      <div class="text-center">
        <svg class="inline-block w-24 h-2">
          <rect class="w-24 h-2" style="fill:green;" />
        </svg>
      </div>
      <div class="md:flex md:flex-row md:justify-center">
        <ChatMainIcon class="hidden w-48 h-48 md:block" />
        <div class="text-center md:mt-6 md:ml-6 md:text-left">
          <p class="mt-4 text-xl underline sm:text-2xl">Online hours:</p>
          <p class="text-xl sm:text-2xl">
            Every Sunday, 7 - 9pm (US Central Time GMT-6)
          </p>
          <p class="text-xl sm:text-2xl">
            Every Sunday 4 - 6pm (MY Time GMT+8)
          </p>
        </div>
      </div>

      <button
        v-if="isOnline"
        class="px-20 py-2 mt-4 text-3xl text-center text-white bg-green-400 rounded shadow-xl hover:bg-green-700"
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
      <div class="mt-48 font-serif">
        <h1 v-if="isOnline" class="text-2xl sm:text-3xl">
          If you don't prefer chat, you can email us!
        </h1>
        <h1 v-else class="text-2xl sm:text-3xl">
          Our chat is offline, but you can email us!
        </h1>
        <h2 class="mb-6 text-lg text-gray-700 sm:text-2xl">
          SpeakToUs listeners will respond to your email as soon as possible.
        </h2>
        <Email class="" />
      </div>
    </div>
  </main>
</template>

<script>
import ChatMainIcon from '~/components/svg/chat/ChatMainIcon.vue'
import Email from '~/components/Email.vue'

export default {
  components: {
    ChatMainIcon,
    Email
  },
  data() {
    return {
      isOnline: true,
      chatLink: 'https://tawk.to/chat/' + process.env.TAWK_KEY + '/default'
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
