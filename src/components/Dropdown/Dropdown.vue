<template>
  <div ref="container"
       :class="{ rootIsDisabled: disabled }"
       class="ms-Dropdown-container">
    <!-- Label -->
    <VLabel v-if="label"
            class="ms-Dropdown-label">
      {{ label }}
    </VLabel>

    <!-- Dropdown input -->
    <div ref="dropdown"
         :class="{ 'is-disabled': disabled }"
         tabindex="0"
         role="listbox"
         class="ms-Dropdown"
         @click="showCallout = !showCallout">
      <!-- Placeholder -->
      <span v-if="!selectedOptions || selectedOptions.length === 0"
            class="ms-Dropdown-title ms-Dropdown-titleIsPlaceHolder ms-Dropdown-title">
        <span>Select an option</span>
      </span>

      <!-- Selected option -->
      <span v-else
            class="ms-Dropdown-title"
            role="option">
        <span>
          {{ selectedOptions.map(o => o.text).join(multiSelectDelimiter) }}
        </span>
      </span>

      <!-- Caret -->
      <span class="ms-Dropdown-caretDownWrapper">
        <VIcon icon-name="ChevronDown" />
      </span>
    </div>

    <!-- Option Callout -->
    <VCallout v-if="showCallout"
              ref="callout"
              :class="className"
              :do-not-layer="false"
              :is-beak-visible="false"
              :target="$refs.dropdown"
              :container-height="options.length * 32">
      <!-- Dropdown Items -->
      <div class="ms-Dropdown-dropdownItemsWrapper">
        <div role="listbox"
             class="ms-FocusZone ms-Dropdown-items">
          <component v-for="(option, index) in options"
                     :is="multiSelect ? 'VCheckbox' : 'VActionButton'"
                     :key="'dropdownItem-' + index"
                     :title="option.title"
                     :class="{ 'is-disabled': option.disabled }"
                     :value="!!selectedOptions.find(o => o.key === option.key)"
                     class="ms-Dropdown-item"
                     role="option"
                     @click.stop.prevent.native="selectOption(option)">
            <span class="ms-Dropdown-optionText">
              {{ option.text }}
            </span>
          </component>
        </div>
      </div>
    </VCallout>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default () {
        return []
      },
    },
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    multiSelect: {
      type: Boolean,
      default: false,
    },
    multiSelectDelimiter: {
      type: String,
      default: ',',
    },
  },
  data () {
    return {
      showCallout: false,
      selectedOptions: [],
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler (newVal) {
        this.selectedOptions = [...newVal]
      },
    },
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.dismissOnScroll)
    window.removeEventListener('click', this.onGlobalClick)
  },
  created () {
    window.addEventListener('scroll', this.dismissOnScroll)
    window.addEventListener('click', this.onGlobalClick)
  },
  methods: {
    onGlobalClick (ev) {
      const container = this.$refs.container
      const callout = this.$refs.callout ? this.$refs.callout.$el : null
      let target = ev.target

      while (target.parentNode !== document) {
        const parent = target.parentNode
        if (parent === container || parent === callout) return
        target = target.parentNode
      }
      this.showCallout = false
    },
    dismissOnScroll (ev) {
      this.showCallout = false
    },
    selectOption (option) {
      if (!this.multiSelect) {
        this.selectedOptions = [option]
        // dismiss on single select after selection
        this.showCallout = false
      } else {
        const index = this.selectedOptions.findIndex(o => o.key === option.key)
        if (index > -1) {
          this.selectedOptions.splice(index, 1)
        } else {
          this.selectedOptions.push(option)
        }
      }
      this.$emit('input', this.selectedOptions.sort((a, b) => (a.text || a.key).localeCompare((b.text || b.key), 'en', { numeric: true })))
    },
  },
}
</script>

<style lang="scss">
@import "./Dropdown";

.rootIsDisabled {
  pointer-events: none;
}
.ms-Dropdown-item.is-disabled {
  pointer-events: none;
}

.ms-Dropdown-item {
  .ms-Label.ms-Checkbox-label {
    padding: 0;
  }
}
</style>
