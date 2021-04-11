import LoadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.css"
//判断是否含有loading效果的img元素
function getLoadingImg(el) {
  return  el.querySelector("img[data-role=loading]")
}
function createLoadingImg() {
  const img=document.createElement("img");
  img.dataset.role="loading";
  img.src=LoadingUrl;
  img.className=styles.loading
  return img;
}
export default function(el,binding){
  //根据binding.value的值创建或删除img元素
  const curImg=getLoadingImg(el)
  if(binding.value){
    if(!curImg){
      const img=createLoadingImg();
      el.appendChild(img);
    }
  }else{
    if (curImg){
      curImg.remove()
    }
  }
}

