(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return n?r.a.createElement(f,s(s({ref:t},u),{},{components:n})):r.a.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(16),r=n(119);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},119:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(114)),i=n(117),s={id:"adopt",title:"Adopt",sidebar_label:"Get Started"},c={unversionedId:"adoptions/adopt",id:"adoptions/adopt",isDocsHomePage:!1,title:"Adopt",description:"This section helps you getting started through the ejection process of the modules included on this project so that you can adopt them on your stack.",source:"@site/docs/adoptions/adopt.md",slug:"/adoptions/adopt",permalink:"/adoptions/adopt",version:"current",sidebar_label:"Get Started",sidebar:"someSidebar",previous:{title:"Use Cases",permalink:"/manual/usecases"},next:{title:"Contributing",permalink:"/contributors-guide/contributing"}},u=[{value:"Demonstration Only Modules",id:"demonstration-only-modules",children:[]},{value:"Adoption Modules",id:"adoption-modules",children:[]},{value:"Where to start?",id:"where-to-start",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.a)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"This section helps you getting started through the ejection process of the modules included on this project so that you can adopt them on your stack."),Object(a.a)("h3",{id:"demonstration-only-modules"},"Demonstration Only Modules"),Object(a.a)("p",null,"As stated before the project is organised in different services.\nSome of those services were built for demonstration purposes only, like so, the Proxy Service and Web Client  are disposable as their purpose is to serve the live and on premises demonstrations."),Object(a.a)("h3",{id:"adoption-modules"},"Adoption Modules"),Object(a.a)("p",null,"The Engine (:4400), The Token Algorithm Solution (:3700) and the Database (:3306) are three of the key modules which should be considered when crafting an adoption plan.\nAll of these modules can be started on a standalone manner but expect the others to be available with some adaptations.\nThe Token Algorithm Solution is the only service which doesn\u2019t have any dependency, like so, it can run alone with any adaptations or changes to the codebase (rather than a SQL database connection).\nPlease see the diagram below as a visual aid to this reasoning."),Object(a.a)("img",{alt:"Adoption Highlights",src:Object(i.a)("img/architecture-adoption-highlight.png")}),Object(a.a)("h3",{id:"where-to-start"},"Where to start?"),Object(a.a)("p",null,"We recommend first reading the Instructions and Trying the Live Demo; Following that you should read the instructions to run the demo locally and browse through the code.\nFrom this point, and by analysing the architecture section of this documentation you should be able to clearly understand how the 6 services interact with each other and inherently their dependencies."))}d.isMDXComponent=!0}}]);