<template>
  <div>
    <VDropdown :options="options"
               v-model="value" />

    <VDropdown :options="options"
               v-model="value"
               disabled />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options: [
        { title: 'Entry #0', text: 'Entry #0', key: 'Entry #0' },
        { title: 'Entry #1', text: 'Entry #1', key: 'Entry #1' },
        { title: 'Entry #2', text: 'Entry #2', key: 'Entry #2' },
        { title: 'Entry #3', text: 'Entry #3', key: 'Entry #3', disabled: true },
        { title: 'Entry #4', text: 'Entry #4', key: 'Entry #4' },
        { title: 'Entry #5', text: 'Entry #5', key: 'Entry #5' },
        { title: 'Entry #6', text: 'Entry #6', key: 'Entry #6' },
        { title: 'Entry #7', text: 'Entry #7', key: 'Entry #7' },
        { title: 'Entry #8', text: 'Entry #8', key: 'Entry #8' },
        { title: 'Entry #9', text: 'Entry #9', key: 'Entry #9' },
      ],
    }
  },
}
</script>

<style>
</style>
