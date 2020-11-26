<template>
  <main class="max-w-screen-xl text-black lg:text-gray-800 lg:mx-auto">
    <div class="justify-between px-10 lg:px-24 mt-18 mb-4 md:flex md:flex-row">
      <div class="text-center md:mb-8">
        <h1
          class="mt-4 font-serif text-4xl font-extrabold tracking-wide lg:text-6xl md:mt-16 lg:mt-14 md:text-4xl"
        >
          History
        </h1>
        <div class="text-center md:px-20">
          <p class="mx-2 text-lg xl:mt-8 lg:text-xl xl:text-2xl">
            We are a student-led organization based in the University of
            Wisconsin-Madison, USA that provides a
            <b>peer-to-peer support platform</b>
            for Malaysian students in the US. Through our chat feature, we are
            providing an online medium for students to speak up and share their
            concerns, just like having a friend who listens to your stories.
          </p>
          <p class="mt-4 text-lg xl:mt-8 lg:text-xl xl:text-2xl">
            Our team consists of inspiring inviduals with passion to care for
            others and dedication to change the stigma against mental health.
          </p>
        </div>
      </div>
    </div>
    <div class="px-6 py-6 bg-gray-200 share-section sm:px-12 lg:px-24 sm:py-10">
      <h1
        class="font-serif text-2xl font-extrabold tracking-wide lg:text-4xl md:my-8 md:text-2xl md:text-center"
      >
        Timeline
      </h1>
      <div v-for="item in timelineItem" :key="item.id">
        <Timeline :content="item" />
      </div>
    </div>
  </main>
</template>

<script>
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      timelineItem: [
        {
          id: 1,
          date: 'Aug 2017 - Aug 2018',
          bulletPoint: [
            'Mental health awareness comes into the picture when Shaza started to experience mental health situations herself. She thought it was just one of those bad days, long bad days without an ending.',
            'After realizing the condition was getting serious, she reached out to her friends and family which one day brought her to Effrie’s house, a friend who was experiencing the same condition. ',
            'They bonded as they shared and realized that they were not alone. Even though their situations were different, the talk helped them.',
          ],
        },
        {
          id: 2,
          date: 'Feb 2019',
          bulletPoint: [
            'A mental health talk Shaza attended had brought the idea to create a platform for students to talk anonymously. She talked about the idea out to Effrie.',
            'Effrie supported the idea and she volunteered to assist with writing out the idea and then submitted it to the Malaysia Student Association (MSA).',
            'Shaza called it – SpeakToUs.',
          ],
        },
        {
          id: 3,
          date: 'April 2019',
          bulletPoint: [
            'The SpeakToUs was presented to the MSA committee, however, it was rejected because the idea required high commitment. Shaza thought that was the end.',
          ],
        },
        {
          id: 4,
          date: 'Early September 2019',
          bulletPoint: [
            'Shaza used another approach to create SpeakToUs as a stand-alone organization.',
            'She started to recruit and Effrie was the first member.',
          ],
        },
        {
          id: 5,
          date: '16th September 2019',
          bulletPoint: [
            'With 9 volunteers and one advisor, Mr.Ghee Syn Ong, SpeakToUs was born.',
            'This group is called the #pioneers.',
          ],
        },
        {
          id: 6,
          date: 'Dec 2019 - Present',
          bulletPoint: [
            '#Pioneers built a strong foundation for SpeakToUs. With their determination, the online platform was born and made available to users until now.',
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
