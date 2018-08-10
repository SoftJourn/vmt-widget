!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMTWidget=t():e.VMTWidget=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.constants={CONTAINER_ID:"venue-mapping-tool",FRONT_POINT:"http://localhost:3000",IFRAME_NAME:"__VMT_TOOL__",messages:{missedParams:"VENUE MAPPING TOOL: missed one of the required arguments!",noContainer:function(e){return"VENUE MAPPING TOOL: There is no element with "+e+" id!"}},styles:{DEFAULT_IFRAME_HEIGHT:500,iframe:"width: 100%; height: 100%;",fullScreen:"position: fixed; padding: 0; margin: 0;\n             outline: none; border: none; top: 0;left: 0; width: 100%;",spinner:'\n                .vmt-loading {\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        top: 0;\n        z-index: 99999;\n        background: rgba(255,255,255,0);\n    }\n    .vmt-spinner {\n        height:auto;\n        width:auto;\n        position: absolute;\n        top:50%;\n        left:50%;\n        margin: -30px 0 0 -30px;\n    }\n    .bounceball {\n        height: 105px;\n        width: 105px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -75px 0 0 -60px;\n        -webkit-animation: rotation 1s infinite linear;\n        -moz-animation: rotation 1s infinite linear;\n        -o-animation: rotation 1s infinite linear;\n        animation: rotation 1s infinite linear;\n        border:6px solid rgba(115,194,69,.2);\n        border-radius:100%;\n    }\n\n    .bounceball:before {\n        content:"";\n        display:inline-block;\n        position:absolute;\n        left:-6px;\n        top:-6px;\n        height:100%;\n        width:100%;\n        border-top:6px solid rgba(115,194,69,.8);\n        border-left:6px solid transparent;\n        border-bottom:6px solid transparent;\n        border-right:6px solid transparent;\n        border-radius:100%;\n    }\n\n    @-webkit-keyframes rotation {\n        from {-webkit-transform: rotate(0deg);}\n        to {-webkit-transform: rotate(359deg);}\n    }\n    @-moz-keyframes rotation {\n        from {-moz-transform: rotate(0deg);}\n        to {-moz-transform: rotate(359deg);}\n    }\n    @-o-keyframes rotation {\n        from {-o-transform: rotate(0deg);}\n        to {-o-transform: rotate(359deg);}\n    }\n    @keyframes rotation {\n        from {transform: rotate(0deg);}\n        to {transform: rotate(359deg);}\n    }\n    .picture {\n        display: inline-block;\n        vertical-align: middle;\n        background-size: contain;\n        width: 100px;\n        height: 75px;\n        background-repeat:no-repeat;\n    }'}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(2)),i=n(0);function a(e){return e&&e.__esModule?e:{default:e}}var s=new(a(n(3)).default),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"launch",value:function(e){var t=this,n=e.token,o=new r.default({containerId:e.containerId||i.constants.CONTAINER_ID,memberId:e.memberId,eventId:e&&e.eventId,venueId:e.venueId,frontPoint:e.frontPoint||i.constants.FRONT_POINT,mode:e&&e.mode,styles:e.styles,seatslimit:e.seatslimit,hideCloseBtn:e.hideCloseBtn});s.launch(),s.method("vmtReady",function(){o.hideSpinner()}),s.method("closeWidget",function(){s.removeMethod("toggleFullScreen"),s.removeMethod("closeWidget"),o.close(s.destroyServer),t.onCloseFn()}),s.method("toggleFullScreen",function(){o.toggleFullScreen()}),s.method("getToken",function(){return n})}},{key:"method",value:function(e,t){s.method(e,t)}},{key:"onClose",value:function(e){this.onCloseFn=e}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.getElementById(t.containerId);this.isValidParams(t,n)&&this.initIframe(o({root:n},t))}return r(e,[{key:"close",value:function(e){var t=this.root.getElementsByTagName("iframe")[0];this.root.removeChild(t),e()}},{key:"toggleFullScreen",value:function(){var e=document.querySelector('iframe[name="'+i.constants.IFRAME_NAME+'"]');this.initialStyles?(e.style.cssText=this.initialStyles,this.initialStyles=null):""===this.initialStyles?(e.removeAttribute("style"),this.initialStyles=null):(this.initialStyles=e.style.cssText,e.style.cssText=i.constants.styles.fullScreen,e.height=window.innerHeight)}},{key:"isValidParams",value:function(e,t){if(!e.memberId||!e.frontPoint||null===t){var n=null===t?i.constants.messages.noContainer(e.containerId):i.constants.messages.missedParams;return console.error(n),!1}return!0}},{key:"initIframe",value:function(e){var t=e.root;this.root=t,this.options=e;var n=document.createElement("iframe");n.name=i.constants.IFRAME_NAME,n.style.cssText=e.styles||i.constants.styles.iframe,n.frameBorder=0,n.src=this.getIframeUrl(e),this.showSpinner(),t.appendChild(n),n.focus()}},{key:"getIframeUrl",value:function(e){var t=e.frontPoint,n=e.memberId,o=e.eventId,r=e.venueId,i=e.mode,a=e.seatslimit,s=e.hideCloseBtn;return t+"?member="+n+(o?"&event="+o:"")+"&venue="+r+(i?"&mode="+i:"")+(a?"&seatslimit="+a:"")+(s?"&hideCloseBtn="+s:"")}},{key:"showSpinner",value:function(){var e=document.createElement("style");e.type="text/css",e.setAttribute("id","vmt-widget-spinner-styles"),e.innerHTML=i.constants.styles.spinner,document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");t.appendChild(n),t.appendChild(o),this.root.appendChild(t),this.root.appendChild(r),r.classList.add("vmt-loading"),t.classList.add("vmt-spinner"),n.classList.add("bounceball"),o.classList.add("picture")}},{key:"hideSpinner",value:function(){var e=document.getElementById("vmt-widget-spinner-styles");document.getElementsByTagName("head")[0].removeChild(e);var t=document.getElementById(this.options.containerId),n=t.getElementsByClassName("vmt-spinner")[0],o=t.getElementsByClassName("vmt-loading")[0];this.root.removeChild(o),this.root.removeChild(n)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.method=function(e,t){o[e]=t},this.removeMethod=function(e){delete o[e]},this.launch=function(){window.addEventListener("message",r)},this.destroyServer=function(){window.removeEventListener("message",r)}};var o={};function r(e){var t=void 0;if(e.originalEvent&&(e=e.originalEvent),e.data&&"string"==typeof e.data&&""!==e.data){try{t=JSON.parse(e.data)}catch(e){}if(t&&"2.0"===t.jsonrpc&&!t.error&&!t.result){if("function"!=typeof o[t.method])return r(e.source,-32601,"Method not found: "+t.method,t.id);if(t.method&&!Array.isArray(t.params))return r(e.source,-32700,"Invalid request",t.id);try{var n=o[t.method].apply(this,t.params);Promise.resolve(n).then(function(n){if(!e.source)return!1;t.id&&e.source.postMessage(JSON.stringify({jsonrpc:"2.0",result:n,id:t.id}),"*")})}catch(n){throw r(e.source,-32e3,n.message,t.id),n}}}function r(e,t,n,o){var r=JSON.stringify({jsonrpc:"2.0",code:t,error:n,id:o||null});e&&e.postMessage(r,"*")}}}])});