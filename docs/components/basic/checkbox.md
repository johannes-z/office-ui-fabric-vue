# Checkbox

## Overview

A Checkbox is a UI element that allows users to switch between two mutually
exclusive options (checked or unchecked, on or off) through a single click or
tap. It can also be used to indicate a subordinate setting or preference when
paired with another control.

A Checkbox is used to select or deselect action items. It can be used for a
single item or for a list of multiple items that a user can choose from. The
control has two selection states: unselected and selected.

Use a single Checkbox for a subordinate setting, such as with a "Remember me?"
login scenario or with a terms of service agreement.

For a binary choice, the main difference between a Checkbox and a toggle switch
is that the Checkbox is for status and the toggle switch is for action. You can
delay committing a Checkbox interaction (as part of a form submit, for example),
while you should immediately commit a toggle switch interaction. Also, only
Checkboxes allow for multi-selection.

Use multiple Checkboxes for multi-select scenarios in which a user chooses one
or more items from a group of choices that are not mutually exclusive.

## Variants

<page-checkbox />

```vue
<div>
    <p>
        <VCheckbox v-model="checkbox1"
                   label="Uncontrolled checkbox" />
    </p>

    <p>
        <VCheckbox v-model="checkbox2"
                   label="Uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
        <VCheckbox v-model="checkbox3"
                   :disabled="true"
                   label="Disabled uncontrolled checkbox" />
    </p>

    <p>
        <VCheckbox v-model="checkbox4"
                   :disabled="true"
                   label="Disabled uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
        <VCheckbox v-model="checkbox5"
                   label="Checkbox rendered with boxSide 'end'"
                   box-side="end" />
    </p>
</div>
```

## API

### Properties

| Property | Type      | Required | Default   | Description                                                                                     |
|----------|-----------|----------|-----------|-------------------------------------------------------------------------------------------------|
| disabled | `Boolean` | `false`  | `false`   | Controls if the component is disabled.                                                          |
| label    | `String`  | `false`  | `''`      | Optional label next to the component.                                                           |
| boxSide  | `String`  | `false`  | `'start'` | Defines if the component is rendered before or after the label. Can be either `start` or `end`. |
| value    | `Boolean` | `false`  | `false`   | `v-model` to control the component's state.                                                     |

### Slots

| Slot      | Description                    |
|-----------|--------------------------------|
| `default` | Replaces the `label` property. |

### Events

| Event      | Payload   | Description            |
|------------|-----------|------------------------|
| `onChange` | `Boolean` | Emits the new `value`. |
