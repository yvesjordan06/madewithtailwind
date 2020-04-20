<template>
  <div>
    <!-- SECTION 1 -->
    <div class="bg-jobbg py-16">
      <div class=" screen-size flex items-center">
        <div class="w-5/12">
          <img src="~/assets/images/illustration1.png" alt="Illustration" />
        </div>
        <div class="w-7/12 pl-4">
          <p class="title uppercase">
            SUR JOBBORO DES CENTAINES DE JEUNES SONT PRÊTS A TRAVAILLER CHEZ
            VOUS
          </p>
          <p class="mt-8 text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            dolor doloribus est eveniet excepturi nostrum, odit quasi
            reprehenderit temporibus totam?
          </p>
          <div class="flex items-center mt-8 text-xl leading-tight">
            <span class="text-3xl mdi mdi-play-circle text-jobprimary"></span>
            <p class="ml-2 border-b border-jobnull text-jobnull">
              Notre concept en video
            </p>
          </div>
          <div class="mt-2">
            <JobboroButton label="RECRUTEZ MAINTENANT"  :large="false"></JobboroButton>

          </div>

        </div>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="bg-white py-16">
      <div class="screen-size">
        <h1 class="title text-center uppercase">comment ca marche ?</h1>
        <div class="flex mt-8">
          <div class="w-1/4">
            <div class="w-11/12 flex flex-col items-center mx-auto">
              <div
                class="border border-black rounded-full w-24 h-24 overflow-hidden text-2xl font-black flex items-center justify-center"
              >
                ICON
              </div>
              <p class="text-lg font-bold text-jobtitle mt-4 uppercase">
                Postez un job
              </p>
              <p class="mt-8 text text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                cupiditate dignissimos id non perferendis placeat quae quibusdam
                rem sunt tenetur!
              </p>
            </div>
          </div>
          <div class="w-1/4">
            <div class="w-11/12 flex flex-col items-center mx-auto">
              <div
                class="border border-black rounded-full w-24 h-24 overflow-hidden text-2xl font-black flex items-center justify-center"
              >
                ICON
              </div>
              <p class="text-lg font-bold text-jobtitle mt-4 uppercase">
                Trouvez des candidats
              </p>
              <p class="mt-8 text text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                magni possimus quaerat! Cupiditate libero modi nemo vitae. Ad,
                culpa officiis?
              </p>
            </div>
          </div>
          <div class="w-1/4">
            <div class="w-11/12 flex flex-col items-center mx-auto">
              <div
                class="border border-black rounded-full w-24 h-24 overflow-hidden text-2xl font-black flex items-center justify-center"
              >
                ICON
              </div>
              <p class="text-lg font-bold text-jobtitle mt-4 uppercase">
                choisissez un profil
              </p>
              <p class="mt-8 text text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid aut consequuntur eum ex iusto, quam quia sapiente sit
                sunt unde.
              </p>
            </div>
          </div>
          <div class="w-1/4">
            <div class="w-11/12 flex flex-col items-center mx-auto">
              <div
                class="border border-black rounded-full w-24 h-24 overflow-hidden text-2xl font-black flex items-center justify-center"
              >
                ICON
              </div>
              <p class="text-lg font-bold text-jobtitle mt-4 uppercase">
                Obtenez un employé
              </p>
              <p class="mt-8 text text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam deserunt facere fugiat illum iusto pariatur porro sit
                suscipit voluptatibus voluptatum?
              </p>
            </div>
          </div>
        </div>
        <JobboroButton label="COMMENCER MAINTENANT" class="mt-16 text-center"></JobboroButton>
        <div class="flex items-center justify-center mt-2 text-xl leading-tight">
          <span class="text-3xl mdi mdi-play-circle text-jobprimary"></span>
          <p class="ml-2 border-b border-jobnull text-jobnull">
            Notre concept en video
          </p>
        </div>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="bg-jobbg py-16">
      <div class="screen-size flex">
        <div class="w-1/2 ">
          <div class="w-10/12 mr-auto ">
            <p class="text-xl font-bold">
              Postez des annonces d'emploi gratuitement pour recruter les
              meilleurs profils pour votre entreprise.
            </p>
          </div>
        </div>
        <div class="w-1/2">
          <div class="w-11/12 ml-auto ">
            <div class="flex items-center">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">1</span>
              </div>
              <p class="ml-4">
                Lancez votre avis de recrutement en moins de 3 min
              </p>
            </div>
            <div class="flex  mt-4 w-full">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">2</span>
              </div>
              <p class="ml-4">
                Attirez des jeunes et quête d'experience de travail et ou de job
              </p>
            </div>

            <div class="flex items-center mt-4">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">3</span>
              </div>
              <p class="ml-4">
                Recevez des candidatures qui répondent a vos attentes et
                recrutez
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="bg-white py-16">
      <div class="screen-size">
        <p class="title text-center uppercase">
          JOBBORO C'EST L'ALLIE DES ENTREPRISES CONNECTÉES
        </p>
        <p class="mt-8 text-center text">
          Une entreprise est une terre d'acceuil pour les jeunes qui ssouhaitent
          intégrer le monde du travail. Donnez leurs la chance de vivre cette
          expérience au sein de votre entreprise
        </p>
        <JobboroButton
          label="POSTER UN JOB"
         CLASS="text-center mt-8 w-full"
        ></JobboroButton>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="bg-jobbg py-16">
      <div class="screen-size flex">
        <div class="w-1/2">
          <div class="w-11/12 mr-auto ">
            <div class="flex items-center">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">1</span>
              </div>
              <p class="ml-4">
                Parlez-nous des profits que vous recherchez
              </p>
            </div>
            <div class="flex  mt-4 w-full">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">2</span>
              </div>
              <p class="ml-4">
En quelques secondes, Jobboro vous recommande des profits sur mesure
              </p>
            </div>

            <div class="flex items-center mt-4">
              <div
                class="p-8 relative bg-black font-black text-white rounded-full"
              >
                <span class="hiro-center ">3</span>
              </div>
              <p class="ml-4">Sélectionnez, contactez et recrutez les profits qui vous intéressent</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 ">
          <div class="w-10/12 ml-auto ">
            <p class="text-xl font-bold">
             Gagnez du temps grâce à notre algorithme de recherce en ligne afin de détécter les candidats que vous désirez
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="bg-white py-16">
      <div class="screen-size">
        <p class="title text-center uppercase">
          Qu'attendez-vous pour recruter ?
        </p>

        <JobboroButton
          label="RECHERCHEZ DES PROFILS"
          class="text-center mt-8 w-full"
        ></JobboroButton>
      </div>
    </div>
  </div>
</template>

<script>
import JobboroButton from '../../../components/JobboroButton'
export default {
  name: 'Index',
  components: { JobboroButton },
  layout: 'jobboro'
}
</script>

<style scoped></style>
