<template>
  <main class="max-w-screen-xl p-4 px-16 lg:mx-auto sm:mx-20">
    <section
      class="flex flex-col items-center justify-center lg:flex-row-reverse lg:space-x-8"
    >
      <!-- <div class="md:flex md:items-center md:justify-center"> -->
      <img
        src="~/assets/images/selflove/logo.png"
        alt="Self love campaign logo. Cupid in a box."
        class=""
      />
      <div class="lg:w-6/8">
        <h1
          class="mt-12 font-serif text-2xl font-semibold text-center md:text-3xl lg:text-6xl lg:text-left"
        >
          Self-Love Cupid ❤️
        </h1>
        <p class="mt-4 md:text-xl">
          Valentines isn’t just about celebrating romantic relationships, but
          also a time for self-love. As we continue to adapt in the new normal
          of isolation and social distancing, it’s easy to be deprived from
          feelings of self-worthiness. Thus, SpeakToUs would like to invite you
          to celebrate this Valentine by pampering yourself with our
          <b>self-love packages</b>!
        </p>
        <p class="mt-10 md:text-xl">
          Check them out and be your own Valentine!
        </p>

        <div
          class="flex flex-col items-center justify-center mt-8 md:flex-row lg:justify-start"
        >
          <!-- This button scroll the page to the Packages section -->
          <a
            class="flex items-center justify-center w-56 h-12 font-semibold text-white bg-pink-400 rounded-full md:text-xl hover:bg-pink-700"
            href="#packages"
          >
            Packages
          </a>
          <!-- This button link to the Google Form -->
          <a
            href="https://forms.gle/RxrKoCb6QX1Tnij87"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center w-56 h-12 mt-4 font-semibold text-white bg-purple-400 rounded-full md:ml-8 md:mt-0 md:text-xl hover:bg-purple-700"
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

        <div class="flex flex-col items-center justify-center mt-8 lg:px-12">
          <ul
            class="flex flex-col space-y-4 text-gray-800 list-disc list-inside md:text-xl"
          >
            <li>🕯️ 🛀 Self-care essentials</li>
            <li>🍫 Comfort snacks</li>
            <li>🧦 Therapeutic activity kit</li>
            <li>🕯️ Special wishing cards</li>
          </ul>
        </div>

        <p
          class="p-8 mt-8 text-lg font-semibold text-center text-gray-800 rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 lg:mt-16 md:text-xl lg:text-left"
        >
          All wrapped in a special box for you! 🎁
        </p>
      </div>
      <div class="lg:w-1/2">
        <h2
          class="mt-24 font-serif text-2xl font-semibold text-center md:text-3xl"
        >
          Package prices
        </h2>
        <p class="mt-8 text-center md:text-xl">
          Prices vary according to country. <b>Agape</b> and
          <b>Pragma</b> packages are only available in the US. <b>Philia</b> and
          <b>Eros</b> are only available in Malaysia.
        </p>
        <div class="mt-4">
          <div class="flex items-center justify-center">
            <div class="w-56 h-32 mt-4 bg-gray-700 rounded-lg md:w-64 md:h-40">
              <p
                class="pt-4 text-4xl font-semibold text-center text-white md:pt-8"
              >
                RM 25
              </p>
              <h2 class="text-xl text-center text-white">Malaysia only</h2>
            </div>
          </div>
          <div class="flex items-center justify-center mt-4 md:mt-8">
            <div class="w-56 h-32 bg-gray-400 rounded-lg md:w-64 md:h-40">
              <p
                class="pt-4 text-4xl font-semibold text-center text-gray-800 md:pt-8"
              >
                $17
              </p>
              <h2 class="text-xl text-center text-gray-800">USA only</h2>
            </div>
          </div>
          <p class="mt-4 text-center">Shipping is free!</p>
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
        We have 4 color-coded packages to choose from!
        <span class="font-semibold">Agape & Pragma</span> is US only, and
        <span class="font-semibold">Philia & Eros</span> is Malaysia only.
      </p>
      <!-- class="flex flex-col space-y-20 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-32" -->
      <div
        class="grid grid-cols-1 gap-20 xl:gap-32 lg:grid-cols-2 xl:grid-cols-4"
      >
        <PackageCard
          title="Agape Package"
          image-src="agape.png"
          description="Includes a painting kit for you to show off your artistic side 🧑‍🎨 🎨 🖌️"
          price="$17"
          location="US"
          button-styles="text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
        />
        <PackageCard
          title="Pragma Package"
          image-src="pragma.png"
          description="Includes a journal to help keep track of your awesome life 📔 ✒️"
          price="$17"
          location="US"
          button-styles="text-white bg-orange-500 hover:bg-orange-700"
        />
        <PackageCard
          title="Philia Package"
          image-src="philia.png"
          description="Includes baking essentials to channel your love through cooking 🧑‍🍳 🎂 🍪"
          price="RM25"
          location="Malaysia"
          button-styles="text-white bg-yellow-600 hover:bg-yellow-800"
        />
        <PackageCard
          title="Eros Package"
          image-src="eros.png"
          description="Includes an origami set to reinforce strong cognitive development 🌸 🌸"
          price="RM25"
          location="Malaysia"
          button-styles="text-white bg-red-600 hover:bg-red-800"
        />
      </div>
    </section>

    <section class="pb-6 mt-32">
      <h2
        class="font-serif font-semibold text-center border-b-2 md:text-xl lg:mx-64"
      >
        Questions on the Self-Love Cupid project?
      </h2>
      <div class="mt-4 text-center">
        <p>
          Email us at
          <a
            href="mailto:speaktousofficial@gmail.com"
            class="text-green-700 hover:underline"
            >speaktousofficial@gmail.com</a
          >
        </p>

        <p>OR</p>

        <p>
          DM us on
          <a
            href="https://twitter.com/_SpeakToUs_"
            target="_blank"
            rel="noreferrer noopener"
            class="text-blue-700 hover:underline"
            >Twitter</a
          >,
          <a
            href="https://www.instagram.com/_speaktous_/"
            target="_blank"
            rel="noreferrer noopener"
            class="text-pink-700 hover:underline"
            >Instagram</a
          >
          or
          <a
            href="https://www.facebook.com/speaktousofficial/"
            target="_blank"
            rel="noreferrer noopener"
            class="text-indigo-700 hover:underline"
            >Facebook</a
          >
        </p>
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
  data() {
    return {
      title: 'Self-Love Cupid | SpeakToUs',
      description:
        'Celebrate this Valentines Day by pampering yourself with our Self-Love Cupid packages for yourself or for your loved ones.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        // Twitter meta tags
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.speaktous.online/selflove-logo.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Self-Love Cupid campaign logo.',
        },
        // Other social media tags
        // OG i.e. Open Graph Protocol docs: https://ogp.me/
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.speaktous.online/selflove',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.speaktous.online/selflove-logo.png',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: 'Self-Love Cupid campaign logo.',
        },
      ],
    }
  },
}
</script>
