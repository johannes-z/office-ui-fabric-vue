<template>
  <div>
    <VDefaultButton ref="calloutButton"
                    @click.native="showCallout = !showCallout">
      {{ showCallout ? 'Hide callout' : 'Show callout' }}
    </VDefaultButton>
    <VCallout v-if="showCallout"
              :target="$refs.calloutButton.$el" />
  </div>
</template>

<script>
import { VDefaultButton, VCallout } from '../index'

export default {
  components: { VDefaultButton, VCallout },
  data () {
    return {
      showCallout: false,
    }
  },
}
</script>

<style>
</style>
