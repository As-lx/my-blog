<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="(item,index) in data.rows" :key="index">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{name:'BlogDetail',params:{ blogId:item.id}}">
            <img :src="item.thumb" :alt="item.title" :title="item.title">
          </router-link>
        </div>
        <div class="blogInfo">
          <router-link :to="{name:'BlogDetail',params:{ blogId:item.id}}">
            <h2>{{item.title}}</h2>
          </router-link>
          <div class="detail">
            <span>日期 : {{item.createDate}}</span>
            <span>浏览 : {{item.scanNumber}}</span>
            <span>评论{{item.commentNumber}}</span>
            <router-link :to="{name:'BlogCategory',params:{categoryId:item.category.id}}">{{item.category.name}}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager v-if="data.total"
           :current="Number(routeInfo.page)"
           :total="data.total"
           :limit="Number(routeInfo.limit)"
           :visible-number="10"
           @pageChange="handlePageChange"></Pager>
  </div>
</template>

<script>
  import Pager from "../../../components/Pager";
  import fetchData from "../../../mixins/fetchData";
  import {getBlogs} from "../../../api/blog";

  export default {
    mixins:[fetchData([])],
    name: "blogList",
    components:{
      Pager
    },
    methods:{
      async fetchData(){
        return await getBlogs(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId).then(res=>{
          res.rows=res.rows.sort((a,b)=>parseInt(a.createDate)-parseInt(b.createDate));
         return res
        });
      },
      handlePageChange(newPage){
        const   query={
          page:newPage,
          limit:this.routeInfo.limit
        };
        if(this.routeInfo.categoryId===-1){
          //当前没有分类
          this.$router.push({
            "name":"Blog",
            query
          })
        }else{
          this.$router.push({
            name:"BlogCategory",
            params:{
               categoryId:this.routeInfo.categoryId
            },
            query
          })
        }
      }
    },
    computed:{
      routeInfo(){
        const categoryId=+this.$route.params.categoryId ||-1;
        const page=this.$route.query.page || 1;
        const limit=this.$route.query.limit || 10;
        return {
          categoryId,
          page,
          limit
        }
      }
    },
    watch:{
      async $route(){
        this.isLoading=true;
        //滚动高度为0
        this.$refs.container.scrollTop=0;
       this.data= await this.fetchData();
       this.isLoading=false
      }
    },
    created() {
      // console.log(this.routeInfo);
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .blog-list-container{
    position:relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    line-height: 1.7;
    padding:20px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      li{
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid @gray;
        .thumb{
          flex:0 0 auto;
          margin-right: 15px;
          img{
            display: block;
            max-width: 200px;
            border-radius: 5px;
          }
        }
        .blogInfo{
          flex: 1 1 auto;
          h2 {
            display: inline-block;
            margin: 0;
          }
          .detail{
            font-size: 12px;
            color:@gray;
            span{
              margin-right: 15px;
            }
          }
          .desc{
            margin: 15px 0;
            font-size: 14px;
          }
        }
      }
    }
  }

</style>