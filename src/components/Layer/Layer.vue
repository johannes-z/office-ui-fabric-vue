<template>
  <div :class="{ ['ms-Layer--fixed']: !hostId }"
       class="ms-Layer">
    <div class="ms-Fabric ms-Layer-content content">
      <slot/>
    </div>
  </div>
</template>

<script>
import { getDocument } from '../../utilities'
import { registerLayer, getDefaultTarget, unregisterLayer } from './Layer.notification'

export default {
  props: {
    hostId: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      node: {},
    }
  },
  computed: {
    isFixed () {
      return true
    },
  },
  created () {
    // if (this.hostId) {
    //   registerLayer(this.hostId, this)
    // }
  },
  beforeDestroy () {
    // if (this.hostId) {
    //   unregisterLayer(this.hostId, this)
    // }

    const parentNode = this.node.parentNode
    if (parentNode) {
      parentNode.removeChild(this.node)
    }
    this.node = undefined
  },
  mounted () {
    const host = this.getHost()
    this.node = host.appendChild(this.$el)
  },
  methods: {
    getHost () {
      const hostId = this.hostId

      const doc = getDocument()

      if (hostId) {
        return doc.getElementById(hostId)
      } else {
        const defaultHostSelector = getDefaultTarget()
        return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ms-Layer {
  z-index: 1000000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;

  > * {
    visibility: visible;
  }
}

.ms-Layer--fixed {
  position: fixed;
}
</style>
