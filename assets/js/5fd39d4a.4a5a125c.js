"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||y[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="Yolov5",i={unversionedId:"\u7f16\u7a0b/Python/Yolov5",id:"\u7f16\u7a0b/Python/Yolov5",title:"Yolov5",description:"YOLOv5\ud83d\ude80\u662f\u4e00\u4e2a\u5728COCO\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u7684\u7269\u4f53\u68c0\u6d4b\u67b6\u6784\u548c\u6a21\u578b\u7cfb\u5217\uff0c\u5b83\u4ee3\u8868\u4e86Ultralytics\u5bf9\u672a\u6765\u89c6\u89c9AI\u65b9\u6cd5\u7684\u516c\u5f00\u7814\u7a76\uff0c",source:"@site/docs/01-\u7f16\u7a0b/03-Python/Yolov5.md",sourceDirName:"01-\u7f16\u7a0b/03-Python",slug:"/\u7f16\u7a0b/Python/Yolov5",permalink:"/docs/\u7f16\u7a0b/Python/Yolov5",draft:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/01-\u7f16\u7a0b/03-Python/Yolov5.md",tags:[],version:"current",frontMatter:{},sidebar:"\u7f16\u7a0b",previous:{title:"PyTorch",permalink:"/docs/\u7f16\u7a0b/Python/PyTorch"},next:{title:"pandas",permalink:"/docs/\u7f16\u7a0b/Python/pandas"}},l={},p=[],u={toc:p},s="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yolov5"},"Yolov5"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"YOLOv5\ud83d\ude80\u662f\u4e00\u4e2a\u5728COCO\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u7684\u7269\u4f53\u68c0\u6d4b\u67b6\u6784\u548c\u6a21\u578b\u7cfb\u5217\uff0c\u5b83\u4ee3\u8868\u4e86Ultralytics\u5bf9\u672a\u6765\u89c6\u89c9AI\u65b9\u6cd5\u7684\u516c\u5f00\u7814\u7a76\uff0c\n\u5176\u4e2d\u5305\u542b\u4e86\u5728\u6570\u5343\u5c0f\u65f6\u7684\u7814\u7a76\u548c\u5f00\u53d1\u4e2d\u6240\u83b7\u5f97\u7684\u7ecf\u9a8c\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/blob/master/.github/README_cn.md"},"GitHub"))))}y.isMDXComponent=!0}}]);