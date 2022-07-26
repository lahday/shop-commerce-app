<template>
<div class="landing-image">
   <img :src="require('@/assets/images/landingimage.jpeg')" class="w-full ">
</div>
<div class="text-white landing-content pl-10 w-2/5 font-bold pt-2">
  <div class="text-3xl leading-2 py-2">
    Get all your items in one place and increase your marketability
  </div>
  <div class="text-md py-2">
    Scale up your business by having a virtual store and increase your online presence
  </div>
  <button class="bg-white text-green-secondary px-18 py-3 rounded-lg font-extrabold text-sm">Get Started</button>
</div>

<!-- collections -->
<div class="py-4 text-green-secondary font-bold text-2xl">
    SHOP FROM OUR COLLECTIONS!
</div>
<div class="flex flex-row justify-between pb-4 mx-4">
  <img :src="require('@/assets/images/Group9.svg')" >
  <img :src="require('@/assets/images/ShopCollections.svg')" />
  <img :src="require('@/assets/images/ShopCollections(1).svg')"/>
  <img :src="require('@/assets/images/ShopCollections(2).svg')"/>
  <img :src="require('@/assets/images/ShopCollections(3).svg')" />
  <img :src="require('@/assets/images/ShopCollections(4).svg')" />
  <img :src="require('@/assets/images/Group8.svg')" />
</div>
 
 <!-- trending items-->
 <div class="flex flex-row justify-between text-black mx-10 font-bold py-3">
   <p>TRENDING ITEMS</p>
   <p>VIEW ALL</p>
 </div>
 <section class="w-full flex flex-row justify-center items-center">
   <div class="w-full flex flex-row justify-center items-center border-0">
 <Splide :options="options">
 <SplideSlide>
   <div class="w-full h-50">
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-primary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <p>9” nude colored heels</p>
     <p>NGN 14,500.00</p>
   </div>
 </SplideSlide>
 </Splide>
 </div>
 </section>




  <!-- grow your business -->
 <div class=" bg-green-primary mx-5">
   <p class="text-center text-2xl ">Grow Your Business Using Shopcommerce</p>
   <p class="text-center text-lg">Here Are a Few Reasons Why</p>
   <div class="flex flex-row mx-10 justify-between py-5 text-black">  
     <div class="border mx-4 bg-white px-8 py-3 rounded-md">
       <p class="text-xl font-bold">Absolutely Free With No Limits</p>
       <p class="text-sm py-3">There is no limit to the number of items you can put up.
          Get different classes and categories for these items arranged 
         in an orderly manner that customers can easily find them</p>
        <a href="#" class=" text-green-primary">Learn More</a>
     </div>
     <div class="border mx-4 bg-white px-8 py-3 rounded-md">
       <p class="text-xl font-bold">Help Customer Locate You Faster</p>
       <p class="text-sm py-3">Generate your ShopCommerce link and 
         post them on all your social media platforms. 
         ShopCommerce makes it easy for you increase your number of customers</p>
        <a href="#" class="text-green-primary">Learn More</a>
     </div>
     <div class="border mx-4 bg-white px-8 py-3 rounded-md">
       <p class="text-xl font-bold">Easy Navigation for You & Your customers</p>
       <p class="text-sm py-3">Our Simple and well-arranged structure makes it easy to navigate. 
         Your clients and potential customers can sort through 
         and easily find what they need to buy with no hassle.</p>
        <a href="#" class="text-green-primary">Learn More</a>
     </div>
     <div class="border mx-4 bg-white px-8 py-3 rounded-md">
       <p class="text-xl font-bold">Get Your Business Registered</p>
       <p class="text-sm py-3">Everything you need to register your busness here on ShopCommerce. 
         With just a few clicks, get your Business Name or Company registered without any issue.</p>
        <a href="#" class="text-green-primary">Learn More</a>
     </div>
   </div>
 </div>

 <div class="pt-5 flex flex-row justify-between text-black text-justify items-center mx-10 py-6 ">
   <div class="w-2/4 px-5"> 
   <p class="text-2xl font-bold">Ready to put your Business Out There?</p>
  <p class="text-md">Help your customers find what they are looking for. 
    Put up all your items with no limits. Just a few clicks and you are good to go</p>
   </div>
   <div class="px-3 text-center items-center">
      <button class="text-green-secondary px-16 py-3 rounded-md font-extrabold text-sm border-black border-solid bottom-4 shadow-lg">Get Started</button>
 </div>
 </div>


 <!-- shops near you -->
<div class="py-10">
<div class="flex flex-row justify-between text-black mx-10 font-bold py-3">
   <p> SHOPS NEAR YOU</p>
   <p>VIEW ALL</p>
 </div>
 <section class="w-full flex flex-row justify-center items-center">
   <div class="w-full flex flex-row justify-center items-center border-0">
 <Splide :options="options">
 <SplideSlide>
   <div class="w-full h-50">
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-primary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 </Splide>
 </div>
  </section>
  </div>


<!-- discounted items-->
<div class="py-10">
<div class="flex flex-row justify-between text-black mx-10 font-bold py-3">
   <p>DISCOUNTED ITEMS</p>
   <p>VIEW ALL</p>
 </div>
<section class="w-full flex flex-row justify-center items-center">
   <div class="w-full flex flex-row justify-center items-center border-0">
 <Splide :options="options">
 <SplideSlide>
   <div class="w-full h-50">
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-primary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 <SplideSlide>
   <div>
     <img :src="require('@/assets/images/item1.svg')" />
     <div class="text-green-secondary">
       <p>9” nude colored heels</p>
       <p>NGN 14,500.00</p>
     </div>
   </div>
 </SplideSlide>
 </Splide>
 </div>
  </section>
   </div>


</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'Home',
  components: { Splide, SplideSlide },
  data () {
    return {
      options: {
        rewind: true,
        width: 1350,
        height: 230,
        perPage: 7,
        perMove: 1,
        autoplay: true,
        focus: 'start',
        gap: '0.5rem',
        arrows: true,
        pagination: false,
        speed: 100 
  
      },
    }
  },
}
</script>



<style scoped>
.landing-image{
  position: relative;
}
.landing-content{
  position: absolute;
  top: 130px;
  left: 0px;
  text-align: justify;
}
</style>
