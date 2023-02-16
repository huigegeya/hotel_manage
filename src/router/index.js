import { createRouter, createWebHashHistory } from 'vue-router'

//定义路由信息的数组
const routes = [
  // 首页
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  //登录页
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导入nprogress
import NProgress from 'nprogress'
//导入nprogress的样式
import 'nprogress/nprogress.css'

//定义路由导航前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})
// 定义路由导航后置守卫
router.afterEach((to, from) => {
  NProgress.done();
})
export default router
