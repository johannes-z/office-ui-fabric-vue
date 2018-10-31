<template>
  <VDropdown :options="options"
             v-model="value" />
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options: [
        { title: 'Entry #1', text: 'Entry #1', key: 'Entry #1' },
        { title: 'Entry #2', text: 'Entry #2', key: 'Entry #2' },
        { title: 'Entry #3', text: 'Entry #3', key: 'Entry #3' },
      ],
    }
  },
}
</script>

<style>
</style>
