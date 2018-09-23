<template>
  <div role="menubar" class="ms-FocusZone ms-CommandBar root">

    <!-- search -->
    <!-- <div v-if="isSearchBoxVisible"
         class="ms-CommandBarSearch search">
      <slot :searchPlaceholderText="searchPlaceholderText"
            name="searchBox">
        <SearchBox :underlined="true"
                   style="display: inline-block; width: 208px; max-width: 208px;" />
      </slot>
    </div> -->
    <!-- /search -->

    <!-- items -->
    <div class="ms-CommandBar-primaryCommands primarySet">
      <div v-for="(item, index) in items"
           :key="item.key || index"
           class="ms-CommandBarItem item">
        <VActionButton :icon-name="item.icon"
                       @click.native="onClick($event, item)">
          {{ item.name }}
        </VActionButton>
      </div>
    </div>
    <!-- /items -->

    <!-- farItems -->
    <div class="ms-CommandBar-secondaryCommand secondarySet">
      <div v-for="(item, index) in farItems"
           :key="item.key || index"
           class="ms-CommandBarItem item">
        <VActionButton :icon-name="item.icon"
                       @click.native="onClick($event, item)">
          {{ item.name }}
        </VActionButton>
      </div>
    </div>
    <!-- /farItems -->

  </div>
</template>

<script>
import { SearchBox } from '../SearchBox'
import { Icon } from '../Icon'
import { VActionButton } from '../Button'

export default {
  components: { VActionButton, Icon, SearchBox },
  props: {
    items: {
      type: Array,
      default: () => [],
      dummy: () => [{
        key: 'new',
        name: 'New',
        icon: 'Add',
        href: '#',
        onClick: () => {},
      }],
    },
    farItems: {
      type: Array,
      default: () => [],
      dummy: () => [{
        key: 'sort',
        name: 'Sort',
        icon: 'SortLines',
        href: '#',
        onClick: () => {},
      }],
    },

    isSearchBoxVisible: {
      type: Boolean,
      default: false,
    },
    searchPlaceholderText: {
      type: String,
      default: 'Search...',
    },
  },
  created () {
  },
  methods: {
    onClick (event, item) {
      if (!item.onClick) return
      item.onClick(event)
    },
  },

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

.item {
  flex-shrink: 0;
  display: inherit;
}

.root {
  display: flex;
  background-color: $ms-color-neutralLighter;
  padding-top: 0px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 16px;
  height: 40px;

  .ms-Button:hover {
    background-color: $ms-color-neutralLight;
  }
  .ms-Button,
  .ms-Button:hover {
    color: $ms-color-neutralPrimary;
  }
}

</style>
