"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[8776],{89165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const s={},a="InfluxDB",l={id:"\u5f00\u53d1/\u73af\u5883/InfluxDB/README",title:"InfluxDB",description:"InfluxDB \u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u548c\u5206\u6790\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u7684\u5f00\u6e90\u6570\u636e\u5e93\u3002",source:"@site/docs/02-\u5f00\u53d1/02-\u73af\u5883/InfluxDB/README.md",sourceDirName:"02-\u5f00\u53d1/02-\u73af\u5883/InfluxDB",slug:"/\u5f00\u53d1/\u73af\u5883/InfluxDB/",permalink:"/docs/\u5f00\u53d1/\u73af\u5883/InfluxDB/",draft:!1,unlisted:!1,editUrl:"https://github.com/Yue-plus/JVTC.Yue.Zone/tree/main/docs/02-\u5f00\u53d1/02-\u73af\u5883/InfluxDB/README.md",tags:[],version:"current",frontMatter:{},sidebar:"\u5f00\u53d1",previous:{title:"Docker",permalink:"/docs/\u5f00\u53d1/\u73af\u5883/Docker/"},next:{title:"MariaDB & MySQL",permalink:"/docs/\u5f00\u53d1/\u73af\u5883/MariaDB&MySQL/"}},o={},c=[{value:"Influx CLI",id:"influx-cli",level:2},{value:"\u7ba1\u7406\u7ec4\u7ec7",id:"\u7ba1\u7406\u7ec4\u7ec7",level:3},{value:"\u672c\u5730\u6dfb\u52a0\u7ec4\u7ec7",id:"\u672c\u5730\u6dfb\u52a0\u7ec4\u7ec7",level:4},{value:"\u7ba1\u7406\u7528\u6237",id:"\u7ba1\u7406\u7528\u6237",level:3},{value:"\u6dfb\u52a0\u7528\u6237",id:"\u6dfb\u52a0\u7528\u6237",level:4},{value:"\u4fee\u6539\u7528\u6237\u5bc6\u7801",id:"\u4fee\u6539\u7528\u6237\u5bc6\u7801",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u4f7f\u7528 <code>curl</code> \u5de5\u5177\u901a\u8fc7 WebAPI \u53d1\u9001\u6570\u636e",id:"\u4f7f\u7528-curl-\u5de5\u5177\u901a\u8fc7-webapi-\u53d1\u9001\u6570\u636e",level:3},{value:"\u4f7f\u7528 Python \u7684 request \u5e93\u901a\u8fc7 WebAPI \u53d1\u9001\u6570\u636e",id:"\u4f7f\u7528-python-\u7684-request-\u5e93\u901a\u8fc7-webapi-\u53d1\u9001\u6570\u636e",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"influxdb",children:"InfluxDB"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InfluxDB"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u548c\u5206\u6790\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u7684\u5f00\u6e90\u6570\u636e\u5e93\u3002"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/v2.7/",children:"OSS \u6587\u6863"}),"\n| ",(0,r.jsx)(n.a,{href:"https://jasper-zhang1.gitbooks.io/influxdb/content/",children:"\u4e2d\u6587\u6587\u6863"}),"\n| ",(0,r.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/v2.7/install/",children:"\u4e0b\u8f7d\u5b89\u88c5 InfluxDB"}),"\n| ",(0,r.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/cloud/tools/influx-cli/",children:"\u4e0b\u8f7d\u5b89\u88c5 influx CLI"}),"\n| ",(0,r.jsx)(n.a,{href:"https://www.influxdata.com/time-series-platform/chronograf/",children:"Chronograf"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"influx-cli",children:"Influx CLI"}),"\n",(0,r.jsx)(n.h3,{id:"\u7ba1\u7406\u7ec4\u7ec7",children:"\u7ba1\u7406\u7ec4\u7ec7"}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,r.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/v2.7/organizations/",children:"Manage organizations"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u672c\u5730\u6dfb\u52a0\u7ec4\u7ec7",children:"\u672c\u5730\u6dfb\u52a0\u7ec4\u7ec7"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"influx config create --config-name <config-name> \\\n  --host-url http://localhost:8086 \\\n  --org <your-org> \\\n  --token <your-auth-token> \\\n  --active\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7ba1\u7406\u7528\u6237",children:"\u7ba1\u7406\u7528\u6237"}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,r.jsx)(n.a,{href:"https://docs.influxdata.com/influxdb/v2.7/users/",children:"Manage users"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u6dfb\u52a0\u7528\u6237",children:"\u6dfb\u52a0\u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"influx user create -n <username> -p <password> -o <org-name>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u4fee\u6539\u7528\u6237\u5bc6\u7801",children:"\u4fee\u6539\u7528\u6237\u5bc6\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"influx user password -n <username> -t <token>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsxs)(n.h3,{id:"\u4f7f\u7528-curl-\u5de5\u5177\u901a\u8fc7-webapi-\u53d1\u9001\u6570\u636e",children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"curl"})," \u5de5\u5177\u901a\u8fc7 WebAPI \u53d1\u9001\u6570\u636e"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --request POST \\\n"http://localhost:8086/api/v2/write?org=YOUR_ORG&bucket=YOUR_BUCKET&precision=ns" \\\n  --header "Authorization: Token YOUR_API_TOKEN" \\\n  --header "Content-Type: text/plain; charset=utf-8" \\\n  --header "Accept: application/json" \\\n  --data-binary \'\n    airSensors,sensor_id=TLM0201 temperature=73.97038159354763,humidity=35.23103248356096,co=0.48445310567793615 1630424257000000000\n    airSensors,sensor_id=TLM0202 temperature=75.30007505999716,humidity=35.651929918691714,co=0.5141876544505826 1630424257000000000\n    \'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-python-\u7684-request-\u5e93\u901a\u8fc7-webapi-\u53d1\u9001\u6570\u636e",children:"\u4f7f\u7528 Python \u7684 request \u5e93\u901a\u8fc7 WebAPI \u53d1\u9001\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import random\nimport time\nimport requests\n\nPARAMS = {\n    "org": "jvtc",\n    "bucket": "test",\n}\n\nHEADERS = {\n    "Authorization": "Token sLAqOjOFuDB0xjMIkRWoMqwPpHdW4Hqd2zqaRlvZEvnj5nO9AP5RttUNzG0w_jXiMA0LdymWaXSw1F6t3BKN1w==",\n    "Content-Type": "text/plain; charset=utf-8",\n    "Accept": "application/json",\n}\n\nwhile True:\n    data = "A001 temp=" + str(random.randint(0, 100))\n    r = requests.post(\n        url="http://localhost:8086/api/v2/write",\n        params=PARAMS,\n        headers=HEADERS,\n        data=data\n    )\n    print(r.status_code, data)\n    time.sleep(1)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);