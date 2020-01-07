<template>
  <header
    class="bg-green-stu sm:flex sm:justify-center sm:items-center sm:py-2"
  >
    <!-- Default logo -->
    <div class="items-center justify-center hidden sm:flex sm:py-0 sm:pr-2">
      <div>
        <img
          src="~/static/logo-long.png"
          alt="Speak To Us organization logo."
          class="h-20"
        />
      </div>
    </div>

    <!-- Default screen navigation -->
    <nav class="hidden px-2 pt-2 pb-4 sm:flex">
      <nuxt-link class="link-default hover:text-green-600" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="link-default hover:text-green-600" to="/chat">
        Chat
      </nuxt-link>
      <nuxt-link class="link-default hover:text-green-600" to="/about">
        About
      </nuxt-link>
      <nuxt-link class="link-default hover:text-green-600" to="/donate">
        Donate
      </nuxt-link>
      <nuxt-link class="link-default hover:text-green-600" to="/joinus">
        Join us!
      </nuxt-link>
    </nav>

    <!-- Mobile logo -->
    <div class="flex items-center justify-center px-4 py-3 sm:hidden">
      <div>
        <img
          src="~/static/logo-short.png"
          alt="Speak To Us organization logo."
          class="h-20"
        />
      </div>
    </div>

    <!-- Mobile-screen navigation -->
    <nav
      class="fixed bottom-0 left-0 right-0 z-30 block px-2 pt-3 pb-2 border-t border-gray-300 sm:hidden"
    >
      <div class="flex justify-between">
        <nuxt-link class="link-mobile" to="/">
          <HomeIcon class="ml-1 nav-icon" />
          home
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/about">
          <AboutIcon class="ml-1 nav-icon" />
          about
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/chat">
          <ChatIcon class="nav-icon" />
          chat
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/donate">
          <DonateIcon class="ml-2 nav-icon" />
          donate
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/joinus">
          <JoinusIcon class="ml-3 nav-icon" />
          Join us!
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
import HomeIcon from '~/components/svg/HomeIcon.vue'
import ChatIcon from '~/components/svg/ChatIcon.vue'
import AboutIcon from '~/components/svg/AboutIcon.vue'
import DonateIcon from '~/components/svg/DonateIcon.vue'
import JoinusIcon from '~/components/svg/JoinusIcon.vue'

export default {
  components: {
    HomeIcon,
    ChatIcon,
    AboutIcon,
    DonateIcon,
    JoinusIcon
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.link-default {
  @apply block text-gray-300 px-3 text-xl;
}

.link-mobile {
  @apply block text-gray-700 rounded px-2;
}

.nav-icon {
  @apply h-8 w-8;
}

.bg-green-stu {
  background-color: rgb(116, 183, 87);
}

/* highlight nav when on each page */
.nuxt-link-exact-active {
  @apply text-green-500 fill-current;
}
</style>
