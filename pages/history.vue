<template>
  <main class="max-w-screen-xl text-black lg:text-gray-800 lg:mx-auto">
    <div class="justify-between px-10 lg:px-24 mt-18 md:flex md:flex-row">
      <div class="text-center justify-center">
        <h1
          class="mt-4 font-serif text-4xl font-extrabold tracking-wide lg:text-6xl md:mt-16 lg:mt-14 md:text-4xl"
        >
          History
        </h1>
        <div class="text-center md:px-20">
          <p class="mt-4 text-lg xl:mt-8 lg:text-xl xl:text-2xl">
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
        class="mt-4 font-serif text-2xl font-extrabold tracking-wide lg:text-4xl md:mt-16 lg:mt-14 md:text-2xl md:text-left"
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
          date: '2017 - 2018',
          image: '~assets/images/about/stuphoto.jpg',
          bulletPoint: [
            'The year where mental health comes into the picture when Shaza started to experience it by herself. She reached out and found herself in Effrie’s house seeking help. ',
            'A medium length point 2',
            'A really really long point to test out the maximum width of the container in its entirety and ever',
          ],
        },
        {
          id: 2,
          date: '20 November 2019',
          image: '~assets/images/about/stuphoto.jpg',
          bulletPoint: [
            'Short point 1',
            'A medium length point 2',
            'A really really long point to test out the container',
          ],
        },
        {
          id: 3,
          date: '13 March 2020',
          image: '~assets/images/about/stuphoto.jpg',
          bulletPoint: [
            'Short point 1',
            'A medium length point 2',
            'A really really long point to test out the container',
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
