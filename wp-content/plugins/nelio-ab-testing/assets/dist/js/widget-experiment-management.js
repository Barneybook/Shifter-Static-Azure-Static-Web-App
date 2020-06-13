!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=64)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},11:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},12:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},13:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},14:function(t,e){!function(){t.exports=this.nab.components}()},15:function(t,e){!function(){t.exports=this.nab.utils}()},2:function(t,e,n){var i=n(11),r=n(12),o=n(13);t.exports=function(t){return i(t)||r(t)||o()}},20:function(t,e){!function(){t.exports=this.nab.data}()},3:function(t,e){!function(){t.exports=this.wp.components}()},4:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},5:function(t,e){!function(){t.exports=this.wp.data}()},6:function(t,e){!function(){t.exports=this.wp.compose}()},64:function(t,e,n){"use strict";n.r(e);var i=n(4),r=n.n(i),o=n(2),a=n.n(o),c=n(0),u=n(1),l=(n(20),n(9)),s=n(15);function f(){return a()(document.querySelectorAll("div[id^=nab_alt_sidebar_]"))}function p(){f().forEach((function(t){return function(t){var e=function(t){var e=t.replace(/^nab_alt_sidebar_[0-9]+_([^-]+-){4}[^-]+_/,"");if(e===t)return!1;return e}(t.getAttribute("id"));if(!e)return;var n=document.getElementById(e);if(!n)return;Object(s.appendSibling)(t.parentNode,n.parentNode)}(t)}))}var d=n(8),b=n.n(d),g=n(3),m=n(6),y=n(5),O=n(7),h=n(14),w=Object(y.withSelect)((function(t){var e=t("nab/data").getPageAttribute;return{isConfirmationDialogForWidgetDuplicationVisible:e("isConfirmationDialogForWidgetDuplicationVisible",!1),isDuplicatingWidgets:e("isDuplicatingWidgets",!1)}})),j=Object(y.withDispatch)((function(t,e){var n=e.experiment,i=e.alternative,r=t("nab/data").setPageAttribute;return{openConfirmationDialog:function(){return r("isConfirmationDialogForWidgetDuplicationVisible",!0)},closeConfirmationDialog:function(){return r("isConfirmationDialogForWidgetDuplicationVisible",!1)},duplicateWidgets:function(){r("isDuplicatingWidgets",!0),b()({path:Object(O.addQueryArgs)("/nab/v1/widget/duplicate-control",{experiment:n,alternative:i}),method:"PUT"}).finally((function(){return window.location.reload()}))}}})),v=Object(m.compose)(w,j)((function(t){var e=t.isConfirmationDialogForWidgetDuplicationVisible,n=t.isDuplicatingWidgets,i=t.openConfirmationDialog,r=t.closeConfirmationDialog,o=t.duplicateWidgets;return Object(c.createElement)("span",null,Object(c.createElement)(g.Button,{className:"page-title-action",onClick:i,style:{height:"auto"}},Object(u._x)("Duplicate Control Widgets","command","nelio-ab-testing")),Object(c.createElement)(h.ConfirmationDialog,{title:Object(u._x)("Duplicate Control Widgets?","title","nelio-ab-testing"),text:Object(u._x)("This will overwrite any widgets you may have in this variant with those included in your theme. Are you sure you want to continue?","user","nelio-ab-testing"),confirmLabel:n?Object(u._x)("Duplicating…","text (widgets)","nelio-ab-testing"):Object(u._x)("Duplicate","command","nelio-ab-testing"),isConfirmEnabled:!n,isCancelEnabled:!n,isOpen:e,onCancel:r,onConfirm:o}))}));function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}window.nab=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},window.nab,{initControlEdition:function(){p(),f().forEach((function(t){return t.parentNode.style.display="none"}))},initAlternativeEdition:function(t){p(),a()(document.querySelectorAll(".sidebars-column-1 > .widgets-holder-wrap, .sidebars-column-2 > .widgets-holder-wrap")).forEach((function(t){return t.style.display="none"})),Object(l.filter)(t.sidebars.map((function(t){return document.getElementById(t)}))).forEach((function(t){return t.parentNode.style.display="block"})),document.querySelector("#wpbody-content .wrap .wp-heading-inline").innerHTML=Object(u._x)("Widget Variant","text","nelio-ab-testing"),a()(document.querySelectorAll(".page-title-action")).forEach((function(t){return t.remove()})),function(t){var e=document.querySelector("#wpbody-content .wrap .wp-heading-inline"),n=document.createElement("div");Object(c.render)(Object(c.createElement)(v,{experiment:t.experiment,alternative:t.alternative}),n),window.aux=n;var i=n.children[0],r=document.createElement("a");r.className="page-title-action",r.innerHTML=Object(u._x)("Back to Test","command","nelio-ab-testing"),r.setAttribute("href",t.links.experimentUrl),Object(s.appendSibling)(r,e),Object(s.appendSibling)(i,e)}(t)}})},7:function(t,e){!function(){t.exports=this.wp.url}()},8:function(t,e){!function(){t.exports=this.wp.apiFetch}()},9:function(t,e){!function(){t.exports=this.lodash}()}});