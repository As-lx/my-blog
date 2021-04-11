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
Vue.directive("Loading",isLoading)
const vm=new Vue({
  router,
  render: h => h(App)
}).$mount('#app')