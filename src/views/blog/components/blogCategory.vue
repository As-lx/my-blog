<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="datalist" @selectItem="handleSelectItem"></RightList>
  </div>
</template>

<script>
  import RightList from "./RightList";
  import fetchData from "../../../mixins/fetchData";
  import {getBlogCategory} from "../../../api/blog";
  export default {
    mixins:[fetchData([])],
    name: "blogCategory",
    components:{
      RightList
    },
    methods:{
      async fetchData(){
        return await getBlogCategory();
      },
      handleSelectItem(item){
        const query={
          page:1,
          limit:this.limit
        }
        if(item.id===-1){
          this.$router.push({
            name:"Blog",
            query
          })
        }else{
          this.$router.push({
            name:"BlogCategory",
            query,
            params:{
              categoryId:item.id
            }
          })
        }
      }
    },
    computed:{
      categoryId(){
        return this.$route.params.categoryId || -1
      },
      limit(){
        return this.$route.query.limit || 10 ;
      },
      datalist(){
        const totalArticleCount=this.data.reduce((a,b)=> a+Number(b.articleCount),0)
        const result=[{name:"全部",id:-1,articleCount:totalArticleCount},...this.data]
        return result.map(it=>({
          ...it,
          aside:it.articleCount+"篇",
          isSelected:it.id===this.categoryId
        }))
      }
      }

  }
</script>

<style scoped lang="less">
.blog-category-container{
  width:300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
  }
}
</style>