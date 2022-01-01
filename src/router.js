import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login";
import Forget from '@/views/Forget'
import Dashboard from "@/views/Dashboard";
// import Mail from "@/views/Mail";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from '@/views/NotFound'

const Mail = () => import('./views/Mail')

const router = createRouter({
  history: createWebHistory(), // /
  routes: [
    { path: '/login', component: Login, alias: '/' }, // localhost:port/login and localhost:port/
    { path: '/forget', component: Forget, meta: { cantEnter: true } },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'home',
      beforeEnter() {
        console.log('beforeEnter')
      }
    },
    { path: '/mail', component: Mail, name: 'email', children: [
        {path: ':mailId?', component: AppEmailBody, props: true }
    ]},
    // { path: '/:noteFound(.*)', redirect: '/login' }
    { path: '/:noteFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

// beforeEach => beforeEnter => beforeRouteEnter

//перед переходом на страницу
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  if (to.meta.cantEnter) {
    // next('/dashboard')
    next({
      name: 'home'
    })
  } else {
    next()
  }
})

//после перехода на страницу
router.afterEach((to, from) => {

})

export default router