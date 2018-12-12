<template>

  <VCalloutContent v-if="doNotLayer"
                   v-bind="$props"
                   @onBlur="$emit('onBlur', $event)" />

  <VLayer v-else>
    <VCalloutContent v-bind="$props"
                     @onBlur="$emit('onBlur', $event)">
      <slot />
    </VCalloutContent>
  </VLayer>

</template>

<script>
import { VLayer } from '../Layer/'
import VCalloutContent from './CalloutContent.vue'

import propsMixin from './propsMixin.js'

export default {
  components: { VLayer, VCalloutContent },
  mixins: [ propsMixin ],
}
</script>
