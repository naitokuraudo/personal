<script setup>
import Header from '@/components/Header.vue'
import pfp from '@/assets/devs/goganotclown.png'
import {RiVkFill, RiTelegramFill} from '@remixicon/vue'
</script>

<template>
  <Header/>
  <section class="container mx-auto mt-6">
    <img class="w-24 border-2 border-white rounded-md" :src="pfp" alt="GogaNotClown Profile Picture">
    <h1 class="text-white mt-4">pursuit of dreams</h1>
    <a target="_blank" rel="noreferrer noopener" href="https://github.com/GogaNotClown"
       class="text-gray-400 text-sm hover:underline">
      @goganotclown
    </a>
    <ul class="flex items-center flex-wrap gap-1.5 mt-2">
      <li>
        <a target="_blank" rel="noreferrer noopener" href="https://vk.com/lythene">
          <RiVkFill class="social-link" color="white" size="20px" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer noopener" href="https://t.me/pursuitofdreams">
          <RiTelegramFill class="social-link" color="white" size="20px" />
        </a>
      </li>
    </ul>
  </section>
</template>