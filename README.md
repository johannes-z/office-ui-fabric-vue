# office-ui-fabric-vue

> Office UI Fabric (https://github.com/OfficeDev/office-ui-fabric)
> implementation for Vue.js

This is a **WIP**!

## Requirements

### [Office UI Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core)

The components provided by this library require the official CSS files. See [Get
started with Fabric
Core](https://developer.microsoft.com/en-us/fabric#/get-started).

## Installation

```sh
npm install --save-dev @johannes-z/office-ui-fabric-vue
```

```sh
yarn add -D @johannes-z/office-ui-fabric-vue
```

## Getting Started

### Prepare HTML

Office UI Fabric styles require two things:

1. The `dir` attribute on the container has to be set for some icons and styles,
   e.g. `dir="ltr"`.
2. The class `ms-Fabric` has to be set on the container, e.g. `<body
   class="ms-Fabric"></body>`

The template for the docs looks as follows:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title></title>
  </head>
  <body class="ms-Fabric">
    <div id="app"></div>
  </body>
</html>
```

### Install Plugin

After this step all components will be registered globally. You can use any of
the currently available components in your application (see docs for a list of
available components).

```js
import Vue from 'vue'
import Fabric from '@johannes-z/office-ui-fabric-vue'

import '@johannes-z/office-ui-fabric-vue/dist/office-ui-fabric-vue.css'

Vue.use(Fabric)
```

## Showcase

Showcasing components is done using [https://github.com/vuejs/vuepress](vuepress).

See `./docs` for an example how to add new pages.

## Contributing

Any contributions are welcome, as long as they follow the project's file/folder
structure and styles provided by the `.editorconfig` file and `eslint`.

**Important:** Keep dependencies of external libraries to a minimum.

### Compatibility

All components should be compatible with at least IE11.

## License

All files on the Office UI Fabric Vue GitHub repository are subject to the MIT
license, unless otherwise noted. Please read the License file at the root of the
project.

Usage of the fonts and icons referenced in Office UI Fabric is subject to the
terms of the assets license agreement.