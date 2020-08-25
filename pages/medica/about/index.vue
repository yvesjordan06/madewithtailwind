<template>
  <div class="flex flex-col">
    <div
      id="hero"
      class="bg-cover bg-center bg-fixed h-64 flex bg-gray-900 font-black text-green-500 tracking-wide text-4xl items-center justify-center w-full"
      style=" background-image: url('~/assets/jobboro_logo.png')"
      @dblclick="hidden"
    >
      CENAME DESKTOP
    </div>
    <div class="p-16 py-8">
      <div>
        <p class="text-3xl font-bold">App Info</p>
        <div class="flex mt-4">
          <span class="w-2/12 font-bold text-gray-700 uppercase">Name:</span>
          <span class="w-10/12">Cename Desktop</span>
        </div>
        <div class="flex mt-4">
          <span class="w-2/12 font-bold text-gray-700 uppercase">Version:</span>
          <span class="w-10/12 font-mono">1.0.1 Stable</span>
        </div>
        <div class="flex mt-4">
          <span class="w-2/12 font-bold text-gray-700">OS:</span>
          <span class="w-10/12">WINDOWS 10 NT</span>
        </div>
        <div class="flex mt-4">
          <span class="w-2/12 font-bold text-gray-700">LICENCE:</span>
          <span class="w-10/12 text-green-700">Activated</span>
        </div>
        <div class="flex mt-4">
          <span class="w-2/12 font-bold text-gray-700 uppercase"
            >Latest update:</span
          >
          <span class="w-10/12">N/A</span>
        </div>
        <button
          class="mt-4 py-4 px-8 shadow bg-green-500 font-bold text-white"
          @click="checkupdate"
        >
          Check for updates
        </button>
      </div>

      <div class="py-8 w-full px-16">
        <p class="text-center text-3xl font-bold">Our Team</p>
        <div class="mt-8 flex">
          <div class="w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div
                class="mx-auto w-32 h-32 bg-gray-500 rounded-full overflow-hidden bg-cover bg-center"
                style="background-image: url('https://github.com/Emileking.png')"
              ></div>
              <p class="text-center mt-2 font-bold text-gray-700">
                Backend Developper
              </p>
              <p class="text-center mt-2 font-bold">Émile Djida</p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 6947 6477 3
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a
                  href="https://t.me/EmileDG"
                  class="w-8 h-8 rounded-full  bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram"
                  target="blank"
                ></a>
                <a
                  href="https://github.com/Emileking"
                  class="w-8 h-8 rounded-full  bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git"
                  target="blank"
                ></a>
              </div>
            </div>
          </div>
          <div class="w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div
                class="mx-auto w-32 h-32 bg-gray-500 rounded-full overflow-hidden bg-cover bg-center"
                style="background-image: url('https://github.com/yvesjordan06.png')"
              ></div>
              <p class="text-center mt-2 font-bold text-gray-700">
                Frontend Developper
              </p>
              <p class="text-center mt-2 font-bold">Jordan Nguejip</p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 694842185
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a
                  href="https://t.me/hirohamada4"
                  class=" rounded-full w-8 h-8 bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram"
                  target="blank"
                ></a>
                <a
                  href="https://github.com/yvesjordan06"
                  class=" rounded-full w-8 h-8 bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git"
                  target="blank"
                ></a>
              </div>
            </div>
          </div>
          <div class="w-1/3 px-4 contact-card">
            <div class="shadow-lg py-4 rounded-lg w-full">
              <div
                class="mx-auto w-32 h-32 bg-gray-500 rounded-full overflow-hidden bg-cover bg-center"
                style="background-image: url('https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/27617/1498857223-8014-9485/daova_large.jpeg')"
              ></div>
              <p class="text-center mt-2 font-bold text-gray-700">
                General Supervisor
              </p>
              <p class="text-center mt-2 font-bold">Pierre Titcheu</p>
              <p class="text-center mt-2 text-gray-600 text-sm">
                +237 6729 2673 4
              </p>
              <p class="text-center mt-1 text-gray-600 text-sm">
                Cameroon, Yaoundé
              </p>
              <div class="flex mt-4 px-4 justify-center justify-around">
                <a
                  href="https://t.me/TYPW01"
                  class="w-8 h-8 rounded-full  bg-blue-500 text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-telegram"
                  target="blank"
                ></a>
                <!-- <a
                  href="#"
                  class="w-8 h-8 rounded-full  bg-black text-white overflow-hidden flex justify-center items-center text-2xl mdi mdi-git"
                  target="blank"
                ></a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'medica',
  methods: {
    hidden() {
      alertify.alert('Easter Egg', 'Easter egg found! Be careful', () =>
        this.$router.push('/medica/about/generator')
      )
    },
    checkupdate() {
      alertify.message('You are on the latest version')
    }
  }
}
</script>

<style scoped>
.contact-card {
  transition: all linear 0.5s;
}
.contact-card:hover {
  @apply shadow-2xl p-0;
}
</style>
