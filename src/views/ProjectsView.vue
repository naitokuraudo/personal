<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="flex items-center gap-3 mt-10 container mx-auto">
    <Header/>
    <span class="text-gray-400 text-base">/ projects</span>
  </div>
  <section class="container mx-auto mt-10">
    <ul class="flex flex-col flex-wrap gap-3">
      <li class="flex items-center gap-1.5">
        <a target="_blank" class="link" href="https://github.com/naitokuraudo/personal">personal</a>
        <span class="text-green-200">(supported)</span>
      </li>
      <li class="flex items-center gap-1.5">
        <a class="link" href="#">hydrostation</a>
        <span class="text-yellow-200">(in progress)</span>
      </li>
    </ul>
  </section>
</template>