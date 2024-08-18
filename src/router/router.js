import { createRouter, 
  createWebHistory, 
  // createMemoryHistory 
} from 'vue-router'

import About from '@/pages/About.vue'
import CardItem from '@/components/CardItem.vue'
import Main from '@/pages/Main.vue'
import Start from '@/pages/Start.vue'
import Page404 from '@/pages/Page404.vue'
// import { process } from '@/components/_config'


const routerHistory = 
// process.dev ? 
createWebHistory() 
// : 
// createMemoryHistory()

const routes = [
  { name: 'home', path: '/', component: Start },
  { name: 'main', path: '/main', component: Main },
  { name: 'about', path: '/about', component: About },
  { name: 'carditem', path: '/carditem/:alias', component: CardItem },
  { name: 'test', path: '/test', component: Start },
  { name: '404', path: '/:PathMatch(.*)*', component: Page404 }, // '/:CatchAll(.*)'
]

const router = createRouter({
  linkActiveClass: 'active',
  history: routerHistory,
  routes,
})

export default router