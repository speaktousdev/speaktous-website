<template>
  <main class=" text-center">
    <div
      v-scroll-to="'#second'"
      class="mt-18 lg:w-screen xl:w-screen lg:h-screen xl:h-screen"
    >
      <div class=" md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row">
        <div>
          <p
            class="mt-4 md:mt-16 lg:mt-18 xl:mt-24 md:px-12 lg:pl-24 text-4xl md:text-4xl md:text-left lg:text-left xl:text-left  font-bold tracking-widest"
          >
            About Us
          </p>
          <p
            class="mt-4 lg:mt-6 xl:mt-6 md:px-8 lg:pl-24 md:pl-12  md:text-left lg:text-left xl:text-left text-lg lg:text-xl xl:text-2xl"
          >
            We are a group of Malaysian students<br />who are passionate about
            <b />mental health.
          </p>
          <p
            class="mt-4 lg:mt-4 xl:mt-8 md:px-8 md:pl-12 lg:pl-24  md:text-left lg:text-left xl:text-left text-lg lg:text-xl xl:text-2xl"
          >
            We provide an <b>online chat system</b> for <br />Malaysian students
            abroad to share<br />and express their feelings to a fellow<br />Malaysian.
          </p>
        </div>

        <HeaderIcon
          class=" hidden md:block lg:block xl:block py-2 w-2/4 h-auto"
        />
      </div>
    </div>
    <div id="second" class=" mt-8 md:mt-32  text-center">
      <div class="relative inline-block">
        <img
          src="~/static/about/group-photo.png"
          alt="SpeakToUs Group photo"
          class="block w-screen"
        />
      </div>
      <p
        class="tracking-wide text-base xl:mt-4 md:text-xl lg:text-2xl xl:text-3xl"
      >
        We bring SpeakToUs to you
      </p>
    </div>

    <div class="text-center mt-16 md:mt-24" max-width:100>
      <div class="inline-block w-11/12 lg:w-1/2 xl:w-1/2">
        <h1
          class="tracking-widest inline-block text-left ml-2  lg:ml-4 xl:ml-6"
        >
          More About
        </h1>
        <v-expansion-panels class="mt-4" popout="true" focusable="true">
          <v-expansion-panel v-for="item in faqlist" :key="item.header">
            <v-expansion-panel-header>
              {{ item.header }}
            </v-expansion-panel-header>
            <v-expansion-panel-content :key="item.content">
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>

    <div class="text-center flex-col mt-16 mb-8">
      <div id="contact-form" class="w-full">
        <h1 class="tracking-wide">Contact Us</h1>
        <p>
          We are reachable through email:
        </p>
        <button v-on:click="isVisible = true" class="text-green-500">
          speaktousofficial@gmail.com
        </button>
      </div>
      <div
        id="contact-form-card"
        v-if="isVisible"
        class="lg:text-center xl:text-center"
      >
        <div
          class="inline-block mb-8 lg:ml-10 xl:ml-40 w-10/12 md:w-1/2 lg:w-1/2 xl:w-1/2"
        >
          <v-card
            raised="true"
            elevation="24"
            class="  mt-12"
            min-width="300"
            max-width="500"
            min-height="70"
          >
            <v-card-text>
              <div>Send us a message</div>
              <form>
                <v-text-field
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  @input="$v.message.$touch()"
                  v-model="message"
                  :error-messages="messageErrors"
                  label="Your Message"
                  required
                ></v-text-field>

                <v-btn @click="submit" class="mr-4">submit</v-btn>
                <v-btn @click="clear, (isVisible = false)">cancel</v-btn>
              </form>
            </v-card-text>
            <v-card-actions> </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import HeaderIcon from '~/components/svg/about/HeaderIcon.vue'

export default {
  components: { HeaderIcon },
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
        header: 'Who we are?',
        content:
          'We are a student-led organization based in the University of Wisconsin-Madison, USA that provides a peer-to-peer support platform for Malaysian students inthe US. Through our chat feature, we are providing an online medium for students to speak up and share their concerns, just like having a friend who listens to your stories. Our team consists of inspiring individuals with passion to care for others and dedication to change the stigma against mental health.'
      },
      {
        header: "What is STU's Mission?",
        content:
          'Provide a platform for individuals to express themselves freely regarding mental health'
      },
      {
        header: "What is STU's Vision?",
        content:
          'Create an environment where individuals can discuss comfortably about mental health'
      },
      {
        header: "What are STU's Objectives?",
        content: ''
      },
      {
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

<style scoped>
h1 {
  @apply text-4xl font-semibold text-black;
}
h2 {
  @apply text-4xl text-center text-black;
}
h3 {
  @apply text-green-500;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

#whoweare-image {
  @apply mt-2 object-center rounded-lg w-2 h-4;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  object-position: center;
  left: 17%;
}
#objective-text {
  left: 12%;
}
#app {
  @apply h-24;
  font-family: 'Righteous', arial;
  font-weight: normal;
  font-size: 0.5rem;
  color: green;
  background-color: white;
  width: 100%;
}
</style>
