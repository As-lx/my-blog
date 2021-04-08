<template>
  <nav class="menu-container">
    <a :href="item.link" :class="{selected:isSelected(item)}" v-for="(item,index) in items" :key="index">
      <div class="icon" >
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{item.title}}</span>
    </a>

  </nav>
</template>

<script>
  import Icon from "../../icon/Icon";
  export default {
    name: "index",
    data(){
      return {
        items:[{
          link:"/",
          title:"首页",
          icon:"home"
        },
          {
          link:"/blog",
          title:"文章",
          icon:"blog",
            startWith:true
        },
          {
          link:"/about",
          title:"关于我",
          icon:"about"
        },
          {
          link:"/project",
          title:"项目&效果",
          icon:"code"
        },
          {
            link:"/message",
            title:"留言板",
            icon:"chat"
          }
        ]
      }
    },
    components:{
      Icon,
    },
    methods:{
      isSelected(item){
        let link=item.link.toLowerCase();
        let curPath=location.pathname.toLowerCase();
         if(item.startWith){
           return curPath.startsWith(link);
         }else{
           return curPath===link;
         }
      }
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
      &.selected{
        background-color: darken(@words,3%);
      }
    }
  }
</style>