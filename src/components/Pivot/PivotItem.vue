<template>
  <VActionButton :class="{ isSelected }"
                 class="ms-Pivot-link"
                 @click.native="$emit('update:selectedIndex', index)">
    {{ linkText }}
  </VActionButton>
</template>

<script>
import { VActionButton } from '../../index.js'

export default {
  components: { VActionButton },
  props: {
    linkText: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isSelected () {
      return this.selectedIndex === this.index
    },
  },
}
</script>

<style lang="scss">

.ms-Pivot-link {
  position: relative;
  height: auto;

  &.isSelected {
    .ms-Button-label {
      font-weight: bold;
    }

    &:before {
      background-color: transparent;
      bottom: 0px;
      content: "";
      height: 2px;
      left: 8px;
      position: absolute;
      right: 8px;
      box-sizing: border-box;
      transition: background-color 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s;
      border-bottom: 2px solid rgb(0, 120, 212);
    }
  }

  .ms-Button-label {
    line-height: 40px;
  }
}

</style>
