<template>
  <div>
    <div v-if="show_options || show_status" class="flex justify-between mb-2">
      <span v-if="show_status" class="text-indigo-700">En pause</span>
      <button
        v-if="show_options"
        class="text-3xl text-gray-500 mdi mdi-dots-horizontal"
      ></button>
    </div>
    <div class="flex flex-col lg:items-center lg:flex-row">
      <div v-if="!no_image" class="self-stretch mr-8 border lg:w-48">
        <img
          src="~/assets/images/404.svg"
          alt="Job Image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col flex-grow text-gray-700 lg:mt-0">
        <p class="font-bold text-gray-800 subtitle">
          Titre de recrutement, du poste recherché
        </p>
        <p class="mt-4">Nom de l'entreprise qui recrute</p>
        <div class="justify-between w-full mt-4 text-xs lg:flex">
          <p>Type de contrat</p>
          <p>Lieu du job</p>
          <p>Secteur d'activité</p>
          <p>Publié le</p>
        </div>
      </div>
      <div
        v-if="can_apply"
        class="mt-8 lg:flex lg:justify-center lg:ml-32 lg:item-center lg:mt-0"
      >
        <nuxt-link
          to="/jobboro/job-browser/see-job"
          class="block w-full py-2 font-bold text-center text-white bg-jobprimary hover:bg-jobhover rounded-full lg:px-8 lg:w-auto "
          >Voir le job</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroJobTile',
  props: {
    no_image: { type: Boolean, default: false },
    show_status: { type: Boolean, default: false },
    show_options: { type: Boolean, default: false },
    can_apply: { type: Boolean, default: true }
  }
}
</script>

<style scoped></style>
