<template>
  <div>
    <div class="md:flex lg:block md:flex-wrap">
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>

      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
      <div class="py-2 md:w-1/2 lg:w-full md:p-2 lg:p-0">
        <JobboroJobTile
          :no_image="no_image"
          :show_status="show_status"
          :show_border="true"
          class="w-full p-4 border-2 border-gray-600 rounded-lg lg:mt-4 "
        ></JobboroJobTile>
      </div>
    </div>
    <div class="flex justify-center py-2 mt-4 text-sm" v-if="!see_more">
      <nuxt-link to="#" class="mdi mdi-arrow-left"></nuxt-link>
      <nuxt-link to="#" class="ml-4 text-gray-600">1</nuxt-link>
      <nuxt-link to="#" class="ml-4">2</nuxt-link>
      <nuxt-link to="#" class="ml-4">3</nuxt-link>
      <nuxt-link to="#" class="ml-4">4</nuxt-link>
      <nuxt-link to="#" class="ml-4 mdi mdi-arrow-right"></nuxt-link>
    </div>
    <div class="flex justify-center py-2 mt-4 text-sm" v-else>
      <button
        class="px-8 py-2 font-bold text-gray-700 border border-gray-600 rounded-full"
      >
        Voir plus
      </button>
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
