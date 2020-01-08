<template>
  <div>
    <header class="bg-green-stu sm:flex sm:justify-center sm:items-end sm:py-2">
      <!-- Default logo -->
      <div class="hidden sm:flex sm:pb-1 sm:pr-8">
        <a @click.prevent="$router.push('/')" href="/">
          <img
            src="~/static/logo-long.png"
            alt="Speak To Us organization logo."
            class="h-20"
          />
        </a>
      </div>

      <!-- Default screen navigation -->
      <nav class="hidden sm:flex">
        <nuxt-link class="link-default" to="/">
          Home
        </nuxt-link>
        <nuxt-link class="link-default" to="/chat">
          Chat
        </nuxt-link>
        <nuxt-link class="link-default" to="/about">
          About
        </nuxt-link>
        <nuxt-link class="link-default" to="/donate">
          Donate
        </nuxt-link>
        <nuxt-link class="link-default" to="/joinus">
          Join us!
        </nuxt-link>
      </nav>

      <!-- Mobile logo -->
      <div class="flex items-center justify-center px-4 py-3 sm:hidden">
        <a @click.prevent="$router.push('/')" href="/">
          <img
            src="~/static/logo-short.png"
            alt="Speak To Us organization logo."
            class="h-20"
          />
        </a>
      </div>
    </header>

    <!-- Mobile-screen navigation -->
    <nav
      class="fixed bottom-0 left-0 right-0 z-30 block px-2 pt-3 pb-2 bg-white border-t border-gray-300 sm:hidden"
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
  </div>
</template>

<script>
import HomeIcon from '~/components/svg/HomeIcon.vue'
import AboutIcon from '~/components/svg/AboutIcon.vue'
import ChatIcon from '~/components/svg/ChatIcon.vue'
import DonateIcon from '~/components/svg/DonateIcon.vue'
import JoinusIcon from '~/components/svg/JoinusIcon.vue'

export default {
  components: {
    HomeIcon,
    ChatIcon,
    AboutIcon,
    DonateIcon,
    JoinusIcon
  }
}
</script>

<style scoped>
.link-default {
  @apply text-gray-100 px-3 text-xl uppercase;
}

.link-default:hover {
  @apply text-green-900;
}

.link-mobile {
  @apply text-gray-700 px-2;
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

@screen sm {
  .nuxt-link-exact-active {
    @apply text-green-700;
  }
}
</style>
