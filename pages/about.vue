<template>
  <main
    class="max-w-screen-xl text-center text-black lg:text-gray-800 lg:mx-auto"
  >
    <div class="justify-between px-10 lg:px-24 mt-18 md:flex md:flex-row ">
      <div class="md:w-1/2 lg:w-1/2">
        <h1
          class="mt-4 font-serif text-4xl font-extrabold tracking-wide lg:text-6xl md:mt-16 lg:mt-14 md:text-4xl md:text-left"
        >
          About Us
        </h1>
        <p class="mt-4 text-lg lg:mt-6 md:text-left lg:text-xl xl:text-2xl">
          We are a group of Malaysian students<br />who are passionate about
          <b />mental health.
        </p>
        <p class="mt-4 text-lg xl:mt-8 md:text-left lg:text-xl xl:text-2xl">
          We provide an <br /><b>online chat system</b> <br />for Malaysian
          students abroad to share and express their feelings to a fellow
          Malaysian.
        </p>
      </div>

      <HeaderIcon class="hidden w-1/2 h-auto py-2 md:block lg:block xl:block" />
    </div>

    <div class="mt-8 item-center md:mt-32">
      <div>
        <img
          class="block w-full h-auto ml-auto mr-auto lg:w-3/4"
          src="~assets/images/about/stuphoto.png"
          alt="A group photo of the Speak To Us team."
        />
      </div>
      <p
        class="text-base tracking-wide xl:mt-4 md:text-xl lg:text-2xl xl:text-3xl"
      >
        We bring SpeakToUs to you
      </p>
    </div>

    <div class="mt-16 text-center md:mt-24">
      <div class="inline-block w-11/12 lg:w-1/2 xl:w-1/2">
        <h1
          class="inline-block ml-2 font-serif text-4xl font-semibold tracking-widest text-left lg:ml-4 xl:ml-6"
        >
          More About Us
        </h1>
        <Accordion :faqlist="faqlist" />
      </div>
    </div>

    <div class="flex-col flex-grow px-8 mt-16 mb-8">
      <div class="w-full">
        <h1 class="font-serif text-4xl font-semibold tracking-wide">
          Contact Us
        </h1>
        <p class="">
          We are reachable through email:
        </p>
        <button class="mb-8 text-green-500" @click="isVisible = !isVisible">
          speaktousofficial@gmail.com
        </button>
      </div>
      <div v-if="isVisible">
        <Email :isaboutpage="isAboutPage" />
      </div>
    </div>
  </main>
</template>

<script>
import HeaderIcon from '~/components/svg/about/HeaderIcon.vue'
import Accordion from '~/components/Accordion.vue'
import Email from '~/components/Email.vue'

export default {
  components: { HeaderIcon, Accordion, Email },
  data: () => ({
    isVisible: false,
    isAboutPage: true,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    title: 'About Us | SpeakToUs',
    description:
      'We are a group of Malaysian students based in the University of Wisconsin-Madison, USA who are passionate about helping our fellow Malaysians in the US.',
    faqlist: [
      {
        isVisible: false,
        header: 'Who are we?',
        content:
          'We are a student-led organization based in the University of Wisconsin-Madison, USA that provides a peer-to-peer support platform for Malaysian students in the US. Through our chat feature, we are providing an online medium for students to speak up and share their concerns, just like having a friend who listens to your stories. Our team consists of inspiring individuals with passion to care for others and dedication to change the stigma against mental health.'
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
    ]
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/about'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
