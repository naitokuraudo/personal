<script setup lang="ts">
import { useRoute } from 'vue-router'
import logo from '@/assets/logo.svg'

const route = useRoute()
</script>

<template>
    <router-link class="flex items-center gap-2 container mx-auto mt-10" to="/">
        <img class="w-10 border-2 border-white rounded-md" :src="logo" alt="Logo" />
        <h1 class="text-white font-normal text-xl">naitokuraudo</h1>
        <span class="font-normal text-base text-gray-400">
            / {{ route.name }}
        </span>
    </router-link>
</template>