<template>
  <main>
    <div id="header-background" class="h-screen sm:h-screen md:h-screen">
      <div class="px-8 md:px-12 lg:px-16 xl:px-16">
        <div
          class="py-12 font-serif text-5xl font-semibold tracking-wide text-white md:py-20 lg:py-20 xl:py-18 md:text-6xl lg:text-6xl xl:text-6xl"
        >
          Disclaimer
        </div>
        <div
          class="text-4xl font-semibold tracking-wide text-white md:text-5xl lg:text-5xl xl:text-5xl"
        >
          SpeakToUs is <br />a platform to <br />share your concerns <br />
          created by and for Malaysians.
        </div>
      </div>
    </div>

    <div id="footer-background" class="h-screen px-4 mt-12 md:px-8">
      <div
        class="px-8 pt-12 lg:pt-16 md:px-12 lg:px-12 xl:px-12 lg:text-gray-800"
      >
        <p class="font-serif text-2xl font-semibold tracking-wide md:text-5xl">
          In case of medical emergencies
        </p>
        <ul
          class="pl-6 mt-2 text-xl tracking-wide list-disc lg:pr-64 md:mt-20 md:text-3xl lg:text-2xl"
        >
          <li v-for="item in list" :key="item.id" class="py-4 md:py-6">
            {{ item.message }}
          </li>
        </ul>
      </div>
    </div>

    <div class="h-screen px-4 bg-gray-200 md:px-8">
      <div class="px-8 lg:pt-16 md:px-12 lg:px-12 xl:px-12 lg:text-gray-800">
        <div v-for="item in list2" :key="item.id" class="pt-8">
          <h1
            class="py-4 pr-12 font-serif text-xl font-bold leading-relaxed tracking-wide md:pr-6 lg:pr-20 xl:pr-48 md:text-4xl"
          >
            {{ item.header }}
          </h1>
          <p
            class="pr-6 text-lg leading-relaxed tracking-wide lg:pr-20 xl:pr-48 md:text-3xl lg:text-2xl"
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
      title: 'Disclaimer | SpeakToUs',
      description:
        'SpeakToUs is a platform to share your concerns created by and for Malaysians. Read more to find out our disclaimer.',
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
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/disclaimer'
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
