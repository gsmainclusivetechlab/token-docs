(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(117)),c=["components"],i={id:"developers",title:"Developers",sidebar_label:"Developers"},l={unversionedId:"developer-guide/developers",id:"developer-guide/developers",isDocsHomePage:!1,title:"Developers",description:"- Docker Compose Version: +1.29",source:"@site/docs/developer-guide/developers.md",slug:"/developer-guide/developers",permalink:"/developer-guide/developers",version:"current",sidebar_label:"Developers"},s=[{value:"Running the code locally",id:"running-the-code-locally",children:[]},{value:"Documentation - OpenAPI",id:"documentation---openapi",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,c);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisite - This solution require")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"Docker Compose Version: +1.29"),Object(a.b)("li",{parentName:"ul"},"Docker Version: +17.06")))),Object(a.b)("h3",{id:"running-the-code-locally"},"Running the code locally"),Object(a.b)("p",null,"In this case, the developer need to access the token-backend repository (",Object(a.b)("a",{parentName:"p",href:"https://github.com/gsmainclusivetechlab/token-backend"},"https://github.com/gsmainclusivetechlab/token-backend"),") and the token-frontend repository (",Object(a.b)("a",{parentName:"p",href:"https://github.com/gsmainclusivetechlab/token-frontend"},"https://github.com/gsmainclusivetechlab/token-frontend"),") and go to main branch to clone the repository, then follow the next steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Frontend")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run this commands")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm install\nnpm run serve\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Backend")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run this commands")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose build\ndocker-compose up -d \n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"To teardown everything, run the next command\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose down\n")),Object(a.b)("p",null,"In this situation the developers have the oportunity to made some changes on code and see changes  "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),".env File")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you want to use Live mode with Twilio, you will need to fill the properties on the .env file (TWILIO_SID, TWILIO_TOKEN and TWILIO_MESSAGE_SID) with your Twilio credentials and config the receive webhook (A MESSAGE COMES IN option on Messaging section) for the path '{url}:4100/hooks/twilio'"))),Object(a.b)("h2",{id:"documentation---openapi"},"Documentation - OpenAPI"),Object(a.b)("p",null,"You can see the documentation of each api in the following urls after starting the code locally"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"localhost:4000/docs - Proxy\nlocalhost:4100/docs - SMS Gateway\nlocalhost:4200/docs - USSD Gateway\nlocalhost:4300/docs - MMO\nlocalhost:4400/docs - Engine\nlocalhost:3700/docs - Token Solution\n")))}d.isMDXComponent=!0}}]);