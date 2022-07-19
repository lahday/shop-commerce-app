<template>
 <Header />
  <router-view/>
 <Footer />
</template>



<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
 components : {
   Header, Footer
 }
}
</script>

<style>
#app {
  font-family: poppins;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

</style>
