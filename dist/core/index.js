/**
 * Cupertino Pane 1.2.92
 * Multi-functional panes and boards for next generation progressive applications
 * https://github.com/roman-rr/cupertino-pane/
 *
 * Copyright 2019-2022 Roman Antonov (roman-rr)
 *
 * Released under the MIT License
 *
 * Released on: July 3, 2022
 */

function __awaiter(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{h(s.next(t))}catch(t){o(t)}}function a(t){try{h(s.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}h((s=s.apply(t,e||[])).next())}))}class Support{static get touch(){return window.Modernizr&&!0===window.Modernizr.touch||!!(window.navigator.maxTouchPoints>0||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)}static get observer(){return"MutationObserver"in window||"WebkitMutationObserver"in window}static get backdropFilter(){return CSS.supports("backdrop-filter","blur(0px)")||CSS.supports("-webkit-backdrop-filter","blur(0px)")}static get passiveListener(){let t=!1;try{const e=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("testPassiveListener",null,e)}catch(t){}return t}static get gestures(){return"ongesturestart"in window}}class Device{constructor(){this.ios=!1,this.android=!1,this.androidChrome=!1,this.desktop=!1,this.iphone=!1,this.ipod=!1,this.ipad=!1,this.edge=!1,this.ie=!1,this.firefox=!1,this.macos=!1,this.windows=!1,this.cordova=!(!window.cordova&&!window.phonegap),this.phonegap=!(!window.cordova&&!window.phonegap),this.electron=!1,this.ionic=!!document.querySelector("ion-app");const t=window.navigator.platform,e=window.navigator.userAgent,i=window.screen.width,s=window.screen.height;let n=e.match(/(Android);?[\s\/]+([\d.]+)?/),o=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),a=!this.ipad&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0,l=e.indexOf("Edge/")>=0,p=e.indexOf("Gecko/")>=0&&e.indexOf("Firefox/")>=0,d="Win32"===t,c=e.toLowerCase().indexOf("electron")>=0,u="MacIntel"===t;!o&&u&&Support.touch&&(1024===i&&1366===s||834===i&&1194===s||834===i&&1112===s||768===i&&1024===s)&&(o=e.match(/(Version)\/([\d.]+)/),u=!1),this.ie=h,this.edge=l,this.firefox=p,n&&!d&&(this.os="android",this.osVersion=n[2],this.android=!0,this.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(o||a||r)&&(this.os="ios",this.ios=!0),a&&!r&&(this.osVersion=a[2].replace(/_/g,"."),this.iphone=!0),o&&(this.osVersion=o[2].replace(/_/g,"."),this.ipad=!0),r&&(this.osVersion=r[3]?r[3].replace(/_/g,"."):null,this.ipod=!0),this.ios&&this.osVersion&&e.indexOf("Version/")>=0&&"10"===this.osVersion.split(".")[0]&&(this.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),this.webView=!(!(a||o||r)||!e.match(/.*AppleWebKit(?!.*Safari)/i)&&!window.navigator.standalone)||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,this.webview=this.webView,this.standalone=this.webView,this.desktop=!(this.ios||this.android)||c,this.desktop&&(this.electron=c,this.macos=u,this.windows=d,this.macos&&(this.os="macos"),this.windows&&(this.os="windows")),this.pixelRatio=window.devicePixelRatio||1}}class Events{constructor(t,e,i,s,n){this.instance=t,this.settings=e,this.device=i,this.breakpoints=s,this.transitions=n,this.allowClick=!0,this.disableDragAngle=!1,this.mouseDown=!1,this.contentScrollTop=0,this.steps=[],this.isScrolling=!1,this.keyboardVisible=!1,this.inputBluredbyMove=!1,this.inputBottomOffset=0,this.previousInputBottomOffset=0,this.prevNewHeight=0,this.touchStartCb=t=>this.touchStart(t),this.touchMoveCb=t=>this.touchMove(t),this.touchEndCb=t=>this.touchEnd(t),this.onScrollCb=t=>this.onScroll(t),this.onClickCb=t=>this.onClick(t),this.onKeyboardShowCb=t=>this.onKeyboardShow(t),this.onKeyboardWillHideCb=t=>this.onKeyboardWillHide(t),this.onWindowResizeCb=t=>this.onWindowResize(t),this.touchEvents=this.getTouchEvents(),this.swipeNextSensivity=window.hasOwnProperty("cordova")?this.settings.fastSwipeSensivity+2:this.settings.fastSwipeSensivity}getTouchEvents(){const t=["touchstart","touchmove","touchend","touchcancel"];let e=["mousedown","mousemove","mouseup","mouseleave"];const i={start:t[0],move:t[1],end:t[2],cancel:t[3]},s={start:e[0],move:e[1],end:e[2],cancel:e[3]};return Support.touch||!this.settings.simulateTouch?i:s}attachAllEvents(){if(this.settings.dragBy?this.settings.dragBy.forEach((t=>{const e=document.querySelector(t);e&&this.eventListeners("addEventListener",e)})):this.eventListeners("addEventListener",this.instance.paneEl),this.settings.topperOverflow&&this.instance.overflowEl.addEventListener("scroll",this.onScrollCb),this.settings.handleKeyboard&&this.device.cordova&&(window.addEventListener("keyboardWillShow",this.onKeyboardShowCb),window.addEventListener("keyboardWillHide",this.onKeyboardWillHideCb)),this.device.ionic&&this.device.android){document.querySelectorAll(".ion-page").forEach((t=>{t.addEventListener("scroll",(e=>{t.scrollTop&&t.scrollTo({top:0})}))}))}window.addEventListener("resize",this.onWindowResizeCb)}detachAllEvents(){this.settings.dragBy?this.settings.dragBy.forEach((t=>{const e=document.querySelector(t);e&&this.eventListeners("removeEventListener",e)})):this.eventListeners("removeEventListener",this.instance.paneEl),this.settings.topperOverflow&&this.instance.overflowEl.removeEventListener("scroll",this.onScrollCb),this.settings.handleKeyboard&&this.device.cordova&&(window.removeEventListener("keyboardWillShow",this.onKeyboardShowCb),window.removeEventListener("keyboardWillHide",this.onKeyboardWillHideCb)),window.removeEventListener("resize",this.onWindowResizeCb)}resetEvents(){this.detachAllEvents(),this.attachAllEvents()}eventListeners(t,e){if(Support.touch){const i=!("touchstart"!==this.touchEvents.start||!Support.passiveListener||!this.settings.passiveListeners)&&{passive:!0,capture:!1};e[t](this.touchEvents.start,this.touchStartCb,i),e[t](this.touchEvents.move,this.touchMoveCb,!!Support.passiveListener&&{passive:!1,capture:!1}),e[t](this.touchEvents.end,this.touchEndCb,i),e[t](this.touchEvents.cancel,this.touchEndCb,i)}else e[t](this.touchEvents.start,this.touchStartCb,!1),e[t](this.touchEvents.move,this.touchMoveCb,!1),e[t](this.touchEvents.end,this.touchEndCb,!1),e[t](this.touchEvents.cancel,this.touchEndCb,!1);this.settings.preventClicks&&e[t]("click",this.onClickCb,!0)}touchStart(t){if(this.instance.emit("onDragStart",t),this.allowClick=!0,this.instance.disableDragEvents)return;this.disableDragAngle=!1,this.isScrolling=!1,this.instance.preventedDismiss=!1;const{clientY:e,clientX:i}=this.getEventClientYX(t,"touchstart");this.startY=e,this.startX=i,"mousedown"===t.type&&(this.mouseDown=!0),this.contentScrollTop&&this.willScrolled()&&(this.startY+=this.contentScrollTop),this.steps.push({posY:this.startY,posX:this.startX,time:Date.now()})}touchMove(t){var e;const{clientY:i,clientX:s,velocityY:n}=this.getEventClientYX(t,"touchmove");if("mousemove"===t.type&&!this.mouseDown)return;if(this.steps.length||this.steps.push({posY:i,posX:s,time:Date.now()}),t.delta=(null===(e=this.steps[0])||void 0===e?void 0:e.posY)-i,this.allowClick=!1,this.isFormElement(t.target)&&this.isElementScrollable(t.target))return;if(this.instance.disableDragEvents)return void(this.steps=[]);if(this.disableDragAngle)return;if(this.instance.preventedDismiss)return;this.settings.touchMoveStopPropagation&&t.stopPropagation();const o=i-this.steps[this.steps.length-1].posY,r=s-this.steps[this.steps.length-1].posX;if(!Math.abs(o)&&!Math.abs(r))return;this.instance.emit("onDrag",t),this.instance.setGrabCursor(!0,!0);let a=this.instance.getPanelTransformY()+o,h=this.instance.getPanelTransformX()+r;if(this.steps.length<2){n<1&&(a=this.instance.getPanelTransformY()+o*n);let t=new WebKitCSSMatrix(window.getComputedStyle(this.instance.paneEl).transform).m42-this.instance.getPanelTransformY();Math.abs(t)&&(a+=t)}if(this.steps.length>2&&this.isFormElement(document.activeElement)&&!this.isFormElement(t.target)&&(document.activeElement.blur(),this.inputBluredbyMove=!0),this.settings.touchAngle&&!this.isScrolling){let t;const e=s-this.startX,n=i-this.startY;if(t=180*Math.atan2(Math.abs(n),Math.abs(e))/Math.PI,e*e+n*n>=25&&90-t>this.settings.touchAngle&&1===this.steps.length)return void(this.disableDragAngle=!0)}if("auto"===this.instance.overflowEl.style.overflowY&&this.scrollPreventDrag(t))return;let l=this.handleTopperLowerPositions({clientX:s,clientY:i,newVal:a,diffY:o});if(isNaN(l)||(a=l),this.instance.getPanelTransformY()!==a||this.instance.getPanelTransformX()!==h){if(!this.instance.preventedDismiss&&this.instance.preventDismissEvent&&this.settings.bottomClose){let t=(-this.breakpoints.topper+this.breakpoints.topper-this.instance.getPanelTransformY())/this.breakpoints.topper/-8;if(a=this.instance.getPanelTransformY()+o*(.5-t),-1*(i-220-this.instance.screen_height)<=this.instance.screen_height-this.breakpoints.bottomer)return this.instance.preventedDismiss=!0,this.instance.emit("onWillDismiss",{prevented:!0}),void this.instance.moveToBreak(this.breakpoints.prevBreakpoint)}this.instance.checkOpacityAttr(a),this.instance.checkOverflowAttr(a),this.transitions.doTransition({type:"move",translateY:a,translateX:h}),this.steps.push({posY:i,posX:s,time:Date.now()})}}touchEnd(t){var e,i;if(this.instance.disableDragEvents)return;if("mouseleave"===t.type&&!this.mouseDown)return;"mouseup"!==t.type&&"mouseleave"!==t.type||(this.mouseDown=!1);let s,n=this.breakpoints.getClosestBreakY();this.fastSwipeNext("Y")&&(n=this.instance.swipeNextPoint((null===(e=this.steps[this.steps.length-1])||void 0===e?void 0:e.posY)-(null===(i=this.steps[this.steps.length-2])||void 0===i?void 0:i.posY),this.swipeNextSensivity,n),s=this.settings.fastSwipeClose&&this.breakpoints.currentBreakpoint<n);let o=!1;this.isFormElement(document.activeElement)&&!this.isFormElement(t.target)&&2===this.steps.length&&(o=!0),this.instance.emit("onDragEnd",t),this.steps=[],delete this.startPointOverTop,this.allowClick||o||(s?this.instance.destroy({animate:!0}):(this.instance.checkOpacityAttr(n),this.instance.checkOverflowAttr(n),this.instance.setGrabCursor(!0,!1),this.settings.bottomClose&&n===this.breakpoints.breaks.bottom?this.instance.destroy({animate:!0}):(this.instance.getPanelTransformY()===n&&this.instance.emit("onTransitionEnd",{target:this.instance.paneEl}),this.breakpoints.currentBreakpoint=n,this.transitions.doTransition({type:"end",translateY:n}))))}onScroll(t){return __awaiter(this,void 0,void 0,(function*(){this.isScrolling=!0,this.contentScrollTop=t.target.scrollTop}))}onClick(t){if(this.allowClick){if(!this.device.cordova&&this.device.android&&this.isFormElement(t.target))this.onKeyboardShow({keyboardHeight:this.instance.screen_height-window.innerHeight});else if(this.settings.clickBottomOpen){if(this.isFormElement(document.activeElement))return;if(this.breakpoints.breaks.bottom===this.instance.getPanelTransformY()){let t;this.settings.breaks.top.enabled&&(t="top"),this.settings.breaks.middle.enabled&&(t="middle"),this.instance.moveToBreak(t)}}}else this.settings.preventClicks&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())}onKeyboardShow(t){return __awaiter(this,void 0,void 0,(function*(){if(!this.isPaneDescendant(document.activeElement))return;if(!this.isOnViewport())return;this.keyboardVisible=!0;const e=this.settings.breaks[this.breakpoints.prevBreakpoint].height,i=document.activeElement,s=i.getBoundingClientRect().bottom,n=this.instance.screen_height-s-this.inputBottomOffset,o=this.device.cordova&&this.device.android?150:100;let r=0,a=e+(t.keyboardHeight-n);if(this.prevNewHeight&&(r=this.previousInputBottomOffset-s,a=this.prevNewHeight),!i.isEqualNode(this.prevFocusedElement)&&t.keyboardHeight>n){this.prevNewHeight=a-r,this.prevFocusedElement=document.activeElement,yield this.instance.moveToHeight(a-r+o);const t=i.getBoundingClientRect().bottom;this.previousInputBottomOffset=t,this.inputBottomOffset||(this.inputBottomOffset=s-t)}}))}onKeyboardWillHide(t){this.isOnViewport()&&(this.keyboardVisible=!1,this.inputBottomOffset=0,this.previousInputBottomOffset=0,this.prevNewHeight=0,delete this.prevFocusedElement,this.inputBluredbyMove?this.inputBluredbyMove=!1:this.instance.isHidden()||this.instance.getPanelTransformY()!==this.breakpoints.breaks[this.breakpoints.prevBreakpoint]&&this.instance.moveToBreak(this.breakpoints.prevBreakpoint))}onWindowResize(t){return __awaiter(this,void 0,void 0,(function*(){if(this.isKeyboardEvent()){if(this.device.cordova||this.device.ios)return;this.isFormElement(document.activeElement)?this.onKeyboardShow({keyboardHeight:this.instance.screen_height-window.innerHeight}):this.onKeyboardWillHide({})}else yield new Promise((t=>setTimeout((()=>t(!0)),150))),this.instance.updateScreenHeights(),this.breakpoints.buildBreakpoints(JSON.parse(this.breakpoints.lockedBreakpoints))}))}fastSwipeNext(t){var e,i;const s=(null===(e=this.steps[this.steps.length-1])||void 0===e?void 0:e["pos"+t])-(null===(i=this.steps[this.steps.length-2])||void 0===i?void 0:i["pos"+t]);return Math.abs(s)>=this.swipeNextSensivity}isKeyboardEvent(){return!!this.isFormElement(document.activeElement)||!(this.isFormElement(document.activeElement)||!this.keyboardVisible)&&(this.keyboardVisible=!1,!0)}handleTopperLowerPositions(t){if(!this.settings.upperThanTop&&t.newVal<=this.breakpoints.topper)return this.breakpoints.topper;if(this.settings.upperThanTop&&(t.newVal<=this.breakpoints.topper||this.startPointOverTop)){this.startPointOverTop||(this.startPointOverTop=t.clientY),this.startPointOverTop<t.clientY&&delete this.startPointOverTop;const e=this.instance.screen_height-this.instance.screenHeightOffset,i=(e-this.instance.getPanelTransformY())/(e-this.breakpoints.topper)/8;return this.instance.getPanelTransformY()+t.diffY*i}return!this.settings.lowerThanBottom&&t.newVal>=this.breakpoints.bottomer?this.breakpoints.bottomer:void 0}getEventClientYX(t,e){var i,s;const n=t.type===e&&t.targetTouches&&(t.targetTouches[0]||t.changedTouches[0]),o=t.type===e?n.clientY:t.clientY,r=t.type===e?n.clientX:t.clientX,a=Date.now()-((null===(i=this.steps[this.steps.length-1])||void 0===i?void 0:i.time)||0);return{clientY:o,clientX:r,velocityY:Math.abs(o-((null===(s=this.steps[this.steps.length-1])||void 0===s?void 0:s.posY)||0))/a}}scrollPreventDrag(t){let e=!1;return this.contentScrollTop>0&&(e=!0),e}willScrolled(){return!(!this.isElementScrollable(this.instance.overflowEl)||"hidden"===this.instance.overflowEl.style.overflow)}isPaneDescendant(t){if(!t)return!1;let e=t.parentNode;for(;null!=e;){if(e==this.instance.paneEl)return!0;e=e.parentNode}return!1}isFormElement(t){return!!(t&&t.tagName&&["input","select","option","textarea","button","label"].includes(t.tagName.toLowerCase()))}isElementScrollable(t){return t.scrollHeight>t.clientHeight}isOnViewport(){return!this.instance.paneEl||0!==this.instance.paneEl.offsetWidth||0!==this.instance.paneEl.offsetHeight}}class Settings{constructor(){this.instance={initialBreak:"middle",horizontal:!1,horizontalOffset:null,inverse:!1,parentElement:null,followerElement:null,cssClass:null,fitHeight:!1,maxFitHeight:null,fitScreenHeight:!0,backdrop:!1,backdropOpacity:.4,animationType:"ease",animationDuration:300,dragBy:null,bottomOffset:0,bottomClose:!1,fastSwipeClose:!1,fastSwipeSensivity:3,freeMode:!1,buttonDestroy:!0,topperOverflow:!0,topperOverflowOffset:0,lowerThanBottom:!0,upperThanTop:!1,showDraggable:!0,draggableOver:!1,clickBottomOpen:!0,preventClicks:!0,handleKeyboard:!0,simulateTouch:!0,passiveListeners:!0,touchMoveStopPropagation:!1,touchAngle:45,breaks:{},zStack:null,events:null,modules:null}}}class Breakpoints{constructor(t,e){this.instance=t,this.settings=e,this.breaks={},this.brs=[],this.beforeBuildBreakpoints=()=>{},this.defaultBreaksConf={top:{enabled:!0,height:window.innerHeight-47.25},middle:{enabled:!0,height:300},bottom:{enabled:!0,height:100}}}buildBreakpoints(t,e=0,i=!0){var s,n;return __awaiter(this,void 0,void 0,(function*(){if(this.breaks={},this.conf=t,this.settings.bottomOffset=e||this.settings.bottomOffset,yield this.beforeBuildBreakpoints(),["top","middle","bottom"].forEach((t=>{var e;this.settings.breaks[t]||(this.settings.breaks[t]=this.defaultBreaksConf[t]),this.conf&&this.conf[t]&&(this.settings.breaks[t]=this.conf[t]),this.instance.emit("beforeBreakHeightApplied",{break:t}),(null===(e=this.settings.breaks[t])||void 0===e?void 0:e.enabled)&&(this.breaks[t]=this.breaks[t]||this.instance.screenHeightOffset,this.breaks[t]-=this.settings.bottomOffset,this.breaks[t]-=this.settings.breaks[t].height)})),this.lockedBreakpoints||(this.lockedBreakpoints=JSON.stringify(this.settings.breaks)),this.instance.isPanePresented()||this.settings.breaks[this.settings.initialBreak].enabled||console.warn("Cupertino Pane: Please set initialBreak for enabled breakpoint"),this.settings.breaks.middle.height>=this.settings.breaks.top.height&&console.warn("Cupertino Pane: Please set middle height lower than top height"),this.settings.breaks.middle.height<=this.settings.breaks.bottom.height&&console.warn("Cupertino Pane: Please set bottom height lower than middle height"),this.brs=[],["top","middle","bottom"].forEach((t=>{this.settings.breaks[t].enabled&&this.brs.push(this.breaks[t])})),this.topper=this.brs.reduce(((t,e)=>e<t?e:t)),this.bottomer=this.brs.reduce(((t,e)=>Math.abs(e)>Math.abs(t)?e:t)),this.instance.isPanePresented()||(this.currentBreakpoint=this.breaks[this.settings.initialBreak]),this.instance.isPanePresented()){if((null===(s=this.settings.breaks[this.prevBreakpoint])||void 0===s?void 0:s.enabled)&&(this.instance.isHidden()||this.instance.moveToBreak(this.prevBreakpoint,i?"breakpoint":"move")),!(null===(n=this.settings.breaks[this.prevBreakpoint])||void 0===n?void 0:n.enabled)&&!this.instance.isHidden()){let t=this.instance.swipeNextPoint(1,1,this.getClosestBreakY());const e=Object.entries(this.breaks).find((e=>e[1]===t));this.instance.moveToBreak(e[0])}this.instance.paneEl.style.height=`${this.instance.getPaneHeight()}px`,this.instance.scrollElementInit(),this.instance.checkOpacityAttr(this.currentBreakpoint),this.instance.checkOverflowAttr(this.currentBreakpoint)}this.instance.emit("buildBreakpointsCompleted")}))}getCurrentBreakName(){return this.breaks.top===this.currentBreakpoint?"top":this.breaks.middle===this.currentBreakpoint?"middle":this.breaks.bottom===this.currentBreakpoint?"bottom":null}getClosestBreakY(){return this.brs.reduce(((t,e)=>Math.abs(e-this.instance.getPanelTransformY())<Math.abs(t-this.instance.getPanelTransformY())?e:t))}}var CupertinoTransition;!function(t){t.Present="present",t.Destroy="destroy",t.Move="move",t.Breakpoint="breakpoint",t.Hide="hide",t.TouchEnd="end"}(CupertinoTransition||(CupertinoTransition={}));class Transitions{constructor(t,e,i){this.instance=t,this.settings=e,this.breakpoints=i,this.isPaneHidden=!1}doTransition(t={}){return new Promise((e=>__awaiter(this,void 0,void 0,(function*(){var i;if(t.type===CupertinoTransition.Move)return this.instance.emit("onMoveTransitionStart",{translateY:t.translateY}),this.instance.paneEl.style.transition="all 0ms linear 0ms",this.setPaneElTransform(t),e(!0);const s=()=>(t.type===CupertinoTransition.Destroy&&this.instance.destroyResets(),this.instance.paneEl.style.transition="initial",t.type===CupertinoTransition.Hide&&(this.isPaneHidden=!0),t.type!==CupertinoTransition.Breakpoint&&t.type!==CupertinoTransition.TouchEnd||(this.isPaneHidden=!1),this.instance.emit("onTransitionEnd",{type:t.type,target:document.body.contains(this.instance.paneEl)?this.instance.paneEl:null}),this.instance.paneEl.removeEventListener("transitionend",s),e(!0));if(t.type===CupertinoTransition.Breakpoint||t.type===CupertinoTransition.TouchEnd||t.type===CupertinoTransition.Present||t.type===CupertinoTransition.Hide||t.type===CupertinoTransition.Destroy){if(t.type===CupertinoTransition.TouchEnd&&this.settings.freeMode)return e(!0);const n=Object.entries(this.breakpoints.breaks).find((e=>e[1]===t.translateY));let o=n&&(null===(i=this.settings.breaks[n[0]])||void 0===i?void 0:i.bounce);this.instance.paneEl.style.transition=this.buildTransitionValue(o),this.instance.emit("onTransitionStart",{type:t.type,translateY:{new:t.translateY},transition:this.instance.paneEl.style.transition}),this.setPaneElTransform(t);let r=Object.entries(this.breakpoints.breaks).find((e=>e[1]===t.translateY));r&&(this.breakpoints.prevBreakpoint=r[0]),this.instance.paneEl.addEventListener("transitionend",s)}}))))}setPaneElTransform(t){this.instance.paneEl.style.transform=`translateY(${t.translateY}px) translateZ(0px)`}buildTransitionValue(t){return t?"all 300ms cubic-bezier(.155,1.105,.295,1.12)":`all ${this.settings.animationDuration}ms ${this.settings.animationType}`}}function on(t,e,i){if(!this.eventsListeners)return;if("function"!=typeof e)return;const s=i?"unshift":"push";t.split(" ").forEach((t=>{this.eventsListeners[t]||(this.eventsListeners[t]=[]),this.eventsListeners[t][s](e)}))}function emit(...t){if(!this.eventsListeners)return;let e=t[0],i=t.slice(1,t.length);(Array.isArray(e)?e:e.split(" ")).forEach((t=>{var e;(null===(e=this.eventsListeners)||void 0===e?void 0:e[t])&&this.eventsListeners[t].forEach((t=>t.apply(this,i)))}))}const Modules={};class CupertinoPane{constructor(t,e={}){if(this.selector=t,this.disableDragEvents=!1,this.preventDismissEvent=!1,this.preventedDismiss=!1,this.rendered=!1,this.settings=(new Settings).instance,this.device=new Device,this.modules={},this.eventsListeners={},this.on=on,this.emit=emit,this.swipeNextPoint=(t,e,i)=>{let{brs:s,settingsBreaks:n}=this.prepareBreaksSwipeNextPoint();if(this.breakpoints.currentBreakpoint===s.top){if(t>e){if(n.middle.enabled)return s.middle;if(n.bottom.enabled)return s.middle<i?i:s.bottom}return s.top}if(this.breakpoints.currentBreakpoint===s.middle)return t<-e&&n.top.enabled?s.top:t>e&&n.bottom.enabled?s.bottom:s.middle;if(this.breakpoints.currentBreakpoint===s.bottom){if(t<-e){if(n.middle.enabled)return s.middle>i?i:s.middle;if(n.top.enabled)return s.top}return s.bottom}return i},t instanceof HTMLElement?this.selector=t:this.selector=document.querySelector(t),!this.selector)return void console.warn("Cupertino Pane: wrong selector or DOM element specified",this.selector);if(this.isPanePresented())return void console.error("Cupertino Pane: specified selector or DOM element already in use",this.selector);this.el=this.selector,this.el.style.display="none",this.settings=Object.assign(Object.assign({},this.settings),e),this.settings.parentElement?this.settings.parentElement=document.querySelector(this.settings.parentElement):this.settings.parentElement=this.el.parentElement,this.settings.events&&Object.keys(this.settings.events).forEach((t=>this.on(t,this.settings.events[t]))),this.breakpoints=new Breakpoints(this,this.settings),this.transitions=new Transitions(this,this.settings,this.breakpoints),this.events=new Events(this,this.settings,this.device,this.breakpoints,this.transitions);let i=Object.keys(Modules).map((t=>Modules[t]));(this.settings.modules||i).forEach((t=>this.modules[this.getModuleRef(t.name)]=new t(this)))}drawBaseElements(){this.parentEl=this.settings.parentElement,this.wrapperEl=document.createElement("div"),this.wrapperEl.classList.add("cupertino-pane-wrapper"),this.settings.cssClass&&this.settings.cssClass.split(" ").filter((t=>!!t)).forEach((t=>this.wrapperEl.classList.add(t)));let t="";t+="\n      .cupertino-pane-wrapper {\n        display: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    ",this.paneEl=document.createElement("div"),this.paneEl.style.transform=`translateY(${this.screenHeightOffset}px) translateZ(0px)`,this.paneEl.classList.add("pane"),t+="\n      .cupertino-pane-wrapper .pane {\n        position: fixed;\n        z-index: 11;\n        width: 100%;\n        max-width: 500px;\n        left: 0px;\n        right: 0px;\n        margin-left: auto;\n        margin-right: auto;\n        background: var(--cupertino-pane-background, #ffffff);\n        color: var(--cupertino-pane-color, #333333);\n        box-shadow: var(--cupertino-pane-shadow, 0 4px 16px rgba(0,0,0,.12));\n        will-change: transform;\n        padding-top: 15px; \n        border-radius: var(--cupertino-pane-border-radius, 20px) \n                       var(--cupertino-pane-border-radius, 20px) \n                       0 0;\n        -webkit-user-select: none;\n      }\n      .cupertino-pane-wrapper .pane img {\n        -webkit-user-drag: none;\n      }\n    ",this.draggableEl=document.createElement("div"),this.draggableEl.classList.add("draggable"),this.settings.draggableOver&&this.draggableEl.classList.add("over"),t+="\n      .cupertino-pane-wrapper .draggable {\n        padding: 5px;\n        position: absolute;\n        left: 0;\n        right: 0;\n        margin-left: auto;\n        margin-right: auto;\n        height: 30px;\n        z-index: -1;\n        top: 0;\n        bottom: initial;\n      }\n      .cupertino-pane-wrapper .draggable.over {\n        top: -30px;\n        padding: 15px;\n      }\n    ",this.moveEl=document.createElement("div"),this.moveEl.classList.add("move"),t+=`\n      .cupertino-pane-wrapper .move {\n        margin: 0 auto;\n        height: 5px;\n        background: var(--cupertino-pane-move-background, #c0c0c0);\n        width: 36px;\n        border-radius: 4px;\n      }\n      .cupertino-pane-wrapper .draggable.over .move {\n        width: 70px; \n        background: var(--cupertino-pane-move-background, rgba(225, 225, 225, 0.6));\n        ${Support.backdropFilter?"\n          backdrop-filter: saturate(180%) blur(20px);\n          -webkit-backdrop-filter: saturate(180%) blur(20px);\n        ":""}\n      }\n    `,this.destroyButtonEl=document.createElement("div"),this.destroyButtonEl.classList.add("destroy-button"),t+="\n      .cupertino-pane-wrapper .destroy-button {\n        width: 26px;\n        height: 26px;\n        position: absolute;\n        background: var(--cupertino-pane-destroy-button-background, #ebebeb);\n        fill: var(--cupertino-pane-icon-close-color, #7a7a7e);\n        right: 20px;\n        z-index: 14;\n        border-radius: 100%;\n        top: 16px;\n      }\n    ",this.contentEl=this.el,this.contentEl.style.transition=`opacity ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,this.contentEl.style.overflowX="hidden",this.addStyle(t),this.parentEl.appendChild(this.wrapperEl),this.wrapperEl.appendChild(this.paneEl),this.paneEl.appendChild(this.contentEl),this.settings.showDraggable&&(this.paneEl.appendChild(this.draggableEl),this.draggableEl.appendChild(this.moveEl)),this.emit("DOMElementsReady")}present(t={animate:!1}){return __awaiter(this,void 0,void 0,(function*(){if(this.el&&document.body.contains(this.el))if(this.isPanePresented()&&this.rendered)this.moveToBreak(this.settings.initialBreak);else{if(!this.isPanePresented()||this.rendered)return this.emit("onWillPresent"),this.updateScreenHeights(),this.drawBaseElements(),yield this.setBreakpoints(),this.paneEl.style.height=`${this.getPaneHeight()}px`,this.wrapperEl.style.display="block",yield new Promise((t=>setTimeout(t,100))),this.contentEl.style.display="block",this.wrapperEl.classList.add("rendered"),this.rendered=!0,this.scrollElementInit(),this.checkOverflowAttr(this.breakpoints.currentBreakpoint),this.emit("rendered"),this.settings.buttonDestroy&&(this.paneEl.appendChild(this.destroyButtonEl),this.destroyButtonEl.addEventListener("click",(t=>this.destroy({animate:!0,destroyButton:!0}))),this.destroyButtonEl.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n          <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/>\n        </svg>'),this.settings.bottomClose&&(this.settings.breaks.bottom.enabled=!0),this.settings.freeMode&&(this.settings.lowerThanBottom=!1),this.setGrabCursor(!0),this.checkOpacityAttr(this.breakpoints.currentBreakpoint),this.device.android&&(document.body.style.overscrollBehaviorY="none"),this.emit("beforePresentTransition",{animate:t.animate}),t.animate?yield this.transitions.doTransition({type:"present",translateY:this.breakpoints.breaks[this.settings.initialBreak]}):(this.breakpoints.prevBreakpoint=this.settings.initialBreak,this.paneEl.style.transform=`translateY(${this.breakpoints.breaks[this.settings.initialBreak]}px) translateZ(0px)`),this.events.attachAllEvents(),this.emit("onDidPresent"),this;console.warn("Cupertino Pane: specified selector or DOM element already in use",this.selector)}else console.warn("Cupertino Pane: specified DOM element must be attached to the DOM")}))}getPaneHeight(){return this.screen_height-this.breakpoints.topper-this.settings.bottomOffset}updateScreenHeights(){this.screen_height=window.innerHeight,this.screenHeightOffset=window.innerHeight}scrollElementInit(){let t=this.el.querySelectorAll("[overflow-y]");!t.length||t.length>1?this.overflowEl=this.contentEl:(this.overflowEl=t[0],this.overflowEl.style.overflowX="hidden"),this.overflowEl.style.overscrollBehavior="none",this.settings.topperOverflow&&(this.settings.upperThanTop&&console.warn('Cupertino Pane: "upperThanTop" allowed for disabled "topperOverflow"'),this.setOverflowHeight())}setOverflowHeight(t=0){this.overflowEl.style.height=this.getPaneHeight()-this.settings.topperOverflowOffset-this.overflowEl.offsetTop-t+"px"}checkOpacityAttr(t){let e=this.el.querySelectorAll("[hide-on-bottom]");e.length&&e.forEach((e=>{e.style.transition=`opacity ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`,e.style.opacity=t>=this.breakpoints.breaks.bottom?"0":"1"}))}checkOverflowAttr(t){this.settings.topperOverflow&&this.overflowEl&&(this.overflowEl.style.overflowY=t<=this.breakpoints.topper?"auto":"hidden")}isPanePresented(){let t=Array.from(document.querySelectorAll(".cupertino-pane-wrapper.rendered"));return!!t.length&&!!t.find((t=>t.contains(this.selector)))}prepareBreaksSwipeNextPoint(){return{brs:Object.assign({},this.breakpoints.breaks),settingsBreaks:Object.assign({},this.settings.breaks)}}addStyle(t){if(t=t.replace(/\s\s+/g," "),document.querySelector("#cupertino-panes-internal")){document.querySelector("#cupertino-panes-internal").textContent+=t}else{const e=document.createElement("style");e.id="cupertino-panes-internal",e.textContent=t,document.head.prepend(e)}}getModuleRef(t){return(t.charAt(0).toLowerCase()+t.slice(1)).replace("Module","")}getPanelTransformY(){return parseFloat(/\.*translateY\((.*)px\)/i.exec(this.paneEl.style.transform)[1])}getPanelTransformX(){let t=/\.*translateX\((.*)px\)/i.exec(this.paneEl.style.transform);return t?parseFloat(t[1]):0}preventDismiss(t=!1){this.preventDismissEvent=t}setGrabCursor(t,e){this.device.desktop&&(this.paneEl.style.cursor=t?e?"grabbing":"grab":"")}disableDrag(){this.disableDragEvents=!0,this.setGrabCursor(!1)}enableDrag(){this.disableDragEvents=!1,this.setGrabCursor(!0)}setBreakpoints(t,e){return __awaiter(this,void 0,void 0,(function*(){!this.isPanePresented()||t?yield this.breakpoints.buildBreakpoints(t,e):console.warn("Cupertino Pane: Provide any breaks configuration")}))}moveToBreak(t,e="breakpoint"){return __awaiter(this,void 0,void 0,(function*(){return this.isPanePresented()?this.settings.breaks[t].enabled?(this.checkOpacityAttr(this.breakpoints.breaks[t]),this.checkOverflowAttr(this.breakpoints.breaks[t]),yield this.transitions.doTransition({type:e,translateY:this.breakpoints.breaks[t]}),this.breakpoints.currentBreakpoint=this.breakpoints.breaks[t],Promise.resolve(!0)):void console.warn("Cupertino Pane: %s breakpoint disabled",t):(console.warn("Cupertino Pane: Present pane before call moveToBreak()"),null)}))}moveToHeight(t){return __awaiter(this,void 0,void 0,(function*(){if(!this.isPanePresented())return console.warn("Cupertino Pane: Present pane before call moveToHeight()"),null;let e=this.screenHeightOffset?this.screen_height-t:t;this.checkOpacityAttr(e),yield this.transitions.doTransition({type:"breakpoint",translateY:e})}))}hide(){return __awaiter(this,void 0,void 0,(function*(){return this.isPanePresented()?this.isHidden()?(console.warn("Cupertino Pane: Pane already hidden"),null):void(yield this.transitions.doTransition({type:"hide",translateY:this.screenHeightOffset})):(console.warn("Cupertino Pane: Present pane before call hide()"),null)}))}isHidden(){return this.isPanePresented()?this.transitions.isPaneHidden:(console.warn("Cupertino Pane: Present pane before call isHidden()"),null)}currentBreak(){return this.isPanePresented()?this.breakpoints.getCurrentBreakName():(console.warn("Cupertino Pane: Present pane before call currentBreak()"),null)}destroy(t={animate:!1,destroyButton:!1}){return __awaiter(this,void 0,void 0,(function*(){if(!this.rendered)return console.warn("Cupertino Pane: Present pane before call destroy()"),null;this.preventDismissEvent?this.preventedDismiss||(this.emit("onWillDismiss",{prevented:!0}),this.moveToBreak(this.breakpoints.prevBreakpoint)):(this.emit("onWillDismiss"),t.animate?yield this.transitions.doTransition({type:"destroy",translateY:this.screenHeightOffset,destroyButton:t.destroyButton}):this.destroyResets(),this.emit("onDidDismiss",{destroyButton:t.destroyButton}))}))}destroyResets(){this.parentEl.appendChild(this.contentEl),this.wrapperEl.remove(),this.events.detachAllEvents(),delete this.rendered,delete this.breakpoints.prevBreakpoint,this.contentEl.style.display="none"}}export{CupertinoPane};