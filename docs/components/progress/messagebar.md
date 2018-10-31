# Message Bar

## Overview

A MessageBar is an area at the top of a primary view that displays relevant
status information. You can use a MessageBar to tell the user about a situation
that does not require their immediate attention and therefore does not need to
block other activities.

## Variants

### Various MessageBar types

<progress-MessageBar-Example1 />

## API

### Properties

| Property     | Type                        | Required | Default               | Description                                                                                                                    |
|--------------|-----------------------------|----------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------|
| isSingleline | `Boolean`                   | `false`  | `false`               | Determines if the message bar is single lined. If true, and the text overflows over buttons or to another line, it is clipped. |
| showDismiss  | `Boolean`                   | `false`  | `false`               | If true, renders a dismiss button.                                                                                             |
| type         | `Number` (`MessageBarType`) | `false`  | `MessageBarType.info` | Type of the MessageBar.                                                                                                        |

#### MessageBarType

```js
export const MessageBarType = Object.freeze({
  'blocked': 0,
  'error': 1,
  'info': 2,
  'remove': 3,
  'severeWarning': 4,
  'success': 5,
  'warning': 6,
})
```

### Slots

| Slot      | Description                 |
|-----------|-----------------------------|
| `default` | The text of the MessageBar. |

### Events

*This component does not emit any events.*
