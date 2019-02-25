<template>
  <component :is="href ? 'a' : 'button'"
             :class="classObj"
             :disabled="disabled"
             class="ms-Button"
             type="button">
    <div class="ms-Button-flexContainer">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    classObj () {
      return {
        'ms-Button--primary': this.primary,
        'is-disabled': this.disabled,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common";

$DEFAULT_BUTTON_HEIGHT: 32px;

.ms-Button.is-disabled {
  .ms-Icon,
  .ms-Button-label,
  .ms-Button-description {
    color: $ms-color-neutralTertiary;
  }
}

.ms-Button {
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

  height: $DEFAULT_BUTTON_HEIGHT;

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
    &.is-disabled:hover {
      background-color: $ms-color-neutralLighterAlt;
    }

    .ms-Icon {
      color: $ms-color-white;
    }
  }

  &.is-disabled {
    background-color: $ms-color-neutralLighterAlt;

    &:hover {
      cursor: default;
    }
  }
}

.ms-Button-flexContainer {
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.ms-Button-textContainer {
  flex-grow: 1;
}

.ms-Button-label {
  font-weight: $ms-font-weight-semibold;
  margin: 0 4px;
  line-height: 100%;
}
</style>
