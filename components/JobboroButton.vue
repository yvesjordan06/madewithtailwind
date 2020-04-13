<template>
  <div>
    <button
      :class="{
        'px-16 py-4 text-2xl': large,
        'px-8 py-2 text-lg': !large,
        'border-2 border-jobprimary text-black hover:text-white hover:border-transparent': outline,
        'bg-jobprimary text-white': !outline
      }"
      class=" rounded-full  hover:bg-jobhover  font-other shadow-lg"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'JobboroButton',
  props: {
    label: { type: String, required: true },
    large: { type: Boolean, default: false },
    outline: { type: Boolean, default: false }
  }
}
</script>

<style scoped></style>
