<template>
  <div class="docs-DropdownExample">
    <VDropdown :options="options"
               v-model="selected"
               label="Basic uncontrolled example" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      options: [
        { key: 'A', text: 'Option a', title: 'I am option a.' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c', disabled: true },
        { key: 'D', text: 'Option d' },
        { key: 'E', text: 'Option e' },
        { key: 'F', text: 'Option f' },
        { key: 'G', text: 'Option g' },
        { key: 'H', text: 'Option h' },
        { key: 'I', text: 'Option i' },
        { key: 'J', text: 'Option j' },
      ],
    }
  },
}
</script>

<style lang="scss">
.docs-DropdownExample {
  max-width: 300px;
}
</style>
