var e,t,n=Object.prototype,a=Function.prototype.toString,o=n.hasOwnProperty,s=a.call(Object),i=n.toString,r=(e=Object.getPrototypeOf,t=Object,function(n){return e(t(n))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var n,a=this.callbacksLookup["*"]||[],o=c(this.callbacksLookup[e]||[]);!(n=o()).done;)(0,n.value)({name:e,value:t});for(var s,i=c(a);!(s=i()).done;)(0,s.value)({name:e,value:t})},on:function(e,t){for(var n,a=c(Array.isArray(e)?e:[e]);!(n=a()).done;){var o=n.value;this.callbacksLookup[o]||(this.callbacksLookup[o]=[]),this.callbacksLookup[o].push(t)}}};var m=new u;function d(e,t){void 0===t&&(t={}),e=e||"tigerlily";var n=t.defaults,l=void 0===n?{}:n,c=JSON.parse(localStorage.getItem(e)||"{}",v);return c=Object.assign(l,c),new Proxy(c,function t(n){return{get:function(e,a){return g(e[a])?new Proxy(e[a],t(n)):e[a]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(n,_));var u=t[l],d=g(u)?JSON.parse(JSON.stringify(u,_),v):u,b=g(c)?JSON.parse(JSON.stringify(c,_),v):c,E=function(e,t){if(e===t)return"";var n="";return function e(t,n,l){l=l||"",Array.isArray(t)?function(t,n,a){t.forEach((t,o,s)=>{const i=`${a}[${o}]`;n.call(s,t,o,s,i),e(s[o],n,i)})}(t,n,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=i.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var n=o.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==s}(t)&&function(t,n,a){for(const o in t){const s=a?`${a}.${o}`:o;n.call(t,t[o],o,t,s),e(t[o],n,s)}}(t,n,l)}(e,function(e,a,o,s){e===t&&(n=s)}),n}(n,c)||l;return m.emit(E,{prop:l,path:E,oldValue:d,value:b}),!0}}}(c))}function g(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function _(e,t){if(this[e]instanceof Date){var n=this[e].getTime();return n?{__isDate:!0,ms:n}:void 0}return t}function v(e,t){return g(t)&&t.__isDate?new Date(t.ms):t}let b;d.on=function(e,t){m.on(e,function(e){t(e.value)})},b||(b=d("polite-email-popup")),window.persistentGlobals=b;var E={};function O(e){let t="modal"===e?b.modalClosedDate:b.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}const f={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}},p={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:15,aggressive:10},marketing:{notAggressive:15,aggressive:10}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};let T={};function L(e){return T[e]||document.querySelector(e)}function S(e){return"number"==typeof e&&!Number.isNaN(e)}function A(e){document.body.insertAdjacentHTML("beforeend",e)}function M(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=!1;if("undefined"!=typeof window){var y={get passive(){h=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var B="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),w=[],R=!1,P=-1,C=void 0,D=void 0,q=function(e){return w.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},N=function(e){var t=e||window.event;return!!q(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function k(){b.modalClosedDate=Date.now(),document.body.classList.remove(E.BODY_CLASS_MODAL_OPEN),E.MODAL_ELEM.style.display="none",document.querySelectorAll(E.FOCUSABLE_SELECTORS).forEach(e=>e.removeAttribute("tabindex")),document.querySelectorAll("body > [aria-hidden]").forEach(e=>e.removeAttribute("aria-hidden")),E.MODAL_ELEM.setAttribute("aria-hidden","true"),E.activeElement&&E.activeElement.focus(),function(e){if(B){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,w=w.filter(function(t){return t.targetElement!==e}),R&&0===w.length&&(document.removeEventListener("touchmove",N,h?{passive:!1}:void 0),R=!1)}else(w=w.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==D&&(document.body.style.paddingRight=D,D=void 0),void 0!==C&&(document.body.style.overflow=C,C=void 0)})}(E.MODAL_ELEM)}function $(e){27===e.keyCode&&document.body.classList.contains(E.BODY_CLASS_MODAL_OPEN)&&k()}function U(e){e.preventDefault();let t=e.currentTarget.querySelector(E.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);E.onSubmit({event:e,email:t.value}),k()}function x(e){e.target.closest(E.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||k()}function V(){b.bottomBarClosedDate=Date.now(),E.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(E.BODY_CLASS_BOTTOM_BAR_OPEN)}function j(e){e.preventDefault();let t=e.currentTarget.querySelector(E.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);E.onSubmit({event:e,email:t.value}),V()}function F(e){var t;t=()=>{var t;!function(e){const t={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:()=>{console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open"};Object.assign(E,t,e),window.temporaryGlobals=E}(e),E.showDebugNotice&&A("<div class='polite-email-popup__debug-notice'></div>"),A(function({imageSrc:e,headingText:t,descriptionText:n,mainButtonText:a}){return`\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="${e}">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">${t}</h2>\n        <p class="email-modal__description" id="email-modal-description">${n}</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="you@example.com" required>\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">${a}</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n`}(E)),A(function({headingText:e,mainButtonText:t,closeButtonText:n}){return`<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">${e}</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com" required>\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">${t}</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">${n}</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>`}(E)),function(){let{SELECTORS:e}=E;Object.assign(E,{MODAL_ELEM:L(e.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:L(e.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:L(e.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:L(e.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:L(e.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:L(e.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:L(e.DEBUG_ELEM)})}(),d.on("*",function({}){let[e,t,n]=function(){let[e,t]=function(){let e=E.websiteType,t=E.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:f.pageViews[e][t],activeTimeOnPage:f.activeTimeOnPage[e][t],activeTimeOnSite:f.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:f.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:b.pageViews,activeTimeOnPage:b.activeTimeOnPage,activeTimeOnSite:b.activeTimeOnSite,highestScrollPercentageAcrossAllPages:b.highestScrollPercentageAcrossAllPages}]}();return[Object.keys(e).every(n=>t[n]>=e[n]),e,t]}(),[a,o,s]=function(){let[e,t]=function(){let e=E.websiteType,t=E.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:p.pageViews[e][t],activeTimeOnPage:p.activeTimeOnPage[e][t],activeTimeOnSite:p.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:p.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:b.pageViews,activeTimeOnPage:b.activeTimeOnPage,activeTimeOnSite:b.activeTimeOnSite,highestScrollPercentageAcrossAllPages:b.highestScrollPercentageAcrossAllPages}]}();return[Object.keys(e).every(n=>t[n]>=e[n]),e,t]}();e&&(E.isModalOpenable=!0),a&&(E.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(E.BODY_CLASS_BOTTOM_BAR_OPEN)),E.showDebugNotice&&function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a,bottomBarActualValues:o,bottomBarMeetsRequirements:s}){E.DEBUG_NOTICE_ELEM.innerHTML=function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a}){let o=O("modal"),s=O("bottom-bar");return`<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">${E.websiteType.charAt(0).toUpperCase()+E.websiteType.slice(1)} website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">${t.pageViews}</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.pageViews}</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.pageViews}</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">${t.highestScrollPercentageAcrossAllPages}% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.highestScrollPercentageAcrossAllPages}%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.highestScrollPercentageAcrossAllPages}%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnSite}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnSite}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.activeTimeOnSite}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnPage}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnPage}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.activeTimeOnPage}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal closed: </span>\n    <span class="debug-email-forms__stat-value">${o?o.days+" days ago":"never"}</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar closed: </span>\n    <span class="debug-email-forms__stat-value">${s?s.days+" days ago":"never"}</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    ${n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}\n  </div>\n</div>`}({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a,bottomBarActualValues:o,bottomBarMeetsRequirements:s})}({modalRequirements:t,modalActualValues:n,modalMeetsRequirements:e,bottomBarRequirements:o,bottomBarActualValues:s,bottomBarMeetsRequirements:a})}),S(b.pageViews)?b.pageViews++:b.pageViews=1,S(b.highestScrollPercentageAcrossAllPages)||(b.highestScrollPercentageAcrossAllPages=0),S(b.activeTimeOnSite)||(b.activeTimeOnSite=0),b.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var n=!0,a=!1;return function(){var t=arguments;a||(a=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),a=!1},n?0:1e3),n=!1)}}(function(){!function(){let e=function(){let e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=window.pageYOffset/(e-document.documentElement.clientHeight);return Math.floor(100*t)}();e>b.highestScrollPercentageAcrossAllPages&&(b.highestScrollPercentageAcrossAllPages=e)}(),b.activeTimeOnPage++,b.activeTimeOnSite++})),E.showDebugNotice&&document.addEventListener("click",e=>{e.target.closest(E.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(E.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(b.pageViews=100,b.activeTimeOnPage=100,b.activeTimeOnSite=100,b.highestScrollPercentageAcrossAllPages=100)}),t=()=>{E.isModalOpenable&&function(){E.activeElement=document.activeElement,E.MODAL_ELEM.classList.add("show"),document.body.classList.add(E.BODY_CLASS_MODAL_OPEN),E.MODAL_ELEM.querySelector(E.FOCUSABLE_SELECTORS).focus();const e=document.querySelectorAll(E.FOCUSABLE_SELECTORS),t=E.MODAL_ELEM.querySelectorAll(E.FOCUSABLE_SELECTORS),n=Array.from(t);e.forEach(e=>{n.includes(e)||e.setAttribute("tabindex","-1")}),E.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(e=>{e!==E.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(B){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!w.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:{}};w=[].concat(M(w),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(P=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-P;!q(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?N(e):e.stopPropagation())}(t,e)},R||(document.addEventListener("touchmove",N,h?{passive:!1}:void 0),R=!0)}}else{setTimeout(function(){void 0===D&&(window,document),void 0===C&&(C=document.body.style.overflow,document.body.style.overflow="hidden")});var a={targetElement:e,options:{}};w=[].concat(M(w),[a])}}(E.MODAL_ELEM)}()},document.addEventListener("mouseout",function(e){let n=e.clientY<20,a=null===e.relatedTarget,o="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();n&&a&&o&&t&&t()}),E.MODAL_ELEM.addEventListener("click",x),E.MODAL_FORM_ELEM.addEventListener("submit",U),E.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",k),document.addEventListener("keydown",$),E.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",j),E.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",V)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var I={contentWebsite:function(e){e.websiteType="content",F(e)},marketingWebsite:function(e){e.websiteType="marketing",F(e)}};export default I;
//# sourceMappingURL=polite-email-popup.modern.js.map
