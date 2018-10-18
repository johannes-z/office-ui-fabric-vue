---
pageClass: ms-Fabric
---

# Slider

## Overview

A Slider is an element used to set a value. It provides a visual indication of
adjustable content, as well as the current setting in the total range of
content. It is displayed as a horizontal track with options on either side. A
knob or lever is dragged to one end or the other to make the choice, indicating
the current value. Marks on the Slider bar can show values and users can choose
where they want to drag the knob or lever to set the value.

A Slider is a good choice when you know that users think of the value as a
relative quantity, not a numeric value. For example, users think about setting
their audio volume to low or medium—not about setting the value to two or five.

## Variants

<page-slider />

```vue
<div>
  <div class="ms-basicSlider">
    <div class="ms-SliderBasicExample">
      <VSlider :min="1"
               :max="3"
               :step="1"
               :default-value="2"
               v-model="slider1"
               label="Basic example:" />
      <VSlider :min="50"
               :max="500"
               :step="50"
               :default-value="300"
               v-model="slider2"
               :disabled="true"
               label="Disabled example:" />
    </div>
    <div class="ms-SliderVertical">
      <div class="ms-verticalBox">
        <VSlider :min="1"
                 :max="3"
                 :step="1"
                 :default-value="2"
                 v-model="slider3"
                 :vertical="true"
                 label="Basic example:" />
        <VSlider :min="50"
                 :max="500"
                 :step="50"
                 :default-value="300"
                 v-model="slider4"
                 :disabled="true"
                 :vertical="true"
                 label="Disabled example:" />
      </div>
    </div>
  </div>
</div>
```

## API

### Properties

| Property     | Type      | Required | Default | Description                                                                      |
|--------------|-----------|----------|---------|----------------------------------------------------------------------------------|
| disabled     | `Boolean` | `false`  | `false` | Optional flag to render the Slider as disabled.                                  |
| label        | `String`  | `false`  | `''`    | Description label of the Slider.                                                 |
| defaultValue | `Number`  | `false`  | `5`     | -                                                                                |
| min          | `Number`  | `false`  | `0`     | The min value of the Slider.                                                     |
| max          | `Number`  | `false`  | `10`    | The max value of the Slider.                                                     |
| step         | `Number`  | `false`  | `1`     | The difference between the two adjacent values of the Slider.                    |
| showValue    | `Boolean` | `false`  | `true`  | Whether to show the value on the right of the Slider.                            |
| vertical     | `Boolean` | `false`  | `false` | Optional flag to render the slider vertically. Defaults to rendering horizontal. |
| value        | `Boolean` | `true`   | -      | `v-model` for the value of the slider.                                           |

### Slots

| Slot      | Description                      |
|-----------|----------------------------------|
| `default` | Replaces the `label` property.   |

### Events

*This component does not emit any events.*
