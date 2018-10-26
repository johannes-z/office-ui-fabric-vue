<template>
  <div>
    <h2 class="ms-font-xl">Default SearchBox</h2>
    <search-box v-model="searchQuery1" />
    <br>

    <h2 class="ms-font-xl">Underlined SearchBox</h2>
    <search-box underlined />
    <br>

    <h2 class="ms-font-xl">Disabled SearchBoxes</h2>
    <search-box disabled />
    <br>
    <search-box disabled underlined />
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
