<template>
  <div class="bg-gray-100 w-full h-screen overflow-hidden flex">
    <SideBar
      v-if="!isFirstTime"
      :regions="regions"
      class="overflow-hidden overflow-y-auto"
    />
    <div class="w-full overflow-hidden  overflow-y-auto">
      <div
        v-if="isFirstTime"
        class="p-8 bg-white  w-1/2 mx-auto my-8 rounded-lg"
      >
        <p class="text-3xl font-bold">Hey there!, it's your first time here</p>
        <p class="text-gray-600 mt-4">
          We will setup few things before you begin
        </p>
        <p class="text-gray-600">
          Remember, this window will never appear again
        </p>
        <p class="text-gray-600 ">You can always change this in the settings</p>
        <p class="text-gray-600 mt-4">Ok let's begin</p>

        <div class="mt-8">
          <p class="mt-4">What is your name?</p>
          <input
            v-model="name"
            type="text"
            placeholder="How should I call you ?"
            class=" mt-2 border w-full px-4 py-2 rounded-lg border-green-500 focus:outline-none"
          />
        </div>

        <div class="mt-8">
          <p class="mt-4">What is the address of the database?</p>
          <p class="text-gray-600 text-sm">
            Hint: I am asking for the url of where your database is hosted. If
            it is on your machine please type
            <span class=" font-mono text-black">localhost</span>
          </p>
          <input
            v-model="host"
            type="text"
            placeholder="Host Adress"
            class=" mt-2 border w-full px-4 py-2 rounded-lg border-green-500 focus:outline-none"
          />
        </div>

        <p class="mt-8">Now all is setup, please press Start now</p>

        <div class="mt-4 w-full flex justify-end">
          <button
            class="bg-green-500 p-2 px-8 text-white rounded-lg"
            @click="setup"
          >
            Start now
          </button>
        </div>
      </div>
      <nuxt v-if="!isFirstTime" />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import { Invoice } from '../store/invoice'
export default {
  components: {
    SideBar
  },
  data: () => ({
    ignoreHostChange: false,
    host:
      window.location.protocol +
      '//' +
      (window.location.protocol.startsWith('http')
        ? window.location.hostname.endsWith('.com')
          ? 'yvesjordan06.pythonanywhere.com'
          : window.location.hostname
        : 'localhost'),
    name: ''
  }),
  computed: {
    regions() {
      return this.$store.state.invoice.regions
    },
    hostUrl() {
      return this.$store.state.invoice.host
    },
    appName() {
      return this.$store.state.invoice.name
    },
    isFirstTime() {
      return !this.appName && !this.hostUrl
    }
  },
  watch: {
    hostUrl(a, _) {
      this.ignoreHostChange = this.ignoreHostChange || !a
      if (!this.ignoreHostChange) {
        const retry = confirm(
          'The database host has been change, will you like to reload data ?'
        )
        if (retry) {
          this.fetchData()
        }
      } else {
        this.ignoreHostChange = false
      }
    }
  },
  created() {
    if (!this.isFirstTime) {
      this.fetchData().then()
    } else {
      this.ignoreHostChange = true
    }
  },
  methods: {
    setup() {
      if (this.name && this.host) {
        this.$store.commit('invoice/updateHost', this.host)
        this.$store.commit('invoice/updateName', this.name)
        this.isFirstTime = false
        this.fetchData()
      } else {
        alert('Please I need your name and the host IP')
      }
    },
    async fetchData() {
      try {
        const invoices = await this.$axios.get(`${this.hostUrl}/get/invoices`)
        const distributions = await this.$axios.get(
          `${this.hostUrl}/get/regions`
        )
        this.$store.commit(
          'invoice/addDistributions',
          distributions.data.map((x) => ({
            ...x,
            code: x.region_code,
            name: x.region_name
          }))
        )
        console.log(invoices)
        this.$store.commit('invoice/clear')
        invoices.data.forEach((i) =>
          this.$store.commit('invoice/add', new Invoice(i))
        )
      } catch (e) {
        const retry = confirm(
          'Oops\n it seem like the database is not available at this time. \n Do you wish to try again ?'
        )

        if (retry) {
          this.fetchData()
        } else {
          this.$router.push('/medica/setting')
        }
      }
    }
  }
}
</script>

<style></style>
