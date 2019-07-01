<template>
  <button :id="id"
          :class="classObj"
          role="checkbox"
          type="button"
          class="ms-Checkbox"
          @click.prevent.stop="toggleChecked">
    <VLabel :for="id"
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
    </VLabel>
  </button>
</template>

<script>
export default {
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
    value: {
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
      obj['is-checked'] = this.value
      obj['is-enabled'] = !this.disabled
      obj['is-disabled'] = this.disabled
      return obj
    },
  },
  methods: {
    toggleChecked () {
      if (this.disabled) return
      this.$emit('onChange', !this.value)
      this.$emit('input', !this.value)
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
  outline: none;
  border-width: initial;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  background: none;

  line-height: 21px;
  font-size: 14px;

  &.is-enabled .ms-Checkbox-label {
    cursor: pointer !important;
  }

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
    display: flex;
    margin-top: 0px;
    margin-right: -4px;
    margin-bottom: 0px;
    margin-left: -4px;
    align-items: flex-start;
    position: relative;
    text-align: left;
    user-select: none;
  }

  .ms-Checkbox-checkbox {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    margin-top: 0px;
    margin-right: 4px;
    margin-bottom: 0px;
    margin-left: 4px;
    box-sizing: border-box;
    transition-property: background, border, border-color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
    border-width: 1px;
    border-style: solid;
    overflow: hidden;

    & > i {
      vertical-align: top;
      display: inline-block;
    }
  }

  .ms-Checkbox-text {
    margin-top: 0px;
    margin-right: 4px;
    margin-bottom: 0px;
    margin-left: 4px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
