import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TeamView from '@/views/TeamView.vue'
import ContactsView from '@/views/ContactsView.vue'
import GogaNotClownView from '@/views/GogaNotClownView.vue'

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/projects', name: 'projects', component: ProjectsView},
    {path: '/team', name: 'team', component: TeamView},
    {path: '/contacts', name: 'contacts', component: ContactsView},
    {path: '/team/goganotclown', name: 'team/goganotclown', component: GogaNotClownView},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router