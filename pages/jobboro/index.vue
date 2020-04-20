<template>
  <div>
    <!-- HERO SECTION -->
    <div class="bg-jobbg">
      <div class="flex py-8 screen-size ">
          <div class="w-1/2 py-16">
        <p class="title">
          Avec Jobboro <br />
          propulse ta carrière<br />
          <span class="whitespace-no-wrap">professionel sans stresser</span>
        </p>
        <p class="mt-8 text ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          quas sed vero! Exercitationem harum, impedit.
        </p>
        <div class="flex items-center mt-8 text-xl leading-tight">
          <span class="text-3xl mdi mdi-play-circle text-jobprimary"></span>
          <p class="ml-2 border-b border-jobnull text-jobnull">
            Notre concept en video
          </p>
        </div>
        <div class="mt-8">
          <JobboroButton label="JE M'INSCRIS MAINTENANT"  :large="false"></JobboroButton>

        </div>
      </div>
      <div class="self-center w-1/2">
        <img src="~/assets/images/illustration1.png" alt="" />
      </div>
      </div>

    </div>

    <!-- SECTION COMMENT SA MARCHE -->
    <div class="bg-white">
    <div class="flex flex-col items-center w-full py-16 screen-size">
      <h2 class="title">
        Comment ça marche
      </h2>

      <!-- ICONS SECTION -->
      <div class="flex w-full mt-16">
        <div class="flex flex-col items-center w-1/4 px-4 ">
          <div
            class="flex items-center justify-center w-32 h-32 border-2 border-gray-700 rounded-full"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Crée ton profil
          </p>
          <p class="text-justify text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex flex-col items-center w-1/4 px-4 ">
          <div
            class="flex items-center justify-center w-32 h-32 border-2 border-gray-700 rounded-full"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Trouve un emploi
          </p>
          <p class="text-justify text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex flex-col items-center w-1/4 px-4 ">
          <div
            class="flex items-center justify-center w-32 h-32 border-2 border-gray-700 rounded-full"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Postule pour un job
          </p>
          <p class="text-justify text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex flex-col items-center w-1/4 px-4 ">
          <div
            class="flex items-center justify-center w-32 h-32 border-2 border-gray-700 rounded-full"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Obtient un travail
          </p>
          <p class="text-justify text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
      </div>

    <JobboroButton label="COMMENCER MAINTENANT" class="mt-16 text-center"></JobboroButton>
      <div class="flex items-center mt-8 text-xl leading-tight">
        <span class="text-3xl mdi mdi-play-circle text-jobprimary"></span>
        <p class="ml-2 border-b border-jobnull text-jobnull">
          Notre concept en video
        </p>
      </div>
    </div>
    </div>

    <!-- THIRD SECTION -->
    <div class="bg-jobbg">
     <div class="flex py-24 screen-size">
      <div class="w-1/2">
        <p class="text-3xl font-bold text-jobtitle">
          Trouve ton stage ou ton future job avec un recruteur qui cardre avec
          le domaine d'activité qui te ressemble
        </p>
      </div>
      <!-- PRESENTATION DES SECTEUR D'ACTIVITÉ -->
      <div class="w-1/2">

        <div class="w-3/4 ml-auto text-white" >
         <p class="text-xl text-black">
          Les secteur d'activité qui recrutent
        </p>
          <div class="flex mt-4">
            <button class="flex-grow py-2 text-sm rounded-full bg-jobnull">
              Marketing
            </button>
            <button class="flex-grow py-2 ml-2 text-sm rounded-full bg-jobnull">
              Développement Informatique
            </button>
          </div>
          <div class="flex mt-2">
            <button class="flex-grow py-2 text-sm rounded-full bg-jobnull">
              Commercial
            </button>
            <button class="flex-grow py-2 ml-2 text-sm rounded-full bg-jobnull">
              Assurance
            </button>
          </div>
          <div class="flex mt-2">  </router>
            <button class="flex-grow py-2 text-sm rounded-full bg-jobnull">
              Finance
            </button>
            <button class="flex-grow py-2 ml-2 text-sm rounded-full bg-jobnull">
              Cummunity management
            </button>
          </div>
          <div class="flex mt-2">
            <button class="flex-grow py-2 text-sm rounded-full bg-jobnull">
              Communications et médias
            </button>
            <button class="flex-grow py-2 ml-2 text-sm rounded-full bg-jobnull">
              Comptabilité
            </button>
          </div>
          <div class="flex mt-2">
            <button class="flex-grow py-2 text-sm rounded-full bg-jobnull">
              Assistant de direction
            </button>
            <button class="flex-grow py-2 ml-2 text-sm rounded-full bg-jobnull">
              Ingénierie et industrie
            </button>
          </div>
          <nuxt-link
            to="#"
            class="inline-block mt-8 text-sm border-b text-jobnull border-jobnull"
            >Découvrir plus de domaines</nuxt-link
          >
        </div>


      </div>
     </div>
    </div>

    <!-- FOURTH SECTION -->
    <div class="bg-white">
<div class="flex flex-col items-center py-32 screen-size ">
      <p class="title">
        jobboro c'est pour les jeunes dynamiques
      </p>
      <p class="my-16 text-center text">
        Tu es jeune, un étudiant ou un jeune chômeur ayant peu ou pas
        d'experience professionnelle, alors, vient construire ta carrière ici.
      </p>
     <JobboroButton label="TROUVE TOI UN TRAVAIL" class="text-center"></JobboroButton>
    </div>
    </div>

    <!-- FIFTH SECTION -->
<div class="bg-jobbg">
    <div class="flex flex-row-reverse py-16 screen-size">
      <div class="flex flex-col justify-start w-1/2 pl-8 ">
        <p class="title">
          Chez Jobboro, un recruteur est un accélérateur d'experiences pour les jeunes.
        </p>
        <p class="mt-8 text">Diffusez gratuitement vos offres d'emploie auprès de notre forte communauté de jeunes talents</p>

        <div class="mt-8">
       <JobboroButton label="EN SAVOIR PLUS"></JobboroButton>
        </div>
      </div>
      <div class="w-1/2 bg-white ">
        <img src="~/assets/images/illustration2.png" alt="" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import JobboroButton from '../../components/JobboroButton'
export default {
  name: 'Index',
  components: { JobboroButton },
  layout: 'jobboro'
}
</script>

<style scoped></style>
