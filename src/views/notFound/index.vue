<template>
  <div class="not-found-container">
      <img src="@/assets/404.png" alt="" />
      <input  type="button" @click="handleClick()" value="返回首页">
      <span>{{count}}秒后将自动返回主页</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:5
    }
  },
  methods:{
    handleClick(){
      this.$router.push("/")
    }
  },
  mounted() {
      const setId=setInterval(()=>{
        this.count--;
        if(this.count===0){
          clearInterval(setId);
          this.handleClick();
        }
      },1000)
  }
};
</script>

<style scoped lang="less">
.not-found-container {
  overflow: hidden;
  position: relative;
  background-color: rgb(230,207,171);
  width: 100%;
  height: 100%;
  /*display: flex;*/
  /*justify-content: center;*/
  /*!*align-items: center;*!*/
  img{
    height:300px;
    width: auto;
    position: absolute;
    left:50%;
    top: 100px;
    transform: translate(-50%);
  }
  input{
    position: absolute;
    top:450px;
    left:50%;
    transform: translate(-50%);
    width: 100px;
    height: 30px;
    border: 1px solid yellowgreen;
    border-radius: 13px;
    box-shadow: none;
    outline: none;
    &:hover{
      background-color: yellowgreen;
    }
  }
  span{
    position: absolute;
    top: 414px;
    left: 50%;
    transform: translate(-50%);
  }
}

</style>
