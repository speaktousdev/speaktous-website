<template>
  <main>
    <div class="pt-8 main-screen">
      <h1 class="section-title">
        <p class="text-green-800">Speak To Us.</p>
        You share. We care.
      </h1>
      <h2 class="px-8 text-center section-desc">
        Speak To Us is an
        <h2 class="font-semibold">online chat platform</h2>
        for Malaysian students in the United States to share and express their
        feelings to a fellow Malaysian.
        <br />
        Tell us how you feel. We are here to listen.
      </h2>
      <div class="flex flex-col px-12 mt-8">
        <button
          class="justify-center px-4 py-2 mb-2 text-center text-white bg-green-400 rounded hover:bg-green-700"
          @click.prevent="$router.push('/chat')"
        >
          Get started
        </button>
        <button
          class="justify-center px-4 py-2 text-center text-white bg-gray-400 rounded hover:bg-gray-700"
          @click.prevent="$router.push('/about')"
        >
          Learn more
        </button>
      </div>
    </div>

    <div class="py-10 bg-gray-100">
      <h1 class="section-title">
        Why share with us?
      </h1>
      <h2 class="px-8 text-gray-700">
        <br />💯 You are 100% anonymous on our online chat*.<br />✅ Your
        confidentiality is guaranteed.<br />❎ No registration needed.<br />🧑🏿‍🤝‍🧑🏽
        Supported by passionate listeners who have signed the
        <a
          class="text-green-800 underline"
          href="https://www.cdc.gov/aging/emergency/legal/privacy.htm"
          target="_blank"
          >HIPAA Confidentiality Agreement</a
        >.
      </h2>
      <p class="text-center text-green-700 underline">
        *<a href="">learn more</a>
      </p>
    </div>

    <div class="py-10">
      <h1 class="section-title">Be part of us</h1>
      <h2 class="px-8 text-center section-desc">
        In the SpeakToUs Family, we consist of inspiring individuals with
        passion to care for others and dedication to destigmatize mental health.
        We are, first and foremost, Malaysian, and we aim to be a source of
        support to our fellow Malaysians abroad in need.<br /><br />Does this
        description “speak” you? Come and join us!
      </h2>
      <div class="flex flex-col px-12 mt-8">
        <button
          class="justify-center px-4 py-2 mb-2 text-center text-white bg-green-400 rounded hover:bg-green-700"
          @click.prevent="$router.push('/joinus')"
        >
          Join us!
        </button>
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
.section-title {
  @apply mb-4 text-4xl font-semibold text-center text-gray-700;
}
.section-desc {
  @apply text-gray-700;
}
</style>
