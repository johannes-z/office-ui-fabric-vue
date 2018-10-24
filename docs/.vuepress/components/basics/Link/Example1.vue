<template>
  <div>
    <span>When a link has an href, </span>
    <VLink href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
      it renders as an anchor tag.
    </VLink>
    <span> Without an href, </span>
    <VLink>the link is rendered as a button</VLink>.
    <span> You can also use the disabled attribute to create a </span>
    <VLink :disabled="true"
          href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
      disabled link
    </VLink>.
  </div>
</template>

<script>
export default {
}
</script>
