<template>
  <div class="flex min-h-screen flex-col">
    <header class="bg-orange-600 px-8 py-4 text-white flex items-center">
      <nuxt-link to="/unik-juice" class="juice flex-grow text-2xl font-bold"
        >Unik Juice</nuxt-link
      >
      <nuxt-link to="/unik-juice" class=" ml-4 ">Acceuil</nuxt-link>
      <nuxt-link to="/unik-juice" class=" ml-4"> Jus de fruit</nuxt-link>
      <nuxt-link to="/unik-juice" class=" ml-4">A propos</nuxt-link>
    </header>

    <div
      class="flex-grow hero bg-cover bg-center relative px-8 py-16 flex flex-col"
      style="background-image: url('/images/unik-juice.jpg')"
    >
      <div class="overlay"></div>
      <div class="content flex flex-col flex-grow">
        <div class="flex justify-between">
          <p class="juice text-orange-600 text-4xl font-black">Du verger au jus</p>
          <div class="flex text-xl">
          <span
            class="mdi mdi-facebook text-white bg-orange-600 w-6 h-6 flex justify-center items-center rounded-full"
          ></span>
            <span
              class="mdi mdi-twitter text-white bg-orange-600 ml-4  w-6 h-6 flex justify-center items-center rounded-full"
            ></span>
            <span
              class="mdi mdi-google text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "
            ></span>
            <span
              class="mdi mdi-instagram text-white bg-orange-600 ml-4 w-6 h-6 flex justify-center items-center rounded-full "
            ></span>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <button class="bg-orange-600 py-2 juice text-white rounded-full w-40 text-center">Button</button>
          <button class="bg-orange-600 py-2 juice mt-2 text-white rounded-full w-40 text-center">Button</button>

        </div>
        <div class="flex flex-col items-center flex-grow justify-center ">
          <p class="text-orange-600 text-6xl font-black font-sans">WELCOME</p>
          <button style="background-color: rgba(255,255,255,0.5)" class=" py-2 juice mt-4 text-4xl font-bold text-gray-700 rounded-full px-16 ">Commander</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import JobboroButton from '../../components/JobboroButton'
export default {
  name: 'Index',
  components: { JobboroButton },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'
        }
      ]
    }
  }
}
</script>

<style scoped>
.juice {
  font-family: 'Marck Script', cursive;
}
  .overlay {
    background-color: rgba(255,255,255,0.125);
    @apply absolute inset-0 z-0
  }

  .hero .content{
    @apply relative z-10
  }
</style>
