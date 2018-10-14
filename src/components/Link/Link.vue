<template>
  <component :is="href ? 'a' : 'button'"
             :href="href"
             :class="{ isDisabled }"
             class="ms-Link">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    isDisabled () {
      return this.disabled
    },
  },
}
</script>

<style lang="scss">
@import '../../common/common.scss';

// Element: ms-Link root component
.ms-Link {
  color: $ms-color-themePrimary;
  margin: 0;
  overflow: inherit;
  padding: 0;
  text-overflow: inherit;
  font-size: 12px;

  &:not(.isDisabled) {
    &:hover,
    &:focus {
      color: $ms-color-themeDarker;
      cursor: pointer;
    }

    &:active {
      color: $ms-color-themePrimary;
    }
  }
}

// State: The button is not disabled.
.isEnabled {
}

// State: The button is disabled.
.isDisabled {
  color: $ms-color-neutralTertiary;
  pointer-events: none;
  cursor: default;
}

// Link implemented as a button.
button.ms-Link {
  @include focus-border;
  @include text-align(left);
  background: none;
  border: none;
  cursor: pointer;
  display: inline;

  @include high-contrast {
    // Using Highlight here so we still have a themeable system color that is different from both window text and link text.
    color: Highlight;
  }
}

// Link implemented as an anchor.
a.ms-Link {
  @include focus-outline;
  text-decoration: none;
}

</style>
