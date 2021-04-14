<template>
  <LoadingButton @click="handleItemClick"></LoadingButton>
</template>

<script>
  import LoadingButton from "./LoadingButton";
  export default {
    name: "TestLoadingButton",
    components:{
      LoadingButton
    },
    methods:{
      async handleItemClick(count){
        console.log(123)
        console.log(count)
        //第一种回调函数
        // setTimeout(()=>{
        //   callback("请填写账号")
        // },3000)
        return new Promise((resolve => {
          setTimeout(()=>{
            resolve("有未知错误");
          },3000)
        }))
      }
    }
  }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    text-align: center;
  }
</style>