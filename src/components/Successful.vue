<template>
<div id="successful-signup">
    <div class="logo">
            <img :src="require('@/assets/images/success.png')" />
        </div>
    <div class="container">
        
        <div class="text-center">
            <h1 class="first-head mb-3">Create Account</h1>
            <h2 class="text-green-600 mb-4 text-lg">NEW ACCOUNT AS A BUSINESS OWNER</h2>
        </div>
         <div class="form-header text-justify mb-2 flex">
                <div class="">
                 <img :src="require('@/assets/images/figurepic.png')" />
                </div>
              <div class="toggle ml-2">
                <p class="text-black font-bold">Business Information</p>
              </div>
            </div>
            <div class="big-check flex justify-center">
                 <img :src="require('@/assets/images/check.png')" />
            </div>
            <div class="text-center">
                <h1 class="mb-2 text-black font-bold text-xl">Thank you for registering on ShopCommerce</h1>
                <p class="text-black font-semibold mb-3">A verification link has been sent to the email address provided. <br> Kindly click on the link to verify your email address.</p>
                <p class="text-green-500 mb-5">If you did not receive the link, click on the button <br> below to request for a new link.</p>
                <div class="btn1">
                  <a href="#" class="text-green-600 font-semibold">
                    <button>Request for New Link </button>
                  </a>
                </div>
                
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

 .first-head{
    margin-top: 1.5rem;
    font-weight: bolder;
    color: #389246;
    font-size: 1.75rem;
    letter-spacing: 0.20rem;
 }

 .form-header{
    margin-left:27rem;
}

.btn1{
    margin-bottom: 100px;
    margin-top: 35px;
}

.btn1 a{
    background: transparent;
    border:1px solid #389246;
    padding: 12px 35px;
}

.btn1 a:hover{
    background: #389246;
    color: #fff;
}

 


</style>
