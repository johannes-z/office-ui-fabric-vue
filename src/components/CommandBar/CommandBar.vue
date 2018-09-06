<template>
  <div class="ms-CommandBar root">

    <!-- search -->
    <div v-if="isSearchBoxVisible"
         class="ms-CommandBarSearch search">
      <slot :searchPlaceholderText="searchPlaceholderText"
            name="searchBox">
        <SearchBox :underlined="true"
                   style="display: inline-block; width: 208px; max-width: 208px;" />
      </slot>
    </div>
    <!-- /search -->

    <div role="menubar"
         class="ms-FocusZone container"
         data-focuszone-id="FocusZone21">

      <!-- items -->
      <div class="ms-CommandBar-primaryCommands primarySet">
        <div v-for="(item, index) in items"
             :key="item.key || index"
             class="ms-CommandBarItem item">
          <a :href="item.href"
             class="ms-CommandBarItem-link itemLink"
             @click="onClick($event, item)">
            <icon :icon-name="item.icon"
                  class="itemIconColor" />
            <span class="ms-CommandBarItem-commandText itemCommandText">
              {{ item.name }}
            </span>
          </a>
        </div>
      </div>
      <!-- /items -->

      <!-- farItems -->
      <div class="ms-CommandBar-secondaryCommand secondarySet">
        <div v-for="(item, index) in farItems"
             :key="item.key || index"
             class="ms-CommandBarItem item">
          <a :href="item.href"
             class="ms-CommandBarItem-link itemLink"
             @click="onClick($event, item)">
            <icon :icon-name="item.icon"
                  class="itemIconColor" />
            <span v-if="item.name"
                  class="ms-CommandBarItem-commandText itemCommandText">
              {{ item.name }}
            </span>
          </a>
        </div>
      </div>
      <!-- /farItems -->

    </div>
  </div>
</template>

<script>
import { SearchBox } from '../SearchBox'
import { Icon } from '../Icon'

export default {
  components: { Icon, SearchBox },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
      dummy: () => [{
        key: 'new',
        name: 'New',
        icon: 'Add',
        href: '#',
        onClick: () => {}
      }]
    },
    farItems: {
      type: Array,
      default: () => [],
      dummy: () => [{
        key: 'sort',
        name: 'Sort',
        icon: 'SortLines',
        href: '#',
        onClick: () => {}
      }]
    },

    isSearchBoxVisible: {
      type: Boolean,
      default: false
    },
    searchPlaceholderText: {
      type: String,
      default: 'Search...'
    }
  },
  created () {
    console.log(this.$scopedSlots)
    console.log(this.$slots)
    console.log(this)
  },
  methods: {
    onClick (event, item) {
      if (!item.onClick) return
      item.onClick(event)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../common/common";
@import "../../common/focusBorder";

.primarySet {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
    align-items: stretch;
}

.secondarySet {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    align-items: stretch;
}

.root-72 {
    display: flex;
    background-color: rgb(244, 244, 244);
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    height: 40px;
}

</style>
