import axios from "axios";
import showMessage from "../utils/showMessage";
const ins=axios.create();   //创建axios实例
ins.interceptors.response.use(function (resp) {
  if(resp.data.code!=0){
    showMessage({content:resp.data.msg,type:"error",duration:1000})
    return "null";
  }
  return resp.data.data;
})
export  default  ins