import Vue from "vue"
import VueRouter from 'vue-router';
import routes from "./routes";
import * as titleControl from "@/utils/titleControl";
if(!window.VueRouter){
  Vue.use(VueRouter)
}
const router=new VueRouter({
  routes,
  mode:"hash"
})
router.afterEach((to,from)=>{
  if(to.meta.title){
    titleControl.default.setRouterTitle(to.meta.title)
  }
})
export default router