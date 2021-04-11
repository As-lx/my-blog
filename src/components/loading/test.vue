<template>
    <div style="position: relative" >
        <Loading v-if="isLoading"></Loading>
        <button @click="isLoading=!isLoading">显示/隐藏</button>
    </div>
</template>

<script>
  import Loading from "./index"
  export default {
    name: "index",
      data(){
        return {
            isLoading:true
        }
      },
    components:{
      Loading
    }
  }
</script>

<style scoped>
</style>