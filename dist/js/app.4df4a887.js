(function(e){function t(t){for(var a,s,c=t[0],r=t[1],l=t[2],p=0,u=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o={app:0},i=[];function c(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-0500d753":"f1582711","chunk-11a85da1":"e849f638","chunk-2d0ceb84":"2bb69413","chunk-641446ea":"b579af4b","chunk-6860ae15":"4cc154a4","chunk-699df6ba":"b733b33d","chunk-bc54bd44":"44479119"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-0500d753":1,"chunk-11a85da1":1,"chunk-641446ea":1,"chunk-6860ae15":1,"chunk-699df6ba":1,"chunk-bc54bd44":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0500d753":"1366b3f7","chunk-11a85da1":"b882eaa8","chunk-2d0ceb84":"31d6cfe0","chunk-641446ea":"b461d6a2","chunk-6860ae15":"93c82641","chunk-699df6ba":"637b15c1","chunk-bc54bd44":"da15319c"}[e]+".css",o=r.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===o))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],p=l.getAttribute("data-href");if(p===a||p===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=c(e);var u=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c6d":function(e,t,n){"use strict";var a=n("cebe"),s=n.n(a),o=n("c4f5"),i=s.a.create();i.interceptors.response.use((function(e){return 0!=e.data.code?(Object(o["a"])({content:e.data.msg,type:"error",duration:1e3}),"null"):e.data.data})),t["a"]=i},"0f8c":function(e,t,n){"use strict";t["a"]=function(e,t){var n=null;return function(){for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,s)}),t)}}},"1f69":function(e,t,n){},"205f":function(e,t,n){e.exports=n.p+"img/default.969421d9.gif"},"368d":function(e,t,n){},"38c6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[e._t("left")],2),n("div",{staticClass:"main"},[e._t("default")],2),n("div",{staticClass:"right"},[e._t("right")],2)])},s=[],o={name:"index"},i=o,c=(n("da61"),n("2877")),r=Object(c["a"])(i,a,s,!1,null,"653908ca",null);t["a"]=r.exports},"394c":function(e,t,n){e.exports=n.p+"img/qq.c7760adc.png"},"3be3":function(e,t,n){e.exports={loading:"loading-module_loading_A7JmT"}},4045:function(e,t,n){e.exports=n.p+"img/loading.6cc04d10.svg"},4191:function(e,t,n){"use strict";n("bd15")},"4b51":function(e,t,n){},"4db2":function(e,t,n){"use strict";n("f543")},"536b":function(e,t,n){e.exports={message:"showMessage-module_message_3v7H3","message-info":"showMessage-module_message-info_1ZW3l","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3","message-error":"showMessage-module_message-error_2UIr3",icon:"showMessage-module_icon_3nHuj"}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("96eb"),s=n.n(a);s.a.mock("/api/banner","get",{code:"0",msg:"",data:[{id:"1",midImg:"http://mdrs.yuanjin.tech/img/20201031141507.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031141350.jpg",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var o=n("ade3"),i=n("b383"),c=n.n(i);s.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-15":[{"id|+1":1,name:"分类@id","articleCount|1-200":0," order|+1":1}]}),s.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(e){var t=c.a.parse(e.url);return s.a.mock({code:0,msg:"",data:Object(o["a"])({"total|200-300":0},"rows|".concat(t.limit||10),[{id:"@guid",title:"@ctitle(5,30)",description:"@cparagraph(1,10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-200":0,"commentNumber|0-20":0,"thumb|1":["@image(300x250, @color, #fff, @natural)",null],createDate:"@date()"}])})})),s.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"1",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date()",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n        <figcaption>image-20200421152122793</figcaption>\n    \n      </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),s.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:"@now()","avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),s.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(e){var t=c.a.parse(e.url);return s.a.mock({code:0,msg:"",data:Object(o["a"])({"total|50":0},"rows|".concat(t.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:"@now()","avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})}));var r=n("394c"),l=n.n(r),p=n("fc17"),u=n.n(p),d=n("7795"),m=n.n(d);s.a.mock("/api/setting","get",{code:0,msg:"",data:{avatar:m.a,siteTitle:"我的个人空间",github:"https://github.com/As-lx",qq:"1051663041",qqQrCode:l.a,weixin:"18297406835",weixinQrCode:u.a,mail:"gis_lx@163.com",icp:"黑ICP备17001719号",githubName:"As-lx",favicon:m.a}}),s.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@uuid",name:"@ctitle(1, 10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1, 5)"],thumb:"@image(300x250, @color, #fff, @natural)"}]}),s.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),s.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(e){var t=c.a.parse(e.url);return s.a.mock({code:0,msg:"",data:Object(o["a"])({total:52},"rows|".concat(t.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:"@now()","avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),s.a.setup({timeout:"200-1000"});var h=n("8bbf"),g=n.n(h),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container",attrs:{id:"app"}},[n("Layout",{scopedSlots:e._u([{key:"left",fn:function(){return[n("div",{staticClass:"aside"},[n("SiteAside")],1)]},proxy:!0}])},[n("div",{staticClass:"main"},[n("router-view")],1)]),n("ToTop")],1)},b=[],v=n("38c6"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data?n("div",{staticClass:"SiteAside-container"},[n("Avatar",{attrs:{url:e.data.avatar}}),n("h1",{staticClass:"title"},[e._v(e._s(e.data.siteTitle))]),n("Menu"),n("Concat")],1):e._e()},j=[],w=n("ac14"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu-container"},e._l(e.items,(function(t,a){return n("router-link",{key:a,attrs:{exact:t.exact,to:{name:t.name}}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:t.icon}})],1),n("span",[e._v(e._s(t.title))])])})),1)},k=[],C=n("5c3b"),O={name:"index",data:function(){return{items:[{name:"Home",link:"/",title:"首页",icon:"home",exact:!0},{name:"Blog",link:"/blog",title:"文章",icon:"blog",exact:!0},{name:"About",link:"/about",title:"关于我",icon:"about",exact:!1},{name:"Project",link:"/project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",link:"/message",title:"留言板",icon:"chat",exact:!0}]}},components:{Icon:C["a"]}},_=O,A=(n("4db2"),n("2877")),T=Object(A["a"])(_,x,k,!1,null,"2973d335",null),S=T.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"concat-container"},[n("li",[n("a",{attrs:{href:e.data.github,target:"_blank"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[e._v(e._s(e.data.githubName))])])]),n("li",[n("a",{attrs:{href:"mailto:"+e.data.mail}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[e._v(e._s(e.data.mail))])])]),n("li",[n("a",{attrs:{href:"tencent://message/?Menu=yes&uin="+e.data.qq+"&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[e._v(e._s(e.data.qq))])]),n("div",{staticClass:"pop qqpop"},[n("img",{attrs:{src:e.data.qqQrCode,alt:""}})])]),n("li",[n("a",{attrs:{href:""}},[n("div",{staticClass:"icon weixin"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[e._v(e._s(e.data.weixin))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:e.data.weixinQrCode,alt:""}})])])])},z=[],M=n("5880"),P={name:"index",components:{Icon:C["a"]},computed:Object(M["mapState"])("setting",["data"])},R=P,E=(n("4191"),Object(A["a"])(R,q,z,!1,null,"05917c0a",null)),N=E.exports,L={name:"index",components:{Avatar:w["a"],Concat:N,Menu:S},computed:Object(M["mapState"])("setting",["data"])},H=L,$=(n("8cf3"),Object(A["a"])(H,y,j,!1,null,"53caeabc",null)),D=$.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"to-top-container",on:{click:e.handleClick}},[e._v(" top ")])},J=[],B={name:"index",data:function(){return{show:!1}},methods:{handleScroll:function(e){this.show=!!e&&e.scrollTop>=500},handleClick:function(){this.$bus.$emit("setMainScroll",0)}},created:function(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed:function(){this.$bus.$off("mainScroll",this.handleScroll)}},V=B,G=(n("6525"),Object(A["a"])(V,I,J,!1,null,"3bcf147a",null)),U=G.exports,F=(n("4b51"),{name:"App",components:{Layout:v["a"],SiteAside:D,ToTop:U}}),K=F,Q=(n("7130"),Object(A["a"])(K,f,b,!1,null,"6ff3664a",null)),W=Q.exports,X=n("6389"),Y=n.n(X),Z=n("1da1"),ee=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("a5d8"),n("323e"));function te(e){return new Promise((function(t){setTimeout((function(){}),e)}))}function ne(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object(ee["start"])(),"development"!==Object({NODE_ENV:"production",BASE_URL:"/"}).Node_ENV){t.next=4;break}return t.next=4,te(2e3);case 4:return t.next=6,e();case 6:return n=t.sent,Object(ee["done"])(),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))}Object(ee["configure"])({trickleSpeed:20,showSpinner:!1});var ae=[{path:"/",name:"Home",component:ne((function(){return n.e("chunk-699df6ba").then(n.bind(null,"7abe"))})),meta:{title:"首页"}},{path:"/about",name:"About",component:ne((function(){return n.e("chunk-2d0ceb84").then(n.bind(null,"613f"))})),meta:{title:"关于我"}},{path:"/project",name:"Project",component:ne((function(){return n.e("chunk-641446ea").then(n.bind(null,"707c"))})),meta:{title:"项目&&效果"}},{path:"/blog",name:"Blog",component:ne((function(){return n.e("chunk-6860ae15").then(n.bind(null,"138b"))})),meta:{title:"文章"}},{path:"/blog/cate/:categoryId",name:"BlogCategory",component:ne((function(){return n.e("chunk-6860ae15").then(n.bind(null,"138b"))})),meta:{title:"文章"}},{path:"/message",name:"Message",component:ne((function(){return n.e("chunk-bc54bd44").then(n.bind(null,"1d11"))})),meta:{title:"留言板"}},{path:"/blog/:blogId",name:"BlogDetail",component:ne((function(){return n.e("chunk-0500d753").then(n.bind(null,"7a4f"))})),meta:{title:"文章详情"}},{path:"*",name:"NotFound",component:ne((function(){return n.e("chunk-11a85da1").then(n.bind(null,"8809"))}))}],se=n("bf29");window.VueRouter||g.a.use(Y.a);var oe=new Y.a({routes:ae,mode:"hash"});oe.afterEach((function(e,t){e.meta.title&&se["a"].setRouterTitle(e.meta.title)}));var ie=oe,ce=n("4045"),re=n.n(ce),le=n("3be3"),pe=n.n(le);function ue(e){return e.querySelector("img[data-role=loading]")}function de(){var e=document.createElement("img");return e.dataset.role="loading",e.src=re.a,e.className=pe.a.loading,e}var me=function(e,t){var n=ue(e);if(t.value){if(!n){var a=de();e.appendChild(a)}}else n&&n.remove()},he=n("b85c"),ge=(n("4de4"),new g.a({}));g.a.prototype.$bus=ge;var fe=ge,be=n("0f8c"),ve=n("205f"),ye=n.n(ve),je=[];function we(e){e.dom.src=ye.a;var t=document.documentElement.clientHeight,n=e.dom.getBoundingClientRect(),a=n.height||100;n.top>-a&&n.top<=t&&(e.dom.src=e.src,je=je.filter((function(t){return t!==e})))}function xe(){var e,t=Object(he["a"])(je);try{for(t.s();!(e=t.n()).done;){var n=e.value;we(n)}}catch(a){t.e(a)}finally{t.f()}}function ke(){xe()}fe.$on("mainScroll",Object(be["a"])(ke,50));var Ce={inserted:function(e,t){var n={dom:e,src:t.value};je.push(n),we(n)},unbind:function(e){je=je.filter((function(t){return t.dom!==e}))}},Oe=n("709b"),_e={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchBanner:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0===e.state.data.length){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,Object(Oe["a"])();case 5:n=t.sent,e.commit("setData",n),e.commit("setLoading",!1);case 8:case"end":return t.stop()}}),t)})))()}}},Ae=n("0c6d");function Te(){return Se.apply(this,arguments)}function Se(){return Se=Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ae["a"].get("/api/setting");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Se.apply(this,arguments)}var qe={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchSetting:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.data){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,Te();case 5:if(n=t.sent,e.commit("setData",n),e.commit("setLoading",!1),!n.favicon){t.next=17;break}if(a=document.querySelector("link[rel='shortcut icon']"),!a){t.next=12;break}return t.abrupt("return");case 12:a=document.createElement("link"),a.rel="shortcut icon",a.type="image/x-icon",a.href=n.favicon,document.querySelector("head").appendChild(a);case 17:n.siteTitle&&se["a"].setSiteTitle(n.siteTitle);case 18:case"end":return t.stop()}}),t)})))()}}};function ze(){return Me.apply(this,arguments)}function Me(){return Me=Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ae["a"].get("/api/project");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Me.apply(this,arguments)}var Pe={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchProject:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.data){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,ze();case 5:n=t.sent,e.commit("setData",n),e.commit("setLoading",!1);case 8:case"end":return t.stop()}}),t)})))()}}};window.Vuex||Object(M["install"])(g.a);var Re=new M["Store"]({modules:{banner:_e,setting:qe,project:Pe},strict:!0}),Ee=n("c4f5");g.a.config.productionTip=!1,Re.dispatch("setting/fetchSetting"),g.a.prototype.$showMessage=Ee["a"],g.a.directive("Loading",me),g.a.directive("lazy",Ce);new g.a({router:ie,store:Re,render:function(e){return e(W)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5c3b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{staticClass:"iconfont icon-container",class:e.getFontClass})},s=[],o={home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"},i={name:"icon",props:{type:{type:String,required:!0}},data:function(){return{classMap:o}},computed:{getFontClass:function(){return this.classMap[this.type]}}},c=i,r=(n("cbe5"),n("2877")),l=Object(r["a"])(c,a,s,!1,null,"64cd7680",null);t["a"]=l.exports},"5cfe":function(e,t,n){},6389:function(e,t){e.exports=VueRouter},"647d":function(e,t,n){},6525:function(e,t,n){"use strict";n("647d")},"709b":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("1da1"),s=(n("96cf"),n("0c6d"));function o(){return i.apply(this,arguments)}function i(){return i=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].get("/api/banner");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}},7130:function(e,t,n){"use strict";n("8104")},7795:function(e,t,n){e.exports=n.p+"img/avatar.bba30972.png"},8104:function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"8cf3":function(e,t,n){"use strict";n("1f69")},ac14:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"avatar-img avatar-container",style:{width:e.size+"px",height:e.size+"px"},attrs:{src:e.url}})},s=[],o=(n("a9e3"),{name:"Avatar",props:{url:{type:String,required:!0},size:{type:Number,default:150}}}),i=o,c=(n("fd64"),n("2877")),r=Object(c["a"])(i,a,s,!1,null,"2350e422",null);t["a"]=r.exports},bd15:function(e,t,n){},bf29:function(e,t,n){"use strict";n("99af");var a="",s="";function o(){document.title=a&&a?a&&!s?a:!a&&s?s:"".concat(a,"-").concat(s):"loading..."}t["a"]={setRouterTitle:function(e){a=e,o()},setSiteTitle:function(e){s=e,o()}}},c4f5:function(e,t,n){"use strict";n("99af");var a=n("8bbf"),s=n.n(a),o=function(e,t){var n=new s.a({render:function(n){return n(e,{props:t})}});return n.$mount(),n.$el},i=n("5c3b"),c=n("536b"),r=n.n(c);t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.content||"",n=e.type||"info",a=e.duration||2e3,s=e.container||document.body,c=document.createElement("div"),l=o(i["a"],{type:n});c.innerHTML='<span class="'.concat(r.a.icon,'">').concat(l.outerHTML,"</span><div>").concat(t,"</div>");var p=r.a["message-".concat(n)];c.className="".concat(r.a.message,"  ").concat(p),e.container&&"static"===getComputedStyle(s).position&&(s.style.position="relative"),s.appendChild(c),c.clientHeight,c.style.opacity=1,c.style.transform="translate(-50%,-50%)",setTimeout((function(){c.style.opacity=0,c.style.transform="translate(-50%,-50%) translateY(-25px)",c.addEventListener("transitionend",(function(){c.remove(),e.callback&&e.callback()}),{once:!0})}),a)}},cbe5:function(e,t,n){"use strict";n("368d")},cebe:function(e,t){e.exports=axios},da61:function(e,t,n){"use strict";n("5cfe")},ed3d:function(e,t,n){},f543:function(e,t,n){},fc17:function(e,t,n){e.exports=n.p+"img/weChat.85abb330.png"},fd64:function(e,t,n){"use strict";n("ed3d")}});
//# sourceMappingURL=app.4df4a887.js.map