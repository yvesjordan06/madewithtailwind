<template>
  <div>
    <div class="bg-white flex flex-col">
      <SeeBatch
        v-if="!editMode"
        v-model="batch.description"
        :batch="batch"
        readonly="true"
        class="mt-2"
        @close="invoice.batches = invoice.batches.filter((b, i) => i !== index)"
      />
      <NewBatch
        v-else
        v-model="updatedBatch"
        class="mt-2"
        @close="editMode = false"
      />

      <div class="flex justify-end p-8">
        <button
          v-if="!batch.region"
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
import { convertToDate, Invoice } from '../../../store/invoice'
import CustomSelect from '../../../components/CustomSelect'
export default {
  components: { CustomSelect, SeeBatch, Select, NewBatch },
  layout: 'medica',
  data() {
    return {
      editMode: false,
      editButtonText: 'Edit',
      editButtonIcon: 'mdi-pencil',
      updatedBatch: {},
      transfer_region: '',
      sending: false,
      deleting: false,
      showTransfer: false,
      shouldUpdate: false
    }
  },
  computed: {
    regions() {
      const result = Array.from(this.$store.state.invoice.regions)
      return result.slice(1)
    },
    batch() {
      return {
        ...this.$store.getters['invoice/getBatch'](this.$route.params.id)
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
  methods: {
    async transfer() {
      this.sending = true
      const payload = {
        region_code: this.transfer_region,
        batch_no: this.batch.batch_no
      }

      try {
        const response = await this.$axios.$post(
          `${this.host}/make/distribution`,
          payload
        )
        console.log(response)
        this.$store.commit('invoice/addDistribution', payload)
        alert('Transfered')
      } catch (e) {
        alert(e)
      } finally {
        this.sending = false
        this.showTransfer = false
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
          alert(`${e} occurred`)
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
