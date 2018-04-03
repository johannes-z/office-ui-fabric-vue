<template>
  <div :class="className" class="ms-Fabric ms-SearchBox-container">

    <div :class="searchBoxStyle" class="ms-SearchBox">

      <div class="ms-SearchBox-iconContainer">
        <icon icon-name="Search" />
      </div>

      <input ref="searchInput"
             v-model="searchQuery"
             :placeholder="placeholder"
             class="ms-SearchBox-field"
             type="text"
             @blur="onBlur"
             @focus="onFocus">

      <div v-show="searchQuery.length > 0"
           class="ms-SearchBox-clearButton"
           @click="onClear">
        <icon icon-name="Clear" />
        <!-- <i class="ms-SearchBox-icon ms-Icon ms-Icon--Clear"/> -->
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
      searchQuery: this.value,
      searchBoxStyle: {
        'has-text': false,
        'is-active': false,
      },
    }
  },
  watch: {
    searchQuery () {
      this.searchBoxStyle['has-text'] = this.searchQuery.length > 0
    },
  },
  methods: {
    onClear () {
      this.searchQuery = ''
      this.$refs.searchInput.focus()
    },
    onBlur () {
      this.searchBoxStyle['is-active'] = false
    },
    onFocus () {
      this.searchBoxStyle['is-active'] = true
    },
  },
}
</script>

<style lang="scss">
// Active styles
.ms-SearchBox.is-active {
  .ms-SearchBox-iconContainer {
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
.ms-SearchBox {
  display: table-row;
  font-size: 0px;
  font-weight: 400;
  color: #333;
  border: 1px solid #a6a6a6;
  input::-ms-clear{
    display:none;
  }
  > .ms-SearchBox-iconContainer {
    font-size: 16px;
    padding-left: 8px;
    width: 40px;
    transition: width .167s;
    .ms-SearchBox-icon {
      opacity: 1;
      transition: opacity .167s 0s;
    }
  }
  > .ms-SearchBox-field {
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
  > .ms-SearchBox-field,
  > .ms-SearchBox-iconContainer,
  > .ms-SearchBox-clearButton {
    display: table-cell;
    vertical-align: middle;
    box-sizing: border-box;
    position: relative;
  }

  > .ms-SearchBox-iconContainer,
  > .ms-SearchBox-clearButton {
    color: #106ebe;
    text-align: center;
    > .ms-Icon {
      line-height: 30px;
    }
  }
  > .ms-SearchBox-clearButton {
    width: 32px;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
