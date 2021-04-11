<template>
  <nav class="menu-container">
    <router-link  :exact="item.exact" :to="{name:item.name}"  v-for="(item,index) in items" :key="index">
      <div class="icon" >
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{item.title}}</span>
    </router-link>
  </nav>
</template>

<script>
  import Icon from "../../icon/Icon";
  export default {
    name: "index",
    data(){
      return {
        items:[{
          name:"Home",
          link:"/",
          title:"首页",
          icon:"home",
          exact:true
        },
          {
            name:"Blog",
          link:"/blog",
          title:"文章",
          icon:"blog",
          exact:true
        },
          {
            name:"About",
          link:"/about",
          title:"关于我",
          icon:"about",
            exact:false
        },
          {
            name:"Project",
          link:"/project",
          title:"项目&效果",
          icon:"code",
            exact:true
        },
          {
            name:"Message",
            link:"/message",
            title:"留言板",
            icon:"chat",
            exact:true
          }
        ]
      }
    },
    components:{
      Icon,
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .menu-container{
    color:@gray;
    margin: 24px 0;
    a{
      display: flex;
      padding: 0 50px;
      align-items: center;
      height: 45px;
      .icon{
        width: 24px;
      }
      &:hover{
        color: #fff;
      }
      &.router-link-active{
        background-color: darken(@words,3%);
      }
    }
  }
</style>