(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31080e28"],{"431f":function(t,e,i){"use strict";var s=i("5566"),a=i.n(s);a.a},5566:function(t,e,i){},"7abe":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",style:t.homeStyle,on:{touchstart:t.gouStart,touchmove:t.gotEnd,touchend:t.gotEnd}},[t.settingInfo.date.show?i("div",{staticClass:"datetime",style:t.dateStyle},[i("div",{staticClass:"text"},[t._v(t._s(t.time))]),i("div",{staticClass:"text"},[t._v(t._s(t.date))])]):t._e(),t.settingInfo.text.show?i("div",{staticClass:"sentence",style:t.textStyle,domProps:{innerHTML:t._s(t.settingInfo.text.text)}},[t._v(t._s(t.settingInfo.text.text))]):t._e(),t.settingInfo.search.show?i("div",{staticClass:"search flex-items",style:t.searchStyle},[i("div",{staticClass:"search-icon"},[i("div",{staticClass:"select-icon flex-center",on:{click:function(e){e.stopPropagation(),t.iconAllShow=!t.iconAllShow}}},[i("img",{attrs:{src:t.searchType[t.selectIndex].icon,alt:t.searchType[t.selectIndex].title}})]),i("ul",{staticClass:"flex-items",class:t.iconAllShow?"show":"hide"},[t._l(t.searchType,(function(e,s){return[i("li",{key:s,staticClass:"flex1 flex-center",on:{click:function(e){return e.stopPropagation(),t.chooseIndex(s)}}},[i("img",{attrs:{src:e.icon,alt:e.title}})])]}))],2)]),i("div",{staticClass:"search-input flex1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],attrs:{type:"text",spellcheck:"false",placeholder:"..."},domProps:{value:t.word},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},focus:function(e){t.isActive=!0},blur:function(e){t.isActive=!1},input:function(e){e.target.composing||(t.word=e.target.value)}}})]),i("div",{staticClass:"search-btn"},[i("button",{staticClass:"flex-center",on:{click:t.search}},[i("img",{attrs:{src:"/img/search-icon/s.png"}})])])]):t._e(),t.settingInfo.application.show?i("div",{staticClass:"application-list cls",style:t.applicationStyle},[t._l(t.settingInfo.application.list,(function(e,s){return[i("a",{key:s,staticClass:"application-item",attrs:{href:e.url}},[i("div",{staticClass:"app-icon flex-center",style:{backgroundColor:e.backgroundColor}},[i("img",{attrs:{src:"https://api.uomg.com/api/get.favicon?url="+e.url,alt:e.title}})]),i("div",{staticClass:"app-title hidden"},[t._v(t._s(e.title))])])]}))],2):t._e(),i("div",{staticClass:"fix-setting",class:t.fixSettingShow?"showfix":""},[i("div",{staticClass:"top-setting flex-between white-bg"},[i("div",{staticClass:"top-title"},[t._v("设置")]),i("div",{staticClass:"top-close"},[i("Icon",{attrs:{type:"md-close",size:"24"},on:{click:function(e){t.fixSettingShow=!1}}})],1)]),i("div",{staticClass:"bottom-setting"},[i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("是否显示时间")]),i("i-switch",{model:{value:t.settingInfo.date.show,callback:function(e){t.$set(t.settingInfo.date,"show",e)},expression:"settingInfo.date.show"}})],1),t.settingInfo.date.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("距离(顶部百分比距离)")]),i("Slider",{model:{value:t.settingInfo.date.distance,callback:function(e){t.$set(t.settingInfo.date,"distance",e)},expression:"settingInfo.date.distance"}})],1):t._e()]),i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("是否开启文本")]),i("i-switch",{model:{value:t.settingInfo.text.show,callback:function(e){t.$set(t.settingInfo.text,"show",e)},expression:"settingInfo.text.show"}})],1),t.settingInfo.text.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("文本内容(支持html,css,js)")]),i("Input",{staticStyle:{width:"100%"},attrs:{placeholder:"..."},model:{value:t.settingInfo.text.text,callback:function(e){t.$set(t.settingInfo.text,"text",e)},expression:"settingInfo.text.text"}})],1):t._e(),t.settingInfo.text.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("距离(顶部百分比距离)")]),i("Slider",{model:{value:t.settingInfo.text.distance,callback:function(e){t.$set(t.settingInfo.text,"distance",e)},expression:"settingInfo.text.distance"}})],1):t._e()]),i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("是否显示搜索")]),i("i-switch",{model:{value:t.settingInfo.search.show,callback:function(e){t.$set(t.settingInfo.search,"show",e)},expression:"settingInfo.search.show"}})],1),t.settingInfo.search.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("距离(自适应百分比距离)")]),i("Slider",{model:{value:t.settingInfo.search.distance,callback:function(e){t.$set(t.settingInfo.search,"distance",e)},expression:"settingInfo.search.distance"}})],1):t._e(),t.settingInfo.search.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("默认搜索引擎")]),i("Select",{staticStyle:{width:"100%"},on:{"on-change":t.changeDefaultSearch},model:{value:t.settingInfo.search.type,callback:function(e){t.$set(t.settingInfo.search,"type",e)},expression:"settingInfo.search.type"}},t._l(t.searchType,(function(e,s){return i("Option",{key:e.title,attrs:{value:s}},[t._v(t._s(e.title))])})),1)],1):t._e(),t.settingInfo.search.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("搜索框的位置")]),i("Select",{staticStyle:{width:"100%"},model:{value:t.settingInfo.search.location,callback:function(e){t.$set(t.settingInfo.search,"location",e)},expression:"settingInfo.search.location"}},t._l(t.searchLocationList,(function(e){return i("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1):t._e()]),i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("是否显示背景(默认白色)")]),i("i-switch",{model:{value:t.settingInfo.background.show,callback:function(e){t.$set(t.settingInfo.background,"show",e)},expression:"settingInfo.background.show"}})],1),t.settingInfo.background.show?i("radioGroup",{attrs:{vertical:""},model:{value:t.settingInfo.background.radioGroup,callback:function(e){t.$set(t.settingInfo.background,"radioGroup",e)},expression:"settingInfo.background.radioGroup"}},[i("Radio",{attrs:{label:"default"}},[i("div",{staticClass:"radio-text"},[i("div",{staticClass:"radio-name"},[t._v("自带")]),i("div",{staticClass:"radio-description"},[t._v("使用自带的默认壁纸")])])]),i("Radio",{attrs:{label:"follow"}},[i("div",{staticClass:"radio-text"},[i("div",{staticClass:"radio-name"},[t._v("跟随")]),i("div",{staticClass:"radio-description"},[t._v("跟随 "),i("span",{on:{click:function(e){return e.stopPropagation(),t.$router.push("/")}}},[t._v("主页")]),t._v("所设置的 "),i("span",{on:{click:function(e){return e.stopPropagation(),t.$router.push("/wallpaper")}}},[t._v("壁纸")])])])]),i("Radio",{style:"weburl"===t.settingInfo.background.radioGroup?"margin-bottom: 0;":"margin-bottom: 20px;",attrs:{label:"weburl"}},[i("div",{staticClass:"radio-text"},[i("div",{staticClass:"radio-name"},[t._v("在线链接")]),i("div",{staticClass:"radio-description"},[t._v("填入图片的链接")])])]),"weburl"===t.settingInfo.background.radioGroup?i("div",{staticClass:"weburl-input",staticStyle:{"margin-bottom":"20px"}},[i("Input",{model:{value:t.settingInfo.background.weburl,callback:function(e){t.$set(t.settingInfo.background,"weburl",e)},expression:"settingInfo.background.weburl"}})],1):t._e(),i("Radio",{attrs:{label:"local"}},[i("div",{staticClass:"radio-text flex-between flex1"},[i("div",[i("div",{staticClass:"radio-name"},[t._v("本地图片")]),i("div",{staticClass:"radio-description"},[t._v("本地图片转Base64")])]),"local"===t.settingInfo.background.radioGroup?i("div",{staticClass:"choose-image"},[i("span",[t._v("选择文件")]),i("input",{ref:"chooseImage",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.chooseImage}})]):t._e()])]),i("Radio",{attrs:{label:"color"}},[i("div",{staticClass:"radio-text"},[i("div",{staticClass:"radio-name"},[t._v("单色")]),i("div",{staticClass:"radio-description"},[t._v("纯背景颜色")])])]),"color"===t.settingInfo.background.radioGroup?i("div",{staticClass:"color-scroll"},[i("div",{staticClass:"flex-items choose-color"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settingInfo.background.color,expression:"settingInfo.background.color"}],attrs:{type:"color"},domProps:{value:t.settingInfo.background.color},on:{input:function(e){e.target.composing||t.$set(t.settingInfo.background,"color",e.target.value)}}}),i("div",{staticClass:"color-list flex-items"},[t._l(t.colorList,(function(e,s){return[i("div",{key:s,staticClass:"color-item",style:{backgroundColor:e},on:{click:function(i){t.settingInfo.background.color=e}}})]}))],2)])]):t._e()],1):t._e()],1),i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("是否开启网址列表")]),i("i-switch",{model:{value:t.settingInfo.application.show,callback:function(e){t.$set(t.settingInfo.application,"show",e)},expression:"settingInfo.application.show"}})],1),t.settingInfo.application.show?i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("距离(顶部百分比距离)")]),i("Slider",{model:{value:t.settingInfo.application.distance,callback:function(e){t.$set(t.settingInfo.application,"distance",e)},expression:"settingInfo.application.distance"}})],1):t._e(),t.settingInfo.application.show?i("div",{staticClass:"st-item",on:{click:t.websiteTitle}},[i("div",{staticClass:"item-st-title"},[t._v("更新列表(标题和图标)")])]):t._e()]),i("div",{staticClass:"white-bg",on:{click:t.clearStorage}},[t._m(0)]),t._m(1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"st-item"},[i("div",{staticClass:"item-st-title"},[t._v("清除缓存")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"white-bg"},[i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("我")]),i("div",{staticClass:"radio-description"},[t._v("heiyehk")])]),i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("github")]),i("a",{staticClass:"radio-description",attrs:{href:"https://github.com/heiyehk",target:"_brank"}},[i("span",[t._v("github")])])]),i("div",{staticClass:"flex-between st-item"},[i("div",{staticClass:"item-st-title"},[t._v("微信")]),i("div",{staticClass:"radio-description"},[t._v("HY546456")])])])}],n=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("0d03"),i("d3b7"),i("ac1f"),i("3ca3"),i("841c"),i("ddb0"),i("96cf"),i("d4ec")),o=i("bee2"),c=i("99de"),l=i("7e84"),r=i("262e"),d=i("9ab4"),u=i("60a3"),h=i("6ddb"),f=i("f825"),g=i("bc3a"),v=i.n(g),p=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.selectIndex=0,t.searchType=[{title:"百度",icon:"/img/search-icon/bd.png",url:"https://m.baidu.com/s?word="},{title:"360",icon:"/img/search-icon/360.png",url:"https://m.so.com/s?q="},{title:"搜狗",icon:"/img/search-icon/sg.png",url:"https://wap.sogou.com/web/searchList.jsp?keyword="},{title:"谷歌",icon:"/img/search-icon/gg.png",url:"https://www.google.com/search?q="}],t.iconAllShow=!1,t.word="",t.isActive=!1,t.time=Object(h["a"])("hh:mm"),t.date=Object(h["a"])("YYYY-MM-DD"),t.timeInterval=null,t.fixSettingShow=!1,t.settingInfo={text:{show:!1,text:"An apple a day, keeps the doctor away.",distance:70},date:{show:!1,distance:20},search:{show:!0,location:"top",distance:10,type:0},background:{show:!0,radioGroup:"color",weburl:"",color:"#ffffff",defaultBackgroundUrl:"/img/search-icon/bg.png",base64:""},application:{show:!0,distance:40,list:[{title:"",shape:0,url:"http://www.baidu.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://www.kankanwu.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://huya.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://heiyehk.github.io/desktop/#/home",backgroundColor:"#000"}]}},t.searchLocationList=[{label:"顶部",value:"top"},{label:"中间",value:"center"},{label:"底部",value:"bottom"}],t.strtInterval=null,t.intervalNumber=1,t.colorList=["#ffffff","#000000","#2db7f5","#60c0d6","#dddddd"],t}return Object(r["a"])(e,t),Object(o["a"])(e,[{key:"watchSettingInfo",value:function(t,e){e&&window.localStorage.setItem("SETTINGINFO",JSON.stringify(t)),t.date.show&&!this.timeInterval?this.getTime():!t.date.show&&this.timeInterval&&(clearInterval(this.timeInterval),this.timeInterval=null)}},{key:"created",value:function(){var t=this;document.addEventListener("click",(function(){t.iconAllShow=!1})),this.welcome(),this.getStorage(),this.getTime()}},{key:"welcome",value:function(){var t=(new Date).getHours(),e="";t>=0&&t<6?e="凌晨":t>=6&&t<8?e="早上":t>=8&&t<11?e="上午":t>=11&&t<14?e="中午":t>=14&&t<18?e="下午":t>=18&&t<20?e="傍晚":t>=20&&t<25&&(e="晚上"),document.title=e+"好"}},{key:"getTime",value:function(){var t=this;this.settingInfo.date.show&&(this.timeInterval=setInterval((function(){t.time=Object(h["a"])("hh:mm")}),1e3))}},{key:"getStorage",value:function(){var t=window.localStorage.getItem("SETTINGINFO");if(t)try{this.settingInfo=JSON.parse(t)}catch(e){console.error(e)}this.websiteTitle()}},{key:"websiteTitle",value:function(){var t,e,i,s,a,n,o,c,l;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:t=this.settingInfo.application.list,e=!0,i=!1,s=void 0,r.prev=4,a=t[Symbol.iterator]();case 6:if(e=(n=a.next()).done){r.next=17;break}if(o=n.value,o.title){r.next=14;break}return r.next=11,regeneratorRuntime.awrap(v()({method:"GET",url:"https://api.uomg.com/api/get.title?url=".concat(o.url)}));case 11:c=r.sent,l=c.data.title,o.title=l;case 14:e=!0,r.next=6;break;case 17:r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](4),i=!0,s=r.t0;case 23:r.prev=23,r.prev=24,e||null==a.return||a.return();case 26:if(r.prev=26,!i){r.next=29;break}throw s;case 29:return r.finish(26);case 30:return r.finish(23);case 31:case"end":return r.stop()}}),null,this,[[4,19,23,31],[24,,26,30]])}},{key:"chooseIndex",value:function(t){this.selectIndex=t,this.iconAllShow=!1}},{key:"gouStart",value:function(t){var e=this;this.strtInterval&&clearInterval(this.strtInterval),this.strtInterval=setInterval((function(){e.intervalNumber<3?e.intervalNumber+=1:(clearInterval(e.strtInterval),e.touchLong())}),300)}},{key:"gotEnd",value:function(){clearInterval(this.strtInterval),this.intervalNumber=1}},{key:"touchLong",value:function(){this.fixSettingShow=!0}},{key:"changeDefaultSearch",value:function(t){this.selectIndex=t}},{key:"chooseImage",value:function(t){var e=this,i=t.target.files[0],s=new FileReader;s.readAsDataURL(i),s.onload=function(t){var i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(e.canvasDataURL(t));case 2:i=s.sent,e.settingInfo.background.base64=i;case 4:case"end":return s.stop()}}))}}},{key:"canvasDataURL",value:function(t){var e=1048576,i=.9;t.total>0&&t.total<=2*e?i=.9:t.total>2*e&&t.total<=4*e?i=.75:t.total>4*e&&t.total<=7*e?i=.55:t.total>7*e&&t.total<=10*e?i=.35:t.total>10*e&&t.total<=13*e?i=.15:t.total>13*e&&(i=.1),console.log(i);var s=t.currentTarget.result;return new Promise((function(t,e){var a=new Image;a.src=s,a.onload=function(e){var s=e.path[0],a=s.width,n=s.height,o=a/n;n=a/o;var c=document.createElement("canvas"),l=c.getContext("2d"),r=document.createAttribute("width");r.nodeValue=String(a);var d=document.createAttribute("height");d.nodeValue=String(n),c.setAttributeNode(r),c.setAttributeNode(d),l.drawImage(s,0,0,a,n);var u=c.toDataURL("image/jpeg",i);t(u)}}))}},{key:"search",value:function(){window.location.href=this.searchType[this.selectIndex].url+this.word}},{key:"clearStorage",value:function(){var t=this;this.$Modal.confirm({title:"清除缓存",content:"将所有更改变成默认设置",okText:"确认",cancelText:"取消",onOk:function(){window.localStorage.setItem("SETTINGINFO",""),t.fixSettingShow=!1,t.settingInfo={text:{show:!1,text:"An apple a day, keeps the doctor away.",distance:70},date:{show:!1,distance:20},search:{show:!0,location:"top",distance:10,type:0},background:{show:!0,radioGroup:"color",weburl:"",color:"#ffffff",defaultBackgroundUrl:"/img/search-icon/bg.png",base64:""},application:{show:!0,distance:40,list:[{title:"",shape:0,url:"http://www.baidu.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://www.kankanwu.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://huya.com",backgroundColor:"#fff"},{title:"",shape:0,url:"https://heiyehk.github.io/desktop/#/home",backgroundColor:"#000"}]}},t.websiteTitle()}})}},{key:"dateStyle",get:function(){return"top: ".concat(this.settingInfo.date.distance,"%;")}},{key:"textStyle",get:function(){return"top: ".concat(this.settingInfo.text.distance,"%;")}},{key:"searchStyle",get:function(){var t=this.settingInfo.search.location,e=this.settingInfo.search.distance,i="";return"bottom"===t?i="bottom: ".concat(e,"%"):"top"===t?i="top: ".concat(e,"%;"):"center"===t&&(i="top: 50%;transform: translateY(-50%);"),this.isActive&&(i+="box-shadow: 0 0 12px 0 #ccc;"),i}},{key:"homeStyle",get:function(){var t=this.settingInfo.background.radioGroup;if(!this.settingInfo.background.show)return"background-color: #ffffff;";if("default"===t)return'background: url("/img/search-icon/bg.png") center center / cover no-repeat;';if("follow"===t){var e=window.localStorage.getItem("userSettingInfo"),i={};if(e){i=JSON.parse(e);var s=i.desktop.desktopBackgroundImage;if(s)return'background: url("'.concat(s,"/").concat(window.screen.width,"/").concat(window.screen.height,'") center center / cover no-repeat;')}}else{if("weburl"===t)return this.settingInfo.background.weburl="https://picsum.photos/id/337/".concat(window.screen.width,"/").concat(window.screen.height,".jpg"),'background: url("https://picsum.photos/id/337/'.concat(window.screen.width,"/").concat(window.screen.height,'.jpg") center center / cover no-repeat;');if("local"===t)return'background: url("'.concat(this.settingInfo.background.base64,'") center center / cover no-repeat;');if("color"===t)return"background-color: ".concat(this.settingInfo.background.color,";")}}},{key:"applicationStyle",get:function(){return"margin-top: ".concat(this.settingInfo.application.distance,"%;")}}]),e}(u["d"]);d["a"]([Object(u["e"])("settingInfo",{immediate:!0,deep:!0})],p.prototype,"watchSettingInfo",null),p=d["a"]([Object(u["a"])({components:{"i-switch":f["Switch"],Slider:f["Slider"],Select:f["Select"],Option:f["Option"],RadioGroup:f["RadioGroup"],Radio:f["Radio"]}})],p);var w=p,m=w,b=(i("431f"),i("2877")),I=Object(b["a"])(m,s,a,!1,null,"94148f16",null);e["default"]=I.exports}}]);