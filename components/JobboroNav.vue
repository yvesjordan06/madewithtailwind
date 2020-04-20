<template>
  <div class="w-full">
    <div class="flex screen-size item-center ">
      <nuxt-link :to="userEntreprise ? '/jobboro/recruteur' : '/jobboro'" class="relative">
        <img
          src="~/assets/jobboro_logo.png"
          class="object-cover w-32 h-10"
          alt="Jobboro logo"
        />
      </nuxt-link>

      <div class="flex items-center justify-end flex-grow text-sm font-thin">
        <nuxt-link to="/jobboro/pourquoi" class="ml-8">Pourquoi Jobboro ?</nuxt-link>
        <nuxt-link v-if="!recruteur && !userEnterprise" to="/jobboro/job-browser" class="ml-8"
          >Jobs Browser</nuxt-link
        >
        <nuxt-link v-if="recruteur || userEnterprise" to="#" class="ml-8"
          >Trouvez des candidats</nuxt-link
        >
        <nuxt-link v-if="recruteur && userEnterprise" to="/jobboro/jobs" class="ml-8"
          >Annonces d'emploie</nuxt-link
        >
        <nuxt-link v-if="!user" to="/jobboro/register" class=" ml-8">S'inscrire</nuxt-link>
        <nuxt-link v-if="!user" to="/jobboro/login" class=" ml-8">Se Connecter</nuxt-link>
        <button
          v-if="!user"
          class="px-4 py-2 ml-8 font-medium text-white uppercase bg-jobprimary rounded-full"
          @click="recruteurMode"
        >
          JE SUIS RECRUTEUR
        </button>
      </div>
      <div v-if="user" class="relative">
        <div id="user-profile" class="flex items-center cursor-pointer">
          <div
            class="p-5 rounded-full ml-12 relative text-2xl text-gray-600 border-2 border-gray-600"
          >
            <span
              class=" hiro-center  rounded-full mdi mdi-account-outline"
            ></span>
          </div>

          <p class="ml-2">{{user.name}}</p>
        </div>
        <div id="user-menu" class="absolute hidden w-full pt-4 text-gray-700">
          <nuxt-link
            to="#"
            class="block px-8 py-4 text-center bg-white border-b hover:bg-gray-200 "
            >Mon Profil</nuxt-link
          >
          <nuxt-link
            to="#"
            class="block px-8 py-4 text-center bg-white border-b hover:bg-gray-200 "
            >Tableau de bord</nuxt-link
          >
          <nuxt-link
            to="#"
            class="block px-8 py-4 text-center bg-white border-b hover:bg-gray-200 "
            >Mes paramétres</nuxt-link
          >
          <button

            class="w-full px-8 py-4 text-center bg-white border-b hover:bg-gray-200 "
            @click="disconnect"
            >Se déconnecter</button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroNav',
  data() {
    return {
      recruteur: false
    }
  },
  computed: {
    user() {
      return this.$store.state.invoice.jobboro.user
    },
    userEnterprise() {
      return this.$store.state.invoice.jobboro.recruteur
    }
  },
  methods: {
    recruteurMode() {
      this.recruteur = true
      this.$router.push('/jobboro/recruteur')
    },
    disconnect() {
      this.$store.commit(
        'invoice/jobboroLogout'
      )
    }
  },

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
