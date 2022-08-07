    <template>
    <div class="flex flex-col justify-between main-header">
      <div class="first-header bg-green-primary flex flex-row justify-between text-justify px-10 text-white text-sm font-light">
        <p>Refer a Friend, Get Discount</p>
        <p>Free Shipping for first delivery within Lagos</p>
        <p class="text-sm">X</p>
      </div>
      <div class="mid-header bg-black flex flex-row justify-end px-10 text-white font-bold py-4 text-sm" > 
        <p class="px-5" @click="getform('Login')">LOG IN</p>
        <p class="">CREATE MY STORE</p>
      </div>

      <ul class="nav-header bg-white flex flex-row justify-between items-center py-4 text-black px-10 text-justify">

        <router-link to="/">
            <li @click="makeCurrent('home')" :class="{current : home }" class="flex">  
         <img :src="require('@/assets/images/Vector.svg')" class="pr-2">
        <span class="logo">Shop</span>
        <span class="logo-1">Commerce </span></li>
        </router-link>
       
       <router-link to="/arrivals">
           <li @click="makeCurrent('arrivals')" :class="{ current : arrivals}">New Arrivals</li>
          </router-link>
       
       <router-link to="/shop">
         <li @click="makeCurrent('shop')" :class="{ current : shop }">Shop</li>
       </router-link>
        
        <router-link to="/brands"> 
          <li @click="makeCurrent('brands')" :class="{ current : brands}">Brands</li>
        </router-link>
        
        <form class="search-box border-2 rounded-md w-1/4 ">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-left px-2" />
          <input type="text" placeholder=" search categories and brands" class="text-sm w-5/6">
        </form>

        <router-link to="/about"> 
          <li>About</li>
        </router-link>
        
        <router-link to="/findstore">
          <li>Find A Store</li>
        </router-link>
        
        <router-link to="/account">
          <li @click="makeCurrent('account')" :class="{ current : accoun}">My Account</li>
        </router-link>
        

        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </ul>
    </div>

    </template>

    <script>
      export default {
      data() {
        return {
            arrivals: true,
            shop: false,
          }
        },
    methods: {
       getForm (comp) {
      this.$router.push({
        name: 'Forms',
        params: {
          form: comp
        }
      })
    },
         }
      
      }
    </script>


    <style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Lobster+Two:ital,wght@0,700;1,700&display=swap');
    .main-header{
      z-index: 9999;
    }
    .logo{
      font-style: 'barlow';
      font-family: 'Barlow', sans-serif;
    }
    .logo-1{
      font-style: 'lobster';
      font-family: 'Lobster Two', cursive;
    }
    </style>



