import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../../utilities'

import PHP from './php-7.4.1-wasm/php'

export class XPHP extends LitElement {
  static get styles() {
    return css`
      iframe {
        border: 0;
        height: 100vw;
        width: 100%;
      }
    `;
  }

  firstUpdated() {
    const codeSlot = this.shadowRoot.getElementById('code')

    codeSlot.addEventListener('slotchange', event => {
      event.target.assignedNodes().forEach(node => {
        if (node.nodeName === 'SCRIPT' && node.type === 'text/php') {

          let phpModule = null

          const outputElement = this.shadowRoot.getElementById('output')

          const outputArea = outputElement.contentWindow.document

          outputArea.open()

          const init = () => {
            let code

            if (node.innerText) {
              code = node.innerText
            } else {
              code = this._defaultCode
            }

            code = code.replace(/^\s*<\?php/, '')
            code = code + '\necho PHP_EOL;'

            let ret = phpModule.ccall('pib_eval', 'number', ['string'], [code])

            if (ret != 0) {
              outputArea.write('Error, please check your code')
            }

            outputArea.close()

            outputElement.contentDocument.body.style.margin = 0
            outputElement.contentDocument.body.style.padding = 0
          }

          const print = text => {
            outputArea.write(text)
          }

          const phpModuleOptions = {
            postRun: [init],
            print,
            printErr: print,
          }

          phpModule = PHP(phpModuleOptions)

        }
      })
    })
  }

  render() {
    return html`
      <iframe id="output"></iframe>
      <slot id="code"></slot>
    `
  }
}

defineCustomElement('x-php', XPHP)
