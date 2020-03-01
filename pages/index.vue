<template>
  <main>
    <div class="intro-section flex flex-wrap px-8 py-6 sm:px-12">
      <div class="w-full sm:pt-10 sm:w-3/5">
        <div class="sm:w-64">
          <h1
            class="text-center sm:text-left font-heading font-extrabold text-4xl"
          >
            You Share
          </h1>
          <h1
            class="text-center sm:text-left font-heading font-extrabold text-4xl -mt-2 mb-6 sm:mb-4"
          >
            We Care
          </h1>
        </div>
        <div class="section-desc sm:pr-12 text-left">
          <p class="text-lg font-body">
            Speak To Us is an
            <strong class>online chat platform</strong>
            for Malaysian students in the United States to share and express
            their feelings to a fellow Malaysian.
            <br />
            <span class="mt-10"
              >Tell us how you feel. We are here to listen.</span
            >
          </p>
        </div>
        <div class="buttons flex flex-wrap w-full mt-8 p-0 sm:w-full">
          <button
            class="justify-center font-heading font-bold text-center text-white bg-green-400 rounded hover:bg-green-700 w-full sm:w-1/3 py-3 px-3 mr-0 sm:mr-2"
            @click.prevent="$router.push('/chat')"
          >
            Chat Now
          </button>
          <button
            class="justify-center font-heading font-bold text-center text-white bg-gray-400 rounded hover:bg-gray-700 w-full sm:w-1/3 py-3 px-3 mt-3 sm:mt-0"
            @click.prevent="$router.push('/about')"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="logo-placeholder w-full sm:pt-8 sm:w-2/5">
        <img
          class="w-full"
          src="../static/index/STU-logo.jpg"
          alt="SpeakToUs
        Logo"
        />
      </div>
    </div>

    <div class="share-section bg-gray-200 px-6 sm:px-12 py-6 sm:py-10">
      <div class="title-with-underline items-center text-center">
        <h1
          class="font-heading font-extrabold text-center sm:text-left text-3xl sm:text-4xl"
        >
          Why Share With Us?
        </h1>
        <div
          class="inline-block sm:block sm:left-0 relative w-1/2 border-b-2 border-green-500"
        ></div>
      </div>
      <div class="flex flex-wrap p-8">
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/login.png" />
          <h1
            class="font-body text-center sm:text-left text-xl ml-0 sm:ml-4 mb-8"
          >
            No registration needed
          </h1>
        </div>
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/anon.png" />
          <h1
            class="font-body text-center sm:text-left text-xl ml-0 sm:ml-4 mb-8"
          >
            You are 100% anonymous on our online chat
          </h1>
        </div>
        <div class="share-item">
          <img class="w-40 mb-4" src="../static/index/Listener.png" />
          <h1
            class="font-body text-center sm:text-left text-xl ml-0 sm:ml-4 mb-8"
          >
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
          <h1
            class="font-body text-center sm:text-left text-xl ml-0 sm:ml-4 mb-8"
          >
            Your confidentiality is guaranteed
          </h1>
        </div>
      </div>
    </div>

    <div class="join-us-section px-8 sm:px-12 py-6 sm:py-10">
      <div class="title-with-underline items-center text-center">
        <h1
          class="font-heading font-extrabold text-center sm:text-left text-3xl sm:text-4xl"
        >
          Be Part of Us!
        </h1>
        <div
          class="inline-block sm:block sm:left-0 relative w-1/2 border-b-2 border-green-500"
        ></div>
      </div>
      <div class="flex-wrap flex">
        <div class="w-full sm:w-1/2">
          <h2 class="section-desc mt-5 text-lg font-body">
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
              class="font-heading font-bold justify-center px-4 py-2 mb-2 w-40 text-center text-white bg-green-400 rounded hover:bg-green-700"
              @click.prevent="$router.push('/joinus')"
            >
              Join us!
            </button>
          </div>
        </div>
        <div class="hidden sm:block sm:w-1/2">
          <img class="ml-12 w-4/5" src="../static/index/meeting.png" />
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
