<template>
  <form class="p-4 flex flex-col" @keypress.enter.prevent="">
    <p class="text-4xl font-bold text-gray-800 self-center">New Invoice</p>

    <div class="flex flex-col w-5/6 mx-auto shadow-lg mt-4 bg-white px-4 pb-4">
      <p class="text-2xl text-medium border-b p-2 py-4">Invoice Information</p>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="delivery" class="w-2/12 uppercase">Place of Delivery</label>
        <input
          id="delivery"
          v-model="invoice.delivery"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="delivery"
          placeholder="Place of Delivery"
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="exporter" class="w-2/12 uppercase">Exporter</label>
        <input
          id="exporter"
          v-model="invoice.exporter"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="exporter"
          placeholder="Exporter"
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="stockage" class="w-2/12 uppercase">Stockage</label>
        <input
          id="stockage"
          v-model="invoice.stockage"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="stockage"
          placeholder="Stockage"
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="vessel" class="w-2/12 uppercase">Vessel</label>
        <input
          id="vessel"
          v-model="invoice.vessel"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="vessel"
          placeholder="Vessel"
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="date" class="w-2/12 uppercase">Invoice Date</label>
        <input
          id="date"
          v-model="invoice.invoice_date"
          class="w-full border rounded p-2 ml-8"
          type="date"
          name="date"
          placeholder="Invoice Date (date de facture) "
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="date" class="w-2/12 uppercase">Invoice Number</label>
        <input
          id="invoice_number"
          v-model="invoice.invoice_no"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="invoice_number"
          placeholder="Invoice Number (numero de facture) "
        />
      </div>
    </div>

    <div class="flex flex-col w-5/6 mx-auto shadow-lg mt-4 bg-white px-4 pb-4">
      <p class="text-2xl text-medium  px-2 mt-4">Batch</p>
      <NewBatch
        v-for="(batch, index) in batches"
        :key="index"
        v-model="batches[index]"
        class="mt-2"
        :is_new="true"
        @close="batches = batches.filter((b, i) => i !== index)"
      />

      <div class="mt-8 w-full flex justify-end">
        <button
          class="px-8 py-2 rounded-lg border border-green-500 text-green-500 bg-white"
          type="button"
          @click="addBatch"
        >
          Add New Batch
        </button>
      </div>
    </div>

    <div class="flex mt-4 justify-end">
      <button
        class="px-8 py-2 border rounded-lg bg-green-500 text-white"
        :disabled="sending"
        @click.prevent="fetchSomething"
      >
        {{ sending ? 'Saving ...' : 'Save' }}
        <span v-if="!sending" class="mdi mdi-cloud-upload"></span>
      </button>
      <button
        type="reset"
        class="px-8 py-2 border rounded-lg bg-green-500 text-white mx-4"
        :disabled="sending"
      >
        Reset <span class="mdi mdi-restore"></span>
      </button>
      <button
        class="px-8 py-2 border rounded-lg bg-green-500 text-white"
        :disabled="sending"
        @click.prevent="$router.back()"
      >
        Close <span class="mdi mdi-cancel"></span>
      </button>
    </div>
  </form>
</template>

<script>
import NewBatch from '../../../components/NewBatch'
import { convertToDate, Invoice } from '../../../store/invoice'
export default {
  name: 'New',
  components: { NewBatch },
  layout: 'medica',
  data() {
    return {
      sending: false,
      invoice: {
        delivery: '',
        exporter: '',
        stockage: '',
        vessel: '',
        invoice_date: '2020-04-01',
        delivery: '',
        exporter: '',
        stockage: '',
        vessel: '',
        invoice_no: ''
      },
      batches: []
    }
  },
  computed: {
    get_total() {
      return this.invoice.ship * this.invoice.pack
    },
    host() {
      return this.$store.state.invoice.host
    }
  },
  mounted() {
    this.addBatch()
  },
  methods: {
    async fetchSomething() {
      this.sending = true
      try {
        let batch
        for (batch of this.batches) {
          console.log(batch.mfg_date)
          batch.mfg_date = convertToDate(batch.mfg_date)
          batch.exp_date = convertToDate(batch.exp_date)
        }
        const ip = await this.$axios.$post(`${this.host}/add/invoice`, {
          invoice_data: {
            ...this.invoice,
            invoice_date: convertToDate(this.invoice.invoice_date)
          },
          batches: this.batches
        })
        this.ip = ip
        this.$store.commit(
          'invoice/add',
          new Invoice({
            ...this.invoice,
            batches: this.batches
          })
        )
        alert('Added Successfully')
        console.log(ip)
      } catch (e) {
        console.log(e)
        alert(`${e.message} occurred`)
      } finally {
        this.sending = false

      }
    },
    addBatch() {
      this.batches.push({
        description: '',
        batch_no: '',
        quantity: 0,
        num_of_ships: 0,
        mfg_date: '2020-11-11',
        exp_date: '2021-11-11'
      })
    }
  }
}
</script>

<style scoped></style>
