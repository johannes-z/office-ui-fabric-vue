<template>
  <div :class="rootClass"
       class="ms-Slider root ms-Slider-enabled">
    <label v-if="label"
           :for="id"
           class="ms-Label titleLabel root">
      {{ label }}
    </label>

    <div class="ms-Slider-container container">
      <button :id="id"
              class="ms-Slider-slideBox slideBox ms-Slider-showValue ms-Slider-showTransitions showTransitions"
              type="button"
              role="slider"
              @mousedown="onMouseDown"
              @touchstart="onTouchStart"
              @mouseup="onMouseUp"
              @touchend="onTouchEnd"
              @keydown.up="setValue(1)"
              @keydown.right="setValue(1)"
              @keydown.down="setValue(-1)"
              @keydown.left="setValue(-1)"
              @keydown.home="setValue(0, min)"
              @keydown.end="setValue(0, max)">
        <div ref="sliderLine"
             class="ms-Slider-line line">
          <span :style="thumbStyle"
                class="ms-Slider-thumb thumb"/>
          <span :style="activeStyle"
                class="ms-Slider-active lineContainer activeSection" />
          <span :style="inactiveStyle"
                class="ms-Slider-inactive lineContainer inactiveSection" />
        </div>
      </button>

      <label v-if="showValue"
             class="ms-Label ms-Slider-value valueLabel root">
        {{ value }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: Number,
      default: 5,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    step: {
      type: Number,
      default: 1,
    },
    showValue: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isDragging: false,
      value: this.defaultValue,
      renderedValue: this.defaultValue,
    }
  },
  computed: {
    id () {
      return 'Slider' + this._uid
    },
    rootClass () {
      var obj = {
        'ms-Slider-row': !this.vertical,
        'rootIsHorizontal': !this.vertical,
        'ms-Slider-column': this.vertical,
        'rootIsVertical': this.vertical,
        'rootIsEnabled': !this.disabled,
        'rootIsDisabled': this.disabled,
      }
      return obj
    },
    activeStyle () {
      var obj = {}
      obj[this.vertical ? 'height' : 'width'] = this.thumbOffsetPercent + '%'
      return obj
    },
    inactiveStyle () {
      var obj = {}
      obj[this.vertical ? 'height' : 'width'] = (100 - this.thumbOffsetPercent) + '%'
      return obj
    },
    thumbOffsetPercent () {
      var value = this.isDragging ? this.renderedValue : this.value
      return (value - this.min) / (this.max - this.min) * 100
    },
    thumbStyle () {
      var obj = {}
      obj[this.vertical ? 'bottom' : 'left'] = this.thumbOffsetPercent + '%'
      return obj
    },
  },
  methods: {
    onMouseDown () {
      if (this.disabled) return
      this.isDragging = true
      window.addEventListener('mousemove', this.onMove)
      window.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseUp () {
      this.isDragging = false
      window.removeEventListener('mousemove', this.onMove)
      window.addEventListener('mouseup', this.onMouseUp)
    },
    onTouchStart () {
      if (this.disabled) return
      this.isDragging = true
      window.addEventListener('touchmove', this.onMove)
      window.addEventListener('touchend', this.onMouseUp)
    },
    onTouchEnd () {
      this.isDragging = false
      window.removeEventListener('touchmove', this.onMove)
      window.addEventListener('touchend', this.onMouseUp)
    },
    onMove (event) {
      const steps = (this.max - this.min) / this.step
      const sliderPositionRect = this.$refs.sliderLine.getBoundingClientRect()
      const sliderLength = !this.vertical ? sliderPositionRect.width : sliderPositionRect.height
      const stepLength = sliderLength / steps
      let currentSteps
      let distance

      if (!this.vertical) {
        const left = this.getPosition(event)
        distance = left - sliderPositionRect.left
        currentSteps = distance / stepLength
      } else {
        const bottom = this.getPosition(event)
        distance = sliderPositionRect.bottom - bottom
        currentSteps = distance / stepLength
      }

      let currentValue
      let renderedValue

      if (currentSteps > Math.floor(steps)) {
        renderedValue = currentValue = this.max
      } else if (currentSteps < 0) {
        renderedValue = currentValue = this.min
      } else {
        renderedValue = this.min + this.step * currentSteps
        currentValue = this.min + this.step * Math.round(currentSteps)
      }

      this.value = currentValue
      this.renderedValue = renderedValue

      event.preventDefault()
      event.stopPropagation()
    },
    getPosition (event) {
      let currentPosition = 0
      switch (event.type) {
        case 'mousedown':
        case 'mousemove':
          currentPosition = !this.vertical ? event.clientX : event.clientY
          break
        case 'touchstart':
        case 'touchmove':
          currentPosition = !this.vertical ? event.touches[0].clientX : event.touches[0].clientY
          break
      }
      return currentPosition
    },
    setValue (diff, value = this.value) {
      var newValue = Math.min(this.max, Math.max(this.min, value + diff))
      this.value = newValue
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/common";

.root {
  user-select: none;
}

.titleLabel {
  padding: 0;
}

.line {
  display: flex;
  position: relative;
}

.line .lineContainer {
  border-radius: 4px;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.valueLabel {
  flex-shrink: 1;
  width: 30px;
  line-height: 1;
}

.slideBox {
  @include focus-border();
  background: transparent;
  border: none;
  flex-grow: 1;
  line-height: 28px;
}

.slideBox .thumb {
  border: 2px solid $ms-color-neutralSecondary;
  box-sizing: border-box;
  background: $ms-color-white;
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 10px;
}

.rootIsHorizontal {
  .line {
    width: 100%;
  }

  .line .lineContainer {
    height: 4px;
  }

  .slideBox {
    height: 28px;
    padding: 0 8px; // Make room for thumb at ends of line
  }

  .slideBox .thumb {
    top: -6px;
    @include transform-translateX(-50%);
  }

  .valueLabel {
    margin: 0 8px;
    white-space: nowrap;
    width: 40px;
  }
}

.rootIsVertical {
  margin-right: 8px;

  .line {
    height: 100%;
    width: 4px;
    margin: 0 auto;
    flex-direction: column-reverse;
  }

  .line .lineContainer {
    width: 4px;
    height: 100%;
  }

  .slideBox {
    height: 100%;
    width: 28px;
    padding: 8px 0; // Make room for thumb at bottom of line
  }

  .slideBox .thumb {
    left: -6px;
    margin: 0 auto;
    transform: translateY(8px);
  }

  .container {
    flex-direction: column;
    height: 100%;
    text-align: center;
    margin: 8px 0;
  }

  .valueLabel {
    margin: 0 auto;
    white-space: nowrap;
    width: 40px;
  }
}

.activeSection {
  background: $ms-color-neutralSecondary;

  @include high-contrast {
    background-color: WindowText;
  }
}

.inactiveSection {
  background: $ms-color-neutralTertiaryAlt;

  @include high-contrast {
    border: 1px solid WindowText;
  }
}

.showTransitions {
  .thumb {
    transition: left $ms-animation-duration-3 $ms-animation-ease-1;
  }

  .activeSection,
  .inactiveSection {
    transition: width $ms-animation-duration-3 $ms-animation-ease-1;
  }
}

.rootIsEnabled {
  .slideBox:hover,
  .slideBox:active {
    .thumb {
      border: 2px solid $ms-color-themePrimary;

      @include high-contrast {
        border-color: Highlight;
      }
    }

    .activeSection {
      background-color: $ms-color-themePrimary;

      @include high-contrast {
        background-color: Highlight;
      }
    }

    .inactiveSection {
      background-color: $ms-color-themeLight;

      @include high-contrast {
        border-color: Highlight;
      }
    }
  }

  .slideBox:active {
    .thumb {
      border: 2px solid $ms-color-themeDarkAlt;
    }
    .activeSection {
      background-color: $ms-color-themeDarkAlt;
    }
  }
}

.rootIsDisabled {
  .thumb {
    border-color: $ms-color-neutralTertiaryAlt;

    @include high-contrast {
      border-color: GrayText;
    }
  }

  .activeSection,
  .inactiveSection {
    @include high-contrast {
      background-color: GrayText;
      border-color: GrayText;
    }
  }

  .activeSection {
    background: $ms-color-neutralTertiaryAlt;
  }
  .inactiveSection {
    background: $ms-color-neutralLight;
  }
}
</style>
