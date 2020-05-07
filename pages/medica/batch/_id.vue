<template>
  <div v-if="batch">
    <div class="bg-white flex flex-col">
      <SeeBatch
        v-if="!editMode && batch"
        v-model="batch.description"
        :batch="batch"
        :readonly="true"
        class="mt-2"
        @close="invoice.batches = invoice.batches.filter((b, i) => i !== index)"
      />
      <NewBatch
        v-if="editMode && batch"
        v-model="updatedBatch"
        class="mt-2"
        @close="editMode = false"
      />

      <div class="flex justify-end p-8">
        <button
          v-if="
            batch.quantity * batch.num_of_ships - batch.distributed_quantity
          "
          class="px-8 rounded-lg py-2 text-white bg-green-500"
          @click="showTransfer = true"
        >
          Transfer to <span class="mdi mdi-share"></span>
        </button>
        <button
          class="px-8 rounded-lg py-2 text-white bg-green-500 mx-2"
          @click="editClicked"
        >
          {{ sending && shouldUpdate ? 'Updating...' : editButtonText }}
          <span class="mdi" :class="editButtonIcon"></span>
        </button>
        <button
          class="px-8 py-2 border rounded-lg mx-2 bg-red-500 text-white"
          :disabled="sending"
          @click.prevent="deleteBatch"
        >
          {{ deleting ? 'Deleting...' : 'Delete' }}
          <span class="mdi mdi-delete"></span>
        </button>
      </div>

      <div class="border-t border gray-500 h-px"></div>
      <p class="mt-4 text-xl font-bold">Distributions</p>
      <InvoiceTable
        v-if="batch"
        class="mb-16"
        data_url="/medica/regions/"
        data_id="region_code"
        no_add="true"
        :column="[
          { name: 'Region°', json: 'region' },
          { name: 'Quantity distributed', json: 'quantity' },

          { name: 'Distribution Date', json: 'created_on' }
        ]"
        :data="batch.distributions"
        @add-click="addInvoice"
      />
    </div>

    <div v-if="showTransfer" class="bg-gray-500 fixed opacity-25 inset-0"></div>
    <div
      v-if="showTransfer"
      class="w-3/5 bg-white flex flex-col fixed rounded-lg p-8 top-0 mt-8"
      style=" left:50%; transform: translate(-50%)"
    >
      <p class="font-bold text-2xl self-center">Transfer Batch to</p>
      <CustomSelect
        v-model="transfer_region"
        :data="
          regions.map((x) => ({ label: x.name.toUpperCase(), value: x.code }))
        "
        label="region"
        class="mt-4 px-8 text-sm"
      ></CustomSelect>
      <div class="mt-4 px-8 text-sm flex items-center ">
        <label class="w-2/12 uppercase"
          >Quantity (Max :
          {{
            batch.quantity * batch.num_of_ships - batch.distributed_quantity
          }})</label
        >
        <input
          id="total"
          v-model="quantity"
          class="w-full border rounded p-2 ml-8"
          type="number"
          min="1"
          :max="
            batch.quantity * batch.num_of_ships - batch.distributed_quantity
          "
          name="quantity"
        />
      </div>
      <div class="mt-4 px-8 text-sm flex items-center justify-end">
        <button
          class="px-8 py-2 border rounded-lg bg-green-500 text-white"
          :disabled="sending"
          @click.prevent="transfer"
        >
          {{ sending ? 'Sending...' : 'Transfer' }}
          <span class="mdi mdi-transfer"></span>
        </button>

        <button
          class="px-8 py-2 ml-4 border rounded-lg bg-green-500 text-white"
          :disabled="sending"
          @click.prevent="showTransfer = false"
        >
          Close <span class="mdi mdi-cancel"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NewBatch from '../../../components/NewBatch'
import Select from '../../../components/Select'
import SeeBatch from '../../../components/SeeBatch'
import { convertToDate, formatDate, Invoice } from '../../../store/invoice'
import CustomSelect from '../../../components/CustomSelect'
import InvoiceTable from '../../../components/InvoiceTable'
export default {
  components: { InvoiceTable, CustomSelect, SeeBatch, Select, NewBatch },
  layout: 'medica',
  data() {
    return {
      editMode: false,
      editButtonText: 'Edit',
      editButtonIcon: 'mdi-pencil',
      updatedBatch: {},
      transfer_region: '',
      quantity: '0',
      sending: false,
      deleting: false,
      showTransfer: false,
      shouldUpdate: false
      // batch: {}
    }
  },
  computed: {
    regions() {
      const result = Array.from(this.$store.state.invoice.regions)
      return result.slice(1)
    },
    batch() {
      return {
        ...this.$store.getters['invoice/getBatch'](this.$route.params.id),
        distributions: this.$store.getters['invoice/getDistributionOfBatch'](
          this.$route.params.id
        )
      }
    },
    host() {
      return this.$store.state.invoice.host
    }
  },
  watch: {
    updatedBatch(after, before) {
      if (
        this.editMode &&
        JSON.stringify(after) !== JSON.stringify(this.batch)
      ) {
        this.shouldUpdate = true
        this.editButtonIcon = 'mdi-send'
        this.editButtonText = 'Save'
        return true
      } else if (
        this.editMode &&
        JSON.stringify(after) === JSON.stringify(this.batch)
      ) {
        this.shouldUpdate = false
        this.editButtonIcon = 'mdi-cancel'
        this.editButtonText = 'Cancel'
      } else if (!this.editMode) {
        this.shouldUpdate = false
        this.editButtonIcon = 'mdi-pencil'
        this.editButtonText = 'Edit'
      }
    }
  },
  beforeMount() {
    // this.getBatch()
  },
  methods: {
    async getBatch() {
      console.log('Getting batch')
      try {
        this.batch = this.$store.getters['invoice/getBatch'](
          this.$route.params.id
        )
      } catch (e) {
        console.log(e)
      }

      try {
        let data = await this.$axios.get(
          `${this.host}/get/batch/${this.$route.params.id}`
        )
        data = data.data

        data.distributions_count = data.distributions.length
        data.distributions = data.distributions.map((dist) => ({
          ...dist,
          region: this.regions
            .find((x) => x.code === dist.region_code)
            .name.toUpperCase(),
          created_on: formatDate(dist.created_on)
        }))
        data.distributed_quantity =
          data.distributions.length > 0
            ? data.distributions.map((x) => x.quantity).reduce((a, b) => a + b)
            : 0
        this.batch = data
      } catch (e) {
        alert(e.message)
      }
    },
    async transfer() {
      if (!this.transfer_region) alert('Region is required')
      else if (!Number(this.quantity)) alert('Invalid quantity')
      else {
        this.sending = true
        const payload = {
          region_code: this.transfer_region,
          batch_no: this.batch.batch_no,
          quantity: Number(this.quantity)
        }

        try {
          const response = await this.$axios.$post(
            `${this.host}/make/distribution`,
            payload
          )
          console.log(response)
          /* const data = response.data
          data.distributions_count = data.distributions.length
          data.distributed_quantity =
            data.distributions.length > 0
              ? data.distributions
                  .map((x) => x.quantity)
                  .reduce((a, b) => a + b)
              : 0
          this.batch = data */
          console.log('BAtch')
          console.log(this.batch)
          const batch = {
            ...this.batch,
            distributions_count: this.batch.distributions_count + 1,
            distributed_quantity:
              this.batch.distributed_quantity + Number(payload.quantity),
            distributions: [
              ...this.batch.distributions,
              { ...payload, created_on: new Date() }
            ]
          }
          this.$store.commit('invoice/updateBatch', { ...batch })
          this.$store.commit('invoice/addDistribution', { ...payload })
          alert('Transfered')
        } catch (e) {
          alert(e.message)
        } finally {
          this.sending = false
          this.showTransfer = false
        }
      }
    },
    async deleteBatch() {
      if (confirm('Do you really want to delete? \n THIS IS NOT REVERSIBLE')) {
        this.deleting = true
        try {
          const ip = await this.$axios.$delete(
            `${this.host}/delete/batch/${this.batch.batch_no}`
          )

          this.$store.commit('invoice/deleteBatch', this.batch)
          alert('Deleted Successfully')
          console.log(ip)
        } catch (e) {
          console.log(e)
          alert(`${e.message} occurred`)
        } finally {
          this.deleting = false
        }
      }
    },
    async update() {
      this.sending = true
      const payload = {
        ...this.updatedBatch
      }

      try {
        const response = await this.$axios.$put(`${this.host}/update/batch`, {
          ...payload,
          mfg_date: convertToDate(payload.mfg_date),
          exp_date: convertToDate(payload.exp_date),
          distribution_date: convertToDate(payload.distribution_date)
        })
        console.log(response)
        this.$store.commit('invoice/updateBatch', payload)
        alert('Updated')
      } catch (e) {
        alert(e)
      } finally {
        this.sending = false
        this.showTransfer = false
        this.shouldUpdate = false
        this.editMode = false
        this.editButtonText = 'Edit'
        this.editButtonIcon = 'mdi-pencil'
      }
    },
    editClicked() {
      if (!this.editMode) {
        this.updatedBatch = this.batch
        this.editMode = true
        this.editButtonIcon = 'mdi-cancel'
        this.editButtonText = 'Cancel'
      } else if (this.shouldUpdate) {
        this.update()
        console.log('ok')
      } else {
        this.editMode = false
        this.editButtonText = 'Edit'
        this.editButtonIcon = 'mdi-pencil'
      }
    }
  }
}
</script>

<style scoped></style>
