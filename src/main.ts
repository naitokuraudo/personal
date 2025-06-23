import './assets/styles.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

const defaultTitle = 'naitokuraudo'
router.afterEach((to) => {
  const title = (to.meta.title as string) || defaultTitle

  head.push({
    title,
  })
})

app.mount('#app')
