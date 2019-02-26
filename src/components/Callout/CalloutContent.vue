<template>
  <div ref="container"
       class="ms-Callout-container">
    <div :style="styleContainer"
         class="ms-Callout">
      <div v-if="isBeakVisible"
           class="ms-Callout-beak"
           style="left: 51.2344px; top: -8px;" />
      <div class="ms-Callout-beakCurtain" />
      <div ref="main"
           :style="mainStyle"
           class="ms-Callout-main">

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
    mainStyle () {
      // let containerHeight = this.containerHeight
      // let innerHeight = window.innerHeight

      const rect = this.target.getBoundingClientRect()
      let top = rect.top
      let bottom = window.innerHeight - (rect.top + rect.height)

      // if (containerHeight > innerHeight) {
      //   return {
      //     'max-height': `${innerHeight - 16}px`,
      //   }
      // }

      if (top > bottom) {
        return {
          'max-height': `${top - 8}px`,
        }
      } else {
        return {
          'max-height': `${bottom - 8}px`,
        }
      }

      // return {
      //   'max-height': `${window.innerHeight}px`,
      // }
    },
    styleContainer () {
      const rect = this.target.getBoundingClientRect()
      let top = rect.top
      let bottom = window.innerHeight - (rect.top + rect.height)
      let containerHeight = this.containerHeight

      let obj = {
        width: this.width || `${rect.width}px`,
        left: `${rect.left}px`,
      }

      if (containerHeight > top && containerHeight > bottom) {
        // obj.top = `8px`
        // obj.bottom = `-400px`
        // return obj
      }

      if (top > bottom) {
        obj.bottom = `${-top}px`
      } else {
        obj.top = `${rect.top + rect.height}px`
      }
      return obj
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
      var index = event.path.indexOf(this.target)
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

      font-size: 14px;
      font-weight: 400;
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;
      outline: transparent;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(234, 234, 234);
      border-image: initial;
    }
  }
}
</style>
