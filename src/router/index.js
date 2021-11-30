import { createRouter, createWebHistory } from 'vue-router'
import store from '../state'

import AddNewTickets from '../views/AddNewTickets.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import PublicFaq from '../views/PublicFaq.vue'
import TicketsDetail from '../views/TicketsDetail.vue'
import TicketsPage from '../views/AddNewTickets.vue'
import { supabase } from '../supabase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { guest: true },
  },
  {
    path: '/public-faq',
    name: 'PublicFaq',
    component: PublicFaq,
    meta: { requiresAuth: false },
  },
  {
    path: '/add-new-ticket',
    name: 'AddNewTicket',
    component: AddNewTickets,
    meta: { requiresAuth: true },
  },
  {
    path: '/tickets',
    name: 'TicketsPage',
    component: TicketsPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/ticket-details',
    name: 'TicketsPDetail',
    component: TicketsDetail,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name} | StuCheck`
  if (to.meta.requiresAuth && !store.state.user) {
    next({ name: 'Login' })
  }
  if (to.meta.guest && store.state.user) {
    next({ name: 'Home' })
  } else next()
})

export default router
