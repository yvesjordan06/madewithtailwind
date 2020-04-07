<template>
  <div>
    <div class="relative z-20 ">
      <div class="flex items-center">
        <label v-if="label" class="w-2/12 uppercase">{{ label }}</label>
        <div
          class="flex flex-grow border rounded items-center overflow-hidden ml-4"
        >
          <input
            v-model="text"
            readonly
            class=" focus:outline-none p-2 flex-grow "
            type="text"
            :placeholder="placeholder || label"
            @input="displayData = true"
            @click="toggleData"
          />
          <button
            class="mdi mdi-menu-down focus:outline-none p-2"
            @click="toggleData"
          ></button>
        </div>
      </div>
      <div
        v-if="displayData"
        class="absolute bg-white shadow-lg rounded-lg w-full  right-0 flex flex-col"
      >
        <button
          v-for="region in searchData"
          :key="region.value"
          class="py-2 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none"
          @click="select(region)"
        >
          {{ region.label }}
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
  name: 'CustomSelect',
  props: ['value', 'label', 'placeholder', 'data'],
  data() {
    return {
      displayData: false,
      text: ''
    }
  },
  computed: {
    searchData() {
      return true
        ? this.data
        : this.data.filter((x) =>
            x.name
              .toLocaleLowerCase()
              .startsWith(this.value.toLocaleLowerCase())
          )
    }
  },
  mounted() {
    this.text = this.data.find((x) => x.value === this.value)?.label
  },
  methods: {
    toggleData() {
      this.displayData = !this.displayData
    },
    select({ label, value }) {
      this.text = label
      this.displayData = false
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped></style>
