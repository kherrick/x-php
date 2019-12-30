/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const t=!(window.ShadyDOM&&window.ShadyDOM.inUse);let e,n;function s(n){e=(!n||!n.shimcssproperties)&&(t||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(n=window.ShadyCSS.cssBuild);const r=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?e=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const i=e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function l(t){return function t(e,n){let s=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;s=n.substring(t,e.start-1),s=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(s),s=s.replace(u.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=s.trim();e.atRule=0===r.indexOf(f),e.atRule?0===r.indexOf(_)?e.type=h.MEDIA_RULE:r.match(u.keyframesRule)&&(e.type=h.KEYFRAMES_RULE,e.keyframesName=e.selector.split(u.multipleSpaces).pop()):0===r.indexOf(p)?e.type=h.MIXIN_RULE:e.type=h.STYLE_RULE}let r=e.rules;if(r)for(let e,s=0,i=r.length;s<i&&(e=r[s]);s++)t(e,n);return e}(function(t){let e=new o;e.start=0,e.end=t.length;let n=e;for(let s=0,r=t.length;s<r;s++)if(t[s]===c){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;n=new o,n.start=s+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[s]===d&&(n.end=s+1,n=n.parent||e);return e}(t=t.replace(u.comments,"").replace(u.port,"")),t)}function a(t,e,n=""){let s="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(p)}(n))for(let t,r=0,i=n.length;r<i&&(t=n[r]);r++)s=a(t,e,s);else s=e?t.cssText:function(t){return function(t){return t.replace(u.mixinApply,"").replace(u.varApply,"")}(t=function(t){return t.replace(u.customProp,"").replace(u.mixinProp,"")}(t))}(t.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(t.selector&&(n+=t.selector+" "+c+"\n"),n+=s,t.selector&&(n+=d+"\n\n")),n}const h={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},c="{",d="}",u={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",_="@media",f="@",m=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,y=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,g=/@media\s(.*)/,b=new Set,w="shady-unscoped";function P(t){const e=t.textContent;if(!b.has(e)){b.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function C(t){return t.hasAttribute(w)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function v(t,e){return t?("string"==typeof t&&(t=l(t)),e&&x(t,e),a(t,i)):""}function S(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=l(t.textContent)),t.__cssRules||null}function x(t,e,n,s){if(!t)return;let r=!1,i=t.type;if(s&&i===h.MEDIA_RULE){let e=t.selector.match(g);e&&(window.matchMedia(e[1]).matches||(r=!0))}i===h.STYLE_RULE?e(t):n&&i===h.KEYFRAMES_RULE?n(t):i===h.MIXIN_RULE&&(r=!0);let o=t.rules;if(o&&!r)for(let t,r=0,i=o.length;r<i&&(t=o[r]);r++)x(t,e,n,s)}window.ShadyDOM&&window.ShadyDOM.wrap;const E="css-build";function O(t){if(void 0!==n)return n;if(void 0===t.__cssBuild){const e=t.getAttribute(E);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===E)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function T(t){return""!==O(t)}function N(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function A(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const I=/;\s*/m,k=/^\s*(initial)|(inherit)\s*$/,M=/\s*!important/,R="_-_";class D{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let L=null;class F{constructor(){this._currentElement=null,this._measureElement=null,this._map=new D}detectMixin(t){return function(t){const e=y.test(t)||m.test(t);return y.lastIndex=0,m.lastIndex=0,e}(t)}gatherStyles(e){const n=function(e){const n=[],s=e.querySelectorAll("style");for(let e=0;e<s.length;e++){const r=s[e];C(r)?t||(P(r),r.parentNode.removeChild(r)):(n.push(r.textContent),r.parentNode.removeChild(r))}return n.join("").trim()}(e.content);if(n){const t=document.createElement("style");return t.textContent=n,e.content.insertBefore(t,e.content.firstChild),t}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=S(t);return this.transformRules(n,e),t.textContent=v(n),n}transformCustomStyle(t){let e=S(t);return x(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=v(e),e}transformRules(t,e){this._currentElement=e,x(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(m,(t,n,s,r)=>this._produceCssProperties(t,n,s,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let s=!1;return x(e,e=>{s=s||e===t,s||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=y.exec(t);){let s=n[0],r=n[1],i=n.index,o=i+s.indexOf("@apply"),l=i+s.length,a=t.slice(0,o),h=t.slice(l),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(a));let d=this._atApplyToCssProperties(r,c);t=`${a}${d}${h}`,y.lastIndex=i+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(I,"");let n=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){let r,i,o;this._currentElement&&(s.dependants[this._currentElement]=!0);const l=s.properties;for(r in l)o=e&&e[r],i=[r,": var(",t,R,r],o&&i.push(",",o.replace(M,"")),i.push(")"),M.test(l[r])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=k.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,s,r=t.split(";"),i={};for(let t,o,l=0;l<r.length;l++)t=r[l],t&&(o=t.split(":"),o.length>1&&(n=o[0].trim(),s=o.slice(1).join(":"),e&&(s=this._replaceInitialOrInherit(n,s)),i[n]=s));return i}_invalidateMixinEntry(t){if(L)for(let e in t.dependants)e!==this._currentElement&&L(e)}_produceCssProperties(t,e,n,s,r){if(n&&function t(e,n){let s=e.indexOf("var(");if(-1===s)return n(e,"","","");let r=function(t,e){let n=0;for(let s=e,r=t.length;s<r;s++)if("("===t[s])n++;else if(")"===t[s]&&0==--n)return s;return-1}(e,s+3),i=e.substring(s+4,r),o=e.substring(0,s),l=t(e.substring(r+1),n),a=i.indexOf(",");return-1===a?n(o,i.trim(),"",l):n(o,i.substring(0,a).trim(),i.substring(a+1).trim(),l)}(n,(t,e)=>{e&&this._map.get(e)&&(s=`@apply ${e};`)}),!s)return t;let i=this._consumeCssProperties(""+s,r),o=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(i,!0),a=l,h=this._map.get(e),c=h&&h.properties;c?a=Object.assign(Object.create(c),l):this._map.set(e,a);let d,u,p=[],_=!1;for(d in a)u=l[d],void 0===u&&(u="initial"),!c||d in c||(_=!0),p.push(`${e}${R}${d}: ${u}`);return _&&this._invalidateMixinEntry(h),h&&(h.properties=a),n&&(o=`${t};${o}`),`${o}${p.join("; ")};`}}F.prototype.detectMixin=F.prototype.detectMixin,F.prototype.transformStyle=F.prototype.transformStyle,F.prototype.transformCustomStyle=F.prototype.transformCustomStyle,F.prototype.transformRules=F.prototype.transformRules,F.prototype.transformRule=F.prototype.transformRule,F.prototype.transformTemplate=F.prototype.transformTemplate,F.prototype._separator=R,Object.defineProperty(F.prototype,"invalidCallback",{get:()=>L,set(t){L=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const H={},z="_applyShimCurrentVersion",j="_applyShimNextVersion",$="_applyShimValidatingVersion",B=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function q(t){let e=H[t];e&&function(t){t[z]=t[z]||0,t[$]=t[$]||0,t[j]=(t[j]||0)+1}(e)}function Y(t){return t[z]===t[j]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let J,U=null,V=window.HTMLImports&&window.HTMLImports.whenReady||null;function X(t){requestAnimationFrame((function(){V?V(t):(U||(U=new Promise(t=>{J=t}),"complete"===document.readyState?J():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&J()})),U.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const W="__seenByShadyCSS",G="__shadyCSSCachedStyle";let Z=null,K=null;class Q{constructor(){this.customStyles=[],this.enqueued=!1,X(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&K&&(this.enqueued=!0,X(K))}addCustomStyle(t){t[W]||(t[W]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[G])return t[G];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[G])continue;const s=this.getStyleForCustomStyle(n);if(s){const t=s.__appliedElement||s;Z&&Z(t),n[G]=t}}return t}}Q.prototype.addCustomStyle=Q.prototype.addCustomStyle,Q.prototype.getStyleForCustomStyle=Q.prototype.getStyleForCustomStyle,Q.prototype.processStyles=Q.prototype.processStyles,Object.defineProperties(Q.prototype,{transformCallback:{get:()=>Z,set(t){Z=t}},validateCallback:{get:()=>K,set(t){let e=!1;K||(e=!0),K=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const tt=new F;class et{constructor(){this.customStyleInterface=null,tt.invalidCallback=q}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{tt.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),T(t))return;H[e]=t;let n=tt.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&tt.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&N(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",s="";return e?e.indexOf("-")>-1?n=e:(s=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,s=t.extends),{is:n,typeExtension:s}}(t),n=H[e];if((!n||!T(n))&&n&&!Y(n)){(function(t){return!Y(t)&&t[$]===t[j]})(n)||(this.prepareTemplate(n,e),function(t){t[$]=t[j],t._validating||(t._validating=!0,B.then((function(){t[z]=t[j],t._validating=!1})))}(n));let s=t.shadowRoot;if(s){let t=s.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=v(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new et;let s=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,s){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(t,e)=>A(t,e),flushCustomStyles(){e.flushCustomStyles()},nativeCss:i,nativeShadow:t,cssBuild:n,disableRuntime:r},s&&(window.ShadyCSS.CustomStyleInterface=s)}window.ShadyCSS.ApplyShim=tt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let nt,st,rt=/(url\()([^)]*)(\))/g,it=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ot(t,e){if(t&&it.test(t))return t;if("//"===t)return t;if(void 0===nt){nt=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",nt="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),nt)try{return new URL(t,e).href}catch(e){return t}return st||(st=document.implementation.createHTMLDocument("temp"),st.base=st.createElement("base"),st.head.appendChild(st.base),st.anchor=st.createElement("a"),st.body.appendChild(st.anchor)),st.base.href=e,st.anchor.href=t,st.anchor.href||t}function lt(t,e){return t.replace(rt,(function(t,n,s,r){return n+"'"+ot(s.replace(/["']/g,""),e)+"'"+r}))}function at(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ht=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let ct=at(document.baseURI||window.location.href),dt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,ut=!1,pt=!1,_t=!1,ft=!1,mt=!1,yt=!0,gt=0;const bt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=gt++;return function(s){let r=s.__mixinSet;if(r&&r[n])return s;let i=e,o=i.get(s);o||(o=t(s),i.set(s,o));let l=Object.create(o.__mixinSet||r||null);return l[n]=!0,o.__mixinSet=l,o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wt={},Pt={};function Ct(t,e){wt[t]=Pt[t.toLowerCase()]=e}function vt(t){return wt[t]||Pt[t.toLowerCase()]}class St extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=vt(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,s){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ot(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=at(e)}return this.__assetpath}register(t){if(t=t||this.id){if(pt&&void 0!==vt(t))throw Ct(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ct(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}St.prototype.modules=wt,customElements.define("dom-module",St);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const xt="link[rel=import][type~=css]",Et="include",Ot="shady-unscoped";function Tt(t){return St.import(t)}function Nt(t){const e=lt((t.body?t.body:t).textContent,t.baseURI),n=document.createElement("style");return n.textContent=e,n}function At(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...It(e[t]));return n}function It(t){const e=Tt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Mt(e));const n=e.querySelector("template");n&&t.push(...kt(n,e.assetpath)),e._styles=t}return e._styles}function kt(t,e){if(!t._styles){const n=[],s=t.content.querySelectorAll("style");for(let t=0;t<s.length;t++){let r=s[t],i=r.getAttribute(Et);i&&n.push(...At(i).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(r.textContent=lt(r.textContent,e)),n.push(r)}t._styles=n}return t._styles}function Mt(t){const e=[],n=t.querySelectorAll(xt);for(let t=0;t<n.length;t++){let s=n[t];if(s.import){const t=s.import,n=s.hasAttribute(Ot);if(n&&!t._unscopedStyle){const e=Nt(t);e.setAttribute(Ot,""),t._unscopedStyle=e}else t._style||(t._style=Nt(t));e.push(n?t._unscopedStyle:t._style)}}return e}function Rt(t){let e=Tt(t);if(e&&void 0===e._cssText){let t=function(t){let e="",n=Mt(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const s=kt(t,e);for(let t=0;t<s.length;t++){let e=s[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const Dt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Lt(t){return t.indexOf(".")>=0}function Ft(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Ht(t,e){return 0===t.indexOf(e+".")}function zt(t,e){return 0===e.indexOf(t+".")}function jt(t,e,n){return e+n.slice(t.length)}function $t(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let s=t[n].toString().split(".");for(let t=0;t<s.length;t++)e.push(s[t])}return e.join(".")}return t}function Bt(t){return Array.isArray(t)?$t(t).split("."):t.toString().split(".")}function qt(t,e,n){let s=t,r=Bt(e);for(let t=0;t<r.length;t++){if(!s)return;s=s[r[t]]}return n&&(n.path=r.join(".")),s}function Yt(t,e,n){let s=t,r=Bt(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(s=s[r[t]],!s)return}s[i]=n}else s[e]=n;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jt={},Ut=/-[a-z]/g,Vt=/([A-Z])/g;function Xt(t){return Jt[t]||(Jt[t]=t.indexOf("-")<0?t:t.replace(Ut,t=>t[1].toUpperCase()))}function Wt(t){return Jt[t]||(Jt[t]=t.replace(Vt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gt=0,Zt=0,Kt=[],Qt=0,te=document.createTextNode("");new window.MutationObserver((function(){const t=Kt.length;for(let e=0;e<t;e++){let t=Kt[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Kt.splice(0,t),Zt+=t})).observe(te,{characterData:!0});const ee={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},ne={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},se={run:t=>(te.textContent=Qt++,Kt.push(t),Gt++),cancel(t){const e=t-Zt;if(e>=0){if(!Kt[e])throw new Error("invalid async handle: "+t);Kt[e]=null}}},re=se,ie=bt(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let s=this.__data[t],r=this._shouldPropertyChange(t,e,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,re.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,s){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,s)}_attributeToProperty(t,e,n){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[t]||t;this[r]=this._deserializeValue(e,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const s=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Dt(t)),void 0===s?t.removeAttribute(n):t.setAttribute(n,s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),oe={};let le=HTMLElement.prototype;for(;le;){let t=Object.getOwnPropertyNames(le);for(let e=0;e<t.length;e++)oe[t[e]]=!0;le=Object.getPrototypeOf(le)}const ae=bt(t=>{const e=ie(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Xt(t[e]))}static attributeNameForProperty(t){return Wt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!oe[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),he={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ce=!1,de=!1;function ue(t){(function(){if(!ce){ce=!0;const t=document.createElement("textarea");t.placeholder="a",de=t.placeholder===t.textContent}return de})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function pe(t){let e=t.getAttribute("is");if(e&&he[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function _e(t,e){let n=e.parentInfo&&_e(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,s=0;t;t=t.nextSibling)if(e.parentIndex===s++)return t}function fe(t,e,n,s){s.id&&(e[s.id]=n)}function me(t,e,n){if(n.events&&n.events.length)for(let s,r=0,i=n.events;r<i.length&&(s=i[r]);r++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function ye(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const ge=bt(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let s=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,e,n)||s,ue(r),r.firstChild&&this._parseTemplateChildNodes(r,e,n),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,e,n)||s),s}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let s,r=t.firstChild,i=0;r;r=s){if("template"==r.localName&&(r=pe(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=s;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,s=n.nextSibling,t.removeChild(n),n=s;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,n){let s=t,r=this._parseTemplate(s,e);return(r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){let s=!1,r=Array.from(t.attributes);for(let i,o=r.length-1;i=r[o];o--)s=this._parseTemplateNodeAttribute(t,e,n,i.name,i.value)||s;return s}static _parseTemplateNodeAttribute(t,e,n,s,r){return"on-"===s.slice(0,3)?(t.removeAttribute(s),n.events=n.events||[],n.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(n.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,s=e.content||t.content,r=document.importNode(s,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(n.length);r.$={};for(let t,e=0,s=n.length;e<s&&(t=n[e]);e++){let n=i[e]=_e(r,t);fe(0,r.$,n,t),ye(0,n,t),me(this,n,t)}return r=r,r}_addMethodEventListenerToNode(t,e,n,s){let r=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(s=s||t,0,n);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let be=0;const we={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Pe=/[A-Z]/;function Ce(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],s=n[t]=Array(e.length);for(let t=0;t<e.length;t++)s[t]=e[t]}}}else n=t[e]={};return n}function ve(t,e,n,s,r,i){if(e){let o=!1,l=be++;for(let a in n)Se(t,e,l,a,n,s,r,i)&&(o=!0);return o}return!1}function Se(t,e,n,s,r,i,o,l){let a=!1,h=e[o?Ft(s):s];if(h)for(let e,c=0,d=h.length;c<d&&(e=h[c]);c++)e.info&&e.info.lastRun===n||o&&!xe(s,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,s,r,i,e.info,o,l),a=!0);return a}function xe(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Ht(n,t))||!(!e.wildcard||!zt(n,t))}return!0}function Ee(t,e,n,s,r){let i="string"==typeof r.method?t[r.method]:r.method,o=r.property;i?i.call(t,t.__data[o],s[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Oe(t,e,n){let s=Ft(e);if(s!==e){return Te(t,Wt(s)+"-changed",n[e],e),!0}return!1}function Te(t,e,n,s){let r={value:n,queueProperty:!0};s&&(r.path=s),Dt(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function Ne(t,e,n,s,r,i){let o=(i?Ft(e):e)!=e?e:null,l=o?qt(t,o):t.__data[e];o&&void 0===l&&(l=n[e]),Te(t,r.eventName,l,o)}function Ae(t,e,n,s,r){let i=t.__data[e];dt&&(i=dt(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function Ie(t,e,n,s,r){let i=He(t,e,n,s,r),o=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,i,!0):t[o]=i}function ke(t,e,n,s,r,i,o){n.bindings=n.bindings||[];let l={kind:s,target:r,parts:i,literal:o,isCompound:1!==i.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Wt(r)+"-changed",l.listenerNegate=e}let a=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let s=l.parts[n];s.compoundIndex=n,Me(t,e,l,s,a)}}function Me(t,e,n,s,r){if(!s.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=s.dependencies,o={index:r,binding:n,part:s,evaluator:t};for(let n=0;n<i.length;n++){let s=i[n];"string"==typeof s&&(s=qe(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:Re,info:o,trigger:s})}}}function Re(t,e,n,s,r,i,o){let l=o[r.index],a=r.binding,h=r.part;if(i&&h.source&&e.length>h.source.length&&"property"==a.kind&&!a.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[a.target]){let s=n[e];e=jt(h.source,a.target,e),l._setPendingPropertyOrPath(e,s,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,n,s,r){r=function(t,e,n,s){if(n.isCompound){let r=t.__dataCompoundStorage[n.target];r[s.compoundIndex]=e,e=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,n,s),dt&&(r=dt(r,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,r,n.target);else{let s=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?e[we.READ_ONLY]&&e[we.READ_ONLY][s]||e._setPendingProperty(s,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,r)}}(t,l,a,h,r.evaluator._evaluateBinding(t,h,e,n,s,i))}}function De(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,r=new Array(s.length);for(let t=0;t<s.length;t++)r[t]=s[t].literal;let i=e.target;n[i]=r,e.literal&&"property"==e.kind&&("className"===i&&(t=Dt(t)),t[i]=e.literal)}}function Le(t,e,n){if(n.listenerEvent){let s=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,s,r){let i,o=t.detail,l=o&&o.path;l?(s=jt(n,s,l),i=o&&o.value):i=t.currentTarget[n],i=r?!i:i,e[we.READ_ONLY]&&e[we.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,i,!0,Boolean(l))||o&&o.queueProperty||e._invalidateProperties()}(t,e,n.target,s.source,s.negate)}))}}function Fe(t,e,n,s,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,n,{fn:s,info:o,trigger:r});i&&t._addPropertyEffect(e.methodName,n,{fn:s,info:o})}function He(t,e,n,s,r){let i=t._methodHost||t,o=i[r.methodName];if(o){let s=t._marshalArgs(r.args,e,n);return o.apply(i,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const ze=[],je=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function $e(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function Be(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:ze};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=qe(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function qe(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},s=e[0];switch("-"===s&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Ft(e),n.structured=Lt(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function Ye(t,e,n){let s=qt(t,n);return void 0===s&&(s=e[n]),s}function Je(t,e,n,s){t.notifyPath(n+".splices",{indexSplices:s}),t.notifyPath(n+".length",e.length)}function Ue(t,e,n,s,r,i){Je(t,e,n,[{index:s,addedCount:r,removed:i,object:e,type:"splice"}])}const Ve=bt(t=>{const e=ge(ae(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return we}_initializeProperties(){super._initializeProperties(),Xe.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[we.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==we.READ_ONLY);let s=Ce(this,e)[t];s||(s=this[e][t]=[]),s.push(n)}_removePropertyEffect(t,e,n){let s=Ce(this,e)[t],r=s.indexOf(n);r>=0&&s.splice(r,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,we.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,we.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,we.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,we.COMPUTE)}_setPendingPropertyOrPath(t,e,n,s){if(s||Ft(Array.isArray(t)?t[0]:t)!==t){if(!s){let n=qt(this,t);if(!(t=Yt(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let s=t.__dataLinkedPaths;if(s){let r;for(let i in s){let o=s[i];zt(i,e)?(r=jt(i,o,e),t._setPendingPropertyOrPath(r,n,!0,!0)):zt(o,e)&&(r=jt(o,i,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Dt(t)),t[e]=n)}_setPendingProperty(t,e,n){let s=this.__dataHasPaths&&Lt(t),r=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),s?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(s||this[we.NOTIFY]&&this[we.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[we.READ_ONLY]&&this[we.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let s=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,s){let r=t[we.COMPUTE];if(r){let i=e;for(;ve(t,r,i,n,s);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,n,s);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,s),this._flushClients(),ve(this,this[we.REFLECT],e,n,s),ve(this,this[we.OBSERVE],e,n,s),r&&function(t,e,n,s,r){let i,o,l=t[we.NOTIFY],a=be++;for(let o in e)e[o]&&(l&&Se(t,l,a,o,n,s,r)?i=!0:r&&Oe(t,o,n)&&(i=!0));i&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,e,n,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[we.PROPAGATE]&&ve(this,this[we.PROPAGATE],t,e,n);let s=this.__templateInfo;for(;s;)ve(this,s.propertyEffects,t,e,n,s.nodeList),s=s.nextTemplateInfo}linkPaths(t,e){t=$t(t),e=$t(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=$t(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};Je(this,qt(this,t,n),n.path,e)}get(t,e){return qt(e||this,t)}set(t,e,n){n?Yt(n,t,e):this[we.READ_ONLY]&&this[we.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},s=qt(this,t,n),r=s.length,i=s.push(...e);return e.length&&Ue(this,s,n.path,r,e.length,[]),i}pop(t){let e={path:""},n=qt(this,t,e),s=Boolean(n.length),r=n.pop();return s&&Ue(this,n,e.path,n.length,0,[r]),r}splice(t,e,n,...s){let r,i={path:""},o=qt(this,t,i);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?o.splice(e):o.splice(e,n,...s),(s.length||r.length)&&Ue(this,o,i.path,e,s.length,r),r}shift(t){let e={path:""},n=qt(this,t,e),s=Boolean(n.length),r=n.shift();return s&&Ue(this,n,e.path,0,0,[r]),r}unshift(t,...e){let n={path:""},s=qt(this,t,n),r=s.unshift(...e);return e.length&&Ue(this,s,n.path,0,e.length,[]),r}notifyPath(t,e){let n;if(1==arguments.length){let s={path:""};e=qt(this,t,s),n=s.path}else n=Array.isArray(t)?$t(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,we.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let s={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,we.OBSERVE,{fn:Ee,info:s,trigger:{name:t}}),n&&this._addPropertyEffect(e,we.OBSERVE,{fn:Ee,info:s,trigger:{name:e}})}_createMethodObserver(t,e){let n=Be(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");Fe(this,n,we.OBSERVE,He,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,we.NOTIFY,{fn:Ne,info:{eventName:Wt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,we.REFLECT,{fn:Ae,info:{attrName:e}})}_createComputedProperty(t,e,n){let s=Be(e);if(!s)throw new Error("Malformed computed expression '"+e+"'");Fe(this,s,we.COMPUTE,Ie,t,n)}_marshalArgs(t,e,n){const s=this.__data,r=[];for(let i=0,o=t.length;i<o;i++){let{name:o,structured:l,wildcard:a,value:h,literal:c}=t[i];if(!c)if(a){const t=zt(o,e),r=Ye(s,n,t?e:o);h={path:t?e:o,value:r,base:t?qt(s,o):r}}else h=l?Ye(s,n,o):s[o];r[i]=h}return r}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),s=this.__templateInfo==n;if(!s)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&(n=Object.create(n),n.wasPreBound=s,!s&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let s=t.propertyEffects=t.propertyEffects||{};(s[e]=s[e]||[]).push(n)}_stampTemplate(t){Xe.beginHosting(this);let e=super._stampTemplate(t);Xe.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:s}=e;if(s.length)for(let e=0;e<s.length;e++){let r=s[e],i=n[e],o=r.bindings;if(o)for(let e=0;e<o.length;e++){let n=o[e];De(i,n),Le(i,t,n)}i.__dataHost=t}}(this,n),this.__dataReady&&ve(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,s){let r=e._parseTemplateNode.call(this,t,n,s);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=$e(e)||" ",ke(this,n,s,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,n,s,r,i){let o=this._parseBindings(i,n);if(o){let e=r,i="property";Pe.test(r)?i="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),i="attribute");let l=$e(o);return l&&"attribute"==i&&("class"==r&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(r)),t.setAttribute(r,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(r=Xt(r)),ke(this,n,s,i,r,o,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,s,r,i)}static _parseTemplateNestedTemplate(t,n,s){let r=e._parseTemplateNestedTemplate.call(this,t,n,s),i=s.templateInfo.hostProps;for(let t in i){ke(this,n,s,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return r}static _parseBindings(t,e){let n,s=[],r=0;for(;null!==(n=je.exec(t));){n.index>r&&s.push({literal:t.slice(r,n.index)});let i=n[1][0],o=Boolean(n[2]),l=n[3].trim(),a=!1,h="",c=-1;"{"==i&&(c=l.indexOf("::"))>0&&(h=l.substring(c+2),l=l.substring(0,c),a=!0);let d=Be(l),u=[];if(d){let{args:t,methodName:n}=d;for(let e=0;e<t.length;e++){let n=t[e];n.literal||u.push(n)}let s=e.dynamicFns;(s&&s[n]||d.static)&&(u.push(n),d.dynamicFn=!0)}else u.push(l);s.push({source:l,mode:i,negate:o,customEvent:a,signature:d,dependencies:u,event:h}),r=je.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&s.push({literal:e})}return s.length?s:null}static _evaluateBinding(t,e,n,s,r,i){let o;return o=e.signature?He(t,n,s,0,e.signature):n!=e.source?qt(t,e.source):i&&Lt(n)?qt(t,n):t.__data[n],e.negate&&(o=!o),o}}});const Xe=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const We=bt(t=>{const e=ie(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let n in t){const s=t[n];e[n]="function"==typeof s?{type:s}:s}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),Ge="3.3.1",Ze=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ke=bt(t=>{const e=We(Ve(t));function n(t,e,n,s){n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,n.computed,s)),n.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===n.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),n.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===n.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),n.observer&&t._createPropertyObserver(e,n.observer,s[n.observer]),t._addPropertyToAttributeMap(e)}function s(t,e,n,s){if(!Ze){const r=e.content.querySelectorAll("style"),i=kt(e),o=function(t){let e=Tt(t);return e?Mt(e):[]}(n),l=e.content.firstElementChild;for(let n=0;n<o.length;n++){let r=o[n];r.textContent=t._processStyleText(r.textContent,s),e.content.insertBefore(r,l)}let a=0;for(let e=0;e<i.length;e++){let n=i[e],o=r[a];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):a++,n.textContent=t._processStyleText(n.textContent,s)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}return class extends e{static get polymerElementVersion(){return Ge}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):ft||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)n(this.prototype,e,t[e],t)}static createObservers(t,e){const n=this.prototype;for(let s=0;s<t.length;s++)n._createMethodObserver(t[s],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!pt||_t)&&(e=St.import(t,"template"),pt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=at(t.url);else{const t=St.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ct,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let s=e[n];"value"in s&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=s)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return lt(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;s(this,e,t,n?ot(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Dt(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),mt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=ot(this.importPath)),ot(t,e)}static _parseTemplateContent(t,n,s){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,s)}static _addTemplatePropertyEffect(t,n,s){return!ft||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,n,s)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Qe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,tn.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),tn.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof Qe?t._cancelAsync():t=new Qe,t.setConfig(e,n),t}}let tn=new Set;const en=function(t){tn.add(t)},nn=function(){const t=Boolean(tn.size);return tn.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let sn="string"==typeof document.head.style.touchAction,rn="__polymerGestures",on="__polymerGesturesHandled",ln="__polymerGesturesTouchAction",an=25,hn=5,cn=2500,dn=["mousedown","mousemove","mouseup","click"],un=[0,1,4,2],pn=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function _n(t){return dn.indexOf(t)>-1}let fn=!1;function mn(t){if(!_n(t)&&"touchend"!==t)return sn&&fn&&ut?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){fn=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let yn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const gn=[],bn={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},wn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Pn(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let s=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let Cn=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[on]={skip:!0},"click"===t.type)){let e=!1,s=Tn(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)gn.push(s[t]);else if(n=s[t],bn[n.localName]){let n=Pn(s[t]);for(let t=0;t<n.length;t++)e=e||gn.indexOf(n[t])>-1}if(s[t]===xn.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function vn(t){let e=yn?["click"]:dn;for(let n,s=0;s<e.length;s++)n=e[s],t?(gn.length=0,document.addEventListener(n,Cn,!0)):document.removeEventListener(n,Cn,!0)}function Sn(t){let e=t.type;if(!_n(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!pn&&(e=un[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let xn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function En(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function On(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}yt&&document.addEventListener("touchend",(function(t){if(!yt)return;xn.mouse.mouseIgnoreJob||vn(!0),xn.mouse.target=Tn(t)[0],xn.mouse.mouseIgnoreJob=Qe.debounce(xn.mouse.mouseIgnoreJob,ee.after(cn),(function(){vn(),xn.mouse.target=null,xn.mouse.mouseIgnoreJob=null}))}),!!fn&&{passive:!0});const Tn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Nn={},An=[];function In(t){const e=Tn(t);return e.length>0?e[0]:t.target}function kn(t){let e,n=t.type,s=t.currentTarget[rn];if(!s)return;let r=s[n];if(r){if(!t[on]&&(t[on]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(xn.touch.id=e.identifier),xn.touch.id!==e.identifier)return;sn||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)xn.touch.x=e.clientX,xn.touch.y=e.clientY,xn.touch.scrollDecided=!1;else if("touchmove"===n){if(xn.touch.scrollDecided)return;xn.touch.scrollDecided=!0;let n=function(t){let e="auto",n=Tn(t);for(let t,s=0;s<n.length;s++)if(t=n[s],t[ln]){e=t[ln];break}return e}(t),s=!1,r=Math.abs(xn.touch.x-e.clientX),i=Math.abs(xn.touch.y-e.clientY);t.cancelable&&("none"===n?s=!0:"pan-x"===n?s=i>r:"pan-y"===n&&(s=r>i)),s?t.preventDefault():Hn("track")}}(t)}if(e=t[on],!e.skip){for(let n,s=0;s<An.length;s++)n=An[s],r[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let s,i=0;i<An.length;i++)s=An[i],r[s.name]&&!e[s.name]&&(e[s.name]=!0,s[n](t))}}}function Mn(t,e,n){return!!Nn[e]&&(function(t,e,n){let s=Nn[e],r=s.deps,i=s.name,o=t[rn];o||(t[rn]=o={});for(let e,n,s=0;s<r.length;s++)e=r[s],yn&&_n(e)&&"click"!==e||(n=o[e],n||(o[e]=n={_count:0}),0===n._count&&t.addEventListener(e,kn,mn(e)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),s.touchAction&&Ln(t,s.touchAction)}(t,e,n),!0)}function Rn(t,e,n){return!!Nn[e]&&(function(t,e,n){let s=Nn[e],r=s.deps,i=s.name,o=t[rn];if(o)for(let e,n,s=0;s<r.length;s++)e=r[s],n=o[e],n&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,kn,mn(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function Dn(t){An.push(t);for(let e=0;e<t.emits.length;e++)Nn[t.emits[e]]=t}function Ln(t,e){sn&&t instanceof HTMLElement&&se.run(()=>{t.style.touchAction=e}),t[ln]=e}function Fn(t,e,n){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=n,Dt(t).dispatchEvent(s),s.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Hn(t){let e=function(t){for(let e,n=0;n<An.length;n++){e=An[n];for(let n,s=0;s<e.emits.length;s++)if(n=e.emits[s],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function zn(t,e,n,s){e&&Fn(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:s,prevent:function(t){return Hn(t)}})}function jn(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),r=Math.abs(t.y-n);return s>=hn||r>=hn}function $n(t,e,n){if(!e)return;let s,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,l=i.y-t.y,a=0;r&&(s=i.x-r.x,a=i.y-r.y),Fn(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:o,dy:l,ddx:s,ddy:a,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),s=n;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(t,e),r===s)break;s&&(n=s)}return n}(n.clientX,n.clientY)}})}function Bn(t,e,n){let s=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=In(n||e);!i||wn[i.localName]&&i.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=an&&r<=an||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=In(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),s=t.pageX,r=t.pageY;return!(s>=n.left&&s<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||Fn(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Dn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){On(this.info)},mousedown:function(t){if(!Sn(t))return;let e=In(t),n=this;En(this.info,(function(t){Sn(t)||(zn("up",e,t),On(n.info))}),(function(t){Sn(t)&&zn("up",e,t),On(n.info)})),zn("down",e,t)},touchstart:function(t){zn("down",In(t),t.changedTouches[0],t)},touchend:function(t){zn("up",In(t),t.changedTouches[0],t)}}),Dn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,On(this.info)},mousedown:function(t){if(!Sn(t))return;let e=In(t),n=this,s=function(t){let s=t.clientX,r=t.clientY;jn(n.info,s,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&Hn("tap"),n.info.addMove({x:s,y:r}),Sn(t)||(n.info.state="end",On(n.info)),e&&$n(n.info,e,t),n.info.started=!0)};En(this.info,s,(function(t){n.info.started&&s(t),On(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=In(t),n=t.changedTouches[0],s=n.clientX,r=n.clientY;jn(this.info,s,r)&&("start"===this.info.state&&Hn("tap"),this.info.addMove({x:s,y:r}),$n(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=In(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),$n(this.info,e,n))}}),Dn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Sn(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Sn(t)&&Bn(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Bn(this.info,t.changedTouches[0],t)}});const qn=bt(t=>{return class extends t{_addEventListenerToNode(t,e,n){Mn(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Rn(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}}),Yn=/:host\(:dir\((ltr|rtl)\)\)/g,Jn=':host([dir="$1"])',Un=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Vn=':host([dir="$2"]) $1',Xn=/:dir\((?:ltr|rtl)\)/,Wn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Gn=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Zn=null,Kn="";function Qn(){Kn=document.documentElement.getAttribute("dir")}function ts(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Kn)}}function es(){Qn(),Kn=document.documentElement.getAttribute("dir");for(let t=0;t<Gn.length;t++)ts(Gn[t])}const ns=bt(t=>{Wn||Zn||(Qn(),Zn=new MutationObserver(es),Zn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=ae(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!Wn&&Xn.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Yn,Jn),e=e.replace(Un,Vn),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Zn&&Zn.takeRecords().length&&es(),Gn.push(this),ts(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=Gn.indexOf(this);t>-1&&Gn.splice(t,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ss=!1,rs=[],is=[];function os(){ss=!0,requestAnimationFrame((function(){ss=!1,function(t){for(;t.length;)ls(t.shift())}(rs),setTimeout((function(){!function(t){for(let e=0,n=t.length;e<n;e++)ls(t.shift())}(is)}))}))}function ls(t){const e=t[0],n=t[1],s=t[2];try{n.apply(e,s)}catch(t){setTimeout(()=>{throw t})}}function as(t,e,n){ss||os(),is.push([t,e,n])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function hs(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function cs(t,e,n){return{index:t,removed:e,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?hs():window.addEventListener("DOMContentLoaded",hs);const ds=0,us=1,ps=2,_s=3;function fs(t,e,n,s,r,i){let o,l=0,a=0,h=Math.min(n-e,i-r);if(0==e&&0==r&&(l=function(t,e,n){for(let s=0;s<n;s++)if(!ys(t[s],e[s]))return s;return n}(t,s,h)),n==t.length&&i==s.length&&(a=function(t,e,n){let s=t.length,r=e.length,i=0;for(;i<n&&ys(t[--s],e[--r]);)i++;return i}(t,s,h-l)),r+=l,i-=a,(n-=a)-(e+=l)==0&&i-r==0)return[];if(e==n){for(o=cs(e,[],0);r<i;)o.removed.push(s[r++]);return[o]}if(r==i)return[cs(e,[],n-e)];let c=function(t){let e=t.length-1,n=t[0].length-1,s=t[e][n],r=[];for(;e>0||n>0;){if(0==e){r.push(ps),n--;continue}if(0==n){r.push(_s),e--;continue}let i,o=t[e-1][n-1],l=t[e-1][n],a=t[e][n-1];i=l<a?l<o?l:o:a<o?a:o,i==o?(o==s?r.push(ds):(r.push(us),s=o),e--,n--):i==l?(r.push(_s),e--,s=l):(r.push(ps),n--,s=a)}return r.reverse(),r}(function(t,e,n,s,r,i){let o=i-r+1,l=n-e+1,a=new Array(o);for(let t=0;t<o;t++)a[t]=new Array(l),a[t][0]=t;for(let t=0;t<l;t++)a[0][t]=t;for(let n=1;n<o;n++)for(let i=1;i<l;i++)if(ys(t[e+i-1],s[r+n-1]))a[n][i]=a[n-1][i-1];else{let t=a[n-1][i]+1,e=a[n][i-1]+1;a[n][i]=t<e?t:e}return a}(t,e,n,s,r,i));o=void 0;let d=[],u=e,p=r;for(let t=0;t<c.length;t++)switch(c[t]){case ds:o&&(d.push(o),o=void 0),u++,p++;break;case us:o||(o=cs(u,[],0)),o.addedCount++,u++,o.removed.push(s[p]),p++;break;case ps:o||(o=cs(u,[],0)),o.addedCount++,u++;break;case _s:o||(o=cs(u,[],0)),o.removed.push(s[p]),p++}return o&&d.push(o),d}function ms(t,e){return fs(t,0,t.length,e,0,e.length)}function ys(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function gs(t){return"slot"===t.localName}let bs=class{static getFlattenedNodes(t){const e=Dt(t);return gs(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>gs(t)?Dt(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){gs(this._target)?this._listenSlots([this._target]):Dt(this._target).children&&(this._listenSlots(Dt(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){gs(this._target)?this._unlistenSlots([this._target]):Dt(this._target).children&&(this._unlistenSlots(Dt(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,se.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=ms(e,this._effectiveNodes);for(let e,s=0;s<n.length&&(e=n[s]);s++)for(let n,s=0;s<e.removed.length&&(n=e.removed[s]);s++)t.removedNodes.push(n);for(let s,r=0;r<n.length&&(s=n[r]);r++)for(let n=s.index;n<s.index+s.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let s=!1;return(t.addedNodes.length||t.removedNodes.length)&&(s=!0,this.callback.call(this._target,t)),s}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];gs(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];gs(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ws=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=nn()}while(t||e)},Ps=Element.prototype,Cs=Ps.matches||Ps.matchesSelector||Ps.mozMatchesSelector||Ps.msMatchesSelector||Ps.oMatchesSelector||Ps.webkitMatchesSelector,vs=function(t,e){return Cs.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ss{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new bs(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Dt(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Dt(e).parentNode||Dt(e).host;return e===this.node}getOwnerRoot(){return Dt(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Dt(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Dt(this.node).assignedSlot;for(;e;)t.push(e),e=Dt(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Dt(n).importNode(t,e)}getEffectiveChildNodes(){return bs.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let s,r=0,i=e.length;r<i&&(s=e[r]);r++)s.nodeType===Node.ELEMENT_NODE&&vs(s,t)&&n.push(s);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function xs(t,e){for(let n=0;n<e.length;n++){let s=e[n];Object.defineProperty(t,s,{get:function(){return this.node[s]},configurable:!0})}}class Es{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Ss.prototype.cloneNode,Ss.prototype.appendChild,Ss.prototype.insertBefore,Ss.prototype.removeChild,Ss.prototype.replaceChild,Ss.prototype.setAttribute,Ss.prototype.removeAttribute,Ss.prototype.querySelector,Ss.prototype.querySelectorAll,Ss.prototype.parentNode,Ss.prototype.firstChild,Ss.prototype.lastChild,Ss.prototype.nextSibling,Ss.prototype.previousSibling,Ss.prototype.firstElementChild,Ss.prototype.lastElementChild,Ss.prototype.nextElementSibling,Ss.prototype.previousElementSibling,Ss.prototype.childNodes,Ss.prototype.children,Ss.prototype.classList,Ss.prototype.textContent,Ss.prototype.innerHTML;let Os=Ss;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Ss.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=Ss.prototype[e])}),xs(t.prototype,["classList"]),Os=t,Object.defineProperties(Es.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&Ts(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const s=n[t];if(Ts(s).getOwnerRoot()===e)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let s=e[n];t[s]=function(){return this.node[s].apply(this.node,arguments)}}}(Ss.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),xs(Ss.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let s=e[n];Object.defineProperty(t,s,{get:function(){return this.node[s]},set:function(t){this.node[s]=t},configurable:!0})}}(Ss.prototype,["textContent","innerHTML","className"]);const Ts=function(t){if((t=t||document)instanceof Os)return t;if(t instanceof Es)return t;let e=t.__domApi;return e||(e=t instanceof Event?new Es(t):new Os(t),t.__domApi=e),e},Ns=window.ShadyDOM,As=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Is(t,e){return Dt(t).getRootNode()===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ks=window.ShadyCSS;const Ms=bt(t=>{const e=ns(qn(Ke(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,s){e!==n&&(super.attributeChangedCallback(t,e,n,s),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let s,r=0;r<n.length&&(s=n[r]);r++){let n=Object.getOwnPropertyDescriptor(e,s);n&&Object.defineProperty(t,s,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});s.detail=e;let r=n.node||this;return Dt(r).dispatchEvent(s),s}listen(t,e,n){t=t||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),r=s.get(t);r||(r={},s.set(t,r));let i=e+n;r[i]||(r[i]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let s=this.__boundListeners&&this.__boundListeners.get(t),r=e+n,i=s&&s[r];i&&(this._removeEventListenerFromNode(t,e,i),s[r]=null)}setScrollDirection(t,e){Ln(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Dt(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Ts(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ts(this).getEffectiveChildNodes()}queryDistributedElements(t){return Ts(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,s=0;n=t[s];s++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Ts(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Dt(this).contains(t)&&Dt(this).getRootNode()===Dt(t).getRootNode()}isLocalDescendant(t){return this.root===Dt(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!Ns||!As)return null;if(!Ns.handlesDynamicScoping)return null;const n=As.ScopingShim;if(!n)return null;const s=n.scopeForNode(t),r=Dt(t).getRootNode(),i=t=>{if(!Is(t,r))return;const e=Array.from(Ns.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!Is(i,r))continue;const o=n.currentScopeForNode(i);o!==s&&(""!==o&&n.unscopeNode(i,o),n.scopeNode(i,s))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return ks.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=Qe.debounce(this._debouncers[t],n>0?ee.after(n):se,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ee.run(t.bind(this),e):~se.run(t.bind(this))}cancelAsync(t){t<0?se.cancel(~t):ee.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return vs(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Dt(n).setAttribute(t,""),!0):(Dt(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,s){s=s||this,this.transform("translate3d("+t+","+e+","+n+")",s)}arrayDelete(t,e){let n;if(Array.isArray(t)){if(n=t.indexOf(e),n>=0)return t.splice(n,1)}else{if(n=qt(this,t).indexOf(e),n>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return s.prototype.is="",s}),Rs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Ds={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Ls=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Ds);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fs(t,e,n,s){!function(t,e,n){const s=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let i=0;i<r.length;i++){let o=r[i];if(!(o in n))if(s)e[o]=t[o];else{let n=Object.getOwnPropertyDescriptor(t,o);n&&(n.configurable=!0,Object.defineProperty(e,o,n))}}}(e,t,s);for(let t in Rs)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function Hs(t,e){for(const n in e){const s=t[n],r=e[n];t[n]=!("value"in r)&&s&&"value"in s?Object.assign({value:s.value},r):r}}function zs(t,e,n){let s;const r={};class i extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let t,e=0;e<s.length;e++)t=s[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(s)for(let t=0;t<s.length;t++)Hs(e,s[t].properties);return Hs(e,t.properties),e}static get observers(){let e=[];if(s)for(let t,n=0;n<s.length;n++)t=s[n],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=r.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=i.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),ft&&o(t);const e=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=r.registered,n)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=r.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=r.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=r.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=r.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=r.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let s=r.attributeChanged;if(s)for(let r=0;r<s.length;r++)s[r].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;s=function t(e,n,s){n=n||[];for(let r=e.length-1;r>=0;r--){let i=e[r];i?Array.isArray(i)?t(i,n):n.indexOf(i)<0&&(!s||s.indexOf(i)<0)&&n.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),i.prototype.behaviors=t?t.concat(n):s}const o=e=>{s&&function(t,e,n){for(let s=0;s<e.length;s++)Fs(t,e[s],n,Ls)}(e,s,r),Fs(e,t,r,Ds)};return ft||o(i.prototype),i.generatedFrom=t,i}const js=function(t){let e;return e="function"==typeof t?t:js.Class(t),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function $s(t,e,n,s,r){let i;r&&(i="object"==typeof n&&null!==n,i&&(s=t.__dataTemp[e]));let o=s!==n&&(s==s||n==n);return i&&o&&(t.__dataTemp[e]=n),o}js.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Ms(HTMLElement)):Ms(HTMLElement);return n=zs(t,n,t.behaviors),n.is=n.prototype.is=t.is,n};const Bs=bt(t=>{return class extends t{_shouldPropertyChange(t,e,n){return $s(this,t,e,n,!0)}}}),qs=bt(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return $s(this,t,e,n,this.mutableData)}}});Bs._mutablePropertyChange=$s;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ys=null;function Js(){return Ys}Js.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Js,writable:!0}});const Us=Ve(Js),Vs=Bs(Us);const Xs=Ve(class{});class Ws extends Xs{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let s=e[n];if(Boolean(t)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)t?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(t)s.__polymerReplaced__=document.createComment("hidden-slot"),Dt(Dt(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const t=s.__polymerReplaced__;t&&Dt(Dt(t).parentNode).replaceChild(s,t)}else s.style&&(t?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=t,s._showHideChildren&&s._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Ws.prototype.__dataHost,Ws.prototype.__templatizeOptions,Ws.prototype._methodHost,Ws.prototype.__templatizeOwner,Ws.prototype.__hostProps;const Gs=Bs(Ws);function Zs(t){let e=t.__dataHost;return e&&e._methodHost||e}function Ks(t,e,n){let s=n.mutableData?Gs:Ws;nr.mixin&&(s=nr.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,s){let r=n.hostProps||{};for(let e in s.instanceProps){delete r[e];let n=s.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:er(e,n)})}if(s.forwardHostProp&&e.__dataHost)for(let e in r)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(r,t,e,n),r}function Qs(t,e,n){let s=n.forwardHostProp;if(s&&e.hasHostProps){let r=e.templatizeTemplateClass;if(!r){let t=n.mutableData?Vs:Us;r=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:tr(t,s)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){Ys=t,Object.setPrototypeOf(t,e.prototype),new e,Ys=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function tr(t,e){return function(t,n,s){e.call(t.__templatizeOwner,n.substring("_host_".length),s[n])}}function er(t,e){return function(t,n,s){e.call(t.__templatizeOwner,t,n,s[n])}}function nr(t,e,n){if(pt&&!Zs(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:Ws)._parseTemplate(t),r=s.templatizeInstanceClass;r||(r=Ks(t,s,n),s.templatizeInstanceClass=r),Qs(t,s,n);let i=class extends r{};return i.prototype._methodHost=Zs(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=s.hostProps,i=i,i}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let sr=!1;function rr(){if(ft&&!ht){if(!sr){sr=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ir=qn(qs(Ve(HTMLElement)));customElements.define("dom-bind",class extends ir{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),pt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,s){this.mutableData=!0}connectedCallback(){rr()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Dt(Dt(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class or{constructor(t){this.value=t.toString()}toString(){return this.value}}function lr(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof or)return function(t){if(t instanceof or)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const ar=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,s)=>e+lr(n)+t[s+1],t[0]),n},hr=Ke(HTMLElement),cr=qs(hr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class dr extends cr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),rr()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Dt(Dt(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=nr(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let s,r=0;r<n.length&&(s=n[r]);r++)s.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if((s=this.as)===(r=e)||Ht(s,r)||zt(s,r)){let s=t[this.itemsIndexAs];e==this.as&&(this.items[s]=n);let r=jt(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,e);this.notifyPath(r,n)}var s,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=Qe.debounce(this.__renderDebouncer,e>0?ee.after(e):se,t.bind(this)),en(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ws()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,s)=>this.__filterFn(t[e],n,s))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let s=0;const r=Math.min(e.length,this.__limit);for(;s<r;s++){let r=this.__instances[s],i=e[s],o=t[i];n[i]=s,r?(r._setPendingProperty(this.as,o),r._setPendingProperty(this.indexAs,s),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):this.__insertInstance(o,s,i)}for(let t=this.__instances.length-1;t>=s;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Dt(e.root);for(let t=0;t<e.children.length;t++){let s=e.children[t];n.appendChild(s)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let s={};return s[this.as]=t,s[this.indexAs]=e,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(t,e,n){let s=this.__pool.pop();s?(s._setPendingProperty(this.as,t),s._setPendingProperty(this.indexAs,e),s._setPendingProperty(this.itemsIndexAs,n),s._flushProperties()):s=this.__stampInstance(t,e,n);let r=this.__instances[e+1],i=r?r.children[0]:this;return Dt(Dt(this).parentNode).insertBefore(s.root,i),this.__instances[e]=s,s}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let t=s<0?"":n.substring(s+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[r],o=this.__instances[i];if(o){let n=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(n,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Dt(e).parentNode;return null}(this.template,t)}}customElements.define(dr.is,dr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ur extends hr{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Qe.debounce(this.__renderDebouncer,se,()=>this.__render()),en(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Dt(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Dt(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),rr()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){ws()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Dt(this).parentNode;if(t){if(!this.__ctor){let t=Dt(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Dt(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=nr(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ft(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Dt(this).previousSibling!==e[e.length-1])for(let n,s=0;s<e.length&&(n=e[s]);s++)Dt(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Dt(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Dt(t[0]).parentNode;if(e){e=Dt(e);for(let n,s=0;s<t.length&&(n=t[s]);s++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(ur.is,ur);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pr=bt(t=>{let e=Ke(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],s=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),s){let t=ms(n,s);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let s=t[n];e.forEach((t,n)=>{t<s.index||(t>=s.index+s.removed.length?e.set(n,t+s.addedCount-s.removed.length):e.set(n,-1))});for(let t=0;t<s.addedCount;t++){let n=s.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,s)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(s)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,s)=>{e==t++&&this.deselect(s)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(hr);class _r extends pr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(_r.is,_r);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fr=new Q;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){fr.processStyles(),N(t,e)},styleElement(t){fr.processStyles()},styleDocument(t){fr.processStyles(),N(document.body,t)},getComputedStyleValue:(t,e)=>A(t,e),flushCustomStyles(){},nativeCss:i,nativeShadow:t,cssBuild:n,disableRuntime:r}),window.ShadyCSS.CustomStyleInterface=fr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mr="include",yr=window.ShadyCSS.CustomStyleInterface;class gr extends HTMLElement{constructor(){super(),this._style=null,yr.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(mr);return e&&(t.removeAttribute(mr),t.textContent=function(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=Rt(e[t]);return n}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",gr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const br=Ms(HTMLElement).prototype,wr=ar`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/wr.setAttribute("style","display: none;"),document.head.appendChild(wr.content);var Pr=document.createElement("style");Pr.textContent="[hidden] { display: none !important; }",document.head.appendChild(Pr);export{br as B,Qe as D,js as P,as as a,ne as b,Xt as c,Ts as d,en as e,ar as h,ht as u};
