import {getSetting} from "@/api/setting";
import * as titleControl from "@/utils/titleControl";
export default {
  namespaced:true,
  state:{
     loading:false,
     data:null
  },
  mutations:{
    setLoading(state,payload){
      state.loading=payload;
    },
    setData(state,payload){
      state.data=payload;
    }
  },
  actions:{
    async fetchSetting(ctx){
      if(ctx.state.data){
        return;
      }
      ctx.commit("setLoading",true);
      const resp=await getSetting();
      ctx.commit("setData",resp);
      ctx.commit("setLoading",false);
      if(resp.favicon){
       // <link rel="shortcut icon" href="http://GT/img/favicon.png" type="image/x-icon">
        let link=document.querySelector("link[rel='shortcut icon']");
        if(link){
          return ;
        }
        link=document.createElement("link");
        link.rel="shortcut icon";
        link.type="image/x-icon";
        link.href=resp.favicon;
        document.querySelector("head").appendChild(link);
      }
      if(resp.siteTitle){
        titleControl.default.setSiteTitle(resp.siteTitle)
      }
    }
  }
}