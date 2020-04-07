<template>
  <div class="border-t">
    <div
      v-if="!readonly"
      class="self-end text-red-500 text-right text-xl outline-none border-none"
    >
      <button
        type="button"
        class="mdi mdi-close outline-none border-none"
        @click="$emit('close')"
      ></button>
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="delivery" class="w-2/12 uppercase"
        >Description of goods</label
      >

      <textarea
        id="good_desc"
        v-model="batch.description"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="text"
        name="delivery"
        placeholder="Description of goods"
        rows="2"
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="exporter" class="w-2/12 uppercase">Batch Number</label>
      <input
        id="batch_number"
        v-model="batch.batch_no"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="number"
        name="exporter"
        placeholder="Exporter"
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="stockage" class="w-2/12 uppercase"
        >Quantity / Ship per pack</label
      >
      <input
        id="quantity_ship"
        v-model="batch.quantity"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="number"
        name="stockage"
        placeholder="Stockage"
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="vessel" class="w-2/12 uppercase">N° of ships</label>
      <input
        id="number_ship"
        v-model="batch.num_of_ships"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="number"
        name="vessel"
        placeholder="Number of Ships"
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="vessel" class="w-2/12 uppercase"
        >Total Quantity (packs)</label
      >
      <input
        id="total"
        :value="get_total"
        class="w-full border rounded p-2 ml-8"
        type="number"
        name="vessel"
        readonly
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label class="w-2/12 uppercase">Manufactured Date</label>
      <input

        v-model="batch.mfg_date"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="date"

        placeholder="Manufactured Date (date de facture) "
      />
    </div>
    <div class="mt-4 px-8 text-sm flex items-center">
      <label for="date" class="w-2/12 uppercase">Expiration Date</label>
      <input
        v-model="batch.exp_date"
        :readonly="readonly"
        class="w-full border rounded p-2 ml-8"
        type="date"
        name="date"
        placeholder="Expired Date (date de facture) "
      />
    </div>
  </div>
</template>

<script>
import { convertToDate } from '../store/invoice'

export default {
  name: 'NewBatch',
  props: ['batch', 'readonly'],
  computed: {
    get_total() {
      return this.batch.quantity * this.batch.num_of_ships
    }
  }
}
</script>

<style scoped></style>
