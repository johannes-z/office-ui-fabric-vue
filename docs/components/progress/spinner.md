# Spinner

## Overview

A Spinner is an outline of a circle which animates around itself indicating to
the user that things are processing. A Spinner is shown when it's unsure how
long a task will take making it the indeterminate version of a
ProgressIndicator. They can be various sizes, located inline with content or
centered. They generally appear after an action is being processed or committed.
They are subtle and generally do not take up much space, but are transitions
from the completed task.

## Variants

<progress-Spinner-Example1 />

```vue
<div style="max-width: 300px;">
    <VLabel>Extra Small Spinner</VLabel>
    <Spinner :size="0" />

    <VLabel>Small Spinner</VLabel>
    <Spinner :size="1" />

    <VLabel>Medium Spinner</VLabel>
    <Spinner />

    <VLabel>Large Spinner</VLabel>
    <Spinner :size="3"/>

    <VLabel>Spinner with Label</VLabel>
    <Spinner label="I am definitely loading..." />

    <VLabel>Large Spinner with Label</VLabel>
    <Spinner :size="3" label="Seriously, still loading..." />
</div>
```

## API

### Properties

| Property | Type                      | Required | Default | Description                                                          |
|----------|---------------------------|----------|---------|----------------------------------------------------------------------|
| label    | `String`                  | `false`  | `''`    | The label to show next to the Spinner.                               |
| size     | `Number` (`SPINNER_SIZE`) | `false`  | `2`     | The size of Spinner to render. { extraSmall, small, medium, large }. |

#### Spinner Size

```js
const SPINNER_SIZE = {
    0: { size: '12px', name: 'xSmall' },
    1: { size: '16px', name: 'small' },
    2: { size: '20px', name: 'Medium' },
    3: { size: '28px', name: 'Large' },
}
```

### Slots

| Slot      | Description                    |
|-----------|--------------------------------|
| `default` | Replaces the `label` property. |

### Events

*This component does not emit any events.*
