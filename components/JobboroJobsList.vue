<template>
  <div>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      :show_options="show_options"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>
    <JobboroJobTile
      :no_image="no_image"
      :show_status="show_status"
      class="border-2 border-gray-600 rounded-lg p-4 mt-4"
    ></JobboroJobTile>

    <div class="mt-4 flex justify-center py-2 text-sm" v-if="!see_more">
      <nuxt-link to="#" class="mdi mdi-arrow-left"></nuxt-link>
      <nuxt-link to="#" class="ml-4 text-gray-600">1</nuxt-link>
      <nuxt-link to="#" class="ml-4">2</nuxt-link>
      <nuxt-link to="#" class="ml-4">3</nuxt-link>
      <nuxt-link to="#" class="ml-4">4</nuxt-link>
      <nuxt-link to="#" class="mdi mdi-arrow-right ml-4"></nuxt-link>
    </div>
    <div class="mt-4 flex justify-center py-2 text-sm" v-else>
      <button class="rounded-full px-8 py-2 border text-gray-700 font-bold border-gray-600">Voir plus</button>
    </div>
  </div>
</template>

<script>
import JobboroJobTile from './JobboroJobTile'
export default {
  name: 'JobboroJobsList',
  components: { JobboroJobTile },
  props: {
    see_more: { type: Boolean, default: false },
    no_image: { type: Boolean, default: false },
    show_status: { type: Boolean, default: false },
    show_options: { type: Boolean, default: false }
  }
}
</script>

<style scoped></style>
