<template>
  <div>
    <VMessageBar is-multiline>
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>

    <VMessageBar :type="MessageBarType.error"
                 show-dismiss>
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>

    <VMessageBar :type="MessageBarType.blocked">
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>

    <VMessageBar :type="MessageBarType.severeWarning">
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>

    <VMessageBar :type="MessageBarType.success">
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>

    <VMessageBar :type="MessageBarType.warning">
      Info lorem ipsum dolor sit amet, a elit sem interdum consectetur
      adipiscing elit.
      <VLink href="https://www.bing.com">Visit our website.</VLink>
    </VMessageBar>
  </div>
</template>

<script>
import { MessageBarType } from '../../../../../src/components/MessageBar/types'

export default {
  data () {
    return {
      MessageBarType,
    }
  },
}
</script>

<style>
</style>
