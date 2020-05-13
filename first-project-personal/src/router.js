import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: LoginPage,
	}]
})