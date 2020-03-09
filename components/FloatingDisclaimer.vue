<template>
  <transition name="modal">
    <div
      class="fixed top-0 left-0 z-50 table w-full h-full transition-opacity duration-700 ease-in-out modal-mask"
    >
      <div class="table-cell align-middle">
        <div
          class="w-10/12 max-w-screen-lg p-5 mx-auto overflow-y-scroll font-serif transition-all duration-300 ease-in-out bg-white rounded-lg lg:w-8/12 xl:w-7/12 md:w-3/5 modal-container"
        >
          <h1
            class="pb-3 mb-4 font-sans text-xl border-b border-green-500 md:text-2xl lg:text-3xl"
          >
            Hey there! Before we chat,
            <p class="font-extrabold text-green-900">
              please read through our disclaimer:
            </p>
          </h1>
          <section class="text-left">
            <div class="p-2 mb-4 bg-gray-200 rounded-lg">
              <h2 class="mb-1">
                In case of
                <span class="font-bold">any medical emergencies</span>, please:
              </h2>
              <ol class="p-2 list-decimal list-inside bg-gray-400 rounded-lg">
                <li>
                  <span class="font-bold">Call 911</span> for medical
                  emergencies.
                </li>
                <li>
                  If your condition is not as serious for you to call the
                  ambulance, find a friend who can drive you or accompany you to
                  the nearest hospital or clinic.
                </li>
                <li>
                  If you have mental health emergencies, please contact
                  <span class="font-bold">
                    UHS 24-Hour Mental Health Crisis Services
                  </span>
                  at <span class="font-bold">608-265-5600 (option 9)</span>.
                </li>
                <li>
                  Please refer more
                  <a
                    class="font-bold text-blue-700 underline"
                    href="https://www.uhs.wisc.edu/mental-health/24-hour-crisis-services/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here</a
                  >.
                </li>
              </ol>
            </div>

            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              We are <span class="font-bold">NOT medical professionals</span>,
              but we share a similar cultural background a fellow Malaysian. We
              are ready to listen and be there for you - trust us, we care!
            </p>
            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              Our approaches <span class="font-bold">may NOT fit</span> every
              individual and situation, but we’ll try our best to accommodate
              your concern.
            </p>
            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              Our Listeners are bilinguals--
              <span class="font-bold">English and Malay</span>. Feel free to
              SpeakToUs in either language! Support for other languages will be
              added soon.
            </p>
          </section>

          <div class="flex flex-col">
            <a
              class="self-center w-full p-3 mb-4 text-white bg-green-400 rounded-lg shadow-xl hover:bg-green-700"
              :href="chatLink"
              target="_blank"
              rel="noreferrer"
            >
              I understand. Continue to chat.
            </a>
            <button
              class="self-center w-full py-3 text-white bg-red-700 rounded-lg shadow-xl hover:bg-red-900"
              @click="$emit('close')"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    chatLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

/* xs to md sized screens */
.modal-container {
  height: calc(100vh - 130px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

@screen md {
  .modal-container {
    height: auto;
    /* height: calc(100vh - 130px); */
  }
}

li {
  @apply text-sm mb-1;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
