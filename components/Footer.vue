<template>
  <footer
    id="footer"
    class="flex flex-col items-center justify-center pt-6 text-sm text-gray-800 bg-gray-200 border-t border-gray-300"
  >
    <p>© 2021 by SpeakToUs Organization.</p>
    <div class="flex">
      <nuxt-link class="mr-4 hover:font-semibold" to="/disclaimer"
        >Disclaimer & Terms</nuxt-link
      >
      <span aria-hidden="true">&#183;</span>
      <a
        class="ml-4 hover:font-semibold"
        href="mailto:speaktousofficial@gmail.com"
        >Contact Us</a
      >
    </div>
    <div>
      <p class="text-center">Follow us!</p>
      <div class="flex space-x-4">
        <a
          href="https://www.facebook.com/speaktousofficial/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="sr-only">Link to SpeakToUs Facebook page.</span>
          <svg
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              fill="#8bb7f0"
              d="M15 1A14 14 0 1 0 15 29A14 14 0 1 0 15 1Z"
            />
            <path
              fill="#fff"
              d="M28.921 16.479c.002-.02.006-.039.008-.059C28.926 16.439 28.922 16.459 28.921 16.479zM1.071 16.415c.003.027.008.053.011.08C1.079 16.468 1.074 16.441 1.071 16.415zM16.996 18.71h3.623l.569-3.68h-4.192v-2.012c0-1.529.5-2.885 1.93-2.885h2.298V6.922c-.404-.054-1.257-.174-2.871-.174-3.37 0-5.345 1.78-5.345 5.834v2.449H9.544v3.68h3.464v9.92c.684.103 1.379.173 2.093.173.644 0 1.274-.059 1.895-.143V18.71z"
            />
            <g>
              <path
                fill="#4e7ab5"
                d="M15,2c7.168,0,13,5.832,13,13s-5.832,13-13,13S2,22.168,2,15S7.832,2,15,2 M15,1 C7.268,1,1,7.268,1,15s6.268,14,14,14s14-6.268,14-14S22.732,1,15,1L15,1z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/_speaktous_/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="sr-only">Link to SpeakToUs Instagram.</span>
          <svg
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              fill="#8d8dd8"
              d="M22.5,1.5h-15c-3.3,0-6,2.7-6,6v15c0,3.3,2.7,6,6,6h15c3.3,0,6-2.7,6-6v-15 C28.5,4.2,25.8,1.5,22.5,1.5z"
            />
            <path
              fill="#8585cc"
              d="M27.9,5c-0.9-2.1-3-3.5-5.4-3.5h-4.1C21.8,2.1,25,3.3,27.9,5z"
            />
            <path
              fill="#bd82f4"
              d="M1.5,7.5v15c0,3.3,2.7,6,6,6h15c3.3,0,6-2.7,6-6V8.9C24.1,5.8,18.8,4,13,4C8.8,4,4.8,5,1.3,6.7 C1.4,6.9,1.5,7.2,1.5,7.5z"
            />
            <path
              fill="#ed73f4"
              d="M1.5,22.5c0,3.3,2.7,6,6,6h15c3.3,0,6-2.7,6-6v-9.8C24.3,9.1,18.9,7,13,7C8.8,7,4.9,8.1,1.5,9.9V22.5 z"
            />
            <path
              fill="#f97dcd"
              d="M1.5,22.5c0,3.3,2.7,6,6,6h15c3.3,0,6-2.7,6-6v-5.6C24.7,12.7,19.1,10,13,10c-4.2,0-8.2,1.3-11.5,3.4 V22.5z"
            />
            <path
              fill="#fc9c95"
              d="M1.5,22.5c0,3.3,2.7,6,6,6h15c3.3,0,6-2.7,6-6v-0.6C25.4,16.6,19.6,13,13,13 c-4.4,0-8.4,1.6-11.5,4.2V22.5z"
            />
            <path
              fill="#ffac99"
              d="M1.5,22.5c0,3.3,2.7,6,6,6h15c1.9,0,3.6-0.9,4.7-2.3C25.2,20.3,19.6,16,13,16 c-4.6,0-8.7,2.1-11.5,5.4V22.5z"
            />
            <path
              fill="#ffc49c"
              d="M7.5,28.5h15c0.8,0,1.5-0.1,2.1-0.4c-1.3-5.2-6-9.1-11.6-9.1c-4.7,0-8.7,2.7-10.7,6.5 C3.4,27.3,5.3,28.5,7.5,28.5z"
            />
            <path
              fill="#ffde8d"
              d="M7.5,28.5h14.1C20.6,24.7,17.1,22,13,22c-3.8,0-7.1,2.4-8.4,5.8C5.5,28.2,6.5,28.5,7.5,28.5z"
            />
            <path
              fill="#fff69f"
              d="M18.4,28.5c-0.9-2.1-3-3.5-5.4-3.5s-4.5,1.4-5.4,3.5H18.4z"
            />
            <path
              fill="#8b75a1"
              d="M23,2c2.8,0,5,2.2,5,5v16c0,2.8-2.2,5-5,5H7c-2.8,0-5-2.2-5-5V7c0-2.8,2.2-5,5-5H23 M23,1H7 C3.7,1,1,3.7,1,7v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V7C29,3.7,26.3,1,23,1L23,1z"
            />
            <path
              fill="#fff"
              d="M19,25h-8c-3.3,0-6-2.7-6-6v-8c0-3.3,2.7-6,6-6h8c3.3,0,6,2.7,6,6v8C25,22.3,22.3,25,19,25z M11,7 c-2.2,0-4,1.8-4,4v8c0,2.2,1.8,4,4,4h8c2.2,0,4-1.8,4-4v-8c0-2.2-1.8-4-4-4H11z"
            />
            <path
              fill="#fff"
              d="M15 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S17.8 20 15 20zM15 12c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S16.7 12 15 12zM20 9A1 1 0 1 0 20 11 1 1 0 1 0 20 9z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/_SpeakToUs_"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="sr-only">Link to SpeakToUs Twitter.</span>
          <svg
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              fill="#c2e8ff"
              d="M9.8,25.9c-2.4,0-4.7-0.5-6.8-1.5c2.5-0.1,4.8-1,6.8-2.5l1.1-0.9l-1.4,0c-2,0-3.7-1.2-4.6-2.9 c0.1,0,0.2,0,0.3,0c0.6,0,1.1-0.1,1.6-0.2l2-0.6l-2.1-0.4c-2.2-0.4-3.8-2.2-4.2-4.4c0.6,0.2,1.3,0.4,2,0.4l1.7,0.1l-1.5-1 c-1.5-1-2.3-2.6-2.3-4.4c0-0.7,0.1-1.4,0.4-2c3,3.3,7.2,5.4,11.7,5.6l0.7,0l-0.1-0.6c-0.1-0.4-0.1-0.8-0.1-1.2 c0-2.9,2.4-5.2,5.2-5.2c1.4,0,2.8,0.6,3.8,1.7L24.4,6l0.3-0.1c0.9-0.2,1.7-0.4,2.5-0.8c-0.4,0.7-1,1.2-1.7,1.6L25.1,7l0.4,0.7 l0.4,0c0.6-0.1,1.1-0.2,1.7-0.3c-0.5,0.6-1.1,1.1-1.7,1.5L25.6,9l0,0.3c0,0.2,0,0.5,0,0.7C25.6,17.8,19.7,25.9,9.8,25.9z"
            />
            <path
              fill="#7496c4"
              d="M20.4,4.6c1.3,0,2.6,0.5,3.5,1.5l0.4,0.4l0.5-0.1c0.2,0,0.4-0.1,0.5-0.1c0,0,0,0-0.1,0l-0.8,0.5 l0.4,0.8l0.3,0.6l0.7-0.1c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.4,0.3l-0.4,0.3l0,0.5c0,0.2,0,0.5,0,0.7c0,3.7-1.4,7.5-4,10.4 c-2,2.3-5.6,5-11.4,5c-1.6,0-3.3-0.3-4.8-0.8c1.9-0.4,3.6-1.2,5.1-2.4l2.2-1.7l-2.8-0.1c-1.5,0-2.9-0.8-3.7-1.9 c0.4,0,0.8-0.1,1.2-0.2l4.1-1.1l-4.1-0.8c-1.7-0.3-3.1-1.6-3.6-3.2c0.4,0.1,0.9,0.2,1.3,0.2l3.5,0.1l-2.9-1.9 C4,10.6,3.2,9.2,3.2,7.6c0-0.3,0-0.7,0.1-1c3,3.1,7.1,4.9,11.5,5.1l1.3,0.1l-0.3-1.3c-0.1-0.4-0.1-0.7-0.1-1.1 C15.6,6.8,17.8,4.6,20.4,4.6 M20.4,3.6c-3.2,0-5.7,2.6-5.7,5.7c0,0.4,0.1,0.9,0.1,1.3c-4.8-0.2-9-2.5-11.8-6 C2.5,5.5,2.2,6.5,2.2,7.6c0,2,1,3.8,2.6,4.8c-0.9,0-1.8-0.3-2.6-0.7c0,0,0,0,0,0.1c0,2.8,2,5.1,4.6,5.6c-0.5,0.1-1,0.2-1.5,0.2 c-0.4,0-0.7,0-1.1-0.1c0.7,2.3,2.9,3.9,5.4,4c-2,1.5-4.4,2.5-7.1,2.5c-0.5,0-0.9,0-1.4-0.1c2.5,1.6,5.6,2.6,8.8,2.6 c10.6,0,16.3-8.8,16.3-16.3c0-0.2,0-0.5,0-0.7c1.1-0.8,2.1-1.8,2.9-3c-1,0.5-2.1,0.8-3.2,0.9l0,0c1.2-0.7,2-1.8,2.5-3.1 c-1.1,0.7-2.3,1.1-3.6,1.4C23.5,4.3,22,3.6,20.4,3.6L20.4,3.6z"
            />
            <path
              fill="#7496c4"
              d="M25.1,9.3C25.1,8,24.7,7,24,6.2l0.7-0.7c0.9,0.9,1.3,2.2,1.4,3.7L25.1,9.3z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="flex-col text-center sm:flex-row">
      <p class="inline-block">A student support platform</p>
      <span>&#183;</span>
      <p class="inline-block">For all Malaysians, by Malaysians 🇲🇾 😊</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
#footer * {
  @apply mb-2;
}
</style>
