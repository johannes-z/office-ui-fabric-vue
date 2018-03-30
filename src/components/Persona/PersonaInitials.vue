<template>
  <div :style="{ 'background-color': initialsColor }"
       class="ms-Persona-initials">
    <span>{{ initials }}</span>
  </div>
</template>

<script>
import { initialsColorPropToColorCode } from '../js/util/initials.js'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    initialsColor () {
      return initialsColorPropToColorCode({
        primaryText: this.name,
      })
    },
    initials () {
      let name = this.name
      let split = name.split(' ')
      let first = split[0]
      let last = split[split.length - 1]
      if (split.length > 1) {
        return first[0] + last[0]
      }
      return first[0]
    },
  },
}
</script>
