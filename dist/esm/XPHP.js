import{a as e}from"./_rollupPluginBabelHelpers-ed8cbb08.js";import{L as t,c as r,h as n}from"./lit-element-3fe2c8b5.js";import{defineCustomElement as i}from"./utilities.js";import o from"./php.js";function a(){var t=e(['\n      <iframe id="output"></iframe>\n      <slot id="code"></slot>\n    ']);return a=function(){return t},t}function p(){var t=e(["\n      iframe {\n        border: var(--x-php-iframe-border, 0);\n        height: var(--x-php-iframe-height, 100vw);\n        margin: var(--x-php-iframe-margin, 0);\n        padding: var(--x-php-iframe-padding, 0);\n        width: var(--x-php-iframe-width, 100%);\n        overflow: hidden;\n      }\n    "]);return p=function(){return t},t}class s extends t{static get styles(){return r(p())}firstUpdated(){this._iframe=this.shadowRoot.querySelector("iframe"),this.shadowRoot.getElementById("code").addEventListener("slotchange",e=>{e.target.assignedNodes().forEach(e=>{if("SCRIPT"===e.nodeName&&("text/php"===e.type||"text/x-php"===e.type||"application/php"===e.type||"application/x-php"===e.type)){var t=null,r=this.shadowRoot.getElementById("output"),n=r.contentWindow.document;n.open();var i=e=>{n.write(e)},a={postRun:[()=>{var i;i=(i=e.innerText?e.innerText:this._defaultCode).replace(/^\s*<\?php/,""),i+="\necho PHP_EOL;",0!=t.ccall("pib_eval","number",["string"],[i])&&n.write("Error, please check your code"),n.close(),r.contentDocument.body.style.margin=0,r.contentDocument.body.style.padding=0}],print:i,printErr:i};t=o(a)}})})}render(){return n(a())}}i("x-php",s);export{s as XPHP};