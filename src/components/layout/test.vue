<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          左边栏
        </div>
      </template>
      <div class="main">
        主区域
      </div>
      <template #right>
        <div class="right">
          右边栏
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Layout from "./"
  export default {
    name: "test",
    components:{
      Layout
    }
  }
</script>

<style scoped>
.test-container{
  height: 600px;
  width: 1000px;
  border:2px solid yellow;
  margin: 0 auto;
}
  .left{
    height: 100%;
    width:200px;
    background-color: #0bace6;
  }
  .main{
    height: 100%;
    width: 100%;
    background-color: #0f0f0f;
  }
  .right{
    height: 100%;
    width:200px;
    background-color: #00B83F;
  }
</style>