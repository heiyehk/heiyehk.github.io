const t=t=>Object.prototype.toString.call(t).slice(8,-1),e=(t="",e)=>{const n=Math.random().toString(32).replace("0.","");return e?t+n.substr(0,e):t+n},n=()=>{function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+t()+t()+t()+t()+t()+t()},o=t=>new Promise((e=>{const n=document.createElement("textarea");n.value=t,n.style.cssText="position: fixed;z-index:-999;width: 0;height: 0;opacity: 0;",document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),e("success")}));export{o as c,t as g,e as r,n as u};
