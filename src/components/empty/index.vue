<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
  </div>
</template>

<script>
  import Icon from "../icon/Icon";
  export default {
    name: "index",
    components:{
      Icon
    },
    props:{
       text:{
         type:String,
         default:"无数据"
       }
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/mixin.less";
  @import "~@/styles/var.less";
 .empty-container{
  .self-center();
 }
  .icon-container{
    font-size: 60px;
    color: @gray;
  }
</style>