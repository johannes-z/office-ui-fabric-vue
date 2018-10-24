<template>
  <div>
    <Label>Default SearchBox</Label>
    <search-box v-model="searchQuery1" />
    <br>

    <Label>Underlined SearchBox</Label>
    <search-box :underlined="true" />
    <br>

    <Label>Disabled SearchBoxes</Label>
    <search-box disabled />
    <br>
    <search-box :underlined="true" disabled />

  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery1: ''
    }
  }
}
</script>
