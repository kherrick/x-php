export const createReducer = (initialState, handlers) => (state = initialState, action) =>
  handlers.hasOwnProperty(action.type) === true ? handlers[action.type](state, action) : state

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('x-php-app-store-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('x-php-app-store-state', serializedState)
  } catch (err) {
    // Ignore write errors...
  }
}

export const defineCustomElement = (tagName, element) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, element)
  }
}

export const getBasePathWithTrailingSlash = () =>
  `${new URL(document.querySelector('base').href).pathname}/`.replace(/\/+\//g, '/')
