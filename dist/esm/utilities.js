var e=(e,t)=>(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return!0===t.hasOwnProperty(a.type)?t[a.type](r,a):r}),t=()=>{try{var e=localStorage.getItem("x-php-app-store-state");if(null===e)return;return JSON.parse(e)}catch(e){return}},r=e=>{try{var t=JSON.stringify(e);localStorage.setItem("x-php-app-store-state",t)}catch(e){}},a=(e,t)=>{customElements.get(e)||customElements.define(e,t)},n=()=>"".concat(new URL(document.querySelector("base").href).pathname,"/").replace(/\/+\//g,"/");export{e as createReducer,a as defineCustomElement,n as getBasePathWithTrailingSlash,t as loadState,r as saveState};
