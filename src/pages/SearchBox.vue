<template>
  <div>
    <h1 class="ms-font-xxl">SearchBox</h1>

    <Label>Default SearchBox</Label>
    <search-box />
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
import { Label, SearchBox } from '../index'

export default {
  components: { Label, SearchBox },
}
</script>
