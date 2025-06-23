<script setup lang="ts">
import type {Component} from 'vue'
import NavBar from '../components/nav/NavBar.vue'
import { RiTelegramFill, RiMailFill, RiGithubFill } from '@remixicon/vue'

interface LinkContacts {
  icon: Component
  href: string,
  text: string
}

const contacts: LinkContacts[] = [
  { icon: RiTelegramFill, href: 'https://t.me/pursuitofdreams', text: '@pursuitofdreams' },
  { icon: RiMailFill, href: 'mailto:naitokuraudo@mail.ru', text: 'naitokuraudo@mail.ru' },
  { icon: RiGithubFill, href: 'https://github.com/naitokuraudo', text: 'naitokuraudo' },
]
</script>

<template>
    <NavBar />
    <section class="container mx-auto mt-6">
        <ul class="flex flex-col flex-wrap gap-3">
            <li v-for="contact in contacts" :key="contact.href" class="flex items-center gap-1.5">
                <component :is="contact.icon" color="white" size="20px" />
                <a rel="noreferrer noopener" target="_blank" class="link" :href="contact.href">
                  {{ contact.text }}
                </a>
            </li>
        </ul>
    </section>
</template>
