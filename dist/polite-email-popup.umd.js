!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).PoliteEmailPopup=t()}(this,function(){var e,t,a=Object.prototype,n=Function.prototype.toString,s=a.hasOwnProperty,o=n.call(Object),i=a.toString,r=(e=Object.getPrototypeOf,t=Object,function(a){return e(t(a))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var a,n=this.callbacksLookup["*"]||[],s=c(this.callbacksLookup[e]||[]);!(a=s()).done;)(0,a.value)({name:e,value:t});for(var o,i=c(n);!(o=i()).done;)(0,o.value)({name:e,value:t})},on:function(e,t){for(var a,n=c(Array.isArray(e)?e:[e]);!(a=n()).done;){var s=a.value;this.callbacksLookup[s]||(this.callbacksLookup[s]=[]),this.callbacksLookup[s].push(t)}}};var m,d=new u;function g(e,t){void 0===t&&(t={}),e=e||"tigerlily";var a=t.defaults,l=void 0===a?{}:a,c=JSON.parse(localStorage.getItem(e)||"{}",b);return c=Object.assign(l,c),new Proxy(c,function t(a){return{get:function(e,n){return _(e[n])?new Proxy(e[n],t(a)):e[n]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(a,v));var u=t[l],m=_(u)?JSON.parse(JSON.stringify(u,v),b):u,g=_(c)?JSON.parse(JSON.stringify(c,v),b):c,f=function(e,t){if(e===t)return"";var a="";return function e(t,a,l){l=l||"",Array.isArray(t)?function(t,a,n){t.forEach((t,s,o)=>{const i=`${n}[${s}]`;a.call(o,t,s,o,i),e(o[s],a,i)})}(t,a,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=i.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var a=s.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&n.call(a)==o}(t)&&function(t,a,n){for(const s in t){const o=n?`${n}.${s}`:s;a.call(t,t[s],s,t,o),e(t[s],a,o)}}(t,a,l)}(e,function(e,n,s,o){e===t&&(a=o)}),a}(a,c)||l;return d.emit(f,{prop:l,path:f,oldValue:m,value:g}),!0}}}(c))}function _(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function v(e,t){if(this[e]instanceof Date){var a=this[e].getTime();return a?{__isDate:!0,ms:a}:void 0}return t}function b(e,t){return _(t)&&t.__isDate?new Date(t.ms):t}g.on=function(e,t){d.on(e,function(e){t(e.value)})},m||(m=g("polite-email-popup")),window.persistentGlobals=m;var f={};function E(){return O("modal")}function p(){return O("bottom-bar")}function O(e){var t="modal"===e?m.modalClosedDate:m.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}var T={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:2,aggressive:1}},activeTimeOnPage:{content:{notAggressive:6,aggressive:4},marketing:{notAggressive:6,aggressive:4}},activeTimeOnSite:{content:{notAggressive:21,aggressive:14},marketing:{notAggressive:21,aggressive:14}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:35,aggressive:25}}},L={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:10,aggressive:7},marketing:{notAggressive:10,aggressive:7}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};function S(){var e,t,a,n,s,o,i,r,l=(a=[{pageViews:T.pageViews[e=f.websiteType][t=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:T.activeTimeOnPage[e][t],activeTimeOnSite:T.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:T.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],n=a[0],s=a[1],o=Object.keys(n).every(function(e){return s[e]>=n[e]}),(i=E())&&(o=o&&i.days>=2),f.isModalOpen&&(o=!1),[o,n,s]),c=l[0],u=l[1],d=l[2],g=function(){var e,t,a=[{pageViews:L.pageViews[e=f.websiteType][t=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:L.activeTimeOnPage[e][t],activeTimeOnSite:L.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:L.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],n=a[0],s=a[1],o=Object.keys(n).every(function(e){return s[e]>=n[e]}),i=p();return i&&(o=o&&i.days>=2),[o,n,s]}(),_=g[0],v=g[1],b=g[2];f.isModalOpenable=!!c,_&&(f.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_BOTTOM_BAR_OPEN)),f.showDebugNotice&&(f.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,a=e.modalActualValues,n=e.modalMeetsRequirements,s=e.bottomBarRequirements,o=e.bottomBarMeetsRequirements,i=E(),r=p();return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(f.websiteType.charAt(0).toUpperCase()+f.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset data</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+a.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+s.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+a.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+s.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+a.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+s.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+a.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+s.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(i?i.days+" day"+(1!==i.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(r?r.days+" day"+(1!==r.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+'\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>\n    '+(o?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+"\n  </div>\n</div>"}({modalRequirements:(r={modalRequirements:u,modalActualValues:d,modalMeetsRequirements:c,bottomBarRequirements:v,bottomBarActualValues:b,bottomBarMeetsRequirements:_}).modalRequirements,modalActualValues:r.modalActualValues,modalMeetsRequirements:r.modalMeetsRequirements,bottomBarRequirements:r.bottomBarRequirements,bottomBarActualValues:r.bottomBarActualValues,bottomBarMeetsRequirements:r.bottomBarMeetsRequirements}))}var A={};function M(e){return A[e]||document.querySelector(e)}function h(e){return"number"==typeof e&&!Number.isNaN(e)}function y(e){document.body.insertAdjacentHTML("beforeend",e)}function B(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var w=!1;if("undefined"!=typeof window){var R={get passive(){w=!0}};window.addEventListener("testPassive",null,R),window.removeEventListener("testPassive",null,R)}var P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),C=[],D=!1,q=-1,N=void 0,k=void 0,U=function(e){return C.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},x=function(e){var t=e||window.event;return!!U(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function V(){m.modalClosedDate=Date.now(),f.MODAL_ELEM.classList.remove("show"),document.body.classList.remove(f.BODY_CLASS_MODAL_OPEN),document.querySelectorAll(f.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),document.querySelectorAll("body > [aria-hidden]").forEach(function(e){return e.removeAttribute("aria-hidden")}),f.MODAL_ELEM.setAttribute("aria-hidden","true"),f.activeElement&&f.activeElement.focus(),function(e){if(P){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,C=C.filter(function(t){return t.targetElement!==e}),D&&0===C.length&&(document.removeEventListener("touchmove",x,w?{passive:!1}:void 0),D=!1)}else(C=C.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==k&&(document.body.style.paddingRight=k,k=void 0),void 0!==N&&(document.body.style.overflow=N,N=void 0)})}(f.MODAL_ELEM),f.isModalOpen=!1,S()}function j(e){27===e.keyCode&&document.body.classList.contains(f.BODY_CLASS_MODAL_OPEN)&&V()}function F(e){e.preventDefault();var t=e.currentTarget.querySelector(f.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);f.onSubmit({event:e,email:t.value}),V()}function Y(e){e.target.closest(f.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||V()}function I(){m.bottomBarClosedDate=Date.now(),f.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(f.BODY_CLASS_BOTTOM_BAR_OPEN)}function H(e){e.preventDefault();var t=e.currentTarget.querySelector(f.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);f.onSubmit({event:e,email:t.value}),I()}function G(e){var t;t=function(){var t,a,n,s,o;t=e,a={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",isModalOpenable:!1,isModalOpen:!1},Object.assign(f,a,t),window.temporaryGlobals=f,f.showDebugNotice&&y("<div class='polite-email-popup__debug-notice'></div>"),y('\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="'+(n=f).imageSrc+'">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">'+n.headingText+'</h2>\n        <p class="email-modal__description" id="email-modal-description">'+n.descriptionText+'</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="Your email address" required>\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">'+n.mainButtonText+'</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n'),y(function(e){return'<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">'+e.headingText+'</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="Your email address" required>\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">'+e.mainButtonText+'</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">'+e.closeButtonText+'</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>'}(f)),s=f.SELECTORS,Object.assign(f,{MODAL_ELEM:M(s.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:M(s.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:M(s.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:M(s.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:M(s.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:M(s.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:M(s.DEBUG_ELEM)}),g.on("*",S),h(m.pageViews)?m.pageViews++:m.pageViews=1,h(m.highestScrollPercentageAcrossAllPages)||(m.highestScrollPercentageAcrossAllPages=0),h(m.activeTimeOnSite)||(m.activeTimeOnSite=0),m.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var a=!0,n=!1;return function(){var t=arguments;n||(n=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),n=!1},a?0:1e3),a=!1)}}(function(){var e,t,a;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*a))>m.highestScrollPercentageAcrossAllPages&&(m.highestScrollPercentageAcrossAllPages=e),m.activeTimeOnPage++,m.activeTimeOnSite++})),f.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(f.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(f.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(m.pageViews=100,m.activeTimeOnPage=100,m.activeTimeOnSite=100,m.highestScrollPercentageAcrossAllPages=100,m.modalClosedDate=Date.now()-1728e5,m.bottomBarClosedDate=Date.now()-1728e5)}),o=function(){f.isModalOpenable&&function(){f.activeElement=document.activeElement,f.MODAL_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_MODAL_OPEN),f.MODAL_ELEM.querySelector(f.FOCUSABLE_SELECTORS).focus();var e=document.querySelectorAll(f.FOCUSABLE_SELECTORS),t=f.MODAL_ELEM.querySelectorAll(f.FOCUSABLE_SELECTORS),a=Array.from(t);e.forEach(function(e){a.includes(e)||e.setAttribute("tabindex","-1")}),f.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(function(e){e!==f.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(P){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!C.some(function(t){return t.targetElement===e})){var a={targetElement:e,options:{}};C=[].concat(B(C),[a]),e.ontouchstart=function(e){1===e.targetTouches.length&&(q=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var a=e.targetTouches[0].clientY-q;!U(e.target)&&(t&&0===t.scrollTop&&a>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&a<0?x(e):e.stopPropagation())}(t,e)},D||(document.addEventListener("touchmove",x,w?{passive:!1}:void 0),D=!0)}}else{setTimeout(function(){void 0===k&&(window,document),void 0===N&&(N=document.body.style.overflow,document.body.style.overflow="hidden")});var n={targetElement:e,options:{}};C=[].concat(B(C),[n])}}(f.MODAL_ELEM),f.isModalOpen=!0,S()}()},document.addEventListener("mouseout",function(e){var t=e.clientY<20,a=null===e.relatedTarget,n="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&a&&n&&o&&o()}),f.MODAL_ELEM.addEventListener("click",Y),f.MODAL_FORM_ELEM.addEventListener("submit",F),f.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",V),document.addEventListener("keydown",j),f.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",H),f.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",I)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}return{contentWebsite:function(e){e.websiteType="content",G(e)},marketingWebsite:function(e){e.websiteType="marketing",G(e)}}});
//# sourceMappingURL=polite-email-popup.umd.js.map
