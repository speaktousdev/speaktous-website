<template>
  <main
    class="max-w-screen-xl mx-auto text-black lg:text-gray-800 px-10 font-serif">
    <section class="md:mt-16"><HeroSection /></section>
    <section class="my-16">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
          The Team
        </h2>
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">Year</label>
          <select
            id="location"
            name="location"
            class="
              mt-1
              block
              w-full
              pl-3pr-10
              py-2
              text-base
              border-gray-300
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
              rounded-md
            "
          >
            <option
              v-for="committee in committees"
              :key="committee.year"
              selected
            >
              {{ committee.year }}
            </option>
          </select>
        </div>
      </div>
      <StudentsCard class="my-12" :students-list="committees[0].studentsList" />
    </section>
    <section class="my-16">
      <Achievements
        class="my-12 lg:ml-12"
        :achievementsList="committees[0].achievementsList"
      />
    </section>
  </main>
</template>

<script>
import HeroSection from '../components/student-committee/HeroSection.vue'
import StudentsCard from '../components/student-committee/StudentsCards.vue'
import Achievements from '../components/student-committee/Achievements.vue'

export default {
  components: { HeroSection, StudentsCard, Achievements },
  data: () => ({
    committees: [
      {
        year: '2021',
        studentsList: [
          {
            name: 'Mujahid',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            role: 'President',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
          {
            name: 'Mujahid',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            role: 'President',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
          {
            name: 'Mujahid',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            role: 'President',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
        ],
        achievementsList: [
          {
            title: 'Mental Health Campaign SpeakToUs',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            date: 'September 2021',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
          {
            title: 'Mental Health Campaign SpeakToUs 2',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            date: 'September 2021',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
          {
            title: 'Mental Health Campaign SpeakToUs 2',
            image:
              'https://static.vecteezy.com/system/resources/previews/000/643/326/original/vector-group-people-icon.jpg',
            date: 'September 2021',
            caption:
              'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla  ',
          },
        ],
      },
    ],
  }),
}
</script>
