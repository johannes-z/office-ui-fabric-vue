# SearchBox

## Overview

SearchBoxes provide an input field for searching through content, allowing users
to locate specific items within the website or app.

## Variants

<navigation-Searchbox-Example1 />

```vue
<div>
  <h2 class="ms-font-xl">Default SearchBox</h2>
  <search-box v-model="searchQuery1" />

  <h2 class="ms-font-xl">Underlined SearchBox</h2>
  <search-box underlined />

  <h2 class="ms-font-xl">Disabled SearchBoxes</h2>
  <search-box disabled />
  <search-box disabled underlined />
</div>
```

## API

### Properties

| Property    | Type      | Required | Default | Description                                 |
|-------------|-----------|----------|---------|---------------------------------------------|
| placeholder | `String`  | `false`  | `false` | Placeholder for the search box.             |
| underlined  | `Boolean` | `false`  | `false` | Whether or not the SearchBox is underlined. |
| value       | `String`  | `false`  | `false` | `v-model` of the text in the SearchBox.     |

### Slots

*This component has no slots.*

### Events

| Event    | Payload  | Description                                                                                     |
|----------|----------|-------------------------------------------------------------------------------------------------|
| `change` | `String` | Callback function for when the typed input for the SearchBox has changed.                       |
| `clear`  | -        | Callback executed when the user clears the search box by either clicking 'X' or hitting escape. |
| `escape` | -        | Callback executed when the user presses escape in the search box.                               |
| `search` | `String` | Callback executed when the user presses enter in the search box.                                |
