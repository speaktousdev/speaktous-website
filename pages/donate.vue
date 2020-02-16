<template>
  <main class="p-4 text-center">
    <h1 class="text-5xl text-center text-gray-800">Make a donation, today!</h1>

    <div class="mt-4 mb-8 text-center">
      <div class="inline-block w-48 h-48 bg-green-700 rounded-full">
        <img src="~/assets/graphics/donate/hand.png" alt="A donating hand." />
      </div>
    </div>

    <div
      class="p-4 text-xl text-gray-800 bg-gray-300 rounded-lg shadow-xl sm:mx-20"
    >
      <p class="mb-2">
        SpeakToUs is a nonprofit, student-led organization based in Madison, WI.
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
              <img
                src="~/assets/graphics/donate/paypal.png"
                alt="Paypal logo."
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="justify-center px-20 py-2 text-center text-white bg-green-400 rounded hover:bg-green-700"
        >
          Donate
        </button>
      </div>
    </div>

    <h1 class="mt-20 text-5xl text-center text-gray-800">
      With donations, we can provide:
    </h1>
    <div class="mb-10">
      <div class="my-10 text-center">
        <div class="inline-block w-48 h-48">
          <img
            src="~/assets/graphics/donate/dialog-box.png"
            alt="A dialogue box."
          />
        </div>
        <p class="text-lg">
          Easier and more accessible platform to share your thoughts
        </p>
      </div>

      <div class="my-10 text-center">
        <div class="inline-block w-48 h-48">
          <img src="~/assets/graphics/donate/nametag.png" alt="A nametag." />
        </div>
        <p class="text-lg">
          Conversation with students who are professionally trained for mental
          health support
        </p>
      </div>

      <div class="my-10 text-center">
        <div class="inline-block w-48 h-48">
          <img
            src="~/assets/graphics/donate/present.png"
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
      <p class="text-gray-600">
        *Donations will be utilized but not limited only to those means.
      </p>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
