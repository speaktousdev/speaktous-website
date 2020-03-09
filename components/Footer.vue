<template>
  <footer
    id="footer"
    class="flex flex-col items-center justify-center pt-6 text-sm text-gray-800 bg-gray-200 border-t border-gray-300"
  >
    <p>© 2019 by SpeakToUs Organization.</p>
    <div class="flex">
      <a
        class="mr-4"
        href="/disclaimer"
        @click.prevent="$router.push('/disclaimer')"
      >
        Disclaimer & Terms
      </a>
      <span>&#183;</span>
      <a class="ml-4" href="mailto:speaktousofficial@gmail.com">Contact Us</a>
    </div>
    <div class="flex-col text-center sm:flex-row">
      <p class="inline-block">A student support platform</p>
      <span>&#183;</span>
      <p class="inline-block">For all Malaysians, by Malaysians 🇲🇾 😊</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
#footer * {
  @apply mb-2;
}
</style>
