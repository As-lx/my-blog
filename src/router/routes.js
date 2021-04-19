// import Home from "../views/home/index";
// import About from "../views/about/index";
// import Project from "../views/project/index";
// import Blog from "../views/blog/index";
// import Message from "../views/message/index";
// import Detail from "../views/blog/detail";
import "nprogress/nprogress.css"
import {start,done,configure} from "nprogress"
configure({
  trickleSpeed: 20,   //进度条速度
  showSpinner: false,  //是否显示加载小圆圈
})
function delay(duration) {
  return new Promise((resolve => {
    setTimeout(()=>{},duration)
  }))
}
function getPageComponent(pageCompResolve) {
    return async ()=>{
      // console.log("组件开始加载");
      start();
      if(process.env.Node_ENV==="development"){
        await delay(2000)
      }
      const comp=await pageCompResolve();
      // console.log("组件加载结束");
      done()
      return comp;
    }
}
//异步组件
//路由匹配规则
export default [
  {path:"/",name:"Home",component:getPageComponent(()=>import("@/views/home")),meta:{title:"首页"}},
  {path:"/about",name:"About",component:getPageComponent(()=>import("@/views/about")),meta:{title:"关于我"}},
  {path:"/project",name:"Project",component:getPageComponent(()=>import("@/views/project")),meta:{title:"项目&&效果"}},
  {path:"/blog",name:"Blog",component:getPageComponent(()=>import("@/views/blog")),meta:{title:"文章"}},
  {path:"/blog/cate/:categoryId",name:"BlogCategory",component:getPageComponent(()=>import("@/views/blog")),meta:{title:"文章"}},
  {path:"/message",name:"Message",component:getPageComponent(()=>import("@/views/message")),meta:{title:"留言板"}},
  {path:"/blog/:blogId",name:"BlogDetail",component: getPageComponent(()=>import("@/views/blog/detail")),meta:{title:"文章详情"}},
  {path:"*",name:"NotFound",component:getPageComponent(()=>import("@/views/notFound"))}
]