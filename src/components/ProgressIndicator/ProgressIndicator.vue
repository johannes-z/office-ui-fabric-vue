<template>
  <div class="ms-ProgressIndicator">
    <div class="ms-ProgressIndicator-itemName">
      {{ label }}
    </div>

    <div class="ms-ProgressIndicator-itemProgress">
      <div class="ms-ProgressIndicator-progressTrack"/>
      <div :class="classObj"
           :style="{ width: `${percentComplete < 0 ? 0 : percentComplete}%` }"
           class="ms-ProgressIndicator-progressBar"/>
    </div>

    <div class="ms-ProgressIndicator-itemDescription">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    percentComplete: {
      type: Number,
      default: null,
    },
  },
  computed: {
    classObj () {
      return {
        indeterminate: this.percentComplete == null,
        smoothTransition: this.percentComplete != null,
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../common/common.scss';

// ProgressIndicator Styles
$ProgressIndicatorMarginBetweenText: 8px;
$ProgressIndicatorButtonsWidth: 218px;
$ProgressIndicatorTextHeight: 18px;

.ms-ProgressIndicator {
  font-weight: $ms-font-weight-regular;
}

.ms-ProgressIndicator-itemName {
  color: $ms-color-neutralPrimary;
  font-size: $ms-font-size-m;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-top: $ProgressIndicatorMarginBetweenText / 2;
  line-height: $ProgressIndicatorTextHeight + 2;
}

.ms-ProgressIndicator-itemDescription {
  color: $ms-color-neutralSecondaryAlt;
  font-size: $ms-font-size-xs;
  line-height: $ProgressIndicatorTextHeight;
}

.ms-ProgressIndicator-itemProgress {
  position: relative;
  overflow: hidden;
  height: 2px;
  padding: $ProgressIndicatorMarginBetweenText 0;
}

.ms-ProgressIndicator-progressTrack {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: $ms-color-neutralLight;
  @include high-contrast {
    border-bottom: 1px solid WindowText;
  }
}

.ms-ProgressIndicator-progressBar {
  background-color: $ms-color-themePrimary;
  height: 2px;
  position: absolute;
  transition: width .3s ease;
  width: 0;
  &.indeterminate {
    position: absolute;
    min-width: 33%;
    background: linear-gradient(to right, transparent 0%, $ms-color-themePrimary 50%, transparent 100%);
    animation: indeterminateProgress 3s infinite;
  }
  &.smoothTransition {
    transition-property: width;
    transition-timing-function: linear;
    transition-duration: 150ms;
  }

  @include high-contrast {
    background-color: WindowText;
  }
  @include RTL {
    &.indeterminate {
      animation: indeterminateProgressRTL 3s infinite;
    }
  }
}

@keyframes indeterminateProgress {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}

@keyframes indeterminateProgressRTL {
  0% {
    right: -30%;
  }
  100% {
    right: 100%;
  }
}
</style>
