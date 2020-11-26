<template>
  <table class="mt-4 font-serif text-xl text-center sm:text-xl">
    <thead>
      <tr>
        <th v-if="isDstObserved" class="w-1/2 px-2 py-2 border">
          US Central Time <br />GMT-6
        </th>
        <th v-else class="w-1/2 px-2 py-2 border">
          US Central Time <br />GMT-5
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
          {{ convertMalaysiaSchedule(schedule).switchStartMeridiem }}
          -
          {{ convertMalaysiaSchedule(schedule).endTime }}
          {{ convertMalaysiaSchedule(schedule).switchEndMeridiem }}
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
      // Calculations consider Daylight saving starts
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
      let convertStartMeridiem = false
      if (schedule.startTime >= 12) {
        mytStartTime = this.isDstObserved
          ? schedule.startTime - 10
          : schedule.startTime - 11
        convertStartMeridiem = true
      } else {
        mytStartTime = this.isDstObserved
          ? schedule.startTime + 2
          : schedule.startTime + 1
      }

      let mytEndTime
      let convertEndMeridiem = false
      if (schedule.endTime >= 12) {
        mytEndTime = this.isDstObserved
          ? schedule.endTime - 10
          : schedule.endTime - 11
        convertEndMeridiem = true
      } else {
        mytEndTime = this.isDstObserved
          ? schedule.endTime + 2
          : schedule.endTime + 1
      }

      return {
        day:
          schedule.startTime <= 10
            ? dayArray[dayArray.indexOf(schedule.day)]
            : dayArray[dayArray.indexOf(schedule.day) + 1],
        startTime: mytStartTime % 12 === 0 ? 12 : mytStartTime % 12,
        endTime: mytEndTime % 12 === 0 ? 12 : mytEndTime % 12,
        switchStartMeridiem:
          mytStartTime >= 12 && convertStartMeridiem ? 'PM' : 'AM',
        switchEndMeridiem: mytEndTime >= 12 && convertEndMeridiem ? 'PM' : 'AM',
      }
    },
  },
}
</script>

<style></style>
