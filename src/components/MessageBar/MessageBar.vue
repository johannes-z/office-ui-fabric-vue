<template>
  <div :class="classObj"
       class="ms-MessageBar">
    <div class="ms-MessageBar-content">
      <div class="ms-MessageBar-icon">
        <VIcon :icon-name="icon" />
      </div>
      <div class="ms-MessageBar-text">
        <span class="ms-MessageBar-innerText">
          <slot />
        </span>
      </div>
      <div v-if="showDismiss"
           class="ms-MessageBar-dismissSingleLine">
        <VIconButton icon-name="Clear"
                     class="ms-MessageBar-dismissal" />
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBarType } from './types'

let ICON_MAP = {
  [MessageBarType.info]: 'Info',
  [MessageBarType.warning]: 'Info',
  [MessageBarType.error]: 'ErrorBadge',
  [MessageBarType.blocked]: 'Blocked2',
  [MessageBarType.severeWarning]: 'Warning',
  [MessageBarType.success]: 'Completed',
}

export default {
  props: {
    type: {
      type: Number,
      default: MessageBarType.info,
      validator: value => Object.values(MessageBarType).indexOf(value) > -1,
    },
    isSingleline: {
      type: Boolean,
      default: false,
    },
    showDismiss: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon () {
      return ICON_MAP[this.type]
    },
    classObj () {
      return {
        'ms-MessageBar-singleline': this.isSingleline,
        'ms-MessageBar--warning': this.type === MessageBarType.warning,
        'ms-MessageBar--success': this.type === MessageBarType.success,
        'ms-MessageBar--severeWarning': this.type === MessageBarType.severeWarning,
        'ms-MessageBar--blocked': this.type === MessageBarType.blocked,
        'ms-MessageBar--error': this.type === MessageBarType.error,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common.scss";

.ms-MessageBar {
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  color: $ms-color-neutralPrimary;
  min-height: 32px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  word-break: break-word;
  flex-direction: column;
  background: rgb(244, 244, 244);

  .ms-Link {
    font-weight: 400;
  }
}

.ms-MessageBar--blocked,
.ms-MessageBar--error {
  background: rgba(232, 17, 35, 0.2);

  .ms-Icon {
    color: $ms-color-error;
  }
}

.ms-MessageBar--severeWarning {
  background: rgba(234, 67, 0, 0.2);

  .ms-Icon {
    color: $ms-color-severeWarning;
  }
}

.ms-MessageBar--success {
  background: rgba(186, 216, 10, 0.2);

  .ms-Icon {
    color: $ms-color-green;
  }
}

.ms-MessageBar--warning {
  background: rgba(255, 185, 0, 0.2);

  .ms-Icon {
    color: $ms-color-neutralPrimary;
  }
}

.ms-MessageBar-singleline {
  .ms-MessageBar-innerText {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.ms-MessageBar-content {
  display: flex;
  line-height: normal;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
}

.ms-MessageBar-icon {
  font-size: 16px;
  min-width: 16px;
  min-height: 16px;
  display: flex;
  color: $ms-color-neutralSecondary;
  flex-shrink: 0;
  margin-top: 16px;
  margin-right: 0px;
  margin-bottom: 16px;
  margin-left: 16px;
}

.ms-MessageBar-text {
  min-width: 0px;
  display: flex;
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-left: 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  font-weight: 400;
}

.ms-MessageBar-innerText {
  line-height: 16px;
}

.ms-MessageBar-dismissSingleLine {
  display: flex;
}

.ms-MessageBar-dismissal {
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: rgb(51, 51, 51);
  flex-shrink: 0;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  margin-left: 0px;
  user-select: none;
  outline: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  border-radius: 0px;

  .ms-Icon {
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    color: $ms-color-neutralPrimary;
  }
}
</style>
