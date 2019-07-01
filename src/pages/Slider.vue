<template>
  <div>
    <h1 class="ms-font-xxl">
      Slider
    </h1>

    <div class="ms-basicSlider">
      <div class="ms-SliderBasicExample">
        <VSlider v-model="slider1"
                 :min="1"
                 :max="3"
                 :step="1"
                 :default-value="2"
                 label="Basic example:" />

        <VSlider v-model="slider2"
                 :min="50"
                 :max="500"
                 :step="50"
                 :default-value="300"
                 :disabled="true"
                 label="Disabled example:" />
      </div>

      <div class="ms-SliderVertical">
        <div class="ms-verticalBox">
          <VSlider v-model="slider3"
                   :min="1"
                   :max="3"
                   :step="1"
                   :default-value="2"
                   :vertical="true"
                   label="Basic example:" />

          <VSlider v-model="slider4"
                   :min="50"
                   :max="500"
                   :step="50"
                   :default-value="300"
                   :disabled="true"
                   :vertical="true"
                   label="Disabled example:" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slider1: 2,
      slider2: 300,
      slider3: 2,
      slider4: 300,
    }
  },
}
</script>

<style lang="scss">
.ms-basicSlider {
  max-width: 500px;
}
.ms-SliderBasicExample {
  max-width: 300px;
}

.ms-SliderVertical {
  padding-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 200px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.ms-verticalBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
