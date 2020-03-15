<template>
  <main class="border shadow-xl">
    <div v-for="item in faqlist" :key="item.header" class="border-b ">
      <button
        class="flex flex-row justify-between w-full h-auto px-4 py-4 font-bold text-left text-gray-800 outline-none hover:bg-green-300 "
        :class="{ 'bg-green-300': item.isVisible }"
        @click="handleFaqContent(item, faqlist)"
      >
        <span>{{ item.header }}</span>
        <svg
          class="justify-center w-4 h-4 ml-4 mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"
          />
        </svg>
      </button>
      <div
        v-if="item.isVisible"
        :key="item.content"
        class="px-6 py-6 text-justify text-black bg-gray-100"
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
