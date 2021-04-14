<template>
  <ul class="right-list-container">
    <li v-for="(item,index) in list"  :key="index" >
      <span :class="{active:item.isSelected}" @click="handleClick(item)">{{item.name}}</span>
      <span v-if="item.aside" :class="{active:item.isSelected}" class="aside"   @click="handleClick(item)">{{item.aside}}</span>
      <RightList :list="item.children" @selectItem="handleClick" v-if="item.children"></RightList>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "RightList",
    props:{
  // {name:"xxx",isSelected:true,children:[{name:"xxx",children:...}]}
      list:{
        type:Array,
        default:()=>[]
      }
    },
    methods: {
      handleClick(item) {
        if(!item.isSelected){
          this.$emit("selectItem", item);
        }
      },
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
 .right-list-container{
   margin: 0;
   padding: 0;
   list-style: none;
   li{
     min-height: 40px;
     line-height: 40px;
     font-size: 14px;
     .aside{
       margin-left: 1em;
       font-size: 12px;
       color:@gray;
     }
     span{
       cursor: pointer;
     }
     .active{
       color: @warn;
     }

   }
   .right-list-container{
     margin-left:1em;
   }
 }
</style>