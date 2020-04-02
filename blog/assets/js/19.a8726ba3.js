(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{249:function(t,e,a){"use strict";a.r(e);var r=a(29),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器重绘与重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器重绘与重排"}},[t._v("#")]),t._v(" 浏览器重绘与重排")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("当我们在做前端开发的时候，肯定会碰到操作DOM的情况，在操作DOM的时候，就会引起浏览器的重绘与重排。")]),t._v(" "),a("h2",{attrs:{id:"_1-重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-重绘"}},[t._v("#")]),t._v(" 1.重绘")]),t._v(" "),a("p",[t._v("如果DOM变化仅仅影响的了visibility、outline、背景色等等非几何属性，此时就发生了重绘（repaint）而不是重排，因为布局没有发生改变。")]),t._v(" "),a("h2",{attrs:{id:"_2-重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重排"}},[t._v("#")]),t._v(" 2.重排")]),t._v(" "),a("p",[t._v("当DOM变化影响了元素的几何属性（宽、高改变等等），浏览器此时需要重新计算元素几何属性，并且页面中其他元素的几何属性可能会受影响，这样渲染树就发生了改变，也就是重新构造RenderTree渲染树，这个过程叫做重排（reflow）。")]),t._v(" "),a("p",[t._v("以下情况会引发重排：")]),t._v(" "),a("ol",[a("li",[t._v("页面初始渲染")]),t._v(" "),a("li",[t._v("添加/删除可见DOM元素")]),t._v(" "),a("li",[t._v("改变元素位置")]),t._v(" "),a("li",[t._v("改变元素尺寸（宽、高、内外边距、边框等）")]),t._v(" "),a("li",[t._v("改变元素内容（文本或图片等）")]),t._v(" "),a("li",[t._v("改变窗口尺寸")])]),t._v(" "),a("p",[t._v("非商用，侵删，转自: "),a("a",{attrs:{href:"https://blog.csdn.net/i_dont_know_a/article/details/82774269",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/i_dont_know_a/article/details/82774269"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);