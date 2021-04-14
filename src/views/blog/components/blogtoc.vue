<template>
  <div class="blog-toc-container">
    <h2>文章目录</h2>
    <RightList :list="tocWithSelect" @selectItem="handleSelectItem"></RightList>
  </div>
</template>

<script>
  import RightList from "./RightList";
  import deboundce from "../../../utils/deboundce";
  export default {
    name: "blogtoc",
    props:{
      toc:{
        type:Array,
      }
    },
    components:{
      RightList
    },
    data(){
      return{
        activeAnchor:""
      }
    },
    methods:{
      handleSelectItem(item){
        location.hash=item.anchor;
      },
      setSelect(scrollDom){
        if(!scrollDom){
          return;
        }
        this.activeAnchor="";//清空之前的状态
        const range=200;
        for(const dom of this.doms){
          if(!dom){
            continue;
          }
          //得到元素距离视口顶部的距离
          const top=dom.getBoundingClientRect().top;
          if(top>=0 && top<=range){
            //在规定的范围内
            this.activeAnchor=dom.id;
            return;
          }else if(top>range){
            return;
          }else{
            //在规定的上方
            this.activeAnchor=dom.id; //先假设自己是激活的，然后继续看后面
          }
        }
      }
    },
    computed:{
      //根据toc属性以及activeAnchor得到带有isSelect数组的toc数组
      tocWithSelect(){
        const getTOC=(toc=[])=>{
          return toc.map(t=>({
            ...t,
            isSelected:t.anchor===this.activeAnchor,
            children:getTOC(t.children)
          }));
        }
        return  getTOC(this.toc);
      },
      // 根据toc得到它们对应的元素
      doms(){
          const doms=[];
          const addToDoms=toc=>{
            for(let t of toc){
              doms.push(document.getElementById(t.anchor));
              if(t.children && t.children.length){
                addToDoms(t.children)
              }
            }
          }
          addToDoms(this.toc);
          return doms;
      }
    },
    created(){
      this.setSelectDebounce=deboundce(this.setSelect,50)
      this.$bus.$on("mainScroll",this.setSelectDebounce)
    },
    destroyed(){
      this.$bus.$off("mainScroll",this.setSelectDebounce);
    }
  }
</script>

<style scoped lang="less">
 .blog-toc-container{
   box-sizing: border-box;
   position: relative;
   overflow-y: auto;
   h2{
     font-size: 1em;
     font-weight: bold;
     letter-spacing: 2px;
     margin: 0;
   }
 }
</style>