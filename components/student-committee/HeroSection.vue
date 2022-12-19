<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 md:px-0">
    <div class=" flex flex-col-reverse md:flex-row">
      <div
        class="
          sm:text-center
          md:max-w-2xl
          lg:col-span-6 lg:text-left
        "
      >
        <h1 class="text-4xl md:text-4xl font-extrabold tracking-wide lg:text-6xl md:text-left">Student Committee</h1>
        <p
          class="
            mt-3
            text-base text-gray-500
            sm:mt-5 sm:text-xl
            md:text-base
            lg:text-lg
            xl:text-xl
            md:pr-24
          "
        >
          A student-led branch of SpeakToUs focusing on bridging connections with students and incorporating new and fresh ideas to spread mental health awareness.
        </p>
      </div>
      <HeaderIcon class="w-full md:w-1/2"/>
    </div>
  </main>
</template>
<script>
import HeaderIcon from '../../components/svg/committee/HeaderIcon.vue'

export default {
components:{ HeaderIcon }
}
</script>


export default{
  
}
