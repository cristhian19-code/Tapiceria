import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Catalogo.vue')
  },
  {
    path: '/opciones',
    name: 'OpcionesColor',
    component: () => import(/* webpackChunkName: "about" */ '../views/OpcionesColor.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
