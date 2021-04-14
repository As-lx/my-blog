<template>
  <div class="loading-button-container">
    <button @click="handleClick" :disabled="isLoading">
      {{isLoading ? "loading":"submit"}}
    </button>
    <div class="err">{{err}}</div>
  </div>
</template>

<script>
  export default {
    name: "LoadingButton",
    data(){
      return {
        count:0,
        isLoading:false,
        err:""
      }
    },
    methods:{
     async handleClick(){
        this.count++;
        this.err="";
        this.isLoading=true;
        //第一种方式通过回调函数，向父组件传递消息，等待父组件的处理，在处理回调。
        // this.$emit("itemClick",this.count,(err)=>{
        //   this.isLoading=false;
        //   this.err=err;
        // });
       //$listeners直接获取父组件的方法
       //  if(this.$listeners.click){
       //    console.log("父组件传了");
       //    const result=await this.$listeners.click(this.count);
       //    this.isLoading=false;
       //    this.err=result;
       //    console.log(result)
       //  }
      }
    }
  }
</script>

<style scoped>
   .err{
     color:red;
     font-size: 12px;
   }
</style>