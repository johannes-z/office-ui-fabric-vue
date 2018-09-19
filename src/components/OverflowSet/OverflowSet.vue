<template>
  <div class="ms-OverflowSet root">
    <div v-for="(item, index) in items"
         :key="item.key"
         class="ms-OverflowSet-item item">
      <VLink :href="item.href"
             class="overflowLinks">{{ item.name }}</VLink>
    </div>

    <div class="ms-OverflowSet-overflowButton overflowButton">
      <VIconButton icon-name="More"
                   class="overflowButton" />
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
@import "./OverflowSet";

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
