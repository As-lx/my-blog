<template>
  <div class="blog-comment-container">
    <MessageArea tilte="评论列表"
                 :subTitle="`(${data.total})`"
                 :list="data.rows"
                 :islistLoading="isLoading"
                 @submit="handleSubmit"></MessageArea>
  </div>
</template>

<script>
  import MessageArea from "@/components/messageArea";
  import fetchData from "../../../mixins/fetchData";
  import {getComments, postComment} from "../../../api/blog";

  export default {
    mixins: [fetchData({total: 0, rows: []})],
    name: "blogComment",
    data() {
      return {
        page: 1,
        limit: 10
      }
    },
    components: {
      MessageArea
    },
    methods: {
      async fetchData() {
        return await getComments(this.$route.params.categoryId, this.page, this.limit)
      },
      // 加载下一页
      async fetchMore() {
        if (!this.hasMore) {
          //没有数据了
          return
        }
        this.isLoading = true;
        this.page++;
        const resp = await this.fetchData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
      },
      async handleSubmit(formData, callback) {
        const resp = await postComment({
          blogId: this.$route.params.blogId,
          ...formData,
        })
        this.data.rows.unshift(resp);
        this.data.total++;
        callback();
      },
      async handleScroll(dom) {
        if (this.isLoading || !dom) {
          return true;
        }
        const range = 100;
        const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
        if (dec <= range) {
          this.fetchMore();
        }
      }
    },
    computed: {
      hasMore() {
        return this.data.rows.length < this.data.total;
      }
    },
    created() {
      this.$bus.$on("mainScroll", this.handleScroll)
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.handleScroll)
    }
  }
</script>

<style scoped>

</style>