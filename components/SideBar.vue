<template>
  <div
    class="h-full text-sm text-gray-400 font-medium uppercase flex flex-col tracking-wide bg-gray-900 py-4 pr-2 w-56"
  >
    <nuxt-link to="/medica" class="relative flex items-center text-base">
      <span class="mdi mdi-medical-bag text-green-500 text-4xl ml-4"></span>
      <span class="font-bold tracking-tight">MEDiCA</span>
      <span
        class="self-start text-xs font-light uppercase mdi mdi-stethoscope text-green-500"
      ></span>
    </nuxt-link>
    <nuxt-link
      to="/medica/invoice"
      class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"
    >
      <span class="mdi mr-4 mdi-folder-home-outline"></span> Invoice</nuxt-link
    >
    <nuxt-link
      to="/medica/batch"
      class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"
    >
      <span class="mdi mr-4 mdi-ferry"></span> Batches</nuxt-link
    >

    <nuxt-link
      to="/medica/statistics"
      class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"

    >
      <span class="mdi mdi-chart-bar mr-4"></span> STATistiques
    </nuxt-link>

    <div class="flex flex-col">
      <button
        @click="showRegions = !showRegions"
        class="px-2 py-4 border-l-8 flex border-transparent hover:border-green-500 focus:outline-none font-medium uppercase tracking-wide"
      >
        <p class="flex"><span class="mdi mdi-map-marker-radius mr-4"></span> Regions</p>

        <span class="mdi mdi-menu-down ml-auto" v-if="!showRegions"></span>
        <span class="mdi mdi-menu-up ml-auto" v-else></span>
      </button>
      <div
        v-if="showRegions"
        class="text-sm text-gray-400 font-medium uppercase flex flex-col tracking-wide pl-8"
      >
        <nuxt-link
          v-for="region in regions"
          :key="region.code"
          :to="'/medica/regions/' + region.code"
          class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"
          >{{ region.name }}
        </nuxt-link>
      </div>
    </div>
    <nuxt-link
      to="/medica/setting"
      class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"
    >
      <span class="mdi mr-4 mdi-settings"></span> Settings</nuxt-link
    >
    <nuxt-link
      to="/medica/about"
      class="px-2 py-4 border-l-8 border-transparent hover:border-green-500 flex"
    >
      <span class="mdi mr-4 mdi-information-outline"></span> About</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    regions: Array
  },
  data: () => ({
    showRegions: false
  })
}
</script>

<style></style>
