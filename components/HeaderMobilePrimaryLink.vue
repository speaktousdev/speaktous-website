<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <nuxt-link
    :to="to"
    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
  >
    <!-- Heroicon name: outline/chart-bar -->
    <svg
      class="flex-shrink-0 h-6 w-6 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <slot></slot>
    </svg>
    <span class="ml-3 text-base font-medium text-gray-900">{{ name }}</span>
  </nuxt-link>
</template>
