"use strict";(self.webpackChunktoken_docs=self.webpackChunktoken_docs||[]).push([[7937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={id:"on-premises-demo",title:"On Premises Demo",sidebar_label:"On Premises Demo"},a=void 0,l={unversionedId:"developer-guide/on-premises-demo",id:"developer-guide/on-premises-demo",title:"On Premises Demo",description:"- Docker Compose Version: +1.29",source:"@site/docs/developer-guide/on-premises-demo.md",sourceDirName:"developer-guide",slug:"/developer-guide/on-premises-demo",permalink:"/developer-guide/on-premises-demo",draft:!1,tags:[],version:"current",frontMatter:{id:"on-premises-demo",title:"On Premises Demo",sidebar_label:"On Premises Demo"}},c={},s=[{value:"Running docker images locally",id:"running-docker-images-locally",level:3},{value:"Documentation - OpenAPI",id:"documentation---openapi",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Prerequisite - This solution require",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Docker Compose Version: +1.29"),(0,r.kt)("li",{parentName:"ul"},"Docker Version: +17.06"))),(0,r.kt)("h3",{id:"running-docker-images-locally"},"Running docker images locally"),(0,r.kt)("p",null,"In this case, the developer need to access the token-backend repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gsmainclusivetechlab/token-backend"},"https://github.com/gsmainclusivetechlab/token-backend"),") and go to release branch to copy the docker-compose.yml and .env file, then follow the next steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run this command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up -d \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open browser on http://localhost:8080")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To teardown everything, run the next command\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,r.kt)("admonition",{title:".env File",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use Live mode with Twilio, you will need to fill the properties on the .env file (TWILIO_SID, TWILIO_TOKEN and TWILIO_MESSAGE_SID) with your Twilio credentials and config the receive webhook (A MESSAGE COMES IN option on Messaging section) for the path '{url}:4100/hooks/twilio'")),(0,r.kt)("h2",{id:"documentation---openapi"},"Documentation - OpenAPI"),(0,r.kt)("p",null,"You can see the documentation of each api in the following urls after starting the code locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"localhost:4000/docs - Proxy\nlocalhost:4100/docs - SMS Gateway\nlocalhost:4200/docs - USSD Gateway\nlocalhost:4300/docs - MMO\nlocalhost:4400/docs - Engine\nlocalhost:3700/docs - Token Solution\n")))}d.isMDXComponent=!0}}]);