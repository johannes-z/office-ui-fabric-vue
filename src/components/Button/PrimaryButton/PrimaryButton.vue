<template>
  <default-button v-bind="$props"
                  :primary="true">
    <div class="ms-Button-textContainer">
      <div class="ms-Button-label">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </default-button>
</template>

<script>
import DefaultButton from '../DefaultButton/DefaultButton.vue'

export default {
  components: { DefaultButton },
  extends: DefaultButton,
}
</script>
