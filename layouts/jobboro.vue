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
  }
}
</script>

<style>
.nuxt-progress {
  @apply bg-green-500;
}
</style>
