export default {
  props: {
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
  },
}
