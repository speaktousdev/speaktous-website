<template>
  <div class="flex flex-col items-center justify-center">
    <img
      src=""
      :alt="`${title} image.`"
      class="w-11/12 h-56 bg-gray-300 rounded-xl lg:w-64"
    />
    <h3 class="pt-6 text-xl text-center">{{ title }}</h3>

    <p class="pt-5 text-gray-700">This package contains:</p>
    <ul class="text-gray-900 list-disc list-inside">
      <li>Essential Items</li>
      <li>Note Card</li>
      <li>Special Item: {{ specialItem }}</li>
    </ul>

    <a
      href="https://forms.gle/RxrKoCb6QX1Tnij87"
      target="_blank"
      rel="noreferrer"
      class="flex items-center justify-center w-56 h-12 mt-8 font-semibold rounded-full md:text-xl"
      :class="buttonStyles"
      >Buy now</a
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    specialItem: {
      type: String,
      required: true,
    },
    package: {
      type: String,
      required: true,
    },
    buttonStyles: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
