<template>
  <main class="max-w-screen-xl mx-auto text-black lg:text-gray-800">
    <section class="md:flex md:flex-row px-12 mt-4 md:mt-12">
      <div class="md:w-7/12 text-center">
        <h1 class="font-bold font-serif text-4xl lg:text-6xl">
          Seasonal projects
        </h1>
        <p class="mt-12 lg:text-left">
          SpeakToUs creates seasonal projects to promote mental health
          awareness. These projects happen a limited time, so follow us in
          social media for updates on our upcoming projects this year!
        </p>
        <p class="mt-8 lg:text-left">
          Check out our past and current projects here.
        </p>
      </div>
      <ProjectIcon class="w-1/4 ml-24 hidden md:block" />
    </section>
    <section class="md:flex md:flex-row px-12 mt-48">
      <img
        src="~/assets/images/selflove/logo.png"
        alt="Self love campaign logo. Cupid in a box."
        class="md:hidden"
      />
      <div class="md:w-7/12 md:mt-20 text-center">
        <h1 class="font-bold font-serif text-2xl lg:text-4xl">
          Self Care Packages
        </h1>
        <p class="mt-4 md:px-12 lg:text-left">
          Reward yourself with therapeutic kits to pamper yourself or surprise
          your loved ones with comforting care packages.
        </p>
        <p class="mt-8 md:px-12 lg:text-left">
          We have launched two self-packages: Christmas and Valentine’s Day.
        </p>
      </div>
      <img
        src="~/assets/images/selflove/logo.png"
        alt="Self love campaign logo. Cupid in a box."
        class="w-1/4 ml-24 hidden md:block"
      />
    </section>
    <section class="md:flex md:flex-row px-12 mt-48 mb-24">
      <PodcastIcon class="md:w-5/12" />
      <div class="md:w-7/12 text-center mt-4 md:mt-16">
        <h1 class="font-bold font-serif text-2xl lg:text-4xl">Podcast</h1>
        <p class="mt-4 md:px-12 lg:text-centre">
          Listen to mental health related topics <br />
          and earn tips on how to practice self love.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import ProjectIcon from '~/components/svg/project/Header.vue'
import PodcastIcon from '~/components/svg/project/Podcast.vue'
export default {
  components: {
    ProjectIcon,
    PodcastIcon,
  },
}
</script>
