# office-ui-fabric-vue

> Office UI Fabric (https://github.com/OfficeDev/office-ui-fabric)
> implementation for Vue.js

This is a **WIP**!

## Requirements

### [Office UI Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core)

The components provided by this library require the official CSS files. See [Get
started with Fabric Core](https://developer.microsoft.com/en-us/fabric#/get-started).

## Installation

1. Installing the package

```sh
npm install --save-dev johannes-z/office-ui-fabric-vue
# for dev builds install:
npm install --save-dev johannes-z/office-ui-fabric-vue#dev
```

```sh
yarn add -D johannes-z/office-ui-fabric-vue
# for dev builds install:
yarn add -D johannes-z/office-ui-fabric-vue#dev
```

2. Install Plugin

```js
import Vue from 'vue'
import Fabric from 'office-ui-fabric-vue'

import 'office-ui-fabric-vue/dist/office-ui-fabric-vue.css'

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