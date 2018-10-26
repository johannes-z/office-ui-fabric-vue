<template>
  <div>
    <VLabel>Size 10 Persona, with no presence</VLabel>
    <VPersona v-bind="examplePersona" :size="9" />

    <VLabel>Size 24 Persona, with no presence</VLabel>
    <VPersona v-bind="examplePersona" :size="11" />

    <VLabel>Size 100 Persona, with no presence</VLabel>
    <VPersona v-bind="examplePersona" :size="14" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      examplePersona: {
        imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
