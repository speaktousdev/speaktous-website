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
      <h1 class="font-serif text-4xl font-extrabold text-gray-800 sm:text-6xl">
        Chat With Us
        <br class="sm:hidden" />Online
      </h1>
      <div class="text-center">
        <svg class="inline-block w-24 h-2">
          <rect class="w-24 h-2" style="fill:green;" />
        </svg>
      </div>
      <div class="md:flex md:flex-row md:justify-center">
        <ChatMainIcon class="hidden w-56 h-56 mt-32 md:block" />
        <div class="text-center md:mt-6 md:ml-6 md:text-left">
          <p class="mt-4 text-xl text-center underline sm:text-2xl">
            Online hours:
          </p>
          <table class="mt-4 font-serif text-xl text-center sm:text-xl">
            <thead>
              <tr>
                <th class="w-1/2 px-2 py-2 border">MY Time <br />GMT+8</th>
                <th class="w-1/2 px-2 py-2 border">US Central Time GMT-6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-2 py-2 border">Thursday <br />10-11 A.M</td>
                <td class="px-2 py-2 border">Wednesday <br />9-10 P.M</td>
              </tr>
              <tr>
                <td class="px-2 py-2 border">Sunday <br />8-10 A.M</td>
                <td class="px-4 py-2 border">Saturday <br />7-9 P.M</td>
              </tr>
              <tr>
                <td class="px-2 py-2 border">Sunday <br />4-6 P.M</td>
                <td class="px-2 py-2 border">Sunday <br />3-5 A.M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        v-if="isOnline"
        class="px-20 py-2 mt-4 mt-20 text-3xl text-center text-white bg-green-400 rounded-lg shadow-xl hover:bg-green-700"
        @click="isModalVisible = true"
      >
        Chat now!
      </button>
      <button
        v-else
        class="px-20 py-2 mt-4 text-center text-white bg-gray-600 rounded-lg opacity-50 cursor-not-allowed"
      >
        Offline
      </button>

      <FloatingDisclaimer
        v-if="isModalVisible"
        :chat-link="chatLink"
        @close="isModalVisible = false"
      />

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
        <Email :isaboutpage="isAboutPage" />
      </div>
    </div>
  </main>
</template>

<script>
import ChatMainIcon from '~/components/svg/chat/ChatMainIcon.vue'
import FloatingDisclaimer from '~/components/FloatingDisclaimer.vue'
import Email from '~/components/Email.vue'

export default {
  components: {
    ChatMainIcon,
    FloatingDisclaimer,
    Email
  },
  data() {
    return {
      isOnline: false,
      isAboutPage: false,
      chatLink: 'https://tawk.to/chat/5de9f162d96992700fcb04a3/default',
      isModalVisible: false,
      title: 'Chat With Us Online | SpeakToUs',
      description:
        'Our online chat is available (on US Central Time GMT-6) every Wednesday 9-10pm, Saturday 7-9pm & Sunday 3-5am.'
    }
  },
  mounted() {
    // UTC timezone is 5 hours ahead of Madison, WI; 8 hours behind Malaysia
    // UTC Day Sunday: 0000hrs-0200hrs (Madison), Sunday 0800hrs -1000hrs (Malaysia)
    const d = new Date()
    if (d.getUTCDay() === 0 && d.getUTCHours() >= 0 && d.getUTCHours() < 2) {
      this.isOnline = true
    } else if (
      d.getUTCDay() === 0 &&
      d.getUTCHours() >= 8 &&
      d.getUTCHours() < 10
    ) {
      this.isOnline = true
    } else if (
      d.getUTCDay() === 4 &&
      d.getUTCHours() >= 2 &&
      d.getUTCHours() < 3
    ) {
      this.isOnline = true
    }
  },
  methods: {
    openChat() {
      window.open(this.chatLink, '_blank')
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/chat'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
