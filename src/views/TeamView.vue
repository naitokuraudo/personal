<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <Header/>
  <section class="container mx-auto mt-6">
    <ul class="flex flex-col flex-wrap gap-3">
      <li>
        <router-link class="link" to="/team/goganotclown">
          pursuit of dreams
        </router-link>
      </li>
      <li>
        <a target="_blank" class="link" href="https://github.com/arekusandorofu">amida</a>
      </li>
    </ul>
  </section>
</template>