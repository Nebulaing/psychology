<template>
  <!--    分页组件-->
  <div>
    <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :current-page="page.currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: ['total', 'currentPage', 'pageSize'],
  name: "page",
  data() {
    return {
      page: {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        length: this.total
      }
    }
  },
  watch:{
    total:{
      handler(newVal, oldVal){
        this.page.length = newVal
      },
      deep:true
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page.pageSize = val;
      console.log(`每页 ${this.page.pageSize} 条`);
      this.$emit("pageChange", this.page);
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
      console.log(`当前页: ${this.page.currentPage}`);
      this.$emit("pageChange", this.page);
    }
  }
}
</script>

<style scoped>
div {
  margin: 2% auto;
}

</style>