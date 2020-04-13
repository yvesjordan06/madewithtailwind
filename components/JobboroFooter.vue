<template>
  <div>
    <div class="flex text-xs text-white">
      <!-- Footer about  -->
      <div class="w-2/5 flex flex-col  pr-24">
        <p class="text-2xl font-bold text-yellow-500">Jobboro</p>
        <p class="mt-4">
          Notre objectif est de faciliter l'accès au monde du travail aux
          jeunes. Et ceci, peu importe leurs qualification. Avec nous, il y a
          des opportunités pour tout le monde.
        </p>
        <div class="my-4 flex text-2xl">
          <span
            class="mdi mdi-facebook text-blue-900 bg-white w-8 h-8 flex justify-center items-center rounded-full"
          ></span>
          <span
            class="mdi mdi-twitter text-blue-900 bg-white ml-4  w-8 h-8 flex justify-center items-center rounded-full"
          ></span>
          <span
            class="mdi mdi-google text-blue-900 bg-white ml-4 w-8 h-8 flex justify-center items-center rounded-full "
          ></span>
          <span
            class="mdi mdi-instagram text-blue-900 bg-white ml-4 w-8 h-8 flex justify-center items-center rounded-full "
          ></span>
        </div>
      </div>
      <!-- Footer Parcourir  -->
      <div class="w-1/5">
        <p class="text-xl font-bold text-yellow-500">Parcourir Jobboro</p>
        <div class="mt-4 flex flex-col">
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
        <div class="mt-4 flex flex-col">
          <nuxt-link to="#">Inscription entreprise</nuxt-link>
          <nuxt-link to="#" class="mt-2">Connexion entreprise</nuxt-link>
          <nuxt-link to="#" class="mt-2">Postez une annonce</nuxt-link>
        </div>
      </div>
      <!-- Footer Contact  -->
      <div class="w-1/5">
        <p class="text-xl font-bold text-yellow-500">Parcourir Jobboro</p>
        <div class="mt-4 flex flex-col">
          <nuxt-link to="#">Nous contacter</nuxt-link>
          <nuxt-link to="#" class="mt-2">Email: info@jobboro.com</nuxt-link>
          <nuxt-link to="#" class="mt-2">Tel: +237 699 64 97 11</nuxt-link>
          <nuxt-link to="#" class="mt-2">Basé à: Yaoundé, Cameroun</nuxt-link>
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-between text-white">
      <p class="text-xs mt-auto">
        Jobboro 2020 - All rights reserved
      </p>
      <p class="text-xs mt-auto">
        Propulsé par Propelize Digital Serives
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroFooter'
}
</script>

<style scoped></style>
