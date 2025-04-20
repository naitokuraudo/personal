<script setup>
import logo from '@/assets/logo.svg'
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <img
        class="border-2 border-dashed border-white w-36 rounded-4xl transition duration-800 ease-in-out cursor-pointer hover:rotate-360"
        :src="logo" alt="Logo">
    <h1 class="text-white font-medium text-2xl mt-3.5">naitokuraudo</h1>
    <p class="text-gray-400 font-normal text-base mt-2">
      There is nothing special here.
    </p>
    <SocialLinks/>
  </section>
</template>