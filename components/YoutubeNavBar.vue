<template>
  <nav class="w-full bg-white flex p-2 px-4 justify-between">
  <div class="relative flex items-center text-base">
    <button class="mdi mdi-menu text-gray-700 text-2xl"></button>
    <span class="mdi mdi-youtube text-red-500 text-4xl ml-4"></span>
    <span class="font-bold tracking-tight">YouTube</span>
    <span class="self-start text-xs font-light uppercase">TM</span>
  </div>
  <div class=" flex-grow flex items-center">
    <div class="justify-end md:justify-center flex w-4/6 mx-auto">
      <div class=" bg-white hidden md:flex w-full mx-8  border border-gray-500">
        <input type="text" name='search' placeholder="search" class="flex-grow px-4">
        <button class="mdi mdi-magnify px-2 text-2xl bg-gray-200 text-gray-700 px-6 py-1"></button>
      </div>
      <button class="mdi mdi-magnify  text-gray-700 text-2xl px-2 md:hidden "></button>
    </div>
    <div class="flex items-center text-2xl text-gray-700">

      <button class="mdi mdi-video-plus px-2"></button>
      <button class="mdi mdi-apps px-2"></button>
      <button class="mdi mdi-bell px-2"></button>
      <button class="ml-2 rounded-full w-8 h-8 overflow-hidden bg-red-600 flex justify-center items-center text-white text-sm">l</button>
    
    </div>

  </div>
</nav>
</template>

<script>
export default {
  name: 'YoutubeNavBar'
}
</script>

<style>
</style>