<template>
   <div class="test-container">
     <Concat></Concat>
   </div>
</template>

<script>
  import Concat from "./index";
  import "@/styles/global.less";
  export default {
    name: "test",
    components:{
      Concat
    }
  }
</script>

<style scoped>
 .test-container{
   width: 400px;
   height: 400px;
   border:2px solid;
   background-color: #000;
   margin: 0 auto;
   padding-top:200px;
 }
</style>