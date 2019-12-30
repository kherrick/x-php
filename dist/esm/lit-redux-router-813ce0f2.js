import{d as t,N as e,i as s,p as o,a as i,L as n,h as r}from"./lit-element-3fe2c8b5.js";import"./lazy-reducer-enhancer-e37d5640.js";import{c as a}from"./connect-mixin-144a42a2.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const c=new WeakMap,p=t(t=>o=>{if(!(o instanceof e))throw new Error("unsafeHTML can only be used in text bindings");const i=c.get(o);if(void 0!==i&&s(t)&&t===i.value&&o.value===i.fragment)return;const n=document.createElement("template");n.innerHTML=t;const r=document.importNode(n.content,!0);o.setValue(r),c.set(o,{value:t,fragment:r})});const l=(t,e)=>{const{pattern:s,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,o,i,n,r=[],a="",c=t.split("/");for(c[0]||c.shift();i=c.shift();)"*"===(s=i[0])?(r.push("wild"),a+="/(.*)"):":"===s?(o=i.indexOf("?",1),n=i.indexOf(".",1),r.push(i.substring(1,~o?o:~n?n:i.length)),a+=~o&&!~n?"(?:/([^/]+?))?":"/([^/]+?)",~n&&(a+=(~o?"?":"")+"\\"+i.substring(n))):a+="/"+i;return{keys:r,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t),i=e.replace(/(\?|#).*/,""),n=s.exec(i),r=s.test(i);return{active:r,params:r?o.reduce((t,e,s)=>Object.assign(Object.assign({},t),{[e]:n&&n[s+1]||""}),{}):{}}};var h;!function(t){t.ADD_ROUTE="ADD_ROUTE",t.NAVIGATE="NAVIGATE",t.SET_ACTIVE_ROUTE="SET_ACTIVE_ROUTE"}(h||(h={}));const u=t=>((t=>{window.history.pushState({},"",t)})(t),{type:h.NAVIGATE,path:t}),d=({router:{routes:t}},e)=>t&&e&&t[e]||{},v=(t,e)=>e?!!d(t,e).active:(({router:{routes:t}})=>Object.keys(t).reduce((e,s)=>e&&!t[s].active,!0))(t);var g=function(t,e,s,o){var i,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r};let f=!1;var y=t=>{let e=class extends(a(t)(n)){constructor(){super(...arguments),this.active=!1,this.params={},this.isResolving=!1,this.scrollOpt={},this.scrollDisable=!1}firstUpdated(){var e;f||(e=({pathname:e,search:s,hash:o})=>{const i=window.decodeURIComponent(e+s+o);t.dispatch((t=>({type:h.SET_ACTIVE_ROUTE,path:t}))(i))},document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const s=t.composedPath().filter(t=>"A"===t.tagName)[0];if(!s||s.target||s.hasAttribute("download")||"external"===s.getAttribute("rel"))return;const o=s.href;if(!o||-1!==o.indexOf("mailto:"))return;const i=window.location,n=i.origin||i.protocol+"//"+i.host;0===o.indexOf(n)&&(t.preventDefault(),o!==i.href&&(window.history.pushState({},"",o),e(i,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null),f=!0);let s=this.parentElement,{path:o}=this;for(;s;){const t=s.closest("lit-route");t&&(o=`${t.path}${o}`),s=t&&t.parentElement}Boolean(this.querySelector("lit-route"))&&(o+=".*"),this.path=o,this.path&&t.dispatch((t=>({type:h.ADD_ROUTE,path:t}))(this.path))}stateChanged(t){this.active=v(t,this.path),this.params=((t,e)=>d(t,e).params||{})(t,this.path),this.active&&this.resolve&&(this.isResolving=!0,this.resolve().then(()=>{this.isResolving=!1}).catch(()=>{this.isResolving=!1})),this.active&&!this.scrollDisable&&this.scrollOpt&&(0!==Object.keys(this.scrollOpt).length?this.scrollIntoView(Object.assign({},this.scrollOpt)):window.scrollTo(0,0))}getTemplate(t,e){const s=t.replace(/[^A-Za-z0-9-]/,"");let o="";return e&&(o=Object.keys(e).map(t=>` ${t}="${this.params[t]}"`).join("")),r`${p(`<${s}${o}></${s}>`)}`}render(){return this.active?this.resolve&&this.isResolving?this.loading?this.getTemplate(this.loading):r``:this.component?this.getTemplate(this.component,this.params):r`<slot></slot>`:r``}};g([o({type:Boolean,reflect:!0})],e.prototype,"active",void 0),g([o({type:String})],e.prototype,"component",void 0),g([o({type:Object})],e.prototype,"params",void 0),g([o({type:String})],e.prototype,"path",void 0),g([o({type:Boolean})],e.prototype,"isResolving",void 0),g([o({type:Function})],e.prototype,"resolve",void 0),g([o({type:String})],e.prototype,"loading",void 0),g([o({type:Object})],e.prototype,"scrollOpt",void 0),g([o({type:Boolean})],e.prototype,"scrollDisable",void 0),e=g([i("lit-route")],e)};const m={activeRoute:"/",routes:{}},O=(t=m,{type:e="",path:s=""}={})=>{switch(e){case h.NAVIGATE:case h.SET_ACTIVE_ROUTE:return Object.assign(Object.assign({},t),{activeRoute:s,routes:Object.keys(t.routes).reduce((t,e)=>Object.assign(Object.assign({},t),{[e]:l(e,s)}),{})});case h.ADD_ROUTE:return Object.assign(Object.assign({},t),{routes:Object.assign(Object.assign({},t.routes),{[s]:l(s,t.activeRoute)})});default:return t}},b=t=>{t.addReducers({router:O}),y(t)};export{b as c,u as n};