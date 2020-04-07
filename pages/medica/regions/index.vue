<template>
  <div class="flex flex-col">
    <div class="flex w-full wrap box-border">
      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Total Invoices</p>
          <p class="text-4xl">144</p>
          <p class="text-sm text-green-500">+ 5% from last week</p>
        </div>
      </div>

      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Total Income</p>
          <p class="text-4xl">1,444,000 F</p>
          <p class="text-sm text-red-500">- 5% from last week</p>
        </div>
      </div>

      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Highenst Invoice</p>
          <p class="text-4xl">Littoral</p>
          <p class="text-sm text-gray-500">No change</p>
        </div>
      </div>
      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Total Income</p>
          <p class="text-4xl">1,444,000 F</p>
          <p class="text-sm text-red-500">- 5% from last week</p>
        </div>
      </div>
    </div>

    <div class="w-full bg-white py-2 px-4 flex-grow flex flex-col">
      <p class="text-xl font-medium text-gray-700 py-2 border-b">
        Distribution Overview
      </p>
      <CustomSelect
        v-model="chart_type"
        label="Display as"
        :data="[
          { label: 'Bars', value: 'bar' },
          { label: 'Horizontal Bars', value: 'horizontalBar' },
          { label: 'Pie Chart', value: 'pie' },
          { label: 'Doughnut', value: 'doughnut' }
        ]"
      ></CustomSelect>
      <div class="flex mt-4 w-full">
        <DataChart
          class="w-full"
          :legend="Stat"
          :label="regions.map((x) => x.name.toUpperCase())"
          :label_ids="regions.map((x) => x.code)"
          :bar_colors="regions.map((x) => x.color)"
          label_key="region"
          date_key="distribution_date"
          :type="chart_type"
          :datasets="data"
        ></DataChart>
      </div>
    </div>
    <InvoiceTable
      :no_add="true"
      :no_delete="true"
      :column="[
        {name:'region code', json:'region'},
        {name:'region', json:'region_full'},
        {name:'Invoice N°', json:'invoice_no'},
        {name:'Batch N°', json:'batch_no'},
        {name:'Date', json:'distribution_date'},
      ]"
      :data="data"
      data_url="/medica/regions/"
      data_id="region"
    />
  </div>
</template>

<script>
import InvoiceTable from '../../../components/InvoiceTable.vue'
import Invoice from '../../../components/Invoice.vue'
import DateRangeStats from '../../../components/DateRangeStats'
import DataChart from '../../../components/DataChart'
import Select from '../../../components/Select'
import CustomSelect from '../../../components/CustomSelect'
export default {
  components: {
    CustomSelect,
    Select,
    DataChart,
    DateRangeStats,
    InvoiceTable,
    Invoice
  },
  layout: 'medica',
  asyncData() {
    return new Promise((resolve, reject) => setTimeout(() => resolve('ok'), 5))
  },
  data: () => ({
    chart_type: 'bar'
  }),
  computed: {
    regions() {
      return this.$store.state.invoice.regions.slice(1)
    },
    data() {
      return this.$store.getters['invoice/getDistributions']
    }
  }
}
</script>

<style></style>
