import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Arrivals from '../views/Arrivals.vue'
import Brands from '../views/Brands.vue'
import Account from '../views/Account.vue'
import FindStore from '../views/FindStore.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Notfound from '../views/pagenotfound.vue'
import SignUp from '../views/SignUp.vue'
import Create from '../views/Create.vue'
import Login from '../components/Login.vue'
import Successful from '../views/Successful.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/arrivals',
    name: 'Arrivals',
    component: Arrivals
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/findstore',
    name: 'FindStore',
    component: FindStore
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/successful',
    name: 'Successful',
    component: Successful
  },
  {
    path: '/error/page-not-found',
    name: 'NotFound',
    component: Notfound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error/page-not-found'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
