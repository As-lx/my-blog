(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-641446ea"],{"707c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"projectContainer",staticClass:"project-container"},t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"project-item"},[a("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thumb,expression:"item.thumb"}],staticClass:"thumb"})]),a("div",{staticClass:"info"},[a("h2",[a("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[t._v(" "+t._s(e.name)+" ")])]),e.github?a("a",{staticClass:"github",attrs:{target:"_blank",href:e.github}},[t._v(" github ")]):t._e(),t._l(e.description,(function(e,i){return a("p",{key:i},[t._v(" "+t._s(e)+" ")])}))],2)])})),0)},n=[],r=a("f119"),s=a("5880"),l={mixins:[Object(r["a"])("projectContainer")],computed:Object(s["mapState"])("project",["loading","data"]),created:function(){this.$store.dispatch("project/fetchProject")}},c=l,o=(a("73a0"),a("2877")),u=Object(o["a"])(c,i,n,!1,null,"4aa6ecde",null);e["default"]=u.exports},"73a0":function(t,e,a){"use strict";a("ec2a")},ec2a:function(t,e,a){},f119:function(t,e,a){"use strict";e["a"]=function(t){return{mounted:function(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},methods:{handleMainScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll:function(e){this.$refs[t].scrollTop=e}},beforeDestroy:function(){this.$bus.$emit("mainScroll"),this.$refs[t].removeEventListener("scroll",this.handleScroll),this.$bus.$off("setMainScroll",this.handleSetMainScroll)}}}}}]);
//# sourceMappingURL=chunk-641446ea.b579af4b.js.map