<template>
  <div class="ms-Rating-star ms-RatingStar-root ms-RatingStar-root--large">
    <div class="ms-FocusZone ms-Rating-focuszone ms-RatingStar-root--large">
      <button v-for="index in (max - min + 1)"
              :key="index"
              class="ms-Rating-button ms-Rating--large">
        <span class="ms-Rating-labelText">1 of 5 stars selected</span>

        <div class="ms-RatingStar-container">
          <VIcon icon-name="FavoriteStarFill"
                 class="ms-RatingStar-back" />
          <VIcon icon-name="FavoriteStarFill"
                 class="ms-RatingStar-front"
                 style="width: 100%;" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5,
      validator: value => value >= 1,
    },
  },
  data () {
    return {
      min: 1,
    }
  },
}
</script>

<style lang="scss">
.ms-Rating-focuszone {
    display: inline-block;
    padding-bottom: 1px;
}

.ms-RatingStar-root--large {
  height: 26px;
}

.ms-RatingStar-root {

}

.ms-Rating--large {
  font-size: 20px;
  line-height: 20px;
}

.ms-Rating-button {
  position: relative;
  background-color: transparent;
  padding-top: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  cursor: pointer;
  outline: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}

.ms-Rating-labelText {
  position: absolute;
  width: 1px;
  height: 1px;
  margin-top: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
  margin-left: -1px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
}

.ms-RatingStar-container {
  display: inline-block;
  position: relative;
}

.ms-RatingStar-back {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  color: rgb(166, 166, 166);
  width: 100%;
}
.ms-RatingStar-front {
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(0, 0, 0);
  overflow: hidden;
}
</style>
