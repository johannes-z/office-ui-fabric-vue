<template>
  <div class="docs-TextFieldExample">
    <VTextField :multiline="true"
                rows="10"
                label="Standard"
                value="<div class='test'>Test</div>" />

    <VTextField :multiline="true"
                :disabled="true"
                label="Disabled"
                value="Duis aliqua. labore ut nostrud minim ad in consequat. aliqua. sunt laborum aute id aliquip ad aute commodo occaecat eu irure nisi nisi qui voluptate aliquip dolor reprehenderit aute laborum adipiscing Excepteur fugiat in ad adipiscing proident, voluptate voluptate laborum exercitation consequat. minim adipiscing eiusmod enim culpa cupidatat laboris veniam, Excepteur magna amet, nisi in dolor aute dolore consectetur ut dolor do dolor Lorem exercitation consectetur sint commodo aliqua. sit est nostrud adipiscing ad culpa Excepteur incididunt in sint ex dolor occaecat Excepteur et Duis dolor velit laboris fugiat non ullamco eiusmod dolore in Lorem incididunt cupidatat dolore culpa fugiat" />

    <VTextField :multiline="true"
                :read-only="true"
                label="Read Only" />

    <VTextField :multiline="true"
                :required="true"
                label="Required" />

    <VTextField :multiline="true"
                error-message="Error message"
                label="With error message" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
