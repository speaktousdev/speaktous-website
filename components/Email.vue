<template>
  <form
    class="flex flex-col max-w-2xl p-6 mx-auto bg-gray-500 rounded-lg shadow-xl md:flex-row"
  >
    <MailIcon class="self-center hidden w-40 h-40 md:block md:w-2/5" />
    <div class="flex flex-col md:w-3/5">
      <input
        type="email"
        placeholder="Your email..."
        class="p-2 rounded-lg shadow-xl"
      />
      <textarea
        name="message"
        class="h-48 p-2 mt-4 rounded-lg shadow-xl md:h-56"
        placeholder="How are you feeling? Share with us here."
      ></textarea>
      <div class="flex flex-row-reverse">
        <input
          type="submit"
          class="px-8 py-2 mt-4 text-xl text-gray-200 bg-green-400 rounded-full shadow-xl hover:bg-green-800"
        />
      </div>
    </div>
  </form>
</template>

<script>
import MailIcon from '~/components/svg/chat/MailIcon.vue'

export default {
  name: 'Email',
  components: {
    MailIcon
  },
  methods: {
    sendEmail() {
      return 1
    }
  }
}
</script>

<style scoped></style>
