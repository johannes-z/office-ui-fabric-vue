<template>
  <div :class="className" class="ms-SearchBox-container">

    <div :class="classObj" class="ms-SearchBox root">

      <div class="ms-SearchBox-iconContainer iconContainer">
        <icon icon-name="Search" />
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
        <icon icon-name="Clear" />
      </div>

      <div v-if="clear" style="clear: both;"/>

    </div>

  </div>
</template>

<script>
import { Icon } from '../Icon'

export default {
  components: { Icon },
  props: {
    className: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
    value: {
      type: String,
      default: '',
    },
    underlined: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Boolean,
      default: true,
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
    isDisabled () {
      return this.$attrs.disabled
    },
    classObj () {
      let obj = {}
      obj['is-disabled'] = this.isDisabled
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
      this.$emit('onBlur', this.searchQuery)
    },
    onFocus () {
      this.isActive = !this.isDisabled
      this.$emit('onFocus', this.searchQuery)
    },
    onChange () {
      this.$emit('onChange', this.searchQuery)
    },
    onSearch () {
      this.$emit('onSearch', this.searchQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

$SearchBoxTransitionDuration: .167s;

// Active styles
.root {
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
.root.is-disabled {
  background-color: $ms-color-neutralLighterAlt;
  border-color: $ms-color-neutralLighterAlt;
  color: $ms-color-neutralTertiary;

  &, > * {
    cursor: default;
  }

  > .iconContainer {
    color: $ms-color-neutralTertiary;
  }
  > .field {
    color: $ms-color-white;
    background-color: $ms-color-white;
  }
  > .clearButton {
    background-color: $ms-color-neutralLighterAlt;
  }
}

.root.is-underlined.is-disabled {
  background-color: $ms-color-white;
  border-bottom-color: $ms-color-neutralLighterAlt;
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
