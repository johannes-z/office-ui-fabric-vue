<template>
  <button :id="id"
          :class="classObj"
          role="checkbox"
          type="button"
          class="ms-Checkbox"
          @click.prevent.stop="toggleChecked">

    <Label :for="id"
           class="ms-Checkbox-label">
      <span v-if="boxSide === 'end'"
            class="ms-Checkbox-text">
        {{ label }}
      </span>

      <div class="ms-Checkbox-checkbox">
        <VIcon icon-name="CheckMark"
               class="ms-Checkbox-checkmark" />
      </div>

      <span v-if="boxSide === 'start'"
            class="ms-Checkbox-text">
        <slot>{{ label }}</slot>
      </span>
    </Label>

  </button>
</template>

<script>
import { VIcon } from '../Icon'
import { Label } from '../Label'

export default {
  components: { VIcon, Label },
  props: {
    label: {
      type: String,
      default: '',
    },
    boxSide: {
      type: String,
      default: 'start',
      validator: v => v === 'start' || v === 'end',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    id () {
      return 'Checkbox' + this._uid
    },
    classObj () {
      let obj = {}
      obj['is-checked'] = this.checked
      obj['is-enabled'] = !this.disabled
      obj['is-disabled'] = this.disabled
      return obj
    },
  },
  methods: {
    toggleChecked () {
      if (this.disabled) return
      this.$emit('update:checked', !this.checked)
      this.$emit('onChange', !this.checked)
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common.scss";

.ms-Checkbox {
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

  &.is-checked .ms-Checkbox-checkbox {
    & > i {
      color: white;
      opacity: 1;
    }
  }

  &:not(.is-checked) .ms-Checkbox-checkbox {
    & > i {
      opacity: 0;
    }
  }

  &:not(.is-checked):not(.is-disabled):hover .ms-Checkbox-checkbox {
    & > i {
      color: $ms-color-neutralSecondary;
      opacity: 1;
    }
  }

  &.is-checked.is-disabled {
    .ms-Checkbox-checkbox {
      border-color: $ms-color-neutralTertiaryAlt;
      background-color: $ms-color-neutralTertiaryAlt;
    }
  }
  &.is-checked:not(.is-disabled) {
    .ms-Checkbox-checkbox {
      border-color: rgb(0, 120, 212);
      background-color: rgb(0, 120, 212);
    }
  }
  &.is-disabled:not(.is-checked) {
    .ms-Checkbox-checkbox {
      border-color: $ms-color-neutralTertiaryAlt;
    }
  }

  .ms-Checkbox-label {
    height: 22px;
    display: inline-block;
    cursor: pointer;
  }

  .ms-Checkbox-checkbox {
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

  .ms-Checkbox-text {
    display: inline-block;
    vertical-align: baseline;

    color: rgb(51, 51, 51);
    margin: 0 4px;
  }
}
</style>
