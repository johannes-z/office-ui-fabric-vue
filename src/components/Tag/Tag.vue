<template>
  <div class="ms-TagItem"
       role="listitem">
    <span class="ms-TagItem-text">
      <slot />
    </span>
    <span v-if="showClose"
          class="ms-TagItem-close"
          @click="$emit('close')">
      <VIcon icon-name="Cancel" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    showClose: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss">
.ms-TagItem {
  box-sizing: content-box;
  flex-shrink: 1;
  background: #f4f4f4;
  margin: 2px;
  height: 26px;
  line-height: 26px;
  cursor: default;
  user-select: none;
  display: flex;
  flex-wrap: nowrap;
  max-width: 300px;
  outline: #00000000;
  position: relative;
}

.ms-TagItem-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 30px;
  margin: 0 8px;
}

.ms-TagItem-close {
  cursor: pointer;
  color: #666;
  font-size: 12px;
  display: inline-block;
  text-align: center;
  vertical-align: top;
  width: 30px;
  height: 100%;
  flex-shrink: 0;
}
</style>
