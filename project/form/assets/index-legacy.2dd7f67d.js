System.register(["./reactiveFormOptions-legacy.78c35196.js","./index-legacy.a4db269a.js"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.g},function(e){t=e.g}],execute:function(){let r;const o=(e,n,r)=>{if(!e)return"";let o="";for(const l of Object.keys(e))void 0!==e[l]&&null!==e[l]&&""!==e[l]&&(r&&r.includes(l)||("Object"===t(e[l])&&t("Array"===e[l])?o+=`:${l}=${JSON.stringify(e[l]).replace(/"(.+)":/,"$1:")} `:"Boolean"===t(e[l])||n?.includes(l)?o+=`:${l}="${e[l]}" `:o+=`${l}="${e[l]}" `));return o.substr(0,o.length-1)},l=()=>`  ${(()=>{let e="";for(const n of r.__attr__){const t=n.options.label?` label="${n.label}`:"",l=n.required?` name="${n._key}"`:"",a="size"in r?` size="${r.size}"`:"",i="a-Switch"===n.component?"checked":"value";"a-Divider"===n.component?e+=`<${n.component} ${o(n.options.props)} />\n    `:e+=`<a-form-item${t}"${l}>\n      <${n.component} v-model:${i}="${r.model}.${n._key}"${a} ${o(n.options.props,[],["value","size","checked"])} /></a-form-item>\n    `}return e.substr(0,e.length-5)})()}${(()=>{if(!r.submitBtns)return"";let e=`  <a-button type="primary" @click="onSubmit">${r.confirmText}</a-button>`;return r.cancel&&(e+=`\n      <a-button style="margin-left: 10px">${r.cancelText}</a-button>`),r.reset&&(e+=`\n      <a-button style="margin-left: 10px">${r.resetText}</a-button>`),`\n    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">\n    ${e}\n    </a-form-item>`})()}`,a=e=>(r=e,`<template>\n  ${(()=>{const e={ref:"formRef",name:r.name,model:r.model,rules:r.rules,validateOnRuleChange:r.validateOnRuleChange,scrollToFirstError:r.scrollToFirstError,validateTrigger:r.validateTrigger,hideRequiredMark:r.hideRequiredMark,labelCol:r.labelCol,labelAlign:r.labelAlign,layout:r.layout};return`<a-form ${o(e,["rules","model"])}>\n  ${l()}\n  </a-form>`})()}\n</template>\n`);let i,s;const c={},m={},u=()=>{for(const e of i.__attr__)"a-Divider"!==e.component&&(c[e._key]=t(e.options.props?.value).toLowerCase()),e.rules&&"a-Divider"!==e.component&&(m[e._key]=e.rules)},d=(e,n=2)=>JSON.stringify(e,null,n).replace(/\n/g,"\n    ").replace(/"(.+)":/g,"$1:"),p=()=>`${(()=>{let e="import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';\nimport { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';";return s.includes("a-Bytemd")&&(e+="\nimport Bytemd from '@/components/Bytemd/editor.vue'"),s.includes("a-Tinymce")&&(e+="\nimport Tinymce from '@/components/Tinymce.vue'"),e})()}\n\ninterface FormModelType ${JSON.stringify(c,null,2).replace(/"/g,"").replace(/: (.*)/gm,": $1;").replace(/,;/g,";").replace(/(undefined);/g,"$1 | string;").replace(/(boolean|number)/g,"undefined | $1;")}\n\nexport default defineComponent({${(()=>{const e=e=>`\n  components: {\n    ${e}\n  },`;let n="";return s.includes("a-Tinymce")&&(n+="'a-Tinymce': Tinymce"),console.log(n,e(n)),s.includes("a-Bytemd")&&(""!==n&&(n+=",\n"),n+="    'a-Bytemd': Bytemd"),""===n?"":e(n)})()}\n  setup() {\n    const formRef = ref();\n\n    /**\n     * 表单model\n     */\n    const ${i.model}: UnwrapRef<FormModelType> = reactive(${d(c,2).replace(/"(number|boolean|undefined)"/g,"undefined").replace(/"string"/g,"''")});\n\n    /**\n     * 表单rules验证\n     */\n    const ${i.rules} = reactive(${d(m,2).replace(/"/g,"'")});\n\n    /**\n     * 表单提交\n     */\n    const onSubmit = () => {\n      formRef.value\n        .validate()\n        .then(() => {\n          console.log('values', ${i.model}, toRaw(${i.model}));\n        })\n        .catch((error: ValidateErrorEntity<FormModelType>) => {\n          console.log('error', error);\n        });\n    };\n\n    return {\n      formRef,\n      ${i.model},\n      ${i.rules},\n      onSubmit\n    };\n  }\n});`,f=e=>((e=>{i=e,s=i.__attr__.map((e=>e.component)),u()})(e),`\n<script lang="ts">\n${p()}\n<\/script>\n`),$=n(location.hash.split("/")[3]);e("V",(()=>a($)+f($)+'\n<style lang="less" scoped></style>\n'))}}}));
