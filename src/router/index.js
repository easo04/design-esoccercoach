import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Design from '../components/Design.vue'
import DesignAlignement from '../components/DesignAlignement.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-exercice',
    name: 'Design',
    component: Design
  },
  {
    path: '/create-alignement',
    name: 'DesignAlignement',
    component: DesignAlignement
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
