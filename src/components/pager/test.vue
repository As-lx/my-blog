<template>
  <div id="app">
    <Pager :total="total" :current="current"  @pageChange="handlePageChange($event)"></Pager>
  </div>
</template>
<script>
  import Pager from "./index"
  import "../../styles/global.less"
  export  default {
    name:"App",//如果组件没有在注册的时候指定名字，则使用该名字
    data(){
      return {
        current:8,
        total:302
      }
    },
    components:{
      Pager
    },
    methods:{
      handlePageChange(pageNumb){
        console.log(pageNumb)
        this.current=pageNumb;

      }
    }
  }
</script>
<style scoped>
  .iconfont{
    color:red;
    font-size: 26px;
  }
</style>
