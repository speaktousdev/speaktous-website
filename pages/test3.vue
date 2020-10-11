<template>
  <div
    class="flex flex-col justify-center max-w-screen-xl px-10 text-black lg:text-gray-800 lg:mx-auto"
  >
    <h1 class="my-8 text-3xl text-center">We bring SpeakToUs to you</h1>
    <div class="mt-10 mb-48 parent" style="height: 600px">
      <div class="bg-placeholder div2">
        <img src="@/assets/images/team/shaza.jpg" alt="A photo of Shaza" />
      </div>
      <div class="bg-placeholder div4">
        <img src="@/assets/images/team/kamal.jpg" alt="A photo of Kamal" />
      </div>

      <div class="bg-placeholder div8">
        <img src="@/assets/images/team/fayyadh.jpg" alt="A photo of Fayyadh" />
      </div>
      <div class="bg-placeholder div3">
        <img src="@/assets/images/team/shereen.jpg" alt="A photo of Shereen" />
      </div>
      <div class="bg-placeholder div1">
        <img src="@/assets/images/team/liyana.jpg" alt="A photo of Liyana" />
      </div>
      <div class="bg-placeholder div9">
        <img src="@/assets/images/team/nadia.jpg" alt="A photo of Nadia" />
      </div>
      <div class="bg-placeholder div5">
        <img src="@/assets/images/team/sheikh.jpg" alt="A photo of Sheikh" />
      </div>
      <div class="bg-placeholder div10">
        <img src="@/assets/images/team/effrie.jpg" alt="A photo of Effrie" />
      </div>
      <div class="bg-placeholder div11">
        <img src="@/assets/images/team/ayda.jpg" alt="A photo of Ayda" />
      </div>

      <div class="bg-placeholder div13">
        <img src="@/assets/images/team/adlina.jpg" alt="A photo of Adlina" />
      </div>
      <div class="bg-placeholder div14">
        <img src="@/assets/images/team/adriana.jpg" alt="A photo of Adriana" />
      </div>
      <div class="bg-placeholder div15">
        <img src="@/assets/images/team/aina.jpg" alt="A photo of Aina" />
      </div>
      <div class="bg-placeholder div16">
        <img src="@/assets/images/team/ghee.jpg" alt="A photo of Ghee" />
      </div>
      <div class="bg-placeholder div17">
        <img src="@/assets/images/team/riza.jpg" alt="A photo of Riza" />
      </div>
      <div class="bg-placeholder div6">
        <img src="@/assets/images/team/umi.jpg" alt="A photo of Umi" />
      </div>
      <div class="bg-placeholder div7">
        <img src="@/assets/images/team/mujahid.jpg" alt="A photo of Mujahid" />
      </div>
      <div class="bg-placeholder div18">
        <img src="@/assets/images/team/mirza.jpg" alt="A photo of Mirza" />
      </div>
      <div class="bg-placeholder div12">
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
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 5 / 5 / 8 / 7;
}
.div2 {
  grid-area: 7 / 7 / 10 / 9;
}
.div3 {
  grid-area: 5 / 7 / 7 / 10;
}
.div4 {
  grid-area: 2 / 6 / 5 / 8;
}
.div5 {
  grid-area: 4 / 2 / 6 / 5;
}
.div6 {
  grid-area: 6 / 2 / 9 / 4;
}
.div7 {
  grid-area: 8 / 4 / 11 / 6;
}
.div8 {
  grid-area: 2 / 9 / 5 / 11;
}
.div9 {
  grid-area: 5 / 10 / 8 / 12;
}
.div10 {
  grid-area: 1 / 11 / 4 / 13;
}
.div11 {
  grid-area: 1 / 4 / 4 / 6;
}
.div12 {
  grid-area: 1 / 1 / 4 / 3;
}
.div13 {
  grid-area: 10 / 11 / 13 / 13;
}
.div14 {
  grid-area: 10 / 3 / 13 / 5;
}
.div15 {
  grid-area: 9 / 1 / 12 / 3;
}
.div16 {
  grid-area: 8 / 9 / 10 / 12;
}
.div17 {
  grid-area: 10 / 8 / 13 / 10;
}
.div18 {
  grid-area: 10 / 6 / 13 / 8;
}
</style>
<script>
export default {
  data() {
    return {}
  },
}
</script>
