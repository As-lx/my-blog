import Home from "../views/home/index";
import About from "../views/about/index";
import Project from "../views/project/index";
import Blog from "../views/blog/index";
import Message from "../views/message/index";

//路由匹配规则
export default [
  {path:"/",name:"Home",component:Home},
  {path:"/about",name:"About",component:About},
  {path:"/project",name:"Project",component:Project},
  {path:"/blog",name:"Blog",component:Blog},
  {path:"/message",name:"Message",component:Message}
]