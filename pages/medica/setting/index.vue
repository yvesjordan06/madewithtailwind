<template>
  <div class="p-16 bg-white">
    <p class="text-3xl font-bold">Settings</p>
    <p class="text-xl font-bold mt-8">App Configuration</p>
    <div
      class="flex items-stretch border mt-4 rounded-lg overflow-hidden border-green-500"
    >
      <p class="bg-gray-300 py-2 px-8">Your Name</p>
      <input
        v-model="new_name"
        type="text"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
      <button
        class="bg-green-500 px-8 text-white focus:outline-none"
        @click="changeName"
      >
        Update
      </button>
    </div>

    <div
      class="flex items-stretch border rounded-lg overflow-hidden border-green-500 mt-4"
    >
      <p class="bg-gray-300 py-2 px-8">Database Host</p>
      <input
        v-model="new_host"
        type="text"
        class="flex-grow  px-4 py-2 focus:outline-none"
      />
      <button
        class="bg-green-500 px-8 text-white focus:outline-none"
        @click="changeHost"
      >
        Update
      </button>
    </div>

    <p class="text-xl font-bold mt-8">App Settings</p>
    <div class="border rounded-lg p-8 mt-4">
      <p class="text-gray-700 font-bold">Reload data</p>
      <p class="text-gray-600 mt-2">
        This operation is going to fetch new data from the database. Before
        doing this operation, verify that the database host has been entered
        correctly. This operation is safe to do
      </p>
      <p class="text-gray-600 mt-2">
        <span class="text-red-500">Warning !</span> This operation is clear the
        actual database before fetching new data
      </p>

      <button
        class="mt-4 px-4 py-2 bg-green-500 rounded-lg text-white focus:outline-none"
        @click="fetchData"
      >
        I want to do it
      </button>
    </div>
    <div class="border rounded-lg p-8 mt-4">
      <p class="text-gray-700 font-bold">Clear data</p>
      <p class="text-gray-600 mt-2">
        This operation is going to delete every invoice, batches and distributed
        data from the application. These data will be fetched back when the app
        restart or by Reloading the data manually
      </p>
      <p class="text-gray-600 mt-2">
        <span class="text-red-500">Warning !</span> This operation is clear the
        actual database, this cannot be undone
      </p>

      <button
        class="mt-4 px-4 py-2 bg-red-500 rounded-lg text-white focus:outline-none"
        @click="clearData"
      >
        I want to do it
      </button>
    </div>
    <div class="border rounded-lg p-8 mt-4">
      <p class="text-gray-700 font-bold">Reset App</p>
      <p class="text-gray-600 mt-2">
        This operation is going to reset the app and reset all settings. Use it
        only when needed, this operation is safe
      </p>
      <p class="text-gray-600 mt-2">
        <span class="text-red-500">Warning !</span> Do it at your own risk
      </p>

      <button
        class="mt-4 px-4 py-2 bg-blue-500 rounded-lg text-white focus:outline-none"
        @click="reset"
      >
        I want to do it
      </button>
    </div>

    <div
      v-if="showSuccess"
      class="fixed w-64 top-0 right-0 mr-8 mt-8 rounded-lg bg-blue-500 text-white px-8 py-4"
    >
      Updated Successfully
    </div>
    <div
      v-if="showError"
      class="fixed w-64 top-0 right-0 mr-8 mt-8 rounded-lg bg-red-500 text-white px-8 py-4"
    >
      Not completed
    </div>
  </div>
</template>

<script>
import { Invoice } from '../../../store/invoice'

export default {
  name: 'Index',
  layout: 'medica',
  data: () => ({
    new_name: '',
    new_host: '',
    showSuccess: false,
    showError: false
  }),
  computed: {
    name() {
      return this.$store.state.invoice.name
    },
    host() {
      return this.$store.state.invoice.host
    }
  },
  mounted() {
    this.new_name = this.name
    this.new_host = this.host
  },
  methods: {
    startTimer(success = true) {
      if (success) {
        this.showSuccess = true
      } else {
        this.showError = true
      }
      const self = this
      setTimeout(function() {
        self.showError = self.showSuccess = false
      }, 3000)
    },
    changeHost() {
      this.$store.commit('invoice/updateHost', this.new_host)
      alertify.success('Host changed')
    },
    changeName() {
      this.$store.commit('invoice/updateName', this.new_name)
      alertify.success('Nice to meet you ' + this.new_name)
    },
    reset() {
      alertify.confirm(
        'Factory Reset',
        'This is going to set the app to default settings, Do you wish to proceed ?',
        () => {
          this.$store.commit('invoice/resetApp')
        },
        null
      )
    },
    clearData() {
      alertify.confirm(
        'Clear local data',
        'This is going to clear the app cached data, Do you wish to proceed ?',
        () => {
          this.$store.commit('invoice/clear')
          alertify.success('Data cleared')
        },
        null
      )
    },
    async fetchData() {
      try {
        const invoices = await this.$axios.get(`${this.host}/get/invoices`)
        alertify.message('Please wait! Data is being downloaded')
        console.log(invoices)
        this.$store.commit('invoice/clear')
        invoices.data.forEach((i) =>
          this.$store.commit('invoice/add', new Invoice(i))
        )
        alertify.success('Data updated successfully')
      } catch (e) {
        alertify.error('Could not download data!, Check the server connection')
      }
    }
  }
}
</script>

<style scoped></style>
