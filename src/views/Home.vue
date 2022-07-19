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
  <button class="bg-white text-green-secondary px-12 py-4 rounded-lg font-extrabold text-sm">Get Started</button>
</div>

<!-- collections -->
<div class="py-4 text-green-secondary font-bold">
    SHOP FROM OUR COLLECTIONS!
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
