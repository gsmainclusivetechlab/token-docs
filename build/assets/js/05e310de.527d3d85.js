(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),b=r,m=f["".concat(o,".").concat(b)]||f[b]||p[b]||c;return n?i.a.createElement(m,a(a({ref:t},s),{},{components:n})):i.a.createElement(m,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(16),i=n(117);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},117:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),c=(n(0),n(111)),o=n(115),a={id:"engine",title:"Engine",sidebar_label:"Engine"},u={unversionedId:"architecture/engine",id:"architecture/engine",isDocsHomePage:!1,title:"Engine",description:"In the platform architecture. the Engine acts as a centralizer of the existing",source:"@site/docs/architecture/engine.md",slug:"/architecture/engine",permalink:"/architecture/engine",version:"current",sidebar_label:"Engine",sidebar:"someSidebar",previous:{title:"Communication Channels",permalink:"/app"},next:{title:"Biometric Suppliers",permalink:"/suppliers"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"In the platform architecture. the Engine acts as a centralizer of the existing\nflows. Users send requests to the Engine through the application or accessing\ndirectly a communication provider. In turn, the Engine communicates with\nBiometric Suppliers to make the services available to users."),Object(c.a)("p",null,"Within the biometrics engine, the lambda functions will route the biometrics\ncredentials to an appropriate biometrics\u2019 supplier. If a voice recording is\nreceived, for example, the engine will select a biometric supplier which is\ncapable of performing voice authentication. The biometric supplier selection may\nbe guided by the user\u2019s selection within the mobile app."),Object(c.a)("div",{style:{textAlign:"center"}},Object(c.a)("img",{alt:"B4ll architetcure",src:Object(o.a)("img/engine.svg")})))}p.isMDXComponent=!0}}]);