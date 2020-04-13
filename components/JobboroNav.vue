<template>
  <div class="flex w-full item-center ">
    <nuxt-link to="/jobboro" class="relative">
      <img
        src="~/assets/jobboro_logo.png"
        class="w-32 h-10 object-cover"
        alt="Jobboro logo"
      />

    </nuxt-link>

    <div class="flex-grow flex justify-end items-center text-sm font-thin">
      <nuxt-link to="#" class="ml-8">Pourquoi Jobboro ?</nuxt-link>
      <nuxt-link to="/jobboro/job-browser" class="ml-8">Jobs Browser</nuxt-link>
      <nuxt-link to="#" class="ml-8"
        >Trouvez des candidats</nuxt-link
      >
      <nuxt-link to="/jobboro/jobs" class="ml-8">Annonces d'emploie</nuxt-link>
      <nuxt-link to="#" class="ml-8 hidden">S'inscrire</nuxt-link>
      <nuxt-link to="#" class="ml-8 hidden">Se Connecter</nuxt-link>
      <nuxt-link
        to="#"
        class="ml-8 uppercase text-white bg-indigo-700 rounded-full px-4 py-2 font-medium hidden"
        >JE SUIS RECRUTEUR</nuxt-link
      >
    </div>
    <div class="relative">
      <div id="user-profile" class="flex items-center cursor-pointer">
        <span
          class="ml-12 border-2 w-10 h-10 rounded-full mdi mdi-account-outline text-2xl flex border-gray-600 text-gray-600 items-center justify-center"
        ></span>
        <p class="ml-2 text-gray-800 text-sm font-bold">Antoine U. MAGA</p>
      </div>
      <div id="user-menu" class="absolute text-gray-700    pt-4 hidden  w-full">
        <nuxt-link
          to="#"
          class="py-4 block border-b bg-white text-center hover:bg-gray-200 px-8 "
          >Mon Profil</nuxt-link
        >
        <nuxt-link
          to="#"
          class="py-4 block border-b bg-white text-center hover:bg-gray-200 px-8 "
          >Tableau de bord</nuxt-link
        >
        <nuxt-link
          to="#"
          class="py-4 block border-b bg-white text-center hover:bg-gray-200 px-8 "
          >Mes paramétres</nuxt-link
        >
        <nuxt-link
          to="#"
          class="py-4 block border-b bg-white text-center hover:bg-gray-200 px-8 "
          >Se déconnecter</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroNav'
}
</script>

<style scoped>
#user-profile:hover ~ #user-menu {
  display: block;
}
#user-menu:hover {
  display: block;
}

.nuxt-link-active {
  @apply text-jobhover font-bold;
}
</style>
