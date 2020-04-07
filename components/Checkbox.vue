<template>
  <button class="flex focus:outline-none" @click="toggle">
    <span v-if="isChecked" class="mdi mdi-checkbox-marked"></span>
    <span v-if="!isChecked" class="mdi mdi-checkbox-blank-outline"></span>
    <span v-if="label" class="ml-2">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['checked', 'label'],
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    toggle() {
      this.isChecked = !this.isChecked
      this.$emit('toggle')
      console.log(this.isChecked)
      this.isChecked ? this.$emit('checked') : this.$emit('unchecked')
    }
  },
  watch: {
    checked(newVal) {
      // watch it
      this.isChecked = newVal
    }
  },
  created() {
    this.isChecked = this.checked
  }
}
</script>

<style scoped></style>
