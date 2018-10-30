<template>
  <div>
    <VActivityItem>
      <template slot="icon">
        <VIcon icon-name="Message" />
      </template>
      <template slot="description">
        <VLink class="nameText">Philippe Lampros</VLink> commented
      </template>
      <template slot="comment">
        Hello! I am making a comment and mentioning
        <VLink class="nameText">@Anđela Debeljak</VLink>
        in the text of the comment.
      </template>
      <template slot="timestamp">
        Just now
      </template>
    </VActivityItem>

    <VActivityItem>
      <template slot="icon">
        <VIcon icon-name="Delete" />
      </template>
      <template slot="description">
        <VLink class="nameText">Lisha Refai</VLink> deleted
        <span class="nameText">DocumentTitle.docx</span>
      </template>
      <template slot="timestamp">
        2 hours ago
      </template>
    </VActivityItem>

    <VActivityItem>
      <template slot="icon">
        <VIcon icon-name="FabricMovetoFolder" />
      </template>
      <template slot="description">
        <VLink class="nameText">Julian Arvidsson</VLink> moved
        <VLink class="nameText">PresentationTitle.pptx</VLink> to
        <VLink class="nameText">Destination Folder</VLink>
      </template>
      <template slot="timestamp">
        Yesterday
      </template>
    </VActivityItem>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.ms-ActivityItem .nameText {
  font-weight: bold;
}
</style>
