<template>
  <div>
    <div class="w-full ">
      <div
        class="w-3/4 hidden bg-white mx-auto flex rounded-full overflow-hidden p-4 px-8 text-3xl"
      >
        <input
          type="text"
          class="flex-grow outline-none"
          placeholder="Fast search here"
        />
        <button class="mdi mdi-magnify text-green-500 outline-none"></button>
      </div>

      <div class="w-full bg-white px-8  mt-4 flex justify-end border-b">
        <div class="flex flex-grow items-center text-gray-500">
          <p class="text-gray-700 font-medium ">INFO :</p>
          <p class="ml-1">
            <span class="text-green-500">{{ searchData.length }}</span> items
            shown out of {{ data.length }}
          </p>

          <div
            class=" bg-white mx-auto flex rounded-full overflow-hidden p-1 px-2"
          >
            <input
              v-model="searchInput"
              type="text"
              class="flex-grow outline-none border px-4"
              placeholder="Fast search here"
            />
            <button
              class="mdi mdi-magnify text-green-500 outline-none bg-gray-200 px-4"
              @click="$emit('search-click')"
            ></button>
          </div>
        </div>
        <div class="flex text-sm text-gray-600">
          <button
            v-if="!no_add"
            class="border-r p-1 py-2 rounded"
            @click="$emit('add-click')"
          >
            <span class="mdi mdi-plus text-green-500"></span> Add New
          </button>

          <button
            v-if="!no_add && !no_delete"
            class="border-r p-1 py-2 rounded"
          >
            <span class="mdi mdi-delete text-red-500"></span> Delete Selected
          </button>

          <button
            v-if="checkable"
            class="border-r p-1 py-2 rounded"
            @click="checkAll = true"
          >
            Check All
          </button>
          <div class="relative flex items-center ml-4">
            <button
              class="mdi mdi-dots-vertical text-xl"
              @click="filterMenuShown = true"
            ></button>
            <div
              v-if="filterMenuShown"
              class="fixed inset-0 bg-black opacity-25 z-30"
              @click="filterMenuShown = false"
            ></div>
            <div
              v-if="filterMenuShown"
              class="bg-white flex flex-col absolute top-0 mt-8 right-0 py-2 -mr-4 shadow-lg rounded-lg z-40"
            >
              <Checkbox
                v-for="(field, index) in column"
                :key="index"
                :label="field.name"
                :checked="
                  !hiddenField.includes(field.json ? field.json : field.name)
                "
                class="p-4 py-2 border-b"
                @unchecked="
                  hiddenField.push(field.json ? field.json : field.name)
                "
                @checked="
                  hiddenField = hiddenField.filter(
                    (x) => x !== (field.json ? field.json : field.name)
                  )
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white flex flex-col">
        <table class="w-full  table-fixed text-gray-700 table-auto ">
          <tr>
            <th v-if="checkable" class="w-8"></th>
            <th v-for="(item, index) in names" :key="index">
              <button
                class="whitespace-no-wrap font-medium capitalize text-sm truncate"
                @click="sortBy(item)"
              >
                {{ item }}
                <span
                  v-if="upSorted.includes(item)"
                  class="mdi mdi-sort-ascending text-blue-500"
                ></span
                ><span
                  v-if="downSorted.includes(item)"
                  class="mdi mdi-sort-descending text-purple-500"
                ></span>
              </button>
            </th>
          </tr>

          <InvoiceTableData
            v-for="(item, index) in searchData"
            :key="index + item"
            :checkable="checkable"
            :checked="checkAll"
            :orders="orders"
            :data="item"
            @click="navigate(item)"
          ></InvoiceTableData>
        </table>

        <div
          v-if="!searchData.length"
          class="flex p-8 text-3xl uppercase text-gray-600 justify-center w-full"
        >
          No Data Available
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceTableData from './InvoiceTableData.vue'
import Checkbox from './Checkbox'
export default {
  components: {
    Checkbox,
    InvoiceTableData
  },
  props: {
    column: Array,
    hidden: Array,
    data: { type: Array, default: [] },
    checkable: Boolean,
    data_url: String,
    data_id: String,
    no_add: Boolean,
    no_delete: Boolean,
    no_check: Boolean
  },
  data() {
    return {
      myData: [],
      searchInput: '',
      hiddenField: [],
      filterMenuShown: false,
      downSorted: [],
      upSorted: [],
      checkAll: false
    }
  },
  computed: {
    orders() {
      return this.column
        .map((x) => (x.json ? x.json : x.name))
        .filter((x) => {
          return !this.hiddenField.includes(x)
        })
    },
    names() {
      return this.column
        .filter((x) => !this.hiddenField.includes(x.json ? x.json : x.name))
        .map((x) => x.name)
    },
    searchData() {
      return !this.searchInput
        ? this.myData
        : this.myData.filter(
            (x) =>
              Array.from(Object.values(x)).filter((y) =>
                y
                  ?.toString()
                  .toLowerCase()
                  .includes(this.searchInput.toLowerCase())
              ).length
          )
    }
  },
  watch: {
    data(newval) {
      this.myData = Array.from(newval)
    }
  },
  mounted() {
    this.selected = this.checked
    this.myData = Array.from(this.data)
    if (this.hidden)
      this.hiddenField = this.hidden.map((x) => (x.json ? x.json : x.name))
  },
  methods: {
    sortBy(val) {
      if (this.downSorted.includes(val)) {
        this.downSorted = this.downSorted.filter((x) => x !== val)
        this.upSorted.push(val)
        this.myData.sort((a, b) => (a[val] > b[val] ? 1 : -1))
      } else {
        this.upSorted = this.upSorted.filter((x) => x !== val)
        this.downSorted.push(val)
        this.myData.sort((a, b) => (a[val] < b[val] ? 1 : -1))
      }
    },
    navigate(item) {
      console.log('Goto')
      this.$router.push({
        path: this.data_url + item[this.data_id]
      })
    }
  }
}
</script>

<style></style>
