import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import Category from '../views/category/category'
import Cart from '../views/cart/cart'
import User from '../views/user/user'

import detail from '@/views/detail/detail'

Vue.use(VueRouter)

  const routes = [
    {path:'',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/cart',component:Cart},
    {path:'/user',component:User},
    {path:'/detail/:id',component:detail}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
