<template>
  <base-button v-bind="$props"
               class="ms-Button--compound">
    <div class="ms-Button-textContainer">
      <div class="ms-Button-label">
        {{ text }}
      </div>
      <div class="ms-Button-description">
        {{ secondaryText }}
      </div>
    </div>
  </base-button>
</template>

<script>
import BaseButton from '../BaseButton.vue'

export default {
  components: { BaseButton },
  extends: BaseButton,
  props: {
    secondaryText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import "../../../common/common";

.ms-Button--compound {
  max-width: 280px;
  min-height: 72px;

  padding: 20px;
  max-width: 280px;
  min-height: 72px;
  height: auto;

  .ms-Button-textContainer {
    text-align: left;
  }

  .ms-Button-label {
    margin: 0 0 5px 0;
  }

  .ms-Button-description {
    font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
      -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    color: rgb(102, 102, 102);
  }
}

.ms-Button--primary .ms-Button-description {
  color: $ms-color-white;
}
</style>
