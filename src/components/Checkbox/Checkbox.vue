<template>
  <button :id="id"
          :class="classObj"
          :aria-checked="isChecked"
          role="checkbox"
          type="button"
          class="ms-Checkbox"
          @click.prevent.stop="toggleChecked">
    <label :for="id"
           class="ms-Checkbox-label">
      <div class="ms-Checkbox-checkbox">
        <icon :style="{ opacity: isChecked ? 1 : 0 }"
              icon-name="CheckMark" />
      </div>
      <span class="ms-Checkbox-text">{{ label }}</span>
    </label>
  </button>
</template>

<script>
import { Icon } from '../Icon'

export default {
  components: { Icon },
  props: {
    label: {
      type: String,
      default: '',
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
  data () {
    return {
      isChecked: this.checked,
      isDisabled: this.disabled,
    }
  },
  computed: {
    id () {
      return `checkbox-${(new Date()).getTime()}`
    },
    classObj () {
      let obj = {}
      obj['is-checked'] = this.isChecked
      obj['is-enabled'] = !this.isDisabled
      obj['is-disabled'] = this.isDisabled
      return obj
    },
  },
  methods: {
    toggleChecked () {
      if (this.isDisabled) return
      this.isChecked = !this.isChecked
      this.$emit('onChange', this.isChecked)
    },
  },
}
</script>

<style lang="scss">
button.ms-Checkbox {
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

  &.is-checked {
    .ms-Checkbox-checkbox {
      border-color: rgb(0, 120, 212);
      background-color: rgb(0, 120, 212);
      & > i {
        color: white;
      }
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
    margin-top: 0px;
    margin-right: 4px;
    margin-bottom: 0px;
    margin-left: 4px;

    border-width: 1px;
    border-style: solid;

    transition-property: background, border, border-color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);

    & > i {
      vertical-align: middle;
      display: inline-block;
    }
  }

  .ms-Checkbox-text {
    display: inline-block;
    vertical-align: baseline;

    color: rgb(51, 51, 51);
    margin-top: 0px;
    margin-right: 4px;
    margin-bottom: 0px;
    margin-left: 4px;
  }
}
</style>
