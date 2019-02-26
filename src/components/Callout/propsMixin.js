export default {
  props: {
    width: {
      type: String,
      default: null,
    },
    calloutMaxHeight: {
      type: Number,
      default: null,
    },
    doNotLayer: {
      type: Boolean,
      default: true,
    },
    target: {
      type: typeof window === 'undefined' ? Object : window.HTMLElement,
      required: true,
    },
    isBeakVisible: {
      type: Boolean,
      default: true,
    },
    containerHeight: {
      type: Number,
      default: 0,
    },
  },
}
