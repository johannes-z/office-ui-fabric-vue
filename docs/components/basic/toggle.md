# Toggle

## Overview

Toggles represent a physical switch that allows users to turn things on or off.
Use Toggles to present users with two mutually exclusive options (like on/off),
where choosing an option results in an immediate action. Use a Toggle for binary
operations that take effect right after the user flips the Toggle. For example,
use a Toggle to turn services or hardware components on or off. In other words,
if a physical switch would work for the action, a Toggle is probably the best
control to use.

### Choosing between Toggle and Checkbox

For some actions, either a Toggle or a Checkbox might work. To decide which
control would work better, follow these tips:

* Use a Toggle for binary settings when changes become effective immediately
  after the user changes them.

* In the above example, it's clear with the Toggle that the wireless is set to
  "On." But with the Checkbox, the user needs to think about whether the
  wireless is on now or whether they need to check the box to turn wireless on.

* Use a Checkbox when the user has to perform extra steps for changes to be
  effective. For example, if the user must click a "Submit", "Next", "Ok" button
  to apply changes, use a Checkbox.

## Variants

### Default Toggles

<page-toggle />

```vue
<VToggle v-model="toggle1">
    Enabled and checked
    <span name="onText">On</span>
    <span name="offText">Off</span>
</VToggle>

<VToggle v-model="toggle2"
         label="Enabled and unchecked">
    <span name="onText">On</span>
    <span name="offText">Off</span>
</VToggle>

<VToggle v-model="toggle3"
         :disabled="true"
         label="Disabled and checked"
         on-text="On"
         off-text="Off" />

<VToggle v-model="toggle4"
         :disabled="true"
         label="Disabled and unchecked"
         on-text="On"
         off-text="Off" />
```


## API

### Properties

| Property | Type      | Required | Default | Description                                                       |
|----------|-----------|----------|---------|-------------------------------------------------------------------|
| disabled | `Boolean` | `false`  | `false` | Controls if the toggle button is disabled.                        |
| label    | `String`  | `false`  | `''`    | Optional label above the toggle button.                           |
| onText   | `String`  | `false`  | `''`    | Optional label next to the toggle button when `value` is `true`.  |
| offText  | `String`  | `false`  | `''`    | Optional label next to the toggle button when `value` is `false`. |
| value    | `Boolean` | `false`  | `false` | `v-model` to control the toggle button state.                     |

### Slots

| Slot      | Description                      |
|-----------|----------------------------------|
| `default` | Replaces the `label` property.   |
| onText    | Replaces the `onText` property.  |
| offText   | Replaces the `offText` property. |

### Events

*This component does not emit any events.*
