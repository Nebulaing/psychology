<template>
  <div id="app" :style=" 'height:'+(fullHeight-1)+'px;'">
    <!-- APP.vue作为一级路由出口 -->
    <router-view/>
  </div>

</template>

<script>
  import { provide } from 'vue'
  import axios from 'axios'
export default {
  setup(){
    // provide("echarts", echarts)
    provide("axios", axios)
  },
  name: "app",
  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight(val) {//监控浏览器高度变化
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }

    }
  },
  mounted() {
    this.get_bodyHeight()
  },
  methods: {
    get_bodyHeight() {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    }
  }
}
</script>

<style>
  @import "less/Global.css";

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
