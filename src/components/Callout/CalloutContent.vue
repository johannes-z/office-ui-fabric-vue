<template>
  <div ref="container"
       class="ms-Callout-container">
    <div :style="styleContainer"
         class="ms-Callout">
      <div v-if="isBeakVisible"
           class="ms-Callout-beak"
           style="left: 51.2344px; top: -8px;" />
      <div class="ms-Callout-beakCurtain" />
      <div class="ms-Callout-main">

        <slot>
          <p class="ms-font-xl">All of your favorite people</p>

          <p>Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.</p>
        </slot>

      </div>
    </div>
  </div>
</template>

<script>
import propsMixin from './propsMixin.js'

export default {
  mixins: [ propsMixin ],
  computed: {
    styleContainer () {
      const rect = this.target.getBoundingClientRect()
      return {
        width: `${rect.width}px`,
        left: `${rect.left}px`,
        top: `${rect.top + rect.height}px`,
      }
    },
  },
  beforeDestroy () {
    window.removeEventListener('click', this.onClick)
  },
  mounted () {
    window.addEventListener('click', this.onClick)
  },
  methods: {
    onClick (event) {
      var index = event.path.indexOf(this.$refs.container)
      if (index > -1) return
      this.$emit('onBlur', event)
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common.scss";

.ms-Callout-container {
  position: relative;

  .ms-Callout {
    position: absolute;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: $ms-color-neutralLight;
    outline: transparent;

    .ms-Callout-beak {
      position: absolute;
      background-color: $ms-color-white;
      box-shadow: inherit;
      box-sizing: border-box;
      transform: rotate(45deg);
      height: 16px;
      width: 16px;
      border: inherit;
    }

    .ms-Callout-beakCurtain {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: $ms-color-white;
    }

    .ms-Callout-main {
      background-color: $ms-color-white;
      overflow-x: hidden;
      overflow-y: auto;
      position: relative;
    }
  }
}
</style>
