import{a as t}from"./_rollupPluginBabelHelpers-ed8cbb08.js";import{L as n,c as e,h as p}from"./lit-element-3fe2c8b5.js";import{defineCustomElement as s}from"./utilities.js";import"./php.js";import"./XPHP.js";function r(){var n=t(['\n      <x-php>\n        <script type="text/php">\n          <?php\n            $message = \'Hello Wasm World\';\n            echo "<div style=\'background-color: #ccc;\'>";\n            echo "<h1 style=\'text-align: center;\'>$message</h1>";\n            echo "</div>";\n        <\/script>\n      </x-php>\n      <p class="example">\n        Give <a href="https://jsbin.com/yugefiyubo/edit">x-php</a> a try: <a href="https://jsbin.com/yugefiyubo/edit">https://jsbin.com/yugefiyubo/edit</a><br>\n\n        <code>\n          &lt;html&gt;&lt;body&gt;<br>\n          &lt;x-php&gt;<br>\n          &nbsp;&nbsp;&lt;script type="text/php"&gt;<br>\n          &nbsp;&nbsp;&nbsp;&nbsp;&lt;?php<br>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(\'.\'));<br>\n\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach ($it as $name =&gt; $entry) {<br>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "$name &lt;br/&gt;";<br>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n          &nbsp;&nbsp;&lt;/script&gt;<br>\n          &lt;/x-php&gt;<br>\n          &lt;script&gt;window.__XPHP_REMOTE_PACKAGE_BASE = \'https://kherrick.github.io/x-php/assets/\'&lt;/script&gt;<br>\n          &lt;script type="module" src="https://kherrick.github.io/x-php/dist/esm/XPHP.js"&gt;&lt;/script&gt;<br>\n          &lt;/body&gt;&lt;/html&gt;\n        </code>\n      </p>\n    ']);return r=function(){return n},n}function b(){var n=t(["\n      .example {\n        margin: auto;\n        padding: 2rem;\n      }\n\n      .example > code {\n        display: block;\n        margin-left: 1rem;\n      }\n\n      a {\n        color: var(--x-php-a-color);\n      }\n    "]);return b=function(){return n},n}class i extends n{static get styles(){return e(b())}firstUpdated(){document.documentElement.style.setProperty("--x-php-iframe-height","3.75rem");var t=(n,e)=>{n()?e():setTimeout(t.bind(null,n,e),1e3)},n=this.shadowRoot.querySelector("x-php");t(()=>n._iframe,()=>{n._iframe.setAttribute("scrolling","no")})}render(){return p(r())}}s("x-php-script",i);export{i as XPHPScript};