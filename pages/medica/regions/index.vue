<template>
  <div class="flex flex-col">
    <div class="flex w-full wrap box-border">
      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Total Distributions</p>
          <p class="text-4xl">{{ data.length }}</p>
          <p class="text-sm text-green-500">
            {{
              today.getDate() +
                '/' +
                today.getMonth() +
                1 +
                '/' +
                today.getFullYear()
            }}
          </p>
        </div>
      </div>

      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Distribution Today</p>
          <p class="text-4xl">{{ todayDistribution.length }}</p>
          <p class="text-sm text-red-500">
            {{ percentage }}% from yesterday ({{
              yesterdayDistribution.length
            }}) distributions
          </p>
        </div>
      </div>

      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Distribution this week</p>
          <p class="text-4xl">{{ weekDistribution.length }}</p>


        </div>
      </div><div class="w-1/4 p-4">
      <div class=" p-2 flex flex-col border-r ">
        <p>Distribution in {{months(new Date().getMonth())}}</p>
        <p class="text-4xl">{{ monthDistribution.length }}</p>

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
          { label: 'Doughnut', value: 'doughnut' },
          { label: 'Lines', value: 'line' }
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
        { name: 'region code', json: 'region' },
        { name: 'region', json: 'region_full' },
        { name: 'Invoice N°', json: 'invoice_no' },
        { name: 'Batch N°', json: 'batch_no' },
        { name: 'Date', json: 'distribution_date' }
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
import { formatDate, inDateRange } from '../../../store/invoice'
import { month } from '../../../utilities/functions'
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
    chart_type: 'bar',
    lastMonth: new Date().setMonth(new Date().getMonth() - 1),
    lastWeek: new Date().setDate(new Date().getDate() - 7),
    yesterday: new Date().setDate(new Date().getDate() - 1),
    today: new Date(),
    todayFormatted: formatDate(new Date())
  }),
  methods: {
    months(index) {
      return month[index]
    }
  },
  computed: {
    regions() {
      return this.$store.state.invoice.regions.slice(1)
    },
    data() {
      return this.$store.getters['invoice/getDistributions']
    },
    todayDistribution() {
      return this.data.filter(
        (t) =>
          formatDate(new Date(t.distribution_date)) === formatDate(this.today)
      )
    },
    yesterdayDistribution() {
      return this.data.filter(
        (t) =>
          formatDate(new Date(t.distribution_date)) ===
          formatDate(this.yesterday)
      )
    },
    weekDistribution() {
      return this.data.filter((t) =>
        inDateRange(
          t.distribution_date,
          this.lastWeek,
          this.today
        )
      )
    },
    monthDistribution() {
      return this.data.filter((t) =>
        inDateRange(
          t.distribution_date,
          this.lastMonth,
          this.today
        )
      )
    },
    percentage() {
      return (
        ((this.yesterdayDistribution.length - this.todayDistribution.length) /
          ((this.yesterdayDistribution.length + this.todayDistribution.length) /
            2)) *
        100
      )
    }
  }
}
</script>

<style></style>
