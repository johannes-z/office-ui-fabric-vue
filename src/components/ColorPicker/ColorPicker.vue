<template>
  <div class="ms-ColorPicker">
    <div class="ms-ColorPicker-panel">

      <div class="ms-ColorPicker-colorRect"
           style="min-width: 220px; min-height: 220px; background-color: rgb(255, 0, 0);">
        <div class="ms-ColorPicker-light" />
        <div class="ms-ColorPicker-dark" />
        <div class="ms-ColorPicker-thumb"
             style="left: 13.7885%; top: 32.2727%; background-color: rgb(0, 0, 0);" />
      </div>

      <div class="ms-ColorPicker-slider is-hue"
           style="background: linear-gradient(to left, red 0px, rgb(255, 0, 153) 10%, rgb(205, 0, 255) 20%, rgb(50, 0, 255) 30%, rgb(0, 102, 255) 40%, rgb(0, 255, 253) 50%, rgb(0, 255, 102) 60%, rgb(53, 255, 0) 70%, rgb(205, 255, 0) 80%, rgb(255, 153, 0) 90%, red 100%);">
        <div class="ms-ColorPicker-sliderOverlay" />
        <div class="ms-ColorPicker-thumb is-slider"
             style="left: 16.7131%;" />
      </div>

      <div class="ms-ColorPicker-slider is-alpha"
           style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==');">
        <div class="ms-ColorPicker-sliderOverlay"
             style="background: linear-gradient(to right, transparent 0px, rgb(162, 181, 16) 100%);" />
        <div :style="alphaPosition"
             class="ms-ColorPicker-thumb is-slider" />
      </div>

      <table class="ms-ColorPicker-table">
        <thead>
          <tr class="tableHeader">
            <td style="width: 25%">Hex</td>
            <td>Red</td>
            <td>Green</td>
            <td>Blue</td>
            <td>Alpha</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <VTextField v-model="hex" />
            </td>
            <td style="width: 18%">
              <VTextField v-model="red" />
            </td>
            <td style="width: 18%">
              <VTextField v-model="green" />
            </td>
            <td style="width: 18%">
              <VTextField v-model="blue" />
            </td>
            <td style="width: 18%">
              <VTextField v-model="alphaComputed" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hex: 'ffffff',
      red: '255',
      green: '255',
      blue: '255',
      alpha: '100',
    }
  },
  computed: {
    alphaComputed: {
      get () {
        return this.alpha
      },
      set (value) {
        if (Number.parseFloat(value) > 100) value = '100'
        if (Number.parseFloat(value) < 0) value = '0'
        this.alpha = value
      },
    },
    alphaPosition () {
      return {
        left: `${Number.parseFloat(this.alpha)}%`,
      }
    },
  },
}
</script>

<style lang="scss">
.ms-ColorPicker {
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  max-width: 300px;

  .ms-TextField-field {
    padding: 5px;
  }
}

.ms-ColorPicker-panel {
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
}

.ms-ColorPicker-colorRect {
  position: relative;
  margin-bottom: 10px;

  .ms-ColorPicker-light {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: linear-gradient(to right, white 0%, transparent 100%);
  }

  .ms-ColorPicker-dark {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: linear-gradient(transparent 0px, rgb(0, 0, 0) 100%);
  }

  .ms-ColorPicker-thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    box-shadow: black 0px 0px 15px -5px;
    transform: translate(-50%, -50%);
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.8);
    border-image: initial;
    border-radius: 50%;
  }
}

.ms-ColorPicker-slider {
  position: relative;
  height: 20px;
  margin-bottom: 5px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;

  &.is-hue {
    background: linear-gradient(
      to left,
      red 0px,
      rgb(255, 0, 153) 10%,
      rgb(205, 0, 255) 20%,
      rgb(50, 0, 255) 30%,
      rgb(0, 102, 255) 40%,
      rgb(0, 255, 253) 50%,
      rgb(0, 255, 102) 60%,
      rgb(53, 255, 0) 70%,
      rgb(205, 255, 0) 80%,
      rgb(255, 153, 0) 90%,
      red 100%
    );
  }

  &.is-alpha {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==);
  }

  .ms-ColorPicker-sliderOverlay {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }
}

.ms-ColorPicker-thumb {
  position: absolute;
  width: 20px;
  height: 20px;
  box-shadow: black 0px 0px 15px -5px;
  transform: translate(-50%, -50%);
  top: 50%;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.8);
  border-image: initial;
  border-radius: 50%;
}

.ms-ColorPicker-table {
  table-layout: fixed;
  width: 100%;

  .tableHeader {
    font-size: 12px;
    font-weight: 400px;
  }
}
</style>
