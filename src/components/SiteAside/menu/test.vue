<template>
   <div class="test-container">
      <Menu></Menu>
   </div>

</template>

<script>
  import Menu from "./index"
  import "@/styles/global.less";
  export default {
    name: "test",
    components:{
      Menu
    }
  }
</script>

<style scoped >
 .test-container{
    width: 400px;
    height: 400px;
    border:2px solid;
    background-color: #000;
    margin: 0 auto;
 }
</style>