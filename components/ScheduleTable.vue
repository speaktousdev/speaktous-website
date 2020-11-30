<template>
  <table class="mt-4 font-serif text-xl text-center sm:text-xl">
    <thead>
      <tr>
        <th v-if="isDstObserved" class="w-1/2 px-2 py-2 border">
          US Central Time <br />GMT-5
        </th>
        <th v-else class="w-1/2 px-2 py-2 border">
          US Central Time <br />GMT-6
        </th>
        <th class="w-1/2 px-2 py-2 border">MY Time <br />GMT+8</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="schedule in schedules" :key="schedule.id">
        <!-- US Time -->
        <td class="px-2 py-2 border">
          {{ schedule.day }} <br />
          {{ schedule.startTime % 12 === 0 ? 12 : schedule.startTime % 12 }}
          {{ schedule.startTime >= 12 ? 'PM' : 'AM' }}
          -
          {{ schedule.endTime % 12 === 0 ? 12 : schedule.endTime % 12 }}
          {{ schedule.endTime >= 12 ? 'PM' : 'AM' }}
        </td>
        <!-- Malaysia Time -->
        <td class="px-2 py-2 border">
          {{ convertMalaysiaSchedule(schedule).day }} <br />
          {{ convertMalaysiaSchedule(schedule).startTime }}
          {{ convertMalaysiaSchedule(schedule).startMeridiem }}
          -
          {{ convertMalaysiaSchedule(schedule).endTime }}
          {{ convertMalaysiaSchedule(schedule).endMeridiem }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      required: true,
    },
    isDstObserved: {
      type: Number,
      required: true,
    },
  },
  methods: {
    convertMalaysiaSchedule(schedule) {
      const dayArray = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]

      let mytStartTime
      let startMeridiemString
      if (schedule.startTime >= 12) {
        mytStartTime = this.isDstObserved
          ? schedule.startTime - 11
          : schedule.startTime - 10
        startMeridiemString = mytStartTime >= 12 ? 'PM' : 'AM'
      } else {
        mytStartTime = this.isDstObserved
          ? schedule.startTime + 1
          : schedule.startTime + 2
        startMeridiemString = 'PM'
      }

      let mytEndTime
      let endMeridiemString
      if (schedule.endTime >= 12) {
        mytEndTime = this.isDstObserved
          ? schedule.endTime - 11
          : schedule.endTime - 10
        endMeridiemString = mytEndTime >= 12 ? 'PM' : 'AM'
      } else {
        mytEndTime = this.isDstObserved
          ? schedule.endTime + 1
          : schedule.endTime + 2
        endMeridiemString = 'PM'
      }

      return {
        day:
          (this.isDstObserved && schedule.startTime <= 10) ||
          (!this.isDstObserved && schedule.startTime <= 9)
            ? dayArray[dayArray.indexOf(schedule.day)]
            : dayArray[dayArray.indexOf(schedule.day) + 1],
        startTime: mytStartTime % 12 === 0 ? 12 : mytStartTime % 12,
        endTime: mytEndTime % 12 === 0 ? 12 : mytEndTime % 12,
        startMeridiem: startMeridiemString,
        endMeridiem: endMeridiemString,
      }
    },
  },
}
</script>

<style></style>
