<template>
  <VLayer>
    <div :class="[{ ['rootIsOpen']: isOpen, ['is-open']: isOpen }]"
         class="ms-Panel rootIsSmall">
      <div class="ms-Panel-main">
        <div class="ms-Panel-commands">
          <div class="ms-Panel-navigation">
            <VIconButton class="ms-Panel-closeButton ms-PanelAction-close"
                         icon-name="Cancel"
                         @click.native.prevent.stop="onDismiss" />
          </div>
        </div>

        <div class="ms-Panel-contentInner">
          <div class="ms-Panel-header">
            <div class="ms-Panel-headerText">
              <slot name="header">
                {{ headerText }}
              </slot>
            </div>
          </div>
          <div class="ms-Panel-content">
            <slot name="body" />
          </div>
          <div class="ms-Panel-footer">
            <div class="ms-Panel-footerInner">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </VLayer>
</template>

<script>
import { VIconButton } from '../Button/'
import { VIcon } from '../Icon'
import { VLayer } from '../Layer'

import { getDocument } from '../../utilities/dom'

export default {
  components: { VIconButton, VIcon, VLayer },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    headerText: {
      type: String,
      default: null,
    },
  },
  data () {
    return {

    }
  },
  watch: {
    isOpen (newVal) {
      const doc = getDocument()

      if (newVal) doc.body.classList.add(this.$style.css)
      else doc.body.classList.remove(this.$style.css)
    },
  },
  mounted () {
    if (!this.isOpen) return
    const doc = getDocument()
    doc.body.classList.add(this.$style.css)
  },
  beforeDestroy () {
    const doc = getDocument()
    doc.body.classList.remove(this.$style.css)
  },
  methods: {
    onDismiss (event) {
      this.$emit('onDismiss', event)
    },
  },
}
</script>

<style lang="scss" module>
.css {
  overflow: hidden !important;
}
</style>

<style lang="scss">
@import "../../common/common";

.ms-Panel {
  z-index: 600;

  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.ms-Panel.rootIsOpen .ms-Panel-main {
  pointer-events: auto;
}

*:not([dir="ltr"]) .ms-Panel-main,
[dir="ltr"] .ms-Panel-main {
  right: 0;
}

.ms-Panel-main {
  background-color: #fff;
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (min-width: 480px) {
  .ms-Panel.rootIsSmall .ms-Panel-main {
    width: 340px;
  }
}

@media (min-width: 1024px) {
  .ms-Panel-header {
    margin-top: 30px !important;
  }
}

.ms-Panel-navigation {
  padding: 0 5px;
  height: 44px;
  display: flex;
  justify-content: flex-end;
}

.ms-Panel-closeButton {
  height: auto;
  width: 44px;
  color: $ms-color-neutralSecondary;
  font-size: 16px;

  &:hover {
    color: $ms-color-neutralPrimary;
    background: transparent;
  }
}

.ms-Panel-headerText {
  font-size: 21px;
  font-weight: 100;
  color: #333;
  line-height: 32px;
  margin: 0;
}

.ms-Panel-header {
  margin: 14px 0;
  flex-grow: 0;
}

.ms-Panel-footer {
  flex-grow: 0;
}

@media (min-width: 768px) {
  .ms-Panel-header,
  .ms-Panel-content,
  .ms-Panel-footerInner {
    padding-left: 32px;
    padding-right: 32px;
  }
}

.ms-Panel-contentInner {
  top: 44px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
}

.ms-Panel-footerInner {
  padding-bottom: 20px;
  padding-top: 20px;
}

@media (min-width: 480px) {
  *:not([dir="ltr"]) .ms-Panel-main,
  [dir="ltr"] .ms-Panel-main {
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;

    box-shadow: -30px 0px 30px -30px rgba(0, 0, 0, 0.2);
  }
}
</style>
