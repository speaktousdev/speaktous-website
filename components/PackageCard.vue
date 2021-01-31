<template>
  <div class="flex flex-col items-center justify-center">
    <img
      :src="require(`@/assets/images/selflove/packages/${imageSrc}`)"
      :alt="`${title} image.`"
      class="w-48 duration-300 transform bg-gray-300 rounded-xl lg:w-64 hover:scale-125"
    />
    <h3 class="pt-6 text-xl text-center">{{ title }}</h3>

    <p class="pt-5 text-center text-gray-700">{{ description }}</p>
    <p class="pt-5 text-3xl font-semibold text-center text-gray-700">
      {{ price }}
    </p>

    <p class="text-center text-gray-700">{{ location }} only</p>

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
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    location: {
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
