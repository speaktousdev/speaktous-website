<template>
  <div class="flex flex-wrap justify-center ml-3">
    <!-- <img class="image-style" src="" alt="" /> -->
    <button
      v-for="(image, index) in images"
      :key="index"
      v-tooltip.top-center="image.name"
      class="focus:outline-none"
    >
      <img
        class="inline-block w-16 h-16 text-white transition duration-100 ease-in-out transform rounded-full sm:w-20 sm:h-20 hover:scale-150 md:w-24 md:h-24 lg:w-32 lg:h-32"
        :src="image.url"
        :alt="`A photo of ${image.name}`"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
/* .image-style {
  @apply ;
}
.image-style:hover {
  transform: scale(1.5);
  @apply scale-150;
} */
</style>
