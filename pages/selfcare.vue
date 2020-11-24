<template>
  <main class="max-w-screen-xl p-4 px-16 lg:mx-auto sm:mx-20">
    <section class="lg:flex lg:flex-row-reverse lg:space-x-8">
      <div class="md:flex md:items-center md:justify-center lg:w-3/8">
        <img
          src="~/assets/images/selfcare/logo.png"
          alt="Self care campaign logo. Santa in a box."
          class=""
        />
      </div>
      <div class="lg:w-6/8">
        <h1
          class="mt-12 font-serif text-2xl font-semibold text-center md:text-3xl lg:text-6xl lg:text-left"
        >
          Self-Care Santa!
        </h1>
        <p class="mt-4 md:text-xl">
          Self-Care Santa is a collaboration between SpeakToUs and NAMSA. We
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
          class="flex flex-col items-center justify-center mt-8 md:flex-row lg:justify-start"
        >
          <!-- This button scroll the page to the Packages section -->
          <a
            class="flex items-center justify-center w-56 h-12 font-semibold bg-gray-400 rounded-full md:text-xl hover:bg-gray-600"
            href="#packages"
          >
            Packages
          </a>
          <!-- This button link to the Google Form -->
          <a
            href="https://forms.gle/RxrKoCb6QX1Tnij87"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center w-56 h-12 mt-4 font-semibold text-white bg-green-400 rounded-full md:ml-8 md:mt-0 md:text-xl hover:bg-green-700"
            >Buy now</a
          >
        </div>
      </div>
    </section>
    <!-- What's in the packages & Package prices section -->
    <section class="lg:flex lg:flex-row lg:space-x-8">
      <div class="lg:w-1/2">
        <h2
          class="mt-24 font-serif text-2xl font-semibold text-center md:text-3xl"
        >
          What's in a package?
        </h2>

        <div
          class="flex flex-col items-center lg:mx-12 justify-center mt-8 border-l-4 border-gray-700"
        >
          <ol class="list-decimal md:text-xl">
            <li>Essential items:</li>
            <ul class="text-gray-800 list-disc list-inside">
              <li>🍫 2 sachets of chocolate</li>
              <li>🎭 2 face masks</li>
              <li>🧦 1 pair of comfy socks</li>
              <li>🕯️ 1 scented candle</li>
              <li>🎂 1 baking mix</li>
            </ul>

            <li class="pt-8">A special item of your own ✨</li>
            <li class="pt-8">A customizable card ✉️</li>
          </ol>
        </div>

        <p
          class="p-8 mt-8 text-lg font-semibold text-center text-gray-800 bg-gradient-to-r from-green-200 to-indigo-200 lg:mt-16 md:text-xl lg:text-left rounded-lg"
        >
          All wrapped in a special box for you or your friend! 🎁
        </p>
      </div>
      <div class="lg:w-1/2">
        <h2
          class="mt-24 font-serif text-2xl font-semibold text-center md:text-3xl"
        >
          Package prices
        </h2>
        <p class="mt-8 text-center md:text-xl">
          These prices are for <b>A</b>, <b>B</b>, and
          <b>Surprise Me!</b> packages. Prices vary according to country.
        </p>
        <div class="mt-4">
          <div class="flex items-center justify-center">
            <div class="w-56 h-32 mt-4 bg-gray-700 rounded-lg md:w-64 md:h-40">
              <p
                class="pt-4 text-4xl font-semibold text-center text-white md:pt-8"
              >
                RM 25 *
              </p>
              <h2 class="text-xl text-center text-white">Malaysia</h2>
            </div>
          </div>
          <div class="flex items-center justify-center mt-4 md:mt-8">
            <div class="w-56 h-32 bg-gray-400 rounded-lg md:w-64 md:h-40">
              <p
                class="pt-4 text-4xl font-semibold text-center text-gray-800 md:pt-8"
              >
                $ 15
              </p>
              <h2 class="text-xl text-center text-gray-800">USA</h2>
            </div>
          </div>
          <p class="mt-4 text-center">*Include free shipping!</p>
        </div>
      </div>
    </section>
    <!-- Packages section -->
    <section class="flex flex-col items-center justify-center">
      <h2
        id="packages"
        class="mt-24 mb-2 font-serif text-2xl font-semibold text-center md:text-3xl"
      >
        Packages
      </h2>
      <p class="pb-8 text-sm text-center lg:pb-16 md:text-xl lg:text-base">
        We have 3 options to choose from!
      </p>
      <div
        class="flex flex-col space-y-20 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-48"
      >
        <PackageCard
          title="Package A"
          special-item="Embroidery"
          package="A"
          button-styles="text-gray-800 bg-gray-300 hover:bg-gray-600 hover:text-white"
        />
        <PackageCard
          title="Package B"
          special-item="Puzzle"
          package="B"
          button-styles="text-white bg-green-600 hover:bg-green-400"
        />
        <PackageCard
          title="Package C"
          special-item="Mystery Gift"
          package="C"
          button-styles="text-white bg-purple-900 hover:bg-purple-600"
        />
      </div>
    </section>
    <!-- Note card section -->
    <section class="flex flex-col items-center justify-center pb-20">
      <h2
        class="mt-24 mb-2 font-serif text-2xl font-semibold text-center md:text-3xl"
      >
        Note cards
      </h2>
      <p class="pb-8 text-sm text-center md:text-xl lg:text-base">
        Note card only option is available too!
      </p>
      <div class="lg:flex lg:flex-row-reverse">
        <div class="flex flex-col items-center">
          <img
            src=""
            alt="Note card image."
            class="w-11/12 h-56 bg-gray-300 rounded-xl lg:w-64"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:pr-12"
        >
          <p class="pt-6 text-center lg:text-left lg:text-xl">
            Customize your card with a personal message,
            <br class="hidden lg:block" />
            or SpeakToUs will write it out for you!
          </p>
          <p class="pt-8 pb-6">
            <span class="text-xl font-bold">RM2.50 / $2.50</span> per note card
          </p>
          <a
            href="https://forms.gle/RxrKoCb6QX1Tnij87"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center w-56 h-12 mt-4 font-semibold text-white bg-green-600 rounded-full md:text-xl hover:bg-green-400"
          >
            Buy now
          </a>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <h2
        class="font-serif text-center border-b-2 font-semibold md:text-xl lg:mx-64"
      >
        Questions on the Self-Care Santa project?
      </h2>
      <div class="mt-4 text-center hover:text-green-400">
        <a href="mailto:speaktousofficial@gmail.com"
          >Email us at speaktousofficial@gmail.com</a
        >
      </div>
    </section>
  </main>
</template>

<script>
import PackageCard from '@/components/PackageCard.vue'

export default {
  components: {
    PackageCard,
  },
}
</script>
