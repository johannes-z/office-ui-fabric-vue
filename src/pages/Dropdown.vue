<template>
  <div class="docs-DropdownExample">
    <VDropdown v-model="selected"
               :options="options"
               label="Basic uncontrolled example" />
    <VDropdown v-model="selected"
               :options="options"
               disabled
               label="Basic uncontrolled example" />
    <VDropdown v-model="selected"
               :options="options"
               label="Multiselect uncontrolled example"
               multi-select />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
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
