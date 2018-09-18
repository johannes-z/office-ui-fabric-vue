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
      type: HTMLElement,
      required: true,
    },
  },
}
