<template>
  <div>
    <header
      class="
        fixed
        z-40
        w-full
        sm:relative
        bg-green-stu
        sm:flex sm:justify-center sm:items-end sm:py-2
      "
      :class="headerStyle"
    >
      <!-- Default logo -->
      <div class="hidden sm:flex sm:pb-1 sm:pr-8">
        <nuxt-link to="/" @click.native="aboutMenuOpen = false">
          <img
            src="~/assets/images/logo.png"
            alt="Speak To Us organization logo."
            class="h-20"
          />
        </nuxt-link>
      </div>

      <!-- Default screen navigation -->
      <nav class="hidden sm:flex">
        <nuxt-link
          class="link-default"
          to="/"
          @click.native="aboutMenuOpen = false"
          >Home</nuxt-link
        >
        <nuxt-link
          class="link-default"
          to="/chat"
          @click.native="aboutMenuOpen = false"
          >Chat</nuxt-link
        >
        <div class="relative">
          <button
            type="button"
            class="link-default flex item-center justify-center group"
            aria-expanded="false"
            @click="aboutMenuOpen = !aboutMenuOpen"
          >
            <span>About</span>
            <svg
              class="text-white ml-2 mt-1 h-5 w-5 group-hover:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="aboutMenuOpen"
              class="
                absolute
                z-10
                left-1/2
                transform
                -translate-x-1/2
                mt-3
                px-2
                w-screen
                max-w-xs
                sm:px-0
              "
            >
              <div
                class="
                  rounded-xl
                  shadow-lg
                  overflow-hidden
                  ring-1 ring-gray-200
                "
              >
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <HeaderDesktopSecondaryLink
                    to="/about"
                    name="About Us"
                    description="Get all of your questions answered in our forums or
                      contact support."
                    @click.native="aboutMenuOpen = false"
                  />
                  <HeaderDesktopSecondaryLink
                    to="/history"
                    name="Student Committee"
                    description="Get all of your questions answered in our forums or
                      contact support."
                    @click.native="aboutMenuOpen = false"
                  />
                  <HeaderDesktopSecondaryLink
                    to="/history"
                    name="History"
                    description="Get all of your questions answered in our forums or
                      contact support."
                    @click.native="aboutMenuOpen = false"
                  />
                  <a
                    href="companyprofile.pdf"
                    target="_blank"
                    class="-m-3 p-3 block rounded-md hover:bg-gray-50"
                  >
                    <p class="text-base font-medium text-gray-900">
                      Company Profile
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nuxt-link
          class="link-default"
          to="/donate"
          @click.native="aboutMenuOpen = false"
          >Donate</nuxt-link
        >
        <nuxt-link
          class="link-default"
          to="/joinus"
          @click.native="aboutMenuOpen = false"
          >Join us!</nuxt-link
        >
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
            <nuxt-link to="/" @click.native="aboutMenuOpen = false">
              <img
                src="~/assets/images/logo.png"
                alt="Speak To Us organization logo."
                class="h-12"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="menuOpen"
          class="
            absolute
            top-0
            inset-x-0
            p-2
            transition
            transform
            origin-top-right
            sm:hidden
          "
        >
          <div
            class="
              rounded-xl
              shadow-lg
              ring-1 ring-gray-200
              bg-white
              divide-y-2 divide-gray-50
            "
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    src="~/assets/images/logo.png"
                    alt="Speak To Us organization logo."
                    class="h-8 w-auto"
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-green-500
                    "
                    @click="menuOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <HeaderMobilePrimaryLink
                    to="/"
                    name="Home"
                    @click.native="menuOpen = false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </HeaderMobilePrimaryLink>
                  <HeaderMobilePrimaryLink
                    to="/chat"
                    name="Chat"
                    @click.native="menuOpen = false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </HeaderMobilePrimaryLink>
                  <HeaderMobilePrimaryLink
                    to="/about"
                    name="About Us"
                    @click.native="menuOpen = false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </HeaderMobilePrimaryLink>
                  <HeaderMobilePrimaryLink
                    to="/donate"
                    name="Donate"
                    @click.native="menuOpen = false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </HeaderMobilePrimaryLink>
                  <HeaderMobilePrimaryLink
                    to="/joinus"
                    name="Join Us"
                    @click.native="menuOpen = false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </HeaderMobilePrimaryLink>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <HeaderMobileSecondaryLink
                  to="/history"
                  @click.native="menuOpen = false"
                >
                  Student Committee
                </HeaderMobileSecondaryLink>
                <a
                  href="companyprofile.pdf"
                  target="_blank"
                  class="
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Company Profile
                </a>
                <HeaderMobileSecondaryLink
                  to="/history"
                  @click.native="menuOpen = false"
                >
                  History
                </HeaderMobileSecondaryLink>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>
  </div>
</template>

<script>
import HamburgerMenu from '~/components/svg/nav/HamburgerMenu.vue'
import HeaderMobilePrimaryLink from '~/components/HeaderMobilePrimaryLink.vue'
import HeaderMobileSecondaryLink from '~/components/HeaderMobileSecondaryLink.vue'
import HeaderDesktopSecondaryLink from '~/components/HeaderDesktopSecondaryLink.vue'

export default {
  components: {
    HamburgerMenu,
    HeaderMobilePrimaryLink,
    HeaderMobileSecondaryLink,
    HeaderDesktopSecondaryLink,
  },
  data: () => ({
    menuOpen: false,
    aboutMenuOpen: false,
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
