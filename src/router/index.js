import { createRouter, createWebHistory } from 'vue-router'
import AddNewTickets from '../views/AddNewTickets.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PublicFaq from '../views/PublicFaq.vue'
import TicketsDetail from '../views/TicketsDetail.vue'
import TicketsPage from '../views/AddNewTickets.vue'

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
		meta: { requiresAuth: false }
	},
	{
		path: '/public-faq',
		name: 'PublicFaq',
		component: PublicFaq,
		meta: { requiresAuth: false }
	},
	{
		path: '/add-new-ticket',
		name: 'AddNewTicket',
		component: AddNewTickets,
		meta: { requiresAuth: true }
	},
	{
		path: '/tickets',
		name: 'TicketsPage',
		component: TicketsPage,
		meta: { requiresAuth: true }
	},
	{
		path: '/ticket-details',
		name: 'TicketsPDetail',
		component: TicketsDetail,
		meta: { requiresAuth: true }
	}
	
	
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router