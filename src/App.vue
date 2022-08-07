<template>
 <Header />
  <router-view/>
 <Footer />
</template>



<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
 components : {
   Header, Footer
 }
}
</script>

<style>
#app {
  font-family: poppins, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

</style>
