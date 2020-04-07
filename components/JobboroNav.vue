<template>
  <div class="flex w-full item-center px-16 py-2 bg-white">
    <div class="relative flex items-center text-2xl font-bold">
      <nuxt-link to="/jobboro">Jobboro Logo</nuxt-link>
    </div>
    <div class="flex-grow flex justify-end items-center text-sm">
      <nuxt-link to="#" class="ml-8">Pourquoi Jobboro ?</nuxt-link>
      <nuxt-link to="#" class="ml-8">Jobs Browser</nuxt-link>
      <nuxt-link to="#" class="ml-8">S'inscrire</nuxt-link>
      <nuxt-link to="#" class="ml-8">Se Connecter</nuxt-link>
      <nuxt-link to="#" class="ml-8 uppercase text-white bg-orange-600 rounded-full px-4 py-2 font-medium">JE SUIS RECRUTEUR</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobboroNav'
}
</script>

<style scoped></style>
