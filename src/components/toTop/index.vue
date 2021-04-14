<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
        top
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        show:false
      }
    },
    methods:{
      handleScroll(dom){
        if(!dom){
          this.show=false;
          return;
        }
        this.show=dom.scrollTop>=500;
      },
      handleClick(){
        this.$bus.$emit("setMainScroll",0)
      }
    },
    created() {
      this.$bus.$on("mainScroll",this.handleScroll);
    },
    destroyed() {
      this.$bus.$off("mainScroll",this.handleScroll);
    }
  }
</script>

<style scoped lang="less">
 @import "~@/styles/var.less";
  .to-top-container{
    background: @primary;
    width:50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    z-index: 99;
    right: 100px;
    bottom:50px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    color:#fff;
  }
</style>