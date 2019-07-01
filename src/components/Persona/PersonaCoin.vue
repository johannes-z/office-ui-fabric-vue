<template>
  <div :data-size="size"
       class="ms-Persona-coin">
    <slot name="coin">
      <i v-if="size === 9"
         class="ms-Icon ms-Icon--Contact"
         aria-hidden="true" />

      <div v-else
           class="ms-Persona-imageArea">
        <div v-if="presence"
             class="ms-Persona-presence">
             <!-- TODO: add presence icon -->
        </div>

        <persona-initials v-if="!imageUrl"
                          :name="text" />

        <div v-else
             class="ms-Image ms-Persona-image">
          <img :src="imageUrl"
               class="ms-Image-image"
               alt="">
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import PersonaInitials from './PersonaInitials.vue'

export default {
  components: { PersonaInitials },
  props: {
    size: {
      type: Number,
      default: 10,
    },
    presence: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ms-Persona-coin[data-size="7"] {
  width: 28px;
  height: 28px;
}
.ms-Persona-coin[data-size="8"] {
  width: 16px;
  height: 16px;

  > .ms-Persona-initials {
    font-size: 11px;
    line-height: 16px;
    height: 16px;
  }
}
.ms-Persona-coin[data-size="10"] {
  width: 24px;
  height: 24px;
}
.ms-Persona-coin[data-size="11"] {
  width: 32px;
  height: 32px;
}
.ms-Persona-coin[data-size="12"] {
  width: 40px;
  height: 40px;
}
.ms-Persona-coin[data-size="13"] {
  width: 48px;
  height: 48px;
}
.ms-Persona-coin[data-size="14"] {
  width: 72px;
  height: 72px;
}
.ms-Persona-coin[data-size="15"] {
  width: 100px;
  height: 100px;
}

.ms-Persona-coin {
  position: relative;
  vertical-align: middle;
  font-size: 10px;

  > .ms-Icon {
    padding-top: 4px;
  }

  > .ms-Persona-imageArea {
    position: relative;

    height: 100%;
    width: 100%;

    text-align: center;

    .ms-Persona-presence {
      position: absolute;
      bottom: -2px;
      right: -2px;

      border-radius: 50%;

      height: 28px;
      width: 28px;

      border: 2px solid #ffffff;

      background-color: green;
    }

    > .ms-Persona-initials {
      color: #ffffff;
      background-color: rgb(30, 113, 69);
      border-radius: 50%;
    }

    > .ms-Persona-image {
      border-radius: 50%;
      overflow: hidden;
    }

    > .ms-Image {
      height: 100%;
      width: 100%;

      > .ms-Image-image {
        position: relative;

        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
