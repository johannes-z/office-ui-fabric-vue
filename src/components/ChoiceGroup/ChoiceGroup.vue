<template>
  <div class="ms-ChoiceFieldGroup">
    <VLabel v-if="label"
            :required="required">
      {{ label }}
    </VLabel>

    <div class="ms-ChoiceFieldGroup-flexContainer">
      <VChoiceField v-for="(option, index) in options"
                    :key="index"
                    :index="index"
                    v-model="selectedIndex"
                    :option="option"
                    @input="onChange" />
    </div>
  </div>
</template>

<script>
import { VLabel } from '../Label/index.js'
import VChoiceField from './ChoiceField.vue'

export default {
  components: { VLabel, VChoiceField },
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default () {
        return []
      },
    },
  },
  data () {
    return {
      selectedIndex: this.options.findIndex(o => o.key === this.value),
    }
  },
  methods: {
    onChange (index) {
      const option = this.options[index]
      const { key, text } = option
      this.$emit('input', key || text)
      this.$emit('onChange', option)
    },
  },
}
</script>

<style lang="scss">
.ms-ChoiceFieldGroup {
  font-size: 14px;
  font-weight: 400;
  display: block;
}
</style>
