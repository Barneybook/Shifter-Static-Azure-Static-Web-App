this.nab=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(42),o=n(43),i=n(44);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e,n){"use strict";t.exports=n(14)()?globalThis:n(15)},function(t,e,n){"use strict";var r=n(5),o=n(17),i=n(21),c=n(29),u=n(30);(t.exports=function(t,e){var n,o,a,s,f;return arguments.length<2||"string"!=typeof t?(s=e,e=t,t=null):s=arguments[2],r(t)?(n=u.call(t,"c"),o=u.call(t,"e"),a=u.call(t,"w")):(n=a=!0,o=!1),f={value:e,configurable:n,enumerable:o,writable:a},s?i(c(s),f):f}).gs=function(t,e,n){var a,s,f,l;return"string"!=typeof t?(f=n,n=e,e=t,t=null):f=arguments[3],r(e)?o(e)?r(n)?o(n)||(f=n,n=void 0):n=void 0:(f=e,e=n=void 0):e=void 0,r(t)?(a=u.call(t,"c"),s=u.call(t,"e")):(a=!0,s=!1),l={get:e,set:n,configurable:a,enumerable:s},f?i(c(f),l):l}},function(t,e,n){"use strict";var r=n(27)();t.exports=function(t){return t!==r&&null!==t}},function(t,e,n){"use strict";t.exports=function(t){return null!=t}},function(t,e,n){"use strict";var r=n(33);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a symbol");return t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){var r=n(37),o=n(38);t.exports=function(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var c=(t=t||{}).random||(t.rng||r)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,e)for(var u=0;u<16;++u)e[i+u]=c[u];return e||o(c)}},function(t,e,n){var r=n(39),o=n(40),i=n(41);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";t.exports=n(13)()?n(2).Symbol:n(16)},function(t,e,n){"use strict";var r=n(2),o={object:!0,symbol:!0};t.exports=function(){var t,e=r.Symbol;if("function"!=typeof e)return!1;t=e("test symbol");try{String(t)}catch(t){return!1}return!!o[typeof e.iterator]&&(!!o[typeof e.toPrimitive]&&!!o[typeof e.toStringTag])}},function(t,e,n){"use strict";t.exports=function(){return"object"==typeof globalThis&&(!!globalThis&&globalThis.Array===Array)}},function(t,e){var n=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};t.exports=function(){if(this)return this;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(t){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()},function(t,e,n){"use strict";var r,o,i,c=n(3),u=n(6),a=n(2).Symbol,s=n(34),f=n(35),l=n(36),p=Object.create,d=Object.defineProperties,v=Object.defineProperty;if("function"==typeof a)try{String(a()),i=!0}catch(t){}else a=null;o=function(t){if(this instanceof o)throw new TypeError("Symbol is not a constructor");return r(t)},t.exports=r=function t(e){var n;if(this instanceof t)throw new TypeError("Symbol is not a constructor");return i?a(e):(n=p(o.prototype),e=void 0===e?"":String(e),d(n,{__description__:c("",e),__name__:c("",s(e))}))},f(r),l(r),d(o.prototype,{constructor:c(r),toString:c("",(function(){return this.__name__}))}),d(r.prototype,{toString:c((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:c((function(){return u(this)}))}),v(r.prototype,r.toPrimitive,c("",(function(){var t=u(this);return"symbol"==typeof t?t:t.toString()}))),v(r.prototype,r.toStringTag,c("c","Symbol")),v(o.prototype,r.toStringTag,c("c",r.prototype[r.toStringTag])),v(o.prototype,r.toPrimitive,c("c",r.prototype[r.toPrimitive]))},function(t,e,n){"use strict";var r=n(18),o=/^\s*class[\s{/}]/,i=Function.prototype.toString;t.exports=function(t){return!!r(t)&&!o.test(i.call(t))}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t){if("function"!=typeof t)return!1;if(!hasOwnProperty.call(t,"length"))return!1;try{if("number"!=typeof t.length)return!1;if("function"!=typeof t.call)return!1;if("function"!=typeof t.apply)return!1}catch(t){return!1}return!r(t)}},function(t,e,n){"use strict";var r=n(20);t.exports=function(t){if(!r(t))return!1;try{return!!t.constructor&&t.constructor.prototype===t}catch(t){return!1}}},function(t,e,n){"use strict";var r=n(5),o={object:!0,function:!0,undefined:!0};t.exports=function(t){return!!r(t)&&hasOwnProperty.call(o,typeof t)}},function(t,e,n){"use strict";t.exports=n(22)()?Object.assign:n(23)},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var r=n(24),o=n(28),i=Math.max;t.exports=function(t,e){var n,c,u,a=i(arguments.length,2);for(t=Object(o(t)),u=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},c=1;c<a;++c)e=arguments[c],r(e).forEach(u);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=n(25)()?Object.keys:n(26)},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";var r=n(4),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";var r=n(4),o=Array.prototype.forEach,i=Object.create,c=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=i(null);return o.call(arguments,(function(t){r(t)&&c(Object(t),e)})),e}},function(t,e,n){"use strict";t.exports=n(31)()?String.prototype.contains:n(32)},function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,n){"use strict";var r=n(3),o=Object.create,i=Object.defineProperty,c=Object.prototype,u=o(null);t.exports=function(t){for(var e,n,o=0;u[t+(o||"")];)++o;return u[t+=o||""]=!0,i(c,e="@@"+t,r.gs(null,(function(t){n||(n=!0,i(this,e,r(t)),n=!1)}))),e}},function(t,e,n){"use strict";var r=n(3),o=n(2).Symbol;t.exports=function(t){return Object.defineProperties(t,{hasInstance:r("",o&&o.hasInstance||t("hasInstance")),isConcatSpreadable:r("",o&&o.isConcatSpreadable||t("isConcatSpreadable")),iterator:r("",o&&o.iterator||t("iterator")),match:r("",o&&o.match||t("match")),replace:r("",o&&o.replace||t("replace")),search:r("",o&&o.search||t("search")),species:r("",o&&o.species||t("species")),split:r("",o&&o.split||t("split")),toPrimitive:r("",o&&o.toPrimitive||t("toPrimitive")),toStringTag:r("",o&&o.toStringTag||t("toStringTag")),unscopables:r("",o&&o.unscopables||t("unscopables"))})}},function(t,e,n){"use strict";var r=n(3),o=n(6),i=Object.create(null);t.exports=function(t){return Object.defineProperties(t,{for:r((function(e){return i[e]?i[e]:i[e]=t(String(e))})),keyFor:r((function(t){var e;for(e in o(t),i)if(i[e]===t)return e}))})}},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";n.r(e);n(12);var r=n(0),o=n.n(r),i=n(7),c=n.n(i),u=n(8),a=n.n(u);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e,n){n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({path:"/",expires:0},n);var r="".concat(t,"=").concat(encodeURIComponent(e),";");if(0<n.expires){var i=new Date(1*new Date+864e5*n.expires);r+=" expires=".concat(i.toUTCString(),";")}r+=" path=".concat(n.path,";"),document.cookie=r}function l(t){var e=document.cookie.split(";").map((function(t){return t.trim()})).reduce((function(t,e){return t[e.split("=")[0]]=e.split("=")[1],t}),{});if(e[t])return decodeURIComponent(e[t])}var p=n(9),d=n.n(p);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=m(t),r=n.cleanUrl,i=n.hash,c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},y(t),{},e),u=r,a=Object.keys(c);return a.length&&(u+="?"+a.map((function(t){return"".concat(t,"=").concat(encodeURIComponent(c[t]))})).reduce((function(t,e){return"".concat(t,"&").concat(e)}))),i&&(u+="#"+i),u}function y(t){var e=m(t).search;return e?e.split("&").reduce((function(t,e){var n=e.split("="),r=d()(n,2),o=r[0],i=r[1],c=void 0===i?"":i;return o&&(t[o]=decodeURIComponent(c)),t}),{}):{}}function m(t){var e=0<=t.indexOf("#")?t.substr(0,t.indexOf("#")):t,n=0<=t.indexOf("#")?t.substr(t.indexOf("#")+1):"";return{cleanUrl:0<=e.indexOf("?")?e.substr(0,e.indexOf("?")):e,search:0<=e.indexOf("?")?e.substr(e.indexOf("?")+1):"",hash:n}}var h=n(1),g=n.n(h);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e){if(function(t){if(S)return;S=!0;var e=_(),n=Object.keys(t),r=Object.keys(e),i=r.filter((function(t){return!n.includes(t)})),c=(new Date).getTime();E(r.reduce((function(t,n){var r=e[n];return i.includes(n)?14400<Math.abs(c-r)/6e4?t:w({},t,o()({},n,r)):w({},t,o()({},n,c))}),{}))}(e.experiments),(t=t.filter((function(t){return"visit"===t.kind}))).length){var n=(new Date).getTime();E(w({},_(),{},t.reduce((function(t,e){return t[e.experiment]=n,t}),{})))}}var j=[];function _(){try{return JSON.parse(l("nabExperimentsWithPageViews"))}catch(t){return{}}}function E(t){f("nabExperimentsWithPageViews",JSON.stringify(t),{expires:120})}var S=!1;function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;"object"!==c()(t)&&(t=[t]);var n=t.map((function(t){return function(t,e){var n=e.experiments,r=e.heatmapTracking,o=n[t];if(!o)return function(t,e){if(!e.map((function(t){return t.id})).includes(t))return;return{kind:"visit",experiment:t,alternative:0}}(t,r);var i=l("nabAlternative");if(void 0===i)return;var c=i%o.alternatives.length;return{kind:"visit",experiment:t,alternative:c}}(t,e)})).filter((function(t){return!!t}));n.length&&A(n,e)}function k(t,e){void 0===t[0]&&(t=[t]);var n=e.experiments;A(t=t.map((function(t){return function(t,e,n){var r=n[t];if(!r)return;if(r.goals.length<=e)return;var o=l("nabAlternative");if(void 0===o)return;var i=o%r.alternatives.length;return{kind:"conversion",experiment:t,alternative:i,goal:e}}(t.experiment,t.goal,n)})).filter((function(t){return!!t})),e)}function A(t,e){x(t,e);var n=e.siteId,r=e.trackingUrl,i=e.timezone;if((t=t.filter((function(t){return"conversion"!==t.kind||(e=t.experiment,n=t.goal,!!_()[e]&&!j.includes("".concat(e,"-").concat(n))&&(j=[].concat(g()(j),["".concat(e,"-").concat(n)]),!0));var e,n}))).length)if(l("nabIsStagingSite"))t.forEach((function(t){return console.info("[Staging] Event",t)}));else{var c=(new Date).toISOString();t=t.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{id:a()(),timezone:i,timestamp:c})}));var u=r;u=b(u,{e:window.btoa(JSON.stringify(t))}),u=b(u,{a:n}),document.createElement("img").setAttribute("src",u)}}var D=function(t){if("complete"===document.readyState||"interactive"===document.readyState)return t();document.addEventListener("DOMContentLoaded",t)};var C=function(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var N=function(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var I=function(t){return function(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(N(e)&&C(n))if("function"==typeof r)if("number"==typeof o){var i={callback:r,priority:o,namespace:n};if(t[e]){var c,u=t[e].handlers;for(c=u.length;c>0&&!(o>=u[c-1].priority);c--);c===u.length?u[c]=i:u.splice(c,0,i),(t.__current||[]).forEach((function(t){t.name===e&&t.currentIndex>=c&&t.currentIndex++}))}else t[e]={handlers:[i],runs:0};"hookAdded"!==e&&H("hookAdded",e,n,r,o)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var M=function(t,e){return function(n,r){if(N(n)&&(e||C(r))){if(!t[n])return 0;var o=0;if(e)o=t[n].handlers.length,t[n]={runs:t[n].runs,handlers:[]};else for(var i=t[n].handlers,c=function(e){i[e].namespace===r&&(i.splice(e,1),o++,(t.__current||[]).forEach((function(t){t.name===n&&t.currentIndex>=e&&t.currentIndex--})))},u=i.length-1;u>=0;u--)c(u);return"hookRemoved"!==n&&H("hookRemoved",n,r),o}}};var z=function(t){return function(e,n){return void 0!==n?e in t&&t[e].handlers.some((function(t){return t.namespace===n})):e in t}};var F=function(t,e){return function(n){t[n]||(t[n]={handlers:[],runs:0}),t[n].runs++;var r=t[n].handlers;for(var o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];if(!r||!r.length)return e?i[0]:void 0;var u={name:n,currentIndex:0};for(t.__current.push(u);u.currentIndex<r.length;){var a=r[u.currentIndex],s=a.callback.apply(null,i);e&&(i[0]=s),u.currentIndex++}return t.__current.pop(),e?i[0]:void 0}};var R=function(t){return function(){return t.__current&&t.__current.length?t.__current[t.__current.length-1].name:null}};var L=function(t){return function(e){return void 0===e?void 0!==t.__current[0]:!!t.__current[0]&&e===t.__current[0].name}};var U=function(t){return function(e){if(N(e))return t[e]&&t[e].runs?t[e].runs:0}};var W=function(){var t=Object.create(null),e=Object.create(null);return t.__current=[],e.__current=[],{addAction:I(t),addFilter:I(e),removeAction:M(t),removeFilter:M(e),hasAction:z(t),hasFilter:z(e),removeAllActions:M(t,!0),removeAllFilters:M(e,!0),doAction:F(t),applyFilters:F(e,!0),currentAction:R(t),currentFilter:R(e),doingAction:L(t),doingFilter:L(e),didAction:U(t),didFilter:U(e),actions:t,filters:e}},V=W(),H=(V.addAction,V.addFilter,V.removeAction,V.removeFilter,V.hasAction,V.hasFilter,V.removeAllActions,V.removeAllFilters,V.doAction);V.applyFilters,V.currentAction,V.currentFilter,V.doingAction,V.doingFilter,V.didAction,V.didFilter,V.actions,V.filters;function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){var e=l("nabAlternative");return Object.keys(t).map((function(t){return Number.parseInt(t)})).reduce((function(n,r){var i=t[r];return i.goals.forEach((function(t){var c=t.conversionActions.map((function(n){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n,{experiment:r,alternative:e%i.alternatives.length,goal:t.id})}));n=[].concat(g()(n),g()(c))})),n}),[])}var q=W();function J(t){var e=t.currentPostId;D((function(){return function(t){X(t.experiments).filter((function(t){return"nab/page-view"!==t.type})).forEach((function(t){return function(t){q.doAction("nab.addEventListenersRequiredByAction",t)}(t)}))}(t)})),e&&function(t){var e=t.currentPostId;k(function(t,e){return Object.keys(t).map((function(t){return Number.parseInt(t)})).reduce((function(n,r){var o=t[r].goals.filter((function(t){return function(t,e){return t.conversionActions.reduce((function(t,n){return t||e(n)}),!1)}(t,e)})).map((function(t){return{goal:t.id,experiment:r}}));return[].concat(g()(n),g()(o))}),[])}(t.experiments,(function(t){return"nab/page-view"===t.type&&t.attributes.postId===e})),t)}(t)}var Y=n(10),Z=n.n(Y),$=n(11),G=n.n($),Q=window.Node;window.XPathResult;function K(t,e){if(t.nodeType===Q.DOCUMENT_NODE)return"/";for(var n=[],r=t;r;){var o=tt(r,e);if(!o)break;if(n.push(o),o.optimized)break;r=r.parentNode}return n.reverse(),(n.length&&n[0].optimized?"":"/")+n.join("/")}function tt(t,e){var n,r=function(t){function e(t,e){return t===e||(t.nodeType===Q.ELEMENT_NODE&&e.nodeType===Q.ELEMENT_NODE?t.localName===e.localName:t.nodeType===e.nodeType||(t.nodeType===Q.CDATA_SECTION_NODE?Q.TEXT_NODE:t.nodeType)===(e.nodeType===Q.CDATA_SECTION_NODE?Q.TEXT_NODE:e.nodeType))}var n,r=t.parentNode?t.parentNode.children:null;if(!r)return 0;for(var o=0;o<r.length;++o)if(e(t,r[o])&&r[o]!==t){n=!0;break}if(!n)return 0;for(var i=1,c=0;c<r.length;++c)if(e(t,r[c])){if(r[c]===t)return i;++i}return-1}(t);if(-1===r)return null;switch(t.nodeType){case Q.ELEMENT_NODE:if(e&&t.getAttribute("id"))return new et('//*[@id="'+t.getAttribute("id")+'"]',!0);n=t.localName;break;case Q.ATTRIBUTE_NODE:n="@"+t.nodeName;break;case Q.TEXT_NODE:case Q.CDATA_SECTION_NODE:n="text()";break;case Q.PROCESSING_INSTRUCTION_NODE:n="processing-instruction()";break;case Q.COMMENT_NODE:n="comment()";break;case Q.DOCUMENT_NODE:default:n=""}return r>0&&(n+="["+r+"]"),new et(n,t.nodeType===Q.DOCUMENT_NODE)}var et=function(){function t(e,n){Z()(this,t),this.value=e,this.optimized=n||!1}return G()(t,[{key:"toString",value:function(){return this.value}}]),t}();function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(n,!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ot=50,it=500,ct=12e4;function ut(t){D((function(){return function(t){var e=(new Date).getTime();document.addEventListener("click",(function(n){var r=function(t,e,n){var r=t.target||t.srcElement;if(!r)return!1;var o=r.getBoundingClientRect();if(!o||!o.width||!o.height)return!1;var i=(t.clientX-o.left)/o.width,c=(t.clientY-o.top)/o.height;return{kind:"click",timeToClick:Math.round(((new Date).getTime()-e)/1e3),windowWidth:document.body.offsetWidth||0,xpath:K(r,n.optimizeXPath),x:i,y:c}}(n,e,t);r&&A(t.heatmapTracking.map((function(e){return rt({},at(e.id,e.type,t),{},r)})),t)}));var n=window.pageYOffset+window.innerHeight;document.addEventListener("scroll",(function(){var t=window.pageYOffset+window.innerHeight;t>n&&(n=t)}));var r=new Array(Math.ceil(document.body.clientHeight/ot)).fill(0),o=0,i=Math.ceil(ct/it);setTimeout((function t(){for(var e=window.pageYOffset,n=e+window.innerHeight,c=Math.ceil(e/ot),u=Math.min(Math.floor(n/ot),r.length),a=c;a<=u;++a)++r[a];++o<i&&setTimeout(t,it)}),it);var c=window.innerHeight,u=document.body.clientHeight;window.addEventListener("beforeunload",(function(){var e=rt({},{kind:"scroll",windowWidth:document.body.offsetWidth||0},{firstFold:c,sweetSpot:st(r),maxScroll:n,documentHeight:u}),o=t.heatmapTracking.map((function(n){return rt({},at(n.id,n.type,t),{},e)}));o.length&&A(o,t)}))}(t)}))}function at(t,e,n){return"heatmap"===e?{alternative:0,experiment:t}:{alternative:l("nabAlternative")%n.experiments[t].alternatives.length,experiment:t}}function st(t){var e,n,r=function(t){return t.reduce((function(t,e,n){var r=t[t.length-1];return r&&r.value===e?++r.size:t.push({start:n,value:e,size:1}),t}),[])}(t),o=r.reduce((function(t,e){var n=e.value;return Math.max(t,n)}),0),i=r.filter((function(t){return t.value===o})),c=i.reduce((function(t,e){var n=e.size;return Math.max(n,t)}),0),u=i.filter((function(t){return t.size===c})),a=(e=u,n=Math.round(Math.random()*(e.length-1)),e[n]);return ot*(a.start+Math.floor(a.size/2))}function ft(t,e){do{if(e.toLowerCase()===t.nodeName.toLowerCase())return t;t=t.parentNode}while(t);return!1}var lt=[];function pt(t){var e=t.experiment,n=t.alternative;lt=[].concat(g()(lt),[{experiment:e,alternative:n}]),function(){if(dt)return;dt=!0,document.addEventListener("click",vt),document.addEventListener("keyup",vt)}()}D((function(){var t=window.jQuery;t&&t.ajaxPrefilter((function(t,e){try{if("nf_ajax_submit"!==e.data.action)return}catch(t){return}t.data+="&nab_experiments_with_page_view="+encodeURIComponent(bt())}))}));var dt=!1;function vt(t){var e=ft(t.target||t.srcElement,"form");if(e){var n=bt();if(n)(function(t){var e=t.querySelector("input[name=nab_experiments_with_page_view]");if(e)return e;return(e=document.createElement("input")).setAttribute("type","hidden"),e.setAttribute("name","nab_experiments_with_page_view"),t.appendChild(e),e})(e).setAttribute("value",n)}}function bt(){var t=function(){try{var t=JSON.parse(l("nabExperimentsWithPageViews"));return Object.keys(t).map((function(t){return parseInt(t)}))}catch(t){return{}}}();return lt.filter((function(e){var n=e.experiment;return t.includes(n)})).map((function(t){var e=t.experiment,n=t.alternative;return"".concat(e,":").concat(n)})).join(",")}function yt(t){q.addAction("nab.addEventListenersRequiredByAction","nab/listenToClickEvent",(function(e){return"nab/click"===e.type&&function(t,e){document.addEventListener("click",(function(n){var r=n.target||n.srcElement;if(r&&r.closest){var o=t.attributes.mode,i=t.experiment,c=t.goal,u=t.attributes.value;"id"===o&&(u="#"+u),r.closest(u)&&e(i,c)}}))}(e,t)})),q.addAction("nab.addEventListenersRequiredByAction","nab/listenToClickExternalLinkEvent",(function(e){return"nab/click-external-link"===e.type&&function(t,e){document.addEventListener("click",(function(n){var r=ft(n.target||n.srcElement,"a");if(r){var o=t.attributes,i=o.mode,c=o.value,u=t.experiment,a=t.goal,s=r.getAttribute("href")||"";switch(i){case"exact":if(s!==c)return;break;case"partial":if(-1===s.indexOf(c))return;break;case"start":if(!s.startsWith(c))return;break;case"end":if(!s.endsWith(c))return;break;case"regex":try{if(!new RegExp(c).test(s))return}catch(t){return}}e(u,a)}}))}(e,t)}));var e=["nab/form-submission","nab/wc-order"];q.addAction("nab.addEventListenersRequiredByAction","nab/prepareFormForSyncingEventInWordPress",(function(t){return e.includes(t.type)&&pt(t)}))}function mt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!function(){if(f("nabCheckWritePermission",!0),!l("nabCheckWritePermission"))return!1;return function(t){document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")}("nabCheckWritePermission"),!0}()&&(!!function(t){if(!t)return!0;return!!l(t)}(e)&&(!l("nabIsVisitorExcluded")&&(!!l("nabIsStagingSite")||function(t){(function(){var t=l("nabParticipation")||"";return/^(true|false),[0-9]{1,3}$/.test(t)})()&&!function(t){return(l("nabParticipation")||"").split(",")[1]!=="".concat(t)}(t)||function(t){var e=Math.min(100,Math.floor(101*Math.random()));f("nabParticipation","".concat(e<=t?"true":"false",",").concat(t),{expires:120})}(t);return 0===l("nabParticipation").indexOf("true")}(t))))}function ht(t){if(document.createEvent){var e=document.createEvent("HTMLEvents");e.initEvent(t,!0,!0),e.eventName=t,setTimeout((function(){return document.dispatchEvent(e)}),1)}}n.d(e,"init",(function(){return Ot})),n.d(e,"view",(function(){return wt})),n.d(e,"convert",(function(){return xt})),n.d(e,"hooks",(function(){return jt})),n.d(e,"debug",(function(){return _t}));var gt=!1;function Ot(t){var e;-1===(e=window.navigator.userAgent||"").indexOf("MSIE ")&&-1===e.indexOf("Trident/")&&(mt((gt=t).participationChance,gt.gdprCookie)&&(yt(xt),J(gt),ut(gt),ht("nab-main-ready")))}function wt(t){gt&&mt(gt.participationChance,gt.gdprCookie)&&T(t,gt)}function xt(t,e){gt&&(mt(gt.participationChance,gt.gdprCookie)&&k({experiment:t,goal:e},gt))}var jt=q;function _t(){return gt}window.onNabValidContent((function(){ht("nab-main-init-available")}))}]);