<template>
  <div class="ms-Spinner">
    <div :class="classObj"
         :style="styleObj"
         class="ms-Spinner-circle" />

    <div v-if="size >= 2"
         class="ms-Spinner-label">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>

<script>
const SPINNER_SIZE = {
  0: { size: '12px', name: 'xSmall' },
  1: { size: '16px', name: 'small' },
  2: { size: '20px', name: 'Medium' },
  3: { size: '28px', name: 'Large' },
}

export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    size: {
      type: Number,
      default: 2,
      validator: value => SPINNER_SIZE[value] != null,
    },
  },
  computed: {
    classObj () {
      var size = SPINNER_SIZE[this.size]
      var obj = {}
      obj[`ms-Spinner--${size.name}`] = true
      return obj
    },
    styleObj () {
      var size = SPINNER_SIZE[this.size]
      var style = {}
      style.width = size.size
      style.height = size.size
      return style
    },
  },
}
</script>

<style lang="scss">
@import '../../common/common.scss';

@keyframes spinAnimation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
}

.ms-Spinner {
  .ms-Spinner-circle {
    margin: auto;
    box-sizing: border-box;

    animation-name: spinAnimation;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
    border-radius: 50%;
    border-width: 1.5px;
    border-style: solid;
    border-color: $ms-color-themePrimary
                  $ms-color-themeLight
                  $ms-color-themeLight;
    border-image: initial;
  }

  .ms-Spinner-label {
    color: $ms-color-themePrimary;
    margin-top: 10px;
    text-align: center;
  }
}

</style>
