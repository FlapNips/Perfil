import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'
import SignIn from '@/components/Login/SignIn/SignIn.vue'
import SignJoin from '@/components/Login/SignJoin/SignJoin.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: LoginPage,
	},
	{
		path:'/login',
		component: SignIn
	},
	{
		path:'/register',
		component: SignJoin
	}]
})