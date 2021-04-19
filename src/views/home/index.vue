<template>
  <div class="home-container"  v-loading="loading" ref="container" @wheel="handleWheel" @transitionend="transitionEnd">
    <ul class="carousel-container" :style="{marginTop}">
      <li v-for="item in data" :key="item.id">
        <Carouselitem :ref='"showItem"+item.id ':carousel="item"></Carouselitem>
      </li>
    </ul>
    <div class="icon icon-up" v-show="index>0" @click="switchTo(index-1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down" v-show="index<data.length-1" @click="switchTo(index+1)">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li v-for="(item,i) in data" :key="item.id" :class="{active:i===index}" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
  import {getBanners} from "@/api/banner";
  import Carouselitem from "./Carouselitem";
  import Icon from "../../components/icon/Icon";
  import {mapState} from "vuex";
  export default {
    name: "index",
    data(){
      return{
        index:1,  //当前显示第几张
        containerHeight:0,  //容器高度
        switching:false,  //是否正在翻动中
       }
    },
    components:{
      Carouselitem,
      Icon,
    },
    computed: {
      marginTop() {
        return -(this.index) * (this.containerHeight) + "px";
      },
      ...mapState("banner",["loading","data"])
    },
    // async created(){
    //   this.banners=await getBanners();
    //   this.isLoading=false
    // },
    methods:{

      switchTo(i){
        this.index=i;
      },
      handleWheel(e){
        if(this.switching){
          return;
        }
        //向下滚动
        if(e.deltaY>5 && this.index<this.data.length-1){
          this.switching=true;
          this.index++;
          // this.banners=await getBanners();
        }
        //向下滚动
        if(e.deltaY<-5 && this.index>0 ){
          this.switching=true;
          this.index--;
        }
        // this.switching=true;
        // setTimeout( ()=> {
        //   if(e.deltaY<-5){
        //     console.log("上一个");
        //     if(this.index>0){
        //       this.index--;
        //     }
        //   }else if(e.deltaY>5){
        //     console.log("下一个");
        //     if(this.index<this.banners.length-1){
        //       this.index++;
        //     }
        //   }
        //   this.switching=false;
        // },1000)

      },
      transitionEnd(){
        this.switching=false;
      },
      handleResize(){
        this.containerHeight=this.$refs["container"].clientHeight;
      }
    },
    created() {
      this.$store.dispatch("banner/fetchBanner")
    },
    mounted() {
      this.containerHeight=this.$refs.container.clientHeight;
      window.addEventListener("resize",this.handleResize);
    },
    destroyed() {
      window.removeEventListener("resize",this.handleResize)
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles//mixin.less";
  @import "~@/styles/var.less";
 .home-container{
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   ul{
     list-style:none;
     margin: 0;
     padding: 0;
   }
 }
  .carousel-container{
    width: 100%;
    height: 100%;
    transition: 500ms;
    li{
      list-style: none;
      width: 100%;
      height: 100%;

    }
  }
  .icon{
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    color:@gray;
    &.icon-up{
      top:15px;
      animation: jump-up 2s infinite;
    }
    &.icon-down{
      bottom:15px;
      animation: jump-up 2s infinite;
    }
    @jump:5px;
    @keyframes jump-up{
      0%{
        transform: translate(-50%,@jump);
      }
      50%{
        transform: translate(-50%,-@jump);
      }
      100%{
        transform:translate(-50%,@jump);
      }
    }
    @keyframes jump-down{
      0%{
        transform: translate(-50%,-@jump);
      }
      50%{
        transform: translate(-50%,@jump);
      }
      100%{
        transform:translate(-50%,@jump);
      }
    }
  }
  .indicator{
    .self-center();
    transform: translateY(-50%);
    left:auto;
    right:20px;
    li{
      width:7px;
      height: 7px;
      background: @dark;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-bottom:10px;
      cursor: pointer;
      box-sizing: border-box;
      &.active{
        background-color: #fff;
      }
    }
  }
</style>