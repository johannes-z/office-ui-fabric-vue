<template>
  <div>
    <h1 class="ms-font-xxl">ChoiceGroup</h1>

    <h2 class="ms-font-xl">Default ChoiceGroup</h2>

    <VChoiceGroup v-model="options"
                  :label="label"
                  :required="required"
                  :on-change="onChange"/>

    <h2 class="ms-font-xl">ChoiceGroup with dropdown</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      label: 'Pick one',
      required: true,
      onChange (option) {
        console.dir(option)
      },
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
}
</script>

<style>

</style>
