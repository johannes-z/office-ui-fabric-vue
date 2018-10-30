# Button

## Overview

Buttons are best used to enable a user to commit a change or complete steps in a
task. They are typically found inside forms, dialogs, panels or pages. An
example of their usage is confirming the deletion of a file in a confirmation
dialog.

When considering their place in a layout, contemplate the order in which a user
will flow through the UI. As an example, in a form, the individual will need to
read and interact with the form fields before submiting the form. Therefore, as
a general rule, the button should be placed at the bottom of the UI container (a
dialog, panel, or page) which holds the related UI elements.

While buttons can technically be used to navigate a user to another part of the
experience, this is not recommended unless that navigation is part of an action
or their flow.

Note that both iconProps and menuIconProps take IIconProps to specify name and
type.

## Variants

### Default Button

<basics-Button-DefaultButton />

```vue
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VDefaultButton text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VDefaultButton :primary="true"
                        text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Standard</VLabel>
        <VDefaultButton :disabled="true"
                        text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Primary</VLabel>
        <VDefaultButton :disabled="true"
                        :primary="true"
                        text="Button" />
      </div>
    </div>
  </div>
```

### Compound Button

<basics-Button-CompoundButton />

```vue
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VCompoundButton text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VCompoundButton :primary="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Standard</VLabel>
        <VCompoundButton :disabled="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Primary</VLabel>
        <VCompoundButton :disabled="true"
                         :primary="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
    </div>
  </div>
```

### Icon Button

<basics-Button-IconButton />

```vue
  <div>
    <VIconButton icon-name="Emoji2" />
  </div>
```

### Action Button

<basics-Button-ActionButton />

```vue
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VActionButton icon-name="AddFriend">Create account</VActionButton>
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VActionButton :primary="true"
                       icon-name="AddFriend">Create account</VActionButton>
      </div>
    </div>
  </div>
```

## API

