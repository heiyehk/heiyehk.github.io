!function(){var e=document.createElement("style");e.innerHTML="._link[data-v-1beefc65]{cursor:pointer}.primary[data-v-1beefc65]{color:#1890ff}.success[data-v-1beefc65]{color:#52c41a}.error[data-v-1beefc65]{color:#f5222d}.layout-header[data-v-1beefc65]{background-color:#fff;box-shadow:0 2px 8px #f0f1f2;position:relative;z-index:1}.left .logo[data-v-1beefc65]{width:40px;height:40px;border-radius:100%;overflow:hidden}.left .logo img[data-v-1beefc65]{display:block;width:100%}.left h1[data-v-1beefc65]{margin-bottom:0;font-size:20px;margin-left:10px}.left a.flex-items:hover h1[data-v-1beefc65]{color:#1890ff!important}.version[data-v-1beefc65]{font-size:14px;display:inline-block;margin-left:20px;box-sizing:border-box;height:14px;line-height:14px;margin-top:30px}.anticon.anticon-copy[data-v-1beefc65]{width:14px;font-size:14px;opacity:1;transition:all .4s}.ant-btn .anticon.anticon-check[data-v-1beefc65]{width:0;font-size:0;opacity:0;position:relative;right:0;transition:all .4s}.button-color-green[data-v-1beefc65]{background-color:#52c41a;border-color:#52c41a;color:#fff;transition:all .4s}.button-color-green .anticon.anticon-copy[data-v-1beefc65]{width:0;font-size:0;opacity:0;transition:all .4s}.button-color-green .anticon.anticon-check[data-v-1beefc65]{width:14px;font-size:14px;opacity:1;position:relative;right:10px;transition:all .4s}._link[data-v-6f0c51f3]{cursor:pointer}.primary[data-v-6f0c51f3]{color:#1890ff}.success[data-v-6f0c51f3]{color:#52c41a}.error[data-v-6f0c51f3]{color:#f5222d}.layout-content[data-v-6f0c51f3]{background-color:#fafafa}",document.head.appendChild(e),System.register(["./vendor-legacy.7497decb.js","./reactiveFormOptions-legacy.78c35196.js","./index-legacy.2dd7f67d.js","./index-legacy.a4db269a.js"],(function(e){"use strict";var t,a,n,o,r,c,i,l,d,s,f,u,p,v,g,b,h,y,m,x,k,_,w,O,C,j,z,L,M;return{setters:[function(e){t=e.i,a=e.q,n=e.I,o=e.d,r=e.C,c=e.s,i=e.D,l=e.u,d=e.t,s=e.v,f=e.b,u=e.M,p=e.E,v=e.p,g=e.h,b=e.r,h=e.o,y=e.c,m=e.w,x=e.g,k=e.x,_=e.e,w=e.y,O=e.z,C=e.j,j=e.a},function(e){z=e.g},function(e){L=e.V},function(e){M=e.c}],execute:function(){var I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var D=function(e,o){var r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){A(e,t,a[t])}))}return e}({},e,o.attrs);return t(n,a(r,{icon:I}),null)};D.displayName="LinkOutlined",D.inheritAttrs=!1;var P=o({components:{CopyOutlined:r,CheckOutlined:c,DeleteOutlined:i,LinkOutlined:D},setup(){const e=l(),a=d();let n=s((()=>e.params.id));const o=s((()=>z(n.value))),r=f(0),c=s((()=>e.path));return{clearCurrMaking:()=>{u.confirm({title:"提示",content:"是否清空全部组件内容",icon:t(p),cancelText:"取消",okText:"确认",onOk(){o.value.__attr__=[]}})},currentIdFormAttr:o,routePath:c,previewCurrentMaking:()=>{window.open(a.resolve(`/drag-form/preview/${n.value}`).href)},version:"0.0.1",copyStatus:r,copyCode:()=>{0===r.value&&(r.value=1,M(L()).then((e=>{console.log(e),r.value=2,setTimeout((()=>{r.value=0}),400)})))}}}});v("data-v-1beefc65");const S={class:"flex-between",style:{height:"100%"}},F={class:"left flex"},T=x("div",{class:"logo"},[x("img",{src:"/project/form/logo.jpg"})],-1),E=x("h1",null,"AntdV表单制作工具",-1),H={class:"version"},V={key:0,class:"right"},q=C(" 复制 "),B=C(" 预览 "),N=C(" 清空 ");g(),P.render=function(e,a,n,o,r,c){const i=b("router-link"),l=b("CopyOutlined"),d=b("CheckOutlined"),s=b("a-button"),f=b("LinkOutlined"),u=b("DeleteOutlined"),p=b("a-layout-header");return h(),y(p,{class:"layout-header"},{default:m((()=>[x("div",S,[x("div",F,[t(i,{class:"flex-items",to:"/drag-form/index"},{default:m((()=>[T,E])),_:1}),x("span",H,k(e.version),1)]),e.routePath.includes("/drag-form/making/")?(h(),_("div",V,[t(s,{type:0===e.copyStatus?"primary":"default",class:w(0!==e.copyStatus?"button-color-green":""),onClick:e.copyCode,disabled:!e.currentIdFormAttr?.__attr__?.length,style:{"margin-right":"20px"}},{icon:m((()=>[t(l),t(d)])),default:m((()=>[q])),_:1},8,["type","class","onClick","disabled"]),t(s,{onClick:e.previewCurrentMaking,disabled:!e.currentIdFormAttr?.__attr__?.length,style:{"margin-right":"20px"}},{icon:m((()=>[t(f)])),default:m((()=>[B])),_:1},8,["onClick","disabled"]),t(s,{type:"primary",danger:"",disabled:!e.currentIdFormAttr?.__attr__?.length,onClick:e.clearCurrMaking},{icon:m((()=>[t(u)])),default:m((()=>[N])),_:1},8,["disabled","onClick"])])):O("",!0)])])),_:1})},P.__scopeId="data-v-1beefc65";var $=e("default",o({components:{DragHeader:P},setup:()=>({})}));$.render=function(e,a,n,o,r,c){const i=b("DragHeader"),l=b("router-view"),d=b("a-layout-content"),s=b("a-layout");return h(),y(s,{style:{height:"100%"}},{default:m((()=>[t(i),t(d,{class:"layout-content"},{default:m((()=>[t(l,null,{default:m((({Component:e})=>[(h(),y(j(e)))])),_:1})])),_:1})])),_:1})},$.__scopeId="data-v-6f0c51f3"}}}))}();