<template>
  <Layout>
    <div  ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"></BlogDetail>
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data"></BlogToc>
      </div>
    </template>
  </Layout>
</template>

<script>
  import fetchData from "../../mixins/fetchData";
  import {getBlog} from "../../api/blog";
  import Layout from "@/components/layout/index";
  import BlogDetail from "./components/blogDetail";
  import BlogToc from  "./components/blogtoc";
  import BlogComment from "./components/blogComment";
  import mainScroll from "../../mixins/mainScroll";
  export default {
    name: "detail",
    mixins:[fetchData(null),mainScroll("mainContainer")],
    data(){
      return {scrollTop:0}
    },
    components:{
      BlogDetail,
      Layout,
      BlogToc,
      BlogComment
    },
    methods:{
      async fetchData(){
        return await getBlog(this.$route.params.blogId);
      }
    },
    updated(){
      const hash=location.hash;
      location.hash="";
      setTimeout(()=>{
        location.hash=hash;
      },50)
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/mixin.less";
  .main-container{
    overflow-y: auto;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  .right-container{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
  }

</style>