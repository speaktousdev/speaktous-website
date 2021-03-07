<template>
  <main class="max-w-screen-xl mx-auto text-black lg:text-gray-800">
    <div class="flex flex-wrap px-8 py-6 intro-section sm:px-12 lg:px-24">
      <div class="sm:pt-10 sm:w-3/5">
        <div class="sm:w-64 lg:w-full">
          <h1
            class="font-serif text-4xl font-extrabold text-center lg:text-6xl sm:text-left"
          >
            You Share
          </h1>
          <h1
            class="mb-6 -mt-2 font-serif text-4xl font-extrabold text-center lg:text-6xl sm:text-left sm:mb-4"
          >
            We Care
          </h1>
        </div>
        <div class="text-left section-desc sm:pr-12">
          <p class="text-lg">
            SpeakToUs is an
            <strong class>online chat platform</strong>
            for Malaysian students in the United States to share and express
            their feelings to a fellow Malaysian.
            <br />
            <span class="mt-10"
              >Tell us how you feel. We are here to listen.</span
            >
          </p>
        </div>
        <div class="flex flex-wrap w-full p-0 mt-8 buttons sm:w-full">
          <nuxt-link
            to="/chat"
            class="justify-center w-full px-3 py-3 mr-0 font-serif font-bold text-center text-white bg-green-400 rounded-lg hover:bg-green-700 sm:w-1/3 sm:mr-2"
          >
            Chat Now
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="justify-center w-full px-3 py-3 mt-3 font-serif font-bold text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 sm:w-1/3 sm:mt-0"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
      <div class="w-full logo-placeholder sm:pt-8 sm:w-2/5">
        <img
          class="w-full"
          src="~assets/images/index/STU-logo.jpg"
          alt="Speak To Us logo."
        />
      </div>
    </div>

    <div class="px-6 py-6 bg-gray-200 share-section sm:px-12 lg:px-24 sm:py-10">
      <div class="items-center text-center title-with-underline">
        <h1
          class="font-serif text-3xl font-extrabold text-center sm:text-left sm:text-4xl"
        >
          Why Share With Us?
        </h1>
        <div
          class="relative inline-block w-1/2 border-b-2 border-green-500 sm:block sm:left-0"
        ></div>
      </div>
      <div class="flex flex-wrap py-8">
        <div class="share-item">
          <img
            class="w-40 mb-4"
            src="~assets/images/index/anon.png"
            alt="A spy with dark glasses and a black hat."
          />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            You are 100% anonymous on our online chat
          </h1>
        </div>
        <div class="share-item">
          <img
            class="w-40 mb-4"
            src="~assets/images/index/login.png"
            alt="A man entering through a door."
          />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            No registration required
          </h1>
        </div>
        <div class="share-item">
          <img
            class="w-40 mb-4"
            src="~assets/images/index/Listener.png"
            alt="A telemarketer talking to a customer."
          />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            Supported by passionate listeners who have signed<br />
            <a
              class="text-green-800 underline"
              href="https://www.hhs.gov/sites/default/files/hipaa-simplification-201303.pdf"
              target="_blank"
              rel="noreferrer"
              >HIPAA Confidentiality Agreement</a
            >.
          </h1>
        </div>
        <div class="share-item">
          <img
            class="w-40 mb-4"
            src="~assets/images/index/file.png"
            alt="A brown folder that has a confidential stamp on it."
          />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            Your confidentiality is guaranteed
          </h1>
        </div>
      </div>
    </div>

    <div class="px-8 py-6 join-us-section sm:px-12 sm:py-10 lg:px-24">
      <div class="items-center text-center title-with-underline">
        <h1
          class="font-serif text-3xl font-extrabold tracking-wider text-center sm:text-left sm:text-4xl"
        >
          Be Part of SpeakToUs!
        </h1>
        <div
          class="relative inline-block w-1/2 border-b-2 border-green-500 sm:block sm:left-0"
        ></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2">
          <h2 class="mt-5 text-lg section-desc">
            In the SpeakToUs Family, we consist of inspiring individuals with
            passion to care for others and dedication to destigmatize mental
            health.
            <br />
            <br />We are, first and foremost, Malaysian, and we aim to be a
            source of support to our fellow Malaysians abroad in need.
            <br />
            <br />Does this description “speak” you? Come and join us!
          </h2>
          <div class="mt-8 text-center sm:text-left">
            <nuxt-link
              to="/joinus"
              class="flex justify-center w-40 px-4 py-2 mb-2 font-serif font-bold text-center text-white bg-green-400 rounded hover:bg-green-700"
            >
              Join us!
            </nuxt-link>
          </div>
        </div>
        <div class="hidden sm:block sm:w-1/2">
          <JoinUsIcon class="w-full h-full" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JoinUsIcon from '~/components/svg/index/JoinUsIcon.vue'
export default {
  components: { JoinUsIcon },
  head() {
    return {
      title: 'SpeakToUs',
    }
  },
}
</script>

<style>
.main-screen {
  height: 95vh;
}
.share-item {
  @apply w-full flex flex-wrap items-center justify-center;
}
@screen sm {
  .share-item {
    @apply w-1/2 justify-start mb-10 flex-no-wrap;
  }
}
</style>
