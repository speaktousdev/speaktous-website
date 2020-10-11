<template>
  <div
    class="flex flex-col justify-center max-w-screen-xl px-10 text-black lg:text-gray-800 lg:mx-auto"
  >
    <h1 class="my-8 text-3xl text-center">We bring SpeakToUs to you</h1>
    <div class="mt-10 mb-48 parent" style="height: 500px">
      <div class="bg-gray-400 div2">
        <img src="@/assets/images/team/shaza.jpg" alt="A photo of Shaza" />
      </div>
      <div class="bg-gray-400 div4">
        <img src="@/assets/images/team/kamal.jpg" alt="A photo of Kamal" />
      </div>

      <div class="bg-gray-400 div8">
        <img src="@/assets/images/team/fayyadh.jpg" alt="A photo of Fayyadh" />
      </div>
      <div class="bg-gray-400 div3">
        <img src="@/assets/images/team/ayda.jpg" alt="A photo of Ayda" />
      </div>
      <div class="bg-gray-400 div18">
        <img src="@/assets/images/team/mirza.jpg" alt="A photo of Mirza" />
      </div>
      <div class="bg-gray-400 div1">
        <img src="@/assets/images/team/liyana.jpg" alt="A photo of Liyana" />
      </div>
      <div class="bg-gray-400 div9">
        <img src="@/assets/images/team/nadia.jpg" alt="A photo of Nadia" />
      </div>
      <div class="bg-gray-400 div5">
        <img src="@/assets/images/team/mujahid.jpg" alt="A photo of Mujahid" />
      </div>
      <div class="bg-gray-400 div10">
        <img src="@/assets/images/team/effrie.jpg" alt="A photo of Effrie" />
      </div>
      <div class="bg-gray-400 div11">
        <img src="@/assets/images/team/shereen.jpg" alt="A photo of Shereen" />
      </div>

      <div class="bg-gray-400 div13">
        <img src="@/assets/images/team/adlina.jpg" alt="A photo of Adlina" />
      </div>
      <div class="bg-gray-400 div14">
        <img src="@/assets/images/team/adriana.jpg" alt="A photo of Adriana" />
      </div>
      <div class="bg-gray-400 div15">
        <img src="@/assets/images/team/aina.jpg" alt="A photo of Aina" />
      </div>
      <div class="bg-gray-400 div16">
        <img src="@/assets/images/team/ghee.jpg" alt="A photo of Ghee" />
      </div>
      <div class="bg-gray-400 div17">
        <img src="@/assets/images/team/riza.jpg" alt="A photo of Riza" />
      </div>
      <div class="bg-gray-400 div6">
        <img src="@/assets/images/team/umi.jpg" alt="A photo of Umi" />
      </div>
      <div class="bg-gray-400 div7">
        <img src="@/assets/images/team/sheikh.jpg" alt="A photo of Sheikh" />
      </div>

      <div class="bg-gray-400 div12">
        <img src="@/assets/images/team/emily.jpg" alt="A photo of Emily" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}

.div1 {
  grid-area: 4 / 4 / 7 / 6;
}
.div2 {
  grid-area: 3 / 5 / 5 / 8;
}
.div3 {
  grid-area: 6 / 5 / 9 / 7;
}
.div4 {
  grid-area: 4 / 7 / 6 / 10;
}
.div5 {
  grid-area: 6 / 1 / 8 / 4;
}
.div6 {
  grid-area: 5 / 9 / 8 / 11;
}
.div7 {
  grid-area: 7 / 7 / 9 / 10;
}
.div8 {
  grid-area: 8 / 6 / 11 / 8;
}
.div9 {
  grid-area: 8 / 3 / 10 / 6;
}
.div10 {
  grid-area: 2 / 2 / 5 / 4;
}
.div11 {
  grid-area: 2 / 9 / 4 / 12;
}
.div12 {
  grid-area: 8 / 9 / 11 / 11;
}
.div13 {
  grid-area: 9 / 2 / 12 / 4;
}
.div14 {
  grid-area: 10 / 7 / 12 / 10;
}
.div15 {
  grid-area: 10 / 4 / 13 / 6;
}
.div16 {
  grid-area: 4 / 10 / 6 / 13;
}
.div17 {
  grid-area: 7 / 10 / 9 / 13;
}
.div18 {
  grid-area: 1 / 4 / 4 / 6;
}
</style>

<script>
export default {
  data() {
    return {}
  },
}
</script>
