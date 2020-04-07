<template>
  <div>
    <div
      class=" relative bg-white p-16 flex flex-col text-5xl font-bold bg-cover overlay bg-right-top"
      style="background-image:url('/images/undraw_reviewed_docs_neeb.svg')"
    >
      <p class="font-sans tracking-wide">
        Welcome Back <span class="text-green-500">Hiro!</span>
      </p>
      <p class="text-4xl font-sans tracking-wide text-gray-800 mt-2 ">
        Today there have been <span class="text-green-500">350</span> Entries
        <span class="mdi mdi-emoticon text-green-500"></span>
      </p>
      <p class="mt-4 text-base text-gray-70Close0 font-light">
        So what do you want to see today ?
      </p>
      <div
        class="absolute bg-white shadow-lg rounded-lg p-4 flex justify-around mt-2 right-0 left-0 mx-32 text-base"
        style="bottom: -10%"
      >
        <nuxt-link
          to="/medica/invoice"
          class="border px-8 mx-2 hover:text-white hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Invoices
        </nuxt-link>
        <nuxt-link
          to="/medica/batch"
          class="border px-8 mx-2 hover:text-white hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Batches
        </nuxt-link>
        <button
          class="border px-8 mx-2 hover:text-white hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Buyers
        </button>
        <button
          class="border px-8 mx-2 hover:text-white hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Employee
        </button>
        <nuxt-link
          to="/medica/regions"
          class="border px-8 mx-2 hover:text-white hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
          >National Distribution</nuxt-link
        >
      </div>
    </div>
    <InvoiceTable
      class="mt-16"
      checkable="true"
      data_url="/medica/invoice/"
      data_id="invoice_number"
      :column="[
        { name: 'Invoice Number', json: 'invoice_no' },
        { name: 'exporter' },
        { name: 'stockage' },
        { name: 'vessel' },
        { name: 'delivery' },
        { name: 'Invoice Date', json:'invoice_date' },
        { name: 'description' },
      ]"
      :data="data"
      @add-click="addInvoice"
    />


  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import InvoiceTable from '../../components/InvoiceTable.vue'

export default {
  layout: 'medica',
  components: {
    InvoiceTable
  },
  data() {
    return {}
  },
  computed: {
    data() {
      return this.$store.state.invoice.invoices
    }
  },
  methods: {
    addInvoice() {
      this.$router.push({
        path: '/medica/invoice/new'
      })
    }
  }
}
</script>

<style></style>
