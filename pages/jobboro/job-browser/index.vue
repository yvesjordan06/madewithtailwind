<template>
  <div>
    <div class="relative py-24 px-8 text-2xl text-gray-700 w-full bg-blue-100  font-bold">
      <div class="w-1/2 ">
        <p>Salut Antoine !</p>
        <p>Décolle ta carrière en trouvant ton future job ici.</p>
        <p class="mt-8 text-sm text-gray-600 font-normal">
          Utilise les filtres ci-dessous pour affiner ta recherche d'emploie
        </p>
      </div>

      <div
        class="absolute bg-white shadow-lg rounded-lg p-4 flex left-0 right-0 mx-8 justify-around mt-2 text-base border"
        style="bottom: -10%"
      >
        <input
          placeholder="Niveau d'etude"
          class="border px-8 mx-2 text-center  py-2 rounded border-gray-400 flex-grow "
        />
        <input
          placeholder="Type de contrat"
          class="border px-8 mx-2 text-center  py-2 rounded border-gray-400 flex-grow "
        />
        <input
          placeholder="Secteur d'activité"
          class="border px-8 mx-2 text-center  py-2 rounded border-gray-400 flex-grow "
        />
        <input
          placeholder="Lieu de travail"
          class="border px-8 mx-2 text-center  py-2 rounded border-gray-400 flex-grow "
        />
      </div>
    </div>

    <div class="py-16 px-8 bg-white flex-col">
      <!-- Job navigator Intro -->
      <div class="flex items-center">
        <div class="p-4 pr-16 font-bold bg-gray-200 whitespace-no-wrap">
          237 jobs disponibles sur Jobboro.<br />Utilise les filtres pour
          affiner.
        </div>
        <p class="text-3xl text-blue-700 font-bold ml-8 leading-none">
          Navigue sur les opportunités d'emploi au Cameroun qui s'offre à toi
        </p>
      </div>

      <!-- Jobs display -->
      <div class="mt-4">
        <JobboroJobsList></JobboroJobsList>
      </div>
    </div>
  </div>
</template>

<script>
import JobboroJobTile from '../../../components/JobboroJobTile'
import JobboroJobsList from '../../../components/JobboroJobsList'
export default {
  name: 'Index',
  components: { JobboroJobsList, JobboroJobTile },
  layout: 'jobboro'
}
</script>

<style scoped></style>
