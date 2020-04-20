<template>
  <div>
    <div class="screen-size">
      <div class="flex text-xs text-white">
        <!-- Footer about  -->
        <div class="flex flex-col w-2/5 pr-24">
          <p class="text-2xl font-bold text-yellow-500">Jobboro</p>
          <p class="mt-4">
            Notre objectif est de faciliter l'accès au monde du travail aux
            jeunes. Et ceci, peu importe leurs qualification. Avec nous, il y a
            des opportunités pour tout le monde.
          </p>
          <div class="flex my-4 text-2xl">
            <span
              class="flex items-center justify-center w-8 h-8 text-blue-900 bg-white rounded-full mdi mdi-facebook"
            ></span>
            <span
              class="flex items-center justify-center w-8 h-8 ml-4 text-blue-900 bg-white rounded-full mdi mdi-twitter"
            ></span>
            <span
              class="flex items-center justify-center w-8 h-8 ml-4 text-blue-900 bg-white rounded-full mdi mdi-google "
            ></span>
            <span
              class="flex items-center justify-center w-8 h-8 ml-4 text-blue-900 bg-white rounded-full mdi mdi-instagram "
            ></span>
          </div>
        </div>
        <!-- Footer Parcourir  -->
        <div class="w-1/5">
          <p class="text-xl font-bold text-yellow-500">Parcourir Jobboro</p>
          <div class="flex flex-col mt-4">
            <nuxt-link to="#">Pourquoi Jobboro ?</nuxt-link>
            <nuxt-link to="#" class="mt-2">Job browser</nuxt-link>
            <nuxt-link to="#" class="mt-2">Job blog</nuxt-link>
            <nuxt-link to="#" class="mt-2">L'équipe</nuxt-link>
            <nuxt-link to="#" class="mt-2">Notre concept en video</nuxt-link>
          </div>
        </div>
        <!-- Footer Recruteur  -->
        <div class="w-1/5">
          <p class="text-xl font-bold text-yellow-500">Pour recruteurs</p>
          <div class="flex flex-col mt-4">
            <nuxt-link to="#">Inscription entreprise</nuxt-link>
            <nuxt-link to="#" class="mt-2">Connexion entreprise</nuxt-link>
            <nuxt-link to="#" class="mt-2">Postez une annonce</nuxt-link>
          </div>
        </div>
        <!-- Footer Contact  -->
        <div class="w-1/5">
          <p class="text-xl font-bold text-yellow-500">Parcourir Jobboro</p>
          <div class="flex flex-col mt-4">
            <nuxt-link to="#">Nous contacter</nuxt-link>
            <nuxt-link to="#" class="mt-2">Email: info@jobboro.com</nuxt-link>
            <nuxt-link to="#" class="mt-2">Tel: +237 699 64 97 11</nuxt-link>
            <nuxt-link to="#" class="mt-2">Basé à: Yaoundé, Cameroun</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8 text-white">
        <p class="mt-auto text-xs">
          Jobboro 2020 - All rights reserved
        </p>
        <p class="mt-auto text-xs">
          Propulsé par Propelize Digital Serives
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroFooter'
}
</script>

<style scoped></style>
