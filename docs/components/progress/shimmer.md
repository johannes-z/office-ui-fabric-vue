# Shimmer

## Overview

Shimmer is a temporary animation placeholder for when data from the service call
takes time to get back and we don't want to block rendering the rest of the UI.

When Shimmer is not wrapping the actual component to be rendered while data is
fetching, `shimmerElements` or `customElementsGroup` props should be used, and
later just replace the Shimmer UI with the intended content. Otherwise, if
smooth transition from Shimmer UI to content is wanted, wrap the content node
with Shimmer tags and use `isDataLoaded` prop to trigger the transition. For
reference use the examples provided below.

For cases when your application supports theming, Shimmer component is equiped
with everything you need to just load the custom theme to the application, and
as long as the color palette you provide has an overried for the two Fabric
colors used in Shimmer, everything should be ok. If no theming is supported,
then follow the example showing the use of the `styles` prop.

## Variants

### Shimmer with basic elements using the `default` slot

<progress-Shimmer-Example1 />

```vue
<div class="shimmerExampleContainer">
  Basic Shimmer with no elements provided. It defaults to a line of 16px height.
  <VShimmer />
  <VShimmer width="75%" />
  <VShimmer width="50%" />

  Basic Shimmer with elements provided.
  <VShimmer>
    <VShimmerCircle />
    <VShimmerGap width="2%" />
    <VShimmerLine />
  </VShimmer>
  <VShimmer>
    <VShimmerCircle :height="24" />
    <VShimmerGap width="2%" />
    <VShimmerLine :height="16" width="20%" />
    <VShimmerGap width="5%" />
    <VShimmerLine :height="16" width="20%" />
    <VShimmerGap width="10%" />
    <VShimmerLine :height="16" width="15%" />
    <VShimmerGap width="10%" />
    <VShimmerLine :height="16" />
  </VShimmer>

  <VShimmer width="70%">
    <VShimmerCircle :height="24" />
    <VShimmerGap :height="16"
                 width="2%" />
    <VShimmerLine :height="16"
                  width="20%" />
    <VShimmerGap :height="16"
                 width="5%" />
    <VShimmerLine :height="16"
                  width="20%" />
    <VShimmerGap :height="16"
                 width="10%" />
    <VShimmerLine :height="16"
                  width="15%" />
    <VShimmerGap :height="16"
                 width="10%" />
    <VShimmerLine :height="16" />
  </VShimmer>

  Variations of vertical alignment for Circles and Lines.
  <VShimmer>
    <VShimmerCircle />
    <VShimmerGap width="2%" />
    <VShimmerCircle :height="15"
                    vertical-align="top" />

    <VShimmerGap width="2%" />
    <VShimmerLine width="20%"
                  vertical-align="bottom" />

    <VShimmerGap width="2%" />
    <VShimmerLine :height="5"
                  width="20%"
                  vertical-align="top" />

    <VShimmerGap width="2%" />
    <VShimmerLine :height="16"
                  width="15%" />

    <VShimmerGap width="2%" />
    <VShimmerLine :height="10"
                  vertical-align="bottom" />

  </VShimmer>
</div>
```

### Shimmer with custom elements using the `groups` slot

<progress-Shimmer-Example2 />

```vue
<div>
  <div class="shimmerExampleContainer">
    <VShimmer>
      <div slot="groups"
          style="display: flex;">
        <VShimmerElementsGroup>
          <VShimmerLine :height="40" :width="40" />
          <VShimmerGap :height="40" :width="10" />
        </VShimmerElementsGroup>
        <VShimmerElementsGroup :flex-wrap="true">
          <VShimmerLine :height="10" :width="300" />
          <VShimmerLine :height="10" :width="200" />
          <VShimmerGap :height="20" :width="100" />
        </VShimmerElementsGroup>
      </div>
    </VShimmer>
  </div>
  <div class="shimmerExampleContainer2">
    <VShimmer>
      <div slot="groups"
          style="display: flex;">
        <VShimmerElementsGroup>
          <VShimmerCircle :height="40"/>
          <VShimmerGap :height="40" :width="10" />
        </VShimmerElementsGroup>
        <VShimmerElementsGroup :flex-wrap="true">
          <VShimmerLine :height="10" :width="400" />
          <VShimmerGap :height="20" :width="100" />
          <VShimmerLine :height="10" :width="500" />
        </VShimmerElementsGroup>
      </div>
    </VShimmer>
  </div>
  <div class="shimmerExampleContainer3">
    <VShimmer>
      <div slot="groups"
          style="display: flex;">
        <VShimmerElementsGroup width="90px">
          <VShimmerLine :height="80" :width="80" />
          <VShimmerGap :height="80" :width="10" />
        </VShimmerElementsGroup>
        <div style="display: flex; flex-wrap: wrap; width: 100%">
          <VShimmerElementsGroup :flex-wrap="true">
            <VShimmerCircle :height="40"/>
          <VShimmerGap :height="40" :width="10" />
          </VShimmerElementsGroup>
          <VShimmerElementsGroup :flex-wrap="true"
                                width="calc(100% - 50px)">
            <VShimmerLine :height="10" width="90%" />
            <VShimmerGap :height="20" width="10%" />
            <VShimmerLine :height="10" width="100%" />
          </VShimmerElementsGroup>
          <VShimmerElementsGroup :flex-wrap="true"
                                width="100%">
            <VShimmerLine :height="10" width="80%" vertical-align="bottom" />
            <VShimmerGap :height="20" width="20%" />
            <VShimmerLine :height="10" width="40%" vertical-align="bottom" />
            <VShimmerGap :height="20" width="2%" />
            <VShimmerLine :height="10" width="58%" vertical-align="bottom" />
          </VShimmerElementsGroup>
        </div>
      </div>
    </VShimmer>
  </div>
</div>
```

## API

### Properties

| Property | Type     | Required | Default  | Description                                       |
|----------|----------|----------|----------|---------------------------------------------------|
| height   | `Number` | `false`  | `16`     | Sets the height of the `VShimmerLine`.            |
| width    | `String` | `false`  | `'100%'` | Sets the width value of the shimmer wave wrapper. |

#### VShimmerCircle

| Property      | Type     | Required | Default    | Description                                                                                 |
|---------------|----------|----------|------------|---------------------------------------------------------------------------------------------|
| height        | `Number` | `false`  | `24`       | Sets the height of the shimmer circle in pixels. Minimum supported 10px.                    |
| verticalAlign | `String` | `false`  | `'center'` | Possible values are `'top'`, `'center'`, or 'bottom'. The vertical alignemt of the element. |

#### VShimmerGap

| Property | Type     | Required | Default | Description                                   |
|----------|----------|----------|---------|-----------------------------------------------|
| height   | `Number` | `false`  | `16`    | Sets the height of the shimmer gap in pixels. |
| width    | `Number` | `false`  | `10`    | Gap width value.                              |

#### VShimmerLine

| Property      | Type     | Required | Default    | Description                                                                                 |
|---------------|----------|----------|------------|---------------------------------------------------------------------------------------------|
| height        | `Number` | `false`  | `16`       | Sets the height of the shimmer line in pixels.                                              |
| verticalAlign | `String` | `false`  | `'center'` | Possible values are `'top'`, `'center'`, or 'bottom'. The vertical alignemt of the element. |
| width         | `Number` | `false`  | `'100%'`   | Line width value.                                                                           |

#### VShimmerElementsGroup

| Property | Type      | Required | Default  | Description                 |
|----------|-----------|----------|----------|-----------------------------|
| flexWrap | `Boolean` | `false`  | `false`  | Make Shimmer elements wrap. |
| width    | `String`  | `false`  | `'auto'` | Width of the Element Group. |

### Slots

| Slot      | Description                                                                                                    |
|-----------|----------------------------------------------------------------------------------------------------------------|
| `default` | `VShimmerCircle`, `VShimmerGap`, `VShimmerLine` can be used in the default slot and will be shown in one line. |
| `groups`  | This slot with `VShimmerElementsGroup` can be used for more complex shimmers.                                  |

### Events

*This component does not emit any events.*
