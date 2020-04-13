<template>
  <router>
    <div class="flex justify-between mb-2" v-if="show_options || show_status">
      <span class="text-indigo-700" v-if="show_status">En pause</span>
      <button class="mdi mdi-dots-horizontal text-gray-500 text-3xl" v-if="show_options"></button>
    </div>
  <div class="flex items-center" >
    <div class="self-stretch border w-32 mr-8" v-if="!no_image">
      <img src="~/assets/images/404.svg" alt="Job Image" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col  text-gray-700 flex-grow">
      <p class="text-gray-800 font-bold">Titre de recrutement, du poste recherché</p>
      <p class="mt-2">Nom de l'entreprise qui recrute</p>
      <div class="flex justify-between text-xs w-full mt-2">
        <p>Type de contrat</p>
        <p>Lieu du job</p>
        <p>Secteur d'activité</p>
        <p>Publié le</p>
      </div>
    </div>
    <div class="flex justify-center item-center ml-32" v-if="can_apply">
      <nuxt-link to="/jobboro/job-browser/see-job" class="bg-indigo-700 text-white font-bold py-2 px-16 rounded-lg">Voir le job</nuxt-link>
    </div>
  </div>
  </router>
</template>

<script>
export default {
  name: 'JobboroJobTile',
  props: {
    no_image: { type: Boolean, default: false },
    show_status: { type: Boolean, default: false },
    show_options: { type: Boolean, default: false },
    can_apply: { type: Boolean, default: true }
  },
}
</script>

<style scoped></style>
