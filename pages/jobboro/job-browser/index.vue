<template>
  <div>
    <div class="bg-jobbg">
      <div class="relative py-24 text-2xl font-bold text-gray-700 screen-size">
        <div class="w-1/2 title">
          <p>Salut Antoine !</p>
          <p>Décolle ta carrière en trouvant ton future job ici.</p>
          <p class="mt-8 text-sm font-normal text-gray-600">
            Utilise les filtres ci-dessous pour affiner ta recherche d'emploie
          </p>
        </div>

        <div
          class="absolute left-0 right-0 flex justify-around p-4 mt-2 text-base bg-white border rounded-lg shadow-lg"
          style="bottom: -10%"
        >
          <input
            placeholder="Niveau d'etude"
            class="flex-grow py-2 mx-2 text-center border border-gray-400 rounded "
          />
          <input
            placeholder="Type de contrat"
            class="flex-grow py-2 mx-2 text-center border border-gray-400 rounded "
          />
          <input
            placeholder="Secteur d'activité"
            class="flex-grow py-2 mx-2 text-center border border-gray-400 rounded "
          />
          <input
            placeholder="Lieu de travail"
            class="flex-grow py-2 mx-2 text-center border border-gray-400 rounded "
          />
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="flex-col py-16 bg-white screen-size">
        <!-- Job navigator Intro -->
        <div class="flex flex-col md:items-center md:flex-row">
          <div class="p-4 font-bold whitespace-no-wrap bg-gray-200 md:pr-16">
            237 jobs disponibles sur Jobboro.<br />Utilise les filtres pour
            affiner.
          </div>
          <h1 class="ml-8 leading-none title">
            Navigue sur les opportunités d'emploi au Cameroun qui s'offre à toi
          </h1>
        </div>

        <!-- Jobs display -->
        <div class="mt-4">
          <JobboroJobsList></JobboroJobsList>
        </div>
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
