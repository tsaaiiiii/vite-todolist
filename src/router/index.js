import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: '登入',
        showImg: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: {
        title: '註冊',
        showImg: true
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/TodoView.vue'),
      meta: {
        requiredAuth: true,
        title: 'TodoList',
        showImg: false
      }
    }
  ]
})
router.beforeEach((to, from) => {
  if (to.meta.requiredAuth) {
    console.log('前置路由守卫', from, to)
    const token = localStorage.getItem('userToken')
    if (!token) {
      return { name: 'home' }
    }
  }
})

router.afterEach((to) => {
  console.log('後置路由守衛', to)
  document.title = to.meta.title
})

export default router
