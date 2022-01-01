import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login";
import Forget from '@/views/Forget'
import Dashboard from "@/views/Dashboard";
import Mail from "@/views/Mail";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from '@/views/NotFound'

export default createRouter({
  history: createWebHistory(), // /
  routes: [
    { path: '/login', component: Login, alias: '/' }, // localhost:port/login and localhost:port/
    { path: '/forget', component: Forget },
    { path: '/dashboard', component: Dashboard },
    { path: '/mail', component: Mail, children: [
        {path: ':mailId?', component: AppEmailBody, props: true }
    ]},
    // { path: '/:noteFound(.*)', redirect: '/login' }
    { path: '/:noteFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})