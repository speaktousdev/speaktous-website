<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <nuxt-link :to="to" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
    <p class="text-base font-medium text-gray-900">{{ name }}</p>
    <!-- <p class="mt-1 text-sm text-gray-400">
      {{ description }}
    </p> -->
  </nuxt-link>
</template>
