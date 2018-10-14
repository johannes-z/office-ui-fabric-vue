---
pageClass: ms-Fabric
---

# Link

## Overview

With a Link, users can navigate to another page, window, or Help topic; display
a definition; initiate a command; or choose an option. A Link indicates that it
can be clicked, typically by being displayed using the visited or unvisited link
system colors. Traditionally, Links are underlined as well, but that approach is
often unnecessary and falling out of favor to reduce visual clutter.

A Link is the lightest weight clickable control, and is often used to reduce the
visual complexity of a design.

## Variants

### Link

<div>
  <span>When a link has an href, </span>
  <VLink href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
    it renders as an anchor tag.
  </VLink>
  <span> Without an href, </span>
  <VLink>the link is rendered as a button</VLink>.
  <span> You can also use the disabled attribute to create a </span>
  <VLink :disabled="true"
         href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
    disabled link
  </VLink>.
</div>

```vue
<div>
  <span>When a link has an href, </span>
  <VLink href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
    it renders as an anchor tag.
  </VLink>
  <span> Without an href, </span>
  <VLink>the link is rendered as a button</VLink>.
  <span> You can also use the disabled attribute to create a </span>
  <VLink :disabled="true"
         href="https://johannes-z.github.io/office-ui-fabric-vue/components/">
    disabled link
  </VLink>.
</div>
```


## API

### Properties

| Property | Type      | Required | Default | Description                                                                                       |
|----------|-----------|----------|---------|---------------------------------------------------------------------------------------------------|
| disabled | `Boolean` | `false`  | `false` | Controls if the link is disabled.                                                                 |
| href     | `String`  | `false`  | `null`  | If an href is provided the link is rendered as an `a` tag. Otherwise it's rendered as a `button`. |

### Slots

| Slot      | Description           |
|-----------|-----------------------|
| `default` | The text of the link. |

### Events

*This component does not expose any events.*