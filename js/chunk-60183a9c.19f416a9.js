(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60183a9c"],{"59c3":function(e,t,o){},a3cd:function(e,t,o){"use strict";o("59c3")},a3d3:function(e,t,o){"use strict";o.r(t);o("faef");var c=o("0324"),s=o("bb47"),n=o("e625");const r=e=>(Object(c["pushScopeId"])("data-v-3929e0da"),e=e(),Object(c["popScopeId"])(),e),a={class:"todo-warpper"},l=r(()=>Object(c["createElementVNode"])("div",{class:"todo-header"},"代办清单",-1)),d={class:"todo-inner"},i=r(()=>Object(c["createElementVNode"])("div",{class:"todo-date"},"2023-08-13",-1)),u={class:"todo-list"},h={class:"todo-checkbox-warp"},b=["onClick"],m={key:0,class:"todo-content-text"},j=["onUpdate:modelValue","autofocus","onKeyup"],p={key:0,class:"todo-delete-warp"};var O=Object(c["defineComponent"])({__name:"todo-list",setup(e){const t=Object(c["ref"])([{id:Date.now(),checked:!1,focus:!0,todo:""}]),o={mounted:e=>e.focus()},r=new n["a"];r.connect("database",1).then(e=>{if(r.hasObjectStoreNames("todo")){const e=r.db.transaction(["todo"]).objectStore("todo").getAll();e.onsuccess=function(){t.value=e.result.length>0?e.result:[{id:Date.now(),checked:!1,focus:!0,todo:""}]}}else{const e=[{name:"id",unique:!1},{name:"checked",unique:!1},{name:"focus",unique:!1},{name:"todo",unique:!1},{name:"state",unique:!1},{name:"date",unique:!1}];r.create("todo",e,{keyPath:"id"})}});const O=e=>{e.todo&&(t.value.forEach(e=>{e.focus=!1,r.add("todo",{...e,state:e.checked?2:1,date:(new Date).toLocaleString()})}),t.value.push({id:Date.now(),checked:!1,focus:!0,todo:""}))},k=e=>{t.value.forEach(t=>{t.id===e.id?t.focus=!0:t.focus=!1})},f=(e,o)=>{t.value.splice(o,1)};return(e,n)=>{const r=Object(c["resolveComponent"])("el-checkbox"),v=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",a,[l,Object(c["createElementVNode"])("section",d,[i,Object(c["createElementVNode"])("div",u,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.value,(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:n,class:"todo-item"},[Object(c["createElementVNode"])("div",h,[Object(c["createVNode"])(r,{modelValue:e.checked,"onUpdate:modelValue":t=>e.checked=t,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),Object(c["createElementVNode"])("div",{class:"todo-content-warp",onClick:t=>k(e)},[e.todo&&!e.focus?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",m,Object(c["toDisplayString"])(e.todo),1)):Object(c["createCommentVNode"])("",!0),e.focus?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:1,"onUpdate:modelValue":t=>e.todo=t,autofocus:e.focus,type:"textarea",row:"1",class:"todo-content-textarea",onKeyup:Object(c["withKeys"])(t=>O(e),["enter","native"])},null,40,j)),[[c["vModelText"],e.todo],[o]]):Object(c["createCommentVNode"])("",!0)],8,b),t.value.length>1?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[Object(c["createVNode"])(v,{type:"danger",icon:Object(c["unref"])(s["a"]),circle:"",onClick:t=>f(e,n)},null,8,["icon","onClick"])])):Object(c["createCommentVNode"])("",!0)]))),128))])])])}}}),k=(o("a3cd"),o("680e")),f=o.n(k);const v=f()(O,[["__scopeId","data-v-3929e0da"]]);t["default"]=v},bb47:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var c=o("0324"),s=o("8a48");const n=Object(c["defineComponent"])({name:"Delete"}),r={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},a=Object(c["createElementVNode"])("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"},null,-1),l=[a];function d(e,t,o,s,n,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",r,l)}var i=Object(s["a"])(n,[["render",d]])},e625:function(e,t,o){"use strict";class c{constructor(){this.db=null,this.request=null}connect(e,t=1){return new Promise((o,c)=>{this.request=window.indexedDB.open(e,t),this.request.onsuccess=e=>{this.db=this.request.result,o(e),this.success(e,"数据库打开成功")},this.request.onerror=e=>{c(e),this.error(e,"数据库打开报错")},this.request.onupgradeneeded=e=>{this.db=e.target.result,o(e),this.success(null,"数据库升级成功")}})}upgrad(e){this.db=e.target.result}add(e,t){const o=this.db.transaction([e],"readwrite").objectStore(e).add(t);o.onsuccess=e=>{this.success(e,"数据写入成功")},o.onerror=e=>{this.error(e,"数据写入失败")}}get(e,t){return new Promise((o,c)=>{const s=this.db.transaction([e]).objectStore(e).get(t);s.onsuccess=()=>{o(s.result),this.success.call(this,s.result,"")},s.onerror=this.error.call(this,"获取失败","")})}update(e,t){const o=this.db.transaction([e],"readwrite").objectStore(e).put(t);o.onsuccess=this.success.call(this,"数据更新成功",""),o.onerror=this.error.call(this,"数据更新失败","")}delete(e,t){const o=this.db.transaction([e],"readwrite").objectStore(e).delete(t);o.onsuccess=this.success.call(this,"数据删除成功",""),o.onerror=this.error.call(this,"数据删除失败","")}cursor(e){return new Promise((t,o)=>{if(this.hasObjectStoreNames(e)){const c=this.db.transaction([e]).objectStore(e).openCursor();c.onsuccess=e=>{t(e.target.result),this.success(e,"遍历表数据成功")},c.onerror=e=>{o(e),this.error(e,"遍历表数据失败")}}else o("表不存在")})}createIndex(e,t){this.db.transaction([e],"readonly").objectStore(e).index(t)}getIndex(e,t,o){return new Promise((c,s)=>{const n=this.db.transaction([e],"readonly").objectStore(e).index(t).get(o);n.onsuccess=e=>{const t=e.target.result;t?c(t):s(e)},n.onerror=e=>{s(e),this.error.call(this,"获取索引失败","")}})}hasObjectStoreNames(e){return this.db.objectStoreNames.contains(e)?(this.success(null,e+" 表已存在"),!0):(this.error(null,e+" 表不存在"),!1)}create(e,t,o){if(!this.db.objectStoreNames.contains(e)){let c=null;c=o.keyPath?this.db.createObjectStore(e,{keyPath:o.keyPath}):this.db.createObjectStore(e,{autoIncrement:!0}),t.forEach(e=>{const t=e.name,o=e.unique;c.createIndex(t,t,{unique:o})})}}success(e,t){console.log(e,t||"success")}error(e,t){console.log(e,t||"error")}}t["a"]=c}}]);
//# sourceMappingURL=chunk-60183a9c.19f416a9.js.map