<template>
  <main class="max-w-screen-xl p-4 px-16 lg:mx-auto sm:mx-20">
    <div class="lg:flex lg:flex-row-reverse">
      <div class="lg:w-1/2 flex justify-center items-center">
        <div class="w-3/4 h-56 border border-gray-700">
          SELF CARE LOGO PLACEHOLDER
        </div>
      </div>
      <div class="lg:w-1/2">
        <h1
          class="font-serif mt-12 text-2xl md:text-3xl lg:text-6xl text-center lg:text-left font-semibold"
        >
          Self-Care Santa!
        </h1>
        <p class="mt-4 md:text-xl">
          Self Care Santa is a collaboration between SpeakToUs and NAMSA. We
          offer
          <b>self-care packages</b> and <b>note cards</b> for people to buy for
          themselves or for their friends and loved ones.
        </p>
        <p class="mt-12 md:text-xl">
          As other big celebrations this year, Christmas will be a bit different
          for most of us. We hope we can still bring joy in the form of these
          small gestures while also supporting your mental and physical
          wellbeing during these unusual times.
        </p>
        <p class="mt-12 md:text-xl">Check them out and place your order now!</p>

        <div
          class="flex flex-col md:flex-row items-center justify-center lg:justify-start mt-8"
        >
          <!-- This button scroll the page to the Packages section -->
          <button
            class="rounded-full h-12 w-56 bg-gray-600 md:text-xl font-semibold hover:bg-gray-700"
          >
            Packages
          </button>
          <!-- This button link to the Google Form -->
          <a href="https://forms.gle/RxrKoCb6QX1Tnij87" target="_blank"
            ><button
              class="md:ml-8 mt-4 h-12 w-56 md:mt-0 rounded-full md:text-xl text-white font-semibold bg-green-400 hover:bg-green-700"
            >
              Buy now
            </button></a
          >
        </div>
      </div>
    </div>
    <!-- What's in the packages & Package prices section -->
    <div class="lg:flex lg:flex-row">
      <div class="lg:w-1/2">
        <h1
          class="font-serif text-center font-semibold mt-24 text-2xl md:text-3xl"
        >
          What's in the packages?
        </h1>

        <ol class="list-decimal mt-8 md:text-xl">
          <li>Essential items</li>
          <ul class="list-disc">
            <li>2 sachets of chocolate</li>
            <li>2 face masks</li>
            <li>1 pair of comfy socks</li>
            <li>1 scented candle</li>
            <li>1 baking mix</li>
          </ul>

          <li class="mt-4">Special item of your own</li>
          <li class="mt-4">Customizable card</li>
        </ol>

        <p class="mt-8 lg:mt-16 text-center md:text-xl lg:text-left">
          All wrap in a special box for you or your friend!
        </p>
      </div>
      <div class="lg:w-1/2">
        <h1
          class="font-serif text-center font-semibold mt-24 text-2xl md:text-3xl"
        >
          Package prices
        </h1>
        <p class="mt-8 text-center md:text-2xl">
          These prices are for A,B, and Surprise Me! packages. Prices vary
          according to different countries.
        </p>
        <div class="mt-4">
          <div class="flex items-center justify-center">
            <div class="mt-4 rounded-lg w-56 h-32 md:w-64 md:h-40 bg-gray-700">
              <h1
                class="pt-4 md:pt-8 text-center text-4xl text-white font-semibold"
              >
                RM 25 *
              </h1>
              <h2 class="text-center text-xl text-white">Malaysia</h2>
            </div>
          </div>
          <div class="mt-4 md:mt-8 flex items-center justify-center">
            <div class="rounded-lg w-56 h-32 md:w-64 md:h-40 bg-gray-400">
              <h1
                class="pt-4 md:pt-8 text-center text-4xl text-gray-800 font-semibold"
              >
                $ 15
              </h1>
              <h2 class="text-center text-xl text-gray-800">USA</h2>
            </div>
          </div>
          <p class="mt-4 text-center">* Include free shipping</p>
        </div>
      </div>
    </div>
  </main>
</template>
