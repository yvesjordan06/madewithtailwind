<template>

  <div class="bg-gray-200  min-h-screen flex flex-col">
    <NavBar1 />
    <div class="flex-grow mb-16">
        <nuxt/>
    </div>
    <div class="w-full hidden fixed py-1 px-4 bottom-0 flex justify-between bg-white text-sm">
      <p class="text-gray-700">Design with <span class="mdi mdi-heart text-red-500"></span> by <a href="https://t.me/hirohamada4" target="blank">Hiro</a> </p>
      <div class="flex">
        <p>Medica Version 1.0</p>
        <button class="mdi mdi-settings ml-4 text-gray-600"></button>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar1 from '../components/NavBar1.vue'
export default {
  components: {
    NavBar1
  }
}
</script>

<style>
.nuxt-progress {
  @apply bg-green-500;
}
</style>
