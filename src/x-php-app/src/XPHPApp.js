import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XPHPBranding'
import './components/XPHPCounter'
import './components/XPHPDrawer'
import './components/XPHPHamburger'

import { getBasePathWithTrailingSlash } from './utilities'

import { X_PHP_DRAWER_TOGGLE } from './events/events'

import { store } from './store/configureStore'
import { connectRouter } from 'lit-redux-router'
connectRouter(store)

export class XPHPApp extends LitElement {
  _path = getBasePathWithTrailingSlash()

  static get styles() {
    return css`
      app-header {
        background-color: var(--primary-background-color, #111);
        color: var(--primary-foreground-color, #eee);
      }

      app-toolbar {
        background-color: var(--x-php-app-toolbar-background-color, #111);
        font-size: 1.5rem;
      }

      app-drawer {
        --app-drawer-scrim-background: var(--drawer-scrim-background, rgba(0, 0, 0, 0.8));
      }

      x-php-hamburger {
        pointer-events: unset;
      }
    `
  }

  static get properties() {
    return {
      siteTitle: {
        reflect: false,
        type: String
      },
      siteUrl: {
        reflect: false,
        type: String
      }
    }
  }

  _handleDrawerToggle(close = false) {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')

    if (appDrawer.getAttribute('opened') === '' || close === true) {
      appDrawer.removeAttribute('opened')

      return
    }

    appDrawer.setAttribute('opened', '')
  }

  firstUpdated() {
    this.addEventListener(X_PHP_DRAWER_TOGGLE, ({ detail }) => {
      this._handleDrawerToggle(detail)
    })
  }

  render() {
    return html`
      <app-header reveals>
        <app-toolbar>
          <x-php-hamburger>Menu</x-php-hamburger>
          <x-php-branding siteTitle="${this.siteTitle}" siteUrl="${this.siteUrl}"></x-php-branding>
        </app-toolbar>
      </app-header>

      <app-drawer swipe-open>
        <x-php-drawer></x-php-drawer>
      </app-drawer>

      <div class="app-content">
        <lit-route
          .resolve="${() => import('./components/XPHPScript.js')}"
          component="x-php-script"
          path="${this._path}"
        ></lit-route>
        <lit-route
          .resolve="${() => import('./components/XPHPScript.js')}"
          component="x-php-script"
          path="${this._path}index.html"
        ></lit-route>

        <lit-route component="x-php-counter" path="${this._path}counter"></lit-route>
        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
