<template>
  <div class="test-container">
       <Empty></Empty>
  </div>
</template>

<script>
  import Empty from "./"
  export default {
    name: "test",
    components:{
      Empty
    }
  }
</script>

<style scoped>
  .test-container{
    width:500px;
    height: 500px;
    border:2px solid;
    margin: 0 50px;
    position: relative;
  }
</style>