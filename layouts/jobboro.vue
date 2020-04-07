<template>
  <div class="bg-gray-200  min-h-screen flex flex-col">
    <JobboroNav></JobboroNav>
    <div class="flex-grow mb-16">
      <nuxt />
    </div>
    <div
      class="w-full fixed py-1 px-4 bottom-0 flex justify-between bg-white text-sm"
    >
      <p class="text-gray-700">
        Design with <span class="mdi mdi-heart text-red-500"></span> by
        <a href="https://t.me/hirohamada4" target="blank">Hiro</a>
      </p>
      <div class="flex">
        <p>Medica Version 1.0</p>
        <button class="mdi mdi-settings ml-4 text-gray-600"></button>
      </div>
    </div>
  </div>
</template>

<script>
import JobboroNav from '../components/JobboroNav'
export default {
  components: {
    JobboroNav
  }
}
</script>

<style>
.nuxt-progress {
  @apply bg-green-500;
}
</style>
