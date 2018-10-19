import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/home',
      component: () => import('@/views/home/index')
    },
    {
      path: '/login',
      name: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/register',
      name: '/register',
      component: () => import('@/views/login/register')
    },
    {
      path: '/articleDetail',
      name: '/articleDetail',
      component: () => import('@/views/article/articleDetail')
    }, 
  ]
})
