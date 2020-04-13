<template>
  <div>
    <div class="flex bg-jobbg py-8">
      <div class="w-1/2 py-16 pl-24">
        <p class="title pr-48">
          Avec Jobboro <br />
          propulse ta carrière<br />
          <span class="whitespace-no-wrap">professionel sans stresser</span>
        </p>
        <p class="text mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          quas sed vero! Exercitationem harum, impedit.
        </p>
        <div class="mt-8 text-xl leading-tight flex items-center">
          <span class="mdi mdi-play-circle text-3xl text-jobprimary"></span>
          <p class="border-b border-jobnull ml-2 text-jobnull">
            Notre concept en video
          </p>
        </div>
        <div class="mt-8">
          <JobboroButton label="JE M'INSCRIS MAINTENANT"  :large="false"></JobboroButton>

        </div>
      </div>
      <div class="w-1/2  self-center pr-24">
        <img src="~/assets/images/illustration1.png" alt="" />
      </div>
    </div>

    <!-- SECTION COMMENT SA MARCHE -->
    <div class="w-full bg-white py-16 px-24 flex flex-col items-center">
      <h2 class="title">
        Comment ça marche
      </h2>

      <!-- ICONS SECTION -->
      <div class="flex mt-16 w-full">
        <div class="flex items-center flex-col px-4 w-1/4 ">
          <div
            class="w-32 flex justify-center items-center h-32 rounded-full border-2 border-gray-700"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Crée ton profil
          </p>
          <p class="text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex items-center flex-col px-4 w-1/4 ">
          <div
            class="w-32 flex justify-center items-center h-32 rounded-full border-2 border-gray-700"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Trouve un emploi
          </p>
          <p class="text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex items-center flex-col px-4 w-1/4 ">
          <div
            class="w-32 flex justify-center items-center h-32 rounded-full border-2 border-gray-700"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Postule pour un job
          </p>
          <p class="text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
        <div class="flex items-center flex-col px-4 w-1/4 ">
          <div
            class="w-32 flex justify-center items-center h-32 rounded-full border-2 border-gray-700"
          >
            <span class="title">ICON</span>
          </div>
          <p
            class="my-4 subtitle"
          >
            Obtient un travail
          </p>
          <p class="text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            illo in magni modi sit volaptium.
          </p>
        </div>
      </div>

    <JobboroButton label="COMMENCER MAINTENANT" class="mt-16"></JobboroButton>
      <div class="mt-8 text-xl leading-tight flex items-center">
        <span class="mdi mdi-play-circle text-3xl text-jobprimary"></span>
        <p class="border-b border-jobnull ml-2 text-jobnull">
          Notre concept en video
        </p>
      </div>
    </div>
    <div class="flex w-full bg-jobbg">
      <div class="w-1/2 py-24 pl-24 ">
        <p class=" font-bold text-jobtitle text-3xl">
          Trouve ton stage ou ton future job avec un recruteur qui cardre avec
          le domaine d'activité qui te ressemble
        </p>
      </div>
      <!-- PRESENTATION DES SECTEUR D'ACTIVITÉ -->
      <div class="w-1/2 pl-24 py-24">
        <p class="text-xl  black">
          Les secteur d'activité qui recrutent
        </p>
        <div class="mt-4 w-3/4 text-white">
          <div class="mt-2 flex">
            <button class="bg-jobnull text-sm rounded-full py-2 flex-grow">
              Marketing
            </button>
            <button class="bg-jobnull text-sm rounded-full py-2 ml-2 flex-grow">
              Développement Informatique
            </button>
          </div>
          <div class="mt-2 flex">
            <button class="bg-jobnull text-sm rounded-full py-2 flex-grow">
              Commercial
            </button>
            <button class="bg-jobnull text-sm rounded-full py-2 ml-2 flex-grow">
              Assurance
            </button>
          </div>
          <div class="mt-2 flex">  </router>
            <button class="bg-jobnull text-sm rounded-full py-2 flex-grow">
              Finance
            </button>
            <button class="bg-jobnull text-sm rounded-full py-2 ml-2 flex-grow">
              Cummunity management
            </button>
          </div>
          <div class="mt-2 flex">
            <button class="bg-jobnull text-sm rounded-full py-2 flex-grow">
              Communications et médias
            </button>
            <button class="bg-jobnull text-sm rounded-full py-2 ml-2 flex-grow">
              Comptabilité
            </button>
          </div>
          <div class="mt-2 flex">
            <button class="bg-jobnull text-sm rounded-full py-2 flex-grow">
              Assistant de direction
            </button>
            <button class="bg-jobnull text-sm rounded-full py-2 ml-2 flex-grow">
              Ingénierie et industrie
            </button>
          </div>
        </div>
        <div class="mt-8"
          ><nuxt-link
            to="#"
            class="text-sm text-jobnull border-jobnull border-b"
            >Découvrir plus de domaines</nuxt-link
          ></div>

      </div>
    </div>
    <div class="bg-white p-32 flex flex-col items-center ">
      <p class="title">
        jobboro c'est pour les jeunes dynamiques
      </p>
      <p class="text text-center my-16">
        Tu es jeune, un étudiant ou un jeune chômeur ayant peu ou pas
        d'experience professionnelle, alors, vient construire ta carrière ici.
      </p>
     <JobboroButton label="TROUVE TOI UN TRAVAIL" ></JobboroButton>
    </div>

    <div class="flex flex-row-reverse py-16 px-24 bg-jobbg">
      <div class="w-1/2 pl-8 flex flex-col justify-start ">
        <p class="title">
          Chez Jobboro, un recruteur est un accélérateur d'experiences pour les jeunes.
        </p>
        <p class="text mt-8">Diffusez gratuitement vos offres d'emploie auprès de notre forte communauté de jeunes talents</p>

        <div class="mt-8">
       <JobboroButton label="EN SAVOIR PLUS"></JobboroButton>
        </div>
      </div>
      <div class="w-1/2 bg-white ">
        <img src="~/assets/images/illustration2.png" alt="" />
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
