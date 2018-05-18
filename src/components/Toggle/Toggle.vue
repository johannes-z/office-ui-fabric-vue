<template>
  <div :class="classObj"
       class="ms-Toggle root">

    <Label v-if="label"
           :for="id">
      {{ label }}
    </Label>

    <div class="ms-Toggle-innerContainer container">
      <button :id="id"
              class="ms-Toggle-background pill"
              @click="onClick">
        <div class="ms-Toggle-thumb thumb"/>
      </button>

      <Label v-if="onText || offText"
             :for="id"
             class="ms-Toggle-stateText text">
        {{ isActive ? onText : offText }}
      </Label>
    </div>

  </div>
</template>

<script>
import { Label } from '../Label'
export default {
  components: { Label },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
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
  },
  data () {
    return {
      isActive: this.checked,
    }
  },
  computed: {
    id () {
      return 'Toggle' + this._uid
    },
    classObj () {
      let obj = {}
      obj['is-active'] = this.isActive
      obj['is-disabled'] = this.disabled
      return obj
    },
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

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
    .ms-Label, .text {
      color: $ms-color-neutralTertiary
    }
  }

  &.is-disabled.is-active {
    .ms-Label, .text {
      color: $ms-color-neutralTertiary
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
    padding-top: 0px;
    padding-right: 0.2em;
    padding-bottom: 0px;
    padding-left: 0.2em;
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

  .text, .pill {
    display: inline-block;
    vertical-align: middle;
  }
  .text {
    margin: 0 10px 0 10px;
  }
  .text, .root {
    user-select: none;
  }
}
</style>
