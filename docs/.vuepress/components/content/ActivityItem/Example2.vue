<template>
  <div>
    <!--  -->
    <VActivityItem :activity-personas="activityPersonas">
      <template slot="description">
        <VLink class="nameText">Jack Howden</VLink> renamed
        <span class="nameText">DocumentTitle.docx</span>
      </template>
      <template slot="comment">
        Hello, this is the text of my basic comment!
      </template>
      <template slot="timestamp">
        23m ago
      </template>
    </VActivityItem>

    <VActivityItem :activity-personas="activityPersonas2">
      <template slot="description">
        <VLink class="nameText">Javiera Márquez</VLink> and
        <VLink class="nameText">Amelia Povalіy</VLink> edited
        <span class="nameText">SpreadsheetTitle.xlsx</span>
      </template>
      <template slot="timestamp">
        9:27 am
      </template>
    </VActivityItem>
  </div>

</template>

<script>
export default {
  data () {
    return {
      activityPersonas: [{
        imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png'
      }],
      activityPersonas2: [{
          imageInitials: 'JM',
          text: 'Javiera Márquez'
        },{
        imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'
      }]
    }
  }
}
</script>

<style lang="scss">
.ms-ActivityItem .nameText {
  font-weight: bold;
}
</style>
