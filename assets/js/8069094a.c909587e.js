"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[7429],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(b,i(i({ref:r},s),{},{components:t})):n.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={title:"Web Reactive"},i="Spring Web Reactive",c={unversionedId:"\u5f00\u53d1/\u6846\u67b6/Spring/Framework/WebReactive/README",id:"\u5f00\u53d1/\u6846\u67b6/Spring/Framework/WebReactive/README",title:"Web Reactive",description:"\u672f\u8bed \u201creactive\u201d\uff08\u54cd\u5e94\u5f0f\uff09\uff0c\u6307\u7684\u662f\u56f4\u7ed5\u5bf9\u53d8\u5316\u505a\u51fa\u53cd\u5e94\u7684\u7f16\u7a0b\u6a21\u578b",source:"@site/docs/01-\u5f00\u53d1/03-\u6846\u67b6/Spring/02-Framework/WebReactive/README.md",sourceDirName:"01-\u5f00\u53d1/03-\u6846\u67b6/Spring/02-Framework/WebReactive",slug:"/\u5f00\u53d1/\u6846\u67b6/Spring/Framework/WebReactive/",permalink:"/docs/\u5f00\u53d1/\u6846\u67b6/Spring/Framework/WebReactive/",draft:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/01-\u5f00\u53d1/03-\u6846\u67b6/Spring/02-Framework/WebReactive/README.md",tags:[],version:"current",frontMatter:{title:"Web Reactive"},sidebar:"\u5f00\u53d1",previous:{title:"Framework",permalink:"/docs/\u5f00\u53d1/\u6846\u67b6/Spring/Framework/"},next:{title:"Data",permalink:"/docs/\u5f00\u53d1/\u6846\u67b6/Spring/Data/"}},p={},l=[],s={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spring-web-reactive"},"Spring Web Reactive"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672f\u8bed \u201creactive\u201d\uff08\u54cd\u5e94\u5f0f\uff09\uff0c\u6307\u7684\u662f\u56f4\u7ed5\u5bf9\u53d8\u5316\u505a\u51fa\u53cd\u5e94\u7684\u7f16\u7a0b\u6a21\u578b\n\u2014\u2014\u200b\u5bf9 I/O \u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\u7684\u7f51\u7edc\u7ec4\u4ef6\uff0c\u5bf9\u9f20\u6807\u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\u7684 UI controller\uff0c\u4ee5\u53ca\u5176\u4ed6\u3002\n\u4ece\u8fd9\u4e2a\u610f\u4e49\u4e0a\u8bf4\uff0c\u975e\u963b\u585e\u5c31\u662f\u54cd\u5e94\u5f0f\uff0c\u56e0\u4e3a\uff0c\u6211\u4eec\u73b0\u5728\u4e0d\u662f\u88ab\u963b\u585e\uff0c\u800c\u662f\u5728\u64cd\u4f5c\u5b8c\u6210\u6216\u6570\u636e\u53ef\u7528\u65f6\u5bf9\u901a\u77e5\u505a\u51fa\u53cd\uff08\u54cd\uff09\u5e94\u3002"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/reference/web-reactive.html"},"\u5b98\u65b9\u6587\u6863"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"https://springdoc.cn/spring/web-reactive.html"},"\u4e2d\u6587\u6587\u6863"))))}m.isMDXComponent=!0}}]);