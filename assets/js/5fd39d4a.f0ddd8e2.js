"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||a;return n?o.createElement(d,l(l({ref:t},p),{},{components:n})):o.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},l="Yolov5",i={unversionedId:"\u7f16\u7a0b/Python/Yolov5",id:"\u7f16\u7a0b/Python/Yolov5",title:"Yolov5",description:"YOLOv5\ud83d\ude80\u662f\u4e00\u4e2a\u5728COCO\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u7684\u7269\u4f53\u68c0\u6d4b\u67b6\u6784\u548c\u6a21\u578b\u7cfb\u5217\uff0c\u5b83\u4ee3\u8868\u4e86Ultralytics\u5bf9\u672a\u6765\u89c6\u89c9AI\u65b9\u6cd5\u7684\u516c\u5f00\u7814\u7a76\uff0c",source:"@site/docs/01-\u7f16\u7a0b/03-Python/Yolov5.md",sourceDirName:"01-\u7f16\u7a0b/03-Python",slug:"/\u7f16\u7a0b/Python/Yolov5",permalink:"/docs/\u7f16\u7a0b/Python/Yolov5",draft:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/01-\u7f16\u7a0b/03-Python/Yolov5.md",tags:[],version:"current",frontMatter:{},sidebar:"\u7f16\u7a0b",previous:{title:"PyTorch",permalink:"/docs/\u7f16\u7a0b/Python/PyTorch"},next:{title:"pandas",permalink:"/docs/\u7f16\u7a0b/Python/pandas"}},s={},c=[{value:"\u672c\u5730\u90e8\u7f72",id:"\u672c\u5730\u90e8\u7f72",level:2},{value:"\u8fd0\u884c\u68c0\u6d4b",id:"\u8fd0\u884c\u68c0\u6d4b",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yolov5"},"Yolov5"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"YOLOv5\ud83d\ude80\u662f\u4e00\u4e2a\u5728COCO\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u7684\u7269\u4f53\u68c0\u6d4b\u67b6\u6784\u548c\u6a21\u578b\u7cfb\u5217\uff0c\u5b83\u4ee3\u8868\u4e86Ultralytics\u5bf9\u672a\u6765\u89c6\u89c9AI\u65b9\u6cd5\u7684\u516c\u5f00\u7814\u7a76\uff0c\n\u5176\u4e2d\u5305\u542b\u4e86\u5728\u6570\u5343\u5c0f\u65f6\u7684\u7814\u7a76\u548c\u5f00\u53d1\u4e2d\u6240\u83b7\u5f97\u7684\u7ecf\u9a8c\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/blob/master/README.zh-CN.md"},"GitHub"))),(0,r.kt)("h2",{id:"\u672c\u5730\u90e8\u7f72"},"\u672c\u5730\u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ultralytics/yolov5.git\ncd yolov5\nconda create --name yolov5 python=3.10\nconda activate yolov5\npip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r ./requirements.txt\n")),(0,r.kt)("h3",{id:"\u8fd0\u884c\u68c0\u6d4b"},"\u8fd0\u884c\u68c0\u6d4b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Run YOLOv5 detection inference on images, videos, directories, globs, YouTube, webcam, streams, etc.\n\nUsage - sources:\n    $ python detect.py --weights yolov5s.pt --source 0                               # webcam\n                                                     img.jpg                         # image\n                                                     vid.mp4                         # video\n                                                     screen                          # screenshot\n                                                     path/                           # directory\n                                                     list.txt                        # list of images\n                                                     list.streams                    # list of streams\n                                                     'path/*.jpg'                    # glob\n                                                     'https://youtu.be/Zgi9g1ksQHc'  # YouTube\n                                                     'rtsp://example.com/media.mp4'  # RTSP, RTMP, HTTP stream\n\nUsage - formats:\n    $ python detect.py --weights yolov5s.pt                 # PyTorch\n                                 yolov5s.torchscript        # TorchScript\n                                 yolov5s.onnx               # ONNX Runtime or OpenCV DNN with --dnn\n                                 yolov5s_openvino_model     # OpenVINO\n                                 yolov5s.engine             # TensorRT\n                                 yolov5s.mlmodel            # CoreML (macOS-only)\n                                 yolov5s_saved_model        # TensorFlow SavedModel\n                                 yolov5s.pb                 # TensorFlow GraphDef\n                                 yolov5s.tflite             # TensorFlow Lite\n                                 yolov5s_edgetpu.tflite     # TensorFlow Edge TPU\n                                 yolov5s_paddle_model       # PaddlePaddle\n\n")))}y.isMDXComponent=!0}}]);