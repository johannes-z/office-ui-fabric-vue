# office-ui-fabric-vue

> Office UI Fabric (https://github.com/OfficeDev/office-ui-fabric)
> implementation for Vue.js

## Requirements

### [Office UI Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core)

The components provided by this library require the official CSS files. See [Get
started with Fabric Core](https://developer.microsoft.com/en-us/fabric#/get-started).

## Installation

### Production

```sh
npm install --save-dev johannes-z/office-ui-fabric-vue
```

```sh
yarn add -D johannes-z/office-ui-fabric-vue
```

### Dev builds

```sh
npm install --save-dev johannes-z/office-ui-fabric-vue#dev
```

```sh
yarn add -D johannes-z/office-ui-fabric-vue#dev
```

## Contributing

Any contributions are welcome, as long as they follow the project's file/folder
structure and styles provided by the `.editorconfig` file and `eslint`.

**Important:** Keep dependencies of external libraries to a minimum.

### Compatibility

All components should be compatible with IE10 and later. If a component cannot
be realized without newer CSS features, then mention the earliest version that
has to be used for compatibility.

### Showcase

Showcasing components is done using https://github.com/vue-play/vue-play.

Create a file `<component>.play.js` in `./src/components/<component>/` to
automatically add the showcase.

```sh
yarn play
```

## Components

This library and the components are still in WIP, as shown in the list below.
If a component is missing in the list, development of it has not started yet.
Checked components are *mostly* done and implement most of the features of their
React counter-part.

- [ ] Breadcrumb
- [ ] Button
- [ ] Checkbox
- [ ] CommandBar
- [ ] Icon
- [x] Label
- [ ] Persona
- [ ] ProgressIndicator
- [ ] SearchBox
- [x] Spinner
- [ ] Toggle

## License

All files on the Office UI Fabric Vue GitHub repository are subject to the MIT
license, unless otherwise noted. Please read the License file at the root of the
project.

Usage of the fonts and icons referenced in Office UI Fabric is subject to the
terms of the assets license agreement.
