<template>
  <form class="p-4 flex flex-col" @keypress.enter.prevent="">
    <p class="text-4xl font-bold text-gray-800 self-center">See Invoice</p>

    <div class="flex flex-col w-5/6 mx-auto shadow-lg mt-4 bg-white px-4 pb-4">
      <p class="text-2xl text-medium border-b p-2 py-4">Invoice Information</p>
      <div class="mt-4 px-8 text-sm flex items-center">
        <label for="delivery" class="w-2/12 uppercase">Place of Delivery</label>
        <input
          id="delivery"
          v-model="updatedInvoice.delivery"
          :readonly="!editActive"
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
          v-model="updatedInvoice.exporter"
          :readonly="!editActive"
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
          v-model="updatedInvoice.stockage"
          :readonly="!editActive"
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
          v-model="updatedInvoice.vessel"
          :readonly="!editActive"
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
          v-model="updatedInvoice.invoice_date"
          :readonly="!editActive"
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
          v-model="updatedInvoice.invoice_no"
          :readonly="true"
          class="w-full border rounded p-2 ml-8"
          type="text"
          name="invoice_number"
          placeholder="Invoice Number (numero de facture) "
        />
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
          v-if="!editActive"
          class="px-8 py-2 border rounded-lg bg-green-500 text-white mx-2"
          :disabled="sending"
          @click.prevent="editActive = true"
        >
          Edit <span class="mdi mdi-pencil"></span>
        </button>

        <button
          v-if="!editActive"
          class="px-8 py-2 border rounded-lg bg-red-500 text-white mx-2"
          :disabled="sending"
          @click.prevent="deleteInvoice"
        >
          {{deleting? 'Deleting...': 'Delete'}} <span class="mdi mdi-delete"></span>
        </button>

        <button
          v-if="editActive"
          class="px-8 py-2 border rounded-lg bg-green-500 text-white"
          :disabled="sending"
          @click.prevent="editActive = false"
        >
          Cancel <span class="mdi mdi-cancel"></span>
        </button>
      </div>
    </div>

    <div class="flex flex-col w-5/6 mx-auto shadow-lg mt-4 bg-white px-4 pb-4">
      <p class="text-2xl text-medium  px-2 mt-4">Batch</p>
      <SeeBatch
        v-for="(batch, index) in invoice.batches"
        :key="index"
        linked="true"
        :batch="batch"
        :readonly="!editActive"
        class="mt-2"
        @close="invoice.batches = invoice.batches.filter((b, i) => i !== index)"
      />
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import NewBatch from '../../../components/NewBatch'
import SeeBatch from '../../../components/SeeBatch'
import { convertToDate, Invoice } from '../../../store/invoice'
export default {
  name: 'New',
  components: { SeeBatch, NewBatch },
  layout: 'medica',
  data() {
    return {
      sending: false,
      deleting: false,
      editActive: false,
      invoice_number: this.$route.params.id,
      updatedInvoice: {}
    }
  },
  computed: {
    get_total() {
      return this.updated.ship * this.invoice.pack
    },
    host() {
      return this.$store.state.invoice.host
    },
    invoice() {
      return (
        this.$store.getters['invoice/getInvoice'](this.$route.params.id) || {}
      )
    }
  },
  watch: {
    invoice(after, before) {
      this.updatedInvoice = { ...after }
    }
  },
  mounted() {
    this.updatedInvoice = { ...this.invoice }
  },

  methods: {
    async deleteInvoice() {
      if (confirm('Do you really want to delete? \n THIS IS NOT REVERSIBLE')) {
        this.deleting = true
        try {
          const ip = await this.$axios.$delete(
            `${this.host}/delete/invoice/${this.invoice.invoice_no}`
          )

          this.$store.commit('invoice/deleteInvoice', this.invoice)
          alert('Deleted Successfully')
          console.log(ip)
        } catch (e) {
          console.log(e)
          alert(`${e} occurred`)
        } finally {
          this.deleting = false
        }
      }
    },
    async fetchSomething() {
      if (
        this.editActive &&
        JSON.stringify(this.updatedInvoice) !== JSON.stringify(this.invoice)
      ) {
        this.sending = true
        const payload = {
          ...new Invoice({ ...this.updatedInvoice, invoice_info: null })
            .invoice_info,
          invoice_date: convertToDate(this.updatedInvoice.invoice_date)
        }
        try {
          const ip = await this.$axios.$put(
            `${this.host}/update/invoice`,
            payload
          )
          this.ip = ip
          this.$store.commit('invoice/updateInvoice', payload)
          alert('Updated Successfully')
          console.log(ip)
        } catch (e) {
          console.log(e)
          alert(`${e} occurred`)
        } finally {
          this.sending = false
          this.editActive = false
        }
      }
    },
    addBatch() {
      this.invoice.batches.push({
        description: '',
        batch_no: '',
        quantity: 0,
        num_of_ships: 0,
        mfg_date: Date(),
        exp_date: Date()
      })
    }
  }
}
</script>

<style scoped></style>
