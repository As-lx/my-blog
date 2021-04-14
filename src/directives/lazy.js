import eventBus from "@/eventBus";
import debounce from "@/utils/deboundce.js";
import defaultGif from "../../public/img/default.gif"
let imgs=[];
function setImage(img) {
  img.dom.src=defaultGif; //先使用默认图片
  //处理图片
  console.log(img.dom.src)
  //document.documentElement.clientHeight视窗高度
  const clientHeight=document.documentElement.clientHeight;
  const rect=img.dom.getBoundingClientRect();
  const height=rect.height || 100;
  if(rect.top>-height && rect.top<=clientHeight){
    //在视窗范围内
   // const tempImg=new Image();
   // tempImg.onload=function(){
   //   img.dom.src=img.src;
   //
   // }
   // tempImg.src=img.src;
   //  console.log("在视窗范围内")
    img.dom.src=img.src;
   imgs=imgs.filter(i=>i!==img);
  }
}
function setImages() {
  for(const img of imgs){
    setImage(img)
  }
}
function handleScroll(){
  setImages();
}
eventBus.$on("mainScroll",debounce(handleScroll,50))
export default {
  inserted(el,binding){
    const img={
      dom:el,
      src:binding.value,
    }
    imgs.push(img);
    setImage(img)
  },
  unbind(el){
    imgs=imgs.filter((img)=>img.dom!==el)
  }
}