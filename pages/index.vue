<template>
  <div>
    <div
      class=" relative bg-white p-16 flex flex-col text-5xl font-bold bg-cover overlay bg-right-top"
      style="background-image:url('/images/undraw_reviewed_docs_neeb.svg')"
    >
      <p class="font-sans tracking-wide">
        Welcome Back <span class="text-green-500">!</span>
      </p>
      <p class="text-4xl font-sans tracking-wide text-gray-800 mt-2 ">
        Today there have been
        <span class="text-green-500">{{ todayInvoices.length }}</span>
        Invoices
      </p>
      <p class="text-3xl font-sans tracking-wide text-gray-600 mt-2 ">
        and
        <span class="text-green-500">{{ todayBatches.length }}</span>
        Distributions today
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
          class="border px-8 mx-2 hover:text-white text-center hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Invoices
        </nuxt-link>
        <nuxt-link
          to="/medica/batch"
          class="border px-8 mx-2 hover:text-white text-center hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
        >
          Batches
        </nuxt-link>
        <nuxt-link
          to="/medica/regions"
          class="border px-8 mx-2 hover:text-white text-center hover:bg-green-500 py-1 rounded border-green-300 flex-grow text-green-700"
          >National Distribution</nuxt-link
        >
      </div>
    </div>

    <div class="p-8 py-16">
      <p class="text-3xl font-bold">Here are some stats</p>
      <div class="flex w-full">
        <div class="w-1/2 px-1">
          <DateRangeStats
            type="bar"
            :label="[]"
            start_date="2010-1-1"
            legend="Invoices Created"
            bar_color="#3af11c"
            chart_unit="month"
            :datasets="invoices"
            date_key="created_on"
            class="text-xs bg-white rounded-lg shadow-lg"
          ></DateRangeStats>
        </div>
        <div class="w-1/2 px-1">

          <DateRangeStats
            type="bar"
            :label="[]"
            start_date="2010-1-1"
            legend="Invoices Created"
            bar_color="#3af11c"
            chart_unit="month"
            :datasets="invoices"
            date_key="created_on"
            class="text-xs bg-white rounded-lg h-full shadow-lg"
          ></DateRangeStats>
        </div>
      </div>
      <div class="w-full  flex mt-4">
        <div class="px-1">
          <DataChart
            class="bg-white rounded-lg shadow-lg"
            legend="Distribution"
            :label="regions.map((x) => x.name.toUpperCase())"
            :label_ids="regions.map((x) => x.code)"
            :bar_colors="regions.map((x) => x.color)"
            label_key="region"
            date_key="distribution_date"
            start_date="2010-1-1"
            type="horizontalBar"
            :datasets="distributions"
          ></DataChart>
        </div>
        <div class="px-1 w-1/2">
          <DataChart
            class="bg-white rounded-lg shadow-lg"
            legend="Distribution"
            :label="regions.map((x) => x.name.toUpperCase())"
            :label_ids="regions.map((x) => x.code)"
            :bar_colors="regions.map((x) => x.color)"
            label_key="region"
            date_key="distribution_date"
            start_date="2010-1-1"
            type="pie"
            :datasets="distributions"
          ></DataChart>
        </div>
      </div>
    </div>
    <div class="mt-8">
    <p class="text-3xl font-bold px-8">Today's Activities</p>


      <p class="text-gray-600 font-bold mt-8" id="invoices">Today's Invoices</p>
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
      ]"
        :data="todayInvoices"
        @add-click="addInvoice"
      />

      <p class="text-gray-600 font-bold mt-8" id="dist">Today's Distribution</p>
      <InvoiceTable
        :no_add="true"
        :no_delete="true"
        :column="[
        {name:'region', json:'region_full'},
        {name:'Invoice N°', json:'invoice_no'},
        {name:'Batch N°', json:'batch_no'},
      ]"
        :data="distributions"
        data_url="/medica/regions/"
        data_id="region"
      />

      <p class="text-gray-600 font-bold mt-8" id="batch">Today's Batches</p>
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
        :data="batches"
        @add-click="addInvoice"
      />
    </div>
  </div>
</template>

<script>
import InvoiceTable from '../components/InvoiceTable.vue'
import { formatDate } from '../store/invoice'
import DateRangeStats from '../components/DateRangeStats'
import DataChart from '../components/DataChart'

export default {
  layout: 'medica',
  components: {
    DataChart,
    DateRangeStats,
    InvoiceTable
  },
  data() {
    return {}
  },
  computed: {
    invoices() {
      return this.$store.state.invoice.invoices
    },
    todayInvoices() {
      return this.invoices.filter(
        (t) => formatDate(new Date(t.created_on)) === formatDate(new Date())
      )
    },
    batches() {
      return this.$store.getters['invoice/allBatches']
    },
    todayBatches() {
      return this.batches.filter(
        (t) =>
          formatDate(new Date(t.distribution_date)) === formatDate(new Date())
      )
    },
    regions() {
      return this.$store.state.invoice.regions.slice(1)
    },
    distributions() {
      return this.$store.getters['invoice/getDistributions']
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
