# TextField

## Overview

The TextField component enables a user to type text into an app. It's typically
used to capture a single line of text, but can be configured to capture multiple
lines of text. The text displays on the screen in a simple, uniform format.

## Variants

### Default TextField with Label

<basics-Textfield-Example1 />

```vue
<div class="docs-TextFieldExample">
  <VTextField v-model="text1"
              label="Standard" />

  <VTextField label="Disabled"
              disabled />

  <VTextField label="Read Only"
              read-only />

  <VTextField label="Required"
              required />

  <VTextField error-message="Error message"
              label="With error message" />
</div>
```

### TextField with Placeholder

<basics-Textfield-Example2 />

```vue
<div class="docs-TextFieldExample">
  <VTextField label="Standard"
              placeholder="I am a placeholder." />

  <VTextField label="Disabled"
              placeholder="I am disabled."
              disabled />

  <VTextField label="Read Only"
              placeholder="I am required."
              read-only />

  <VTextField label="Required"
              placeholder="I am required."
              required />

  <VTextField error-message="Error message"
              label="With error message"
              placeholder="I have an error message." />
</div>
```

### Multiline TextField

<basics-Textfield-Example3 />

```vue
<div class="docs-TextFieldExample">
  <VTextField :multiline="true"
              label="Standard" />

  <VTextField :multiline="true"
              :disabled="true"
              label="Disabled"
              value="Duis aliqua. labore ut nostrud minim ad in consequat. aliqua. sunt laborum aute id aliquip ad aute commodo occaecat eu irure nisi nisi qui voluptate aliquip dolor reprehenderit aute laborum adipiscing Excepteur fugiat in ad adipiscing proident, voluptate voluptate laborum exercitation consequat. minim adipiscing eiusmod enim culpa cupidatat laboris veniam, Excepteur magna amet, nisi in dolor aute dolore consectetur ut dolor do dolor Lorem exercitation consectetur sint commodo aliqua. sit est nostrud adipiscing ad culpa Excepteur incididunt in sint ex dolor occaecat Excepteur et Duis dolor velit laboris fugiat non ullamco eiusmod dolore in Lorem incididunt cupidatat dolore culpa fugiat" />

  <VTextField :multiline="true"
              :read-only="true"
              label="Read Only" />

  <VTextField :multiline="true"
              :required="true"
              label="Required" />

  <VTextField :multiline="true"
              error-message="Error message"
              label="With error message" />
</div>
```

### Underlined TextField

<basics-Textfield-Example4 />

```vue
<div class="docs-TextFieldExample">
  <VTextField :underlined="true"
              label="Standard:" />

  <VTextField :disabled="true"
              :underlined="true"
              label="Disabled:" />

  <VTextField :read-only="true"
              :underlined="true"
              label="Read Only:" />

  <VTextField :required="true"
              :underlined="true"
              label="Required:" />

  <VTextField :underlined="true"
              error-message="Error message"
              label="With error message:" />
</div>
```

## API

### Properties

| Property     | Type      | Required | Default | Description                                                    |
|--------------|-----------|----------|---------|----------------------------------------------------------------|
| disabled     | `Boolean` | `false`  | `false` | Disabled state of the textfield.                               |
| multiline    | `Boolean` | `false`  | `false` | Whether or not the textfield is a multiline textfield.         |
| readOnly     | `Boolean` | `false`  | `false` | If true, the textfield is readonly.                            |
| required     | `Boolean` | `false`  | `false` | Marks the label of the textfield as required.                  |
| underlined   | `Boolean` | `false`  | `false` | Whether or not the textfield is underlined.                    |
| errorMessage | `String`  | `false`  | `''`    | If set, this will display an error message for the text field. |
| placeholder  | `String`  | `false`  | `''`    | Placeholder for the textfield.                                 |
| label        | `String`  | `false`  | `''`    | Label for the textfield.                                       |
| value        | `String`  | `false`  | `''`    | `v-model` with the text of the textfield.                      |

### Slots

*This component does not provide any slots.*

### Events

*This component does not emit any events.*
