<script setup lang="ts">
import NavBar from '../components/nav/NavBar.vue'

interface LinkTeam {
  href: string,
  text: string
}

const team: LinkTeam[] = [
  {href: 'https://github.com/GogaNotClown', text: 'pursuit of dreams'},
  {href: 'https://github.com/arekusandorofu', text: 'amida'},
]
</script>

<template>
    <NavBar />
    <section class="container mx-auto mt-6">
        <ul class="flex flex-col flex-wrap gap-3">
            <li v-for="member in team" :key="member.href">
                <a rel="noreferrer noopener" target="_blank" class="link" :href="member.href">
                  {{ member.text }}
                </a>
            </li>
        </ul>
    </section>
</template>
