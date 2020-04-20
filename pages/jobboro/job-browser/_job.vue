<template>
  <div>
    <div class="bg-jobbg">
      <div class="flex items-center h-48 screen-size ">
        <span class="text-sm text-gray-600">
          Acceuil > job browser >
          <span class="font-bold">Titre de recrutement du poste rechercé</span>
        </span>
      </div>
    </div>
    <div class="bg-white">
      <div class="relative screen-size">
        <div class="flex mt-8" style="transform: translateY(-3%)">
          <div
            class="w-full p-8 py-16 text-gray-700 bg-white border-2 border-gray-500 rounded-lg shadow-lg"
          >
            <JobboroJobTile :can_apply="false"></JobboroJobTile>

            <p class="mt-16 text-xl font-bold text-black">
              Description du poste
            </p>
            <p class="mt-4">Missions</p>
            <p class="mt-8">
              Nous recherchons un(e) Chef(fe) de projet en marketening digital
              en CDD et dont la mission sera de :
            </p>
            <p class="mt-8">1. Webmarketing</p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
            </p>

            <p class="mt-8">1. Webmarketing</p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
            </p>

            <p class="mt-8">1. Webmarketing</p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
            </p>

            <p class="mt-8">1. Webmarketing</p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
            </p>

            <p class="mt-8">1. Webmarketing</p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
            </p>
            <p class="mt-16 text-2xl font-bold text-black">
              Ce job est fait pour qui ?
            </p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores atque, doloremque doloribus dolorum eaque excepturi
              labore, minima necessitatibus optio pariatur porro reprehenderit
              repudiandae, saepe sequi vel! Ducimus laborum minus provident.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              dolores, ducimus eveniet fuga fugiat iusto molestias natus
              necessitatibus quod recusandae repellat saepe sunt tempore
              temporibus unde voluptas voluptate voluptatum. Nisi. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Assumenda autem
              commodi consequatur consequuntur debitis dignissimos doloremque
              eaque earum et ex fugiat id iste maiores molestias natus nisi,
              numquam, officia quidem ratione, recusandae soluta vel vero
              voluptate? Amet architecto asperiores, aspernatur commodi cum
              dicta dolore doloribus earum eius eveniet explicabo fugit hic id
              illum ipsum molestias mollitia odit optio possimus quis totam
              ullam ut vitae. Accusamus assumenda commodi delectus doloremque
              error est, magnam magni maiores, modi mollitia optio porro
              provident quo reiciendis reprehenderit sapiente soluta unde
              veritatis? Aliquid beatae dolorem, dolorum facere in, ipsa iusto
              natus nisi odit quo, vitae voluptatum?
            </p>

            <p class="mt-16 text-2xl font-bold text-black">
              Ce job est fait pour qui ?
            </p>
            <p class="mt-4 ">
              100,000 FCFA par mois + bonuses
            </p>

            <p class="mt-16 text-2xl font-bold text-black">
              Les bénéfices que tu gagnes?
            </p>
            <p class="mt-4 ">
              Performance Bonus <br />
              Training
            </p>

            <p class="mt-16 text-2xl font-bold text-black">
              Heures de travail
            </p>
            <p class="mt-4 ">
              Lundi - Vendredi: 8h00 à 16:00 <br />
              Samedi : 8h00 à 13h00
            </p>

            <p class="mt-16 text-2xl font-bold text-black">
              Conditions de travail
            </p>
            <p class="mt-4 ">
              Type de contrat: Stage 3 mois <br />
              Debut: Mai 2020<br />
              Lieu: Bastos<br />
              Processus de recrutement: Entretien telephonique puis physique et
              test de redaction<br />
              Postule: CV + Lettre de motivation a l'adresse example@mail.com
            </p>

            <p class="mt-16 text-2xl font-bold text-black">
              A propos de l'entreprise:
              <nuxt-link class="text-blue-500 border-b border-blue-500" to="#"
                >Nom Entreprise</nuxt-link
              >
            </p>
            <p class="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at,
              consequatur eaque earum ex facilis fuga id, minima mollitia nisi
              officia pariatur possimus quae repellat repudiandae rerum sed
              totam voluptas?
            </p>
            <p class="mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur autem consequuntur eaque earum ex ipsum magnam,
              nesciunt nobis obcaecati omnis tenetur vero vitae voluptatum.
              Accusamus cum doloribus tempore! Dolore error, in iste iusto natus
              optio possimus quibusdam sequi? Alias, cumque deleniti dolores eos
              exercitationem itaque molestias pariatur reiciendis temporibus
              voluptatem.
            </p>

            <div class="px-16 py-8 mt-8 text-white bg-blue-800">
              <p class="text-xl text-center">
                CE JOB T'INTERESSE ? DÉPOSE TA CANDIDATURE CHEZ CE RECRUTEUR EN
                MOINS DE 2 MINUTES
              </p>
              <P class="mt-4 text-sm text-center">Candidature simplifiée !</P>

              <div  class="mt-8" style="text-align: center;">
              <JobboroButton label="POSTULER MAINTENANT" CLASS=""></JobboroButton>

              </div>
            </div>
          </div>
          <div
            class="flex flex-col ml-8 overflow-hidden border rounded"
            style="width: 400px"
          >
            <div
              class="p-16 text-2xl font-bold text-center text-white bg-blue-800"
              style="height: 600px"
            >
              Espace publiciatire en vente <br />
              OU<br />
              Espace de sponsoring <br />
              OU<br />
              Zone de communication sur des evenements
            </div>
            <div
              class="p-16 mt-8 text-2xl font-bold text-center text-white bg-gray-800"
              style="height: 600px"
            >
              Espace publiciatire en vente <br />
              OU<br />
              Espace de sponsoring <br />
              OU<br />
              Zone de communication sur des evenements
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobboroJobTile from '../../../components/JobboroJobTile'
import JobboroButton from '../../../components/JobboroButton'
export default {
  name: 'Job',
  components: { JobboroButton, JobboroJobTile },
  layout: 'jobboro'
}
</script>

<style scoped></style>
