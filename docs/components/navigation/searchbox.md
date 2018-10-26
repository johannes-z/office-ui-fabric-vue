# SearchBox

## Overview

SearchBoxes provide an input field for searching through content, allowing users
to locate specific items within the website or app.

## Variants

<navigation-Searchbox-Example1 />

## API

### Properties

| Property        | Type     | Required | Default | Description                                                                                                                 |
|-----------------|----------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| label           | `String` | `false`  | `''`    | Optional label above the progress bar.                                                                                      |
| description     | `String` | `false`  | `''`    | Optional label below the progress bar.                                                                                      |
| percentComplete | `Number` | `false`  | `null`  | Percentage of the operation's completeness. If this is not set, the indeterminate progress animation will be shown instead. |

### Slots

| Slot        | Description                          |
|-------------|--------------------------------------|
| `default`   | Replaces the `label` property.       |
| description | Replaces the `description` property. |

### Events

| Event      | Payload   | Description            |
|------------|-----------|------------------------|
| `onChange` | `Boolean` | Emits the new `value`. |