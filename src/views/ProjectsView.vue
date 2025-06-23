<script setup lang="ts">
import NavBar from '../components/nav/NavBar.vue'

interface LinkProjects {
  href: string,
  text: string,
  status: 'planned' | 'active' | 'supported' | 'completed'
}

const statusStyles: Record<LinkProjects['status'], string> = {
  planned: 'text-blue-200',
  active: 'text-green-200',
  supported: 'text-amber-200',
  completed: 'text-zinc-400',
}

const projects: LinkProjects[] = [
  { href: 'https://github.com/naitokuraudo/personal', text: 'personal', status: 'supported'},
  { href: 'https://hydrostankotech.ru/', text: 'hydrostankotech', status: 'supported'},
]
</script>

<template>
    <NavBar />
    <section class="container mx-auto mt-6">
        <ul class="flex flex-col flex-wrap gap-3">
            <li v-for="project in projects" :key="project.href" class="flex items-center gap-1.5">
                <a rel="noreferrer noopener" target="_blank" class="link" :href="project.href">{{ project.text }}</a>
                <span :class="statusStyles[project.status]">({{project.status}})</span>
            </li>
        </ul>
    </section>
</template>
