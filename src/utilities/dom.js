
let _isSSR = false

/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
export function setSSR (isEnabled) {
  _isSSR = isEnabled
}

export function getDocument (rootElement) {
  if (_isSSR || typeof document === 'undefined') {
    return undefined
  } else {
    return (rootElement && rootElement.ownerDocument)
      ? rootElement.ownerDocument
      : document
  }
}
