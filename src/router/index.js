import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Technician from '../components/Technician.vue'
import Engineer from '../components/Engineer.vue'
import Writer from '../components/Writer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tech',
    name: 'Technician',
    component: Technician
  },
  {
    path: '/engineer',
    name: 'Engineer',
    component: Engineer
  },
  {
    path: '/writer',
    name: 'Writer',
    component: Writer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
