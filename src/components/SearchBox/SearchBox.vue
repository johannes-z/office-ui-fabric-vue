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
             @keyup.enter="onSearch">

      <div v-show="hasText"
           class="ms-SearchBox-clearButton clearButton"
           @click="onClear">
        <icon icon-name="Clear" />
      </div>

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
      obj['has-text'] = this.hasText
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
      this.isActive = true
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

// Active styles
.root.is-active {
  .iconContainer {
    width: 12px;
    transition: width .167s;
    & > i {
      opacity: 0;
    }
  }
}

// Static styles
.ms-SearchBox-container {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  box-sizing: border-box;
}
.root {
  display: table-row;
  font-size: 0px;
  font-weight: 400;
  color: #333;
  border: 1px solid #a6a6a6;
  background-color: #ffffff;

  input::-ms-clear{
    display:none;
  }
  > .iconContainer {
    font-size: 16px;
    padding-left: 8px;
    width: 40px;
    transition: width .167s;
    .ms-SearchBox-icon {
      opacity: 1;
      transition: opacity .167s 0s;
    }
  }
  > .field {
    font-size: 14px;
    height: 30px;
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    border: none;
    width: 100%;
    outline: 1px solid transparent;
    padding-bottom: 0.5px;
  }
  > .field,
  > .iconContainer,
  > .clearButton {
    display: table-cell;
    vertical-align: middle;
    box-sizing: border-box;
    position: relative;
  }

  > .iconContainer,
  > .clearButton {
    color: #106ebe;
    text-align: center;
    > .ms-Icon {
      line-height: 30px;
    }
  }
  > .clearButton {
    width: 32px;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
