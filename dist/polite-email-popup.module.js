var e,t,a=Object.prototype,o=Function.prototype.toString,i=a.hasOwnProperty,n=o.call(Object),s=a.toString,r=(e=Object.getPrototypeOf,t=Object,function(a){return e(t(a))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}function m(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function d(){this.callbacksLookup={}}d.prototype={emit:function(e,t){for(var a,o=this.callbacksLookup["*"]||[],i=m(this.callbacksLookup[e]||[]);!(a=i()).done;)(0,a.value)({name:e,value:t});for(var n,s=m(o);!(n=s()).done;)(0,n.value)({name:e,value:t})},on:function(e,t){for(var a,o=m(Array.isArray(e)?e:[e]);!(a=o()).done;){var i=a.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var c,u=new d;function b(e,t){void 0===t&&(t={}),e=e||"tigerlily";var a=t.defaults,l=void 0===a?{}:a,m=JSON.parse(localStorage.getItem(e)||"{}",p);return m=Object.assign(l,m),new Proxy(m,function t(a){return{get:function(e,o){return g(e[o])?new Proxy(e[o],t(a)):e[o]},set:function(t,l,m){t[l]=m,localStorage.setItem(e,JSON.stringify(a,_));var d=t[l],c=g(d)?JSON.parse(JSON.stringify(d,_),p):d,b=g(m)?JSON.parse(JSON.stringify(m,_),p):m,f=function(e,t){if(e===t)return"";var a="";return function e(t,a,l){l=l||"",Array.isArray(t)?function(t,a,o){t.forEach((t,i,n)=>{const s=`${o}[${i}]`;a.call(n,t,i,n,s),e(n[i],a,s)})}(t,a,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=s.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var a=i.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&o.call(a)==n}(t)&&function(t,a,o){for(const i in t){const n=o?`${o}.${i}`:i;a.call(t,t[i],i,t,n),e(t[i],a,n)}}(t,a,l)}(e,function(e,o,i,n){e===t&&(a=n)}),a}(a,m)||l;return u.emit(f,{prop:l,path:f,oldValue:c,value:b}),!0}}}(m))}function g(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function _(e,t){if(this[e]instanceof Date){var a=this[e].getTime();return a?{__isDate:!0,ms:a}:void 0}return t}function p(e,t){return g(t)&&t.__isDate?new Date(t.ms):t}b.on=function(e,t){u.on(e,function(e){t(e.value)})},c||(c=b("polite-email-popup")),window.persistentGlobals=c;var f={};function v(){return h("modal")}function E(){return h("bottom-bar")}function h(e){var t="modal"===e?c.modalClosedDate:c.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}var O={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:2,aggressive:1}},activeTimeOnPage:{content:{notAggressive:6,aggressive:4},marketing:{notAggressive:6,aggressive:4}},activeTimeOnSite:{content:{notAggressive:21,aggressive:14},marketing:{notAggressive:21,aggressive:14}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:35,aggressive:25}}},S={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:10,aggressive:7},marketing:{notAggressive:10,aggressive:7}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};function y(){var e,t,a,o,i,n,s,r,l=(a=[{pageViews:O.pageViews[e=f.websiteType][t=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:O.activeTimeOnPage[e][t],activeTimeOnSite:O.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:O.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:c.pageViews,activeTimeOnPage:c.activeTimeOnPage,activeTimeOnSite:c.activeTimeOnSite,highestScrollPercentageAcrossAllPages:c.highestScrollPercentageAcrossAllPages}],o=a[0],i=a[1],n=Object.keys(o).every(function(e){return i[e]>=o[e]}),(s=v())&&(n=n&&s.days>=2),f.isModalOpen&&(n=!1),[n,o,i]),m=l[0],d=l[1],u=l[2],b=function(){var e,t,a=[{pageViews:S.pageViews[e=f.websiteType][t=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:S.activeTimeOnPage[e][t],activeTimeOnSite:S.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:S.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:c.pageViews,activeTimeOnPage:c.activeTimeOnPage,activeTimeOnSite:c.activeTimeOnSite,highestScrollPercentageAcrossAllPages:c.highestScrollPercentageAcrossAllPages}],o=a[0],i=a[1],n=Object.keys(o).every(function(e){return i[e]>=o[e]}),s=E();return s&&(n=n&&s.days>=2),[n,o,i]}(),g=b[0],_=b[1],p=b[2];f.isModalOpenable=!!m,g&&(f.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_BOTTOM_BAR_OPEN)),f.showDebugNotice&&(f.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,a=e.modalActualValues,o=e.modalMeetsRequirements,i=e.bottomBarRequirements,n=e.bottomBarMeetsRequirements,s=v(),r=E();return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(f.websiteType.charAt(0).toUpperCase()+f.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset data</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+a.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+a.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+a.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+a.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(s?s.days+" day"+(1!==s.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(r?r.days+" day"+(1!==r.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(o?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+'\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>\n    '+(n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+"\n  </div>\n</div>"}({modalRequirements:(r={modalRequirements:d,modalActualValues:u,modalMeetsRequirements:m,bottomBarRequirements:_,bottomBarActualValues:p,bottomBarMeetsRequirements:g}).modalRequirements,modalActualValues:r.modalActualValues,modalMeetsRequirements:r.modalMeetsRequirements,bottomBarRequirements:r.bottomBarRequirements,bottomBarActualValues:r.bottomBarActualValues,bottomBarMeetsRequirements:r.bottomBarMeetsRequirements}))}var T={};function x(e){return T[e]||document.querySelector(e)}function A(e){return"number"==typeof e&&!Number.isNaN(e)}function L(e){document.body.insertAdjacentHTML("beforeend",e)}function w(){c.bottomBarClosedDate=Date.now(),f.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(f.BODY_CLASS_BOTTOM_BAR_OPEN)}function M(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var B=!1;if("undefined"!=typeof window){var R={get passive(){B=!0}};window.addEventListener("testPassive",null,R),window.removeEventListener("testPassive",null,R)}var P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),C=[],D=!1,k=-1,q=void 0,N=void 0,U=function(e){return C.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},j=function(e){var t=e||window.event;return!!U(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function V(){c.modalClosedDate=Date.now(),f.MODAL_ELEM.classList.remove("show"),document.body.classList.remove(f.BODY_CLASS_MODAL_OPEN),document.querySelectorAll(f.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),document.querySelectorAll("body > [aria-hidden]").forEach(function(e){return e.removeAttribute("aria-hidden")}),f.MODAL_ELEM.setAttribute("aria-hidden","true"),f.activeElement&&f.activeElement.focus(),function(e){if(P){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,C=C.filter(function(t){return t.targetElement!==e}),D&&0===C.length&&(document.removeEventListener("touchmove",j,B?{passive:!1}:void 0),D=!1)}else(C=C.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==N&&(document.body.style.paddingRight=N,N=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0)})}(f.MODAL_ELEM),f.isModalOpen=!1,y()}function F(e){if(e.preventDefault(),e.currentTarget.closest(".bottom-bar")?w():e.currentTarget.closest(".email-modal")&&V(),""===e.currentTarget.querySelector(".js-validate-not-robot").value){var t=e.currentTarget.querySelector(f.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR).value,a=f.mailchimpConfig,o=a.spamPreventionKey,i=a.formAction;o&&i?function(e){for(var t=e.event,a=e.email,o=e.spamPreventionKey,i=(e.formAction||"").replace("/post?","/post-json?"),n="",s=t.currentTarget.querySelectorAll("input"),r=0;r<s.length;r++)n+="&"+s[r].name+"="+encodeURIComponent(s[r].value);n+="&"+o+"=";var l=document.createElement("script");l.src=i+n+"&c=mailchimpCallback",document.body.appendChild(l),window.mailchimpCallback=function(e){delete window.mailchimpCallback,document.body.removeChild(l),f.onSubmit("success"===e.result?{event:t,email:a,success:!0}:{event:t,email:a,success:!1})}}({event:e,email:t,spamPreventionKey:o,formAction:i}):f.onSubmit({event:e,email:t})}}function I(e){27===e.keyCode&&document.body.classList.contains(f.BODY_CLASS_MODAL_OPEN)&&V()}function Y(e){e.target.closest(f.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||V()}function z(e){var t;t=function(){var t,a,o,i,n;t=e,a={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",mailchimpConfig:{},SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",isModalOpenable:!1,isModalOpen:!1},Object.assign(f,a,t),window.temporaryGlobals=f,L("<style>.bottom-bar,.email-modal{display:none;line-height:1.4;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.bottom-bar.show,.email-modal.show{display:flex}.bottom-bar,.bottom-bar *,.email-modal,.email-modal *{box-sizing:border-box;margin:0;padding:0;color:#212529}.bottom-bar button,.email-modal button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:0 0;color:inherit;font:inherit;line-height:normal;cursor:pointer;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}.bottom-bar button::-moz-focus-inner,.email-modal button::-moz-focus-inner{border:0;padding:0}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up,.email-modal .email-modal__sign-up{padding:9px 22px 11px;font-size:17px;font-weight:700;letter-spacing:.5px;color:#fff;background-color:#4263eb;border-radius:1px}.bottom-bar .bottom-bar__sign-up:hover,.email-modal .email-modal__sign-up:hover{background-color:#364fc7}@media (min-width:780px){.bottom-bar .hide-desktop,.email-modal .hide-desktop{display:none!important}}@media (max-width:779.9999px){.bottom-bar .hide-mobile,.email-modal .hide-mobile{display:none!important}}.email-modal{z-index:100;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;line-height:1.4;font-size:16px;background-color:rgba(0,0,0,.6)}.email-modal .email-modal__content{transform:translate(0,1000px);transition:transform .4s;position:relative;width:480px;max-width:calc(100vw - 3rem);padding:35px 32px 33px 32px;background-color:#fff;border-radius:5px;box-shadow:0 2px 8px 0 rgba(0,0,0,.24)}.email-modal-is-open .email-modal .email-modal__content{transform:translate(0,0)}.email-modal .email-modal__top{display:flex;margin-bottom:1.75rem}.email-modal .email-modal__top-media{width:108px;margin-right:22px}.email-modal .email-modal__top-image{box-sizing:content-box;display:block;max-width:100%;border:1px solid #dee2e6;border-radius:5px}.email-modal .email-modal__title{font-size:22px;font-weight:700;margin-bottom:.25rem}.email-modal .email-modal__description{font-size:18px;color:#757575}.email-modal .email-modal__input-container{margin-bottom:1.75rem}.email-modal .email-modal__input{display:block;width:100%;padding:9px 15px 10px;border:1px solid #dee2e6;font-size:16px;font-family:inherit}.email-modal .email-modal__button-container{text-align:center}.email-modal .email-modal__close{position:absolute;top:14px;right:13px;width:33px;height:33px}.email-modal .email-modal__close:hover::after,.email-modal .email-modal__close:hover::before{background-color:#b1bac4}.email-modal .email-modal__close::before{transform:rotate(45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:\"\";background-color:#ced4da;border-radius:2px}.email-modal .email-modal__close::after{transform:rotate(-45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:\"\";background-color:#ced4da;border-radius:2px}@media (max-width:779.9999px){.email-modal .email-modal__top{display:block}.email-modal .email-modal__top-media{width:75px;margin:0 auto 1.75rem auto}.email-modal .email-modal__top-content{text-align:center}}.bottom-bar{z-index:99;position:fixed;left:0;bottom:0;justify-content:center;width:100%;border-top:1px solid #adb5bd;background-color:#f1f3f5}.bottom-bar .bottom-bar__content{display:flex;padding:10px 0 11px 0}.bottom-bar .bottom-bar__label{display:flex;align-items:center}.bottom-bar .bottom-bar__label-text{margin-top:-1px;margin-right:12px;font-weight:600;color:#343a40}.bottom-bar .bottom-bar__input{margin-right:11px;padding:6px 10px 7px;max-width:300px;width:31vw;border:1px solid #adb5bd;font-family:inherit;font-size:16px;border-radius:1px}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up{padding:7px 19px 9px;font-size:15px;font-weight:600;border-radius:999px}.bottom-bar .bottom-bar__close-container{position:absolute;top:0;right:0;padding:10px 16px 10px 0}.bottom-bar .bottom-bar__close{background-color:#ced4da;color:#495057}.bottom-bar .bottom-bar__close:hover{background-color:#adb5bd;color:#343a40}.bottom-bar .bottom-bar__close-x-icon{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(45deg)}.bottom-bar .bottom-bar__close-x-icon>span{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(-90deg)}@media (max-width:779.9999px){.bottom-bar.show{display:block}.bottom-bar .bottom-bar__content{align-items:flex-end;padding:15px 21px 21px 22px}.bottom-bar .bottom-bar__label{flex:1 0 auto;display:block}.bottom-bar .bottom-bar__label-text{display:block;margin:0 0 12px 0}.bottom-bar .bottom-bar__input{width:100%;max-width:calc(100% - 16px)}.bottom-bar .bottom-bar__close-container{padding:0;transform:translate(0,-100%)}.bottom-bar .bottom-bar__close{padding:7px 17px 7px;border-radius:2px 0 0 0}}.debug-email-forms{display:flex;flex-wrap:wrap;position:fixed;top:18px;right:24px;max-width:600px;padding:16px 21px;font-size:16px;line-height:1.4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#343a40;background-color:#fff;box-shadow:1px 3px 6px rgba(0,0,0,.25);border-radius:5px}.debug-email-forms .debug-email-forms__stat{width:50%;flex:1 0 auto;margin-bottom:12px}.debug-email-forms .debug-email-forms__stat--buttons{text-align:right}.debug-email-forms .debug-email-forms__reset{margin-right:8px}.debug-email-forms .debug-email-forms__stat-label{font-weight:700;color:#ae3ec9}.debug-email-forms .debug-email-forms__stat-value{white-space:nowrap;font-weight:700;color:#212529}.debug-email-forms .debug-email-forms__stat-requirements{margin:6px 0;padding-left:32px}.debug-email-forms .debug-email-forms__stat-requirement{color:#868e96}.debug-email-forms .debug-email-forms__stat-value--success{color:#2f9e44}.debug-email-forms .debug-email-forms__stat-value--fail{color:#e03131}</style>"),f.showDebugNotice&&L("<div class='polite-email-popup__debug-notice'></div>"),L('\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="'+(o=f).imageSrc+'">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">'+o.headingText+'</h2>\n        <p class="email-modal__description" id="email-modal-description">'+o.descriptionText+'</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n      <div style="position: absolute; left: -5000px;" aria-hidden="true">\n        <input class="js-validate-not-robot" type="text" tabindex="-1" value="">\n      </div>\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">'+o.mainButtonText+'</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n'),L('<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">'+f.headingText+'</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n      <div style="position: absolute; left: -5000px;" aria-hidden="true">\n        <input class="js-validate-not-robot" type="text" tabindex="-1" value="">\n      </div>\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">'+f.mainButtonText+'</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">'+f.closeButtonText+'</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>'),i=f.SELECTORS,Object.assign(f,{MODAL_ELEM:x(i.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:x(i.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:x(i.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:x(i.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:x(i.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:x(i.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:x(i.DEBUG_ELEM)}),b.on("*",y),A(c.pageViews)?c.pageViews++:c.pageViews=1,A(c.highestScrollPercentageAcrossAllPages)||(c.highestScrollPercentageAcrossAllPages=0),A(c.activeTimeOnSite)||(c.activeTimeOnSite=0),c.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var a=!0,o=!1;return function(){var t=arguments;o||(o=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),o=!1},a?0:1e3),a=!1)}}(function(){var e,t,a;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*a))>c.highestScrollPercentageAcrossAllPages&&(c.highestScrollPercentageAcrossAllPages=e),c.activeTimeOnPage++,c.activeTimeOnSite++})),f.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(f.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(f.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(c.pageViews=100,c.activeTimeOnPage=100,c.activeTimeOnSite=100,c.highestScrollPercentageAcrossAllPages=100,c.modalClosedDate=Date.now()-1728e5,c.bottomBarClosedDate=Date.now()-1728e5)}),n=function(){f.isModalOpenable&&function(){f.activeElement=document.activeElement,f.MODAL_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_MODAL_OPEN),f.MODAL_ELEM.querySelector(f.FOCUSABLE_SELECTORS).focus();var e=document.querySelectorAll(f.FOCUSABLE_SELECTORS),t=f.MODAL_ELEM.querySelectorAll(f.FOCUSABLE_SELECTORS),a=Array.from(t);e.forEach(function(e){a.includes(e)||e.setAttribute("tabindex","-1")}),f.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(function(e){e!==f.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(P){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!C.some(function(t){return t.targetElement===e})){var a={targetElement:e,options:{}};C=[].concat(M(C),[a]),e.ontouchstart=function(e){1===e.targetTouches.length&&(k=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var a=e.targetTouches[0].clientY-k;!U(e.target)&&(t&&0===t.scrollTop&&a>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&a<0?j(e):e.stopPropagation())}(t,e)},D||(document.addEventListener("touchmove",j,B?{passive:!1}:void 0),D=!0)}}else{setTimeout(function(){void 0===N&&(window,document),void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:e,options:{}};C=[].concat(M(C),[o])}}(f.MODAL_ELEM),f.isModalOpen=!0,y()}()},document.addEventListener("mouseout",function(e){var t=e.clientY<20,a=null===e.relatedTarget,o="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&a&&o&&n&&n()}),f.MODAL_ELEM.addEventListener("click",Y),f.MODAL_FORM_ELEM.addEventListener("submit",F),f.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",V),document.addEventListener("keydown",I),f.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",F),f.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",w)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var H={contentWebsite:function(e){e.websiteType="content",z(e)},marketingWebsite:function(e){e.websiteType="marketing",z(e)}};export default H;
//# sourceMappingURL=polite-email-popup.module.js.map
