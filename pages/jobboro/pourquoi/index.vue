<template>
  <div>
    <!-- SECTION 1 -->
    <div class="bg-jobbg">
      <div class="screen-size py-16 ">
        <div class="md:w-1/2">
          <p class="title">
            Nous voulons rendre le monde de l'emploi accessible aux jeunes
            africains grâce au numériques
          </p>
          <p class="text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            architecto inventore mollitia odit repellat, veritatis.
          </p>
        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="bg-white">
      <div class="screen-size py-16">
        <h1 class="text-center subtitle uppercase">
          Pourquoi utiliser jobboro ?
        </h1>
        <div class="flex mt-16 items-center">
          <div class="w-1/2">
            <img src="~/assets/images/illustration2.png" alt="Illustration" />
          </div>
          <div class="w-1/2">
            <div class="w-3/4 ml-auto">
              <p class="text-xl text-jobprimary font-bold">
                70% des jeunes de 18 à 35 ans au Cameroun font face au manque
                d'emploie
              </p>
              <p class="mt-4 text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                fuga hic labore libero nobis officiis quasi sit soluta unde vel!
              </p>
            </div>
          </div>
        </div>

        <div class="flex mt-16 items-center">
          <div class="w-1/2">
            <div class="w-3/4 mr-auto">
              <p class="text-xl text-jobprimary font-bold">
                Le facteur principal du chômage des jeunes est le manque
                d'experience professionnelle
              </p>
              <p class="mt-4 text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                fuga hic labore libero nobis officiis quasi sit soluta unde vel!
              </p>
            </div>
          </div>
          <div class="w-1/2">
            <img src="~/assets/images/illustration1.png" alt="Illustration" />
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="bg-jobbg">
      <div class="screen-size py-16">
        <p class="subtitle uppercase text-center">NOS OBJECTIFS AVEC JOBBORO</p>
        <div class="mt-8 md:flex">
          <div
            class="md:w-1/3 border mt-4 px-4 md:mt-0 flex flex-col items-center"
          >
            <div
              class="w-48 h-48 bg-white rounded-full flex justify-center items-center overflow-hidden"
            >
              ICONE
            </div>
            <p class="mt-8 text text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
              eaque error quas quia tenetur?
            </p>
          </div>
          <div
            class="md:w-1/3 border mt-4 px-4 md:mt-0 flex flex-col items-center"
          >
            <div
              class="w-48 h-48 bg-white rounded-full flex justify-center items-center overflow-hidden"
            >
              ICONE
            </div>
            <p class="mt-8 text text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloribus dolorum eligendi et magnam quibusdam.
            </p>
          </div>
          <div
            class="md:w-1/3 border mt-4 px-4 md:mt-0 flex flex-col items-center"
          >
            <div
              class="w-48 h-48 bg-white rounded-full flex justify-center items-center overflow-hidden"
            >
              ICONE
            </div>
            <p class="mt-8 text text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              officiis porro quam totam velit veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 4 -->
    <div class="bg-white">
      <div class="screen-size py-16">
        <div class="flex">
          <div class="w-1/2 flex flex-col items-center">
            <p class="subtitle uppercase">ÊTES-VOUS UN CHERCHEUR DE JOB ?</p>
            <p class="text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              ea?
            </p>
            <JobboroButton label="TROUVEZ UN EMPLOIEÉ " class="mt-8 text-center"></JobboroButton>
          </div>
          <div class="w-1/2 flex flex-col items-center">
            <p class="subtitle uppercase">ÊTES-VOUS UN CHERCHEUR DE JOB ?</p>
            <p class="text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              qui!
            </p>
            <JobboroButton label="TROUVEZ UN EMPLOIE" class="mt-8 text-center"></JobboroButton>
          </div>
        </div>
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
