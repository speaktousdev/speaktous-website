<template>
  <main class="lg:flex lg:flex-row">
    <div class="text-center md:text-justify">
      <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
        Achievements
      </h2>
      <p class="mt-4 md:pr-24 lg:pr-0 md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exer ulla
      </p>
    </div>
    <div class="lg:ml-20">
      <ul
        role="list"
        class="flex flex-col items-center md:flex-row md:flex-wrap sm:px-8"
      >
        <li
          v-for="item in achievementsList"
          :key="item.name"
          class="md:w-4/12 ml-4"
        >
          <div class="space-y-4 py-2">
            <div class="w-full">
              <img
                class="object-cover shadow-lg rounded-lg w-full"
                :src="item.image"
                :alt="`A photo of ${item.title}`">
            </div>
            <div class="sm:col-span-2 px-4">
              <div class="space-y-4">
                <div class="text-base leading-6 font-medium space-y-1">
                  <p class="font-bold md:text-sm">{{ item.title }}</p>
                  <p class="text-green-400 md:text-xs">{{ item.date }}</p>
                </div>
                <div class="text-base">
                  <p class="text-gray-500 md:text-xs lg:text-sm">
                    {{ item.caption }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    achievementsList: {
      type: Array,
      default: () => [
        {
          title: 'Mental Health Campaign STU',
          image: '',
          date: 'September 2021',
          caption:
            'Lorem ipsum dolor sit amet, conectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer ulla',
        },
      ],
      required: true,
    },
  },
}
</script>
