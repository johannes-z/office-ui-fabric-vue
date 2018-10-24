# Tag

## Overview

This is an extra component used in the `VBasePicker` component, now as a
standalone component.

## Variants

<basics-Tag-Example1 />

```vue
<VTagContainer>
  <VTag @close="closeHandler">Label with close</VTag>
  <VTag :show-close="false">Label no close</VTag>
</VTagContainer>
```

## API

### Properties

| Property  | Type      | Required | Default | Description                            |
|-----------|-----------|----------|---------|----------------------------------------|
| showClose | `Boolean` | `false`  | `true`  | Controls if the close button is shown. |

### Slots

| Slot      | Description          |
|-----------|----------------------|
| `default` | The text of the tag. |

### Events

| Event   | Payload | Description                                             |
|---------|---------|---------------------------------------------------------|
| `close` | `null`  | This event is emitted when the close button is clicked. |
