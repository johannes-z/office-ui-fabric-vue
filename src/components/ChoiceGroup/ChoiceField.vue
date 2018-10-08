<template>
  <div :class="{ isDisabled, isSelected }"
       class="ms-ChoiceField"
       @click="selectChoice">
    <div class="ms-ChoiceField-wrapper">
      <input :id="key"
             :disabled="option.disabled"
             type="radio"
             class="ms-ChoiceField-input">

      <label :for="key"
             class="ms-ChoiceField-field">
        <span class="ms-Label">{{ option.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDisabled () {
      return this.option.disabled
    },
    isSelected () {
      return this.index === this.value
    },
    key () {
      return `ChoiceGroup-${this._uid}`
    },
  },
  methods: {
    selectChoice () {
      if (this.option.disabled) return
      this.$emit('input', this.index)
    },
  },
}
</script>

<style lang="scss">
.ms-ChoiceField {

  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
  min-height: 26px;
  position: relative;
  margin-top: 8px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;

  &.isDisabled {
    .ms-Label {
      color: rgb(200, 200, 200);
    }
    .ms-ChoiceField-field {
      &:before {
        content: "";
        display: inline-block;
        background-color: rgb(166, 166, 166);
        width: 20px;
        height: 20px;
        font-weight: normal;
        position: absolute;
        top: 0px;
        left: 0px;
        box-sizing: border-box;
        transition-property: border-color;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(166, 166, 166);
        border-radius: 50%;
      }
      &:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        left: 10px;
        right: 0px;
        transition-property: border-width;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
        box-sizing: border-box;
        border-radius: 50%;
      }
    }
  }

  &.isSelected {
    .ms-ChoiceField-field {
      &:before {
        border-color: rgb(0, 120, 212);
      }
      &:after {
        width: 10px;
        height: 10px;
        position: absolute;
        left: 5px;
        right: 0px;
        transition-property: border-width;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
        box-sizing: border-box;
        top: 5px;
        border-width: 5px;
        border-style: solid;
        border-color: rgb(0, 120, 212);
      }
    }
  }

  .ms-ChoiceField-input {
    position: absolute;
    opacity: 0;
    top: 8px;
  }
  .ms-ChoiceField-field {
    display: inline-block;
    cursor: pointer;
    margin-top: 0px;
    position: relative;
    vertical-align: top;
    min-height: 20px;
    user-select: none;

    &:before {
      content: "";
      display: inline-block;
      background-color: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      font-weight: normal;
      position: absolute;
      top: 0px;
      left: 0px;
      box-sizing: border-box;
      transition-property: border-color;
      transition-duration: 200ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(102, 102, 102);
      border-radius: 50%;
    }

    &:after {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      left: 10px;
      right: 0px;
      transition-property: border-width;
      transition-duration: 200ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
      box-sizing: border-box;
      border-radius: 50%;
    }

    .ms-Label {
      font-size: 14px;
      display: inline-block;
      padding-left: 26px;
    }
  }
}
</style>
