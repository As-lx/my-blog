<template>
  <div class="blog-detail-container" >
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span>日期: {{blog.createDate}}</span>
      <span>浏览: {{blog.scanNumber}}</span>
      <span> <a href="#data-form-container">评论: {{blog.commentNumber}}</a></span>
      <span><router-link :to="{name:'BlogCategory',params:{categoryId:blog.category.id}}">{{blog.category.name}}</router-link></span>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
  import "@/styles/markdown.css";
  import "highlight.js/styles/github.css"
  export default {
    name: "blogDetail",
    props:{
      blog:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .blog-detail-container{
    h1{
      text-align: center;
    }
    .aside{
      text-align: center;
      font-size: 12px;
      color:@gray;
      span{
        margin-right: 15px;

      }
    }
  .markdown-body{
    margin: 1em 0;
  }
  }

</style>