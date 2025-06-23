import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TeamView from '../views/TeamView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'naitokuraudo | home',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'naitokuraudo | projects',
      },
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
      meta: {
        title: 'naitokuraudo | team',
      },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: {
        title: 'naitokuraudo | contacts',
      },
    },
  ],
})

export default router
