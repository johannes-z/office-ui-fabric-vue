<template>
  <div>
    <VToggle v-model="toggle1"
             label="">
      Enabled and checked
      <template slot="onText">On</template>
      <template slot="offText">Off</template>
    </VToggle>

    <VToggle v-model="toggle2"
             label="Enabled and unchecked">
      Enabled and unchecked
      <template slot="onText">On</template>
      <template slot="offText">Off</template>
    </VToggle>

    <VToggle v-model="toggle3"
             :disabled="true"
             label="Disabled and checked"
             on-text="On"
             off-text="Off" />

    <v-toggle v-model="toggle4"
              :disabled="true"
              label="Disabled and unchecked"
              on-text="On"
              off-text="Off" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle1: true,
      toggle2: false,
      toggle3: true,
      toggle4: false,
    }
  },
}
</script>
