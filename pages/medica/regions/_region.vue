<template>
  <div>
    <p class="text-4xl text-center mt-4 uppercase">
      <span class="">{{ region.name }}</span> region
    </p>
    <DateRangeStats
      type="bar"
      :label="[]"
      :start="start"
      date_key="distribution_date"
      :datasets="data"
      :legend="region.name.toUpperCase() +' Batch distribution'"
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

        { name: 'Dist Date', json: 'distribution_date' },
        { name: 'Mfg Date', json: 'mfg_date' },
        { name: 'Exp Date', json: 'exp_date' },
        { name: 'Invoice N°', json: 'invoice_no' }
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
      region: '{}'
    }
  },
  computed: {
    data() {
      const ans = this.$store.getters['invoice/getBatchForRegion'](
        this.$route.params.region
      )
      console.log(ans)
      return ans
    }
  },
  beforeMount() {
    this.region = this.$store.getters['invoice/getRegion'](
      this.$route.params.region
    )
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
