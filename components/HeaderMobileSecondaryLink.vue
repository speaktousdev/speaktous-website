<script>
export default {
  props: {
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
    class="text-base font-medium text-gray-900 hover:text-gray-700"
    ><slot></slot
  ></nuxt-link>
</template>
