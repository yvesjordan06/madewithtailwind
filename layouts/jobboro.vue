<template>
  <div class="flex flex-col min-h-screen bg-white">
    <JobboroNav class="fixed z-50 px-8 py-2 bg-white"></JobboroNav>
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
  @apply text-3xl font-black leading-tight  text-jobtitle font-title;
}

.subtitle {
  @apply text-xl font-black leading-tight text-jobtitle font-title;
}

.text {
  @apply text-sm leading-tight;
}
</style>
