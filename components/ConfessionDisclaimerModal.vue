<template>
  <transition name="modal">
    <div
      class="
        fixed
        top-0
        left-0
        z-50
        table
        w-full
        h-full
        transition-opacity
        duration-700
        ease-in-out
        modal-mask
      "
    >
      <div class="table-cell align-middle">
        <div
          class="
            w-10/12
            max-w-screen-lg
            p-5
            mx-auto
            overflow-y-scroll
            font-serif
            transition-all
            duration-300
            ease-in-out
            bg-white
            rounded-lg
            lg:w-8/12
            xl:w-7/12
            md:w-3/5
            modal-container
          "
        >
          <h1
            class="
              pb-3
              mb-4
              font-sans
              text-xl
              border-b border-green-500
              md:text-2xl
              lg:text-3xl
            "
          >
            Confession jar disclaimer:
          </h1>
          <section class="text-left">
            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              Your confession must not include sensitive information (i.e.
              location, workplace, real name, etc.), or inappopriate conduct
              (i.e. insults, ridicule, deragotary names etc.)
            </p>
            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              We guarentee that everything you write will be read by us but we
              may or may not share on Instagram.
            </p>
            <p class="p-2 mb-4 bg-gray-200 rounded-lg">
              If the confession requests for a response, the listeners will
              evaluate on a case by case basis and decide whether to share or
              not.
            </p>
          </section>

          <div class="flex flex-col">
            <button
              class="
                self-center
                w-full
                py-3
                text-white
                bg-red-700
                rounded-lg
                shadow-xl
                hover:bg-red-900
              "
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
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
