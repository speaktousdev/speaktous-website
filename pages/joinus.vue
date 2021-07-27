<template>
  <main
    class="max-w-screen-xl mx-auto text-black lg:text-gray-800 sm:px-12 md:px-20 lg:px-24"
  >
    <div class="flex flex-col-reverse md:flex-row items-center py-6 section-1">
      <div class="w-full sm:pt-10 sm:w-3/5">
        <div class="text-center md:text-left">
          <h1 class="font-serif text-3xl lg:text-4xl font-extrabold">
            STU Student Committee 2021
          </h1>
          <svg class="inline-block object-center w-24 h-2">
            <rect class="w-24 h-2 bg-green" style="fill: green" />
          </svg>
        </div>
        <div class="text-center section-desc sm:pr-12 lg:pr-6 sm:text-left">
          <p class="mt-2 text-lg md:text-2xl font-body sm:mt-6">
            Be part of a changing community.
          </p>
          <p class="my-2 text-lg md:text-2xl font-body sm:my-6">
            Join our student committee.
          </p>
        </div>
        <div class="flex flex-wrap mx-8 mt-8 buttons sm:w-full">
          <a
            class="justify-center w-full px-3 py-3 font-serif font-bold text-center text-white bg-green-400 rounded hover:bg-green-700 sm:w-1/3 sm:mr-2"
            :href="applyFormLink"
            target="_blank"
            rel="noreferrer"
          >
            Apply Now
          </a>
        </div>
      </div>
      <div class="mt-10 sm:w-2/5 sm:mt-0">
        <TeamIcon class="justify-center w-11/12 h-auto"></TeamIcon>
      </div>
    </div>

    <div class="flex flex-wrap py-6 mb-2 section-2 sm:mb-8">
      <div class="w-full text-center sm:pt-10">
        <div class="sm:w-full">
          <h1
            class="font-serif text-2xl font-extrabold text-center sm:text-5xl"
          >
            Benefits of joining us
          </h1>
          <svg class="inline-block object-center w-24 h-2">
            <rect class="w-24 h-2 bg-green" style="fill: green" />
          </svg>
        </div>
      </div>
      <div class="flex flex-wrap justify-around w-full mt-8">
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <CareerSupport class="inline-block w-56 h-auto" />
          <h3 class="inline-block mt-4 font-body">Career Support</h3>
        </div>
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <SupportGroup class="inline-block w-56 h-auto" />
          <h3 class="inline-block mt-8 font-body">Support Group</h3>
        </div>
      </div>
      <div class="flex flex-wrap justify-around w-full mt-8">
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <Certificate class="inline-block w-40 h-auto" />
          <h3 class="inline-block mt-8 font-body">
            Certificate of Appreciation
          </h3>
        </div>
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <PeopleIcon class="inline-block w-40 h-auto" />
          <h3 class="inline-block mt-4 font-body">Recognition on Website</h3>
        </div>
      </div>
    </div>

    <div class="mb-24 py-6 mt-4 section-3 sm:mt-10">
      <h1 class="font-serif text-2xl font-extrabold text-center sm:text-5xl">
        Committee roles
      </h1>
      <div class="text-center">
        <svg class="inline-block object-center w-24 h-2">
          <rect class="w-24 h-2 bg-green" style="fill: green" />
        </svg>
      </div>

      <div class="p-6 md:flex md:flex-row justify-center text-center">
        <ProjectPlanning class="inline-block w-56 h-auto" />
        <div class="md:flex md:flex-col md:px-8">
          <h2 class="font-serif font-bold py-4 text-xl md:text-2xl">
            Project Planning and Execution
          </h2>
          <p class="md:px-12 lg:px-24">
            Plan and execute projects to raise awareness regarding mental health
          </p>
        </div>
      </div>
      <div class="p-6 md:flex md:flex-row justify-center text-center">
        <Outreach class="inline-block w-64 h-auto" />
        <div class="md:flex md:flex-col">
          <h2 class="font-serif font-bold py-4 text-xl md:text-2xl">
            Universities Outreach
          </h2>
          <p class="md:px-12 lg:px-24">
            Outreach to other organizations to spread awareness and encourage
            mental health conversation
          </p>
        </div>
      </div>
      <div class="p-6 md:flex md:flex-row justify-center text-center">
        <Continuity class="inline-block w-64 h-auto" />
        <div class="md:flex md:flex-col">
          <h2 class="font-serif font-bold py-4 text-xl md:text-2xl">
            Organization Continuity
          </h2>
          <p class="md:px-12 lg:px-24">
            Continuity on finding successors to ensure SpeakToUs's Mission in
            normalizing mental health covnersation is achieved
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CareerSupport from '~/components/svg/joinus/CareerSupport.vue'
import Certificate from '~/components/svg/joinus/Certificate.vue'
import Continuity from '~/components/svg/joinus/Continuity.vue'
import Outreach from '~/components/svg/joinus/Outreach.vue'
import ProjectPlanning from '~/components/svg/joinus/ProjectPlanning.vue'
import SupportGroup from '~/components/svg/joinus/SupportGroup.vue'
import PeopleIcon from '~/components/svg/joinus/PeopleIcon.vue'
import TeamIcon from '~/components/svg/joinus/TeamIcon.vue'

export default {
  components: {
    CareerSupport,
    Certificate,
    SupportGroup,
    PeopleIcon,
    Continuity,
    Outreach,
    ProjectPlanning,
    TeamIcon,
  },
  data() {
    return {
      applyFormLink: 'https://forms.gle/wEGkUzF53V8LvLFJ7',
      title: 'Join Us | SpeakToUs',
      description: 'Be part of a changing community. Be a student committee.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/joinus',
        },
      ],
    }
  },
}
</script>

<style></style>
