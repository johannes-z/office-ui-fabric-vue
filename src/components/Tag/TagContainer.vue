<template>
  <div class="ms-TagItem-container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.ms-TagItem-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-width: 180px;
  min-height: 30px;
}
</style>
