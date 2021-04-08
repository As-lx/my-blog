<template>
  <!--  页数>=1时才显示-->
  <div class="pager-container" v-if="totalPage > 1">
    <a href="" :class="{disabled:current===1}" @click.prevent="handleClick(1)">|&lt;&lt;</a>
    <a href="" :class="{disabled:current===1}" @click.prevent="handleClick(current-1)">&lt;</a>
    <a href="" v-for="(item,index) in pageArray" :key="index" :class="{active:item===current}" @click.prevent="handleClick(item)">{{item}}</a>
    <a href="" :class="{disabled:current===totalPage}"  @click.prevent="handleClick(current+1)">&gt;</a>
    <a href="" :class="{disabled:current===totalPage}"  @click.prevent="handleClick(visibleMax)">&gt;&gt;|</a>
  </div>
</template>

<script>
  export default {
    name: "Pager",
    props:{
      current:{
        type:Number,
        default:1
      },
      total:{
        type:Number,
        default:0
      },
      limit:{
        type:Number,
        default:10
      },
      visibleNumber:{
        type:Number,
        default:10
      }
    },
    methods:{
      handleClick(pageNumber){
        if(pageNumber<1){
          pageNumber=1
        }if(pageNumber>this.totalPage){
          pageNumber=this.totalPage
        }
        this.$emit("pageChange",pageNumber)
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.limit);
      },
      visibleMin(){
        let min=this.current-Math.floor(this.visibleNumber/2);
        if(min<=0){
          min=1;
        }
        return min
      },
      visibleMax(){
        let max=this.visibleNumber+this.visibleMin;
        if(max>this.totalPage){
          max=this.totalPage;
        }
        return max
      },
      pageArray(){
        let pageArr=[]
        for(let i=this.visibleMin;i<this.visibleMax;i++ ){
          pageArr.push(i)
        }
        return pageArr
      }
    }
  }
</script>

<style lang="less" scoped>
  /*在样式中“~@”表示src目录，在script中“@”表示src目录*/
  @import "~@/styles/var.less";
  .pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
      color:@primary;
      margin:0 6px;
      &.disabled{
        color:@lightWords;
        cursor: not-allowed;
      }
      &.active{
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
  }

</style>