<template>
 <div v-if="!showNeedToRegister" class="bg-green-primary flex flex-row justify-between px-10 py-4 items-center">
    <div class="text-justify text-xl w-2/4">
      <p>Need to Register your Business Name or Company? Get 10% discount when you register using ShopCommerce.</p>
    </div>
    <div class="text-justify w-2/5 pr-10">
      <p class="py-3 text-md">To take advantage of this opportunity, you need to sign up first. Follow the instruction after clicking the link below.</p>
      <button class="bg-white px-17 py-1 rounded-md text-black" @click="getForm('SignUp')">Sign Up</button>
      <p class="font-thin text-sm py-1">
        Already a member? <span @click="getForm('Login')">LogIn</span>
      </p>
    </div>
   </div>

    <div class="bg-black w-screen flex flex-row justify-between text-white px-10 py-4 text-justify">
    <div class="items-list flex flex-row justify-between">  
    <div class="list-1 px-4">
      <p class="font-bold text-sm">SHOP</p>
    <ul class="text-xs py-1 font-light">
      <li> 
        CLOTHING
      </li>
      <li>ACCESSORIES</li>
      <li>GADGET</li>
      <li>COMPUTERS</li>
      <li>PHONES</li>
      <li>DISCOUNTED ITEMS</li>
      <li>HOME APPLIANCES</li>
      <li>OTHER ITEMS</li>
    </ul>
    </div>
    <div class="list-2 px-4">
      <p class="font-bold text-sm">BRANDS</p>
    <ul class="text-xs py-1 font-light">
      <li> OUR STORY</li>
      <li>OUR IMPACT</li>
      <li>GADGET</li>
      <li>COMPUTERS</li>
      <li>PHONES</li>
      <li>DISCOUNTED ITEMS</li>
      <li>HOME APPLIANCES</li>
      <li>OTHER ITEMS</li>
    </ul>
    </div>
    <div class="list-3 px-4">
      <p class="font-bold text-sm">HELP</p>
    <ul class="text-xs py-1 font-light">
      <li> FAQ</li>
      <li>ACCESSIBILTY</li>
      <li>TRACK MY ORDER</li>
      <li>LOCATE A STORE</li>
      <li>RETURN & EXCHANGE</li>
    </ul>
    </div>
    <div class="list-4 px-4">
      <p class="font-bold text-sm">MORE INFO</p>
    <ul class="text-xs py-1 font-light">
      <li> PRIVACY POLICIES</li>
      <li>TERMS OF USE </li>
      <li>DISCLAIMERS</li>
      <li>PARTNERSHIP ENQUIRIES</li>
    </ul>
    </div>
    </div>
    <div class="line">

    </div>
    <div class="contact-sectionn flex flex-col justify-between">
      <div>  
         <p>Follow Us Here</p>
      </div>
      <div>
         <font-awesome-icon icon="fa-brands fa-facebook"  class="px-2 text-xl"/>
         <font-awesome-icon icon="fa-brands fa-instagram" class="px-2 text-xl" />
         <font-awesome-icon icon="fa-brands fa-linkedin" class="px-2 text-xl" />
         <font-awesome-icon icon="fa-brands fa-twitter-square" class="px-2 text-xl rounded-600" />
         <font-awesome-icon icon="fa-regular fa-envelope" class="px-2 text-xl" />
      </div>
      <div>
         <p>Need to keep in touch?</p>
         <p>Send a mail to info@shopcommerce.com <br>
             24 hours, 7 days a week.</p>
      </div>
    </div>
   </div>
</template>


<script>

export default {
  methods: {
    getForm (comp) {
      this.$router.push({
        name: 'Forms',
        params: {
          form: comp
        }
      })
    },
  },
  computed: {
  showNeedToRegister(){
    return this.$route.path==='/SignUp' || this.$route.path==='/Create' || this.$route.path==='/Ownercreate'
    || this.$route.path==='/Ownersignup'
    || this.$route.path==='/Successful'
  }
  }
}
</script>
