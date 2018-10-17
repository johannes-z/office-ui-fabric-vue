<template>
  <VLayer v-if="isOpen">
    <div role="dialog">
      <div class="ms-Modal is-open">
        <div class="ms-Overlay"
             @click="$emit('dismiss')" />
        <div :class="containerClassName"
             class="ms-Dialog-main">
          <slot />
        </div>
      </div>
    </div>
  </VLayer>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    containerClassName: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.ms-Modal {
  background-color: transparent;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.267s ease 0s;
}

.ms-Dialog-main {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  position: relative;
  text-align: left;
  max-height: 100%;
  overflow-y: auto;
}

.ms-Overlay {
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
</style>
