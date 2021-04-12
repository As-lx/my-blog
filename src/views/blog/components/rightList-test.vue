<template>
  <div class="test-container">
    <RightList :list="list" @selectItem="handleSelectItem($event)"></RightList>
  </div>
</template>

<script>
  import RightList from "./RightList";
  export default {
    name: "test",
    data(){
      return {
        list:[{
          name:"a",
          isSelected:false
        },
          {
          name:"b",
          isSelected:false,
            children:[{
              name:"e",
              isSelected:true,
              children:[{
                name:"f",
                isSelected:false
              }]
            }]
        },
          {
          name:"c",
          isSelected:false
        },
          {
          name:"d",
          isSelected:false
        }]
      }
    },
    components:{
      RightList
    },
    methods:{
      handleSelectItem(data){
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>