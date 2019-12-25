export const X_PHP_DRAWER_TOGGLE = 'x-php-drawer-toggle'

export const XPHPDrawerToggle = (close = false) =>
  new CustomEvent(X_PHP_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true,
    detail: close
  })
