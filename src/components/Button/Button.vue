<template>
  <button class="ms-Button" :class="buttonStyle">
    <span class="ms-Button-icon" v-if="icon">
      <i class="ms-Icon" :class="iconClass"></i>
    </span>
    <span class="ms-Button-label">{{ label }}</span>
    <span class="ms-Button-description" v-if="description">
      {{ description }}
    </span>
    <span class="ms-Button-dropdownIcon" v-if="dropdownIcon">
      <i class="ms-Icon" :class="dropdownIconClass"></i>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    tag: String,
    customClasses: {
      type: Array,
      default: () => []
    },
    modifier: null,
    label: String,
    icon: String,
    description: String,
    dropdownIcon: String
  }
}
</script>
