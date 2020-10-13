<template>
  <table class="mt-4 font-serif text-xl text-center sm:text-xl">
    <thead>
      <tr>
        <th class="w-1/2 px-2 py-2 border">US Central Time GMT-5</th>
        <th class="w-1/2 px-2 py-2 border">MY Time <br />GMT+8</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="schedule in schedules" :key="schedule.id">
        <!-- US Time -->
        <td class="px-2 py-2 border">
          {{ schedule.day }} <br />
          {{
            schedule.startTime > 12
              ? schedule.startTime - 12
              : schedule.startTime
          }}
          -
          {{ schedule.endTime > 12 ? schedule.endTime - 12 : schedule.endTime }}
          {{ schedule.endTime > 12 ? 'PM' : 'AM' }}
        </td>
        <!-- Malaysia Time -->
        <td class="px-2 py-2 border">
          {{ convertMalaysiaSchedule(schedule).day }} <br />
          {{ convertMalaysiaSchedule(schedule).startTime }}
          -
          {{ convertMalaysiaSchedule(schedule).endTime }}
          {{ convertMalaysiaSchedule(schedule).switchAM }}
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
      if (schedule.startTime > 12) {
        mytStartTime = schedule.startTime - 11
      } else {
        mytStartTime = schedule.startTime + 1
      }
      let mytEndTime
      if (schedule.endTime > 12) {
        mytEndTime = schedule.endTime - 11
      } else {
        mytEndTime = schedule.endTime + 1
      }
      return {
        day:
          schedule.startTime <= 10
            ? dayArray[dayArray.indexOf(schedule.day)]
            : dayArray[dayArray.indexOf(schedule.day) + 1],
        startTime: mytStartTime,
        endTime: mytEndTime,
        switchAM: schedule.endTime >= 12 ? 'AM' : 'PM',
      }
    },
  },
}
</script>

<style></style>
