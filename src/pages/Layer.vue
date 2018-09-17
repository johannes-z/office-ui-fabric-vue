<template>
  <div>
    <VCheckbox :checked="showLayer"
               @click.native="showLayer = !showLayer">
      Wrap the content box belowed in a Layer
    </VCheckbox>
    <VLayer v-if="showLayer">
      <div style="background-color: red;">
        Test
      </div>
    </VLayer>
  </div>
</template>

<script>
import { VLayer, VCheckbox } from '../index'

export default {
  components: { VLayer, VCheckbox },
  data () {
    return {
      showLayer: false,
    }
  },
}
</script>

<style>
</style>
