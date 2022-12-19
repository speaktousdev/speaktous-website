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
        :achievements-list="committees[0].achievementsList"
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
      { year: '2021',
        studentsList: [
          {
            name: 'Nur Afizah',
            image:
              '2021/Afizah_2021.png',
            role: 'President',
            caption:
              'Our next Iron Lady in SpeakToUs. Her experiences volunteering in a mental health organisations and her amazing leadership record making her the leader STU needed. She will be leading STU Comms.',
          },
          {
            name: 'Huzaifah',
            image:"2021/Huzaifah_2021.jpeg",
            role: 'Vice President and Marketing Director',
            caption:
              'Alongside Afizah, our marketing master. He has been honour with two positions due to his skills in marketing and his leadership experiences. Check his instagram for his book review.',
          },
          {
            name: 'Wei Jian',
            image:
              '2021/WeiJian_2021.png',
            role: 'Treasurer',
            caption:
              'Completing the team, we bring you Wei Jian! He will be looking over the financial part of the events. Working in a non-profit organization, we need someone to keep everything balance. He is the chosen one.',
          },
          {
            name: 'Tian Jing',
            image:"2021/Tj_2021.JPG",
            role: 'Media Director ',
            caption:
              'Be it discord, zoom, or any new platform - we have our media queen, TJ, taking the lead on the latest media available. She will be taking over the STU Media Platform. ',
          },
          {
            name: 'Nur Ain',
            image:'2021/NurAin_2021.jpg',
            role: 'Event Director',
            caption:
              'Complementing Media and Marketing, we have our event director to keep all the events organised. Introducing Ain to the team. Her PR in local universities makes her one of the kind. ',
          },
          
        ],
        achievementsList: [
          {
            title: 'STU Comms Establishment',
            image: '2021/introduction.png',
            date: 'October 2021',
            caption:
              'STU Committee is officially established with amazing leadership talents.',
          },
        ],
      },
    ],
  }),
}
</script>
