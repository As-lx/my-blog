<template>
  <div class="img-loader-container">
    <img class="palceholder" :src="placeholder" alt="" v-if="!everythingDone">
    <img class="origin" :src="src" alt="" @load="handleLoad()" :style="{opacity:originOpacity,transition:duration+'ms'}">
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        originLoaded:false, //原图是否加载完成
        everythingDone:false //等待图片转换的时间是否结束
      }
    },
    props: {
      src: {
        type: String,
        require: true
      },
      placeholder: {
        type: String,
        require: true
      },
      duration:{
        type:Number,
        default:500
      }
    },
    methods:{
      handleLoad(){
        this.originLoaded=true;
        setTimeout(()=> {
              this.everything=true;
              this.$emit("load")
        },this.duration)
      }
    },
    computed:{
      originOpacity(){
        return this.originLoaded ? 1:0;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../styles/mixin.less";
  .img-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
    .self-fill();
      //图片比例自适应
      object-fit: cover;
        }
  }
  .origin{
    opacity: 0;
  }
  .palceholder{
    filter: blur(2vw);
  }

</style>