<template>
  <table class="mt-4 font-serif text-xl text-center sm:text-xl">
    <thead>
      <tr>
        <th class="w-1/2 px-2 py-2 border">
          US Central Time <br />{{ usGMT }}
        </th>
        <th class="w-1/2 px-2 py-2 border">MY Time <br />GMT+8</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(schedule, index) in usSchedules" :key="schedule.id">
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
          {{ mySchedules[index].day }} <br />
          {{
            mySchedules[index].startTime % 12 === 0
              ? 12
              : mySchedules[index].startTime % 12
          }}
          {{ mySchedules[index].startTime >= 12 ? 'PM' : 'AM' }}
          -
          {{
            mySchedules[index].endTime % 12 === 0
              ? 12
              : mySchedules[index].endTime % 12
          }}
          {{ mySchedules[index].endTime >= 12 ? 'PM' : 'AM' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    usSchedules: {
      type: Array,
      required: true,
    },
    mySchedules: {
      type: Array,
      required: true,
    },
  },
  computed: {
    usGMT() {
      const usTime = DateTime.fromObject({
        zone: 'America/Chicago',
      })
      return `GMT-${usTime.toString().substring(25, 26)}`
    },
  },
}
</script>
