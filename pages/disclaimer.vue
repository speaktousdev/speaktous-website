<template>
  <main>
    <div id="header-background" class="px-4 md:px-6 lg:px-10 xl:px-10 h-screen">
      <div
        class=" py-12 md:py-32 lg:py-20 xl:py-18 tracking-wide text-white text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-semibold"
      >
        Our Disclaimer
      </div>
      <div
        class="mt-4 md:mt-10 lg:mt-12 xl:mt-10 tracking-wide text-white text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold"
      >
        SpeakToUs is <br />a platform to <br />share your concerns <br />
        created by and for Malaysians.
      </div>
    </div>

    <div id="footer-background" class="mt-12 px-4 md:px-8 h-screen">
      <p class="tracking-wide text-black text-4xl md:text-5xl font-semibold">
        In case of medical emergencies
      </p>
      <ul
        class=" list-disc mt-2  text-2xl md:text-3xl pl-6 font-semibold tracking-wide"
      >
        <li v-for="item in list" :key="item.id" class="mt-4 md:mt-24 c">
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="bg-gray-200 mt-6 h-screen px-4 md:px-8">
      <p
        v-for="item in list2"
        :key="item.id"
        class="py-8 pr-12 lg:pr-20 xl:pr-48 text-xl md:text-3xl font-semibold tracking-wide leading-relaxed"
      >
        {{ item.message }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, message: 'Call 911 for medical emergencies' },
        {
          id: 2,
          message:
            'If your condition is not as serious for you to call the ambulance, find a friend who can drive you or accompany you to the nearest hospital or clinic.'
        },
        {
          id: 3,
          message:
            "If you have mental health emergencies, please contact your respective university's health services."
        }
      ],
      list2: [
        {
          id: 1,
          message:
            'We are NOT medical professionals, but we share a similar cultural background as Malaysians. We are ready to listen and be there for you.'
        },
        {
          id: 2,
          message:
            'Our approaches may NOT fit every individual and situation, but we’ll try our best to accommodate your concern.'
        },
        {
          id: 3,
          message:
            'Our Listeners are bilinguals: English and Malay. Feel free to SpeakToUs in either language! More languages will be added soon.'
        }
      ]
    }
  }
}
</script>

<style scoped>
#header-background {
  background-color: rgb(116, 183, 87);
}
</style>
