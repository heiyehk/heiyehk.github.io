import{b as e,B as a}from"./vendor.20deaaa7.js";const o=e([]),s=localStorage.getItem("forms");s&&(o.value=o.value=JSON.parse(s)),a((()=>o.value),(e=>{localStorage.setItem("forms",JSON.stringify(e))}),{deep:!0});const t=e=>o.value.filter((a=>a._id===e))[0];export{o as f,t as g};