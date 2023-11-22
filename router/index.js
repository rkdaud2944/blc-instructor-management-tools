import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
mode: 'history',
routes: [
{
    path: '/',
    name: 'LoginPage',
    component: Login
},
]
})