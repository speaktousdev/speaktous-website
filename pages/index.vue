<template>
  <main class="max-w-screen-xl mx-auto">
    <div class="flex flex-wrap px-8 py-6 intro-section sm:px-12">
      <div class="w-full sm:pt-10 sm:w-3/5">
        <div class="sm:w-full">
          <h1
            class="font-serif text-4xl sm:text-6xl font-extrabold text-center sm:text-left"
          >
            You Share
          </h1>
          <h1
            class="mb-6 -mt-2 font-serif text-4xl sm:text-6xl font-extrabold text-center sm:text-left sm:mb-4"
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
          <button
            class="justify-center w-full px-3 py-3 mr-0 font-serif font-bold text-center text-white bg-green-400 rounded hover:bg-green-700 sm:w-1/3 sm:mr-2"
            @click.prevent="$router.push('/chat')"
          >
            Chat Now
          </button>
          <button
            class="justify-center w-full px-3 py-3 mt-3 font-serif font-bold text-center text-white bg-gray-400 rounded hover:bg-gray-700 sm:w-1/3 sm:mt-0"
            @click.prevent="$router.push('/about')"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="w-full logo-placeholder sm:pt-8 sm:w-2/5">
        <img
          class="w-full"
          src="../static/index/STU-logo.jpg"
          alt="SpeakToUs
        Logo"
        />
      </div>
    </div>

    <div class="px-6 py-6 bg-gray-200 share-section sm:px-12 sm:py-10">
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
      <div class="flex flex-wrap p-8">
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/anon.png" />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            You are 100% anonymous on our online chat
          </h1>
        </div>
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/login.png" />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            No sign up needed
          </h1>
        </div>
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/Listener.png" />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            Supported by passionate listeners who have signed
            <a
              class="text-green-800 underline"
              href="https://www.cdc.gov/aging/emergency/legal/privacy.htm"
              target="_blank"
              >HIPAA Confidentiality Agreement</a
            >.
          </h1>
        </div>
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/file.png" />
          <h1 class="mb-8 ml-0 text-xl text-center sm:text-left sm:ml-4">
            Your confidentiality is guaranteed
          </h1>
        </div>
      </div>
    </div>

    <div class="px-8 py-6 join-us-section sm:px-12 sm:py-10">
      <div class="items-center text-center title-with-underline">
        <h1
          class="font-serif text-3xl font-extrabold text-center sm:text-left sm:text-4xl tracking-wider"
        >
          Be Part of SpeakToUs!
        </h1>
        <div
          class="relative inline-block w-1/2 border-b-2 border-green-500 sm:block sm:left-0"
        ></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2">
          <h2 class="mt-5 text-lg section-desc ">
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
            <button
              class="justify-center w-40 px-4 py-2 mb-2 font-serif font-bold text-center text-white bg-green-400 rounded hover:bg-green-700"
              @click.prevent="$router.push('/joinus')"
            >
              Join us!
            </button>
          </div>
        </div>
        <div class="hidden sm:block sm:w-1/2">
          <img class="w-4/5 ml-12" src="../static/index/meeting.png" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
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
