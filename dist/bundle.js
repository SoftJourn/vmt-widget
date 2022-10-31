!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMTWidget=t():e.VMTWidget=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.constants={CONTAINER_ID:"venue-mapping-tool",FRONT_POINT:"http://localhost:3000",IFRAME_NAME:"__VMT_TOOL__",messages:{missedParams:"VENUE MAPPING TOOL: missed one of the required arguments!",noContainer:function(e){return"VENUE MAPPING TOOL: There is no element with "+e+" id!"}},styles:{DEFAULT_IFRAME_HEIGHT:500,iframe:"width: 100%; height: 100%; border: 0;",fullScreen:"position: fixed; padding: 0; margin: 0;\n             outline: none; border: none; top: 0;left: 0; width: 100%;",spinner:"\n                    .vmt-loading-overlay {\n              position: fixed;\n              left: 0;\n              right: 0;\n              bottom: 0;\n              top: 0;\n              z-index: 99999;\n              background: rgba(255, 255, 255, 0.4);\n              display: flex;\n              justify-content: center;\n              align-items: center;\n        }\n        .vmt-spinner {\n            width: 8.5rem;\n        }\n    \n   "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=l(n(2)),r=n(0),s=l(n(4)),a=n(5);function l(e){return e&&e.__esModule?e:{default:e}}var u=new s.default,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"launch",value:function(e){var t=this;if((0,a.iOSversion)())return alert("Your system is not supported. Please update your iOS version."),!1;if((0,a.isIE)())return alert("Your browser is not supported. Please use the latest version of Edge, Chrome, Mozilla, or Safari."),!1;var n=e.token,i=new o.default({containerId:e.containerId||r.constants.CONTAINER_ID,memberId:e.memberId,eventId:e&&e.eventId,venueId:e.venueId,frontPoint:e.frontPoint||r.constants.FRONT_POINT,mode:e&&e.mode,styles:e.styles,seatslimit:e.seatslimit,hideCloseBtn:e.hideCloseBtn,hideExpandBtn:e.hideExpandBtn,timeZone:e.timeZone,allowIconsEdit:e.allowIconsEdit,showSpinner:e.showSpinner,hideSpinner:e.hideSpinner});return u.launch(),u.method("vmtReady",function(){i.hideSpinner()}),u.method("appRequestStarted",function(){i.showSpinner()}),u.method("appRequestFinished",function(){i.hideSpinner()}),u.method("closeWidget",function(){u.removeMethod("toggleFullScreen"),u.removeMethod("closeWidget"),i.close(u.destroyServer),t.onCloseFn()}),u.method("toggleFullScreen",function(){i.toggleFullScreen()}),u.method("getToken",function(){return n}),u.method("getOptions",function(){return e}),!0}},{key:"method",value:function(e,t){u.method(e,t)}},{key:"onClose",value:function(e){this.onCloseFn=e}}]),e}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),a=n(3),l=(i=a)&&i.__esModule?i:{default:i};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.getElementById(t.containerId);if(this.isValidParams(t,n)){if(n.children&&n.children.length>0)for(;n.firstChild;)n.removeChild(n.lastChild);this.initIframe(o({root:n},t))}}return r(e,[{key:"close",value:function(e){var t=this.root.getElementsByTagName("iframe")[0];this.root.removeChild(t),e()}},{key:"toggleFullScreen",value:function(){var e=document.querySelector('iframe[name="'+s.constants.IFRAME_NAME+'"]');this.initialStyles?(e.style.cssText=this.initialStyles,this.initialStyles=null):""===this.initialStyles?(e.removeAttribute("style"),this.initialStyles=null):(this.initialStyles=e.style.cssText,e.style.cssText=s.constants.styles.fullScreen,e.height=90===window.orientation||-90===window.orientation?"100%":window.innerHeight)}},{key:"isValidParams",value:function(e,t){if(!e.memberId||!e.frontPoint||null===t){var n=null===t?s.constants.messages.noContainer(e.containerId):s.constants.messages.missedParams;return console.error(n),!1}return!0}},{key:"initIframe",value:function(e){var t=e.root;this.root=t,this.options=e,this.isLoading=0;var n=document.createElement("iframe");n.name=s.constants.IFRAME_NAME,n.style.cssText=e.styles||s.constants.styles.iframe,n.src=this.getIframeUrl(e),this.showSpinner();var i=t.getElementsByTagName("iframe")[0];i&&t.removeChild(i),t.appendChild(n),n.focus()}},{key:"getIframeUrl",value:function(e){var t=e.frontPoint,n=e.memberId,i=e.eventId,o=e.venueId,r=e.mode,s=e.seatslimit,a=e.hideCloseBtn,l=e.hideExpandBtn,u=e.timeZone,d=e.allowIconsEdit;return t+"?member="+n+(i?"&event="+i:"")+"&venue="+o+(r?"&mode="+r:"")+(s?"&seatslimit="+s:"")+(a?"&hideCloseBtn="+a:"")+(l?"&hideExpandBtn="+l:"")+(u?"&timeZone="+u:"")+(d?"&allowIconsEdit="+d:"")}},{key:"showSpinner",value:function(){if(0===this.isLoading){if(this.isLoading++,this.options.showSpinner&&this.options.showSpinner instanceof Function)return this.options.showSpinner();if(document.getElementById("spinnerDiv"))return;var e=document.createElement("style");e.type="text/css",e.setAttribute("id","vmt-widget-spinner-styles"),e.innerHTML=s.constants.styles.spinner,document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("div");t.setAttribute("id","spinnerDiv"),t.innerHTML="\n            <img src="+l.default+' alt="loading" class="vmt-spinner" /> ',this.root.appendChild(t),t.classList.add("vmt-loading-overlay")}else this.isLoading++}},{key:"hideSpinner",value:function(){if(this.isLoading--,0===this.isLoading){if(this.options.hideSpinner&&this.options.hideSpinner instanceof Function)return this.options.hideSpinner();var e=document.getElementById("spinnerDiv"),t=document.getElementById("vmt-widget-spinner-styles");t&&document.getElementsByTagName("head")[0].removeChild(t),e&&this.root.removeChild(e)}}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n.p+"dist/829dedf027ed19b0bed93870e03e6b18.gif"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){this.method=function(e,t){o[e]=t},this.removeMethod=function(e){delete o[e]},this.launch=function(){window.addEventListener("message",r)},this.destroyServer=function(){window.removeEventListener("message",r)}};var o={};function r(e){var t=void 0;if(e.originalEvent&&(e=e.originalEvent),e.data&&"string"==typeof e.data&&""!==e.data){try{t=JSON.parse(e.data)}catch(e){}if(t&&"2.0"===t.jsonrpc&&!t.error&&!t.result){if("function"!=typeof o[t.method])return a(e.source,-32601,"Method not found: "+t.method,t.id);if(t.method&&!Array.isArray(t.params))return a(e.source,-32700,"Invalid request",t.id);try{var n=o[t.method].apply(this,t.params);!(r=n)||"object"!==(void 0===r?"undefined":i(r))&&"function"!=typeof r||"function"!=typeof r.then?s(n):n.then(s).catch(function(n){a(e.source,-32e3,n.message||"",t.id)})}catch(n){throw a(e.source,-32e3,n.message,t.id),n}var r}}function s(n){if(!e.source)return!1;t.id&&e.source.postMessage(JSON.stringify({jsonrpc:"2.0",result:n,id:t.id}),"*"),console.log({jsonrpc:"2.0",result:n,id:t.id})}function a(e,t,n,i){var o=JSON.stringify({jsonrpc:"2.0",code:t,error:n,id:i||null});e&&e.postMessage(o,"*")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIE=function(){var e=navigator.userAgent;return e.indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1},t.iOSversion=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return!((e=[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]).length&&e[0]>=11)}}}])});