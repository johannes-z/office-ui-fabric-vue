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
      type: Object,
      required: true,
    },
    isBeakVisible: {
      type: Boolean,
      default: true,
    },
  },
}
