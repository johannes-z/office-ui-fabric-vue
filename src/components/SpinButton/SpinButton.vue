<template>
  <div class="ms-SpinButton">
    <!-- Label -->
    <VLabel v-if="label"
            class="ms-SpinButton-label">
      {{ label }}
    </VLabel>

    <div class="ms-SpinButton-container">

      <input :value="value"
             type="text"
             class="ms-SpinButton-input"
             @blur="onBlur">

      <div class="ms-SpinButton-icons">
        <VIconButton class="ms-SpinButton-button"
                     icon-name="ChevronUpSmall"
                     @click.native="onIncrement" />
        <VIconButton class="ms-SpinButton-button"
                     icon-name="ChevronDownSmall"
                     @click.native="onDecrement" />
      </div>

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
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: null,
    },
  },
  methods: {
    onBlur (event) {
      let value = Number(event.target.value)
      let newValue = this.validate(value)
      this.$emit('input', newValue)
      event.target.value = newValue
    },
    validate (value) {
      const { min, max } = this
      if (min && (value < min)) return min
      if (max && (value > max)) return max
      return value
    },
    onIncrement () {
      const { step, max, value } = this
      let newValue = Math.min(value + step, max)
      this.$emit('input', newValue)
    },
    onDecrement () {
      const { step, min, value } = this
      let newValue = Math.max(value - step, min)
      this.$emit('input', newValue)
    },
  },
}
</script>

<style lang="scss">
.ms-SpinButton {
  font-size: 14px;
  width: 100%;
  min-width: 86px;
  outline: none;

  .ms-SpinButton-label {
    display: inline-flex;
    float: left;
    margin-right: 10px;
  }

  .ms-SpinButton-container {
    display: flex;
    box-sizing: border-box;
    height: 32px;
    min-width: 86px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(166, 166, 166);

    &:hover {
      border-color: rgb(33, 33, 33);
      outline: transparent dashed 2px;
    }

    .ms-SpinButton-input {
      box-sizing: border-box;
      box-shadow: none;
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      font-size: 14px;
      color: rgb(51, 51, 51);
      height: 100%;
      padding-top: 0px;
      padding-right: 12px;
      padding-bottom: 0px;
      padding-left: 12px;
      text-overflow: ellipsis;
      display: block;
      float: left;
      width: calc(100% - 14px);
      min-width: 72px;
      cursor: text;
      user-select: text;
      border-style: none;
      outline: 0px;
      overflow: hidden;
    }

    .ms-SpinButton-icons {
      font-size: 12px;
      display: block;
      float: left;
      height: 100%;
      cursor: default;
      padding-top: 0px;
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      box-sizing: border-box;
      outline: none;

      .ms-SpinButton-button {
        position: relative;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        font-weight: 400;
        box-sizing: border-box;
        display: block;
        text-align: center;
        cursor: default;
        vertical-align: top;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        width: 14px;
        height: 50%;
        background-color: transparent;
        color: rgb(51, 51, 51);
        user-select: none;
        outline: none;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;
        text-decoration: none;
        border-radius: 0px;

        &:hover {
          color: rgb(0, 0, 0);
          background-color: rgb(234, 234, 234);
        }

        .ms-Icon {
          font-size: 6px;
        }
      }
    }
  }
}
</style>
