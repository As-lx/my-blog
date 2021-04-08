<template>
  <div class="SiteAside-container">
    <Avatar url="https://pics2.baidu.com/feed/29381f30e924b899dc8312709eb644930b7bf676.jpeg?token=c1086c61e43fec886c672428052e955b"></Avatar>
    <h1 class="title">As的blog</h1>
    <Menu></Menu>
    <Concat></Concat>
  </div>
</template>

<script>
  import Avatar from "../avatar/Avatar";
  import Menu from "./menu"
  import Concat from "./concat"
  export default {
    name: "index",
    components:{
      Avatar,
      Concat,
      Menu
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .SiteAside-container{
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 20px 0;
    overflow-x:hidden ;
    overflow-y: auto;
  }
  .avatar-container{
    display: block;
    margin: 0 auto;
  }
  .title{
    font-size:1.2em;
    color:#fff;
    text-align: center;
    margin-top:12px;
  }
</style>