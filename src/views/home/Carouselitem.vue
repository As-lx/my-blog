<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carousel-img" :style="imgPosition" ref="img">
        <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="this.showWords"></ImageLoader>
    </div>
    <div class="title" ref="title">
      {{carousel.title}}
    </div>
    <div class="description" ref="des">
      {{carousel.description}}
    </div>
  </div>
</template>

<script>
  import ImageLoader from "@/components/imageLoader";
  import {sex} from "../../../../../../HTML/模块化/es6基本的导出";
  export default {
    name: "Carouselitem",
    data(){
      return {
        titleWidth:0,
        desWidth:0,
        containerSize:null,  //外层容器的尺寸
        innerSize:null,  //里层图片的尺寸
        mouseX:0,   //鼠标横坐标
        mouseY:0   //鼠标纵坐标
      }
    },
    props:["carousel"],
    components:{
      ImageLoader
    },
    methods:{
      //调用该方法显示文字
      showWords(){
        this.$refs["title"].style.opacity=1;
        this.$refs["title"].style.width=0;
        //强制浏览器重新渲染；
        this.$refs["title"].clientWidth;
        this.$refs["title"].style.transition="1s";
        this.$refs["title"].style.width=this.titleWidth+"px";
        this.$refs["des"].style.opacity=1;
        this.$refs["des"].style.width=0;
        //强制浏览器重新渲染；
        this.$refs["des"].clientWidth;
        this.$refs["des"].style.transition="2s 1s";
        this.$refs["des"].style.width=this.desWidth+"px";
      },
      setSize(){
        this.containerSize={
          width:this.$refs["container"].clientWidth,
          height:this.$refs["container"].clientHeight
        }
        this.innerSize={
          width:this.$refs["img"].clientWidth,
          height:this.$refs["img"].clientHeight
        }
      },
      handleMouseMove(e){
        const rect=this.$refs["container"].getBoundingClientRect();
        this.mouseX=e.clientX-rect.left;
        this.mouseY=e.clientY-rect.top;
      },
      handleMouseLeave(){
        this.mouseX=this.center.x;
        this.mouseY=this.center.y
      }
    },
    computed:{
      imgPosition(){
        if(!this.innerSize || !this.containerSize){
            return;
        }
        const extraWidth=this.innerSize.width-this.containerSize.width; //多出的宽度
        const extraHeight=this.innerSize.height-this.containerSize.height  //多出的高度
        const left=-extraWidth/this.containerSize.width*this.mouseX
        const top=-extraHeight/this.containerSize.height*this.mouseY
        return {
          transform:`translate(${left}px,${top}px)`
        }
      },
      center(){
        return {
          x:this.containerSize.width/2,
          y:this.containerSize.height/2
        }
      }
    },
    mounted(){
      this.titleWidth=this.$refs["title"].clientWidth;
      this.desWidth=this.$refs["des"].clientWidth;
      this.setSize();
      window.addEventListener("resize",this.setSize)
      this.mouseX=this.center.x;
      this.mouseY=this.center.y;
    },
    destroyed() {
      window.removeEventListener("resize",this.setSize)
    }
  }
</script>


<style scoped lang="less">
 @import "~@/styles/var.less";
  .carousel-item-container{
    /*background-color: @dark;*/
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .carousel-img{
    width:110%;
    height:110%;
    position: absolute;
    z-index: -1;
    transition: 0.3s;
  }
  .title,.description{
    position: absolute;
    letter-spacing: 3px;
    top:50%;
    left: 30px;
    color:#fff;
    text-shadow: 1px 0 0 rgba(0,0,0,0.5), -1px 0 0 rgba(0,0,0,0.5),0 1px 0 rgba(0,0,0,0.5),
      0 -1px 0 rgba(0,0,0,0.5);
    white-space: nowrap;
    opacity: 0;
    overflow: hidden;
  }
  .title{
    transform: translateY(-50px);
    font-size: 2em;

  }
  .description{
    transform: translateY(10px);
    font-size: 1.2em;
    color:lighten(@gray,20%)
  }
</style>