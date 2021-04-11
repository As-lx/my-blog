import getComponentRootDom from "./getComponentRootDom";
import Icon from "../components/icon/Icon";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {String} content   消息内容
 * @param  {String} type     消息类型  info error  success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到带容器的郑重；如果不传，则显示到页面中
 */
export  default  function (options={}) {
  const content=options.content || "";
  const type=options.type || "info";
  const duration=options.duration || 2000;
  const container=options.container || document.body;

  //创建消息元素
  const div=document.createElement("div");
  const el=getComponentRootDom(Icon,{
      type,
  })
  div.innerHTML=`<span class="${styles.icon}">${el.outerHTML}</span><div>${content}</div>`
  //设置样式
  const typeClassName=styles[`message-${type}`]
  div.className=`${styles.message}  ${typeClassName}`;
  //将div加到容器中
  //容器的position是否改动过
  if(options.container){
    if(getComputedStyle(container).position==="static"){
      container.style.position="relative";
    }
  }
  container.appendChild(div);
  //浏览器强行渲染
  div.clientHeight;//读取元素的属性、位置等就会造成重新渲染（reflow）
  //回归到正常位置
  div.style.opacity=1;
  div.style.transform=`translate(-50%,-50%)`
  //等一段时间消失
  setTimeout(()=>{
    div.style.opacity=0;
    div.style.transform="translate(-50%,-50%) translateY(-25px)";
    div.addEventListener("transitionend",function () {
          div.remove();
          //运行回调函数
          options.callback && options.callback();
    },{once:true})
  },duration)
}