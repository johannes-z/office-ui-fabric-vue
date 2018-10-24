<template>
  <div>

    <VChoiceGroup v-model="selected"
                  :options="options"
                  :label="label"
                  :required="required"
                  @onChange="onChange"/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      label: 'Pick one',
      required: true,
      selected: 'B',
      options: [
        {
          key: 'A',
          text: 'Option A',
        },
        {
          key: 'B',
          text: 'Option B',
        },
        {
          key: 'C',
          text: 'Option C',
          disabled: true,
        },
        {
          key: 'D',
          text: 'Option D',
          disabled: true,
        },
      ],
    }
  },
  methods: {
    onChange (option) {
      console.log(option)
    },
  },
}
</script>

<style>

</style>
