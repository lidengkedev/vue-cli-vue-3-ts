(function(e){function t(t){for(var o,c,l=t[0],i=t[1],u=t[2],d=0,s=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(s.length)s.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d1b10591","chunk-2d21a3d2":"5a16bfe3","chunk-4b595a86":"6865fe3b","chunk-523339fe":"32f1514b","chunk-26b3a897":"6a221f35","chunk-3219ff36":"e8cf7ac8","chunk-3ed4ccc7":"ab8e5409","chunk-cfb45ae4":"cf34d37c","chunk-60183a9c":"19f416a9"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4b595a86":1,"chunk-26b3a897":1,"chunk-3219ff36":1,"chunk-3ed4ccc7":1,"chunk-60183a9c":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-4b595a86":"b8cdde4f","chunk-523339fe":"31d6cfe0","chunk-26b3a897":"8cb43612","chunk-3219ff36":"f64f8a06","chunk-3ed4ccc7":"c47570fc","chunk-cfb45ae4":"31d6cfe0","chunk-60183a9c":"fc3a63dc"}[e]+".css",a=i.p+o,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var u=r[l],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===a))return t()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){u=s[l],d=u.getAttribute("data-href");if(d===o||d===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],b.parentNode.removeChild(b),n(r)},b.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e);var s=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-typescript/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var o=n("de97");const c={authCodeList:["produst:search","role:add","role:auth"]},a={SET_AUTH_CODE(e,t){e.authCodeList=t}},r={getPermission({state:{}}){return c.authCodeList},permission(e,t){e.commit("SET_AUTH_CODE",t)}},l={namespaced:!0,state:c,mutations:a,actions:r};var i=l;const u={username:""},d={SET_USERNAME(e,t){e.username=t}},s={username(e,t){e.commit("SET_USERNAME",t)}},b={namespaced:!0,state:u,mutations:d,actions:s};var p=b;const f=Symbol("vue-store");t["a"]=Object(o["a"])({state:{test:"",username:""},mutations:{SET_USERNAME(e,t){e.username=t}},actions:{username(e,t){e.commit("SET_USERNAME",t)}},modules:{permission:i,user:p}})},"3c91":function(e,t,n){},"6ac5":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));const o="TOKENKEY",c=window.sessionStorage;function a(e){c.setItem(o,e)}function r(){return c.getItem(o)}function l(){c.removeItem(o)}},"86f8":function(e,t,n){"use strict";n("3c91")},a41b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var o=n("0324");function c(e,t){const n=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(n)}var a=n("680e"),r=n.n(a);const l={},i=r()(l,[["render",c]]);var u=i,d=n("2a89");Object(d["a"])("/vue-typescript/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var s=n("7542");const b=e=>(Object(o["pushScopeId"])("data-v-830572e2"),e=e(),Object(o["popScopeId"])(),e),p=b(()=>Object(o["createElementVNode"])("h2",null,"后台管理系统",-1)),f={class:"username"},h=b(()=>Object(o["createElementVNode"])("span",null,"商品列表",-1)),m=b(()=>Object(o["createElementVNode"])("span",null,"代办",-1));function O(e,t,n,c,a,r){const l=Object(o["resolveComponent"])("expand"),i=Object(o["resolveComponent"])("el-icon"),u=Object(o["resolveComponent"])("fold"),d=Object(o["resolveComponent"])("el-button"),s=Object(o["resolveComponent"])("el-col"),b=Object(o["resolveComponent"])("avatar"),O=Object(o["resolveComponent"])("switch-button"),j=Object(o["resolveComponent"])("el-row"),v=Object(o["resolveComponent"])("el-header"),g=Object(o["resolveComponent"])("goods"),C=Object(o["resolveComponent"])("list"),k=Object(o["resolveComponent"])("el-menu-item"),w=Object(o["resolveComponent"])("el-sub-menu"),_=Object(o["resolveComponent"])("el-menu"),x=Object(o["resolveComponent"])("el-aside"),N=Object(o["resolveComponent"])("router-view"),y=Object(o["resolveComponent"])("el-main"),V=Object(o["resolveComponent"])("el-container");return Object(o["openBlock"])(),Object(o["createBlock"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{height:"60px"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{gutter:20},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{span:4},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{type:"text",onClick:t[0]||(t[0]=t=>e.is_menu_open=!e.is_menu_open)},{default:Object(o["withCtx"])(()=>[e.is_menu_open?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,size:24,color:"#FFFFFF"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l)]),_:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,size:24,color:"#FFFFFF"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u)]),_:1}))]),_:1})]),_:1}),Object(o["createVNode"])(s,{span:16},{default:Object(o["withCtx"])(()=>[p]),_:1}),Object(o["createVNode"])(s,{span:4,class:"header-right"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{type:"text"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{size:20,color:"#FFFFFF"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b)]),_:1}),Object(o["createElementVNode"])("span",f,Object(o["toDisplayString"])(e.username),1)]),_:1}),Object(o["createVNode"])(d,{type:"text",class:"logout-btn",onClick:e.handleLogout},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{size:20},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O)]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(x,{class:Object(o["normalizeClass"])({"aside-inner":!0,"is-menu-open":e.is_menu_open})},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(_,{router:"","default-active":e.defaultActive,collapse:!e.is_menu_open,"text-color":"#fff","active-text-color":"#ffd04b","background-color":"#545c64",class:"aside-menu"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{index:"1"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g)]),_:1}),h]),default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.menuList,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(k,{key:t,index:e.path},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C)]),_:1}),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(e.meta.title),1)]),_:2},1032,["index"]))),128))]),_:1}),Object(o["createVNode"])(w,{index:"2"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C)]),_:1}),m]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(k,{index:"/todo/todo"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C)]),_:1}),Object(o["createTextVNode"])(" 代办清单 ")]),_:1}),Object(o["createVNode"])(k,{index:"/todo/record"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C)]),_:1}),Object(o["createTextVNode"])(" 代办记录 ")]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])]),_:1},8,["class"]),Object(o["createVNode"])(y,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(N)]),_:1})]),_:1})]),_:1})}n("faef");var j=n("6ac5"),v=n("03d8"),g=n("4850"),C=n("2c28"),k=n("3e04"),w=n("bda8"),_=n("24c3"),x=n("6998"),N=n("9b28"),y=n("0613"),V=Object(o["defineComponent"])({components:{SwitchButton:v["a"],Avatar:g["a"],Expand:C["a"],Fold:k["a"],Goods:w["a"],List:_["a"]},setup(){const e=Object(s["d"])(),t=Object(s["c"])(),n=Object(o["computed"])(()=>t.path),c=Object(o["computed"])(()=>y["a"].state.username),a=Object(o["ref"])(!0),r=e.getRoutes().filter(e=>e.meta.aside);console.log(r);const l=()=>{x["a"].confirm("是否退出登录？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>{Object(j["b"])(),N["ElMessage"].success("操作成功！"),e.push("/login")}).catch(()=>{N["ElMessage"].info("您已取消操作！")})};return{is_menu_open:a,menuList:r,defaultActive:n,username:c,handleLogout:l}}});n("86f8");const E=r()(V,[["render",O],["__scopeId","data-v-830572e2"]]);var S=E;const F=[{path:"/",name:"Home",redirect:"/product/list",component:S,children:[{path:"/home",component:()=>n.e("chunk-2d21a3d2").then(n.bind(null,"bb51")),meta:{title:"首页"}},{path:"/user/list",component:()=>Promise.all([n.e("chunk-523339fe"),n.e("chunk-cfb45ae4")]).then(n.bind(null,"3476")),meta:{title:"用户列表",hidden:!1,aside:!0}},{path:"/role/list",component:()=>Promise.all([n.e("chunk-523339fe"),n.e("chunk-3219ff36")]).then(n.bind(null,"dedf")),meta:{title:"角色列表",hidden:!1,aside:!0}}]},{path:"/product",name:"Product",component:S,meta:{title:"商品",hidden:!1,aside:!1},children:[{path:"/product/list",component:()=>Promise.all([n.e("chunk-523339fe"),n.e("chunk-26b3a897")]).then(n.bind(null,"ed1a")),meta:{title:"商品列表",hidden:!1,aside:!0}}]},{path:"/todo",name:"Todo",component:S,meta:{title:"代办",hidden:!1,aside:!1},children:[{path:"/todo/todo",component:()=>n.e("chunk-60183a9c").then(n.bind(null,"a3d3")),meta:{title:"代办事项",hidden:!1,aside:!1}},{path:"/todo/record",component:()=>n.e("chunk-4b595a86").then(n.bind(null,"beab")),meta:{title:"代办记录",hidden:!1,aside:!1}}]},{path:"/login",name:"Login",component:()=>Promise.all([n.e("chunk-523339fe"),n.e("chunk-3ed4ccc7")]).then(n.bind(null,"dd7b")),meta:{title:"登录"}},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820")),meta:{title:"关于"}}],T=Object(s["a"])({history:Object(s["b"])("/vue-typescript/"),routes:F});var A=T,B=n("da0e"),P=(n("c8f6"),n("a41b"),n("6111")),L=n("d667");A.beforeEach((e,t)=>{document.title="VUE-TYPESCRIPT|"+e.meta.title,console.log({from:t.path,to:e.path});const n=Object(j["a"])();if(!n&&"/login"!==e.path)return"/login"});const M=Object(o["createApp"])(u);M.component("UserFilled",P["a"]),M.component("Lock",L["a"]),M.use(y["a"],y["b"]).use(A).use(B["a"]).mount("#app")}});
//# sourceMappingURL=app.65c45f04.js.map