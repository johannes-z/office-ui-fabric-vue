<template>
  <button :id="id"
          :class="classObj"
          role="checkbox"
          type="button"
          class="ms-Checkbox root"
          @click.prevent.stop="toggleChecked">

    <Label :for="id"
           class="ms-Checkbox-label label">
      <span v-if="boxSide === 'end'" class="ms-Checkbox-text text">
        {{ label }}
      </span>

      <div class="ms-Checkbox-checkbox checkbox">
        <icon icon-name="CheckMark" />
      </div>

      <span v-if="boxSide === 'start'" class="ms-Checkbox-text text">
        {{ label }}
      </span>
    </Label>

  </button>
</template>

<script>
import { Icon } from '../Icon'
import { Label } from '../Label'

export default {
  components: { Icon, Label },
  props: {
    label: {
      type: String,
      default: ''
    },
    boxSide: {
      type: String,
      default: 'start',
      validator: v => v === 'start' || v === 'end'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isChecked: this.checked,
      isDisabled: this.disabled
    }
  },
  computed: {
    id () {
      return 'Checkbox' + this._uid
    },
    classObj () {
      let obj = {}
      obj['is-checked'] = this.isChecked
      obj['is-enabled'] = !this.isDisabled
      obj['is-disabled'] = this.isDisabled
      return obj
    }
  },
  methods: {
    toggleChecked () {
      if (this.isDisabled) return
      this.isChecked = !this.isChecked
      this.$emit('onChange', this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

.ms-Checkbox.root {
  display: block;

  position: relative;
  padding: 0;
  margin: 0;
  cursor: pointer !important;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: none;

  line-height: 21px;
  font-size: 14px;

  &.is-checked .checkbox {
    & > i {
      color: white;
      opacity: 1;
    }
  }
  &:not(.is-checked) .checkbox {
    & > i {
      opacity: 0;
    }
  }

  &.is-checked.is-disabled {
    .checkbox {
      border-color: $ms-color-neutralTertiaryAlt;
      background-color: $ms-color-neutralTertiaryAlt;
    }
  }
  &.is-checked:not(.is-disabled) {
    .checkbox {
      border-color: rgb(0, 120, 212);
      background-color: rgb(0, 120, 212);
    }
  }
  &.is-disabled:not(.is-checked) {
    .checkbox {
      border-color: $ms-color-neutralTertiaryAlt;
    }
  }

  .label {
    height: 22px;
    display: inline-block;
    cursor: pointer;
  }

  .checkbox {
    display: inline-block;
    vertical-align: baseline;

    height: 20px;
    width: 20px;
    margin: 0 4px;

    border-width: 1px;
    border-style: solid;

    transition-property: background, border, border-color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);

    & > i {
      vertical-align: top;
      display: inline-block;
    }
  }

  .text {
    display: inline-block;
    vertical-align: baseline;

    color: rgb(51, 51, 51);
    margin: 0 4px;
  }
}
</style>
