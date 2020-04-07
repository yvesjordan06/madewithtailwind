<template>
  <div>
    <div class="relative z-20 ">
      <div class="flex items-center">
        <label class="w-2/12 uppercase" v-if="label">{{label}}</label>
        <div class="flex flex-grow border rounded items-center overflow-hidden">
          <input
            v-model="text"
            readonly
            class=" focus:outline-none p-2 flex-grow"
            type="text"
            :placeholder="placeholder || label "
            @input="displayData = true"
            @click="toggleData"
          />
          <button
            class="mdi mdi-heart focus:outline-none p-2"
            @click="toggleData"
          ></button>
        </div>
      </div>
      <div
        v-if="displayData"
        class="absolute bg-white shadow-lg rounded-lg w-10/12  right-0 flex flex-col"
      >
        <button
          v-for="region in searchData"
          :key="region.code"
          class="py-2 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none"
          @click="select(region)"
        >
          {{ region.name }}
        </button>
      </div>
    </div>
    <div
      v-if="displayData"
      class="top-0 left-0 bottom-0 right-0 z-10 "
      style="position:fixed;"
      @click="displayData = false"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props:['value', 'label', 'placeholder'],
  data() {
    return {
      displayData: false,
      regions: [
        { name: 'Adamawa', code: 'ADA' },
        { name: 'North', code: 'NOR' },
        { name: 'South', code: 'SOU' },
        { name: 'East', code: 'EAS' },
        { name: 'Centre', code: 'CEN' },
        { name: 'Littoral', code: 'LIT' },
        { name: 'West', code: 'WES' },
        { name: 'Far North', code: 'FNO' },
        { name: 'North West', code: 'NWE' },
        { name: 'South West', code: 'SWE' }
      ],
      text: ''
    }
  },
  computed: {
    searchData() {
      return true
        ? this.regions
        : this.regions.filter((x) =>
            x.name.toLocaleLowerCase().startsWith(this.value.toLocaleLowerCase())
          )
    }
  },
  methods: {
    toggleData() {
      this.displayData = !this.displayData
    },
    select({ name, code }) {
      this.text = name
      this.displayData = false
      this.$emit('input', code)
    }
  }
}
</script>

<style scoped></style>
