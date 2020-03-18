import Vue from 'vue'
import VueRouter from 'vue-router'
import Women from '@/components/mariana.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Accesories from '@/components/accesories.vue'
import PlusSize from '@/components/plussize.vue'
import Sales from '@/components/sales.vue'
import Form from '@/components/form.vue'
import Dialog from '@/components/dialog.vue'
import Menu from '@/components/menu.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path:'/women',
    name:'Women',
    component :Women
  },

   {
    path:'/accesories',
    name:'Accesories',
    component :Accesories
  },

  {
    path:'/plussize',
    name:'PlusSize',
    component :PlusSize
  },

  {
    path:'/sales',
    name:'Sales',
    component :Sales
  },

  
  {
    path:'/form',
    name:'Form',
    component :Form
  },

  {
    path:'/dialog',
    name:'Dialog',
    component :Dialog
  },

  {
    path:'/menu',
    name:'menu',
    component :Menu
  }

  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
