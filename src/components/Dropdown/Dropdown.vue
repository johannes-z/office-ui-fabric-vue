<template>
  <div class="ms-Dropdown-container">
    <!-- Label -->
    <VLabel v-if="label"
            class="ms-Dropdown-label">
      {{ label }}
    </VLabel>

    <!-- Dropdown input -->
    <div ref="dropdown"
         tabindex="0"
         role="listbox"
         class="ms-Dropdown"
         @click="showCallout = !showCallout">

      <!-- Placeholder -->
      <span v-if="!selectedOption"
            class="ms-Dropdown-title ms-Dropdown-titleIsPlaceHolder ms-Dropdown-title">
        <span>Select an option</span>
      </span>

      <!-- Selected option -->
      <span v-else
            class="ms-Dropdown-title"
            role="option">
        <span>
          {{ selectedOption.text }}
        </span>
      </span>

      <!-- Caret -->
      <span class="ms-Dropdown-caretDownWrapper">
        <VIcon icon-name="ChevronDown" />
      </span>
    </div>

    <!-- Option Callout -->
    <VCallout v-if="showCallout"
              :do-not-layer="false"
              :is-beak-visible="false"
              :target="$refs.dropdown"
              @onBlur="showCallout = false">

      <!-- Dropdown Items -->
      <div class="ms-Dropdown-dropdownItemsWrapper">
        <div role="listbox"
             class="ms-FocusZone ms-Dropdown-items">

          <VActionButton v-for="(option, index) in options"
                         :key="'dropdownItem-' + index"
                         :title="option.title"
                         class="ms-Dropdown-item"
                         role="option"
                         @click.native="selectOption(option)">
            <span class="ms-Dropdown-optionText">
              {{ option.text }}
            </span>
          </VActionButton>

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
      type: String,
      default: null,
    },
  },
  data () {
    return {
      showCallout: false,
      onBlur: () => {
        this.showCallout = false
      },
    }
  },
  computed: {
    selectedOption () {
      return this.options.find(o => o.key === this.value)
    },
  },
  methods: {
    selectOption (option) {
      this.$emit('input', option.key || option.text)
      this.showCallout = false
    },
  },
}
</script>

<style lang="scss">
@import "./Dropdown";
</style>
