<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
  import SiteAside from "./"
  import "@/styles/global.less"
  export default {
    name: "test",
    components:{
      SiteAside
    }
  }
</script>

<style scoped>
 .test-container{
   width:250px;
   height: 600px;
   border:2px solid;
   /*background-color: #000;*/
   margin: 0 auto;
 }
</style>