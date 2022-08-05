<template>
<div id="Create">
    <div class="container">
        <div class="header-logo">
            <img :src="require('@/assets/images/Frame 6.png')" />
        </div>
      <div class="text-center bg-white-500">
        <h1 class="text-green-500 mt-5 mb-3 text text-xl font-bold">Create an Account</h1>
        <h5 class="text-black leading-normal mb-3 font-bold leading-tight">Create an account on ShopCommerce and get all your items <br> all in one place and other benefits.</h5>
        <p class="text-green-600 mb-3 text-sm underline">Already have an account? <a href="#">Sign up</a></p>
        <h2 class="text-green-600 mb-4 text-xl">New Account As a Business Owner</h2>
        <form @submit.prevent="signUp" class="py-3">
            <div class="form-group">
                <input type="text" class="form-control" id="email" v-model="email" placeholder="First Name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="password" v-model="password" placeholder="Last Name">
            </div>
             <div class="form-group svgs">
                <input type="email" class="form-control" id="password" v-model="password" placeholder="Email">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3335 0H2.66683C1.6585 0 0.842663 0.9 0.842663 2L0.833496 14C0.833496 15.1 1.6585 16 2.66683 16H17.3335C18.3418 16 19.1668 15.1 19.1668 14V2C19.1668 0.9 18.3418 0 17.3335 0ZM16.9668 4.25L10.486 8.67C10.1927 8.87 9.80766 8.87 9.51433 8.67L3.0335 4.25C2.94158 4.19371 2.86109 4.11766 2.79689 4.02645C2.7327 3.93525 2.68614 3.83078 2.66002 3.71937C2.63391 3.60796 2.62879 3.49194 2.64497 3.37831C2.66116 3.26468 2.6983 3.15581 2.75417 3.0583C2.81004 2.96079 2.88346 2.87666 2.97 2.811C3.05653 2.74533 3.15438 2.69951 3.25762 2.6763C3.36086 2.65309 3.46734 2.65297 3.57062 2.67595C3.6739 2.69893 3.77184 2.74453 3.8585 2.81L10.0002 7L16.1418 2.81C16.2285 2.74453 16.3264 2.69893 16.4297 2.67595C16.533 2.65297 16.6395 2.65309 16.7427 2.6763C16.8459 2.69951 16.9438 2.74533 17.0303 2.811C17.1169 2.87666 17.1903 2.96079 17.2462 3.0583C17.302 3.15581 17.3392 3.26468 17.3554 3.37831C17.3715 3.49194 17.3664 3.60796 17.3403 3.71937C17.3142 3.83078 17.2676 3.93525 17.2034 4.02645C17.1392 4.11766 17.0587 4.19371 16.9668 4.25Z" fill="#3E563A" fill-opacity="0.47"/>
                </svg>

            </div>
             <div class="form-group svgs">
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.226 8.75H15.717V5C15.717 2.25 13.0007 0 9.68076 0C6.36085 0 3.64456 2.25 3.64456 5V8.75H2.13551C1.38099 8.75 0.626465 9.375 0.626465 10V18.75C0.626465 19.375 1.38099 20 2.13551 20H17.226C17.9805 20 18.7351 19.375 18.7351 18.75V10C18.7351 9.375 17.9805 8.75 17.226 8.75ZM11.1898 17.5H8.17171L8.77533 14.75C8.02081 14.5 7.41719 13.75 7.41719 13.125C7.41719 12.125 8.47352 11.25 9.68076 11.25C10.888 11.25 11.9443 12.125 11.9443 13.125C11.9443 13.875 11.4916 14.5 10.5862 14.75L11.1898 17.5ZM12.6989 8.75H6.66266V5C6.66266 3.625 8.02081 2.5 9.68076 2.5C11.3407 2.5 12.6989 3.625 12.6989 5V8.75Z" fill="#3E563A" fill-opacity="0.47"/>
                </svg>
            </div>
             <div class="form-group svgs">
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Confirm Password">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.226 8.75H15.717V5C15.717 2.25 13.0007 0 9.68076 0C6.36085 0 3.64456 2.25 3.64456 5V8.75H2.13551C1.38099 8.75 0.626465 9.375 0.626465 10V18.75C0.626465 19.375 1.38099 20 2.13551 20H17.226C17.9805 20 18.7351 19.375 18.7351 18.75V10C18.7351 9.375 17.9805 8.75 17.226 8.75ZM11.1898 17.5H8.17171L8.77533 14.75C8.02081 14.5 7.41719 13.75 7.41719 13.125C7.41719 12.125 8.47352 11.25 9.68076 11.25C10.888 11.25 11.9443 12.125 11.9443 13.125C11.9443 13.875 11.4916 14.5 10.5862 14.75L11.1898 17.5ZM12.6989 8.75H6.66266V5C6.66266 3.625 8.02081 2.5 9.68076 2.5C11.3407 2.5 12.6989 3.625 12.6989 5V8.75Z" fill="#3E563A" fill-opacity="0.47"/>
                </svg>
            </div>
            <div class="sign-btn mx-auto">
                <button type="submit" class="bg-green w-60">Continue</button>
            </div>
            <div class="customer mx-auto mt-4 mb-5 flex justify-center align-center">
                <div class="">
                    <a href="#" class="text-green-500 underline">SIGNING UP AS A CUSTOMER  </a>
                </div>
              <div class="toggle ml-3">
                <img :src="require('@/assets/images/Group 54.png')"/>
              </div>
            </div>
            
            
        </form>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>


<style scoped>

 .form-group{
    margin-bottom: 1rem;
 }

 .svgs{
    margin-bottom: 2rem;
 }

 .header-logo{
    width: 100vw;
 }

 .form-control{
    width: 100%;
    max-width: 35%;
    border-radius: 0;
    border: 1px solid #ced4da;
    padding: .5rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }

 .sign-btn{
     width: 100%;
    max-width: 35%;
    border-radius: 0;
    border: 1px solid #ced4da;
    padding: .5rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    background-color: #389246;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }

 svg{
    margin-left: 51rem;
    margin-top: -2rem;
 }


</style>
