<script setup lang="ts">
interface NavLinks {
  to: string,
  text: string
}

const links: NavLinks[] = [
  { to: '/projects', text: 'projects' },
  { to: '/team', text: 'team' },
  { to: '/contacts', text: 'contacts' },
]
</script>

<template>
  <ul class="flex flex-col flex-wrap gap-3">
    <li v-for="link in links" :key="link.to">
      <router-link :to="link.to" class="link">
        {{ link.text }}
      </router-link>
    </li>
  </ul>
</template>
