<template v-if="isVisible">
  <form action="" class="">
    <div class="flex flex-col border-2 rounded-lg shadow-xl">
      <label for="contact-us"> Send us a message</label>
      <div class="py-4 mx-8 border-b border-b-2 border-gray-500">
        <input
          id="name"
          v-model="name"
          type="name"
          min="1"
          max="20"
          placeholder="Name"
          class="px-2"
          :error-messages="nameErrors"
          @input="$v.name.$touch()"
        />
      </div>

      <div class="py-4 mx-8 border-b border-b-2 border-gray-500">
        <input
          v-model="email"
          type="email"
          placeholder="your-email@example.com"
          class="px-2"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
        />
      </div>
      <div class="py-4 mx-8 border-b border-b-2 border-gray-500">
        <textarea
          type="message"
          placeholder="Your Message"
          class="p-6"
          :error-messages="messageErrors"
          @input="$v.message.$touch()"
        />
      </div>
      <div class="flex flex-row w-48 px-20 py-4 mb-6 md:px-24">
        <button
          class="w-24 h-10 p-2 bg-gray-200 border-4 rounded-lg shadow-lg"
          @click="submit"
        >
          SUBMIT
        </button>
        <button
          class="w-24 h-10 p-2 ml-4 bg-gray-200 border-4 rounded-lg shadow-lg"
          @click="clear, (isVisible = false)"
        >
          CANCEL
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'Contact',
  // To collect data from text fields
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isVisible: false,
    }
  },
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    message: { required, minLength: minLength(10) },
  },
  // To check for errors
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message is required')
      return errors
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
      this.message = ''
    },
  },
}
</script>
<style scoped></style>
