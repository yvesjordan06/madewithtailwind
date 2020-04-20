<template>
<div>
  <div class="bg-blue-100">
    <div class="relative py-32 screen-size ">
      <div
        class="absolute bottom-0 left-0 right-0 flex flex-col items-center py-8 mt-2 text-base bg-white border rounded-lg shadow-lg"
        style="transform: translateY(50%)">
        <p class="text-2xl font-bold text-gray-700">
          Commencez votre recrutement dès maintenant
        </p>
        <p class="mt-2 text-gray-700">
          Publiez votre annonce d'emplie auprès des jeunes
        </p>
        <nuxt-link
          class="px-8 py-2 mt-4 font-bold text-white bg-jobprimary rounded-full"
          to="#"
          >CRÉER UNE OFFRE D'EMPLOI</nuxt-link
        >
      </div>
    </div>
  </div>
    <div class="pt-32 bg-white ">
      <div class="py-8 screen-size">
        <p class="mb-4 font-bold text-center text-gray-700 subtitle">
          Vos annonces d'emploi publiées sur Jobboro
        </p>
        <JobboroJobsList
          :no_image="true"
          :see_more="true"
          class="block w-full"
        ></JobboroJobsList>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import JobboroJobsList from '../../../components/JobboroJobsList'
export default {
  name: 'Index',
  components: { JobboroJobsList },
  layout: 'jobboro'
}
</script>

<style scoped></style>
