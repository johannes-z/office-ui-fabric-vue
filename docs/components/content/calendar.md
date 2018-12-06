# Calendar

## Overview

**WIP**

## Variants

<content-Calendar-Example1 />

## API

### Properties

| Property | Type      | Required | Default   | Description                                                                                     |
|----------|-----------|----------|-----------|-------------------------------------------------------------------------------------------------|
| disabled | `Boolean` | `false`  | `false`   | Controls if the component is disabled.                                                          |
| label    | `String`  | `false`  | `''`      | Optional label next to the component.                                                           |
| boxSide  | `String`  | `false`  | `'start'` | Defines if the component is rendered before or after the label. Can be either `start` or `end`. |
| value    | `Date` | `false`  | `false`   | `v-model` to control the component's state.                                                     |

### Slots

| Slot           | Slot Scope  | Description                    |
|----------------|-------------|--------------------------------|
| `todayLabel`   |             | Replaces the text of the 'go to today' label. |
| `monthAndYear` | `{ value }` | Replaces the heading of the dayPicker. |

### Events

WIP
