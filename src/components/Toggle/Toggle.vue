<template>
  <div :class="classObj"
       class="ms-Toggle root">
    <VLabel v-if="label || $slots.default"
            :for="id">
      <slot>{{ label }}</slot>
    </VLabel>

    <div class="ms-Toggle-innerContainer container">
      <button :id="id"
              class="ms-Toggle-background pill"
              @click="onClick">
        <div class="ms-Toggle-thumb thumb" />
      </button>

      <VLabel :for="id"
              class="ms-Toggle-stateText text">
        <slot v-if="value"
              name="onText">
          {{ onText }}
        </slot>
        <slot v-else
              name="offText">
          {{ offText }}
        </slot>
      </VLabel>
    </div>
  </div>
</template>

<script>
import { VLabel } from '../Label'
export default {
  components: { VLabel },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    onText: {
      type: String,
      default: '',
    },
    offText: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    id () {
      return 'Toggle' + this._uid
    },
    classObj () {
      let obj = {}
      obj['is-active'] = this.value
      obj['is-disabled'] = this.disabled
      return obj
    },
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/common.scss";

.root {
  &.is-active {
    .pill {
      background: $ms-color-themePrimary;
    }
    .thumb {
      background: $ms-color-white;
      float: right;
    }
  }

  &:not(.is-active) {
    .pill {
      background: $ms-color-white;
      border-color: $ms-color-neutralSecondary;
    }
    .thumb {
      background: $ms-color-neutralDark;
      float: left;
    }
  }

  &.is-disabled {
    .pill {
      background: $ms-color-neutralTertiaryAlt;
      cursor: default;
    }
    .ms-Label,
    .text {
      color: $ms-color-neutralTertiary;
    }
  }

  &.is-disabled.is-active {
    .ms-Label,
    .text {
      color: $ms-color-neutralTertiary;
    }
  }

  &.is-disabled:not(.is-active) {
    .pill {
      background: $ms-color-white;
      border-color: $ms-color-neutralTertiary;
    }
    .thumb {
      background: $ms-color-neutralTertiary;
    }
  }

  .label {
    display: block;
  }

  .container {
    display: inline-block;
  }

  .pill {
    position: relative;
    font-size: 20px;
    box-sizing: border-box;
    width: 2.2em;
    height: 1em;
    cursor: pointer;
    align-items: center;
    padding: 0 0.2em;
    outline: transparent;
    border-radius: 1em;
    transition: all 0.1s ease;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
  }

  .thumb {
    width: 0.5em;
    height: 0.5em;
    background-color: $ms-color-white;
    box-sizing: border-box;
    border-radius: 0.5em;
    transition: all 0.1s ease;
    border-color: transparent;
    border-width: 0.28em;
    border-style: solid;
  }

  .text,
  .pill {
    display: inline-block;
    vertical-align: middle;
  }
  .text {
    margin: 0 10px;
  }
  .text,
  .root {
    user-select: none;
  }
}
</style>
