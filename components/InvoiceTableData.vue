<template>
  <tr
    class=" hover:bg-gray-100 border-t cursor-pointer"
    :class="{ 'bg-gray-100': selected }"

  >
    <td v-if="checkable" >
      <Checkbox
        :checked="selected"
        @checked="selected = true"
        @unchecked="selected = false"
      ></Checkbox>
    </td>
    <td
      @click="$emit('click')"
      v-for="(order, index) in orders"
      :key="index"
      class="text-xs py-2 text-center py-4"
    >
      {{ data[order] }}
    </td>
  </tr>
</template>

<script>
import Checkbox from './Checkbox'
export default {
  components: { Checkbox },
  props: ['orders', 'data', 'checkable', 'checked'],
  data() {
    return {
      selected: false
    }
  },
  watch: {
    checked(newVal) {
      // watch it
      this.selected = newVal
    }
  },
  mounted() {
    this.selected = this.checked
  }
}
</script>

<style></style>
