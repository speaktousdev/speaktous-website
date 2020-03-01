<template>
  <main class="px-8 sm:px-12 md:px-20">
    <div class="section-1 flex flex-wrap py-6 items-center">
      <div class="w-full sm:pt-10 sm:w-3/5">
        <div class="sm:w-64 text-center sm:text-left">
          <h1
            class="text-center sm:text-left font-heading font-extrabold text-4xl sm:text-6xl"
          >
            Join Us
          </h1>
          <svg class="w-24 h-2 object-center inline-block">
            <rect class="w-24 h-2 bg-green" style="fill:green;" />
          </svg>
        </div>
        <div class="section-desc sm:pr-12 text-center sm:text-left">
          <p class="text-lg sm:text-4xl font-body mt-2 sm:mt-6">
            Be part of a changing community.
          </p>
          <p class="text-lg sm:text-4xl font-body my-2 sm:my-6">
            Be a listener.
          </p>
          <p class="text-sm sm:text-lg mt-8 font-body">No experience needed.</p>
        </div>
        <div class="buttons flex flex-wrap w-full mt-8 p-0 sm:w-full">
          <button
            class="justify-center font-heading font-bold text-center text-white bg-green-400 rounded hover:bg-green-700 w-full sm:w-1/3 py-3 px-3 mr-0 sm:mr-2"
            @click="openApplyForm"
          >
            Apply Now
          </button>
        </div>
      </div>
      <div class="w-full sm:w-2/5 mt-10 sm:mt-0">
        <TeamIcon class="w-full h-auto"></TeamIcon>
      </div>
    </div>

    <div class="section-2 flex flex-wrap py-6 mb-2 sm:mb-8">
      <div class="w-full sm:pt-10 text-center">
        <div class="sm:w-full">
          <h1
            class="text-center font-heading font-extrabold text-2xl sm:text-5xl"
          >
            As Our Listener..
          </h1>
          <svg class="w-24 h-2 object-center inline-block">
            <rect class="w-24 h-2 bg-green" style="fill:green" />
          </svg>
        </div>
      </div>
      <div class="mt-8 w-full flex flex-wrap justify-around">
        <div class="w-full sm:w-1/4 text-center p-6 sm:p-0">
          <ChatIcon class="w-56 h-auto inline-block" />
          <h3 class="font-body inline-block mt-4">
            Attend and listen to our responder during online session
          </h3>
        </div>
        <div class="w-full sm:w-1/4 text-center p-6 sm:p-0">
          <FileIcon class="w-40 h-auto inline-block" />
          <h3 class="font-body mt-8 inline-block">
            Maintain confidentiality about student's issues
          </h3>
        </div>
      </div>
    </div>

    <div
      class="section-3 flex flex-col-reverse sm:flex-row flex-wrap py-6 mt-4 sm:mt-10"
    >
      <div class="w-full sm:w-1/2 text-center">
        <PeopleIcon class="my-8 sm:my-0 w-40 sm:w-64 h-auto inline-block" />
      </div>
      <div class="w-full sm:w-1/2 px-6 text-center sm:text-left">
        <h1
          class="text-center sm:text-left font-heading font-extrabold text-2xl sm:text-4xl"
        >
          Why Be A Listener?
        </h1>
        <svg class="w-24 h-2 inline-block">
          <rect class="w-24 h-2 bg-green" style="fill:green;" />
        </svg>
        <ul class="list-disc text-left mt-8 sm:mt-0">
          <li class="font-body">Be an active peer support.</li>
          <li class="font-body mt-1">
            Get involved in mental health support training.
          </li>
          <li class="font-body mt-1">
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
      window.open('https://www.google.com', '_blank')
    }
  }
}
</script>

<style></style>
