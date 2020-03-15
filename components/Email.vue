<template>
  <form
    class="flex flex-col max-w-2xl p-6 mx-auto bg-gray-500 rounded-lg shadow-xl md:flex-row"
    @submit.prevent="submitForm"
  >
    <MailIcon class="self-center hidden w-40 h-40 md:block md:w-2/5" />

    <div class="flex flex-col md:w-3/5">
      <input
        v-model.lazy="$v.email.$model"
        type="email"
        name="user_email"
        placeholder="your_email@example.com"
        class="p-2 bg-gray-100 rounded-lg shadow-xl"
      />
      <p v-if="$v.email.$error && !$v.email.required" class="text-red-300">
        Email is required!
      </p>
      <p v-if="$v.email.$error && !$v.email.email" class="text-red-300">
        Please enter a valid email.
      </p>

      <textarea
        v-model="message"
        name="message"
        class="h-48 p-2 mt-4 bg-gray-100 rounded-lg shadow-xl md:h-56"
        placeholder="How are you feeling? Share with us here."
      ></textarea>
      <p v-if="$v.message.$error && !$v.message.required" class="text-red-300">
        You have to write something here!
      </p>

      <div class="flex flex-row-reverse">
        <button
          type="submit"
          :disabled="submitStatus === 'PENDING'"
          class="px-8 py-2 mt-4 text-xl text-gray-200 bg-green-400 rounded-full shadow-xl hover:bg-green-800"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'
import MailIcon from '~/components/svg/chat/MailIcon.vue'

export default {
  name: 'Email',
  components: {
    MailIcon
  },
  data() {
    return {
      email: '',
      message: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    message: {
      required
    }
  },
  methods: {
    submitForm(e) {
      this.$v.email.$touch()
      this.$v.message.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        emailjs
          .sendForm(
            'stu_listener_gmail',
            'template_2svcDcH4',
            e.target,
            'user_BwFVFbBAhWjyWTX2pirss'
          )
          .then(
            (result) => {
              alert(
                'Your email was succesfully sent!',
                result.status,
                result.text
              )
            },
            (error) => {
              alert('Your email failed to send :(', error)
            }
          )
      }
    }
  }
}
</script>

<style scoped></style>
