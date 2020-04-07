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
        v-model="batch.description"
        class="mt-2"
        :batch="batch"
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
          class="px-8 rounded-lg py-2 text-white bg-green-500 ml-4"
          @click="editClicked"
        >
          {{ editButtonText }} <span class="mdi" :class="editButtonIcon"></span>
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
        :data="regions.map(x=>({label:x.name.toUpperCase(), value:x.code}))"
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
import { Invoice } from '../../../store/invoice'
import CustomSelect from '../../../components/CustomSelect'
export default {
  components: { CustomSelect, SeeBatch, Select, NewBatch },
  layout: 'medica',
  data() {
    return {
      editMode: false,
      editButtonText: 'Edit',
      editButtonIcon: 'mdi-pencil',
      batch: {
        description: 'Efferalgant 200mg + Doliprane 1000mg + Ebolaxide 1g',
        batch_no: '11101',
        quantity: 59,
        num_of_ships: 12,
        mfg_date: '2019-12-12',
        exp_date: '2024-03-15'
      },
      transfer_region: '',
      sending: false,
      showTransfer: false
    }
  },
  computed: {
    edited() {
      if (
        this.editMode &&
        JSON.stringify(this.batch) !==
          JSON.stringify(
            this.$store.getters['invoice/getBatch'](this.$route.params.id)
          )
      ) {
        this.editButtonIcon = 'mdi-send'
        this.editButtonText = 'Save'
        return true
      }
      this.editButtonIcon = 'mdi-pencil'
      this.editButtonText = 'Edit'
      return false
    },
    regions() {

      const result = Array.from(this.$store.state.invoice.regions)
      return result.slice(1)
    }
  },
  mounted() {
    this.batch = {
      ...this.$store.getters['invoice/getBatch'](this.$route.params.id)
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
          `http://yvesjordan06.pythonanywhere.com/make/distribution`,
          payload
        )
        console.log(response)
        this.$store.commit('invoice/addDistribution', payload)
        alert('Transfered')
        this.batch = {
          ...this.$store.getters['invoice/getBatch'](this.$route.params.id)
        }
      } catch (e) {
        alert(e)
      } finally {
        this.sending = false
        this.showTransfer = false
      }
    },
    editClicked() {
      if (!this.editMode) {
        this.editMode = true
        this.editButtonIcon = 'mdi-cancel'
        this.editButtonText = 'Cancel'
      } else if (this.edited) {
        // TODO SEND EDITIED FORM
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
