<template>
  <div>
    <header
      class="fixed z-40 w-full sm:relative bg-green-stu sm:flex sm:justify-center sm:items-end sm:py-2"
      :class="headerStyle"
    >
      <!-- Default logo -->
      <div class="hidden sm:flex sm:pb-1 sm:pr-8">
        <nuxt-link to="/">
          <img
            src="~/assets/images/logo.png"
            alt="Speak To Us organization logo."
            class="h-20"
          />
        </nuxt-link>
      </div>

      <!-- Default screen navigation -->
      <nav class="hidden sm:flex">
        <nuxt-link class="link-default" to="/">Home</nuxt-link>
        <nuxt-link class="link-default" to="/chat">Chat</nuxt-link>
        <nuxt-link class="link-default" to="/about">About</nuxt-link>
        <nuxt-link class="link-default" to="/donate">Donate</nuxt-link>
        <nuxt-link class="link-default" to="/joinus">Join us!</nuxt-link>
      </nav>

      <div v-if="showNavbar === true">
        <div class="py-2 sm:hidden">
          <div class="absolute flex items-center p-4">
            <button class="" @click="menuOpen = true">
              <HamburgerMenu class="" />
            </button>
          </div>

          <!-- Mobile logo -->
          <div class="flex items-center justify-center w-screen">
            <nuxt-link to="/">
              <img
                src="~/assets/images/logo.png"
                alt="Speak To Us organization logo."
                class="h-12"
              />
            </nuxt-link>
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
          <nuxt-link class="hamburger-menu" to="/">Home</nuxt-link>
          <nuxt-link class="hamburger-menu" to="/about">About</nuxt-link>
          <nuxt-link class="hamburger-menu" to="/history">History</nuxt-link>
          <nuxt-link class="hamburger-menu" to="/chat">Chat</nuxt-link>
          <nuxt-link class="hamburger-menu" to="/donate">Donate</nuxt-link>
          <nuxt-link class="hamburger-menu" to="/joinus">Join Us</nuxt-link>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import HamburgerMenu from '~/components/svg/nav/HamburgerMenu.vue'
import CloseIcon from '~/components/svg/nav/CloseIcon.vue'

export default {
  components: {
    HamburgerMenu,
    CloseIcon,
  },
  data: () => ({
    menuOpen: false,
    showNavbar: true,
    lastScrollPosition: 0,
    headerStyle: '',
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

      // if banner is not visible, move the header to the top of the viewport
      if (currentScrollPosition <= 60) {
        this.headerStyle = ''
      } else {
        this.headerStyle = 'top-0'
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
    @apply text-green-900 font-semibold;
  }
}
</style>
