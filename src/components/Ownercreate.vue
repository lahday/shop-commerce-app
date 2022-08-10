<template>
<div id="Create">
    <div class="header-logo">
            <img :src="require('@/assets/images/Frame 6.png')" />
        </div>
    <div class="container">
        
      <div class="text-center bg-white-500">
        <h1 class="text-green-500 mt-5 mb-3 text text-xl font-bold">Create an Account</h1>
        <h5 class="text-black leading-normal mb-3 font-bold leading-tight">Create an account on ShopCommerce and get all your items <br> all in one place and other benefits.</h5>
        <p class="text-green-600 mb-3 text-sm underline">Already have an account? <a href="#">Sign up</a></p>
        <h2 class="text-green-600 mb-4 text-xl font-bold">New Account As a Business Owner</h2>
        <form @submit.prevent="signUp" class="py-3">
          <div class="form-header text-justify mb-2 flex">
                <div class="">
                 <img :src="require('@/assets/images/Frame 76.png')"/>
                </div>
              <div class="toggle ml-2">
                <p class="text-black font-bold">Business Information</p>
              </div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="email" v-model="email" placeholder="Name of Store">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="password" v-model="password" placeholder="Products/Services">
            </div>
             <div class="form-group svgs">
                <input type="text" class="form-control" id="password" v-model="password" placeholder="Shop/Store Address">
            </div>
             <div class="form-group svgs">
                <input type="file" class="form-control" id="password"  placeholder="Brand Logo">
            </div>
             <div class="form-group svgs">
                <input type="number" class="form-control" id="password" v-model="password" placeholder="Phone Number">
            </div>
            <div class="form-group">
                 <input type="text" class="form-control" id="email" v-model="email" placeholder="Additional Phone Number">
            </div>
             <div class="form-group">
                <input type="text" class="form-control" id="email" v-model="email" placeholder="Is your Business Registered (Yes/No)">
            </div>
             <div class="form-group">
                <input type="text" class="form-control" id="email" v-model="email" placeholder="If yes, Registered Company Name">
            </div>
             <div class="form-group">
                <input type="file" class="form-control" id="email" placeholder="Upload a copy of your CAC">
            </div>
             <div class="form-group">
                <input type="file" class="form-control" id="email" placeholder="Upload a copy of your TIN Certificate">
            </div>
            <div class="sign-btn mx-auto mt-5 mb-5">
                <button type="submit" class="bg-green w-60">SIGN UP</button>
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
.form-header{
    margin-left:26rem;
}
 .form-group{
    margin-bottom: 1rem;
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

</style>
