import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import Hikes from './components/hikes'
import Hike from './components/hike'

const routes = [
  { path: '/', component: Hikes, name: 'ns-wandelingen' },
  { path: '/#/ns-wandeling/:hikeId', component: Hike, name: 'ns-wandeling' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
//
const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === 'production' ? '/ns-wandelingen/' : ''
  ),
  routes: routes
})
createApp(App).use(router).mount('#app')
