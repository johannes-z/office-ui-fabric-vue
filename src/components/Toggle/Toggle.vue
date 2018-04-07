<template>
  <div :class="classObj"
       class="ms-Toggle root">
    <label :for="id" class="ms-Label ms-Toggle-label label"/>
    <div class="ms-Toggle-innerContainer"
         @click="onClick">
      <button :id="id"
              class="ms-Toggle-background pill">
        <div class="ms-Toggle-thumb thumb"/>
      </button>
      <label :for="id" class="ms-Label ms-Toggle-stateText text"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isActive: this.checked,
    }
  },
  computed: {
    id () {
      return 'Toggle' + this._uid
    },
    classObj () {
      let obj = {}
      obj['is-active'] = this.isActive
      return obj
    },
  },
  methods: {
    onClick () {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/common.scss';

.root {

  &.is-active {
    .pill {
      background: $ms-color-themePrimary;
    }
    .thumb {
      background: $ms-color-white;
      float: right;
    }
  }

  &:not(.is-active) {
    .pill {
      background: $ms-color-white;
      border-color: $ms-color-neutralSecondary;
    }
    .thumb {
      background: $ms-color-neutralDark;
      float: left;
    }
  }

  .pill {
    position: relative;
    font-size: 20px;
    box-sizing: border-box;
    width: 2.2em;
    height: 1em;
    cursor: pointer;
    align-items: center;
    padding-top: 0px;
    padding-right: 0.2em;
    padding-bottom: 0px;
    padding-left: 0.2em;
    outline: transparent;
    border-radius: 1em;
    transition: all 0.1s ease;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
  }

  .thumb {
    width: 0.5em;
    height: 0.5em;
    background-color: $ms-color-white;
    box-sizing: border-box;
    border-radius: 0.5em;
    transition: all 0.1s ease;
    border-color: transparent;
    border-width: 0.28em;
    border-style: solid;
  }
}
</style>
