import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/default.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/product/list',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页' }
      }, {
        path: '/user/list',
        component: () => import('../views/user/user-list.vue'),
        meta: { title: '用户列表', hidden: false, aside: true }
      }, {
        path: '/role/list',
        component: () => import('../views/user/role-list.vue'),
        meta: { title: '角色列表', hidden: false, aside: true }
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: Layout,
    meta: { title: '商品', hidden: false, aside: false },
    children: [
      {
        path: '/product/list',
        component: () => import('../views/product/product-list.vue'),
        meta: { title: '商品列表', hidden: false, aside: true }
      }
    ]
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Layout,
    meta: { title: '代办', hidden: false, aside: false },
    children: [
      {
        path: '/todo-list',
        component: () => import('../views/todo/todo-list.vue'),
        meta: { title: '代办', hidden: false, aside: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.VUE_APP_WEBSITE_BASE),
  routes,
})

export default router
