(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(n),h=r,b=l["".concat(a,".").concat(h)]||l[h]||p[h]||i;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(16),o=n(119);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+d:d}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},119:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(114)),a=n(117),s={id:"adopt",title:"Adopt",sidebar_label:"Get Started"},c={unversionedId:"adoptions/adopt",id:"adoptions/adopt",isDocsHomePage:!1,title:"Adopt",description:"This section helps you getting started through the ejection process of the modules included on this project so that you can adopt them on your stack.",source:"@site/docs/adoptions/adopt.md",slug:"/adoptions/adopt",permalink:"/adoptions/adopt",version:"current",sidebar_label:"Get Started",sidebar:"someSidebar",previous:{title:"Use Cases",permalink:"/manual/usecases"},next:{title:"Contributing",permalink:"/contributors-guide/contributing"}},u=[{value:"Demonstration Only Modules",id:"demonstration-only-modules",children:[]},{value:"Adoption Modules",id:"adoption-modules",children:[]},{value:"Where to start?",id:"where-to-start",children:[]}],d={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section helps you getting started through the ejection process of the modules included on this project so that you can adopt them on your stack."),Object(i.b)("h3",{id:"demonstration-only-modules"},"Demonstration Only Modules"),Object(i.b)("p",null,"As stated before the project is organised in different services.\nSome of those services were built for demonstration purposes only, like so, the Proxy Service and Web Client  are disposable as their purpose is to serve the live and on premises demonstrations."),Object(i.b)("h3",{id:"adoption-modules"},"Adoption Modules"),Object(i.b)("p",null,"The Engine (:4400), The Token Algorithm Solution (:3700) and the Database (:3306) are three of the key modules which should be considered when crafting an adoption plan.\nAll of these modules can be started on a standalone manner but expect the others to be available with some adaptations.\nThe Token Algorithm Solution is the only service which doesn\u2019t have any dependency, like so, it can run alone with any adaptations or changes to the codebase (rather than a SQL database connection).\nPlease see the diagram below as a visual aid to this reasoning."),Object(i.b)("img",{alt:"Adoption Highlights",src:Object(a.a)("img/architecture-adoption-highlight.png")}),Object(i.b)("h3",{id:"where-to-start"},"Where to start?"),Object(i.b)("p",null,"We recommend first reading the Instructions and Trying the Live Demo; Following that you should read the instructions to run the demo locally and browse through the code.\nFrom this point, and by analysing the architecture section of this documentation you should be able to clearly understand how the 6 services interact with each other and inherently their dependencies."))}l.isMDXComponent=!0}}]);