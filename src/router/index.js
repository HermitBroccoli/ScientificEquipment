import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/IndexView'
import product from '@/views/PoductView.vue'
import productTwo from '@/views/ProductTwoView.vue'
import productThree from '@/views/ProductThreeView.vue'
import about from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/one',
    component: product
  },
  {
    path: '/two',
    component: productTwo
  },
  {
    path: '/three',
    component: productThree
  },
  {
    path: '/about',
    component: about
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
