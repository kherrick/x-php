import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import './XPHP/XPHP'

export class XPHPScript extends LitElement {
  static get styles() {
    return css`
      .example {
        margin: auto;
        padding: 2rem;
      }

      .example > code {
        display: block;
        margin-left: 1rem;
      }

      a {
        color: var(--x-php-a-color);
      }
    `;
  }

  firstUpdated() {
    document.documentElement.style.setProperty('--x-php-iframe-height', '3.75rem')

    const waitFor = (condition, callback) => {
      if(!condition()) {
        setTimeout(waitFor.bind(null, condition, callback), 1000)
      } else {
        callback()
      }
    }

    const xPHP = this.shadowRoot.querySelector('x-php')

    waitFor(() => xPHP._iframe, () => {
      xPHP._iframe.setAttribute('scrolling', 'no')
    })
  }

  render() {
    return html`
      <x-php>
        <script type="text/php">
          <?php
            $message = 'Hello Wasm World';
            echo "<div style='background-color: #ccc;'>";
            echo "<h1 style='text-align: center;'>$message</h1>";
            echo "</div>";
        </script>
      </x-php>
      <p class="example">
        Give <a href="https://jsbin.com/yugefiyubo/edit">x-php</a> a try: <a href="https://jsbin.com/yugefiyubo/edit">https://jsbin.com/yugefiyubo/edit</a><br>

        <code>
          &lt;html&gt;&lt;body&gt;<br>
          &lt;x-php&gt;<br>
          &nbsp;&nbsp;&lt;script type="text/php"&gt;<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;?php<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('.'));<br>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach ($it as $name =&gt; $entry) {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo "$name &lt;br/&gt;";<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
          &nbsp;&nbsp;&lt;/script&gt;<br>
          &lt;/x-php&gt;<br>
          &lt;script&gt;window.__XPHP_REMOTE_PACKAGE_BASE = 'https://kherrick.github.io/x-php/assets/'&lt;/script&gt;<br>
          &lt;script type="module" src="https://kherrick.github.io/x-php/dist/esm/XPHP.js"&gt;&lt;/script&gt;<br>
          &lt;/body&gt;&lt;/html&gt;
        </code>
      </p>
    `
  }
}


defineCustomElement('x-php-script', XPHPScript)
