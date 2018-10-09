<template>
  <div>
    <h1 class="ms-font-xxl">Layer</h1>

    <h2 class="ms-font-xl">Basic layered content</h2>

    <p>
      <VCheckbox :checked="showLayer"
                 @click.native="showLayer = !showLayer">
        Wrap the content box belowed in a Layer
      </VCheckbox>
    </p>

    <div v-if="showLayer">
      <VLayer>
        <div class="LayerExample">
          This is example layer content.
        </div>
      </VLayer>
    </div>
    <div v-else
         class="LayerExample">
      This is example layer content.
    </div>

    <h2 class="ms-font-xl">Using LayerHost to control projection</h2>

    <p>
      <VToggle :checked.sync="showHost">Show host</VToggle>
    </p>

    <div v-show="showHost"
         id="layerhost1"
         class="ms-LayerHost LayerExample-customHost" />

    <p>
      <VCheckbox :checked="showLayerId"
                 @click.native="showLayerId = !showLayerId">
        Wrap the content box belowed in a Layer
      </VCheckbox>
    </p>

    <div v-if="showLayerId">
      <VLayer host-id="layerhost1">
        <div class="LayerExample">
          This is example layer content.
        </div>
      </VLayer>
    </div>
    <div v-else
         class="LayerExample">
      This is example layer content.
    </div>

    <p>
      <VCheckbox :checked="showLayerNoHost"
                 @click.native="showLayerNoHost = !showLayerNoHost">
        Render the box below in a Layer without specifying a host, fixing it to the top of the page
      </VCheckbox>
    </p>

    <div v-if="showLayerNoHost">
      <VLayer>
        <div class="LayerExample">
          This is example layer content.
        </div>
      </VLayer>
    </div>
    <div v-else
         class="LayerExample">
      This is example layer content.
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showHost: true,
      showLayer: false,
      showLayerId: false,
      showLayerNoHost: false,
    }
  },
}
</script>

<style lang="scss">
.LayerExample {
  background-color: #0078d4;
  color: #fff;
  line-height: 50px;
  padding: 0 20px;
}
.ms-LayerHost.LayerExample-customHost {
  height: 60px;
  padding: 20px;
  background: rgba(255, 0, 0, 0.2);
  border: 1px dashed black;
  position: relative;
  z-index: 2;

  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: "I am a LayerHost with id=layerhost1";
  }
}
</style>
