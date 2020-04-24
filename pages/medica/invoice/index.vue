<template>
  <div class="flex flex-col">
    <div class="flex items-center px-2 justify-between">
      <p class="text-4xl font-bold text-gray-800 self-center">All Invoices</p>
      <nuxt-link to="/medica/invoice/new" class="bg-green-500 text-white font-bold p-2 rounded-lg">Add Invoice</nuxt-link>
    </div>


    <DateRangeStats
      type="bar"
      :label="[]"
      :start="start"
      legend="Invoices Created"
      bar_color="#3af11c"
      :datasets="data"
      date_key="created_on"
    ></DateRangeStats>
    <InvoiceTable
      class="mt-4 mb-16"
      :checkable="false"
      data_url="/medica/invoice/"
      data_id="invoice_no"
      :no_delete="true"
      no_check="true"
      :column="[
        { name: 'Invoice Number', json: 'invoice_no' },
        { name: 'exporter' },
        { name: 'stockage' },
        { name: 'vessel' },
        { name: 'delivery' },
        { name: 'Invoice Date', json: 'invoice_date' },
        { name: 'description' },
        { name: 'added', json:'created_on' }
      ]"
      :data="data"
      @add-click="addInvoice"
    />
  </div>
</template>

<script>
import InvoiceTable from '../../../components/InvoiceTable'
import { Invoice } from '../../../store/invoice'
import DateRangeStats from '../../../components/DateRangeStats'

export default {
  layout: 'medica',
  components: {
    DateRangeStats,
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
