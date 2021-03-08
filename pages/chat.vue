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
        <div
          class="flex flex-col items-center text-center md:mt-6 md:ml-6 md:text-left"
        >
          <p class="mt-4 text-xl text-center underline sm:text-2xl">
            Online hours:
          </p>
          <ScheduleTable
            :us-schedules="usSchedules"
            :my-schedules="mySchedules"
          />
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
        <Email :is-about-page="false" />
      </div>
    </div>
  </main>
</template>

<script>
import { DateTime } from 'luxon'
import ChatMainIcon from '~/components/svg/chat/ChatMainIcon.vue'
import FloatingDisclaimer from '~/components/FloatingDisclaimer.vue'
import Email from '~/components/Email.vue'
import ScheduleTable from '~/components/ScheduleTable.vue'

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default {
  components: {
    FloatingDisclaimer,
    ChatMainIcon,
    Email,
    ScheduleTable,
  },
  data() {
    return {
      title: 'Chat With Us Online | SpeakToUs',
      chatLink: 'https://tawk.to/chat/5de9f162d96992700fcb04a3/default',
      isModalVisible: false,
      isOnline: this.isChatOnline(),
      // Schedules in Madison time (US Central Time) 24 hrs format
      usSchedules: [
        {
          id: 1,
          day: 'Friday',
          startTime: 20,
          endTime: 22,
        },
        {
          id: 2,
          day: 'Saturday',
          startTime: 19,
          endTime: 21,
        },
        {
          id: 3,
          day: 'Sunday',
          startTime: 20,
          endTime: 22,
        },
      ],
    }
  },
  computed: {
    /**
     * Malaysia schedule converted from US schedule
     */
    mySchedules() {
      return this.convertToTimezone('Asia/Kuala_Lumpur', this.usSchedules)
    },
    /**
     * Automates the creation of page description according to schedule.
     */
    description() {
      const convertTo12Hour = (time) => {
        if (time === 0) {
          return 12
        }
        if (time >= 13) {
          return time - 12
        }
        return time
      }

      let schedules = ''

      this.usSchedules.forEach((schedule, index) => {
        const day = schedule.day
        const amOrPm = schedule.startTime >= 12 ? 'pm' : 'am'
        const startTime = convertTo12Hour(schedule.startTime)
        const endTime = convertTo12Hour(schedule.endTime)

        if (index === this.usSchedules.length - 1) {
          schedules += `and ${day} ${startTime}-${endTime}${amOrPm}`
        } else {
          schedules += `${day} ${startTime}-${endTime}${amOrPm}, `
        }
      })

      const usGMT = `GMT-${DateTime.fromObject({
        zone: 'America/Chicago',
      })
        .toString()
        .substring(25, 26)}`

      return `Our online chat is available on ${schedules} (US Central Time ${usGMT}). You can also email us at any time.`
    },
  },
  methods: {
    /**
     * Checks if current time is chat time.
     *
     * @returns {boolean} true if online, false if offline
     */
    isChatOnline() {
      const usTimeNow = DateTime.fromObject({
        zone: 'America/Chicago',
      })

      for (const schedule in this.usSchedules) {
        const usStartTime = DateTime.fromObject({
          weekday: this.getDayNumberFromName(schedule.day),
          hour: schedule.startTime,
          zone: 'America/Chicago',
        })
        const usEndTime = DateTime.fromObject({
          weekday: this.getDayNumberFromName(schedule.day),
          hour: schedule.endTime,
          zone: 'America/Chicago',
        })

        if (usTimeNow >= usStartTime && usTimeNow <= usEndTime) {
          return true
        }
      }

      return false
    },
    /**
     * Converts from America/Chicago timezone to selected TZ timezone in params.
     *
     * @param {string} timezone name of timezone according to the TZ database name (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     * @param {Array} usSchedules schedule according to America/Chicago timezone
     * @returns {Array} converted array of schedules
     */
    convertToTimezone(timezone, usSchedules) {
      const mySchedules = []

      for (const schedule of usSchedules) {
        const usStartTime = DateTime.fromObject({
          weekday: this.getDayNumberFromName(schedule.day),
          hour: schedule.startTime,
          zone: 'America/Chicago',
        })
        const usEndTime = DateTime.fromObject({
          weekday: this.getDayNumberFromName(schedule.day),
          hour: schedule.endTime,
          zone: 'America/Chicago',
        })

        const myStartTime = usStartTime.setZone(timezone)
        const myEndTime = usEndTime.setZone(timezone)

        mySchedules.push({
          id: schedule.id,
          day: this.getDayNameFromNumber(myStartTime.weekday),
          startTime: myStartTime.hour,
          endTime: myEndTime.hour,
        })
      }

      return mySchedules
    },
    /**
     * Converts from weekday number to day name.
     *
     * @param {number} dayNumber day number from 1-7 (i.e. Monday-Sunday)
     * @returns {string} day name
     */
    getDayNameFromNumber(dayNumber) {
      return dayNames[dayNumber - 1]
    },
    /**
     * Converts from day name to weekday number (1-7 i.e. Monday-Sunday).
     *
     * @param {string} dayName day name
     * @returns {number} day number from 1-7 (i.e. Monday-Sunday)
     */
    getDayNumberFromName(dayName) {
      return dayNames.indexOf(dayName) + 1
    },
    openChat() {
      window.open(this.chatLink, '_blank')
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
