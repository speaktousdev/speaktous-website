<template>
  <div>
    <header
      class="fixed w-full sm:relative z-40 bg-green-stu sm:flex sm:justify-center sm:items-end sm:py-2"
    >
      <!-- Default logo -->
      <div class="hidden sm:flex sm:pb-1 sm:pr-8">
        <a href="/" @click.prevent="$router.push('/')">
          <img
            src="~/assets/images/logo.png"
            alt="Speak To Us organization logo."
            class="h-20"
          />
        </a>
      </div>

      <!-- Default screen navigation -->
      <nav class="hidden sm:flex">
        <nuxt-link class="link-default" to="/">Home</nuxt-link>
        <nuxt-link class="link-default" to="/chat">Chat</nuxt-link>
        <nuxt-link class="link-default" to="/about">About</nuxt-link>
        <nuxt-link class="link-default" to="/donate">Donate</nuxt-link>
        <nuxt-link class="link-default" to="/joinus">Join us!</nuxt-link>
        <div class="static">
          <h2
            class="absolute text-red-600 text-xs font-semibold ml-4 transform md:-translate-y-4"
          >
            NEW !
          </h2>
          <nuxt-link class="link-default" to="/joinus">Self Care</nuxt-link>
        </div>
      </nav>

      <div v-if="showNavbar === true">
        <div class="sm:hidden py-2">
          <div class="absolute p-4 flex items-center">
            <button class="" @click="menuOpen = true">
              <HamburgerMenu class="" />
            </button>
          </div>

          <!-- Mobile logo -->
          <div class="w-screen flex justify-center items-center">
            <a href="/" @click.prevent="$router.push('/')">
              <img
                src="~/assets/images/logo.png"
                alt="Speak To Us organization logo."
                class="h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <nav
        :class="[
          menuOpen === true
            ? ' absolute w-4/5 ml-2 mt-4 z-50 top-0  rounded-lg border border-gray-800 bg-gray-800 shadow-2xl bg-opacity-98 sm:hidden '
            : 'hidden',
        ]"
      >
        <button class="p-4" @click="menuOpen = false"><CloseIcon /></button>
        <div
          class="flex flex-col items-center text-3xl"
          @click="menuOpen = false"
        >
          <nuxt-link class="hamburger-menu" to="/"> Home </nuxt-link>
          <nuxt-link class="hamburger-menu" to="/about"> About </nuxt-link>
          <nuxt-link class="hamburger-menu" to="/chat"> Chat </nuxt-link>
          <nuxt-link class="hamburger-menu" to="/donate"> Donate </nuxt-link>
          <nuxt-link class="hamburger-menu" to="/joinus"> Join Us </nuxt-link>
          <div class="static flex flex-row">
            <h2
              class="text-red-600 text-xs font-semibold absolute transform -translate-y-3"
            >
              NEW !
            </h2>
            <nuxt-link class="hamburger-menu" to="/joinus">Self Care</nuxt-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile-screen navigation -->
    <!-- <nav
      class="fixed bottom-0 left-0 right-0 z-40 block px-6 pt-2 pb-1 bg-white border-t border-gray-400 sm:hidden"
    >
      <div class="flex justify-between">
        <nuxt-link class="link-mobile" to="/">
          <HomeIcon class="ml-2 nav-icon" />
          home
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/about">
          <AboutIcon class="ml-2 nav-icon" />
          about
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/chat">
          <ChatIcon class="ml-1 nav-icon" />
          chat
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/donate">
          <DonateIcon class="ml-3 nav-icon" />
          donate
        </nuxt-link>
        <nuxt-link class="link-mobile" to="/joinus">
          <JoinusIcon class="ml-4 nav-icon" />
          Join us!
        </nuxt-link>
      </div>
    </nav> -->
  </div>
</template>

<script>
// import HomeIcon from '~/components/svg/nav/HomeIcon.vue'
// import AboutIcon from '~/components/svg/nav/AboutIcon.vue'
// import ChatIcon from '~/components/svg/nav/ChatIcon.vue'
// import DonateIcon from '~/components/svg/nav/DonateIcon.vue'
// import JoinusIcon from '~/components/svg/nav/JoinusIcon.vue'
import HamburgerMenu from '~/components/svg/nav/HamburgerMenu.vue'
import CloseIcon from '~/components/svg/nav/CloseIcon.vue'

export default {
  components: {
    // HomeIcon,
    // ChatIcon,
    // AboutIcon,
    // DonateIcon,
    // JoinusIcon,
    HamburgerMenu,
    CloseIcon,
  },
  data: () => ({
    menuOpen: false,
    showNavbar: true,
    lastScrollPosition: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.menuOpen = false
    },
  },
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
  @apply text-gray-700 px-2 text-sm;
}

.hamburger-menu {
  @apply mb-10 text-xl text-white font-semibold;
}

#navbar.hidden-menu {
  @apply hidden transition duration-500 -translate-y-full;
}

.nav-icon {
  @apply h-6 w-6;
}

.bg-green-stu {
  background-color: rgb(116, 183, 87);
  /* @apply border-b border-green-200; */
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
