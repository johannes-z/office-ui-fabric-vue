<template>
  <button :class="{ 'ms-Button--primary': primary }"
          class="ms-Button root"
          type="button">
    <div class="ms-Button-flexContainer flexContainer">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/common";

.root {
  font-weight: $ms-font-weight-regular;
  font-size: $ms-font-size-m;
  box-sizing: border-box;
  border: 1px solid transparent;
  user-select: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
  padding: 0 16px;
  border-radius: 0;

  height: 40px;

  background-color: $ms-color-neutralLighterAlt;

  &:focus {
    // background-color: $ms-color-neutralLighterAlt;
    outline: transparent;
  }

  &:hover {
    background-color: $ms-color-neutralLight;
    outline: transparent;
  }

  &.ms-Button--primary {
    background-color: $ms-color-themePrimary;
    color: $ms-color-white;
    &:hover {
      background-color: $ms-color-themeDarkAlt;
    }
  }
}

.flexContainer {
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.textContainer {
  flex-grow: 1;
}

.label {
  font-weight: $ms-font-weight-semibold;
  margin: 0 4px;
  line-height: 100%;
}
</style>
