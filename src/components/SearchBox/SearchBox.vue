<template>
  <div class="ms-SearchBox-container">
    <div :class="classObj"
         class="ms-SearchBox root">
      <div class="ms-SearchBox-iconContainer iconContainer">
        <VIcon icon-name="Search" />
      </div>

      <input ref="searchInput"
             v-model="searchQuery"
             :placeholder="placeholder"
             class="ms-SearchBox-field field"
             type="text"
             @blur="onBlur"
             @focus="onFocus"
             @keyup.enter.prevent="onSearch"
             @keydown.enter.prevent.stop>

      <div v-show="hasText"
           class="ms-SearchBox-clearButton clearButton"
           @click="onClear">
        <VIcon icon-name="Clear" />
      </div>

      <div v-if="clear"
           style="clear: both;" />
    </div>
  </div>
</template>

<script>
import { VIcon } from '../Icon'

export default {
  components: { VIcon },
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    value: {
      type: String,
      default: '',
    },
    clear: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    underlined: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isActive: false,
      searchQuery: this.value,
    }
  },
  computed: {
    hasText () {
      return this.searchQuery && this.searchQuery.length > 0
    },
    classObj () {
      let obj = {}
      obj['is-disabled'] = this.disabled
      obj['is-underlined'] = this.underlined
      obj['has-text'] = this.hasText
      obj['can-clear'] = this.hasText
      obj['is-active'] = this.isActive
      return obj
    },
  },
  watch: {
    searchQuery () {
      this.onChange()
    },
  },
  methods: {
    onClear () {
      this.searchQuery = ''
      this.$refs.searchInput.focus()
    },
    onBlur () {
      this.isActive = false
      this.$emit('blur', this.searchQuery)
    },
    onFocus () {
      if (this.disabled) return
      this.isActive = !this.disabled
      this.$emit('focus', this.searchQuery)
    },
    onChange () {
      this.$emit('input', this.searchQuery)
      this.$emit('change', this.searchQuery)
    },
    onSearch () {
      this.$emit('search', this.searchQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

$SearchBoxTransitionDuration: .167s;

// Active styles
.ms-SearchBox {
  &.is-active {
    > .iconContainer {
      width: 4px;
      & > i {
        opacity: 0;
      }
    }
    > .field {
      width: calc(100% - 36px);
    }
  }
  &.can-clear:not(.is-active) {
    > .field {
      width: calc(100% - 64px);
    }
  }
}

// Disabled
.ms-SearchBox.is-disabled {
  background-color: $ms-color-neutralLighterAlt;
  border-color: $ms-color-neutralLighterAlt;
  color: $ms-color-neutralTertiary;
  user-select: none;
  pointer-events: none;

  &, > * {
    cursor: default;
  }

  > .iconContainer {
    color: $ms-color-neutralTertiary;
  }
  > .field {
    color: $ms-color-white;
    background-color: $ms-color-neutralLighterAlt;
  }
  > .clearButton {
    background-color: $ms-color-neutralLighterAlt;
  }
}

.root.is-underlined.is-disabled {
  background-color: $ms-color-white;
  border-bottom-color: $ms-color-neutralLighterAlt;

  > .field {
    background-color: $ms-color-white;
  }
}

// Static styles
.ms-SearchBox-container {
  width: 100%;
}

.root {
  padding-left: 8px;

  font-weight: $ms-font-weight-regular;
  color: $ms-color-neutralPrimary;

  border: 1px solid $ms-color-neutralTertiary;
  background-color: #ffffff;

  font-size: 0px;
  font-weight: 400;

  input::-ms-clear{
    display:none;
  }

  &.is-underlined {
    border: 0;
    border-bottom: 1px solid $ms-color-neutralTertiary;
  }

  > .iconContainer {
    float: left;
    font-size: 16px;
    transition: width $SearchBoxTransitionDuration;

    & > i {
      opacity: 1;
      transition: opacity $SearchBoxTransitionDuration 0s;
    }
  }
  > .field {
    color: $ms-color-neutralPrimary;

    float: left;
    font-size: 14px;
    height: 30px;
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    border: none;
    width: calc(100% - 32px);
    outline: 1px solid transparent;
    transition: width $SearchBoxTransitionDuration 0s;
  }

  > .iconContainer,
  > .clearButton {
    color: $ms-color-themePrimary;
    text-align: center;
    width: 32px;

    > .ms-Icon {
      line-height: 30px;
    }
  }

  > .clearButton {
    float: right;
    &:hover {
      cursor: pointer;
    }
    & > i, & > i:before {
      font-size: 12px;
    }
  }
}
</style>
