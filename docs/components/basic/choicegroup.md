# ChoiceGroup

## Overview

The ChoiceGroup component, also known as radio buttons, let users select one
option from two or more choices. Each option is represented by one ChoiceGroup
button; a user can select only one ChoiceGroup in a button group.

ChoiceGroup emphasize all options equally, and that may draw more attention to
the options than necessary. Consider using other controls, unless the options
deserve extra attention from the user. For example, if the default option is
recommended for most users in most situations, use a Dropdown component instead.

If there are only two mutually exclusive options, combine them into a single
Checkbox or Toggle switch. For example, use a Checkbox for "I agree" instead of
ChoiceGroup buttons for "I agree" and "I don't agree."

## Variants

### Default ChoiceGroup

<page-choice-group />

```vue
<VChoiceGroup v-model="selected"
              :options="options"
              :label="label"
              :required="required"
              @onChange="onChange"/>
```

## API

### Properties

| Property | Type      | Required | Default   | Description                                           |
|----------|-----------|----------|-----------|-------------------------------------------------------|
| label    | `String`  | `false`  | `''`      | Controls if the component is disabled.                |
| required | `Boolean` | `false`  | `'false'` | Whether the associated form field is required or not. |
| options  | `Array`   | `false`  | `[]`      | Whether the associated form field is required or not. |
| value    | `String`  | `true`   | -         | `v-model` for the value of the slider.                |

### Slots

| Slot      | Description                    |
|-----------|--------------------------------|
| `default` | Replaces the `label` property. |

### Events

*This component does not emit any events.*
