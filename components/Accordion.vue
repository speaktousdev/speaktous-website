<template>
  <main class="shadow-xl">
    <div v-for="item in faqlist" :key="item.header" class="border-b ">
      <button
        @click="handleFaqContent(item, faqlist)"
        class="w-full h-auto hover:bg-green-300 text-left px-4 py-4 font-bold text-gray-800 outline-none flex flex-row justify-between "
        v-bind:class="{ 'bg-green-300': item.isVisible }"
      >
        <span>{{ item.header }}</span>
        <svg
          class="fill-current w-4 h-4 ml-4 mr-2 justify-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"
          />
        </svg>
      </button>
      <div
        class="px-6 py-6 text-justify bg-gray-100 text-gray-800"
        v-if="item.isVisible"
        :key="item.content"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </main>
</template>

<script>
// import ArrowDown from '~/components/svg/about/ArrowDown.vue'
// import ArrowUp from '~/components/svg/about/ArrowUp.vue'

export default {
  name: 'Accordion',
  components: {
    /*  ArrowDown, ArrowUp */
  },
  props: {
    faqlist: {
      type: Array,
      required: true
    }
  },

  data() {
    return {}
  },
  methods: {
    handleFaqContent(chosenItem, faqlist, flipArrow) {
      faqlist.forEach((item) => {
        if (item !== chosenItem) {
          item.isVisible = false
        }
      })

      chosenItem.isVisible = !chosenItem.isVisible
    }
  }
}
</script>

<style scoped></style>
