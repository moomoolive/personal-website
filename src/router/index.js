import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import portfolio from '@/views/portfolio/main.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: "portfolio",
    component: portfolio
  },
  {
    path: '/about',
    name: "about",
    component: () => import(/* webpackPrefetch: true */ `@/views/about.vue`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
