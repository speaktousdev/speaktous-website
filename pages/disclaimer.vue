<template>
  <main>
    <div id="header-background" class=" h-screen sm:h-screen md:h-screen">
      <div class="px-8 md:px-12 lg:px-16 xl:px-16">
        <div
          class=" font-serif py-12 md:py-20 lg:py-20 xl:py-18 tracking-wide text-white text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-semibold"
        >
          Disclaimer
        </div>
        <div
          class=" tracking-wide text-white text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold"
        >
          SpeakToUs is <br />a platform to <br />share your concerns <br />
          created by and for Malaysians.
        </div>
      </div>
    </div>

    <div id="footer-background" class="mt-12 px-4 md:px-8 h-screen">
      <div class="pt-12 lg:pt-16 px-8 md:px-12 lg:px-12 xl:px-12">
        <p
          class="font-serif tracking-wide text-black text-2xl md:text-5xl font-semibold"
        >
          In case of medical emergencies
        </p>
        <ul
          class="lg:pr-64 list-disc mt-2 md:mt-20  text-xl md:text-3xl lg:text-2xl pl-6  tracking-wide"
        >
          <li v-for="item in list" :key="item.id" class=" py-4  md:py-6">
            {{ item.message }}
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-gray-200 h-screen px-4 md:px-8">
      <div class="px-8 lg:pt-16 md:px-12 lg:px-12 xl:px-12">
        <div v-for="item in list2" :key="item.id" class="pt-8">
          <h1
            class="font-serif py-4 pr-12 md:pr-6 lg:pr-20 xl:pr-48 text-xl md:text-4xl font-bold tracking-wide leading-relaxed"
          >
            {{ item.header }}
          </h1>
          <p
            class=" pr-6 lg:pr-20 xl:pr-48 text-lg md:text-3xl lg:text-2xl  tracking-wide leading-relaxed"
          >
            {{ item.message }}
          </p>
        </div>
      </div>
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
          header: 'We are NOT medical professionals,',
          message:
            ' but we share a similar cultural background as Malaysians. We are ready to listen and be there for you.'
        },
        {
          id: 2,
          header: 'Our approaches may NOT fit,',
          message: ' but we’ll try our best to accommodate your concern.'
        },
        {
          id: 3,
          header: 'Our Listeners are bilinguals: English and Malay. ',
          message:
            'Feel free to SpeakToUs in either language! More languages will be added soon.'
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
