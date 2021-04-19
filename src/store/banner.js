import {getBanners} from "@/api/banner";
export default {
  namespaced:true,
  state:{
    loading:false,
    data:[],
  },
  mutations:{
    setLoading(state, payload) {
      state.loading=payload
    },
    setData(state,payload){
      state.data=payload;
    }
  },
  actions:{
   async fetchBanner(ctx){
     if(ctx.state.data.length!==0){
       //有值得时候不在请求数据
       return;
     }

     ctx.commit("setLoading",true);
     const resp=await getBanners();
     ctx.commit("setData",resp);
     ctx.commit("setLoading",false);

   }
  }
}