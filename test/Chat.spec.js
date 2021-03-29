import { shallowMount } from '@vue/test-utils'
import chat from '@/pages/chat.vue'

import { DateTime } from 'luxon'

const usZone = 'America/Chicago'
const usSchedules = [
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
]

describe('chat page', () => {
  test('getDayNumberFromName() returns the correct values', () => {
    const wrapper = shallowMount(chat)

    // test equality
    expect(wrapper.vm.getDayNumberFromName('Monday')).toEqual(1)
    expect(wrapper.vm.getDayNumberFromName('Tuesday')).toEqual(2)
    expect(wrapper.vm.getDayNumberFromName('Wednesday')).toEqual(3)
    expect(wrapper.vm.getDayNumberFromName('Thursday')).toEqual(4)
    expect(wrapper.vm.getDayNumberFromName('Friday')).toEqual(5)
    expect(wrapper.vm.getDayNumberFromName('Saturday')).toEqual(6)
    expect(wrapper.vm.getDayNumberFromName('Sunday')).toEqual(7)

    // test unequality
    expect(wrapper.vm.getDayNumberFromName('Monday')).not.toEqual(7)
    expect(wrapper.vm.getDayNumberFromName('Tuesday')).not.toEqual(6)
    expect(wrapper.vm.getDayNumberFromName('Wednesday')).not.toEqual(5)
    expect(wrapper.vm.getDayNumberFromName('Thursday')).not.toEqual(1)
    expect(wrapper.vm.getDayNumberFromName('Friday')).not.toEqual(3)
    expect(wrapper.vm.getDayNumberFromName('Saturday')).not.toEqual(2)
    expect(wrapper.vm.getDayNumberFromName('Sunday')).not.toEqual(1)
  })

  test('getDayNameFromNumber() returns the correct values', () => {
    const wrapper = shallowMount(chat)

    // test equality
    expect(wrapper.vm.getDayNameFromNumber(1)).toEqual('Monday')
    expect(wrapper.vm.getDayNameFromNumber(2)).toEqual('Tuesday')
    expect(wrapper.vm.getDayNameFromNumber(3)).toEqual('Wednesday')
    expect(wrapper.vm.getDayNameFromNumber(4)).toEqual('Thursday')
    expect(wrapper.vm.getDayNameFromNumber(5)).toEqual('Friday')
    expect(wrapper.vm.getDayNameFromNumber(6)).toEqual('Saturday')
    expect(wrapper.vm.getDayNameFromNumber(7)).toEqual('Sunday')

    // test unequality
    expect(wrapper.vm.getDayNameFromNumber(1)).not.toEqual('Sunday')
    expect(wrapper.vm.getDayNameFromNumber(2)).not.toEqual('Saturday')
    expect(wrapper.vm.getDayNameFromNumber(3)).not.toEqual('Friday')
    expect(wrapper.vm.getDayNameFromNumber(4)).not.toEqual('Monday')
    expect(wrapper.vm.getDayNameFromNumber(5)).not.toEqual('Monday')
    expect(wrapper.vm.getDayNameFromNumber(6)).not.toEqual('Tuesday')
    expect(wrapper.vm.getDayNameFromNumber(7)).not.toEqual('Monday')
  })

  test('isChatOnline returns true when current time is within schedule times', () => {
    const wrapper = shallowMount(chat)

    // Test Friday schedule
    let currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 20,
      weekday: 5,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 21,
      weekday: 5,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 22,
      minute: 0,
      weekday: 5,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    // Test Saturday schedule
    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 19,
      weekday: 6,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 20,
      weekday: 6,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 21,
      minute: 0,
      weekday: 6,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    // Test Sunday schedule
    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 20,
      weekday: 7,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 21,
      weekday: 7,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 22,
      minute: 0,
      weekday: 7,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      true
    )
  })

  test('isChatOnline returns false when current time is not within schedule times', () => {
    const wrapper = shallowMount(chat)

    // Test Friday for time not within schedule
    let currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 19,
      minute: 59,
      weekday: 5,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 22,
      minute: 1,
      weekday: 5,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )

    // Test Saturday for time not within schedule
    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 18,
      minute: 59,
      weekday: 6,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 21,
      minute: 1,
      weekday: 6,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )

    // Test Sunday for time not within schedule
    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 19,
      minute: 59,
      weekday: 7,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )

    currentTime = DateTime.fromObject({
      zone: 'America/Chicago',
      hour: 22,
      minute: 1,
      weekday: 7,
    })
    expect(wrapper.vm.isChatOnline(currentTime, usSchedules, usZone)).toEqual(
      false
    )
  })

  test('convertToTimezone() converts DST US hours to Malaysia hours correctly', () => {
    const wrapper = shallowMount(chat)

    const malaysiaTimezone = 'Asia/Kuala_Lumpur'

    // Friday, 2 April 2021 8pm America/Chicago time
    let usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 20,
    })
    // Expect to convert to 9AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(9)

    // Friday, 2 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 21,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Friday, 2 April 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 22,
    })
    // Expect to convert to 11AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(11)

    // Saturday, 3 April 2021 7pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 19,
    })
    // Expect to convert to 8AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(8)

    // Saturday, 3 April 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 20,
    })
    // Expect to convert to 9AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(9)

    // Saturday, 3 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 21,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Sunday, 4 April 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 20,
    })
    // Expect to convert to 9AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(9)

    // Sunday, 4 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 21,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Sunday, 4 April 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 22,
    })
    // Expect to convert to 11AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(11)
  })

  test('convertToTimezone() converts non-DST US hours to Malaysia hours correctly', () => {
    const wrapper = shallowMount(chat)

    const malaysiaTimezone = 'Asia/Kuala_Lumpur'

    // Friday, 19 November 2021 8pm America/Chicago time
    let usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 20,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Friday, 19 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 21,
    })
    // Expect to convert to 11AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(11)

    // Friday, 19 November 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 22,
    })
    // Expect to convert to 12PM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(12)

    // Saturday, 20 November 2021 7pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 19,
    })
    // Expect to convert to 9AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(9)

    // Saturday, 20 November 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 20,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Saturday, 20 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 21,
    })
    // Expect to convert to 11AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(11)

    // Sunday, 21 November 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 20,
    })
    // Expect to convert to 10AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(10)

    // Sunday, 21 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 21,
    })
    // Expect to convert to 11AM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(11)

    // Sunday, 21 November 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 22,
    })
    // Expect to convert to 12PM Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).hour
    ).toEqual(12)
  })

  test('convertToTimezone() converts DST US days to Malaysia days correctly', () => {
    const wrapper = shallowMount(chat)

    const malaysiaTimezone = 'Asia/Kuala_Lumpur'

    // Friday, 2 April 2021 8pm America/Chicago time
    let usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 20,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Friday, 2 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 21,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Friday, 2 April 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 2,
      hour: 22,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Saturday, 3 April 2021 7pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 19,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Saturday, 3 April 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 20,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Saturday, 3 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 3,
      hour: 21,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Sunday, 4 April 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 20,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)

    // Sunday, 4 April 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 21,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)

    // Sunday, 4 April 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 4,
      day: 4,
      hour: 22,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)
  })

  test('convertToTimezone() converts non-DST US days to Malaysia days correctly', () => {
    const wrapper = shallowMount(chat)

    const malaysiaTimezone = 'Asia/Kuala_Lumpur'

    // Friday, 19 November 2021 8pm America/Chicago time
    let usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 20,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Friday, 19 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 21,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Friday, 19 November 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 19,
      hour: 22,
    })
    // Expect to convert to Saturday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(6)

    // Saturday, 20 November 2021 7pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 19,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Saturday, 20 November 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 20,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Saturday, 20 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 20,
      hour: 21,
    })
    // Expect to convert to Sunday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(7)

    // Sunday, 21 November 2021 8pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 20,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)

    // Sunday, 21 November 2021 9pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 21,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)

    // Sunday, 21 November 2021 10pm America/Chicago time
    usTime = DateTime.fromObject({
      zone: 'America/Chicago',
      year: 2021,
      month: 11,
      day: 21,
      hour: 22,
    })
    // Expect to convert to Monday Malaysia time
    expect(
      wrapper.vm._convertUsTimeToTimezone(malaysiaTimezone, usTime).weekday
    ).toEqual(1)
  })
})
