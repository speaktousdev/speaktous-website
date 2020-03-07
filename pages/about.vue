<template>
  <main class="text-center ">
    <div class="mt-18 lg:w-screen xl:w-screen lg:h-screen xl:h-screen">
      <div class=" md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row">
        <div>
          <p
            class="font-serif mt-4 text-4xl lg:text-6xl font-bold tracking-wide\https://drive.google.com/open?id=1T-98IWXNDT1QdZS55lfuWJvDvOiCAPfT md:mt-16 lg:mt-18 xl:mt-24 md:px-12 lg:pl-24 md:text-4xl md:text-left lg:text-left xl:text-left"
          >
            About Us
          </p>
          <p
            class="mt-4 text-lg lg:mt-6 xl:mt-6 md:px-8 lg:pl-24 md:pl-12 md:text-left lg:text-left xl:text-left lg:text-xl xl:text-2xl"
          >
            We are a group of Malaysian students<br />who are passionate about
            <b />mental health.
          </p>
          <p
            class="mt-4 text-lg lg:mt-4 xl:mt-8 md:px-8 md:pl-12 lg:pl-24 md:text-left lg:text-left xl:text-left lg:text-xl xl:text-2xl"
          >
            We provide an <b>online chat system</b> for <br />Malaysian students
            abroad to share<br />and express their feelings to a fellow<br />Malaysian.
          </p>
        </div>

        <HeaderIcon
          class="hidden w-2/4 h-auto py-2 md:block lg:block xl:block"
        />
      </div>
    </div>
    <div id="second" class="mt-8 text-center md:mt-32">
      <div class="relative inline-block">
        <img
          src="~/static/about/group-photo.png"
          alt="SpeakToUs Group photo"
          class="block w-screen"
        />
      </div>
      <p
        class="text-base tracking-wide xl:mt-4 md:text-xl lg:text-2xl xl:text-3xl"
      >
        We bring SpeakToUs to you
      </p>
    </div>

    <div class="mt-16 text-center md:mt-24" max-width:100>
      <div class="inline-block w-11/12 lg:w-1/2 xl:w-1/2">
        <h1
          class="font-serif text-4xl font-semibold inline-block ml-2 tracking-widest text-left lg:ml-4 xl:ml-6"
        >
          More About
        </h1>
        <Accordion :faqlist="faqlist" />
      </div>
    </div>

    <div class="flex-col mt-16 mb-8 text-center">
      <div id="contact-form" class="w-full">
        <h1 class="font-serif text-4xl font-semibold tracking-wide">
          Contact Us
        </h1>
        <p>
          We are reachable through email:
        </p>
        <button class="text-green-500" @click="isVisible = true">
          speaktousofficial@gmail.com
        </button>
      </div>
      <div
        v-if="isVisible"
        id="contact-form-card"
        class="lg:text-center xl:text-center"
      >
        <div
          class="inline-block w-10/12 mb-8 lg:ml-10 xl:ml-40 md:w-1/2 lg:w-1/2 xl:w-1/2"
        >
          <Contact />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import HeaderIcon from '~/components/svg/about/HeaderIcon.vue'
import Contact from '~/components/Contact.vue'
import Accordion from '~/components/Accordion.vue'

export default {
  components: { HeaderIcon, Contact, Accordion },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    },
    message: { required, minLength: minLength(10) }
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    faqlist: [
      {
        isVisible: false,
        header: 'Who are we?',
        content:
          'We are a student-led organization based in the University of Wisconsin-Madison, USA that provides a peer-to-peer support platform for Malaysian students inthe US. Through our chat feature, we are providing an online medium for students to speak up and share their concerns, just like having a friend who listens to your stories. Our team consists of inspiring individuals with passion to care for others and dedication to change the stigma against mental health.'
      },
      {
        isVisible: false,
        header: "What is STU's Mission?",
        content:
          'Provide a platform for individuals to express themselves freely regarding mental health'
      },
      {
        isVisible: false,
        header: "What is STU's Vision?",
        content:
          'Create an environment where individuals can discuss comfortably about mental health'
      },
      {
        isVisible: false,
        header: "What are STU's Objectives?",
        content:
          'Our objectives are the breakdown in detail on how we are aiming to achieve our mission and vision for 2020.' +
          '\n' +
          'a. To provide mental health support to Malaysians by giving them the best recommendations and aid needed for them to improve and overcome issues such as, but not limited to, stress, 	anxiety, burnout, depression, and homesickness while keeping them anonymous. \n b. To ensure Malaysian know that there are people who want to listen and help them during these moments. \n c. To eliminate the stigma of a suicidal topic as something that they should be afraid of to share. \n d. Allow them to have someone from the same culture, beliefs, and also first language as a supporter. '
      },
      {
        isVisible: false,
        header: 'How is 100% Confidentiality possible?',
        content:
          "We are using a system where the online chat user appears as a serial number. If you are using the email service, the messages pass through the first section where the email address will be changed into code before sending it to the responders. All responders are required to sign the HIPAA confidentiality rule, where all the users' stories are forbidden to leave the system. Any open conversation about any user or its identifier directly or indirectly will be considered as misconduct."
      }
    ],
    checkbox: false,
    message: '',
    isVisible: false
  }),

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
    }
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
    }
  }
}
</script>

<style scoped></style>
