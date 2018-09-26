<template>
  <div>

    <overflow-set
      :items="[
        {
          key: 'item1',
          name: 'Link 1',
          ariaLabel: 'New. Use left and right arrow keys to navigate',
          onClick: () => {
            return;
          }
        },
        {
          key: 'item2',
          name: 'Link 2',
          onClick: () => {
            return;
          }
        },
        {
          key: 'item3',
          name: 'Link 3',
          onClick: () => {
            return;
          }
        }
      ]"
      :overflow-items="[
        {
          key: 'item4',
          name: 'Overflow Link 1',
          onClick: () => {
            return;
          }
        },
        {
          key: 'item5',
          name: 'Overflow Link 2',
          onClick: () => {
            return;
          }
        }
      ]"
    />
  </div>
</template>

<script>
import { OverflowSet } from '../index'
export default {
  components: { OverflowSet },
}
</script>
