const _layersByHostId = {}

let _defaultHostSelector = null

/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
export function registerLayer (hostId, layer) {
  if (!_layersByHostId[hostId]) {
    _layersByHostId[hostId] = []
  }

  _layersByHostId[hostId].push(layer)
}

/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
export function unregisterLayer (hostId, layer) {
  if (_layersByHostId[hostId]) {
    const idx = _layersByHostId[hostId].indexOf(layer)
    if (idx >= 0) {
      _layersByHostId[hostId].splice(idx, 1)
      if (_layersByHostId[hostId].length === 0) {
        delete _layersByHostId[hostId]
      }
    }
  }
}

/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
export function notifyHostChanged (id) {
  if (_layersByHostId[id]) {
    _layersByHostId[id].forEach(layer => layer.forceUpdate())
  }
}

/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
export function setDefaultTarget (selector) {
  _defaultHostSelector = selector
}

/**
 * Get the default target selector when determining a host
 */
export function getDefaultTarget () {
  return _defaultHostSelector
}
