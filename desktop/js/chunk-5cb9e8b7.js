(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb9e8b7"],{1148:function(t,e,r){"use strict";var a=r("a691"),n=r("1d80");t.exports="".repeat||function(t){var e=String(n(this)),r="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"466d":function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),i=r("50c4"),o=r("1d80"),c=r("8aa5"),u=r("14c3");a("match",1,(function(t,e,r){return[function(e){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r):new RegExp(e)[t](String(r))},function(t){var a=r(e,t,this);if(a.done)return a.value;var o=n(t),s=String(this);if(!o.global)return u(o,s);var l=o.unicode;o.lastIndex=0;var f,p=[],d=0;while(null!==(f=u(o,s))){var g=String(f[0]);p[d]=g,""===g&&(o.lastIndex=c(s,i(o.lastIndex),l)),d++}return 0===d?null:p}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var i,o;return n&&"function"==typeof(i=e.constructor)&&i!==r&&a(o=i.prototype)&&o!==r.prototype&&n(t,o),t}},7675:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"scroll-wallpaper flex"},[t._l(t.wallPaperData,(function(e,a){return[r("div",{key:a,staticClass:"wallpaper-item flex-center",on:{click:function(r){return t.settingBackgroundImage(e)}}},[r("div",{staticClass:"wi-img flex-center"},[e.error?t._e():r("img",{attrs:{src:e.src,alt:e.src},on:{load:function(r){return t.monitorImages(e,a)},error:function(r){return t.catchImageError(e,a)}}}),r("div",{staticClass:"monitor-img flex-center"},[t._v(t._s(e.error?"加载失败＞︿＜":"···"))])])])]}))],2),r("Page",{staticClass:"page-component",attrs:{current:t.count,"page-size":t.pageSize,total:t.total,simple:""},on:{"on-change":t.changePage}})],1)},n=[],i=(r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("ac1f"),r("3ca3"),r("466d"),r("ddb0"),r("d4ec")),o=r("bee2"),c=r("99de"),u=r("7e84"),s=r("262e"),l=r("9ab4"),f=r("60a3"),p=(r("99af"),r("a9e3"),r("b680"),1084),d=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.pageSize,r=void 0===e?20:e,a=t.params,n=void 0===a?"":a,i=t.width,o=void 0===i?360:i,c=t.height,u=void 0===c?200:c,s=t.pageNum-1,l=r*s,f=[];l<(s+1)*r;l++){var d="https://picsum.photos/id/".concat(l,"/").concat(o,"/").concat(u).concat(n);f.push({src:d,index:l})}return{count:p,data:f}},g=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.count=1,t.total=0,t.pageNum=1,t.pageSize=20,t.wallPaperData=[],t}return Object(s["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.getWallpaper()}},{key:"changePage",value:function(t){this.pageNum=t,this.getWallpaper()}},{key:"getWallpaper",value:function(){var t=d({pageNum:this.pageNum,pageSize:this.pageSize});this.total=t.count;var e=t.data,r=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;c.loading=!0,c.error=!1}}catch(u){a=!0,n=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}this.wallPaperData=e}},{key:"settingBackgroundImage",value:function(t){if(t.error)return this.$Message.error("图片地址错误"),!1;var e=t.src.match(/(http.+\/id\/[0-9]+)/)[0];this.$store.state.userSettingInfo.desktop.desktopBackgroundImage=e,window.localStorage.setItem("userSettingInfo",JSON.stringify(this.$store.state.userSettingInfo))}},{key:"monitorImages",value:function(t,e){this.wallPaperData[e].loading=!1}},{key:"catchImageError",value:function(t,e){this.wallPaperData[e].error=!0}}]),e}(f["d"]);g=l["a"]([f["a"]],g);var h=g,v=h,b=(r("b669"),r("2877")),m=Object(b["a"])(v,a,n,!1,null,"04dfcae8",null);e["default"]=m.exports},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("6eeb"),c=r("5135"),u=r("c6b6"),s=r("7156"),l=r("c04e"),f=r("d039"),p=r("7c73"),d=r("241c").f,g=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,b="Number",m=n[b],I=m.prototype,w=u(p(I))==b,N=function(t){var e,r,a,n,i,o,c,u,s=l(t,!1);if("string"==typeof s&&s.length>2)if(s=v(s),e=s.charCodeAt(0),43===e||45===e){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+s}for(i=s.slice(2),o=i.length,c=0;c<o;c++)if(u=i.charCodeAt(c),u<48||u>n)return NaN;return parseInt(i,a)}return+s};if(i(b,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(w?f((function(){I.valueOf.call(r)})):u(r)!=b)?s(new m(N(e)),r,S):N(e)},y=a?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)c(m,x=y[E])&&!c(S,x)&&h(S,x,g(m,x));S.prototype=I,I.constructor=S,o(n,b,S)}},b669:function(t,e,r){"use strict";var a=r("ccbc"),n=r.n(a);n.a},b680:function(t,e,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),o=r("1148"),c=r("d039"),u=1..toFixed,s=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));a({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,r,a,c,u=i(this),p=n(t),d=[0,0,0,0,0,0],g="",h="0",v=function(t,e){var r=-1,a=e;while(++r<6)a+=t*d[r],d[r]=a%1e7,a=s(a/1e7)},b=function(t){var e=6,r=0;while(--e>=0)r+=d[e],d[e]=s(r/t),r=r%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var r=String(d[t]);e=""===e?r:e+o.call("0",7-r.length)+r}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(g="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,r=e<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,e=52-e,e>0){v(0,r),a=p;while(a>=7)v(1e7,0),a-=7;v(l(10,a,1),0),a=e-1;while(a>=23)b(1<<23),a-=23;b(1<<a),v(1,1),b(2),h=m()}else v(0,r),v(1<<-e,0),h=m()+o.call("0",p);return p>0?(c=h.length,h=g+(c<=p?"0."+o.call("0",p-c)+h:h.slice(0,c-p)+"."+h.slice(c-p))):h=g+h,h}})},ccbc:function(t,e,r){}}]);