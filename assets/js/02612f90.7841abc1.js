"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},20937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Solidity"},a="Solidity",c={unversionedId:"\u5f00\u53d1/\u8bed\u8a00/Solidity/README",id:"\u5f00\u53d1/\u8bed\u8a00/Solidity/README",title:"Solidity",description:"\u4e00\u79cd\u9759\u6001\u7c7b\u578b\u7684\u82b1\u62ec\u53f7\u7f16\u7a0b\u8bed\u8a00\uff0c\u7528\u4e8e\u5f00\u53d1\u5728 \u4ee5\u592a\u574a \u4e0a\u8fd0\u884c\u7684\u667a\u80fd\u5408\u7ea6\u3002",source:"@site/docs/02-\u5f00\u53d1/00-\u8bed\u8a00/Solidity/README.md",sourceDirName:"02-\u5f00\u53d1/00-\u8bed\u8a00/Solidity",slug:"/\u5f00\u53d1/\u8bed\u8a00/Solidity/",permalink:"/docs/\u5f00\u53d1/\u8bed\u8a00/Solidity/",draft:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/02-\u5f00\u53d1/00-\u8bed\u8a00/Solidity/README.md",tags:[],version:"current",frontMatter:{title:"Solidity"},sidebar:"\u5f00\u53d1",previous:{title:"Rust",permalink:"/docs/\u5f00\u53d1/\u8bed\u8a00/Rust/"},next:{title:"Anaconda",permalink:"/docs/\u5f00\u53d1/\u5de5\u5177/Anaconda/"}},l={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solidity"},"Solidity"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u79cd\u9759\u6001\u7c7b\u578b\u7684\u82b1\u62ec\u53f7\u7f16\u7a0b\u8bed\u8a00\uff0c\u7528\u4e8e\u5f00\u53d1\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/zh/"},"\u4ee5\u592a\u574a")," \u4e0a\u8fd0\u884c\u7684\u667a\u80fd\u5408\u7ea6\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"\u5b98\u65b9\u7f51\u7ad9"),"\n| ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/zh/v0.8.20/"},"\u5b98\u65b9\u6587\u6863"),"\n| ",(0,o.kt)("a",{parentName:"p",href:"https://learnblockchain.cn/docs/solidity/"},"\u4e2d\u6587\u6587\u6863\uff08\u767b\u94fe\u793e\u533a\uff09"))))}d.isMDXComponent=!0}}]);