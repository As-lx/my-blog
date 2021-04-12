<template>
  <Layout>
    <BlogList></BlogList>
    <template #right>
     <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/components/layout/index";
  import BlogList from "./components/blogList";
  import BlogCategory from "./components/blogCategory";
  export default {
    name: "index",
    components:{
      Layout,
      BlogCategory,
      BlogList
    },
    created() {
      // console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>