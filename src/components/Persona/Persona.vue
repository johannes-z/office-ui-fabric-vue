<template>
  <div :size="size"
       class="ms-Persona">

    <VPersonaCoin :size="size"
                  :presence="presence"
                  :image-url="imageUrl"
                  :text="text" />

    <div class="ms-Persona-details">

      <slot name="details">

        <div class="ms-Persona-text">
          <span>{{ text }}</span>
        </div>

      </slot>

    </div>
  </div>
</template>

<script>
let size72 = 14

export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    secondaryText: {
      type: String,
      default: '',
    },
    tertiaryText: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: size72,
    },
    presence: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ms-Persona[size="14"] {
  > .ms-Persona-details {
    width: calc(100% - 87px);
  }
}

.ms-Persona[size="9"] {
  > .ms-Persona-coin {
    vertical-align: top;
  }

  > .ms-Persona-details {
    width: calc(100% - 25px);
  }
}

.ms-Persona {
  display: flex;
  height: initial !important;

  > .ms-Persona-details {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-left: 10px;

    .ms-Persona-text {
      font-size: 16px;
      padding-bottom: 1px;
    }
  }
}
</style>
