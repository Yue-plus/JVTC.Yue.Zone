"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[6682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,O=f["".concat(i,".").concat(m)]||f[m]||s[m]||p;return n?r.createElement(O,a(a({ref:t},l),{},{components:n})):r.createElement(O,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const p={},a="OpenCV",c={unversionedId:"\u7f16\u7a0b/OpenCV/README",id:"\u7f16\u7a0b/OpenCV/README",title:"OpenCV",description:"OpenCV \u7684\u5168\u79f0\u662f Open Source Computer Vision Library\uff0c\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u8ba1\u7b97\u673a\u89c6\u89c9\u5e93\u3002",source:"@site/docs/01-\u7f16\u7a0b/OpenCV/README.md",sourceDirName:"01-\u7f16\u7a0b/OpenCV",slug:"/\u7f16\u7a0b/OpenCV/",permalink:"/docs/\u7f16\u7a0b/OpenCV/",draft:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/01-\u7f16\u7a0b/OpenCV/README.md",tags:[],version:"current",frontMatter:{},sidebar:"\u7f16\u7a0b",previous:{title:"HTTP \u670d\u52a1\u5668",permalink:"/docs/\u7f16\u7a0b/Apache/httpd"}},i={},u=[],l={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opencv"},"OpenCV"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"OpenCV \u7684\u5168\u79f0\u662f Open Source Computer Vision Library\uff0c\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u8ba1\u7b97\u673a\u89c6\u89c9\u5e93\u3002\nOpenCV \u662f\u7531\u82f1\u7279\u5c14\u516c\u53f8\u53d1\u8d77\u5e76\u53c2\u4e0e\u5f00\u53d1\uff0c\u4ee5 BSD \u8bb8\u53ef\u8bc1\u6388\u6743\u53d1\u884c\uff0c\u53ef\u4ee5\u5728\u5546\u4e1a\u548c\u7814\u7a76\u9886\u57df\u4e2d\u514d\u8d39\u4f7f\u7528\u3002\nOpenCV \u53ef\u7528\u4e8e\u5f00\u53d1\u5b9e\u65f6\u7684\u56fe\u50cf\u5904\u7406\u3001\u8ba1\u7b97\u673a\u89c6\u89c9\u4ee5\u53ca\u6a21\u5f0f\u8bc6\u522b\u7a0b\u5e8f\u3002\n\u8be5\u7a0b\u5e8f\u5e93\u4e5f\u53ef\u4ee5\u4f7f\u7528\u82f1\u7279\u5c14\u516c\u53f8\u7684 IPP \u8fdb\u884c\u52a0\u901f\u5904\u7406\u3002"),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("a",{parentName:"p",href:"https://opencv.org/"},"\u5b98\u7f51"),"\n| ",(0,o.kt)("a",{parentName:"p",href:"https://docs.opencv.org/"},"\u5b98\u65b9\u6587\u6863"))))}s.isMDXComponent=!0}}]);