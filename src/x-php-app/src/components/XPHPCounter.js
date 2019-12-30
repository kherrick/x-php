import { css, html, LitElement } from 'lit-element'
import { defineCustomElement } from '../utilities'

import '../components/DecrementButton'
import '../components/IncrementButton'
import '../containers/XPHPStore'

export class XPHPCounter extends LitElement {
  static get styles() {
    return css`
      :host {

      }

      .container {
        margin: auto;
        padding: 2rem;
      }

      .count {
        margin-top: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div>
          <decrement-button>
            decrement
          </decrement-button>
          <increment-button>
            increment
          </increment-button>
        </div>
        <div class="count">
          <x-php-store>
            The count:
          </x-php-store>
        </div>
      </div>
    `
  }
}

defineCustomElement('x-php-counter', XPHPCounter)
