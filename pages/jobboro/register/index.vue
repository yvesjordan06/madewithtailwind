<template>
  <div class="screen-size my-16">
    <div class="flex">
      <div
        class="w-1/2 p-4  text-white font-black text-2xl"
        :class="{ 'bg-jobprimary': !recruteur, 'bg-jobtitle': recruteur }"
      >
        Jobboro
      </div>
      <div class="w-1/2 p-8 bg-jobbg text-black">
        <p class="text-right">
          Vous avez deja un compte ?
          <nuxt-link to="/jobboro/login">Se connecter ici</nuxt-link>
        </p>
        <div class="my-24">
          <p v-if="recruteur" class="text-black text-2xl font-black">
            Inscrivez vous
          </p>
          <p v-else class="text-black text-2xl font-black">Connecte toi</p>
          <p v-if="recruteur" class="mt-4">
            Et recrutes des jeunes talents près de vous
          </p>
          <p v-else class="mt-4">
            Et postule aux offres d'emploi près de toi
          </p>

          <form class="mt-8 flex flex-col" @submit.prevent="false">
            <div class="">
              <label for="prenom" class="text-sm">{{
                recruteur ? 'Email' : 'Prénom'
                }}</label>
              <input type="text" class="w-full py-2 mt-2" />
              <p class="text-red-700 mt-1 text-sm">
                {{ recruteur ? 'Email' : 'Numero de telephone' }} est necessaire
              </p>
            </div>

            <div class="mt-4">
              <label for="nom" class="text-sm">{{
                recruteur ? 'Email' : 'Nom'
                }}</label>
              <input type="text" class="w-full py-2 mt-2" />
              <p class="text-red-700 mt-1 text-sm">
                {{ recruteur ? 'Email' : 'Numero de telephone' }} est necessaire
              </p>
            </div>

            <div class="mt-4">
              <label for="username" class="text-sm">{{
                recruteur ? 'Email' : 'Numero de telephone'
                }}</label>
              <input type="text" class="w-full py-2 mt-2" />
              <p class="text-red-700 mt-1 text-sm">
                {{ recruteur ? 'Email' : 'Numero de telephone' }} est necessaire
              </p>
            </div>

            <div class="mt-4">
              <label for="password" class="text-sm">Mot de passe</label>
              <input type="password" class="w-full py-2 mt-2" />
              <p class="text-red-700 mt-1 text-sm">
                mot de passe est necessaire
              </p>
            </div>

            <div class="mt-4 flex items-center">
              <input id="remember" type="checkbox" name="remember" />
              <label for="remember" class="pl-2">J'accepte les <a href="#">CGU</a> de Jobboro </label>
            </div>

            <button
              class="mt-4 bg-jobprimary py-2 rounded-full  text-white font-bold"
            >
              S'inscrire
            </button>
          </form>

          <div class="mt-8 flex flex-col">
            <p>Ou inscri{{ recruteur ? 'vez vous' : 's toi' }} avec</p>

            <button
              v-if="!recruteur"
              class="mt-8 bg-blue-800 py-2 rounded-full  text-white font-bold"
            >
              S'inscrire avec Facebook
            </button>
            <button
              class="mt-2 bg-blue-500 py-2 rounded-full  text-white font-bold"
            >
              S'inscrire avec LinkdIn
            </button>
            <button
              class="mt-2 bg-red-700 py-2 rounded-full  text-white font-bold"
            >
              S'inscrire avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="my-8 text-center">
      {{ !recruteur ? 'Vous êtes recruteur' : "Tu es jeune chercheur d'empoi" }}
      ?
      <button @click="recruteur = !recruteur">
        Commence{{ recruteur ? 'z' : '' }} par ici
      </button>
    </p>
  </div>
</template>

<script>
  import Checkbox from '../../../components/Checkbox'
  export default {
    name: 'Index',
    data() {
      return {
        recruteur: false
      }
    },
    methods: {}
  }
</script>

<style scoped></style>
