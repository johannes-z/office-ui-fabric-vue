<template>
  <base-button v-bind="$props"
               class="ms-Button--compound">
    <div class="ms-Button-textContainer textContainer">
      <div class="ms-Button-label label">
        {{ text }}
      </div>
      <div class="ms-Button-description description">
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

<style lang="scss" scoped>
@import "../../../common/common";

.root {
  max-width: 280px;
  min-height: 72px;

  .textContainer {
    text-align: left;

    .label {
      margin: 0;
      margin-bottom: 5px;
    }

    .description {
      font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 12px;
      font-weight: 400;
      line-height: 100%;
      color: rgb(102, 102, 102);
    }
  }
}

.ms-Button--primary .textContainer .description {
  color: $ms-color-white;
}
</style>
