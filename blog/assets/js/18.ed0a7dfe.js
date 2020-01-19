(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{264:function(t,r,e){"use strict";e.r(r);var a=e(1),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"从输入url到显示网页发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到显示网页发生了什么"}},[t._v("#")]),t._v(" 从输入url到显示网页发生了什么")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在浏览器中输入url到显示网页主要包含两个部分： "),e("strong",[t._v("网络通信和页面渲染")])]),t._v(" "),e("p",[t._v("互联网内各网络设备间的通信都遵循TCP/IP协议，利用TCP/IP协议族进行网络通信时，会通过分层顺序与对方进行通信。分层由高到低分别为：应用层、传输层、网络层、数据链路层。发送端从应用层往下走，接收端从数据链路层网上走")]),t._v(" "),e("h2",{attrs:{id:"_1-浏览器的地址栏输入url并按下回车"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器的地址栏输入url并按下回车"}},[t._v("#")]),t._v(" 1.浏览器的地址栏输入URL并按下回车")]),t._v(" "),e("p",[t._v("我们常见的RUL是这样的:www.baidu.com,域名通常由3部分组成："),e("strong",[t._v("协议 域名 端口号")])]),t._v(" "),e("pre",[e("code",[t._v("1. 协议：主要是HTTP协议，HTTPS协议，FTP协议，FILe协议\n2. 域名：url中间部分为域名或者IP\n3. 端口号：通常默认都是隐藏的 http默认端口号为80 https默认端口号为443\n")])]),t._v(" "),e("p",[t._v("涉及知识点： 跨域\n在前端进行数据请求时，由于浏览器的同源策略，协议，域名，端口号有一个不同会存在跨域请求，需要进行跨域处理，相关的跨域方法点击"),e("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2018/11/19/1672a68aae05f7f6",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://user-gold-cdn.xitu.io/2018/11/19/1672a68aae05f7f6"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_2-dns域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns域名解析"}},[t._v("#")]),t._v(" 2.DNS域名解析")]),t._v(" "),e("p",[t._v("互联网上每一台计算机的唯一标识是它的"),e("strong",[t._v("IP地址")]),t._v("，但是IP地址并不方便记忆。用户更喜欢用方便记忆的网址去寻找互联网上的其它计算机，也就是上面提到的百度的网址。所以互联网设计者需要在用户的方便性与可用性方面做一个权衡，这个权衡就是一个网址到IP地址的转换，这个过程就是DNS解析，即实现了网址到IP地址的转换")]),t._v(" "),e("p",[t._v("解析过程\nDNS解析是一个递归查询的过程。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a52ca7236f3c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}})]),t._v(" "),e("p",[t._v("上述图片是查找www.google.com的IP地址过程。首先在本地域名服务器中查询IP地址，如果没有找到的情况下，本地域名服务器会向根域名服务器发送一个请求，如果根域名服务器也不存在该域名时，本地域名会向com顶级域名服务器发送一个请求，依次类推下去。直到最后本地域名服务器得到google的IP地址并把它缓存到本地，供下次查询使用。")]),t._v(" "),e("p",[t._v("从上述过程中，可以看出网址的解析是一个从右向左的过程: com -> google.com -> www.google.com。但是你是否发现少了点什么，根域名服务器的解析过程呢？事实上，真正的网址是www.google.com.，并不是我多打了一个.，这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，既然是默认情况下，为了方便用户，通常都会省略，浏览器在请求DNS的时候会自动加上，所有网址真正的解析过程为: . -> .com -> google.com. -> www.google.com.。")]),t._v(" "),e("h4",{attrs:{id:"dns优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns优化"}},[t._v("#")]),t._v(" DNS优化")]),t._v(" "),e("p",[t._v("DNS缓存和DNS负载均衡")]),t._v(" "),e("h4",{attrs:{id:"dns缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns缓存"}},[t._v("#")]),t._v(" DNS缓存")]),t._v(" "),e("p",[t._v("DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在你的chrome浏览器中输入:chrome://dns/，你可以看到chrome浏览器的DNS缓存。")])]),t._v(" "),e("li",[e("p",[t._v("系统缓存主要存在/etc/hosts(Linux系统)中:")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a566f8cebd65?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}})]),t._v(" "),e("p",[t._v("DNS负载均衡")]),t._v(" "),e("p",[t._v("真实的互联网世界背后存在成千上百台服务器，大型的网站甚至更多。但是在用户的眼中，它需要的只是处理他的请求，哪台机器处理请求并不重要。DNS可以返回一个合适的机器的IP给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是DNS负载均衡，又叫做DNS重定向")]),t._v(" "),e("h2",{attrs:{id:"_3-建立tcp连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立tcp连接"}},[t._v("#")]),t._v(" 3.建立TCP连接")]),t._v(" "),e("p",[t._v("在通过DNS域名解析后，获取到了服务器的IP地址，在获取到IP地址后，便会开始建立一次连接，这是由TCP协议完成的，主要通过三次握手进行连接。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("第一次握手： 建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；")])]),t._v(" "),e("li",[e("p",[t._v("第二次握手： 服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；")])]),t._v(" "),e("li",[e("p",[t._v("第三次握手： 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。 这里需要了解下"),e("strong",[t._v("ACK，SYN")]),t._v("的意义")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a5a206a7e309?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}}),t._v("\n完成TCP连接后开使向服务器进行请求")]),t._v(" "),e("h2",{attrs:{id:"_4-向服务器发送请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-向服务器发送请求"}},[t._v("#")]),t._v(" 4.向服务器发送请求")]),t._v(" "),e("p",[t._v("完整的HTTP请求包含"),e("strong",[t._v("请求起始行、请求头部、请求主体")]),t._v("三部分。\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a5d02bc0d8fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}})]),t._v(" "),e("h2",{attrs:{id:"_5-服务器接受响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-服务器接受响应"}},[t._v("#")]),t._v(" 5.服务器接受响应")]),t._v(" "),e("p",[t._v("服务器在收到浏览器发送的HTTP请求之后，会将收到的HTTP报文封装成HTTP的Request对象，并通过不同的Web服务器进行处理，处理完的结果以HTTP的Response对象返回，主要包括状态码，响应头，响应报文三个部分。\n状态码主要包括以下部分:")]),t._v(" "),e("pre",[e("code",[t._v("1xx：指示信息–表示请求已接收，继续处理。\n2xx：成功–表示请求已被成功接收、理解、接受。\n3xx：重定向–要完成请求必须进行更进一步的操作。\n4xx：客户端错误–请求有语法错误或请求无法实现。\n5xx：服务器端错误–服务器未能实现合法的请求。\n")])]),t._v(" "),e("p",[e("strong",[t._v("响应头")]),t._v("主要由Cache-Control、 Connection、Date、Pragma等组成。"),e("br"),t._v(" "),e("strong",[t._v("响应体")]),t._v("为服务器返回给浏览器的信息，主要由HTML，css，js，图片文件组成。")]),t._v(" "),e("h2",{attrs:{id:"_6-页面渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-页面渲染"}},[t._v("#")]),t._v(" 6.页面渲染")]),t._v(" "),e("p",[t._v("如果说响应的内容是HTML文档的话，就需要浏览器进行解析渲染呈现给用户。整个过程涉及两个方面：解析和渲染。在渲染页面之前，需要构建DOM树和CSSOM树。  在浏览器还没接收到完整的 HTML 文件时，它就开始渲染页面了，在遇到外部链入的脚本标签或样式标签或图片时，会再次发送 HTTP 请求重复上述的步骤。在收到 CSS 文件后会对已经渲染的页面重新渲染，加入它们应有的样式，图片文件加载完立刻显示在相应位置。在这一过程中可能会触发页面的重绘或重排。这里就涉及了两个重要概念："),e("strong",[t._v("Reflow")]),t._v("和"),e("strong",[t._v("Repaint")]),t._v("。\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a637a7508bca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}})]),t._v(" "),e("pre",[e("code",[t._v("1. Reflow，也称作Layout，中文叫回流，一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树，这个过程称为Reflow。  \n2. Repaint，中文重绘，意味着元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就OK了，这个过程称为Repaint。\n")])]),t._v(" "),e("p",[t._v("所以说Reflow的成本比Repaint的成本高得多的多。DOM树里的每个结点都会有reflow方法，一个结点的reflow很有可能导致子结点，甚至父点以及同级结点的reflow。")]),t._v(" "),e("h2",{attrs:{id:"_7-关闭tcp连接或继续保持连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-关闭tcp连接或继续保持连接"}},[t._v("#")]),t._v(" 7.关闭TCP连接或继续保持连接")]),t._v(" "),e("p",[t._v("通过四次挥手关闭连接(FIN ACK, ACK, FIN ACK, ACK)。\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672a64fbd06d50d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"avatar"}})]),t._v(" "),e("pre",[e("code",[t._v("1. 第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。\n2. 第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。\n3. 第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。\n4. 第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。\n")])]),t._v(" "),e("p",[t._v("非商用，侵删，转自: "),e("a",{attrs:{href:"https://juejin.im/post/5bf23afa6fb9a049be5d1494",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5bf23afa6fb9a049be5d1494"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);