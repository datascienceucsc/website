(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("23aj")}])},"23aj":function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return j}));var o=e("q1tI"),r=e.n(o),i=e("8Kt/"),c=e.n(i),a=e("YFqc"),u=e.n(a);function l(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(t){return f(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":f(t)})(t)}function y(t,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=b(t);if(n){var r=b(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return y(this,e)}}var m=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(i,t);var n,e,o,r=d(i);function i(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return n=i,(e=[{key:"componentDidMount",value:function(){window.initPlugin()}},{key:"render",value:function(){return null}}])&&l(n.prototype,e),o&&l(n,o),i}(r.a.Component),h=e("5M6V"),g=e("4oJ5"),w=e("fRaF"),S=e("Z4Yb"),_=e.n(S),v=r.a.createElement,j=!0;n.default=function(t){var n=t.allPostsData;return v(h.a,{pageId:"home"},v(c.a,null,v("title",null,g.b)),v(m,null),v("section",null,v("h2",null,"Data Science @ UCSC"),v("hr",null),v("p",null,"Data science is an inter-disciplinary field at the intersection of computer science and statistics that seeks to extract knowledge and create meaningful insights from data."),v("p",null,"Data Science @ UCSC brings students together to bridge the gap between academia and industry through workshops, machine learning competitions, guest lectures and consulting projects.")),v("section",{className:"".concat(_.a.headingMd," ").concat(_.a.padding1px)},v("h2",{className:_.a.headingLg},"Events"),v("hr",null),v("ul",{className:_.a.list},n.filter((function(t){return t.blog})).map((function(t){var n=t.id,e=t.date,o=t.title;return v("li",{className:_.a.listItem,key:n},v(u.a,{href:"/posts/[id]",as:"/posts/".concat(n)},v("a",{className:_.a.blogLink},o)),v("small",{className:_.a.lightText},v(w.a,{dateString:e})))})))))}}},[["/EDR",0,2,1,3,4]]]);