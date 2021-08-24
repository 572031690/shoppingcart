// import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '*',
    redirect: '/list'
  },
  {
    path: '/list',
    meta: {
      title: '商品列表'
    },
    component: resolve => require(['../views/list.vue'], resolve)
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '商品详情'
    },
    component: resolve => require(['../views/product.vue'], resolve)
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: resolve => require(['../views/cart.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
