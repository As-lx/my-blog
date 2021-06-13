import "./mock/index"
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import VueRouter from "vue-router";
import router from "./router";
import isLoading from "./directives/isLoading";
import lazy from "./directives/lazy";
import store from "./store/index";
Vue.config.productionTip = false;
import showMessage from "./utils/showMessage"
store.dispatch("setting/fetchSetting")
Vue.prototype.$showMessage=showMessage;
Vue.directive("Loading",isLoading);
Vue.directive("lazy",lazy);
import "./eventBus";
const vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')