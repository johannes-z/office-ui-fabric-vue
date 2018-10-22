# Label

## Overview

Labels give a name or title to a component or group of components. Labels should
be in close proximity to the component or group they are paired with. Some
components, such as TextField, Dropdown, or Toggle, already have Labels
incorporated, but other components may optionally add a Label if it helps inform
the user of the component’s purpose.

## Variants

<page-label />

```vue
<div>
    <VLabel>I'm a Label</VLabel>
    <VLabel :disabled="true">I'm a disabled Label</VLabel>
    <VLabel :required="true">I'm a required Label</VLabel>
</div>
```

## API

### Properties

| Property | Type      | Required | Default   | Description                                           |
|----------|-----------|----------|-----------|-------------------------------------------------------|
| disabled | `Boolean` | `false`  | `false`   | Controls if the component is disabled.                |
| required | `Boolean` | `false`  | `'false'` | Whether the associated form field is required or not. |

### Slots

| Slot      | Description                    |
|-----------|--------------------------------|
| `default` | Renders the label's text. |

### Events

*This component does not emit any events.*
