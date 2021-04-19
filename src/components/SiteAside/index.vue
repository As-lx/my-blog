<template>
  <div class="SiteAside-container" v-if="data">
    <Avatar :url="data.avatar"></Avatar>
    <h1 class="title">{{data.siteTitle}}</h1>
    <Menu></Menu>
    <Concat></Concat>
  </div>
</template>

<script>
  import Avatar from "../avatar/Avatar";
  import Menu from "./menu";
  import Concat from "./concat";
  import {mapState} from "vuex";
  export default {
    name: "index",
    components:{
      Avatar,
      Concat,
      Menu
    },
    computed:mapState("setting",["data"])
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