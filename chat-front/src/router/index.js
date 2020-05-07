import Vue from 'vue'
import VueRouter from 'vue-router'
import Banner from '../views/Banner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Banner',
    component: Banner
  }
]

const router = new VueRouter({
  routes
})

export default router
