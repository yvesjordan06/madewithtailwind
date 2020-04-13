<template>
  <div class="bg-blue-100">
    <div class="py-32 relative max-w-5xl mx-auto ">
      <div
        class="bottom-0 absolute  bg-white shadow-lg rounded-lg py-8 flex flex-col left-0 right-0 mx-8 items-center mt-2 text-base border"
        style="transform: translateY(50%)"
      >
        <p class="text-gray-700 text-2xl font-bold">Commencez votre recrutement dès maintenant</p>
        <p class="text-gray-700 mt-2">Publiez votre annonce d'emplie auprès des jeunes</p>
        <nuxt-link class="mt-4 px-8 py-2 bg-indigo-700 rounded-lg text-white font-bold" to="#">CRÉER UNE OFFRE D'EMPLOI</nuxt-link>
      </div>
    </div>
    <div class="bg-white pt-32 ">
      <div class="max-w-5xl mx-auto flex flex-col items-center py-8">
        <p class="text-2xl text-gray-700 font-bold">Vos annonces d'emploi publiées sur Jobboro</p>
        <JobboroJobsList :no_image="true" :see_more="true"></JobboroJobsList>
      </div>
    </div>
  </div>
</template>

<script>
import JobboroJobsList from '../../../components/JobboroJobsList'
export default {
  name: 'Index',
  components: { JobboroJobsList },
  layout:'jobboro'
}
</script>

<style scoped></style>
