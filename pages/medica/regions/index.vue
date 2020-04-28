<template>
  <div class="flex flex-col">
    <div class="flex w-full wrap box-border">
      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Total Distributions</p>
          <p class="text-4xl">{{ total }}</p>
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
          <p class="text-4xl">{{ todayDistribution }}</p>
        </div>
      </div>

      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Distribution this week</p>
          <p class="text-4xl">{{ weekDistribution }}</p>
        </div>
      </div>
      <div class="w-1/4 p-4">
        <div class=" p-2 flex flex-col border-r ">
          <p>Distribution in {{ months(new Date().getMonth()) }}</p>
          <p class="text-4xl">{{ monthDistribution }}</p>
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
          label_key="region_code"
          date_key="created_on"
          :type="chart_type"
          :datasets="chartData"
        ></DataChart>
      </div>
    </div>
    <InvoiceTable
      :no_add="true"
      :no_delete="true"
      :column="[
        { name: 'region code', json: 'code' },
        { name: 'region', json: 'name' },
        { name: 'This Month°', json: 'month' },
        { name: 'This Week', json: 'week' },
        { name: 'Today', json: 'today' }
      ]"
      :data="data"
      data_url="/medica/regions/"
      data_id="code"
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
  computed: {
    regions() {
      return this.$store.state.invoice.regions.slice(1)
    },
    data() {
      const data = this.$store.state.invoice.distributions
      const result = []
      data.forEach((region) => {
        const month = region.distributions.filter((t) =>
          inDateRange(t.created_on, this.lastMonth, this.today)
        )
        const week = month.filter((t) =>
          inDateRange(t.created_on, this.lastWeek, this.today)
        )
        const today = week.filter(
          (t) => formatDate(new Date(t.created_on)) === formatDate(this.today)
        )
        result.push({
          code: region.code,
          name: region.name.toUpperCase(),
          total: region.distributions.length,
          month: month.length,
          week: week.length,
          today: today.length
        })
      })
      return result
    },
    chartData() {
      const data = this.$store.state.invoice.distributions
      const result = []

      data.forEach((regions) => {
        regions.distributions.forEach((x) => {
          result.push(x)
        })
      })

      return result
    },
    todayDistribution() {
      return this.data.map((x) => x.today).length
        ? this.data.map((x) => x.today).reduce((total, add) => total + add)
        : 0
    },
    total() {
      return this.data.map((x) => x.total).length
        ? this.data.map((x) => x.total).reduce((total, add) => total + add)
        : 0
    },
    weekDistribution() {
      return this.data.map((x) => x.week).length
        ? this.data.map((x) => x.week).reduce((total, add) => total + add)
        : 0
    },
    monthDistribution() {
      return this.data.map((x) => x.month).length
        ? this.data.map((x) => x.month).reduce((total, add) => total + add)
        : 0
    }
    /* percentage() {
      return (
        ((this.yesterdayDistribution.length - this.todayDistribution.length) /
          ((this.yesterdayDistribution.length + this.todayDistribution.length) /
            2)) *
        100
      )
    } */
  },
  methods: {
    months(index) {
      return month[index]
    }
  }
}
</script>

<style></style>
