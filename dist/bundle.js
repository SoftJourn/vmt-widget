!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMTWidget=t():e.VMTWidget=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t={};e.r(t),e.d(t,{default:()=>v});var n="__VMT_TOOL__",o="VENUE MAPPING TOOL: missed one of the required arguments!",i=function(e){return"VENUE MAPPING TOOL: There is no element with "+e+" id!"},r="width: 100%; height: 100%; border: 0;",s="position: fixed; padding: 0; margin: 0;\n             outline: none; border: none; top: 0;left: 0; width: 100%;",a="\n                    .vmt-loading-overlay {\n              position: fixed;\n              left: 0;\n              right: 0;\n              bottom: 0;\n              top: 0;\n              z-index: 99999;\n              background: rgba(255, 255, 255, 0.4);\n              display: flex;\n              justify-content: center;\n              align-items: center;\n        }\n        .vmt-spinner {\n            width: 8.5rem;\n        }\n    \n   ";const l=e.p+"80ba30677950b0a0de9b.gif";function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.getElementById(t.containerId);if(this.isValidParams(t,n)){if(n.children&&n.children.length>0)for(;n.firstChild;)n.removeChild(n.lastChild);this.initIframe(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({root:n},t))}}var t,f;return t=e,(f=[{key:"close",value:function(e){var t=this.root.getElementsByTagName("iframe")[0];this.root.removeChild(t),e()}},{key:"toggleFullScreen",value:function(){var e=document.querySelector('iframe[name="'.concat(n,'"]'));this.initialStyles?(e.style.cssText=this.initialStyles,this.initialStyles=null):""===this.initialStyles?(e.removeAttribute("style"),this.initialStyles=null):(this.initialStyles=e.style.cssText,e.style.cssText=s,e.height=90===window.orientation||-90===window.orientation?"100%":window.innerHeight)}},{key:"isValidParams",value:function(e,t){if(!e.memberId||!e.frontPoint||null===t){var n=null===t?i(e.containerId):o;return console.error(n),!1}return!0}},{key:"initIframe",value:function(e){var t=e.root;this.root=t,this.options=e,this.isLoading=0;var o=document.createElement("iframe");o.name=n,o.style.cssText=e.styles||r,o.src=this.getIframeUrl(e),this.showSpinner();var i=t.getElementsByTagName("iframe")[0];i&&t.removeChild(i),t.appendChild(o),o.focus()}},{key:"getIframeUrl",value:function(e){var t=e.frontPoint,n=e.memberId,o=e.eventId,i=e.venueId,r=e.mode,s=e.seatslimit,a=e.hideCloseBtn,l=e.hideExpandBtn,c=e.timeZone,d=e.allowIconsEdit;return"".concat(t,"?member=").concat(n).concat(o?"&event="+o:"","&venue=").concat(i).concat(r?"&mode="+r:"").concat(s?"&seatslimit="+s:"").concat(a?"&hideCloseBtn="+a:"").concat(l?"&hideExpandBtn="+l:"").concat(c?"&timeZone="+c:"").concat(d?"&allowIconsEdit="+d:"")}},{key:"showSpinner",value:function(){if(0===this.isLoading){if(this.isLoading++,this.options.showSpinner&&this.options.showSpinner instanceof Function)return this.options.showSpinner();if(document.getElementById("spinnerDiv"))return;var e=document.createElement("style");e.type="text/css",e.setAttribute("id","vmt-widget-spinner-styles"),e.innerHTML=a,document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("div");t.setAttribute("id","spinnerDiv"),t.innerHTML="\n            <img src=".concat(l,' alt="loading" class="vmt-spinner" /> '),this.root.appendChild(t),t.classList.add("vmt-loading-overlay")}else this.isLoading++}},{key:"hideSpinner",value:function(){if(this.isLoading--,0===this.isLoading){if(this.options.hideSpinner&&this.options.hideSpinner instanceof Function)return this.options.hideSpinner();var e=document.getElementById("spinnerDiv"),t=document.getElementById("vmt-widget-spinner-styles");t&&document.getElementsByTagName("head")[0].removeChild(t),e&&this.root.removeChild(e)}}}])&&u(t.prototype,f),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var h={};function m(e){var t;if(e.originalEvent&&(e=e.originalEvent),e.data&&"string"==typeof e.data&&""!==e.data){try{t=JSON.parse(e.data)}catch(e){}if(t&&"2.0"===t.jsonrpc&&!t.error&&!t.result){if("function"!=typeof h[t.method])return r(e.source,-32601,"Method not found: "+t.method,t.id);if(t.method&&!Array.isArray(t.params))return r(e.source,-32700,"Invalid request",t.id);try{var n=h[t.method].apply(this,t.params);!(o=n)||"object"!==p(o)&&"function"!=typeof o||"function"!=typeof o.then?i(n):n.then(i).catch((function(n){r(e.source,-32e3,n.message||"",t.id)}))}catch(n){throw r(e.source,-32e3,n.message,t.id),n}var o}}function i(n){if(!e.source)return!1;t.id&&e.source.postMessage(JSON.stringify({jsonrpc:"2.0",result:n,id:t.id}),"*"),console.log({jsonrpc:"2.0",result:n,id:t.id})}function r(e,t,n,o){var i=JSON.stringify({jsonrpc:"2.0",code:t,error:n,id:o||null});e&&e.postMessage(i,"*")}}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=new function(){this.method=function(e,t){h[e]=t},this.removeMethod=function(e){delete h[e]},this.launch=function(){window.addEventListener("message",m)},this.destroyServer=function(){window.removeEventListener("message",m)}},v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"launch",value:function(e){var t,n=this;if(function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return!((e=[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]).length&&e[0]>=11)}}())return alert("Your system is not supported. Please update your iOS version."),!1;if((t=navigator.userAgent).indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1)return alert("Your browser is not supported. Please use the latest version of Edge, Chrome, Mozilla, or Safari."),!1;var o=e.token,i=new f({containerId:e.containerId||"venue-mapping-tool",memberId:e.memberId,eventId:e&&e.eventId,venueId:e.venueId,frontPoint:e.frontPoint||"http://localhost:3000",mode:e&&e.mode,styles:e.styles,seatslimit:e.seatslimit,hideCloseBtn:e.hideCloseBtn,hideExpandBtn:e.hideExpandBtn,timeZone:e.timeZone,allowIconsEdit:e.allowIconsEdit,showSpinner:e.showSpinner,hideSpinner:e.hideSpinner});return g.launch(),g.method("vmtReady",(function(){i.hideSpinner()})),g.method("appRequestStarted",(function(){i.showSpinner()})),g.method("appRequestFinished",(function(){i.hideSpinner()})),g.method("closeWidget",(function(){g.removeMethod("toggleFullScreen"),g.removeMethod("closeWidget"),i.close(g.destroyServer),n.onCloseFn()})),g.method("toggleFullScreen",(function(){i.toggleFullScreen()})),g.method("getToken",(function(){return o})),g.method("getOptions",(function(){return e})),!0}},{key:"method",value:function(e,t){g.method(e,t)}},{key:"onClose",value:function(e){this.onCloseFn=e}}],null&&y(t.prototype,null),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();return t})()));