<template>
  <div class="bg-gradient-to-r from-red-400 via-yellow-400 to-green-700">
    <div class="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="flex flex-col flex-wrap items-center justify-between md:flex-row"
      >
        <div class="flex items-center flex-1">
          <span class="flex p-2 rounded-lg">
            <img :src="icon" alt="" class="w-8" />
          </span>
          <p class="ml-3 font-semibold text-gray-800 truncate">
            <span class="lg:hidden"> {{ shortMessage }} </span>
            <span class="hidden lg:inline">
              {{ message }}
            </span>
          </p>
        </div>
        <div class="flex items-center justify-center my-2">
          <div class="" @click.prevent="$router.push('/selfcare')">
            <a
              href=""
              class="flex items-center justify-center px-3 py-1 text-sm text-green-800 transition duration-300 ease-in-out transform bg-white border border-transparent rounded-md shadow-sm hover:font-semibold hover:scale-105 hover:bg-green-100"
            >
              Learn more!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
}
</script>
