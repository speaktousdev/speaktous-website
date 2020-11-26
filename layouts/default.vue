<template>
  <div class="flex flex-col min-h-screen">
    <Banner
      message="LIMITED! Treat yourself and friends with special Self-Care products curated by our team!"
      short-message="LIMITED! Get these Self-Care products!"
      icon="https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png"
    />
    <Header />
    <nuxt class="flex-grow mt-20 sm:mt-0" />
    <Footer class="pb-20 sm:pb-2" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Header,
    Footer,
    Banner,
  },
}
</script>

<style></style>
