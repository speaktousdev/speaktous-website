<template>
  <div
    class="bg-gradient-to-r from-red-400 via-yellow-400 to-green-700"
    :class="isBannerDismissed ? 'hidden' : ''"
  >
    <div class="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center">
        <button @click="isBannerDismissed = true">
          <CloseIcon />
          <span class="sr-only">Dismiss banner</span>
        </button>
        <div
          class="flex flex-col items-center justify-center flex-1 pr-5 sm:flex-row sm:space-x-4"
        >
          <div class="flex items-center">
            <span class="flex p-1 rounded-lg">
              <img :src="icon" alt="Gift icon" class="w-8" />
            </span>
            <p class="ml-3 font-semibold text-gray-800 truncate">
              <span class="text-xs sm:text-sm lg:hidden">{{
                shortMessage
              }}</span>
              <span class="hidden lg:inline">{{ message }}</span>
            </p>
          </div>
          <div class="flex items-center justify-center pb-4 sm:pb-0">
            <nuxt-link
              to="/selfcare"
              class="flex items-center justify-center px-3 py-1 text-xs text-green-800 transition duration-300 ease-in-out transform bg-white border border-transparent rounded-md shadow-sm sm:text-sm hover:font-semibold hover:scale-105 hover:bg-green-100"
            >
              Learn more!
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '~/components/svg/nav/CloseIcon.vue'

export default {
  components: {
    CloseIcon,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default:
        'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png',
    },
    message: {
      type: String,
      required: true,
    },
    shortMessage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isBannerDismissed: false,
    }
  },
}
</script>
