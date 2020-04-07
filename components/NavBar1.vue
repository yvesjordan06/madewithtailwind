<template>
  <nav class="w-full bg-white py-1 flex  px-4 justify-between">
  <nuxt-link to="/medica" class="relative flex items-center text-base">
    <span class="mdi mdi-medical-bag text-green-500 text-4xl ml-4"></span>
    <span class="font-bold tracking-tight">MEDiCA</span>
    <span class="self-start text-xs font-light uppercase mdi mdi-stethoscope text-green-500"></span>
  </nuxt-link>
  <div class=" flex-grow flex items-center justify-end  w-4/6 mr-auto text-gray-700">


      <nuxt-link to="/medica/invoice" class="ml-4"> <span class="mdi mdi-folder-home-outline"></span> Invoice</nuxt-link>
      <nuxt-link to="/medica/batch" class="ml-4"> <span class="mdi mdi-ferry"></span> Batches</nuxt-link>
      <nuxt-link to="/medica/regions" class="ml-4"> <span class="mdi mdi-map-marker-radius-outline"></span> Regions</nuxt-link>
      <nuxt-link to="/medica/setting" class="ml-4"> <span class="mdi mdi-settings"></span> Settings</nuxt-link>
      <nuxt-link to="/medica/about" class="ml-4"> <span class="mdi mdi-information-outline"></span> About</nuxt-link>
      <nuxt-link to="/medica/help" class="ml-4"> <span class="mdi mdi-help"></span> Help</nuxt-link>




  </div>
</nav>
</template>

<script>
export default {
  name: 'YoutubeNavBar'
}
</script>

<style>
</style>
