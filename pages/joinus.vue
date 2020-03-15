<template>
  <main class="max-w-screen-xl px-8 mx-auto sm:px-12 md:px-20">
    <div class="flex flex-wrap items-center py-6 section-1">
      <div class="w-full sm:pt-10 sm:w-3/5">
        <div class="text-center sm:w-64 sm:text-left">
          <h1
            class="font-serif text-4xl font-extrabold text-center sm:text-left sm:text-6xl"
          >
            Join Us
          </h1>
          <svg class="inline-block object-center w-24 h-2">
            <rect class="w-24 h-2 bg-green" style="fill:green;" />
          </svg>
        </div>
        <div class="text-center section-desc sm:pr-12 sm:text-left">
          <p class="mt-2 text-lg sm:text-4xl font-body sm:mt-6">
            Be part of a changing community.
          </p>
          <p class="my-2 text-lg sm:text-4xl font-body sm:my-6">
            Be a listener.
          </p>
          <p class="mt-8 text-sm sm:text-lg font-body">No experience needed.</p>
        </div>
        <div class="flex flex-wrap w-full p-0 mt-8 buttons sm:w-full">
          <button
            class="justify-center w-full px-3 py-3 mr-0 font-serif font-bold text-center text-white bg-green-400 rounded hover:bg-green-700 sm:w-1/3 sm:mr-2"
            @click="openApplyForm"
          >
            Apply Now
          </button>
        </div>
      </div>
      <div class="w-full mt-10 sm:w-2/5 sm:mt-0">
        <TeamIcon class="w-full h-auto"></TeamIcon>
      </div>
    </div>

    <div class="flex flex-wrap py-6 mb-2 section-2 sm:mb-8">
      <div class="w-full text-center sm:pt-10">
        <div class="sm:w-full">
          <h1
            class="font-serif text-2xl font-extrabold text-center sm:text-5xl"
          >
            As Our Listener..
          </h1>
          <svg class="inline-block object-center w-24 h-2">
            <rect class="w-24 h-2 bg-green" style="fill:green" />
          </svg>
        </div>
      </div>
      <div class="flex flex-wrap justify-around w-full mt-8">
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <ChatIcon class="inline-block w-56 h-auto" />
          <h3 class="inline-block mt-4 font-body">
            Attend and listen to our responder during online session
          </h3>
        </div>
        <div class="w-full p-6 text-center sm:w-1/4 sm:p-0">
          <FileIcon class="inline-block w-40 h-auto" />
          <h3 class="inline-block mt-8 font-body">
            Maintain confidentiality about student's issues
          </h3>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col-reverse flex-wrap py-6 mt-4 section-3 sm:flex-row sm:mt-10"
    >
      <div class="w-full text-center sm:w-1/2">
        <PeopleIcon class="inline-block w-40 h-auto my-8 sm:my-0 sm:w-64" />
      </div>
      <div class="w-full px-6 text-center sm:w-1/2 sm:text-left">
        <h1
          class="font-serif text-2xl font-extrabold text-center sm:text-left sm:text-4xl"
        >
          Why Be A Listener?
        </h1>
        <svg class="inline-block w-24 h-2">
          <rect class="w-24 h-2 bg-green" style="fill:green;" />
        </svg>
        <ul class="mt-8 text-left list-disc sm:mt-0">
          <li class="font-body">Be an active peer support.</li>
          <li class="mt-1 font-body">
            Get involved in mental health support training.
          </li>
          <li class="mt-1 font-body">
            Gain experience in conflict management.
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import ChatIcon from '~/components/svg/joinus/ChatIcon.vue'
import PeopleIcon from '~/components/svg/joinus/PeopleIcon.vue'
import TeamIcon from '~/components/svg/joinus/TeamIcon.vue'
import FileIcon from '~/components/svg/joinus/FileIcon.vue'

export default {
  components: {
    ChatIcon,
    PeopleIcon,
    TeamIcon,
    FileIcon
  },
  methods: {
    openApplyForm() {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLScHDL33O6aq-Wbh8ZvV_TOnHtcL2mKihaqDbBvuafGW3HJYWg/viewform',
        '_blank'
      )
    }
  }
}
</script>

<style></style>
