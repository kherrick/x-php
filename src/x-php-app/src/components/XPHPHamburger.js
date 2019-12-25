import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-icon-button'
import '@polymer/iron-icons'

import { XPHPDrawerToggle } from '../events/events'

const XPHPHamburger = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--x-php-hamburger-color, #eee);
        width: 1.5rem;
      }

      paper-icon-button {
        pointer-events: all;
        position: relative;
        height: 3rem;
        width: 3rem;
      }

      svg {
        height: 1.5rem;
        pointer-events: none;
        width: 1.5rem;
      }
    `
  }

  _handleHamburgerClick(event) {
    this.shadowRoot.dispatchEvent(XPHPDrawerToggle(event))
  }

  render() {
    return html`
      <paper-icon-button
        @click="${event => this._handleHamburgerClick(event)}"
        aria-label="Menu"
        icon="menu"
      ></paper-icon-button>
    `
  }
}

if (!customElements.get('x-php-hamburger')) {
  customElements.define('x-php-hamburger', XPHPHamburger)
}

export default XPHPHamburger
