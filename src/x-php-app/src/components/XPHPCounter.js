import { html, LitElement } from 'lit-element'
import { defineCustomElement } from '../utilities'

import '../components/DecrementButton'
import '../components/IncrementButton'
import '../containers/XPHPStore'

export class XPHPCounter extends LitElement {
  render() {
    return html`
      <div buttons>
        <decrement-button>
          decrement
        </decrement-button>
        <increment-button>
          increment
        </increment-button>
      </div>
      <div count>
        <x-php-store>
          The count:
        </x-php-store>
      </div>
    `
  }
}

defineCustomElement('x-php-counter', XPHPCounter)
