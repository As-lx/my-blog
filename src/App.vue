<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <div class="main">
        <router-view></router-view>
      </div>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>
<script>
  import Layout from "./components/layout/index.vue";
  import SiteAside from "./components/SiteAside/index";
  import ToTop from "./components/toTop/index";
  import "./styles/global.less";
  export  default {
    name:"App",
    components:{
      Layout,
      SiteAside,
      ToTop
    }
  }
</script>
<style scoped lang="less">
 @import "~@/styles/mixin.less";
  .app-container{
    .self-fill(fixed);
  }
  .aside{
    width: 250px;
    height: 100%;
  }
</style>
