<template>
  <div>
    <p class="text-4xl text-center mt-4 uppercase">
      <span class="">{{ region.name }}</span> region
    </p>
    <DateRangeStats
      type="bar"
      :label="[]"
      :start="start"
      date_key="created_on"
      :datasets="data"
      :legend="region.name.toUpperCase() + ' Batch distribution'"
    ></DateRangeStats>

    <InvoiceTable
      class="mb-16"
      data_url="/medica/batch/"
      data_id="batch_no"
      no_add="true"
      :column="[
        { name: 'Batch N°', json: 'batch_no' },
        { name: 'description' },
        { name: 'Quantity distributed', json: 'quantity' },

        { name: 'Distribution Date', json: 'created_on' }
      ]"
      :data="data"
      @add-click="addInvoice"
    />
  </div>
</template>

<script>
import InvoiceTable from '../../../components/InvoiceTable'
import DateRangeStats from '../../../components/DateRangeStats'
import { formatDate } from '../../../store/invoice'

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
      return ans.map((x) => ({
        ...x,
        created_on: formatDate(x.created_on),
        description: this.$store.getters['invoice/getBatch'](x.batch_no)
          .description
      }))
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
