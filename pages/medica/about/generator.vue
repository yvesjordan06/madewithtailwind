<template>
  <div class="p-16">
    <p class="text-3xl font-bold">Data Generator</p>
    <div
      class="flex items-stretch border mt-4 rounded-lg overflow-hidden border-green-500 mt-4"
    >
      <p class="bg-gray-300 py-2 px-8">Date Range</p>
      <input
        v-model="begin"
        type="date"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
      <input
        v-model="end"
        type="date"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
    </div>

    <div
      class="flex items-stretch border mt-4 rounded-lg overflow-hidden border-green-500 mt-4"
    >
      <p class="bg-gray-300 py-2 px-8">Batches ranges</p>
      <input
        v-model="batch_begin"
        type="number"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
      <input
        v-model="batch_end"
        type="number"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
    </div>

    <div
      class="flex items-stretch border mt-4 rounded-lg overflow-hidden border-green-500 mt-4"
    >
      <p class="bg-gray-300 py-2 px-8">Invoices ranges</p>
      <input
        v-model="invoice_begin"
        type="number"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
      <input
        v-model="invoice_end"
        type="number"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
    </div>

    <button class="w-full py-4 bg-blue-500 rounded-lg mt-8" @click="generate">
      Generate please
    </button>

    <div class="p-16">
      <p class="text-3xl font-bold">
        How Many Batch Should I Distribute : max {{ batches.length }}
      </p>
      <div
        class="flex items-stretch border mt-4 rounded-lg overflow-hidden border-green-500 mt-4"
      >
        <p class="bg-gray-300 py-2 px-8">Number</p>
        <input
          v-model="distributeNumber"
          type="number"
          :max="batches.length"
          class="flex-grow  px-4 py-2 focus:outline-none"
        />
      </div>
      <button
        class="w-full py-4 bg-blue-500 rounded-lg mt-8"
        @click="distribute"
      >
        Distribute to regions please please
      </button>
    </div>

    <div class="mt-8 p-4">
      <p class="text-xl text-gray-800">Generation Status {{ percentDone }} %</p>
      <div class="border rounded-lg overflow-hidden w-full">
        <div
          class=" bg-blue-500 h-4"
          :style="{ width: percentDone + '%' }"
        ></div>
      </div>
      <p class="text-gray-600 mt-4">
        Function parsing Date: {{ currentDate }} <br />Generated
        {{ generated }} Invoices <br />
        Failed {{ errored }} Invoices <br />
        {{ number }} number of days<br />
        Last sent : {{ displayDate }}
      </p>
    </div>

    <div
      v-if="done"
      class="bg-green-700 px-8 py-8 mt-8 rounded-lg text-lg text-white mx-auto w-1/2"
    >
      Done generated, now go to settings and reload data!
    </div>
  </div>
</template>

<script>
import { convertToDate, formatDate, inDateRange } from '../../../store/invoice'
import { randomNumber } from '../../../utilities/functions'

export default {
  name: 'Generator',
  layout: 'medica',
  data: () => ({
    begin: formatDate(new Date().setMonth(new Date().getMonth() - 1)),
    end: formatDate(new Date()),
    batch_begin: 1,
    batch_end: 20,
    invoice_begin: 1,
    invoice_end: 20,
    generated: 0,
    errored: 0,
    currentDate: '',
    displayDate: '',
    distributeNumber: 0,
    doneNumber: 0,
    delivery: [
      'Douala, Cameroun',
      'Yaoundé, Cameroun',
      'Buea, Cameroun',
      'Accra, Ghana',
      'Bamenda, Cameroun',
      'Baghdad, India',
      'Delhi, India',
      'Hiro Medical Invoices'
    ],
    vessels: ['By Air', 'By Sea', 'By Land', 'Illegal'],
    senders: [
      'Hiro Distributions Intl',
      'Pharmacubs Lab Paris',
      'Laquintinie Medical Reseach Center',
      'New York Medical Facilites',
      'Microsoft Yearly Donation',
      'Facebook Aids',
      'Hiro Medical Facilities',
      'CCME Cameroun Centre for Medical Engeneering',
      'UNICEF World Health',
      'World Healt Organisations Labs',
      'Berlin Medical Facilities',
      'Medical NASA Team',
      'Hiro Enterprises'
    ],
    products: [
      'Paracetamol 1000mg',
      'Paracetamon 500mg',
      'Doliprane Efferverscent 1000mg',
      'Chloroquine',
      'Spamo Apotel',
      'Chlorine 2mmHg',
      'Ethilic Alcohol',
      'Surgery Mask',
      'Efferalgant 500mg',
      'Fortadol 800mg',
      'Respibien Spray 120ml',
      'Random medics'
    ]
  }),
  computed: {
    batches() {
      return this.$store.getters['invoice/allBatches']
    },
    host() {
      return this.$store.state.invoice.host
    },
    done() {
      if (this.displayDate) {
        return this.displayDate === this.currentDate
      }
    },
    percentDone() {
      return (this.doneNumber / this.number) * 100
    },
    regions() {
      return this.$store.state.invoice.regions
    },
    number() {
      const date1 = new Date(this.begin)
      const date2 = new Date(this.end)
      const diffTime = Math.abs(date2 - date1)
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
  },
  methods: {
    distribute() {
      let count = 0
      for (const batch of this.batches) {
        if (count++ > this.distributeNumber) {
          break
        }
        const payload = {
          region_code: this.regions.slice(1)[randomNumber(0, 9)].code,
          batch_no: batch.batch_no,
          created_on: convertToDate(
            new Date().setDate(new Date().getDate() - randomNumber(0, 90))
          )
        }
        count++
        this.$axios
          .$post(`${this.host}/make/distribution`, payload)
          .then((t) => {
            this.generated++
          })
          .catch((e) => {
            this.errored++
          })
      }
    },
    generate() {
      const minDate = new Date(this.begin)
      this.currentDate = new Date(this.begin)
      this.displayDate = new Date(this.begin)
      const maxDate = new Date(this.end)
      let payload = {}

      let genID = 0
      while (inDateRange(this.currentDate, minDate, maxDate)) {
        for (
          let i = 0;
          i < randomNumber(this.batch_begin, this.batch_end);
          i++
        ) {
          payload = { invoice_data: {}, batches: [] }
          payload.invoice_data = {
            invoice_no:
              'GEN0' +
              new Date().getFullYear() +
              '-' +
              randomNumber(0, 50) +
              '' +
              randomNumber(0, 50) +
              '' +
              randomNumber(0, 50) +
              '' +
              genID++,
            invoice_date: convertToDate(
              new Date().setDate(new Date().getDate() - randomNumber(0, 1000))
            ),
            created_on: convertToDate(this.currentDate),
            delivery: this.delivery[randomNumber(0, this.delivery.length)],
            exporter: this.senders[randomNumber(0, this.senders.length)],
            stockage: this.delivery[randomNumber(0, this.delivery.length)],
            vessel: this.vessels[randomNumber(0, this.vessels.length)]
          }
          let genID2 = 0
          for (
            let i = 0;
            i <= randomNumber(this.batch_begin, this.batch_end);
            i++
          ) {
            payload.batches.push({
              batch_no:
                'GEN0' +
                new Date().getFullYear() +
                '-' +
                randomNumber() +
                '' +
                randomNumber() +
                '' +
                randomNumber() +
                '' +
                genID2++,
              description: [
                this.products[randomNumber(0, this.products.length)],
                this.products[randomNumber(0, this.products.length)]
              ].join(' + '),
              mfg_date: convertToDate(
                new Date().setDate(
                  new Date().getDate() - 365 - randomNumber(0, 1000)
                )
              ),
              exp_date: convertToDate(
                new Date().setDate(
                  new Date().getDate() + 365 + randomNumber(0, 1000)
                )
              ),
              quantity: randomNumber(5, 1000),
              num_of_ships: randomNumber(5, 1000)
            })
          }
          this.$axios
            .$post(`${this.host}/add/invoice`, payload)
            .then((r) => {
              this.doneNumber +=
                1 / randomNumber(this.invoice_begin, this.invoice_end)
              this.generated++
            })
            .catch((e) => {
              this.doneNumber +=
                1 / randomNumber(this.invoice_begin, this.invoice_end)
              this.errored++
            })
        }

        this.currentDate = new Date(
          new Date(this.currentDate).setDate(
            new Date(this.currentDate).getDate() + 1
          )
        )
      }
    }
  }
}
</script>

<style scoped></style>
