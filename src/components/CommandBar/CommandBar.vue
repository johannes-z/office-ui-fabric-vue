<template>
  <div role="menubar"
       class="ms-FocusZone ms-CommandBar">

    <!-- items -->
    <div class="ms-CommandBar-primaryCommands">
      <div v-for="(item, index) in items"
           :key="item.key || index"
           :class="item.className"
           :title="!item.label ? item.title : null"
           class="ms-CommandBarItem">
        <VActionButton :icon-name="item.icon"
                       :disabled="item.disabled"
                       @click.native="onClick($event, item)">
          {{ item.name }}
        </VActionButton>
      </div>
    </div>
    <!-- /items -->

    <!-- farItems -->
    <div class="ms-CommandBar-secondaryCommand">
      <div v-for="(item, index) in farItems"
           :key="item.key || index"
           :class="item.className"
           :title="!item.label ? item.title : null"
           class="ms-CommandBarItem">
        <VActionButton :icon-name="item.icon"
                       :disabled="item.disabled"
                       @click.native="onClick($event, item)">
          {{ item.name }}
        </VActionButton>
      </div>
    </div>
    <!-- /farItems -->

  </div>
</template>

<script>
export default {
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

<style lang="scss">
@import "../../common/common";
@import "../../common/focusBorder";

.ms-CommandBar-primaryCommands {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  align-items: stretch;
}

.ms-CommandBar-secondaryCommand {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: stretch;
}

.ms-CommandBarItem {
  flex-shrink: 0;
  display: inherit;
}

.ms-CommandBar {
  display: flex;
  background-color: $ms-color-neutralLighter;
  padding-top: 0px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 16px;
  height: 40px;

  .ms-Button.is-disabled {
    background-color: $ms-color-neutralLighter;
  }

  .ms-Button:not(.is-disabled):hover {
    background-color: $ms-color-neutralLight;
  }
  .ms-Button,
  .ms-Button:hover {
    color: $ms-color-neutralPrimary;
  }
  .ms-Button {
    height: 40px;
    text-align: left;

    .ms-Button-label {
      min-width: 0;
    }
  }
}
</style>
