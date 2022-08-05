import { createForms, createWebHistory } from 'vue-forms';
import Ownersignup from '../components/Ownersignup.vue'
import Ownercreate from '../components/Ownercreate.vue'
import Login from '../components/Login.vue'



const forms = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ownersignup',
    name: 'Ownersignup',
    component: Ownersignup
  },
  {
    path: '/ownercreated',
    name: 'Ownercreate',
    component: Ownercreate
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const forms = createForms({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default forms
