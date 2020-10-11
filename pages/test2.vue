<template>
  <div
    class="flex flex-col items-center justify-center max-w-screen-xl px-10 text-black lg:text-gray-800 lg:mx-auto"
  >
    <h1 class="mb-8 text-3xl">We bring SpeakToUs to you</h1>
    <div class="w-3/4">
      <CirclePhotoCollage :images="images" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          name: 'Shaza',
          url: require('@/assets/images/team/shaza.jpg'),
        },
        {
          name: 'Ayda',
          url: require('@/assets/images/team/ayda.jpg'),
        },
        {
          name: 'Effrie',
          url: require('@/assets/images/team/effrie.jpg'),
        },

        {
          name: 'Kamal',
          url: require('@/assets/images/team/kamal.jpg'),
        },
        {
          name: 'Adriana',
          url: require('@/assets/images/team/adriana.jpg'),
        },
        {
          name: 'Ghee',
          url: require('@/assets/images/team/ghee.jpg'),
        },
        {
          name: 'Riza',
          url: require('@/assets/images/team/riza.jpg'),
        },
        {
          name: 'Umi',
          url: require('@/assets/images/team/umi.jpg'),
        },
        {
          name: 'Shereen',
          url: require('@/assets/images/team/shereen.jpg'),
        },
        {
          name: 'Sheikh',
          url: require('@/assets/images/team/sheikh.jpg'),
        },
        {
          name: 'Mujahid',
          url: require('@/assets/images/team/mujahid.jpg'),
        },
        {
          name: 'Mirza',
          url: require('@/assets/images/team/mirza.jpg'),
        },
        {
          name: 'Liyana',
          url: require('@/assets/images/team/liyana.jpg'),
        },
        {
          name: 'Aina',
          url: require('@/assets/images/team/aina.jpg'),
        },
        {
          name: 'Adlina',
          url: require('@/assets/images/team/adlina.jpg'),
        },
        {
          name: 'Emily',
          url: require('@/assets/images/team/emily.jpg'),
        },
        {
          name: 'Fayyadh',
          url: require('@/assets/images/team/fayyadh.jpg'),
        },
        {
          name: 'Nadia',
          url: require('@/assets/images/team/nadia.jpg'),
        },
      ],
      images2: [
        {
          name: 'Kamal Syahmi',
          url:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Shaza Rahim',
          url:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Mujahid Anuar',
          url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          name: 'Effrie Zainal',
          url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Kamal Syahmi',
          url:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Shaza Rahim',
          url:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Mujahid Anuar',
          url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          name: 'Effrie Zainal',
          url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Kamal Syahmi',
          url:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Shaza Rahim',
          url:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Mujahid Anuar',
          url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          name: 'Effrie Zainal',
          url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Kamal Syahmi',
          url:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Shaza Rahim',
          url:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Mujahid Anuar',
          url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          name: 'Effrie Zainal',
          url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Mujahid Anuar',
          url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          name: 'Effrie Zainal',
          url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    }
  },
}
</script>
