import "./mock/index"
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import isLoading from "./directives/isLoading";
// import "./api/banner"
Vue.config.productionTip = false;
import showMessage from "./utils/showMessage"
Vue.prototype.$showMessage=showMessage;
Vue.directive("Loading",isLoading);
import * as getData from "./api/blog";
getData.getBlog("1").then(res=>{
  console.log(res)});
getData.postComment({
  nickname:"昵称",
  content:"评论内容",
  blogId:"123"
}).then(res=>{
  console.log(res)
})
getData.getComments("123").then(res=>{
  console.log(res)
})
const vm=new Vue({
  router,
  render: h => h(App)
}).$mount('#app')