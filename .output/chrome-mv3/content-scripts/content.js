var content=function(){"use strict";var ue=Object.defineProperty;var ee=l=>{throw TypeError(l)};var de=(l,m,A)=>m in l?ue(l,m,{enumerable:!0,configurable:!0,writable:!0,value:A}):l[m]=A;var G=(l,m,A)=>de(l,typeof m!="symbol"?m+"":m,A),Y=(l,m,A)=>m.has(l)||ee("Cannot "+A);var C=(l,m,A)=>(Y(l,m,"read from private field"),A?A.call(l):m.get(l)),N=(l,m,A)=>m.has(l)?ee("Cannot add the same private member more than once"):m instanceof WeakSet?m.add(l):m.set(l,A),re=(l,m,A,P)=>(Y(l,m,"write to private field"),P?P.call(l,A):m.set(l,A),A),q=(l,m,A)=>(Y(l,m,"access private method"),A);var F,T,L,E,se,Z;function l(t){return t}const m={matches:["https://www.linkedin.com/mynetwork/grow*"],main(){console.log("Content script loaded."),chrome.runtime.onMessage.addListener((n,s,o)=>{if(n.action==="startAutomation")return t(o),!0});const t=n=>{console.log("Starting LinkedIn automation...");const s=document.querySelectorAll('button[aria-label*="Invite"]');if(console.log("Connect buttons found: ",s),s.length===0){console.log("No connection buttons found."),alert("No connection buttons found."),n({status:!1,message:"No connection buttons found"});return}let o=0;const b=s.length;s.forEach((u,p)=>{setTimeout(()=>{if(u){console.log(u),u.setAttribute("data-trigger-click","true"),u.dispatchEvent(new Event("click",{bubbles:!0}));const v=document.querySelector('button[aria-label="Send now"]');v&&v.click(),o++,o===b&&(console.log("All connection requests processed."),n({status:!0,message:"Automation completed"}))}},2e3*(p+1))})}}};var A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z={exports:{}};(function(t,n){(function(s,o){o(t)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:A,function(s){if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)s.exports=globalThis.browser;else{const o="The message port closed before a response was received.",b=u=>{const p={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(p).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class v extends WeakMap{constructor(r,a=void 0){super(a),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const ge=e=>e&&typeof e=="object"&&typeof e.then=="function",J=(e,r)=>(...a)=>{u.runtime.lastError?e.reject(new Error(u.runtime.lastError.message)):r.singleCallbackArg||a.length<=1&&r.singleCallbackArg!==!1?e.resolve(a[0]):e.resolve(a)},O=e=>e==1?"argument":"arguments",le=(e,r)=>function(g,...d){if(d.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${O(r.minArgs)} for ${e}(), got ${d.length}`);if(d.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${O(r.maxArgs)} for ${e}(), got ${d.length}`);return new Promise((x,f)=>{if(r.fallbackToNoCallback)try{g[e](...d,J({resolve:x,reject:f},r))}catch(i){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),g[e](...d),r.fallbackToNoCallback=!1,r.noCallback=!0,x()}else r.noCallback?(g[e](...d),x()):g[e](...d,J({resolve:x,reject:f},r))})},K=(e,r,a)=>new Proxy(r,{apply(g,d,x){return a.call(d,e,...x)}});let $=Function.call.bind(Object.prototype.hasOwnProperty);const B=(e,r={},a={})=>{let g=Object.create(null),d={has(f,i){return i in e||i in g},get(f,i,h){if(i in g)return g[i];if(!(i in e))return;let c=e[i];if(typeof c=="function")if(typeof r[i]=="function")c=K(e,e[i],r[i]);else if($(a,i)){let k=le(i,a[i]);c=K(e,e[i],k)}else c=c.bind(e);else if(typeof c=="object"&&c!==null&&($(r,i)||$(a,i)))c=B(c,r[i],a[i]);else if($(a,"*"))c=B(c,r[i],a["*"]);else return Object.defineProperty(g,i,{configurable:!0,enumerable:!0,get(){return e[i]},set(k){e[i]=k}}),c;return g[i]=c,c},set(f,i,h,c){return i in g?g[i]=h:e[i]=h,!0},defineProperty(f,i,h){return Reflect.defineProperty(g,i,h)},deleteProperty(f,i){return Reflect.deleteProperty(g,i)}},x=Object.create(e);return new Proxy(x,d)},j=e=>({addListener(r,a,...g){r.addListener(e.get(a),...g)},hasListener(r,a){return r.hasListener(e.get(a))},removeListener(r,a){r.removeListener(e.get(a))}}),me=new v(e=>typeof e!="function"?e:function(a){const g=B(a,{},{getContent:{minArgs:0,maxArgs:0}});e(g)}),X=new v(e=>typeof e!="function"?e:function(a,g,d){let x=!1,f,i=new Promise(S=>{f=function(w){x=!0,S(w)}}),h;try{h=e(a,g,f)}catch(S){h=Promise.reject(S)}const c=h!==!0&&ge(h);if(h!==!0&&!c&&!x)return!1;const k=S=>{S.then(w=>{d(w)},w=>{let V;w&&(w instanceof Error||typeof w.message=="string")?V=w.message:V="An unexpected error occurred",d({__mozWebExtensionPolyfillReject__:!0,message:V})}).catch(w=>{console.error("Failed to send onMessage rejected reply",w)})};return k(c?h:i),!0}),Ae=({reject:e,resolve:r},a)=>{u.runtime.lastError?u.runtime.lastError.message===o?r():e(new Error(u.runtime.lastError.message)):a&&a.__mozWebExtensionPolyfillReject__?e(new Error(a.message)):r(a)},Q=(e,r,a,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${O(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${O(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((d,x)=>{const f=Ae.bind(null,{resolve:d,reject:x});g.push(f),a.sendMessage(...g)})},ce={devtools:{network:{onRequestFinished:j(me)}},runtime:{onMessage:j(X),onMessageExternal:j(X),sendMessage:Q.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:Q.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},W={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return p.privacy={network:{"*":W},services:{"*":W},websites:{"*":W}},B(u,ce,p)};s.exports=b(chrome)}})})(z);var ne=z.exports;const R=P(ne);function I(t,...n){}const te={debug:(...t)=>I(console.debug,...t),log:(...t)=>I(console.log,...t),warn:(...t)=>I(console.warn,...t),error:(...t)=>I(console.error,...t)},ie={BASE_URL:"/",BROWSER:"chrome",CHROME:!0,COMMAND:"build",DEV:!1,EDGE:!1,ENTRYPOINT:"content",FIREFOX:!1,MANIFEST_VERSION:3,MODE:"production",OPERA:!1,PROD:!0,SAFARI:!1,SSR:!1,VITE_CJS_IGNORE_WARNING:"true"},_=class _ extends Event{constructor(n,s){super(_.EVENT_NAME,{}),this.newUrl=n,this.oldUrl=s}};G(_,"EVENT_NAME",H("wxt:locationchange"));let D=_;function H(t){var s;const n=typeof ie>"u"?"build":"content";return`${(s=R==null?void 0:R.runtime)==null?void 0:s.id}:${n}:${t}`}function ae(t){let n,s;return{run(){n==null&&(s=new URL(location.href),n=t.setInterval(()=>{let o=new URL(location.href);o.href!==s.href&&(window.dispatchEvent(new D(o,s)),s=o)},1e3))}}}const y=class y{constructor(n,s){N(this,E);N(this,F,window.self===window.top);N(this,T);N(this,L,ae(this));this.contentScriptName=n,this.options=s,re(this,T,new AbortController),C(this,F)?(q(this,E,Z).call(this,{ignoreFirstEvent:!0}),q(this,E,se).call(this)):q(this,E,Z).call(this)}get signal(){return C(this,T).signal}abort(n){return C(this,T).abort(n)}get isInvalid(){return R.runtime.id==null&&this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(n){return this.signal.addEventListener("abort",n),()=>this.signal.removeEventListener("abort",n)}block(){return new Promise(()=>{})}setInterval(n,s){const o=setInterval(()=>{this.isValid&&n()},s);return this.onInvalidated(()=>clearInterval(o)),o}setTimeout(n,s){const o=setTimeout(()=>{this.isValid&&n()},s);return this.onInvalidated(()=>clearTimeout(o)),o}requestAnimationFrame(n){const s=requestAnimationFrame((...o)=>{this.isValid&&n(...o)});return this.onInvalidated(()=>cancelAnimationFrame(s)),s}requestIdleCallback(n,s){const o=requestIdleCallback((...b)=>{this.signal.aborted||n(...b)},s);return this.onInvalidated(()=>cancelIdleCallback(o)),o}addEventListener(n,s,o,b){var u;s==="wxt:locationchange"&&this.isValid&&C(this,L).run(),(u=n.addEventListener)==null||u.call(n,s.startsWith("wxt:")?H(s):s,o,{...b,signal:this.signal})}notifyInvalidated(){this.abort("Content script context invalidated"),te.debug(`Content script "${this.contentScriptName}" context invalidated`)}};F=new WeakMap,T=new WeakMap,L=new WeakMap,E=new WeakSet,se=function(){window.postMessage({type:y.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName},"*")},Z=function(n){let s=!0;const o=b=>{var u,p;if(((u=b.data)==null?void 0:u.type)===y.SCRIPT_STARTED_MESSAGE_TYPE&&((p=b.data)==null?void 0:p.contentScriptName)===this.contentScriptName){const v=s;if(s=!1,v&&(n!=null&&n.ignoreFirstEvent))return;this.notifyInvalidated()}};addEventListener("message",o),this.onInvalidated(()=>removeEventListener("message",o))},G(y,"SCRIPT_STARTED_MESSAGE_TYPE","wxt:content-script-started");let U=y;function fe(){}function M(t,...n){}const oe={debug:(...t)=>M(console.debug,...t),log:(...t)=>M(console.log,...t),warn:(...t)=>M(console.warn,...t),error:(...t)=>M(console.error,...t)};return(async()=>{try{const{main:t,...n}=m,s=new U("content",n);return await t(s)}catch(t){throw oe.error('The content script "content" crashed on startup!',t),t}})()}();
content;
