<template>
  <component :is="tag" :class="buttonStyle" class="ms-Button">
    <span v-if="icon" class="ms-Button-icon">
      <i :class="iconClass" class="ms-Icon"/>
    </span>
    <span class="ms-Button-label">{{ label }}</span>
    <span v-if="description" class="ms-Button-description">
      {{ description }}
    </span>
    <span v-if="dropdownIcon" class="ms-Button-dropdownIcon">
      <i :class="dropdownIconClass" class="ms-Icon"/>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: value => value === 'a' || value === 'button',
    },
    customClasses: {
      type: Array,
      default: () => [],
    },
    modifier: null,
    label: String,
    icon: String,
    description: String,
    dropdownIcon: String,
  },
}
</script>
