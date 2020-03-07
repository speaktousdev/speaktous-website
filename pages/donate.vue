<template>
  <main class="max-w-screen-xl p-4 mx-auto lg:px-16">
    <!-- This is for mobile screens -->
    <div class="text-center lg:hidden">
      <h1 class="font-serif text-4xl font-extrabold">
        Make a donation, today!
      </h1>
      <div class="text-center">
        <svg class="inline-block w-24 h-2">
          <rect class="w-24 h-2" style="fill:green;" />
        </svg>
      </div>
      <div class="mt-4 mb-8 text-center">
        <div class="inline-block w-48 h-48 bg-green-700 rounded-full">
          <img src="~/static/donate/hand.png" alt="A donating hand." />
        </div>
      </div>
      <div
        class="p-4 mx-4 text-xl text-gray-800 bg-gray-300 rounded-lg shadow-xl sm:mx-20"
      >
        <p class="mb-2">
          SpeakToUs is a nonprofit, student-led organization based in Madison,
          WI.
        </p>
        <p class="mb-2">
          The organization is managed by student volunteers who are dedicated to
          provide mental health support for Malaysian students in the US.
        </p>
        <p class="mb-2">Our financial needs rely on your support.</p>
      </div>
      <div class="flex flex-col px-12 mt-10 mb-10">
        <div class="text-center">
          <div class="inline-block">
            <div class="flex flex-row">
              <p class="mb-8 mr-4 text-xl">DONATE WITH PAYPAL</p>
              <div class="w-8 h-8">
                <img src="~/static/donate/paypal.png" alt="Paypal logo." />
              </div>
            </div>
          </div>
        </div>
        <div>
          <a
            class="justify-center px-20 py-2 text-center text-white bg-green-400 rounded hover:bg-green-700"
            :href="paypalLink"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </div>
      </div>
    </div>

    <!-- This is for large (desktop) screens -->
    <div class="flex flex-wrap hidden px-12 mt-10 lg:flex lg:text-left">
      <div class="w-3/5 pr-12">
        <h1 class="font-serif text-5xl font-extrabold text-gray-800 ">
          Make a donation, <br />today!
        </h1>
        <svg class="w-24 h-2 mb-10">
          <rect class="w-24 h-2" style="fill:green;" />
        </svg>
        <div class="p-6 text-xl text-gray-800 bg-gray-300 rounded-lg shadow-xl">
          <p class="mb-4">
            SpeakToUs is a nonprofit, student-led organization based in Madison,
            WI.
          </p>
          <p class="mb-4">
            The organization is managed by student volunteers who are dedicated
            to provide mental health support for Malaysian students in the US.
          </p>
          <p class="">Our financial needs rely on your support.</p>
        </div>
      </div>

      <div class="w-2/5">
        <div class="my-8 text-center">
          <div class="inline-block w-64 h-64 bg-green-700 rounded-full">
            <img src="~/static/donate/hand.png" alt="A donating hand." />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="mb-6 text-center">
            <div class="inline-block">
              <div class="flex flex-row">
                <p class="mr-4 text-2xl">Donate with PAYPAL</p>
                <div class="w-8 h-8">
                  <img src="~/static/donate/paypal.png" alt="Paypal logo." />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              class="inline-block px-20 py-2 text-center text-white bg-green-400 rounded shadow-xl hover:bg-green-700"
              :href="paypalLink"
              target="_blank"
              rel="noreferrer"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>

    <h1
      class="mt-20 mb-8 font-serif text-4xl text-center text-gray-800 sm:text-5xl"
    >
      With donations, we can provide:
    </h1>
    <div class="mb-10 lg:flex lg:flex-row">
      <div class="px-4 my-10 text-center md:px-40 lg:px-10">
        <div class="inline-block w-48 h-48">
          <img src="~/static/donate/dialog-box.png" alt="A dialogue box." />
        </div>
        <p class="text-lg">
          Easier and more accessible platform to share your thoughts
        </p>
      </div>

      <div class="px-4 my-10 text-center md:px-40 lg:px-10">
        <div class="inline-block w-48 h-48">
          <img src="~/static/donate/nametag.png" alt="A nametag." />
        </div>
        <p class="text-lg">
          Conversation with students who are professionally trained for mental
          health support
        </p>
      </div>

      <div class="px-4 my-10 text-center md:px-40 lg:px-10">
        <div class="inline-block w-48 h-48">
          <img
            src="~/static/donate/present.png"
            alt="A person presenting Powerpoint slides."
          />
        </div>
        <p class="text-lg">
          Opportunity to attend mental health advocacy programs organized by
          SpeakToUs
        </p>
      </div>
    </div>

    <div>
      <p class="text-center text-gray-600">
        *Donations will be utilized but not limited only to those means.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      paypalEmail: 'speaktous.trea@outlook.com'
    }
  },
  computed: {
    paypalLink() {
      return (
        'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=' +
        this.paypalEmail +
        '&lc=US&item_name=Donation+to+Speak+To+Us&no_note=0&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted'
      )
    }
  },
  methods: {
    openPaypalLink() {
      window.open(this.paypalLink, '_blank')
    }
  }
}
</script>

<style scoped></style>
