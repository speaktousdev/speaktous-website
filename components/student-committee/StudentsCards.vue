<template>
  <main>
    <ul
      role="list"
      class="
        flex
        flex-col
        items-center
        md:flex-row
        md:flex-wrap
      "
    >
      <li v-for="student in studentsList" :key="student.name" class="md:w-6/12">
        <div
          class="
            space-y-4
            py-2
            md:flex
            md:flex-row
          "
        >
          <div class="w-full">
            <img
              class="object-cover shadow-lg rounded-lg w-full"
              :src="student.image"
              :alt="`A photo of ${student.name}`"
            />
          </div>
          <div class="sm:col-span-2 px-4">
            <div class="space-y-4">
              <div class="text-lg leading-6 font-medium space-y-1">
                <p class="font-bold md:text-sm">{{ student.name }}</p>
                <p class="text-green-400 md:text-xs">{{ student.role }}</p>
              </div>
              <div class="text-base">
                <p class="text-gray-500 md:pr-12 md:text-xs lg:text-sm">
                  {{ student.caption }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  props: {
    studentsList: {
      type: Array,
      default: () => ([{
        name: 'Student A',
        image: '',
        role: 'Student Committee',
        caption: 'Advocating for mental health is my passion.',
      }]),
      required: true,
    },
  },
}
</script>
