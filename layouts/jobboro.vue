<template>
  <div class="bg-white  min-h-screen flex flex-col">
    <JobboroNav class="bg-white py-2 px-8 fixed z-50"></JobboroNav>
    <div class="flex-grow mt-16 ">
      <nuxt />
    </div>
    <JobboroFooter class="px-8 py-16 bg-blue-800"></JobboroFooter>
  </div>
</template>

<script>
import JobboroNav from '../components/JobboroNav'
import JobboroFooter from '../components/JobboroFooter'
export default {
  components: {
    JobboroFooter,
    JobboroNav
  },
  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap'
        }
      ]
    }
  }
}
</script>

<style>
.nuxt-progress {
  @apply bg-jobprimary;
}
.title {
  @apply text-3xl font-black leading-tight uppercase text-jobtitle font-title;
}

.subtitle {
  @apply text-xl font-black leading-tight text-jobtitle font-title;
}

  .text {
    @apply text-sm leading-tight
  }
</style>
