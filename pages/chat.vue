/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
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
          <rect class="w-24 h-2" style="fill: green" />
        </svg>
      </div>
      <div class="md:flex md:flex-row md:justify-center">
        <ChatMainIcon class="hidden w-56 h-56 mt-32 md:block" />
        <div class="text-center md:mt-6 md:ml-6 md:text-left">
          <p class="mt-4 text-xl text-center underline sm:text-2xl">
            Online hours:
          </p>
          <ScheduleTable :schedules="schedules" />
        </div>
      </div>

      <button
        v-if="isOnline"
        class="px-20 py-2 mt-4 text-3xl text-center text-white bg-green-400 rounded-lg shadow-xl hover:bg-green-700"
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
import ScheduleTable from '~/components/ScheduleTable.vue'

export default {
  components: {
    FloatingDisclaimer,
    ChatMainIcon,
    Email,
    ScheduleTable,
  },
  data() {
    return {
      isOnline: false,
      isAboutPage: false,
      chatLink: 'https://tawk.to/chat/5de9f162d96992700fcb04a3/default',
      isModalVisible: false,
      title: 'Chat With Us Online | SpeakToUs',
      description: this.getDescriptionString(),

      // Schedules in Madison time (US Central Time GMT-5) 24 hrs format
      schedules: [
        {
          id: 1,
          day: 'Sunday',
          startTime: 21,
          endTime: 23,
        },
        {
          id: 2,
          day: 'Sunday',
          startTime: 12,
          endTime: 13,
        },
        {
          id: 3,
          day: 'Sunday',
          startTime: 10,
          endTime: 15,
        },
      ],
    }
  },
  mounted() {
    const currentTime = new Date()
    if (this.isCurrentTimeWithinSchedule(currentTime)) {
      this.isOnline = true
    }
    // if (d.getUTCDay() === 0 && d.getUTCHours() >= 1 && d.getUTCHours() < 3) {
    //   this.isOnline = true
    // }
  },
  methods: {
    openChat() {
      window.open(this.chatLink, '_blank')
    },
    convertUtcDay(time) {
      const dayToConvert = time.day.toLowerCase()
      const utcDayArray = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ]
      // console.log(utcDayArray.indexOf(dayToConvert))
      if (time.startTime + 5 >= 24) {
        return utcDayArray.indexOf(dayToConvert) + 1
      } else return utcDayArray.indexOf(dayToConvert)
    },
    convertUtcHours(hours) {
      // REMINDER : THIS FUNCTION CONSIDERS DAYLIGHT SAVING TIME
      // utcHours = hours + 5
      return hours + 5 >= 24 ? hours - 19 : hours
    },
    isCurrentTimeWithinSchedule(currentTime) {
      // UTC timezone is 5 hours ahead of Madison, WI; 8 hours behind Malaysia
      const flag = this.schedules.findIndex(
        (s) =>
          this.convertUtcDay(s) === currentTime.getUTCDay() &&
          this.convertUtcHours(s.startTime) <= currentTime.getUTCHours()
      )
      return flag >= 0
    },
    getDescriptionString() {
      return 'Our online chat is available every Saturday 7-9pm and Sunday 3-5am (US Central Time GMT-6). You can also email us at any time.'
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/chat',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
