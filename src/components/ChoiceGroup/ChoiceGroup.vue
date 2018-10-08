<template>
  <div class="ms-ChoiceFieldGroup">
    <VLabel v-if="label"
            :required="required">{{ label }}</VLabel>

    <div class="ms-ChoiceFieldGroup-flexContainer">
      <VChoiceField v-for="(option, index) in value"
                    :key="index"
                    :index="index"
                    v-model="selectedIndex"
                    :option="option" />
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
      type: Array,
      default () {
        return []
      },
    },
    onChange: {
      type: Function,
      default () {},
    },
  },
  data () {
    return {
      selectedIndex: -1,
    }
  },
  watch: {
    selectedIndex (newVal, oldVal) {
      this.onChange(this.value[newVal])
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
