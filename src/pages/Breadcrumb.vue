<template>
  <div>
    <h1 class="ms-font-xxl">Breadcrumb</h1>
    <Breadcrumb :items="items" />
  </div>
</template>

<script>
import { Breadcrumb } from '../index'
export default {
  components: { Breadcrumb },
  data () {
    return {
      items: [
        { text: 'Files', 'key': 'Files' },
        { text: 'This is folder 1', 'key': 'f1' },
        { text: 'This is folder 2', 'key': 'f2' },
        { text: 'This is folder 3', 'key': 'f3' },
        { text: 'This is folder 4', 'key': 'f4' },
        { text: 'This is a folder with a long text', 'key': 'f4' },
        { text: 'This is folder 5', 'key': 'f5', isCurrentItem: true },
      ],
    }
  },
}
</script>
