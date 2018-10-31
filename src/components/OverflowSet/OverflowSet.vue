<template>
  <div class="ms-OverflowSet">
    <slot>
      <div v-for="item in items"
           :key="item.key"
           class="ms-OverflowSet-item">
        <VLink :href="item.href"
               class="overflowLinks">{{ item.name }}</VLink>
      </div>
    </slot>

    <div class="ms-OverflowSet-overflowButton">
      <slot name="overflow">
        <VIconButton icon-name="More"
                     class="overflowButton" />
      </slot>
    </div>
  </div>
</template>

<script>
import { VIconButton } from '../Button'
import { VLink } from '../Link'

export default {
  components: { VIconButton, VLink },
  props: {
    items: {
      type: Array,
      default () {
        return []
      },
    },
    overflowItems: {
      type: Array,
      default () {
        return []
      },
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common";

.ms-OverflowSet {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}

.rootVertical {
  flex-direction: column;
}

.ms-OverflowSet-item {
  flex-shrink: 0;
  display: inherit;
}

html[dir="ltr"] {
  .overflowLinks {
    margin-right: 10px;
  }
}

html[dir="rtl"] {
  .overflowLinks {
    margin-left: 10px;
  }
}
</style>
