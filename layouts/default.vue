<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <nuxt class="flex-grow mt-20 sm:mt-0" />
    <Footer class="pb-20 sm:pb-2" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style></style>
