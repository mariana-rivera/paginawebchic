import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Women from '@/components/mariana.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Accesories from '@/components/accesories.vue'
import PlusSize from '@/components/plussize.vue'
import Sales from '@/components/sales.vue'
import Form from '@/components/form.vue'
import Dialog from '@/components/dialog.vue'
import Cart from '@/components/menu.vue'
import Favoritos from '@/components/favoritos.vue'



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
    path:'/cart',
    name:'Cart',
    component :Cart
  },
  {
    path:'/favoritos',
    name:'Favoritos',
    component: Favoritos
  }

  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

