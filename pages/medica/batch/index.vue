<template>
  <div class="flex flex-col">
    <p class="text-4xl font-bold text-gray-800 self-center">All Batches</p>

    <DateRangeStats
      type="bar"
      :label="['Hiro', 'Leandra']"
      :start="start"
      date_key="distribution_date"
      :datasets="data.filter(t=>!!t.distribution_date)"
      legend="Batch distribution"
    ></DateRangeStats>
    <InvoiceTable
      class="mb-16"
      data_url="/medica/batch/"
      data_id="batch_no"
      no_add="true"
      :column="[
        { name: 'Batch N°', json: 'batch_no' },
        { name: 'description' },
        { name: 'Qty', json: 'quantity' },
        { name: 'Ships', json: 'num_of_ships' },
        { name: 'total' },
        { name: 'region', json:'region_full' },
        { name: 'Mfg Date', json: 'mfg_date' },
        { name: 'Exp Date', json: 'exp_date' },
        { name: 'Invoice N°', json: 'invoice_no' },
        { name: 'status'},
      ]"
      :data="data"
      @add-click="addInvoice"
    />
  </div>
</template>

<script>
import InvoiceTable from '../../../components/InvoiceTable'
import DateRangeStats from '../../../components/DateRangeStats'

export default {
  layout: 'medica',
  components: {
    DateRangeStats,
    InvoiceTable
  },
  data() {
    return {
      start: ''
    }
  },
  computed: {
    data() {
      return this.$store.getters['invoice/allBatches']
    }
  },
  methods: {
    addInvoice() {
      this.$router.push({
        path: '/medica/batch/new'
      })
    }
  }
}
</script>

<style></style>
