<template>
  <a v-if="href"
     :href="href"
     :class="classObj"
     class="ms-Link root">
    <slot/>
  </a>
  <button v-else
          class="ms-Link root">
    <slot/>
  </button>
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
    classObj () {
      var obj = {}
      obj['isDisabled'] = this.disabled
      return obj
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

// Element: ms-Link root component
.root {
  color: $ms-color-themePrimary;
  margin: 0;
  overflow: inherit;
  padding: 0;
  text-overflow: inherit;
}

// State: The button is not disabled.
.isEnabled {
  &:hover,
  &:focus {
    color: $ms-color-themeDarker;
  }

  &:active {
    color: $ms-color-themePrimary;
  }
}

// State: The button is disabled.
.isDisabled {
  color: $ms-color-neutralTertiary;
  pointer-events: none;
  cursor: default;
}

// Link implemented as a button.
button.root {
  @include focus-border;
  @include text-align(left);
  background: none;
  border: none;
  cursor: pointer;
  display: inline;
  font-size: inherit; // Ensure that we inherit font size, rather than the browser's default.

  @include high-contrast {
    // Using Highlight here so we still have a themeable system color that is different from both window text and link text.
    color: Highlight;
  }
}

// Link implemented as an anchor.
a.root {
  @include focus-outline;
  text-decoration: none;
}

</style>
