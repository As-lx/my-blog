<template>
     <ul class="concat-container">
       <li>
         <a :href="data.github" target="_blank">
           <div class="icon">
             <Icon type="github"></Icon>
           </div>
           <span>{{data.githubName}}</span>
         </a>
       </li>
       <li>
         <a :href="`mailto:${data.mail}`">
           <div class="icon">
             <Icon type="mail"></Icon>
           </div>
           <span>{{data.mail}}</span>
         </a>
       </li>
       <li>
         <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
           <div class="icon">
             <Icon type="qq"></Icon>
           </div>
           <span>{{data.qq}}</span>
         </a>
          <!--         弹出图片-->
         <div class="pop qqpop">
           <img :src="data.qqQrCode" alt="">
         </div>
       </li>
       <li>
         <a href="">
           <div class="icon weixin">
             <Icon type="weixin"></Icon>
           </div>
           <span>{{data.weixin}}</span>
         </a>
          <!--弹出图片-->
         <div class="pop">
           <img :src="data.weixinQrCode" alt="">
         </div>
       </li>
     </ul>
</template>

<script>
  import Icon from "../../icon/Icon";
  import {mapState} from "vuex";
  export default {
    name: "index",
    components:{
      Icon
    },
    computed:mapState("setting",["data"])
  }

</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .concat-container{
    list-style: none;
    margin: 0;
    padding: 20px;
    color:@gray;
    @itemHeight:30px;
    li{
      height: 30px;
      line-height: 30px;
      margin: 14px 0;
      cursor: pointer;
      position: relative;
      &:hover{
        .pop{
          transform: scaleY(1);
        }
      }
    }
    a{
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .icon{
      font-size: 26px;
      width:36px;
      &.weixin{
        font-size: 32px;
        text-indent: -2px;
      }
    }
    .pop{
      position: absolute;
      left: 0;
      bottom:@itemHeight+10px;
      padding: 10px 10px;
      background-color: #fff;
      border-radius: 10px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      &.qqpop{
        background-color: rgba(230,230,230);
      }
      img{
        width: 150px;
        height: 150px;
      }
      &::after{
        position: absolute;
        content:"";
        left: 50%;
        bottom:0;
        transform: translate(-50%,50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background-color: #fff;
      }
    }

  }

</style>