(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),b=r,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||a;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(114)),i={id:"about",title:"The Token Project",sidebar_label:"Tokenisation",slug:"/"},s={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"The Token Project",description:"Background",source:"@site/docs/about.md",slug:"/",permalink:"/",version:"current",sidebar_label:"Tokenisation",sidebar:"someSidebar",next:{title:"Documentation Guide",permalink:"/docguide"}},c=[{value:"Background",id:"background",children:[]},{value:"The Token Project",id:"the-token-project",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h2",{id:"background"},"Background"),Object(a.a)("p",null,"Safety concerns for women can be categorised into the physical and mobile-related. In the physical, women\u2019s security can be threatened through mobile theft and feeling unsafe or uncomfortable when purchasing or topping up devices. Furthermore, there can be societal disapproval or harassment as a result of using mobile in public, such as on the streets or public transport."),Object(a.a)("p",null,"Mobile-related safety concerns are wide ranging and include unsolicited harassing phone calls and text messages, cyberbullying and online harassment. Some women reportedly receive unwanted calls or messages as a result of women's mobile numbers being misused by agents or customers at points of sale, after the women share their mobile number to top up."),Object(a.a)("p",null,"These safety and security concerns reduce mobile access and use for women. Some women might turn of their devices for periods of time to avoid harassment, while others change their phone numbers. The Lab will design a system that will use an algorithm to generate tokens that will replace the user\u2019s phone numbers. This system will be designed alongside an operator as the generated tokens will be linked to the user\u2019s phone number. The user will request a token via USSD menu, SMS, or phone call to the operator. The token can be accessed via a USSD menu or if SMS or phone call used, then the operator will return a unique number to the user which is associated with their account. This token will be used to pay for services such as topping up or merchant services."),Object(a.a)("h2",{id:"the-token-project"},"The Token Project"),Object(a.a)("p",null,"One of the targets of the Token project is to demonstrate the advantages of using a token that will replace the user's phone number to make mobile money transactions with the goal of improving the security of the users."),Object(a.a)("p",null,"This showcase consists of a system that allows the user to generate a token based on their phone number to execute transactions preventing their phone number from being exposed."),Object(a.a)("p",null,"The available use cases will show that if users use the token they will be able to do the same as they are currently able to do using their phone number."))}u.isMDXComponent=!0}}]);