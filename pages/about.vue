<template>
  <main class="p-4 text-center">
    <h1 class="text-5xl text-center text-green-600">Who we are</h1>
    <p>
      We are a student-led organization based in the
      <a
        class="text-green-500 hover:underline"
        href="https://goo.gl/maps/1Lat9DbQrPDQxm8h7"
        target="_blank"
      >
        University of Wisconsin-Madison, USA
      </a>
      that provides a peer-to-peer support platform for Malaysian students in
      the US. Through our
      <a
        class="text-green-500 hover:underline"
        href="/chat"
        @click.prevent="$router.push('/chat')"
        >chat</a
      >
      feature, we are providing an online medium for students to speak up and
      share their concerns, just like having a friend who listens to your
      stories. Our team consists of inspiring individuals with passion to care
      for others and dedication to change the stigma against mental health.
    </p>
    <h1>Objective</h1>
    <p>
      Provide an environment where individuals can discuss comfortably about
      mental health.
    </p>

    <h2>Contact Us</h2>
    <p>
      We are reachable through email:
      <a
        class="text-green-500 hover:underline"
        href="mailto:speaktousofficial@gmail.com"
      >
        speaktousofficial@gmail.com
      </a>
    </p>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  @apply text-5xl text-center text-green-500;
}
h2 {
  @apply text-3xl text-center text-green-400;
}
p {
  @apply text-center text-gray-700 mb-2;
}
@screen lg {
  p {
    @apply mx-48;
  }
}
</style>
