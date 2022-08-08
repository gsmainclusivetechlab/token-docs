"use strict";(self.webpackChunktoken_docs=self.webpackChunktoken_docs||[]).push([[8818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=i,m=d["".concat(s,".").concat(b)]||d[b]||c[b]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={title:"Contributing",sidebar_label:"Contributing"},a=void 0,l={unversionedId:"contributors-guide/contributing",id:"contributors-guide/contributing",title:"Contributing",description:"Contributing Guidelines",source:"@site/docs/contributors-guide/contributing.md",sourceDirName:"contributors-guide",slug:"/contributors-guide/contributing",permalink:"/contributors-guide/contributing",draft:!1,tags:[],version:"current",frontMatter:{title:"Contributing",sidebar_label:"Contributing"}},s={},u=[{value:"Contributing Guidelines",id:"contributing-guidelines",level:2},{value:"Bugs reports",id:"bugs-reports",level:3},{value:"Pull requests",id:"pull-requests",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contributing-guidelines"},"Contributing Guidelines"),(0,i.kt)("p",null,"Are you identified with the project theme and you want to contribute with something? Here's how you can help."),(0,i.kt)("h3",{id:"bugs-reports"},"Bugs reports"),(0,i.kt)("p",null,"A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!"),(0,i.kt)("p",null,"Guidelines for bug reports:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Use the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/gsmainclusivetechlab/token-backend/issues"},"GitHub Issues")," search")," \u2014 check if the issue has already been reported.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Check if the issue has been fixed")," \u2014 try to reproduce it using the latest main or development branch in the repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Isolate the problem")," \u2014 ideally create a reduced test case and a live example.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Please try to be as detailed as possible in your report. Include specific information about the environment - operating system and version, browser and version... and steps required to reproduce the issue."))),(0,i.kt)("h3",{id:"pull-requests"},"Pull requests"),(0,i.kt)("p",null,"Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Push your changes to GitHub by running: git push origin my-feature-branch")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gsmainclusivetechlab/token-backend/pulls"},"Open a Pull Request")," with a clear title and description with your changes."))),(0,i.kt)("admonition",{title:"Convention ",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This project follows the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," convention.")))}c.isMDXComponent=!0}}]);