"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[677],{71916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u8fd0\u884c\u7ef4\u62a4/CentOS/CentOS","title":"CentOS","description":"CentOS \u9879\u76ee\u662f\u4e00\u4e2a\u7531\u793e\u533a\u9a71\u52a8\u7684\u514d\u8d39\u8f6f\u4ef6\uff0c\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u57fa\u7840\u5e73\u53f0\uff0c\u4f9b\u5f00\u6e90\u793e\u533a\u4f7f\u7528\u3002","source":"@site/docs/03-\u8fd0\u884c\u7ef4\u62a4/CentOS/CentOS.md","sourceDirName":"03-\u8fd0\u884c\u7ef4\u62a4/CentOS","slug":"/\u8fd0\u884c\u7ef4\u62a4/CentOS/","permalink":"/docs/\u8fd0\u884c\u7ef4\u62a4/CentOS/","draft":false,"unlisted":false,"editUrl":"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/03-\u8fd0\u884c\u7ef4\u62a4/CentOS/CentOS.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8fd0\u884c\u7ef4\u62a4","next":{"title":"\u76ee\u5f55","permalink":"/docs/\u8fd0\u884c\u7ef4\u62a4/"}}');var r=s(74848),i=s(28453);const c={},o="CentOS",d={},l=[{value:"\u6700\u5c0f\u5b89\u88c5\uff08manimal\uff09\u540e\u7684\u7f51\u7edc\u914d\u7f6e",id:"\u6700\u5c0f\u5b89\u88c5manimal\u540e\u7684\u7f51\u7edc\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u5149\u76d8\u4e3a\u8f6f\u4ef6\u6e90",id:"\u914d\u7f6e\u5149\u76d8\u4e3a\u8f6f\u4ef6\u6e90",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"centos",children:"CentOS"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"CentOS \u9879\u76ee\u662f\u4e00\u4e2a\u7531\u793e\u533a\u9a71\u52a8\u7684\u514d\u8d39\u8f6f\u4ef6\uff0c\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u57fa\u7840\u5e73\u53f0\uff0c\u4f9b\u5f00\u6e90\u793e\u533a\u4f7f\u7528\u3002"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.centos.org/centos-linux/",children:"CentOS Linux"}),"\n| ",(0,r.jsx)(n.a,{href:"https://www.centos.org/centos-stream/",children:"CentOS Stream"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u5c0f\u5b89\u88c5manimal\u540e\u7684\u7f51\u7edc\u914d\u7f6e",children:"\u6700\u5c0f\u5b89\u88c5\uff08manimal\uff09\u540e\u7684\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u6700\u5c0f\u5b89\u88c5\u9ed8\u8ba4\u6ca1\u6709\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"net-tools"})," \u5305\uff0c\u6240\u4ee5\u4e5f\u6ca1\u6709 ",(0,r.jsx)(n.code,{children:"ifconfig"})," \u547d\u4ee4\uff1b\n\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ip addr"})," \u6765\u67e5\u770b\u5f53\u524d IP\uff1b"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"vi"})," \u7f16\u8f91 ",(0,r.jsx)(n.code,{children:"/etc/sysconfig/network-scripts/ifcfg-ens33"})," \u6587\u4ef6\uff0c\u5c06 ",(0,r.jsx)(n.code,{children:"ONBOOT=no"})," \u6539\u4e3a ",(0,r.jsx)(n.code,{children:"ONBOOT=yes"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",metastring:'{15} title="/etc/sysconfig/network-scripts/ifcfg-ens33"',children:"TYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=dhcp\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens33\nUUID=ef1316c7-eaaa-446c-ad9a-e42e8a451675\nDEVICE=ens33\nONBOOT=yes\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528\u6865\u63a5\u6a21\u5f0f\u94fe\u63a5\u865a\u62df\u673a\uff0c\u5fc5\u987b\u5728\u865a\u62df\u7f51\u7edc\u7f16\u8f91\u5668\u4e2d\u624b\u52a8\u6307\u5b9a\u6865\u63a5\u7f51\u5361\uff0c\u9009\u62e9\u9ed8\u8ba4\u81ea\u52a8\u9009\u62e9\u7684\u7f51\u5361\u53ef\u80fd\u627e\u4e0d\u5230 DHCP \u670d\u52a1\u5668\u5bfc\u81f4\u65e0\u6cd5\u83b7\u53d6 IP\uff01"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u5149\u76d8\u4e3a\u8f6f\u4ef6\u6e90",children:"\u914d\u7f6e\u5149\u76d8\u4e3a\u8f6f\u4ef6\u6e90"}),"\n",(0,r.jsxs)(n.p,{children:["\u865a\u62df\u673a\u5148\u6dfb\u52a0 ",(0,r.jsx)(n.strong,{children:"DVD/CD-ROM \u9a71\u52a8\u5668"})," \u5e76\u9009\u62e9\u5bf9\u5e94\u7cfb\u7edf\u7684\u5b8c\u6574 ISO \u955c\u50cf\u6587\u4ef6\u3002\n\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"CentOS-7-x86_64-DVD-2009.iso"}),"\uff0c\u8fd9\u4e2a\u6587\u4ef6\u6709 4.38GB\u3002\u91cc\u9762\u5305\u542b\u4e86\u5927\u91cf\u914d\u5957\u8f6f\u4ef6\u5305\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\uff0c\u53ef\u4ee5\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684\u5149\u76d8\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"[root@localhost yum.repos.d]# ls -l /dev/cdrom\nlrwxrwxrwx. 1 root root 3 Sep 27 01:25 /dev/cdrom -> sr0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u6302\u8f7d\u70b9\u76ee\u5f55\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /mnt/iso\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6302\u8f7d\u5149\u76d8\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mount /dev/cdrom /mnt/iso/\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u8f91\u8f6f\u4ef6\u6e90\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7981\u7528\u7f51\u7edc\u6e90"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 DVD \u6e90\uff1b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"/etc/yum.repos.d/CentOS-Media.repo"})," \u6587\u4ef6\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"baseurl="})," \u7684\u503c\u6539\u4e3a\u4e4b\u524d\u521b\u5efa\u7684\u6302\u8f7d\u70b9\u76ee\u5f55 ",(0,r.jsx)(n.code,{children:"file:///mnt/iso/"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"enabled=0"})," \u6539\u4e3a ",(0,r.jsx)(n.code,{children:"enabled=1"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-repo",metastring:'title="/etc/yum.repos.d/CentOS-Media.repo"',children:"# CentOS-Media.repo\n#\n#  This repo can be used with mounted DVD media, verify the mount point for\n#  CentOS-7.  You can use this repo and yum to install items directly off the\n#  DVD ISO that we release.\n#\n# To use this repo, put in your DVD and use it with the other repos too:\n#  yum --enablerepo=c7-media [command]\n#\n# or for ONLY the media repo, do this:\n#\n#  yum --disablerepo=\\* --enablerepo=c7-media [command]\n\n[c7-media]\nname=CentOS-$releasever - Media\n# highlight-next-line\nbaseurl=file:///mnt/iso/\ngpgcheck=1\n# highlight-next-line\nenabled=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u66f4\u65b0\u8f6f\u4ef6\u6e90\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yum update\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);