<!--头像组件-->
<template>
  <img class="avatar-img avatar-container" :src="url" :style="{width:size+'px',height:size+'px'}">
</template>

<script>
  export default {
    name: "Avatar",
    props: {
      url:{
        type:String,
        required:true //url必填
      },
      size:{
        type:Number,
        // required:true,
        default:150
      }
    }
  }
</script>

<style scoped>
  /*带有作用域的样式，样式只在该组件内起作用*/
  .avatar-img{
   border-radius: 50%;
    /*宽高比自适应*/
    object-fit: cover;
 }
</style>