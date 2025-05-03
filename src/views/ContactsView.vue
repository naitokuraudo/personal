<script setup>
import Header from '@/components/Header.vue'
import {RiTelegramFill, RiMailFill, RiGithubFill} from '@remixicon/vue'
</script>

<template>
  <Header/>
  <section class="container mx-auto mt-6">
    <ul class="flex flex-col flex-wrap gap-3">
      <li class="flex items-center gap-1.5">
        <RiTelegramFill color="white" size="20px"/>
        <a target="_blank" class="link" href="https://t.me/pursuitofdreams">@pursuitofdreams</a>
      </li>
      <li class="flex items-center gap-1.5">
        <RiMailFill color="white" size="20px"/>
        <a target="_blank" class="link" href="mailto:naitokuraudo@mail.ru">naitokuraudo@mail.ru</a>
      </li>
      <li class="flex items-center gap-1.5">
        <RiGithubFill color="white" size="20px"/>
        <a target="_blank" class="link" href="https://github.com/naitokuraudo">naitokuraudo</a>
      </li>
    </ul>
  </section>
</template>