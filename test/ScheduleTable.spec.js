import { mount } from '@vue/test-utils'
import ScheduleTable from '@/components/ScheduleTable.vue'

describe('ScheduleTable', () => {
  // Schedules in Madison time (US Central Time GMT-5) 24 hrs format
  const schedules = [
    {
      id: 1,
      day: 'Wednesday',
      startTime: 20,
      endTime: 22,
    },
    {
      id: 2,
      day: 'Friday',
      startTime: 3,
      endTime: 8,
    },
    {
      id: 3,
      day: 'Sunday',
      startTime: 13,
      endTime: 14,
    },
  ]

  const madisonSchedules = [
    {
      day: 'Sunday',
      endTime: 2,
      id: 0,
      startTime: 0,
    },
    {
      day: 'Monday',
      endTime: 3,
      id: 1,
      startTime: 1,
    },
    {
      day: 'Tuesday',
      endTime: 4,
      id: 2,
      startTime: 2,
    },
    {
      day: 'Wednesday',
      endTime: 5,
      id: 3,
      startTime: 3,
    },
    {
      day: 'Thursday',
      endTime: 6,
      id: 4,
      startTime: 4,
    },
    {
      day: 'Friday',
      endTime: 7,
      id: 5,
      startTime: 5,
    },
    {
      day: 'Saturday',
      endTime: 8,
      id: 6,
      startTime: 6,
    },
    {
      day: 'Sunday',
      endTime: 9,
      id: 7,
      startTime: 7,
    },
    {
      day: 'Monday',
      endTime: 10,
      id: 8,
      startTime: 8,
    },
    // {
    //   day: 'Tuesday',
    //   endTime: 11,
    //   id: 9,
    //   startTime: 9,
    // },
    // {
    //   day: 'Wednesday',
    //   endTime: 12,
    //   id: 10,
    //   startTime: 10,
    // },
    {
      day: 'Thursday',
      endTime: 13,
      id: 11,
      startTime: 11,
    },
    {
      day: 'Friday',
      endTime: 14,
      id: 12,
      startTime: 12,
    },
    {
      day: 'Saturday',
      endTime: 15,
      id: 13,
      startTime: 13,
    },
    {
      day: 'Sunday',
      endTime: 16,
      id: 14,
      startTime: 14,
    },
    {
      day: 'Monday',
      endTime: 17,
      id: 15,
      startTime: 15,
    },
    {
      day: 'Tuesday',
      endTime: 18,
      id: 16,
      startTime: 16,
    },
    {
      day: 'Wednesday',
      endTime: 19,
      id: 17,
      startTime: 17,
    },
    {
      day: 'Thursday',
      endTime: 20,
      id: 18,
      startTime: 18,
    },
    {
      day: 'Friday',
      endTime: 21,
      id: 19,
      startTime: 19,
    },
    {
      day: 'Saturday',
      endTime: 22,
      id: 20,
      startTime: 20,
    },
    // {
    //   id: 21,
    //   day: 'Sunday',
    //   startTime: 21,
    //   endTime: 23,
    // },
    // {
    //   day: 'Sunday/Monday',
    //   endTime: 0,
    //   id: 22,
    //   startTime: 22,
    // },
    // {
    //   day: 'Monday/Tuesday',
    //   endTime: 1,
    //   id: 23,
    //   startTime: 23,
    // },
  ]

  const convertedMalaysiaSchedules = [
    {
      day: 'Sunday',
      endTime: 3,
      startTime: 1,
      switchAM: 'PM',
    },
    {
      day: 'Monday',
      endTime: 4,
      startTime: 2,
      switchAM: 'PM',
    },
    {
      day: 'Tuesday',
      endTime: 5,
      startTime: 3,
      switchAM: 'PM',
    },
    {
      day: 'Wednesday',
      endTime: 6,
      startTime: 4,
      switchAM: 'PM',
    },
    {
      day: 'Thursday',
      endTime: 7,
      startTime: 5,
      switchAM: 'PM',
    },
    {
      day: 'Friday',
      endTime: 8,
      startTime: 6,
      switchAM: 'PM',
    },
    {
      day: 'Saturday',
      endTime: 9,
      startTime: 7,
      switchAM: 'PM',
    },
    {
      day: 'Sunday',
      endTime: 10,
      startTime: 8,
      switchAM: 'PM',
    },
    {
      day: 'Monday',
      endTime: 11,
      startTime: 9,
      switchAM: 'PM',
    },
    // {
    //   day: 'Tuesday/Wednesday',
    //   endTime: 12AM,
    //   startTime: 10PM,
    //   switchAM: 'PM/AM',
    // },
    // {
    //   day: 'Wednesday/Thursday',
    //   endTime: 1AM,
    //   startTime: 11PM,
    //   switchAM: 'PM/AM',
    // },
    {
      day: 'Friday',
      endTime: 2,
      startTime: 12,
      switchAM: 'AM',
    },
    {
      day: 'Saturday',
      endTime: 3,
      startTime: 1,
      switchAM: 'AM',
    },
    {
      day: 'Sunday',
      endTime: 4,
      startTime: 2,
      switchAM: 'AM',
    },
    {
      day: 'Monday',
      endTime: 5,
      startTime: 3,
      switchAM: 'AM',
    },
    {
      day: 'Tuesday',
      endTime: 6,
      startTime: 4,
      switchAM: 'AM',
    },
    {
      day: 'Wednesday',
      endTime: 7,
      startTime: 5,
      switchAM: 'AM',
    },
    {
      day: 'Thursday',
      endTime: 8,
      startTime: 6,
      switchAM: 'AM',
    },
    {
      day: 'Friday',
      endTime: 9,
      startTime: 7,
      switchAM: 'AM',
    },
    {
      day: 'Saturday',
      endTime: 10,
      startTime: 8,
      switchAM: 'AM',
    },
    {
      day: 'Sunday',
      endTime: 11,
      startTime: 9,
      switchAM: 'AM',
    },
    // {
    //   day: 'Sunday/Monday',
    //   startTime: 10AM Sunday,
    //   endTime: 12PM Monday,
    //   switchAM: 'AM/PM',
    // },
    // {
    //   day: 'Monday/Tuesday',
    //   endTime: 1PM Tuesday,
    //   startTime: 11AM Monday,
    //   switchAM: 'AM/PM',
    // },
    // {
    //   day: 'Tuesday/Wednesday',
    //   endTime: 2AM ,
    //   startTime: 23,
    //   switchAM: 'AM',
    // },
  ]

  it('is a Vue instance', () => {
    const wrapper = mount(ScheduleTable, {
      propsData: { schedules },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('shows the correct Malaysia times (GMT+8) when AM/PM does not overlap', () => {
    const wrapper = mount(ScheduleTable, {
      propsData: { schedules },
    })

    madisonSchedules.forEach((schedule, index) => {
      expect(wrapper.vm.convertMalaysiaSchedule(schedule)).toEqual(
        convertedMalaysiaSchedules[index]
      )
    })
  })

  // it('shows the correct Malaysia times (GMT+8) when overlapping AM/PM', () => {
  //   const wrapper = mount(ScheduleTable, {
  //     propsData: { schedules },
  //   })

  //   madisonSchedules.forEach((schedule, index) => {
  //     expect(wrapper.vm.convertMalaysiaSchedule(schedule)).toEqual(
  //       convertedMalaysiaSchedules[index]
  //     )
  //   })
  // })
})
