"use strict";(self.webpackChunkjvtc_yue_zone=self.webpackChunkjvtc_yue_zone||[]).push([[7643],{82052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});n(96540);var i=n(34164),s=n(44586),a=n(45500),r=n(17559),l=n(26535),o=n(21312),d=n(39022),c=n(74848);function h(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,c.jsxs)("nav",{className:"pagination-nav","aria-label":(0,o.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,c.jsx)(d.A,{permalink:n,title:(0,c.jsx)(o.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,c.jsx)(d.A,{permalink:i,title:(0,c.jsx)(o.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var g=n(41463),u=n(7131),p=n(24651);function x(e){let{items:t,component:n=p.A}=e;return(0,c.jsx)(c.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,c.jsx)(u.i,{content:t,children:(0,c.jsx)(n,{children:(0,c.jsx)(t,{})})},t.metadata.permalink)}))})}var j=n(5260),m=n(6676);function b(e){const t=(0,m.k)(e);return(0,c.jsx)(j.A,{children:(0,c.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:i,blogTitle:r,permalink:l}=t,o="/"===l?n:r;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.be,{title:o,description:i}),(0,c.jsx)(g.A,{tag:"blog_posts_list"})]})}function v(e){const{metadata:t,items:n,sidebar:i}=e;return(0,c.jsxs)(l.A,{sidebar:i,children:[(0,c.jsx)(x,{items:n}),(0,c.jsx)(h,{metadata:t})]})}function k(e){return(0,c.jsxs)(a.e3,{className:(0,i.A)(r.G.wrapper.blogPages,r.G.page.blogListPage),children:[(0,c.jsx)(f,{...e}),(0,c.jsx)(b,{...e}),(0,c.jsx)(v,{...e})]})}},40696:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(74848);function s(e){let{title:t,children:n}=e;return(0,i.jsxs)("div",{style:{border:"1px solid black",padding:"12px 18px",margin:"12px 0"},children:[t?(0,i.jsx)("h4",{style:{textAlign:"center"},children:t}):null,n]})}},94235:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(74848);function s(e){let{value:t,name:n}=e;return(0,i.jsx)("div",{style:{width:120,height:120,lineHeight:"120px",textAlign:"center",display:"inline-block",background:t},children:(0,i.jsx)("span",{style:{backgroundColor:"RGBA(128, 128, 128, .8)"},children:n??t.toUpperCase()})})}},27786:(e,t,n)=>{n.d(t,{q:()=>a,T:()=>r});n(96540);const i={headLink:"headLink_UE1r",headImg:"headImg_Eezh"};var s=n(74848);function a(e){let{name:t,href:n,avatar:a}=e;return(0,s.jsxs)("a",{className:i.headLink,target:"_blank",href:n,children:[(0,s.jsx)("img",{className:i.headImg,src:a??`/contributors/${t}.png`,alt:t}),(0,s.jsx)("br",{}),t]})}function r(){return(0,s.jsxs)("div",{className:"container",style:{paddingTop:16},children:[(0,s.jsx)("h1",{children:"\u8d21\u732e\u8005"}),(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(a,{name:"Yue_plus",href:"https://github.com/Yue-plus"}),(0,s.jsx)(a,{name:"buyi-Yang",href:"https://github.com/buyi-Yang"}),(0,s.jsx)(a,{name:"kejue-sususu",href:"https://github.com/kejue-sususu"}),(0,s.jsx)(a,{name:"liao-666",href:"https://github.com/liao-666"})]})})]})}},67325:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(96540),s=n(74848);function a(e){let{text:t}=e;const[n,a]=(0,i.useState)(!1);return(0,s.jsx)("span",{style:{color:n?"white":"black",backgroundColor:"black",padding:"0 8px"},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:t})}},59451:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(74848);function s(e){let{icon:t,title:n,text:s,href:a}=e;return(0,i.jsxs)("a",{href:a,style:{width:s.length>20?608:300,height:128,padding:8,margin:"0 8px 8px 0",backgroundColor:"rgba(160, 160, 160, .1)",borderRadius:12,display:"flex",justifyContent:"space-around",alignItems:"center",userSelect:"none"},children:[(0,i.jsx)("img",{src:`/icons/${t}`,alt:n,style:{height:"90%",minHeight:100,maxWidth:100,display:"inline-block"}}),(0,i.jsxs)("div",{style:{width:s.length>20?484:184,paddingLeft:8,display:"inline-block"},children:[(0,i.jsx)("h3",{style:{marginBottom:8},children:n}),(0,i.jsx)("span",{children:s})]})]})}},51433:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(96540),s=n(94235),a=n(67325),r=n(40696),l=n(27786),o=n(59451);const d={React:i,...i,Color:s.A,HideText:a.A,BorderCard:r.A,ContributorsList:l.T,Contributor:l.q,IconCardButton:o.A}}}]);