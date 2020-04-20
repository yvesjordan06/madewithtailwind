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
          Pas de compte sur Jobboro ?
          <nuxt-link to="/jobboro/register">S'inscrire ici</nuxt-link>
        </p>
        <div class="my-24">
          <p v-if="recruteur" class="text-black text-2xl font-black">
            Connectez vous
          </p>
          <p v-else class="text-black text-2xl font-black">Connecte toi</p>
          <p v-if="recruteur" class="mt-4">
            Et poster vos offre d'emploie !
          </p>
          <p v-else class="mt-4">
            Et fait décoller ta carrière professionnelle !
          </p>

          <form class="mt-8 flex flex-col" @submit.prevent="login">
            <div>
              <label for="username" class="text-sm">{{
                recruteur ? 'Email' : 'Numero de telephone'
              }}</label>
              <input
                v-model="username"
                type="text"
                class="w-full py-2 mt-2 px-2"
              />
              <p class="text-red-700 mt-1 hidden text-sm">
                {{ recruteur ? 'Email' : 'Numero de telephone' }} est necessaire
              </p>
            </div>

            <div class="mt-4">
              <label for="password" class="text-sm">Mot de passe</label>
              <input
                v-model="password"
                type="password"
                class="w-full py-2 mt-2 px-2"
              />
              <p class="text-red-700 mt-1 hidden text-sm">
                mot de passe est necessaire
              </p>
            </div>

            <div class="mt-4 flex items-center">
              <input id="remember" type="checkbox" name="remember" />
              <label for="remember" class="pl-2">Se souvenir de moi</label>
            </div>

            <button
              class="mt-4 bg-jobprimary py-2 rounded-full  text-white font-bold"
              @click="login"
            >
              {{ working ? 'Patientez svp' : 'Se connecter' }}
            </button>

            <p class="text-red-700 mt-2  text-sm">
              {{ loginError }}
            </p>
          </form>

          <div class="mt-8 flex flex-col">
            <p>Ou connecte{{ recruteur ? 'z vous' : ' toi' }} avec</p>

            <button
              v-if="!recruteur"
              class="mt-8 bg-blue-800 py-2 rounded-full  text-white font-bold"
            >
              Se connecter avec Facebook
            </button>
            <button
              class="mt-2 bg-blue-500 py-2 rounded-full  text-white font-bold"
            >
              Se connecter avec LinkdIn
            </button>
            <button
              class="mt-2 bg-red-700 py-2 rounded-full  text-white font-bold"
            >
              Se connecter avec Google
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
import { Invoice } from '../../../store/invoice'
export default {
  name: 'Index',
  data() {
    return {
      recruteur: false,
      loginError: '',
      working: false,
      username: '',
      password: '',
      sampleUser: [
        {
          name: 'Antoine Ulrich M.',
          username: '123456789',
          password: '123456',
          entreprise: false
        },
        {
          name: 'Institut Inter. A.',
          username: 'iia@example.com',
          password: '123456',
          entreprise: true
        }
      ]
    }
  },
  methods: {
    login() {
      if (this.working) {
        return
      }
      this.working = true
      this.loginError = ''
      const self = this
      setTimeout(function() {
        const user = self.sampleUser.find(
          (x) => x.username === self.username && x.password === self.password
        )
        if (user) {
          self.$store.commit('invoice/jobboroLogin', user)
          self.$router.push('/jobboro')
        } else {
          self.loginError = 'Incorrect username or password'
        }
        self.working = false
      }, 3000)
    }
  }
}
</script>

<style scoped></style>
