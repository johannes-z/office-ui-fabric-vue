<template>
  <div ref="commandbar"
       role="menubar"
       class="ms-FocusZone ms-CommandBar">
    <!-- items -->
    <div class="ms-CommandBar-primaryCommands">
      <div v-for="(item, index) in items"
           v-show="index < overflowIndex"
           ref="items"
           :key="item.key || index"
           :class="item.className"
           :title="!item.label ? item.title : null"
           class="ms-CommandBarItem">
        <VActionButton :icon-name="item.icon"
                       :disabled="item.disabled"
                       @click.native="onClick($event, item)">
          <span v-if="!hideLabels && item.name">{{ item.name }}</span>
        </VActionButton>
      </div>

      <div ref="overflowButton"
           class="ms-CommandBarItem">
        <VActionButton :style="{ visibility: hasOverflow ? 'visible' : 'hidden' }"
                       icon-name="More"
                       @click.native="showCallout = !showCallout" />
      </div>
    </div>
    <!-- /items -->

    <!-- farItems -->
    <div ref="secondary"
         class="ms-CommandBar-secondaryCommand">
      <div v-for="(item, index) in farItems"
           :key="item.key || index"
           :class="item.className"
           :title="!item.label ? item.title : null"
           class="ms-CommandBarItem">
        <VActionButton :icon-name="item.icon"
                       :disabled="item.disabled"
                       @click.native="onClick($event, item)">
          <span v-if="!hideLabels && item.name">{{ item.name }}</span>
        </VActionButton>
      </div>
    </div>
    <!-- /farItems -->

    <!-- Option Callout -->
    <VCallout v-if="showCallout"
              :do-not-layer="false"
              :is-beak-visible="false"
              :target="$refs.overflowButton"
              :container-height="overflowItems.length * 32"
              width="auto"
              @onBlur="showCallout = false">
      <!-- Dropdown Items -->
      <div class="ms-Dropdown-dropdownItemsWrapper">
        <div role="listbox"
             class="ms-FocusZone ms-Dropdown-items">
          <div v-for="(item, index) in overflowItems"
               :key="item.key || index"
               :class="item.className"
               :title="!item.label ? item.title : null"
               class="ms-CommandBarItem">
            <VActionButton :icon-name="item.icon"
                           :disabled="item.disabled"
                           @click.native="onClick($event, item)">
              <span v-if="!hideLabels && item.name">{{ item.name }}</span>
            </VActionButton>
          </div>
        </div>
      </div>
    </VCallout>
  </div>
</template>

<script>
import throttle from '@/utilities/throttle'

const padding = 16
const itemPadding = 4

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
  data () {
    return {
      secondaryWidth: 0,
      hideLabels: false,
      overflowWidth: 0,
      overflowSet: [],
      overflowIndex: this.items.length,
      itemWidth: [],
      showCallout: false,
    }
  },
  computed: {
    primaryItems () {
      return this.items.slice(0, this.overflowIndex)
    },
    overflowItems () {
      return this.items.slice(this.overflowIndex, this.items.length)
    },
    hasOverflow () {
      return this.overflowIndex < this.items.length
    },
  },
  watch: {
    items: {
      deep: true,
      handler (newVal) {
        this.overflowIndex = newVal.length
        this.$nextTick(() => {
          this.cacheItemWidth()
          this.collapseItems()
        })
      },
    },
    farItems: {
      deep: true,
      handler (newVal) {
        this.$nextTick(() => {
          this.updateSecondaryWidth()
          this.collapseItems()
        })
      },
    },
  },
  beforeDestroy () {
    // this.$refs.commandbar.$off('resize', this.onResize)
    window.removeEventListener('resize', this.onResize)
  },
  mounted () {
    this.overflowWidth = this.$refs.overflowButton.offsetWidth

    this.updateSecondaryWidth()
    this.cacheItemWidth()
    this.collapseItems()

    window.addEventListener('resize', throttle(this.onResize, 33))
  },
  methods: {
    updateSecondaryWidth () {
      if (!this.$refs.secondary) return
      let width = this.$refs.secondary.offsetWidth
      if (width === 0) return
      this.secondaryWidth = width + this.farItems.length * itemPadding
    },
    cacheItemWidth () {
      if (!this.$refs.items) return
      this.itemWidth = []
      let items = this.$refs.items
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        this.itemWidth.push(item.offsetWidth + itemPadding)
      }
    },
    collapseItems () {
      let spaceLeft = this.$refs.commandbar.offsetWidth -
        padding * 2 -
        this.secondaryWidth
      this.hideLabels = spaceLeft < 0

      let itemWidth = this.itemWidth
      let i
      for (i = 0; i < itemWidth.length; i++) {
        const width = itemWidth[i]
        spaceLeft -= width
        if (spaceLeft <= 0) {
          this.overflowIndex = i
          return
        }
      }
      this.overflowIndex = this.items.length
    },
    onResize () {
      this.collapseItems()
    },
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
  overflow: hidden;

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

.ms-Callout .ms-Button--action.ms-Button-command {
  width: 100%;
}
</style>
