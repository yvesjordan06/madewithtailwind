<template>
  <div class="bg-gray-100 w-full h-screen overflow-hidden flex">
    <SideBar :regions="regions" class="overflow-hidden overflow-y-auto" />
    <div class="w-full overflow-hidden overflow-y-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar1 from '../components/NavBar1.vue'
import SideBar from '../components/SideBar.vue'
import { Invoice } from '../store/invoice'
export default {
  components: {
    NavBar1,
    SideBar
  },
  computed: {
    regions() {
      return this.$store.state.invoice.regions
    }
  },
  async beforeCreate() {
    const invoices = await this.$axios.get(
      `https://yvesjordan06.pythonanywhere.com/get/invoices`
    )
    console.log(invoices)
    this.$store.commit('invoice/clear')
    invoices.data.forEach((i) =>
      this.$store.commit('invoice/add', new Invoice(i))
    )
  }
}
</script>

<style></style>
