<template>
  <div class="test-container">
    <image-loader src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3592887172,3291689206&fm=26&gp=0.jpg"
                  placeholder="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1028905801,1902977906&fm=26&gp=0.jpg"
     @load="handleLoaded"></image-loader>
  </div>
</template>

<script>
  import imageLoader from "./"
  export default {
    name: "test",
    components:{imageLoader},
    methods:{
      handleLoaded(){
        console.log("hello")
      }
    }
  }
</script>

<style scoped>
   .test-container{
     width: 500px;
     height: 400px;
     border:2px solid;
   }
</style>