import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import './XPHP/XPHP'

export class XPHPScript extends LitElement {
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
    `
  }
}


defineCustomElement('x-php-script', XPHPScript)
