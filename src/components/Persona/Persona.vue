<template>
  <div :size="size" class="ms-Persona">

    <div class="ms-Persona-coin">

      <i v-if="size === 9"
         class="ms-Icon ms-Icon--Contact"
         aria-hidden="true"/>

      <div v-else
           class="ms-Persona-imageArea">

        <persona-initials v-if="!person.avatar" :name="person.name"/>

        <div v-else class="ms-Image ms-Persona-image">
          <img :src="person.avatar" class="ms-Image-image" alt="">
        </div>
      </div>

    </div>

    <div class="ms-Persona-details">

      <div class="ms-Persona-primaryText">
        <span :title="person.name">{{ person.name }}</span>
      </div>

      <slot />

    </div>
  </div>
</template>

<script>
import PersonaInitials from './PersonaInitials.vue'

let size72 = 14

export default {
  components: { PersonaInitials },
  props: {
    primaryText: {
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

<style lang="scss" scoped>
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
  height: initial !important;

  > .ms-Persona-coin {
    display: inline-block;
    vertical-align: middle;
    font-size: 10px;

    > .ms-Icon {
      padding-top: 4px;
    }

    > .ms-Persona-imageArea {
      position: relative;

      height: 72px;
      width: 72px;

      text-align: center;

      > .ms-Persona-initials {
        height: 72px;
        line-height: 72px;
        font-size: 28px;

        color: #ffffff;
        background-color: rgb(30, 113, 69);
        border-radius: 50%;
      }

      > .ms-Persona-image {
        border-radius: 50%;
        overflow: hidden;
      }

      > .ms-Image {

        height: 72px;
        width: 72px;

        > .ms-Image-image {
          position: relative;

          width: 100%;
          height: auto;
        }
      }
    }
  }

  > .ms-Persona-details {
    display: inline-block;
    vertical-align: middle;

    padding-left: 10px;

    .ms-Persona-primaryText {
      font-size: 16px;
      padding-bottom: 1px;
    }
  }
}

</style>
