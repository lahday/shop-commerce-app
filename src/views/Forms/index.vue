<template>
  <div class="flex justify-center items-center">
    <component :is='component'></component>
  </div>
</template>


<script>
import Create from '@/components/Create.vue' 
import Login from '@/components/Login.vue' 
import Ownercreate from '@/components/Ownercreate.vue' 
import Ownersignup from '@/components/Ownersignup.vue' 
import SignUp from '@/components/SignUp.vue' 
import Successful from '@/components/Successful.vue' 

export default {
  name:'index-comp',
  components: {
    Create,Login,Ownercreate, Ownersignup ,SignUp, Successful
  },
  data() {
    return {
      component: this.$route.params.form
  }
}
}

</script>













// import { createForms, createWebHistory } from 'vue-forms';
// import Ownersignup from '../components/Ownersignup.vue'
// import Ownercreate from '../components/Ownercreate.vue'
// import Login from '../components/Login.vue'



// const forms = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/ownersignup',
//     name: 'Ownersignup',
//     component: Ownersignup
//   },
//   {
//     path: '/ownercreated',
//     name: 'Ownercreate',
//     component: Ownercreate
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   }
// ]

// const forms = createForms({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default forms
