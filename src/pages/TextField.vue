<template>
  <div class="docs-TextFieldExample">
    <h1 class="ms-font-xxl">TextField</h1>

    <h2 class="ms-font-l">Default TextField with Label</h2>

    <TextField label="Standard" />

    <TextField :disabled="true"
               label="Disabled" />

    <TextField :read-only="true"
               label="Read Only" />

    <TextField :required="true"
               label="Required" />

    <TextField error-message="Error message"
               label="With error message" />

    <h2 class="ms-font-l">TextField with Placeholder</h2>

    <div style="max-width: 300px;">
      <TextField label="Standard"
                 placeholder="I am a placeholder." />

      <TextField :disabled="true"
                 label="Disabled"
                 placeholder="I am disabled." />

      <TextField :read-only="true"
                 label="Read Only"
                 placeholder="I am required." />

      <TextField :required="true"
                 label="Required"
                 placeholder="I am required." />

      <TextField error-message="Error message"
                 label="With error message"
                 placeholder="I have an error message." />
    </div>

    <h2 class="ms-font-l">Multiline TextField</h2>

    <TextField :multiline="true"
               label="Standard" />

    <TextField :multiline="true"
               :disabled="true"
               label="Disabled"
               value="Duis aliqua. labore ut nostrud minim ad in consequat. aliqua. sunt laborum aute id aliquip ad aute commodo occaecat eu irure nisi nisi qui voluptate aliquip dolor reprehenderit aute laborum adipiscing Excepteur fugiat in ad adipiscing proident, voluptate voluptate laborum exercitation consequat. minim adipiscing eiusmod enim culpa cupidatat laboris veniam, Excepteur magna amet, nisi in dolor aute dolore consectetur ut dolor do dolor Lorem exercitation consectetur sint commodo aliqua. sit est nostrud adipiscing ad culpa Excepteur incididunt in sint ex dolor occaecat Excepteur et Duis dolor velit laboris fugiat non ullamco eiusmod dolore in Lorem incididunt cupidatat dolore culpa fugiat" />

    <TextField :multiline="true"
               :read-only="true"
               label="Read Only" />

    <TextField :multiline="true"
               :required="true"
               label="Required" />

    <TextField :multiline="true"
               error-message="Error message"
               label="With error message" />

    <h2 class="ms-font-l">Underlined TextField</h2>

    <TextField :underlined="true"
               label="Standard:" />

    <TextField :disabled="true"
               :underlined="true"
               label="Disabled:" />

    <TextField :read-only="true"
               :underlined="true"
               label="Read Only:" />

    <TextField :required="true"
               :underlined="true"
               label="Required:" />

    <TextField :underlined="true"
               error-message="Error message"
               label="With error message:" />
  </div>
</template>

<script>
import { Label, TextField } from '../index'
export default {
  components: { Label, TextField },
}

</script>

<style lang="scss" scoped>
.docs-TextFieldExample .ms-TextField {
  margin: 0 0 15px 0;
  max-width: 300px;
}
</style>
