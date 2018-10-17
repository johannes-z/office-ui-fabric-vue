(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["office-ui-fabric-vue"] = factory();
	else
		root["office-ui-fabric-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverflowSet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7248");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverflowSet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverflowSet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverflowSet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "04ef":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("74bf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1c77b34b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "07f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f3b6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalloutContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "087f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.titleLabel[data-v-572224c6]{padding:0\n}\n.line[data-v-572224c6]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative\n}\n.line .lineContainer[data-v-572224c6]{border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.container[data-v-572224c6]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.valueLabel[data-v-572224c6]{-ms-flex-negative:1;flex-shrink:1;width:30px;line-height:1\n}\n.slideBox[data-v-572224c6]{background:transparent;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;line-height:28px\n}\n.slideBox[data-v-572224c6]::-moz-focus-inner{border:0\n}\n.slideBox[data-v-572224c6]{outline:transparent;position:relative\n}\n.ms-Fabric.is-focusVisible .slideBox[data-v-572224c6]:focus:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid #000\n}\n.slideBox .thumb[data-v-572224c6]{border:2px solid #666;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;display:block;width:16px;height:16px;position:absolute;border-radius:10px\n}\n.rootIsHorizontal .line[data-v-572224c6]{width:100%\n}\n.rootIsHorizontal .line .lineContainer[data-v-572224c6]{height:4px\n}\n.rootIsHorizontal .slideBox[data-v-572224c6]{height:28px;padding:0 8px\n}\n.rootIsHorizontal .slideBox .thumb[data-v-572224c6]{top:-6px\n}\nhtml[dir=ltr] .rootIsHorizontal .slideBox .thumb[data-v-572224c6]{-webkit-transform:translateX(-50%);transform:translateX(-50%)\n}\nhtml[dir=rtl] .rootIsHorizontal .slideBox .thumb[data-v-572224c6]{-webkit-transform:translateX(50%);transform:translateX(50%)\n}\n.rootIsHorizontal .valueLabel[data-v-572224c6]{margin:0 8px;white-space:nowrap;width:40px\n}\n.rootIsVertical[data-v-572224c6]{margin-right:8px\n}\n.rootIsVertical .line[data-v-572224c6]{height:100%;width:4px;margin:0 auto;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse\n}\n.rootIsVertical .line .lineContainer[data-v-572224c6]{width:4px;height:100%\n}\n.rootIsVertical .slideBox[data-v-572224c6]{height:100%;width:28px;padding:8px 0\n}\n.rootIsVertical .slideBox .thumb[data-v-572224c6]{left:-6px;margin:0 auto;-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n.rootIsVertical .container[data-v-572224c6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;text-align:center;margin:8px 0\n}\n.rootIsVertical .valueLabel[data-v-572224c6]{margin:0 auto;white-space:nowrap;width:40px\n}\n.activeSection[data-v-572224c6]{background:#666\n}\n@media screen and (-ms-high-contrast:active){\n.activeSection[data-v-572224c6]{background-color:WindowText\n}\n}\n.inactiveSection[data-v-572224c6]{background:#c8c8c8\n}\n@media screen and (-ms-high-contrast:active){\n.inactiveSection[data-v-572224c6]{border:1px solid WindowText\n}\n}\n.showTransitions .thumb[data-v-572224c6]{-webkit-transition:left .367s cubic-bezier(.1,.9,.2,1);transition:left .367s cubic-bezier(.1,.9,.2,1)\n}\n.showTransitions .activeSection[data-v-572224c6],.showTransitions .inactiveSection[data-v-572224c6]{-webkit-transition:width .367s cubic-bezier(.1,.9,.2,1);transition:width .367s cubic-bezier(.1,.9,.2,1)\n}\n.rootIsEnabled .slideBox:active .thumb[data-v-572224c6],.rootIsEnabled .slideBox:hover .thumb[data-v-572224c6]{border:2px solid #0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.rootIsEnabled .slideBox:active .thumb[data-v-572224c6],.rootIsEnabled .slideBox:hover .thumb[data-v-572224c6]{border-color:Highlight\n}\n}\n.rootIsEnabled .slideBox:active .activeSection[data-v-572224c6],.rootIsEnabled .slideBox:hover .activeSection[data-v-572224c6]{background-color:#0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.rootIsEnabled .slideBox:active .activeSection[data-v-572224c6],.rootIsEnabled .slideBox:hover .activeSection[data-v-572224c6]{background-color:Highlight\n}\n}\n.rootIsEnabled .slideBox:active .inactiveSection[data-v-572224c6],.rootIsEnabled .slideBox:hover .inactiveSection[data-v-572224c6]{background-color:#c7e0f4\n}\n@media screen and (-ms-high-contrast:active){\n.rootIsEnabled .slideBox:active .inactiveSection[data-v-572224c6],.rootIsEnabled .slideBox:hover .inactiveSection[data-v-572224c6]{border-color:Highlight\n}\n}\n.rootIsEnabled .slideBox:active .thumb[data-v-572224c6]{border:2px solid #106ebe\n}\n.rootIsEnabled .slideBox:active .activeSection[data-v-572224c6]{background-color:#106ebe\n}\n.rootIsDisabled .thumb[data-v-572224c6]{border-color:#c8c8c8\n}\n@media screen and (-ms-high-contrast:active){\n.rootIsDisabled .thumb[data-v-572224c6]{border-color:GrayText\n}\n}\n@media screen and (-ms-high-contrast:active){\n.rootIsDisabled .activeSection[data-v-572224c6],.rootIsDisabled .inactiveSection[data-v-572224c6]{background-color:GrayText;border-color:GrayText\n}\n}\n.rootIsDisabled .activeSection[data-v-572224c6]{background:#c8c8c8\n}\n.rootIsDisabled .inactiveSection[data-v-572224c6]{background:#eaeaea\n}", ""]);

// exports


/***/ }),

/***/ "0933":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa19");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0975":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Persona[size=\"14\"]>.ms-Persona-details[data-v-e007de5e]{width:calc(100% - 87px)\n}\n.ms-Persona[size=\"9\"]>.ms-Persona-coin[data-v-e007de5e]{vertical-align:top\n}\n.ms-Persona[size=\"9\"]>.ms-Persona-details[data-v-e007de5e]{width:calc(100% - 25px)\n}\n.ms-Persona[data-v-e007de5e]{height:auto!important\n}\n.ms-Persona>.ms-Persona-coin[data-v-e007de5e]{position:relative;display:inline-block;vertical-align:middle;font-size:10px\n}\n.ms-Persona>.ms-Persona-coin>.ms-Icon[data-v-e007de5e]{padding-top:4px\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea[data-v-e007de5e]{position:relative;height:72px;width:72px;text-align:center\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea .ms-Persona-presence[data-v-e007de5e]{position:absolute;bottom:-2px;right:-2px;border-radius:50%;height:28px;width:28px;border:2px solid #fff;background-color:green\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea>.ms-Persona-initials[data-v-e007de5e]{height:72px;line-height:72px;font-size:28px;color:#fff;background-color:#1e7145;border-radius:50%\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea>.ms-Persona-image[data-v-e007de5e]{border-radius:50%;overflow:hidden\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea>.ms-Image[data-v-e007de5e]{height:72px;width:72px\n}\n.ms-Persona>.ms-Persona-coin>.ms-Persona-imageArea>.ms-Image>.ms-Image-image[data-v-e007de5e]{position:relative;width:100%;height:auto\n}\n.ms-Persona>.ms-Persona-details[data-v-e007de5e]{display:inline-block;vertical-align:middle;padding-left:10px\n}\n.ms-Persona>.ms-Persona-details .ms-Persona-primaryText[data-v-e007de5e]{font-size:16px;padding-bottom:1px\n}", ""]);

// exports


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1248":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("19ae");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("763a1d5c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "13fb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("73b5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3bb72f2e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "148c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43c8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "158f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-ChoiceField{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;font-size:14px;font-weight:400;min-height:26px;position:relative;margin-top:8px;border-width:initial;border-style:none;border-color:initial;-o-border-image:initial;border-image:initial\n}\n.ms-ChoiceField.isDisabled .ms-Label{color:#c8c8c8\n}\n.ms-ChoiceField.isDisabled .ms-ChoiceField-field:before{display:inline-block;background-color:#a6a6a6;width:20px;height:20px;font-weight:400;top:0;left:0;-webkit-transition-property:border-color;transition-property:border-color;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1);border-width:1px;border-style:solid;border-color:#a6a6a6\n}\n.ms-ChoiceField.isDisabled .ms-ChoiceField-field:after,.ms-ChoiceField.isDisabled .ms-ChoiceField-field:before{content:\"\";position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-duration:.2s;transition-duration:.2s;border-radius:50%\n}\n.ms-ChoiceField.isDisabled .ms-ChoiceField-field:after{width:0;height:0;left:10px;right:0;-webkit-transition-property:border-width;transition-property:border-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)\n}\n.ms-ChoiceField.isSelected .ms-ChoiceField-field:before{border-color:#0078d4\n}\n.ms-ChoiceField.isSelected .ms-ChoiceField-field:after{width:10px;height:10px;position:absolute;left:5px;right:0;-webkit-transition-property:border-width;transition-property:border-width;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1);-webkit-box-sizing:border-box;box-sizing:border-box;top:5px;border-width:5px;border-style:solid;border-color:#0078d4\n}\n.ms-ChoiceField .ms-ChoiceField-input{position:absolute;opacity:0;top:8px\n}\n.ms-ChoiceField .ms-ChoiceField-field{display:inline-block;cursor:pointer;margin-top:0;position:relative;vertical-align:top;min-height:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.ms-ChoiceField .ms-ChoiceField-field:before{display:inline-block;background-color:#fff;width:20px;height:20px;font-weight:400;top:0;left:0;-webkit-transition-property:border-color;transition-property:border-color;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1);border-width:1px;border-style:solid;border-color:#666\n}\n.ms-ChoiceField .ms-ChoiceField-field:after,.ms-ChoiceField .ms-ChoiceField-field:before{content:\"\";position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-duration:.2s;transition-duration:.2s;border-radius:50%\n}\n.ms-ChoiceField .ms-ChoiceField-field:after{width:0;height:0;left:10px;right:0;-webkit-transition-property:border-width;transition-property:border-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)\n}\n.ms-ChoiceField .ms-ChoiceField-field .ms-Label{font-size:14px;display:inline-block;padding-left:26px\n}", ""]);

// exports


/***/ }),

/***/ "18cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_c3dfd030_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a30a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_c3dfd030_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_c3dfd030_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_c3dfd030_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "18d5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("427d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2eade390", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "19ae":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\ndiv.ms-Breadcrumb{margin-top:23px;margin-right:0;margin-bottom:1px;margin-left:0\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-list{white-space:nowrap;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-listItem{list-style-type:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-itemLink{position:relative;color:#333;cursor:pointer;display:inline;font-size:21px;margin:0;padding:0 8px;text-align:left;text-overflow:ellipsis;white-space:nowrap;font-family:Segoe UI,\"Segoe UI Web (West European)\",-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:100;max-width:160px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:transparent;background:none transparent;border-width:initial;border-style:none;border-color:initial;-o-border-image:initial;border-image:initial;overflow:hidden;border-bottom:1px solid transparent;text-decoration:none\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-itemLink:hover{background-color:#f4f4f4;color:initial;cursor:pointer\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-chevron{display:inline-block;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;speak:none;font-family:FabricMDL2Icons;color:#666;font-size:12px\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-overflow{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\ndiv.ms-Breadcrumb .ms-Breadcrumb-overflowButton{position:relative;font-size:16px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;text-align:center;cursor:pointer;vertical-align:top;padding-top:0;padding-right:4px;padding-bottom:0;padding-left:4px;width:32px;height:100%;background-color:transparent;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:transparent;border-width:1px;border-style:solid;border-color:transparent;-o-border-image:initial;border-image:initial;text-decoration:none;border-radius:0;overflow:hidden\n}", ""]);

// exports


/***/ }),

/***/ "1abb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c50c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6d0529a6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1b4b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Shimmer-container[data-v-0cff7e00]{height:auto;position:relative\n}\n.ms-ShimmerElementsGroup-root[data-v-0cff7e00]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}", ""]);

// exports


/***/ }),

/***/ "1f16":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Slider{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.ms-Slider .ms-Slider-slideBox:hover{cursor:pointer\n}", ""]);

// exports


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "2181":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Modal{background-color:transparent;position:fixed;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:1;pointer-events:auto;-webkit-transition:opacity .267s ease 0s;transition:opacity .267s ease 0s\n}\n.ms-Dialog-main{-webkit-box-shadow:rgba(0,0,0,.4) 0 0 5px 0;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;text-align:left;max-height:100%;overflow-y:auto\n}\n.ms-Overlay{background-color:rgba(0,0,0,.4);top:0;right:0;bottom:0;left:0;position:absolute\n}", ""]);

// exports


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "240a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ec4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "243e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("18d5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "27f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_438568c5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fed7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_438568c5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_438568c5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_438568c5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_59ff20cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5274");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_59ff20cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_59ff20cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_59ff20cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2c64":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("55ef");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("103a0080", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3104":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-ChoiceFieldGroup{font-size:14px;font-weight:400;display:block\n}", ""]);

// exports


/***/ }),

/***/ "31ca":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Pivot-link{position:relative;height:auto\n}\n.ms-Pivot-link.isSelected .ms-Button-label{font-weight:700\n}\n.ms-Pivot-link.isSelected:before{background-color:transparent;bottom:0;content:\"\";height:2px;left:8px;position:absolute;right:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .267s cubic-bezier(.1,.25,.75,.9) 0s;transition:background-color .267s cubic-bezier(.1,.25,.75,.9) 0s;border-bottom:2px solid #0078d4\n}\n.ms-Pivot-link .ms-Button-label{line-height:40px\n}", ""]);

// exports


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3570":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button-label[data-v-db57977e]{min-width:80px\n}", ""]);

// exports


/***/ }),

/***/ "3669":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-SearchBox.is-active>.iconContainer[data-v-c3dfd030]{width:4px\n}\n.ms-SearchBox.is-active>.iconContainer>i[data-v-c3dfd030]{opacity:0\n}\n.ms-SearchBox.is-active>.field[data-v-c3dfd030]{width:calc(100% - 36px)\n}\n.ms-SearchBox.can-clear:not(.is-active)>.field[data-v-c3dfd030]{width:calc(100% - 64px)\n}\n.ms-SearchBox.is-disabled[data-v-c3dfd030]{background-color:#f8f8f8;border-color:#f8f8f8;color:#a6a6a6\n}\n.ms-SearchBox.is-disabled[data-v-c3dfd030],.ms-SearchBox.is-disabled>*[data-v-c3dfd030]{cursor:default\n}\n.ms-SearchBox.is-disabled>.iconContainer[data-v-c3dfd030]{color:#a6a6a6\n}\n.ms-SearchBox.is-disabled>.field[data-v-c3dfd030]{color:#fff;background-color:#f8f8f8\n}\n.ms-SearchBox.is-disabled>.clearButton[data-v-c3dfd030]{background-color:#f8f8f8\n}\n.root.is-underlined.is-disabled[data-v-c3dfd030]{background-color:#fff;border-bottom-color:#f8f8f8\n}\n.root.is-underlined.is-disabled>.field[data-v-c3dfd030]{background-color:#fff\n}\n.ms-SearchBox-container[data-v-c3dfd030]{width:100%\n}\n.root[data-v-c3dfd030]{padding-left:8px;color:#333;border:1px solid #a6a6a6;background-color:#fff;font-size:0;font-weight:400\n}\n.root input[data-v-c3dfd030]::-ms-clear{display:none\n}\n.root.is-underlined[data-v-c3dfd030]{border:0;border-bottom:1px solid #a6a6a6\n}\n.root>.iconContainer[data-v-c3dfd030]{float:left;font-size:16px;-webkit-transition:width .167s;transition:width .167s\n}\n.root>.iconContainer>i[data-v-c3dfd030]{opacity:1;-webkit-transition:opacity .167s 0s;transition:opacity .167s 0s\n}\n.root>.field[data-v-c3dfd030]{color:#333;float:left;font-size:14px;height:30px;margin:0;padding:0;text-overflow:ellipsis;overflow:hidden;border:none;width:calc(100% - 32px);outline:1px solid transparent;-webkit-transition:width .167s 0s;transition:width .167s 0s\n}\n.root>.clearButton[data-v-c3dfd030],.root>.iconContainer[data-v-c3dfd030]{color:#0078d4;text-align:center;width:32px\n}\n.root>.clearButton>.ms-Icon[data-v-c3dfd030],.root>.iconContainer>.ms-Icon[data-v-c3dfd030]{line-height:30px\n}\n.root>.clearButton[data-v-c3dfd030]{float:right\n}\n.root>.clearButton[data-v-c3dfd030]:hover{cursor:pointer\n}\n.root>.clearButton>i[data-v-c3dfd030],.root>.clearButton>i[data-v-c3dfd030]:before{font-size:12px\n}", ""]);

// exports


/***/ }),

/***/ "37a6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Label[data-v-ae4201c0]{color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;display:block;padding:5px 0;word-wrap:break-word;overflow-wrap:break-word\n}\n.ms-Label[data-v-ae4201c0]:disabled,.ms-Label[disabled][data-v-ae4201c0]{color:#c8c8c8\n}\n.ms-Label[data-v-ae4201c0]:required:after,.ms-Label[required][data-v-ae4201c0]:after{content:\" *\";color:#a80000;padding-right:12px\n}", ""]);

// exports


/***/ }),

/***/ "38f5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("37a6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("720c927c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3945":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Pivot{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;font-weight:400;position:relative;color:#0078d4;white-space:nowrap\n}", ""]);

// exports


/***/ }),

/***/ "3ab6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf3c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3bf0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shimmer_vue_vue_type_style_index_0_id_0cff7e00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6539");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shimmer_vue_vue_type_style_index_0_id_0cff7e00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shimmer_vue_vue_type_style_index_0_id_0cff7e00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shimmer_vue_vue_type_style_index_0_id_0cff7e00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "427d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Layer{z-index:1000000;top:0;left:0;width:100%;height:100vh;visibility:hidden\n}\n.ms-Layer>*{visibility:visible\n}\n.ms-Layer--fixed{position:fixed\n}", ""]);

// exports


/***/ }),

/***/ "43c8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2181");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0cc75dd8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "494e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ef7d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ef8e5e66", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommandBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5b8d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommandBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommandBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommandBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "49c4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("087f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("603f34c7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5274":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d268");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4948b430", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "55a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1abb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "55ef":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.Panel_css_2ZV8T{overflow:hidden!important\n}", ""]);

// exports
exports.locals = {
	"css": "Panel_css_2ZV8T"
};

/***/ }),

/***/ "5a62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9174");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5b8d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7598");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("af76eed2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5c53":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Callout-container{position:relative\n}\n.ms-Callout-container .ms-Callout{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:rgba(0,0,0,.4) 0 0 5px 0;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-width:1px;border-style:solid;border-color:#eaeaea;outline:transparent\n}\n.ms-Callout-container .ms-Callout .ms-Callout-beak{position:absolute;background-color:#fff;-webkit-box-shadow:inherit;box-shadow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);height:16px;width:16px;border:inherit\n}\n.ms-Callout-container .ms-Callout .ms-Callout-beakCurtain{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff\n}\n.ms-Callout-container .ms-Callout .ms-Callout-main{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:relative\n}", ""]);

// exports


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d5d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button--action{background-color:transparent;font-weight:400;padding:0 4px\n}\n.ms-Button--action .ms-Icon{color:#106ebe;font-size:16px;line-height:16px;margin:0 4px\n}\n.ms-Button--action:not(.ms-Button--primary):hover{background-color:transparent;color:#0078d4\n}\n.ms-Button--action:not(.ms-Button--primary):hover .ms-Icon{color:#0078d4\n}\n.ms-Button--action .ms-Button-label{font-weight:400\n}", ""]);

// exports


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5e7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c64");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_0_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ec4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("84c2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("741657e5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "60f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc58");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6111":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PivotItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd74");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PivotItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PivotItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PivotItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6539":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1b4b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("08db661a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6db6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_id_572224c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("49c4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_id_572224c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_id_572224c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_id_572224c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6edf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-ProgressIndicator{font-weight:400\n}\n.ms-ProgressIndicator-itemName{color:#333;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-top:4px;line-height:20px\n}\n.ms-ProgressIndicator-itemDescription{color:#767676;font-size:11px;line-height:18px\n}\n.ms-ProgressIndicator-itemProgress{position:relative;overflow:hidden;height:2px;padding:8px 0\n}\n.ms-ProgressIndicator-progressTrack{position:absolute;width:100%;height:2px;background-color:#eaeaea\n}\n@media screen and (-ms-high-contrast:active){\n.ms-ProgressIndicator-progressTrack{border-bottom:1px solid WindowText\n}\n}\n.ms-ProgressIndicator-progressBar{background-color:#0078d4;height:2px;position:absolute;-webkit-transition:width .3s ease;transition:width .3s ease;width:0\n}\n.ms-ProgressIndicator-progressBar.indeterminate{position:absolute;min-width:33%;background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(50%,#0078d4),to(transparent));background:linear-gradient(90deg,transparent 0,#0078d4 50%,transparent);-webkit-animation:indeterminateProgress 3s infinite;animation:indeterminateProgress 3s infinite\n}\n.ms-ProgressIndicator-progressBar.smoothTransition{-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.15s;transition-duration:.15s\n}\n@media screen and (-ms-high-contrast:active){\n.ms-ProgressIndicator-progressBar{background-color:WindowText\n}\n}\nhtml[dir=rtl] .ms-ProgressIndicator-progressBar.indeterminate{-webkit-animation:indeterminateProgressRTL 3s infinite;animation:indeterminateProgressRTL 3s infinite\n}\n@-webkit-keyframes indeterminateProgress{\n0%{left:-30%\n}\nto{left:100%\n}\n}\n@keyframes indeterminateProgress{\n0%{left:-30%\n}\nto{left:100%\n}\n}\n@-webkit-keyframes indeterminateProgressRTL{\n0%{right:-30%\n}\nto{right:100%\n}\n}\n@keyframes indeterminateProgressRTL{\n0%{right:-30%\n}\nto{right:100%\n}\n}", ""]);

// exports


/***/ }),

/***/ "7248":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("82fc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("140c7772", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "73b5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button--icon{background-color:transparent;padding:0 4px;width:32px;height:32px\n}\n.ms-Button--icon:hover{background-color:transparent;color:#004578\n}\n.ms-Button--icon .ms-Icon{font-size:16px;line-height:16px\n}", ""]);

// exports


/***/ }),

/***/ "74bf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-SpinButton{font-size:14px;width:100%;min-width:86px;outline:none\n}\n.ms-SpinButton .ms-SpinButton-label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:left;margin-right:10px\n}\n.ms-SpinButton .ms-SpinButton-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;height:32px;min-width:86px;border-width:1px;border-style:solid;border-color:#a6a6a6\n}\n.ms-SpinButton .ms-SpinButton-container:hover{border-color:#212121;outline:2px dashed transparent\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-input{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;font-size:14px;color:#333;height:100%;padding-top:0;padding-right:12px;padding-bottom:0;padding-left:12px;text-overflow:ellipsis;display:block;float:left;width:calc(100% - 14px);min-width:72px;cursor:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;border-style:none;outline:0;overflow:hidden\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons{font-size:12px;float:left;height:100%\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons,.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons .ms-SpinButton-button{display:block;cursor:default;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons .ms-SpinButton-button{position:relative;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;text-align:center;vertical-align:top;width:14px;height:50%;background-color:transparent;color:#333;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-width:1px;border-style:solid;border-color:transparent;-o-border-image:initial;border-image:initial;text-decoration:none;border-radius:0\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons .ms-SpinButton-button:hover{color:#000;background-color:#eaeaea\n}\n.ms-SpinButton .ms-SpinButton-container .ms-SpinButton-icons .ms-SpinButton-button .ms-Icon{font-size:6px\n}", ""]);

// exports


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7598":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-CommandBar-primaryCommands{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1\n}\n.ms-CommandBar-primaryCommands,.ms-CommandBar-secondaryCommand{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch\n}\n.ms-CommandBar-secondaryCommand,.ms-CommandBarItem{-ms-flex-negative:0;flex-shrink:0\n}\n.ms-CommandBarItem{display:inherit\n}\n.ms-CommandBar{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f4f4f4;padding-top:0;padding-right:16px;padding-bottom:0;padding-left:16px;height:40px\n}\n.ms-CommandBar .ms-Button:hover{background-color:#eaeaea\n}\n.ms-CommandBar .ms-Button,.ms-CommandBar .ms-Button:hover{color:#333\n}\n.ms-CommandBar .ms-Button{height:40px;text-align:left\n}\n.ms-CommandBar .ms-Button .ms-Button-label{min-width:0\n}", ""]);

// exports


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "781b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_style_index_0_id_e007de5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db68");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_style_index_0_id_e007de5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_style_index_0_id_e007de5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_style_index_0_id_e007de5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7c3b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b675");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7c6a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("158f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ffe637f6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7ff5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f9d1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "82fc":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-OverflowSet{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap\n}\n.rootVertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.ms-OverflowSet-item,.ms-OverflowSet-overflowButton{-ms-flex-negative:0;flex-shrink:0;display:inherit\n}\n.ms-OverflowSet-overflowButton button.overflowButton{min-width:0;padding:0 4px;-ms-flex-item-align:stretch;align-self:stretch;height:auto\n}\nhtml[dir=ltr] .overflowLinks{margin-right:10px\n}\nhtml[dir=rtl] .overflowLinks{margin-left:10px\n}", ""]);

// exports


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84c2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Link{color:#0078d4;margin:0;overflow:inherit;padding:0;text-overflow:inherit;font-size:12px\n}\n.ms-Link:not(.isDisabled):focus,.ms-Link:not(.isDisabled):hover{color:#004578;cursor:pointer\n}\n.ms-Link:not(.isDisabled):active{color:#0078d4\n}\n.isDisabled{color:#a6a6a6;pointer-events:none;cursor:default\n}\nbutton.ms-Link{background:none;border:none;cursor:pointer;display:inline\n}\nbutton.ms-Link::-moz-focus-inner{border:0\n}\nbutton.ms-Link{outline:transparent;position:relative\n}\n.ms-Fabric.is-focusVisible button.ms-Link:focus:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid #000\n}\nhtml[dir=ltr] button.ms-Link{text-align:left\n}\nhtml[dir=rtl] button.ms-Link{text-align:right\n}\n@media screen and (-ms-high-contrast:active){\nbutton.ms-Link{color:Highlight\n}\n}\na.ms-Link{text-decoration:none\n}\n.ms-Fabric.is-focusVisible a.ms-Link:focus{outline:1px solid #000\n}", ""]);

// exports


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b7d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3945");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("01ca3a6e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9174":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("99a6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("448fa0e4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "945f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Panel{z-index:600;pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.ms-Panel.rootIsOpen .ms-Panel-main{pointer-events:auto\n}\n:not([dir=ltr]) .ms-Panel-main,[dir=ltr] .ms-Panel-main{right:0\n}\n.ms-Panel-main{background-color:#fff;position:absolute;width:100%;bottom:0;top:0;overflow-x:hidden;overflow-y:auto\n}\n@media (min-width:480px){\n.ms-Panel.rootIsSmall .ms-Panel-main{width:340px\n}\n}\n@media (min-width:1024px){\n.ms-Panel-header{margin-top:30px!important\n}\n}\n.ms-Panel-navigation{padding:0 5px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end\n}\n.ms-Panel-closeButton{height:auto;width:44px;color:#666;font-size:16px\n}\n.ms-Panel-closeButton:hover{color:#333;background:transparent\n}\n.ms-Panel-headerText{font-size:21px;font-weight:100;color:#333;line-height:32px;margin:0\n}\n.ms-Panel-header{margin:14px 0\n}\n.ms-Panel-footer,.ms-Panel-header{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0\n}\n@media (min-width:768px){\n.ms-Panel-content,.ms-Panel-footerInner,.ms-Panel-header{padding-left:32px;padding-right:32px\n}\n}\n.ms-Panel-contentInner{top:44px;position:absolute;bottom:0;left:0;right:0;overflow-y:hidden\n}\n.ms-Panel-footerInner{padding-bottom:20px;padding-top:20px\n}\n@media (min-width:480px){\n:not([dir=ltr]) .ms-Panel-main,[dir=ltr] .ms-Panel-main{border-left:1px solid #eaeaea;border-right:1px solid #eaeaea;-webkit-box-shadow:-30px 0 30px -30px rgba(0,0,0,.2);box-shadow:-30px 0 30px -30px rgba(0,0,0,.2)\n}\n}", ""]);

// exports


/***/ }),

/***/ "958d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5d5d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6813a4cb", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "99a6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Dropdown-container{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:14px;font-weight:400;color:#333;position:relative;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.ms-Dropdown-container:active .ms-Dropdown-caretDown,.ms-Dropdown-container:active .ms-Dropdown-title,.ms-Dropdown-container:focus .ms-Dropdown-caretDown,.ms-Dropdown-container:focus .ms-Dropdown-title,.ms-Dropdown-container:hover .ms-Dropdown-caretDown,.ms-Dropdown-container:hover .ms-Dropdown-title{color:#212121\n}\n.ms-Dropdown-container:active .ms-Dropdown-titleIsPlaceHolder,.ms-Dropdown-container:focus .ms-Dropdown-titleIsPlaceHolder,.ms-Dropdown-container:hover .ms-Dropdown-titleIsPlaceHolder{color:#666\n}\n.ms-Dropdown-container:hover .ms-Dropdown-title{border-color:#212121\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container:hover .ms-Dropdown-title{border-color:Highlight\n}\n}\n.ms-Dropdown-container:hover .ms-Dropdown-titleIsError{border-color:#a80000\n}\n.ms-Dropdown-container:active .ms-Dropdown-title{border-color:#005a9e\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container:active .ms-Dropdown-title{border-color:Highlight\n}\n}\n.ms-Dropdown-container:active .ms-Dropdown-titleIsError{border-color:#a80000\n}\n.ms-Dropdown-container:focus .ms-Dropdown-title{border-color:#0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container:focus .ms-Dropdown-title{background-color:Highlight;border-color:Highlight;color:HighlightText\n}\n}\n@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:black-on-white){\n.ms-Dropdown-container:focus .ms-Dropdown-title{-ms-high-contrast-adjust:none\n}\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container:focus .ms-Dropdown-caretDown{color:HighlightText\n}\n}\n@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:black-on-white){\n.ms-Dropdown-container:focus .ms-Dropdown-caretDown{-ms-high-contrast-adjust:none\n}\n}\n.ms-Dropdown-container .ms-Dropdown-titleIsError,.ms-Dropdown-container:focus .ms-Dropdown-titleIsError{border-color:#a80000\n}\n.ms-Dropdown-container .ms-Label{display:inline-block;margin-bottom:8px\n}\n.ms-Dropdown-container.rootIsDisabled .ms-Dropdown-title{background-color:#f4f4f4;border:none;color:#a6a6a6;cursor:default\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container.rootIsDisabled .ms-Dropdown-title{border:1px solid GrayText;color:GrayText\n}\n}\n.ms-Dropdown-container.rootIsDisabled .ms-Dropdown-title.ms-Dropdown-titleIsError{border-color:#a80000\n}\n.ms-Dropdown-container.rootIsDisabled .ms-Dropdown-caretDown{color:#a6a6a6\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-container.rootIsDisabled .ms-Dropdown-caretDown{color:GrayText\n}\n}\n.ms-Dropdown-listWrapper:focus{outline:0\n}\n.ms-Dropdown-caretDownWrapper{position:absolute;top:1px;height:32px;line-height:30px\n}\n[dir=ltr] .ms-Dropdown-caretDownWrapper{right:12px\n}\n[dir=rtl] .ms-Dropdown-caretDownWrapper{left:12px\n}\n.ms-Dropdown-caretDown{color:#666;font-size:12px;pointer-events:none\n}\n.ms-Dropdown-title{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;background:#fff;border:1px solid #a6a6a6;cursor:pointer;display:block;height:32px;line-height:30px;padding:0 32px 0 12px;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis\n}\nhtml[dir=rtl] .ms-Dropdown-title{padding:0 12px 0 32px\n}\n.ms-Dropdown-title.ms-Dropdown-titleIsPlaceHolder{color:#666\n}\n[dir=ltr] .ms-Dropdown-panel .ms-Panel-main{-webkit-box-shadow:-30px 0 30px -30px rgba(0,0,0,.2);box-shadow:-30px 0 30px -30px rgba(0,0,0,.2)\n}\n[dir=rtl] .ms-Dropdown-panel .ms-Panel-main{-webkit-box-shadow:30px 0 30px -30px rgba(0,0,0,.2);box-shadow:30px 0 30px -30px rgba(0,0,0,.2)\n}\n.ms-Dropdown-panel .ms-Panel-contentInner{padding:0 0 20px\n}\n.ms-Dropdown-callout.callout{-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.2);box-shadow:0 0 2px 0 rgba(0,0,0,.2);border:1px solid #eaeaea\n}\n.ms-Dropdown-errorMessage{color:#a80000;font-size:12px;font-weight:400;padding-top:5px\n}\n.ms-Dropdown-items{display:block\n}\n.ms-Dropdown-item{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;width:100%;min-height:32px;line-height:20px;height:auto!important;padding:4px 16px!important;position:relative;border:1px solid transparent;word-wrap:break-word;overflow-wrap:break-word;text-align:left\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-item{border-color:Window\n}\n}\n.ms-Dropdown-item:hover{background-color:#f4f4f4!important\n}\n.ms-Dropdown-item:focus{background-color:#f4f4f4\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-item:focus{background-color:Highlight;border-color:Highlight;color:HighlightText\n}\n}\n@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:black-on-white){\n.ms-Dropdown-item:focus{-ms-high-contrast-adjust:none\n}\n}\n.ms-Dropdown-item:active{background-color:#f4f4f4;color:#000\n}\n.ms-Dropdown-item.itemIsDisabled{color:#a6a6a6;cursor:default\n}\n.ms-Dropdown-item .ms-Button-flexContainer{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start\n}\n.ms-Dropdown-item.itemIsSelected{background-color:#dadada;color:#000\n}\n@media screen and (-ms-high-contrast:active){\n.ms-Dropdown-item.itemIsSelected{background-color:Highlight;border-color:Highlight;color:HighlightText\n}\n}\n@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:black-on-white){\n.ms-Dropdown-item.itemIsSelected{-ms-high-contrast-adjust:none\n}\n}\n.ms-Dropdown-item.itemIsSelected.itemIsDisabled{color:#a6a6a6;background-color:transparent\n}\n.ms-Dropdown-header{font-size:14px;font-weight:400;font-weight:600;color:#0078d4;background:none;background-color:transparent;border:none;height:32px;line-height:32px;cursor:default;padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\nhtml[dir=ltr] .ms-Dropdown-header{text-align:left\n}\nhtml[dir=rtl] .ms-Dropdown-header{text-align:right\n}\n.ms-Dropdown-divider{height:1px;background-color:#c8c8c8\n}\n.ms-Dropdown-optionText{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;min-width:0;max-width:100%;word-wrap:break-word;overflow-wrap:break-word;margin:1px\n}\n.ms-Dropdown{-webkit-box-shadow:none;box-shadow:none;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Segoe UI,\"Segoe UI Web (West European)\",-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:#333;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0\n}", ""]);

// exports


/***/ }),

/***/ "99b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1248");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a30a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3669");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("441c51b6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a8c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("494e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aab1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aaf8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("67d99ebc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aaf8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b3e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompoundButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c56d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompoundButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompoundButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompoundButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b675":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eeb9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4e1aef96", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b809":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3570");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6d2ab758", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b9db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c6a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChoiceField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ba82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc6c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc58":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dafe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0fad6a5c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bc6c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1f16");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fd3aee04", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bd33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pivot_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8b7d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pivot_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pivot_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pivot_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c50c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "c56d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e7be");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5e20d0a0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c629":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextualMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aab1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextualMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextualMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextualMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd03":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6edf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("9b00382e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cf3c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("945f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("75af81cc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d009":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_1_id_db57977e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b809");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_1_id_db57977e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_1_id_db57977e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultButton_vue_vue_type_style_index_1_id_db57977e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d268":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\ninput.ms-TextField[data-v-59ff20cd],textarea.ms-TextField[data-v-59ff20cd]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;position:relative\n}\n.screenReaderOnly[data-v-59ff20cd]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0\n}\n.fieldGroup[data-v-59ff20cd]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:1px solid #a6a6a6;background:#fff;height:32px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:relative\n}\n.fieldGroup[data-v-59ff20cd]:hover{border-color:#212121\n}\n.fieldGroup.fieldGroupIsFocused[data-v-59ff20cd]{border-color:#0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.fieldGroup.fieldGroupIsFocused[data-v-59ff20cd]{border-width:2px\n}\n.fieldGroup.fieldGroupIsFocused .field[data-v-59ff20cd],[dir=rtl] .fieldGroup.fieldGroupIsFocused .field[data-v-59ff20cd]{padding:0 11px 0 11px\n}\n}\n.fieldGroup.fieldGroupIsFocused.invalid[data-v-59ff20cd]{border-color:#a80000\n}\n.rootIsDisabled .fieldGroup[data-v-59ff20cd]{background-color:#f4f4f4;border-color:#f4f4f4\n}\n@media screen and (-ms-high-contrast:active){\n.fieldGroup.fieldGroupIsFocused[data-v-59ff20cd],.fieldGroup[data-v-59ff20cd]:hover{border-color:Highlight\n}\n}\n.fieldGroup[data-v-59ff20cd]::-ms-clear{display:none\n}\n.fieldGroup[data-v-59ff20cd] :-ms-input-placeholder{color:#666;opacity:1\n}\n.fieldGroup[data-v-59ff20cd] :-ms-input-placeholder,.fieldGroup[data-v-59ff20cd] ::-ms-input-placeholder{color:#666;opacity:1\n}\n.fieldGroup[data-v-59ff20cd] :-ms-input-placeholder,.fieldGroup[data-v-59ff20cd] ::placeholder{color:#666;opacity:1\n}\n.ms-TextField.rootIsDisabled[data-v-59ff20cd] .field{background-color:#f4f4f4;border-color:#f4f4f4\n}\n.fieldPrefixSuffix[data-v-59ff20cd]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f4f4f4;color:#666;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;padding:0 10px;white-space:nowrap\n}\n.field[data-v-59ff20cd]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:14px;border-radius:0;border:none;background:none;background-color:transparent;color:#333;padding:0 12px 0 12px;width:100%;min-width:0;text-overflow:ellipsis;outline:0\n}\n[dir=rtl] .field[data-v-59ff20cd]{padding:0 12px 0 12px\n}\n.field[data-v-59ff20cd]:active,.field[data-v-59ff20cd]:focus,.field[data-v-59ff20cd]:hover{outline:0\n}\n[dir=ltr] .field.hasIcon[data-v-59ff20cd]{padding-right:24px\n}\n[dir=rtl] .field.hasIcon[data-v-59ff20cd]{padding-left:24px\n}\n.field[disabled][data-v-59ff20cd]{background-color:transparent;border-color:transparent\n}\n.field[data-v-59ff20cd]::-webkit-input-placeholder{color:#666\n}\n.field[data-v-59ff20cd]:-ms-input-placeholder{color:#666\n}\n.field[data-v-59ff20cd]::-ms-input-placeholder{color:#666\n}\n.field[data-v-59ff20cd]::placeholder{color:#666\n}\n.ms-TextField.rootIsRequiredLabel[data-v-59ff20cd] .ms-Label:after{content:\" *\";color:#a80000\n}\n.ms-TextField.rootIsRequiredPlaceholderOnly[data-v-59ff20cd] .ms-TextField-fieldGroup:after{content:\"*\";color:#a80000;position:absolute;top:-5px\n}\n[dir=ltr] .ms-TextField.rootIsRequiredPlaceholderOnly[data-v-59ff20cd] .ms-TextField-fieldGroup:after{right:-10px\n}\n[dir=rtl] .ms-TextField.rootIsRequiredPlaceholderOnly[data-v-59ff20cd] .ms-TextField-fieldGroup:after{left:-10px\n}\n.ms-TextField.rootIsActive[data-v-59ff20cd]{border-color:#0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.ms-TextField.rootIsActive[data-v-59ff20cd]{border-width:2px\n}\n.ms-TextField.rootIsActive .field[data-v-59ff20cd],[dir=rtl] .ms-TextField.rootIsActive .field[data-v-59ff20cd]{padding:0 11px 0 11px\n}\n}\n.icon[data-v-59ff20cd]{pointer-events:none;position:absolute;bottom:5px;top:auto;font-size:16px;line-height:18px\n}\nhtml[dir=ltr] .icon[data-v-59ff20cd]{right:8px\n}\nhtml[dir=rtl] .icon[data-v-59ff20cd]{left:8px\n}\n.description[data-v-59ff20cd]{color:#666;font-size:11px\n}\n.rootIsBorderless .fieldGroup[data-v-59ff20cd]{border-color:transparent;border-width:0\n}\n.ms-TextField.rootIsUnderlined[data-v-59ff20cd]{border:0 solid #a6a6a6\n}\n.ms-TextField.rootIsUnderlined .wrapper[data-v-59ff20cd]{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:inherit;width:100%\n}\n.ms-TextField.rootIsUnderlined .wrapper.invalid[data-v-59ff20cd],.ms-TextField.rootIsUnderlined .wrapper.invalid[data-v-59ff20cd]:focus,.ms-TextField.rootIsUnderlined .wrapper.invalid[data-v-59ff20cd]:hover{border-bottom:1px solid #a80000\n}\n.ms-TextField.rootIsUnderlined[data-v-59ff20cd] .ms-Label{font-size:14px;line-height:22px;height:32px\n}\n[dir=ltr] .ms-TextField.rootIsUnderlined[data-v-59ff20cd] .ms-Label{margin-right:8px\n}\n[dir=rtl] .ms-TextField.rootIsUnderlined[data-v-59ff20cd] .ms-Label{margin-left:8px\n}\n[dir=ltr] .ms-TextField.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-left:12px\n}\n[dir=rtl] .ms-TextField.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-right:12px\n}\n.ms-TextField.rootIsUnderlined .fieldGroup[data-v-59ff20cd]{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;border-width:0\n}\n[dir=ltr] .ms-TextField.rootIsUnderlined .fieldGroup[data-v-59ff20cd]{text-align:left\n}\n[dir=rtl] .ms-TextField.rootIsUnderlined .fieldGroup[data-v-59ff20cd]{text-align:right\n}\n.ms-TextField.rootIsUnderlined.rootIsDisabled[data-v-59ff20cd]{border-color:#f4f4f4\n}\n.ms-TextField.rootIsUnderlined.rootIsDisabled[data-v-59ff20cd] .ms-Label{color:#a6a6a6\n}\n.ms-TextField.rootIsUnderlined.rootIsDisabled .field[data-v-59ff20cd]{background-color:transparent;color:#a6a6a6\n}\n.ms-TextField.rootIsUnderlined.rootIsDisabled .fieldGroup[data-v-59ff20cd]{background-color:transparent\n}\n.ms-TextField.rootIsUnderlined[data-v-59ff20cd]:hover:not(.rootIsActive):not(.rootIsDisabled){border-color:#212121\n}\n.ms-TextField.rootIsUnderlined.rootIsActive[data-v-59ff20cd]{border-color:#0078d4\n}\n@media screen and (-ms-high-contrast:active){\n.ms-TextField.rootIsUnderlined.rootIsActive[data-v-59ff20cd]{border-width:2px\n}\n.ms-TextField.rootIsUnderlined.rootIsActive .field[data-v-59ff20cd],[dir=rtl] .ms-TextField.rootIsUnderlined.rootIsActive .field[data-v-59ff20cd]{padding:0 11px 0 11px\n}\n}\n@media screen and (-ms-high-contrast:active){\n.ms-TextField.rootIsUnderlined.rootIsActive .wrapper[data-v-59ff20cd],.ms-TextField.rootIsUnderlined:hover:not(.rootIsDisabled) .wrapper[data-v-59ff20cd]{border-color:Highlight\n}\n}\n.ms-TextField.rootIsMultiline .fieldGroup[data-v-59ff20cd]{min-height:60px;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.ms-TextField.rootIsMultiline .field[data-v-59ff20cd]{line-height:17px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-top:6px;overflow:auto;width:100%\n}\n[dir=ltr] .ms-TextField.rootIsMultiline .field.hasIcon[data-v-59ff20cd]{padding-right:40px\n}\n[dir=rtl] .ms-TextField.rootIsMultiline .field.hasIcon[data-v-59ff20cd]{padding-left:40px\n}\n.errorMessage[data-v-59ff20cd]{font-size:12px;font-weight:400;color:#a80000;margin:0;padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.invalid[data-v-59ff20cd],.invalid[data-v-59ff20cd]:focus,.invalid[data-v-59ff20cd]:hover{border-color:#a80000\n}\n[dir=ltr] .root.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-left:12px\n}\n[dir=rtl] .root.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-right:12px\n}\n[dir=ltr] .root.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-right:0\n}\n[dir=rtl] .root.rootIsUnderlined[data-v-59ff20cd] .ms-Label{padding-left:0\n}\nhtml[dir=ltr] .root.rootIsUnderlined .field[data-v-59ff20cd]{text-align:left\n}\nhtml[dir=rtl] .root.rootIsUnderlined .field[data-v-59ff20cd]{text-align:right\n}\n.ms-TextField.rootIsMultiline .icon[data-v-59ff20cd]{padding-bottom:8px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end\n}\n[dir=ltr] .ms-TextField.rootIsMultiline .icon[data-v-59ff20cd]{padding-right:24px\n}\n[dir=rtl] .ms-TextField.rootIsMultiline .icon[data-v-59ff20cd]{padding-left:24px\n}\n.ms-TextField.rootIsMultiline .field.fieldIsUnresizable[data-v-59ff20cd]{resize:none\n}\n.hidden[data-v-59ff20cd]{display:none\n}", ""]);

// exports


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dafe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Checkbox{display:block;position:relative;padding:0;margin:0;cursor:pointer!important;outline:none;border-width:initial;border-style:initial;border-color:initial;-o-border-image:initial;border-image:initial;background:none;line-height:21px;font-size:14px\n}\n.ms-Checkbox.is-checked .ms-Checkbox-checkbox>i{color:#fff;opacity:1\n}\n.ms-Checkbox:not(.is-checked) .ms-Checkbox-checkbox>i{opacity:0\n}\n.ms-Checkbox:not(.is-checked):not(.is-disabled):hover .ms-Checkbox-checkbox>i{color:#666;opacity:1\n}\n.ms-Checkbox.is-checked.is-disabled .ms-Checkbox-checkbox{border-color:#c8c8c8;background-color:#c8c8c8\n}\n.ms-Checkbox.is-checked:not(.is-disabled) .ms-Checkbox-checkbox{border-color:#0078d4;background-color:#0078d4\n}\n.ms-Checkbox.is-disabled:not(.is-checked) .ms-Checkbox-checkbox{border-color:#c8c8c8\n}\n.ms-Checkbox .ms-Checkbox-label{height:22px;display:inline-block;cursor:pointer\n}\n.ms-Checkbox .ms-Checkbox-checkbox{display:inline-block;vertical-align:baseline;height:20px;width:20px;margin:0 4px;border-width:1px;border-style:solid;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)\n}\n.ms-Checkbox .ms-Checkbox-checkbox>i{vertical-align:top;display:inline-block\n}\n.ms-Checkbox .ms-Checkbox-text{display:inline-block;vertical-align:baseline;color:#333;margin:0 4px\n}", ""]);

// exports


/***/ }),

/***/ "db68":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0975");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1cff27e7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "dd74":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("31ca");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("119943e9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "dede":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04ef");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "df55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("13fb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e7be":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button--compound{padding:20px;max-width:280px;min-height:72px;height:auto\n}\n.ms-Button--compound .ms-Button-textContainer{text-align:left\n}\n.ms-Button--compound .ms-Button-label{margin:0 0 5px 0\n}\n.ms-Button--compound .ms-Button-description{font-family:Segoe UI,\"Segoe UI Web (West European)\",-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;line-height:100%;color:#666\n}\n.ms-Button--primary .ms-Button-description{color:#fff\n}", ""]);

// exports


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "e87a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_style_index_0_id_ae4201c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("38f5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_style_index_0_id_ae4201c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_style_index_0_id_ae4201c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_style_index_0_id_ae4201c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "eeb9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button-label{font-weight:600;margin:0 4px;line-height:100%\n}", ""]);

// exports


/***/ }),

/***/ "ef7d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.ms-Button.is-disabled .ms-Button-description,.ms-Button.is-disabled .ms-Button-label{color:#a6a6a6\n}\n.ms-Button{font-weight:400;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;text-decoration:none;text-align:center;cursor:pointer;vertical-align:top;padding:0 16px;border-radius:0;height:32px;background-color:#f8f8f8\n}\n.ms-Button:focus,.ms-Button:hover{outline:transparent\n}\n.ms-Button:hover{background-color:#eaeaea\n}\n.ms-Button.ms-Button--primary{background-color:#0078d4;color:#fff\n}\n.ms-Button.ms-Button--primary:hover{background-color:#106ebe\n}\n.ms-Button.ms-Button--primary.is-disabled:hover{background-color:#f8f8f8\n}\n.ms-Button.ms-Button--primary .ms-Icon{color:#fff\n}\n.ms-Button.is-disabled{background-color:#f8f8f8\n}\n.ms-Button.is-disabled:hover{cursor:default\n}\n.ms-Button-flexContainer{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.ms-Button-textContainer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1\n}\n.ms-Button-label{font-weight:600;margin:0 4px;line-height:100%\n}", ""]);

// exports


/***/ }),

/***/ "f3b6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5c53");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("509c5ed1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f4e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd03");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f5b1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.root.is-active .pill[data-v-438568c5]{background:#0078d4\n}\n.root.is-active .thumb[data-v-438568c5]{background:#fff;float:right\n}\n.root:not(.is-active) .pill[data-v-438568c5]{background:#fff;border-color:#666\n}\n.root:not(.is-active) .thumb[data-v-438568c5]{background:#212121;float:left\n}\n.root.is-disabled .pill[data-v-438568c5]{background:#c8c8c8;cursor:default\n}\n.root.is-disabled.is-active .ms-Label[data-v-438568c5],.root.is-disabled.is-active .text[data-v-438568c5],.root.is-disabled .ms-Label[data-v-438568c5],.root.is-disabled .text[data-v-438568c5]{color:#a6a6a6\n}\n.root.is-disabled:not(.is-active) .pill[data-v-438568c5]{background:#fff;border-color:#a6a6a6\n}\n.root.is-disabled:not(.is-active) .thumb[data-v-438568c5]{background:#a6a6a6\n}\n.root .label[data-v-438568c5]{display:block\n}\n.root .container[data-v-438568c5]{display:inline-block\n}\n.root .pill[data-v-438568c5]{position:relative;font-size:20px;width:2.2em;height:1em;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .2em;outline:transparent;border-radius:1em;border-width:1px\n}\n.root .pill[data-v-438568c5],.root .thumb[data-v-438568c5]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .1s ease;transition:all .1s ease;border-style:solid;border-color:transparent\n}\n.root .thumb[data-v-438568c5]{width:.5em;height:.5em;background-color:#fff;border-radius:.5em;border-width:.28em\n}\n.root .pill[data-v-438568c5],.root .text[data-v-438568c5]{display:inline-block;vertical-align:middle\n}\n.root .text[data-v-438568c5]{margin:0 10px\n}\n.root .root[data-v-438568c5],.root .text[data-v-438568c5]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}", ""]);

// exports


/***/ }),

/***/ "f6af":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes spinAnimation{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n@keyframes spinAnimation{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n.ms-Spinner .ms-Spinner-circle{margin:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation-name:spinAnimation;animation-name:spinAnimation;-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(.53,.21,.29,.67);animation-timing-function:cubic-bezier(.53,.21,.29,.67);border-radius:50%;border-width:1.5px;border-style:solid;border-color:#0078d4 #c7e0f4 #c7e0f4;-o-border-image:initial;border-image:initial\n}\n.ms-Spinner .ms-Spinner-label{color:#0078d4;margin-top:10px;text-align:center\n}", ""]);

// exports


/***/ }),

/***/ "f968":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("958d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f9d1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f6af");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("72507640", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fa19":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3104");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("60504836", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "VBreadcrumb", function() { return Breadcrumb; });
__webpack_require__.d(components_namespaceObject, "VActionButton", function() { return ActionButton; });
__webpack_require__.d(components_namespaceObject, "VDefaultButton", function() { return DefaultButton; });
__webpack_require__.d(components_namespaceObject, "VCompoundButton", function() { return CompoundButton; });
__webpack_require__.d(components_namespaceObject, "VCommandBarButton", function() { return CommandBarButton; });
__webpack_require__.d(components_namespaceObject, "VSplitButton", function() { return SplitButton; });
__webpack_require__.d(components_namespaceObject, "VPrimaryButton", function() { return PrimaryButton; });
__webpack_require__.d(components_namespaceObject, "VIconButton", function() { return IconButton; });
__webpack_require__.d(components_namespaceObject, "VCallout", function() { return Callout; });
__webpack_require__.d(components_namespaceObject, "VCheckbox", function() { return Checkbox; });
__webpack_require__.d(components_namespaceObject, "VChoiceGroup", function() { return ChoiceGroup; });
__webpack_require__.d(components_namespaceObject, "CommandBar", function() { return CommandBar; });
__webpack_require__.d(components_namespaceObject, "VContextualMenu", function() { return ContextualMenu; });
__webpack_require__.d(components_namespaceObject, "VContextualMenuItem", function() { return ContextualMenuItem; });
__webpack_require__.d(components_namespaceObject, "VDropdown", function() { return Dropdown; });
__webpack_require__.d(components_namespaceObject, "VIcon", function() { return Icon; });
__webpack_require__.d(components_namespaceObject, "VLabel", function() { return Label; });
__webpack_require__.d(components_namespaceObject, "VLayer", function() { return Layer; });
__webpack_require__.d(components_namespaceObject, "VLink", function() { return Link; });
__webpack_require__.d(components_namespaceObject, "VModal", function() { return Modal; });
__webpack_require__.d(components_namespaceObject, "VPanel", function() { return Panel; });
__webpack_require__.d(components_namespaceObject, "Persona", function() { return Persona; });
__webpack_require__.d(components_namespaceObject, "VPivot", function() { return Pivot; });
__webpack_require__.d(components_namespaceObject, "VPivotItem", function() { return PivotItem; });
__webpack_require__.d(components_namespaceObject, "OverflowSet", function() { return OverflowSet; });
__webpack_require__.d(components_namespaceObject, "VProgressIndicator", function() { return ProgressIndicator; });
__webpack_require__.d(components_namespaceObject, "SearchBox", function() { return SearchBox; });
__webpack_require__.d(components_namespaceObject, "Shimmer", function() { return Shimmer; });
__webpack_require__.d(components_namespaceObject, "Spinner", function() { return Spinner; });
__webpack_require__.d(components_namespaceObject, "VSpinButton", function() { return SpinButton; });
__webpack_require__.d(components_namespaceObject, "VSlider", function() { return Slider; });
__webpack_require__.d(components_namespaceObject, "VTextField", function() { return TextField; });
__webpack_require__.d(components_namespaceObject, "VToggle", function() { return Toggle; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=3e162e56&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Breadcrumb",class:_vm.customClasses},[_c('ol',{staticClass:"ms-Breadcrumb-list"},[_vm._l((_vm.renderedItems),function(item,index){return [(_vm.hasOverflowItems && index === _vm.overflowIndex)?_c('li',{key:'overflow' + index,staticClass:"ms-Breadcrumb-listItem"},[_c('VIconButton',{attrs:{"icon-name":"More"}}),_c('VIcon',{staticClass:"ms-Breadcrumb-chevron",attrs:{"icon-name":"ChevronRight"}})],1):_vm._e(),_c('li',{key:item.key,staticClass:"ms-Breadcrumb-listItem"},[_c('VLink',{staticClass:"ms-Breadcrumb-itemLink"},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")]),(index < _vm.renderedItems.length - 1)?_c('VIcon',{staticClass:"ms-Breadcrumb-chevron",attrs:{"icon-name":"ChevronRight"}}):_vm._e()],1)]})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=3e162e56&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/IconButton/IconButton.vue?vue&type=template&id=42b83325&
var IconButtonvue_type_template_id_42b83325_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-button',_vm._b({staticClass:"ms-Button--icon"},'base-button',_vm.$props,false),[_c('VIcon',{attrs:{"icon-name":_vm.iconName}})],1)}
var IconButtonvue_type_template_id_42b83325_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/IconButton/IconButton.vue?vue&type=template&id=42b83325&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/BaseButton.vue?vue&type=template&id=0c9e4614&
var BaseButtonvue_type_template_id_0c9e4614_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.href ? 'a' : 'button',{tag:"component",staticClass:"ms-Button",class:_vm.classObj,attrs:{"disabled":_vm.disabled,"type":"button"}},[_c('div',{staticClass:"ms-Button-flexContainer"},[_vm._t("default")],2)])}
var BaseButtonvue_type_template_id_0c9e4614_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/BaseButton.vue?vue&type=template&id=0c9e4614&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/BaseButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseButtonvue_type_script_lang_js_ = ({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    classObj: function classObj() {
      return {
        'ms-Button--primary': this.primary,
        'is-disabled': this.disabled
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button/BaseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_BaseButtonvue_type_script_lang_js_ = (BaseButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button/BaseButton.vue?vue&type=style&index=0&lang=scss&
var BaseButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("a8c6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Button/BaseButton.vue






/* normalize component */

var component = normalizeComponent(
  Button_BaseButtonvue_type_script_lang_js_,
  BaseButtonvue_type_template_id_0c9e4614_render,
  BaseButtonvue_type_template_id_0c9e4614_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "BaseButton.vue"
/* harmony default export */ var BaseButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon/Icon.vue?vue&type=template&id=07def104&
var Iconvue_type_template_id_07def104_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"ms-Icon",class:[("ms-Icon--" + _vm.iconName)],attrs:{"aria-hidden":"true"}})}
var Iconvue_type_template_id_07def104_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Icon/Icon.vue?vue&type=template&id=07def104&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Icon/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  props: {
    iconName: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/Icon/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icon_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Icon/Icon.vue?vue&type=style&index=0&lang=scss&
var Iconvue_type_style_index_0_lang_scss_ = __webpack_require__("55a9");

// CONCATENATED MODULE: ./src/components/Icon/Icon.vue






/* normalize component */

var Icon_component = normalizeComponent(
  Icon_Iconvue_type_script_lang_js_,
  Iconvue_type_template_id_07def104_render,
  Iconvue_type_template_id_07def104_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Icon_component.options.__file = "Icon.vue"
/* harmony default export */ var Icon = (Icon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/IconButton/IconButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconButtonvue_type_script_lang_js_ = ({
  components: {
    BaseButton: BaseButton,
    VIcon: Icon
  },
  extends: BaseButton,
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button/IconButton/IconButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var IconButton_IconButtonvue_type_script_lang_js_ = (IconButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button/IconButton/IconButton.vue?vue&type=style&index=0&lang=scss&
var IconButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("df55");

// CONCATENATED MODULE: ./src/components/Button/IconButton/IconButton.vue






/* normalize component */

var IconButton_component = normalizeComponent(
  IconButton_IconButtonvue_type_script_lang_js_,
  IconButtonvue_type_template_id_42b83325_render,
  IconButtonvue_type_template_id_42b83325_staticRenderFns,
  false,
  null,
  null,
  null
  
)

IconButton_component.options.__file = "IconButton.vue"
/* harmony default export */ var IconButton = (IconButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Link/Link.vue?vue&type=template&id=30ab6176&
var Linkvue_type_template_id_30ab6176_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.href ? 'a' : 'button',{tag:"component",staticClass:"ms-Link",class:{ isDisabled: _vm.isDisabled },attrs:{"href":_vm.href}},[_vm._t("default")],2)}
var Linkvue_type_template_id_30ab6176_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Link/Link.vue?vue&type=template&id=30ab6176&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Link/Link.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Linkvue_type_script_lang_js_ = ({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.disabled;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Link/Link.vue?vue&type=script&lang=js&
 /* harmony default export */ var Link_Linkvue_type_script_lang_js_ = (Linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Link/Link.vue?vue&type=style&index=0&lang=scss&
var Linkvue_type_style_index_0_lang_scss_ = __webpack_require__("240a");

// CONCATENATED MODULE: ./src/components/Link/Link.vue






/* normalize component */

var Link_component = normalizeComponent(
  Link_Linkvue_type_script_lang_js_,
  Linkvue_type_template_id_30ab6176_render,
  Linkvue_type_template_id_30ab6176_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Link_component.options.__file = "Link.vue"
/* harmony default export */ var Link = (Link_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  components: {
    VIcon: Icon,
    VIconButton: IconButton,
    VLink: Link
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    customClasses: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxDisplayedItems: {
      type: Number,
      default: 999
    },
    overflowIndex: {
      type: Number,
      default: 0
    },
    dividerAs: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      renderedItems: [],
      renderedOverflowItems: []
    };
  },
  computed: {
    hasOverflowItems: function hasOverflowItems() {
      return this.renderedOverflowItems && this.renderedOverflowItems.length > 0;
    }
  },
  created: function created() {
    var items = this.items,
        overflowIndex = this.overflowIndex,
        maxDisplayedItems = this.maxDisplayedItems;

    var renderedItems = _toConsumableArray(items);

    var renderedOverflowItems = renderedItems.splice(overflowIndex, renderedItems.length - maxDisplayedItems);
    this.renderedItems = renderedItems;
    this.renderedOverflowItems = renderedOverflowItems;
    console.log({
      renderedItems: renderedItems,
      renderedOverflowItems: renderedOverflowItems
    });
  }
});
// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Breadcrumb/Breadcrumb.vue?vue&type=style&index=0&lang=scss&
var Breadcrumbvue_type_style_index_0_lang_scss_ = __webpack_require__("99b1");

// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue






/* normalize component */

var Breadcrumb_component = normalizeComponent(
  Breadcrumb_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Breadcrumb_component.options.__file = "Breadcrumb.vue"
/* harmony default export */ var Breadcrumb = (Breadcrumb_component.exports);
// CONCATENATED MODULE: ./src/components/Breadcrumb/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=template&id=db57977e&scoped=true&
var DefaultButtonvue_type_template_id_db57977e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-button',_vm._b({staticClass:"ms-Button--default"},'base-button',_vm.$props,false),[_c('div',{staticClass:"ms-Button-textContainer"},[_c('div',{staticClass:"ms-Button-label"},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)])])}
var DefaultButtonvue_type_template_id_db57977e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=template&id=db57977e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DefaultButtonvue_type_script_lang_js_ = ({
  components: {
    BaseButton: BaseButton
  },
  extends: BaseButton
});
// CONCATENATED MODULE: ./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var DefaultButton_DefaultButtonvue_type_script_lang_js_ = (DefaultButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=style&index=0&lang=scss&
var DefaultButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("7c3b");

// EXTERNAL MODULE: ./src/components/Button/DefaultButton/DefaultButton.vue?vue&type=style&index=1&id=db57977e&lang=scss&scoped=true&
var DefaultButtonvue_type_style_index_1_id_db57977e_lang_scss_scoped_true_ = __webpack_require__("d009");

// CONCATENATED MODULE: ./src/components/Button/DefaultButton/DefaultButton.vue







/* normalize component */

var DefaultButton_component = normalizeComponent(
  DefaultButton_DefaultButtonvue_type_script_lang_js_,
  DefaultButtonvue_type_template_id_db57977e_scoped_true_render,
  DefaultButtonvue_type_template_id_db57977e_scoped_true_staticRenderFns,
  false,
  null,
  "db57977e",
  null
  
)

DefaultButton_component.options.__file = "DefaultButton.vue"
/* harmony default export */ var DefaultButton = (DefaultButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/ActionButton/ActionButton.vue?vue&type=template&id=6f89f894&
var ActionButtonvue_type_template_id_6f89f894_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BaseButton',_vm._b({staticClass:"ms-Button--action ms-Button-command"},'BaseButton',_vm.$props,false),[(_vm.iconName)?_c('VIcon',{attrs:{"icon-name":_vm.iconName}}):_vm._e(),_c('div',{staticClass:"ms-Button-textContainer"},[_c('div',{staticClass:"ms-Button-label"},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)])],1)}
var ActionButtonvue_type_template_id_6f89f894_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/ActionButton/ActionButton.vue?vue&type=template&id=6f89f894&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/ActionButton/ActionButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ActionButtonvue_type_script_lang_js_ = ({
  components: {
    BaseButton: BaseButton,
    VIcon: Icon
  },
  extends: BaseButton,
  props: {
    iconName: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button/ActionButton/ActionButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActionButton_ActionButtonvue_type_script_lang_js_ = (ActionButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button/ActionButton/ActionButton.vue?vue&type=style&index=0&lang=scss&
var ActionButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("f968");

// CONCATENATED MODULE: ./src/components/Button/ActionButton/ActionButton.vue






/* normalize component */

var ActionButton_component = normalizeComponent(
  ActionButton_ActionButtonvue_type_script_lang_js_,
  ActionButtonvue_type_template_id_6f89f894_render,
  ActionButtonvue_type_template_id_6f89f894_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ActionButton_component.options.__file = "ActionButton.vue"
/* harmony default export */ var ActionButton = (ActionButton_component.exports);
// CONCATENATED MODULE: ./src/components/Button/CommandBarButton/CommandBarButton.vue
var CommandBarButton_render, CommandBarButton_staticRenderFns
var script = {}


/* normalize component */

var CommandBarButton_component = normalizeComponent(
  script,
  CommandBarButton_render,
  CommandBarButton_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CommandBarButton_component.options.__file = "CommandBarButton.vue"
/* harmony default export */ var CommandBarButton = (CommandBarButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/CompoundButton/CompoundButton.vue?vue&type=template&id=06cc5d30&
var CompoundButtonvue_type_template_id_06cc5d30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-button',_vm._b({staticClass:"ms-Button--compound"},'base-button',_vm.$props,false),[_c('div',{staticClass:"ms-Button-textContainer"},[_c('div',{staticClass:"ms-Button-label"},[_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")]),_c('div',{staticClass:"ms-Button-description"},[_vm._v("\n      "+_vm._s(_vm.secondaryText)+"\n    ")])])])}
var CompoundButtonvue_type_template_id_06cc5d30_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/CompoundButton/CompoundButton.vue?vue&type=template&id=06cc5d30&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/CompoundButton/CompoundButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CompoundButtonvue_type_script_lang_js_ = ({
  components: {
    BaseButton: BaseButton
  },
  extends: BaseButton,
  props: {
    secondaryText: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button/CompoundButton/CompoundButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var CompoundButton_CompoundButtonvue_type_script_lang_js_ = (CompoundButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button/CompoundButton/CompoundButton.vue?vue&type=style&index=0&lang=scss&
var CompoundButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("b3e8");

// CONCATENATED MODULE: ./src/components/Button/CompoundButton/CompoundButton.vue






/* normalize component */

var CompoundButton_component = normalizeComponent(
  CompoundButton_CompoundButtonvue_type_script_lang_js_,
  CompoundButtonvue_type_template_id_06cc5d30_render,
  CompoundButtonvue_type_template_id_06cc5d30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CompoundButton_component.options.__file = "CompoundButton.vue"
/* harmony default export */ var CompoundButton = (CompoundButton_component.exports);
// CONCATENATED MODULE: ./src/components/Button/SplitButton/SplitButton.vue
var SplitButton_render, SplitButton_staticRenderFns
var SplitButton_script = {}


/* normalize component */

var SplitButton_component = normalizeComponent(
  SplitButton_script,
  SplitButton_render,
  SplitButton_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SplitButton_component.options.__file = "SplitButton.vue"
/* harmony default export */ var SplitButton = (SplitButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/PrimaryButton/PrimaryButton.vue?vue&type=template&id=60e8c32c&
var PrimaryButtonvue_type_template_id_60e8c32c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('default-button',_vm._b({attrs:{"primary":true}},'default-button',_vm.$props,false),[_c('div',{staticClass:"ms-Button-textContainer"},[_c('div',{staticClass:"ms-Button-label"},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)])])}
var PrimaryButtonvue_type_template_id_60e8c32c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button/PrimaryButton/PrimaryButton.vue?vue&type=template&id=60e8c32c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button/PrimaryButton/PrimaryButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PrimaryButtonvue_type_script_lang_js_ = ({
  components: {
    DefaultButton: DefaultButton
  },
  extends: DefaultButton
});
// CONCATENATED MODULE: ./src/components/Button/PrimaryButton/PrimaryButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var PrimaryButton_PrimaryButtonvue_type_script_lang_js_ = (PrimaryButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Button/PrimaryButton/PrimaryButton.vue





/* normalize component */

var PrimaryButton_component = normalizeComponent(
  PrimaryButton_PrimaryButtonvue_type_script_lang_js_,
  PrimaryButtonvue_type_template_id_60e8c32c_render,
  PrimaryButtonvue_type_template_id_60e8c32c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

PrimaryButton_component.options.__file = "PrimaryButton.vue"
/* harmony default export */ var PrimaryButton = (PrimaryButton_component.exports);
// CONCATENATED MODULE: ./src/components/Button/index.js
// import BaseButton from './BaseButton.vue'
 // import Button from './Button.vue'

 // import BarButton from './CommandBarButton/CommandBarButton.vue'







// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Callout/Callout.vue?vue&type=template&id=2c944366&
var Calloutvue_type_template_id_2c944366_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.doNotLayer)?_c('VCalloutContent',_vm._b({on:{"onBlur":function($event){_vm.$emit('onBlur', $event)}}},'VCalloutContent',_vm.$props,false)):_c('VLayer',[_c('VCalloutContent',_vm._b({on:{"onBlur":function($event){_vm.$emit('onBlur', $event)}}},'VCalloutContent',_vm.$props,false),[_vm._t("default")],2)],1)}
var Calloutvue_type_template_id_2c944366_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Callout/Callout.vue?vue&type=template&id=2c944366&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Layer/Layer.vue?vue&type=template&id=90a29fb4&
var Layervue_type_template_id_90a29fb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Layer",class:( _obj = {}, _obj['ms-Layer--fixed'] = !_vm.hostId, _obj )},[_c('div',{staticClass:"ms-Fabric ms-Layer-content"},[_vm._t("default")],2)])
var _obj;}
var Layervue_type_template_id_90a29fb4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Layer/Layer.vue?vue&type=template&id=90a29fb4&

// CONCATENATED MODULE: ./src/utilities/dom.js
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */

function setSSR(isEnabled) {
  _isSSR = isEnabled;
}
function getDocument(rootElement) {
  if (_isSSR || typeof document === 'undefined') {
    return undefined;
  } else {
    return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./src/components/Layer/Layer.notification.js

var _layersByHostId = {};
var _defaultHostSelector = null;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */

function registerLayer(hostId, layer) {
  if (!_layersByHostId[hostId]) {
    _layersByHostId[hostId] = [];
  }

  _layersByHostId[hostId].push(layer);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */

function unregisterLayer(hostId, layer) {
  if (_layersByHostId[hostId]) {
    var idx = _layersByHostId[hostId].indexOf(layer);

    if (idx >= 0) {
      _layersByHostId[hostId].splice(idx, 1);

      if (_layersByHostId[hostId].length === 0) {
        delete _layersByHostId[hostId];
      }
    }
  }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */

function notifyHostChanged(id) {
  console.log('notifyHostChanged');

  if (_layersByHostId[id]) {
    _layersByHostId[id].forEach(function (layer) {
      return layer.forceUpdate();
    });
  }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */

function setDefaultTarget(selector) {
  _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */

function getDefaultTarget() {
  return _defaultHostSelector;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Layer/Layer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Layervue_type_script_lang_js_ = ({
  props: {
    hostId: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      node: {}
    };
  },
  computed: {
    isFixed: function isFixed() {
      return true;
    }
  },
  created: function created() {
    if (this.hostId) {
      registerLayer(this.hostId, this);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.hostId) {
      unregisterLayer(this.hostId, this);
    }

    var parentNode = this.node.parentNode;

    if (parentNode) {
      parentNode.removeChild(this.node);
    }

    this.node = undefined;
  },
  mounted: function mounted() {
    var host = this.getHost();
    this.node = host.appendChild(this.$el);
  },
  methods: {
    getHost: function getHost() {
      var hostId = this.hostId;
      var doc = getDocument();

      if (hostId) {
        return doc.getElementById(hostId);
      } else {
        var defaultHostSelector = getDefaultTarget();
        return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Layer/Layer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layer_Layervue_type_script_lang_js_ = (Layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Layer/Layer.vue?vue&type=style&index=0&lang=scss&
var Layervue_type_style_index_0_lang_scss_ = __webpack_require__("243e");

// CONCATENATED MODULE: ./src/components/Layer/Layer.vue






/* normalize component */

var Layer_component = normalizeComponent(
  Layer_Layervue_type_script_lang_js_,
  Layervue_type_template_id_90a29fb4_render,
  Layervue_type_template_id_90a29fb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Layer_component.options.__file = "Layer.vue"
/* harmony default export */ var Layer = (Layer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Callout/CalloutContent.vue?vue&type=template&id=2002e980&
var CalloutContentvue_type_template_id_2002e980_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"ms-Callout-container"},[_c('div',{staticClass:"ms-Callout",style:(_vm.styleContainer)},[(_vm.isBeakVisible)?_c('div',{staticClass:"ms-Callout-beak",staticStyle:{"left":"51.2344px","top":"-8px"}}):_vm._e(),_c('div',{staticClass:"ms-Callout-beakCurtain"}),_c('div',{staticClass:"ms-Callout-main"},[_vm._t("default",[_c('p',{staticClass:"ms-font-xl"},[_vm._v("All of your favorite people")]),_c('p',[_vm._v("Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.")])])],2)])])}
var CalloutContentvue_type_template_id_2002e980_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Callout/CalloutContent.vue?vue&type=template&id=2002e980&

// CONCATENATED MODULE: ./src/components/Callout/propsMixin.js

/* harmony default export */ var propsMixin = ({
  props: {
    calloutMaxHeight: {
      type: Number,
      default: null
    },
    doNotLayer: {
      type: Boolean,
      default: true
    },
    target: {
      type: Object,
      required: true
    },
    isBeakVisible: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Callout/CalloutContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CalloutContentvue_type_script_lang_js_ = ({
  mixins: [propsMixin],
  computed: {
    styleContainer: function styleContainer() {
      var rect = this.target.getBoundingClientRect();
      return {
        width: "".concat(rect.width, "px"),
        left: "".concat(rect.left, "px"),
        top: "".concat(rect.top + rect.height, "px")
      };
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.onClick);
  },
  mounted: function mounted() {
    document.addEventListener('click', this.onClick);
  },
  methods: {
    onClick: function onClick(event) {
      var index = event.path.indexOf(this.$refs.container);
      if (index > -1) return;
      this.$emit('onBlur', event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Callout/CalloutContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Callout_CalloutContentvue_type_script_lang_js_ = (CalloutContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Callout/CalloutContent.vue?vue&type=style&index=0&lang=scss&
var CalloutContentvue_type_style_index_0_lang_scss_ = __webpack_require__("07f3");

// CONCATENATED MODULE: ./src/components/Callout/CalloutContent.vue






/* normalize component */

var CalloutContent_component = normalizeComponent(
  Callout_CalloutContentvue_type_script_lang_js_,
  CalloutContentvue_type_template_id_2002e980_render,
  CalloutContentvue_type_template_id_2002e980_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CalloutContent_component.options.__file = "CalloutContent.vue"
/* harmony default export */ var CalloutContent = (CalloutContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Callout/Callout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Calloutvue_type_script_lang_js_ = ({
  components: {
    VLayer: Layer,
    VCalloutContent: CalloutContent
  },
  mixins: [propsMixin]
});
// CONCATENATED MODULE: ./src/components/Callout/Callout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Callout_Calloutvue_type_script_lang_js_ = (Calloutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Callout/Callout.vue





/* normalize component */

var Callout_component = normalizeComponent(
  Callout_Calloutvue_type_script_lang_js_,
  Calloutvue_type_template_id_2c944366_render,
  Calloutvue_type_template_id_2c944366_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Callout_component.options.__file = "Callout.vue"
/* harmony default export */ var Callout = (Callout_component.exports);
// CONCATENATED MODULE: ./src/components/Callout/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Checkbox/Checkbox.vue?vue&type=template&id=bf808118&
var Checkboxvue_type_template_id_bf808118_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-Checkbox",class:_vm.classObj,attrs:{"id":_vm.id,"role":"checkbox","type":"button"},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.toggleChecked($event)}}},[_c('VLabel',{staticClass:"ms-Checkbox-label",attrs:{"for":_vm.id}},[(_vm.boxSide === 'end')?_c('span',{staticClass:"ms-Checkbox-text"},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]):_vm._e(),_c('div',{staticClass:"ms-Checkbox-checkbox"},[_c('VIcon',{staticClass:"ms-Checkbox-checkmark",attrs:{"icon-name":"CheckMark"}})],1),(_vm.boxSide === 'start')?_c('span',{staticClass:"ms-Checkbox-text"},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()])],1)}
var Checkboxvue_type_template_id_bf808118_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.vue?vue&type=template&id=bf808118&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Checkboxvue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String,
      default: ''
    },
    boxSide: {
      type: String,
      default: 'start',
      validator: function validator(v) {
        return v === 'start' || v === 'end';
      }
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id: function id() {
      return 'Checkbox' + this._uid;
    },
    classObj: function classObj() {
      var obj = {};
      obj['is-checked'] = this.value;
      obj['is-enabled'] = !this.disabled;
      obj['is-disabled'] = this.disabled;
      return obj;
    }
  },
  methods: {
    toggleChecked: function toggleChecked() {
      if (this.disabled) return;
      this.$emit('onChange', !this.value);
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkbox_Checkboxvue_type_script_lang_js_ = (Checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Checkbox/Checkbox.vue?vue&type=style&index=0&lang=scss&
var Checkboxvue_type_style_index_0_lang_scss_ = __webpack_require__("60f8");

// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.vue






/* normalize component */

var Checkbox_component = normalizeComponent(
  Checkbox_Checkboxvue_type_script_lang_js_,
  Checkboxvue_type_template_id_bf808118_render,
  Checkboxvue_type_template_id_bf808118_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Checkbox_component.options.__file = "Checkbox.vue"
/* harmony default export */ var Checkbox = (Checkbox_component.exports);
// CONCATENATED MODULE: ./src/components/Checkbox/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChoiceGroup/ChoiceGroup.vue?vue&type=template&id=17829dca&
var ChoiceGroupvue_type_template_id_17829dca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ChoiceFieldGroup"},[(_vm.label)?_c('VLabel',{attrs:{"required":_vm.required}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"ms-ChoiceFieldGroup-flexContainer"},_vm._l((_vm.options),function(option,index){return _c('VChoiceField',{key:index,attrs:{"index":index,"option":option},on:{"input":_vm.onChange},model:{value:(_vm.selectedIndex),callback:function ($$v) {_vm.selectedIndex=$$v},expression:"selectedIndex"}})}))],1)}
var ChoiceGroupvue_type_template_id_17829dca_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceGroup.vue?vue&type=template&id=17829dca&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Label/Label.vue?vue&type=template&id=ae4201c0&scoped=true&
var Labelvue_type_template_id_ae4201c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"ms-Label",attrs:{"disabled":_vm.disabled,"required":_vm.required}},[_vm._t("default")],2)}
var Labelvue_type_template_id_ae4201c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Label/Label.vue?vue&type=template&id=ae4201c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Label/Label.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Labelvue_type_script_lang_js_ = ({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/Label/Label.vue?vue&type=script&lang=js&
 /* harmony default export */ var Label_Labelvue_type_script_lang_js_ = (Labelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Label/Label.vue?vue&type=style&index=0&id=ae4201c0&lang=scss&scoped=true&
var Labelvue_type_style_index_0_id_ae4201c0_lang_scss_scoped_true_ = __webpack_require__("e87a");

// CONCATENATED MODULE: ./src/components/Label/Label.vue






/* normalize component */

var Label_component = normalizeComponent(
  Label_Labelvue_type_script_lang_js_,
  Labelvue_type_template_id_ae4201c0_scoped_true_render,
  Labelvue_type_template_id_ae4201c0_scoped_true_staticRenderFns,
  false,
  null,
  "ae4201c0",
  null
  
)

Label_component.options.__file = "Label.vue"
/* harmony default export */ var Label = (Label_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChoiceGroup/ChoiceField.vue?vue&type=template&id=42ba2d1f&
var ChoiceFieldvue_type_template_id_42ba2d1f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ChoiceField",class:{ isDisabled: _vm.isDisabled, isSelected: _vm.isSelected },on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.selectChoice($event)}}},[_c('div',{staticClass:"ms-ChoiceField-wrapper"},[_c('input',{staticClass:"ms-ChoiceField-input",attrs:{"id":_vm.key,"disabled":_vm.option.disabled,"type":"radio"}}),_c('label',{staticClass:"ms-ChoiceField-field",attrs:{"for":_vm.key}},[_c('span',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.option.text))])])])])}
var ChoiceFieldvue_type_template_id_42ba2d1f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceField.vue?vue&type=template&id=42ba2d1f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChoiceGroup/ChoiceField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChoiceFieldvue_type_script_lang_js_ = ({
  props: {
    option: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.option.disabled;
    },
    isSelected: function isSelected() {
      return this.index === this.value;
    },
    key: function key() {
      return "ChoiceGroup-".concat(this._uid);
    }
  },
  methods: {
    selectChoice: function selectChoice() {
      if (this.option.disabled) return;
      this.$emit('input', this.index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceField.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChoiceGroup_ChoiceFieldvue_type_script_lang_js_ = (ChoiceFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ChoiceGroup/ChoiceField.vue?vue&type=style&index=0&lang=scss&
var ChoiceFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("b9db");

// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceField.vue






/* normalize component */

var ChoiceField_component = normalizeComponent(
  ChoiceGroup_ChoiceFieldvue_type_script_lang_js_,
  ChoiceFieldvue_type_template_id_42ba2d1f_render,
  ChoiceFieldvue_type_template_id_42ba2d1f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ChoiceField_component.options.__file = "ChoiceField.vue"
/* harmony default export */ var ChoiceField = (ChoiceField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ChoiceGroup/ChoiceGroup.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ChoiceGroupvue_type_script_lang_js_ = ({
  components: {
    VLabel: Label,
    VChoiceField: ChoiceField
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var _this = this;

    return {
      selectedIndex: this.options.findIndex(function (o) {
        return o.key === _this.value;
      })
    };
  },
  methods: {
    onChange: function onChange(index) {
      var option = this.options[index];
      var key = option.key,
          text = option.text;
      this.$emit('input', key || text);
      this.$emit('onChange', option);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChoiceGroup_ChoiceGroupvue_type_script_lang_js_ = (ChoiceGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ChoiceGroup/ChoiceGroup.vue?vue&type=style&index=0&lang=scss&
var ChoiceGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("0933");

// CONCATENATED MODULE: ./src/components/ChoiceGroup/ChoiceGroup.vue






/* normalize component */

var ChoiceGroup_component = normalizeComponent(
  ChoiceGroup_ChoiceGroupvue_type_script_lang_js_,
  ChoiceGroupvue_type_template_id_17829dca_render,
  ChoiceGroupvue_type_template_id_17829dca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ChoiceGroup_component.options.__file = "ChoiceGroup.vue"
/* harmony default export */ var ChoiceGroup = (ChoiceGroup_component.exports);
// CONCATENATED MODULE: ./src/components/ChoiceGroup/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommandBar/CommandBar.vue?vue&type=template&id=46b07154&
var CommandBarvue_type_template_id_46b07154_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-FocusZone ms-CommandBar",attrs:{"role":"menubar"}},[_c('div',{staticClass:"ms-CommandBar-primaryCommands"},_vm._l((_vm.items),function(item,index){return _c('div',{key:item.key || index,staticClass:"ms-CommandBarItem"},[_c('VActionButton',{attrs:{"icon-name":item.icon},nativeOn:{"click":function($event){_vm.onClick($event, item)}}},[_vm._v("\n        "+_vm._s(item.name)+"\n      ")])],1)})),_c('div',{staticClass:"ms-CommandBar-secondaryCommand"},_vm._l((_vm.farItems),function(item,index){return _c('div',{key:item.key || index,staticClass:"ms-CommandBarItem"},[_c('VActionButton',{attrs:{"icon-name":item.icon},nativeOn:{"click":function($event){_vm.onClick($event, item)}}},[_vm._v("\n        "+_vm._s(item.name)+"\n      ")])],1)}))])}
var CommandBarvue_type_template_id_46b07154_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommandBar/CommandBar.vue?vue&type=template&id=46b07154&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommandBar/CommandBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommandBarvue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      },
      dummy: function dummy() {
        return [{
          key: 'new',
          name: 'New',
          icon: 'Add',
          href: '#',
          onClick: function onClick() {}
        }];
      }
    },
    farItems: {
      type: Array,
      default: function _default() {
        return [];
      },
      dummy: function dummy() {
        return [{
          key: 'sort',
          name: 'Sort',
          icon: 'SortLines',
          href: '#',
          onClick: function onClick() {}
        }];
      }
    },
    isSearchBoxVisible: {
      type: Boolean,
      default: false
    },
    searchPlaceholderText: {
      type: String,
      default: 'Search...'
    }
  },
  created: function created() {},
  methods: {
    onClick: function onClick(event, item) {
      if (!item.onClick) return;
      item.onClick(event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CommandBar/CommandBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var CommandBar_CommandBarvue_type_script_lang_js_ = (CommandBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CommandBar/CommandBar.vue?vue&type=style&index=0&lang=scss&
var CommandBarvue_type_style_index_0_lang_scss_ = __webpack_require__("49a4");

// CONCATENATED MODULE: ./src/components/CommandBar/CommandBar.vue






/* normalize component */

var CommandBar_component = normalizeComponent(
  CommandBar_CommandBarvue_type_script_lang_js_,
  CommandBarvue_type_template_id_46b07154_render,
  CommandBarvue_type_template_id_46b07154_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CommandBar_component.options.__file = "CommandBar.vue"
/* harmony default export */ var CommandBar = (CommandBar_component.exports);
// CONCATENATED MODULE: ./src/components/CommandBar/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContextualMenu/ContextualMenu.vue?vue&type=template&id=f73ba5e4&
var ContextualMenuvue_type_template_id_f73ba5e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.items),function(item){return _c('VContextualMenuItem',{key:item.key,attrs:{"text":item.text}})}))}
var ContextualMenuvue_type_template_id_f73ba5e4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenu.vue?vue&type=template&id=f73ba5e4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContextualMenu/ContextualMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var ContextualMenuvue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var ContextualMenu_ContextualMenuvue_type_script_lang_js_ = (ContextualMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ContextualMenu/ContextualMenu.vue?vue&type=style&index=0&lang=css&
var ContextualMenuvue_type_style_index_0_lang_css_ = __webpack_require__("c629");

// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenu.vue






/* normalize component */

var ContextualMenu_component = normalizeComponent(
  ContextualMenu_ContextualMenuvue_type_script_lang_js_,
  ContextualMenuvue_type_template_id_f73ba5e4_render,
  ContextualMenuvue_type_template_id_f73ba5e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ContextualMenu_component.options.__file = "ContextualMenu.vue"
/* harmony default export */ var ContextualMenu = (ContextualMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContextualMenu/ContextualMenuItem.vue?vue&type=template&id=c98d039c&
var ContextualMenuItemvue_type_template_id_c98d039c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(_vm._s(_vm.text))])}
var ContextualMenuItemvue_type_template_id_c98d039c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenuItem.vue?vue&type=template&id=c98d039c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContextualMenu/ContextualMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var ContextualMenuItemvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var ContextualMenu_ContextualMenuItemvue_type_script_lang_js_ = (ContextualMenuItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ContextualMenu/ContextualMenuItem.vue





/* normalize component */

var ContextualMenuItem_component = normalizeComponent(
  ContextualMenu_ContextualMenuItemvue_type_script_lang_js_,
  ContextualMenuItemvue_type_template_id_c98d039c_render,
  ContextualMenuItemvue_type_template_id_c98d039c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ContextualMenuItem_component.options.__file = "ContextualMenuItem.vue"
/* harmony default export */ var ContextualMenuItem = (ContextualMenuItem_component.exports);
// CONCATENATED MODULE: ./src/components/ContextualMenu/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown/Dropdown.vue?vue&type=template&id=e9a3b9dc&
var Dropdownvue_type_template_id_e9a3b9dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Dropdown-container"},[(_vm.label)?_c('VLabel',{staticClass:"ms-Dropdown-label"},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('div',{ref:"dropdown",staticClass:"ms-Dropdown",attrs:{"tabindex":"0","role":"listbox"},on:{"click":function($event){_vm.showCallout = !_vm.showCallout}}},[(!_vm.selectedOption)?_c('span',{staticClass:"ms-Dropdown-title ms-Dropdown-titleIsPlaceHolder ms-Dropdown-title"},[_c('span',[_vm._v("Select an option")])]):_c('span',{staticClass:"ms-Dropdown-title",attrs:{"role":"option"}},[_c('span',[_vm._v("\n        "+_vm._s(_vm.selectedOption.text)+"\n      ")])]),_c('span',{staticClass:"ms-Dropdown-caretDownWrapper"},[_c('VIcon',{attrs:{"icon-name":"ChevronDown"}})],1)]),(_vm.showCallout)?_c('VCallout',{attrs:{"do-not-layer":false,"is-beak-visible":false,"target":_vm.$refs.dropdown},on:{"onBlur":function($event){_vm.showCallout = false}}},[_c('div',{staticClass:"ms-Dropdown-dropdownItemsWrapper"},[_c('div',{staticClass:"ms-FocusZone ms-Dropdown-items",attrs:{"role":"listbox"}},_vm._l((_vm.options),function(option,index){return _c('VActionButton',{key:'dropdownItem-' + index,staticClass:"ms-Dropdown-item",attrs:{"title":option.title,"role":"option"},nativeOn:{"click":function($event){_vm.selectOption(option)}}},[_c('span',{staticClass:"ms-Dropdown-optionText"},[_vm._v("\n            "+_vm._s(option.text)+"\n          ")])])}))])]):_vm._e()],1)}
var Dropdownvue_type_template_id_e9a3b9dc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Dropdown/Dropdown.vue?vue&type=template&id=e9a3b9dc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown/Dropdown.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dropdownvue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: String,
      default: null
    }
  },
  data: function data() {
    var _this = this;

    return {
      showCallout: false,
      onBlur: function onBlur() {
        _this.showCallout = false;
      }
    };
  },
  computed: {
    selectedOption: function selectedOption() {
      var _this2 = this;

      return this.options.find(function (o) {
        return o.key === _this2.value;
      });
    }
  },
  methods: {
    selectOption: function selectOption(option) {
      this.$emit('input', option.key || option.text);
      this.showCallout = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Dropdown/Dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropdown_Dropdownvue_type_script_lang_js_ = (Dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Dropdown/Dropdown.vue?vue&type=style&index=0&lang=scss&
var Dropdownvue_type_style_index_0_lang_scss_ = __webpack_require__("5a62");

// CONCATENATED MODULE: ./src/components/Dropdown/Dropdown.vue






/* normalize component */

var Dropdown_component = normalizeComponent(
  Dropdown_Dropdownvue_type_script_lang_js_,
  Dropdownvue_type_template_id_e9a3b9dc_render,
  Dropdownvue_type_template_id_e9a3b9dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Dropdown_component.options.__file = "Dropdown.vue"
/* harmony default export */ var Dropdown = (Dropdown_component.exports);
// CONCATENATED MODULE: ./src/components/Dropdown/index.js


// CONCATENATED MODULE: ./src/components/Icon/index.js


// CONCATENATED MODULE: ./src/components/Label/index.js


// CONCATENATED MODULE: ./src/components/Layer/index.js


// CONCATENATED MODULE: ./src/components/Link/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Modal.vue?vue&type=template&id=6d2acef8&
var Modalvue_type_template_id_6d2acef8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isOpen)?_c('VLayer',[_c('div',{attrs:{"role":"dialog"}},[_c('div',{staticClass:"ms-Modal is-open"},[_c('div',{staticClass:"ms-Overlay",on:{"click":function($event){_vm.$emit('dismiss')}}}),_c('div',{staticClass:"ms-Dialog-main",class:_vm.containerClassName},[_vm._t("default")],2)])])]):_vm._e()}
var Modalvue_type_template_id_6d2acef8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Modal/Modal.vue?vue&type=template&id=6d2acef8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    containerClassName: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/Modal.vue?vue&type=style&index=0&lang=scss&
var Modalvue_type_style_index_0_lang_scss_ = __webpack_require__("148c");

// CONCATENATED MODULE: ./src/components/Modal/Modal.vue






/* normalize component */

var Modal_component = normalizeComponent(
  Modal_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_6d2acef8_render,
  Modalvue_type_template_id_6d2acef8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Modal_component.options.__file = "Modal.vue"
/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./src/components/Modal/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Panel/Panel.vue?vue&type=template&id=2080bc6e&
var Panelvue_type_template_id_2080bc6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VLayer',[_c('div',{staticClass:"ms-Panel rootIsSmall",class:[( _obj = {}, _obj['rootIsOpen'] = _vm.isOpen, _obj['is-open'] = _vm.isOpen, _obj )]},[_c('div',{staticClass:"ms-Panel-main"},[_c('div',{staticClass:"ms-Panel-commands"},[_c('div',{staticClass:"ms-Panel-navigation"},[_c('VIconButton',{staticClass:"ms-Panel-closeButton ms-PanelAction-close",attrs:{"icon-name":"Cancel"},nativeOn:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onDismiss($event)}}})],1)]),_c('div',{staticClass:"ms-Panel-contentInner"},[_c('div',{staticClass:"ms-Panel-header"},[_c('div',{staticClass:"ms-Panel-headerText"},[_vm._t("header",[_vm._v(_vm._s(_vm.headerText))])],2)]),_c('div',{staticClass:"ms-Panel-content"},[_vm._t("body")],2),_c('div',{staticClass:"ms-Panel-footer"},[_c('div',{staticClass:"ms-Panel-footerInner"},[_vm._t("footer")],2)])])])])])
var _obj;}
var Panelvue_type_template_id_2080bc6e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Panel/Panel.vue?vue&type=template&id=2080bc6e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Panel/Panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Panelvue_type_script_lang_js_ = ({
  components: {
    VIconButton: IconButton,
    VIcon: Icon,
    VLayer: Layer
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    headerText: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    isOpen: function isOpen(newVal) {
      if (newVal) document.body.classList.add(this.$style.css);else document.body.classList.remove(this.$style.css);
    }
  },
  mounted: function mounted() {
    if (this.isOpen) document.body.classList.add(this.$style.css);
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove(this.$style.css);
  },
  methods: {
    onDismiss: function onDismiss(event) {
      this.$emit('onDismiss', event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Panel/Panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Panel_Panelvue_type_script_lang_js_ = (Panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Panel/Panel.vue?vue&type=style&index=0&lang=scss&module=true&
var Panelvue_type_style_index_0_lang_scss_module_true_ = __webpack_require__("5e7e");

// EXTERNAL MODULE: ./src/components/Panel/Panel.vue?vue&type=style&index=1&lang=scss&
var Panelvue_type_style_index_1_lang_scss_ = __webpack_require__("3ab6");

// CONCATENATED MODULE: ./src/components/Panel/Panel.vue









function injectStyles (context) {
  
  this["$style"] = (Panelvue_type_style_index_0_lang_scss_module_true_["default"].locals || Panelvue_type_style_index_0_lang_scss_module_true_["default"])

}

/* normalize component */

var Panel_component = normalizeComponent(
  Panel_Panelvue_type_script_lang_js_,
  Panelvue_type_template_id_2080bc6e_render,
  Panelvue_type_template_id_2080bc6e_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

Panel_component.options.__file = "Panel.vue"
/* harmony default export */ var Panel = (Panel_component.exports);
// CONCATENATED MODULE: ./src/components/Panel/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Persona/Persona.vue?vue&type=template&id=e007de5e&scoped=true&
var Personavue_type_template_id_e007de5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Persona",attrs:{"size":_vm.size}},[_c('div',{staticClass:"ms-Persona-coin"},[_vm._t("coin",[(_vm.size === 9)?_c('i',{staticClass:"ms-Icon ms-Icon--Contact",attrs:{"aria-hidden":"true"}}):_c('div',{staticClass:"ms-Persona-imageArea"},[(_vm.presence)?_c('div',{staticClass:"ms-Persona-presence"}):_vm._e(),(!_vm.imageUrl)?_c('persona-initials',{attrs:{"name":_vm.primaryText}}):_c('div',{staticClass:"ms-Image ms-Persona-image"},[_c('img',{staticClass:"ms-Image-image",attrs:{"src":_vm.imageUrl,"alt":""}})])],1)])],2),_c('div',{staticClass:"ms-Persona-details"},[_vm._t("details",[_c('div',{staticClass:"ms-Persona-primaryText"},[_c('span',[_vm._v(_vm._s(_vm.primaryText))])])])],2)])}
var Personavue_type_template_id_e007de5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Persona/Persona.vue?vue&type=template&id=e007de5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Persona/PersonaInitials.vue?vue&type=template&id=5a50667e&
var PersonaInitialsvue_type_template_id_5a50667e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Persona-initials",style:({ 'background-color': _vm.initialsColor })},[_c('span',[_vm._v(_vm._s(_vm.initials))])])}
var PersonaInitialsvue_type_template_id_5a50667e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Persona/PersonaInitials.vue?vue&type=template&id=5a50667e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./src/components/Persona/initials.js
var COLOR_SWATCHES_LOOKUP = ['lightGreen', 'lightBlue', 'lightPink', 'green', 'darkGreen', 'pink', 'magenta', 'purple', 'black', 'teal', 'blue', 'darkBlue', 'orange', 'darkRed'];
var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;

function getInitialsColorFromName(displayName) {
  var color = 'blue';

  if (!displayName) {
    return color;
  }

  var hashCode = 0;

  for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
    var ch = displayName.charCodeAt(iLen);
    var shift = iLen % 8; // tslint:disable-next-line:no-bitwise

    hashCode ^= (ch << shift) + (ch >> 8 - shift);
  }

  color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
  return color;
}

function personaInitialsColorToHexCode(personaInitialsColor) {
  switch (personaInitialsColor) {
    case 'lightBlue':
      return '#6BA5E7';

    case 'blue':
      return '#2D89EF';

    case 'darkBlue':
      return '#2B5797';

    case 'teal':
      return '#00ABA9';

    case 'lightGreen':
      return '#99B433';

    case 'green':
      return '#00A300';

    case 'darkGreen':
      return '#1E7145';

    case 'lightPink':
      return '#E773BD';

    case 'pink':
      return '#FF0097';

    case 'magenta':
      return ' #7E3878';

    case 'purple':
      return '#603CBA';

    case 'black':
      return '#1D1D1D';

    case 'orange':
      return '#DA532C';

    case 'red':
      return '#EE1111';

    case 'darkRed':
      return '#B91D47';

    case 'transparent':
      return 'transparent';
  }
}

function initialsColorPropToColorCode(props) {
  var primaryText = props.primaryText;
  var initialsColor = props.initialsColor;
  var initialsColorCode;

  if (typeof initialsColor === 'string') {
    initialsColorCode = initialsColor;
  } else {
    initialsColor = initialsColor !== undefined ? initialsColor : getInitialsColorFromName(primaryText);
    initialsColorCode = personaInitialsColorToHexCode(initialsColor);
  }

  return initialsColorCode;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Persona/PersonaInitials.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//

/* harmony default export */ var PersonaInitialsvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    initialsColor: function initialsColor() {
      return initialsColorPropToColorCode({
        primaryText: this.name
      });
    },
    initials: function initials() {
      var name = this.name;
      var split = name.split(' ');
      var first = split[0];
      var last = split[split.length - 1];

      if (split.length > 1) {
        return first[0] + last[0];
      }

      return first[0];
    }
  }
});
// CONCATENATED MODULE: ./src/components/Persona/PersonaInitials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Persona_PersonaInitialsvue_type_script_lang_js_ = (PersonaInitialsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Persona/PersonaInitials.vue





/* normalize component */

var PersonaInitials_component = normalizeComponent(
  Persona_PersonaInitialsvue_type_script_lang_js_,
  PersonaInitialsvue_type_template_id_5a50667e_render,
  PersonaInitialsvue_type_template_id_5a50667e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

PersonaInitials_component.options.__file = "PersonaInitials.vue"
/* harmony default export */ var PersonaInitials = (PersonaInitials_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Persona/Persona.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var size72 = 14;
/* harmony default export */ var Personavue_type_script_lang_js_ = ({
  components: {
    PersonaInitials: PersonaInitials
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    primaryText: {
      type: String,
      default: ''
    },
    secondaryText: {
      type: String,
      default: ''
    },
    tertiaryText: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: size72
    },
    presence: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/Persona/Persona.vue?vue&type=script&lang=js&
 /* harmony default export */ var Persona_Personavue_type_script_lang_js_ = (Personavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Persona/Persona.vue?vue&type=style&index=0&id=e007de5e&lang=scss&scoped=true&
var Personavue_type_style_index_0_id_e007de5e_lang_scss_scoped_true_ = __webpack_require__("781b");

// CONCATENATED MODULE: ./src/components/Persona/Persona.vue






/* normalize component */

var Persona_component = normalizeComponent(
  Persona_Personavue_type_script_lang_js_,
  Personavue_type_template_id_e007de5e_scoped_true_render,
  Personavue_type_template_id_e007de5e_scoped_true_staticRenderFns,
  false,
  null,
  "e007de5e",
  null
  
)

Persona_component.options.__file = "Persona.vue"
/* harmony default export */ var Persona = (Persona_component.exports);
// CONCATENATED MODULE: ./src/components/Persona/index.js


// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pivot/Pivot.vue?vue&type=script&lang=js&

//
/* harmony default export */ var Pivotvue_type_script_lang_js_ = ({
  props: {
    linkTexts: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      selectedIndex: 0
    };
  },
  methods: {
    renderPivotLinks: function renderPivotLinks() {
      var _this = this;

      var h = this.$createElement;
      var links = this.$slots.default.map(function (item, index) {
        var componentOptions = item.componentOptions;
        if (!componentOptions) return;
        return h(componentOptions.tag, {
          props: _objectSpread({}, componentOptions.propsData, {
            index: index,
            selectedIndex: _this.selectedIndex
          }),
          nativeOn: {
            click: function click() {
              _this.selectedIndex = index;
            }
          }
        });
      });
      return h('ul', {
        attrs: {
          class: 'ms-Pivot',
          role: 'tablist'
        }
      }, links);
    },
    renderPivotItem: function renderPivotItem() {
      var h = this.$createElement;
      var selectedTab = this.$slots.default[this.selectedIndex];
      var content = h('div', selectedTab.componentOptions.children);
      return h('div', {
        attrs: {
          role: 'tabpanel'
        }
      }, [content]);
    }
  },
  render: function render(h) {
    var tablist = this.renderPivotLinks();
    var tabpanel = this.renderPivotItem();
    return h('div', [tablist, tabpanel]);
  }
});
// CONCATENATED MODULE: ./src/components/Pivot/Pivot.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pivot_Pivotvue_type_script_lang_js_ = (Pivotvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Pivot/Pivot.vue?vue&type=style&index=0&lang=scss&
var Pivotvue_type_style_index_0_lang_scss_ = __webpack_require__("bd33");

// CONCATENATED MODULE: ./src/components/Pivot/Pivot.vue
var Pivot_render, Pivot_staticRenderFns





/* normalize component */

var Pivot_component = normalizeComponent(
  Pivot_Pivotvue_type_script_lang_js_,
  Pivot_render,
  Pivot_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Pivot_component.options.__file = "Pivot.vue"
/* harmony default export */ var Pivot = (Pivot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pivot/PivotItem.vue?vue&type=template&id=916a485e&
var PivotItemvue_type_template_id_916a485e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VActionButton',{staticClass:"ms-Pivot-link",class:{ isSelected: _vm.isSelected },nativeOn:{"click":function($event){_vm.$emit('update:selectedIndex', _vm.index)}}},[_vm._v("\n  "+_vm._s(_vm.linkText)+"\n")])}
var PivotItemvue_type_template_id_916a485e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Pivot/PivotItem.vue?vue&type=template&id=916a485e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pivot/PivotItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
/* harmony default export */ var PivotItemvue_type_script_lang_js_ = ({
  props: {
    linkText: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSelected: function isSelected() {
      return this.selectedIndex === this.index;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Pivot/PivotItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pivot_PivotItemvue_type_script_lang_js_ = (PivotItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Pivot/PivotItem.vue?vue&type=style&index=0&lang=scss&
var PivotItemvue_type_style_index_0_lang_scss_ = __webpack_require__("6111");

// CONCATENATED MODULE: ./src/components/Pivot/PivotItem.vue






/* normalize component */

var PivotItem_component = normalizeComponent(
  Pivot_PivotItemvue_type_script_lang_js_,
  PivotItemvue_type_template_id_916a485e_render,
  PivotItemvue_type_template_id_916a485e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

PivotItem_component.options.__file = "PivotItem.vue"
/* harmony default export */ var PivotItem = (PivotItem_component.exports);
// CONCATENATED MODULE: ./src/components/Pivot/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OverflowSet/OverflowSet.vue?vue&type=template&id=da450304&
var OverflowSetvue_type_template_id_da450304_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-OverflowSet root"},[_vm._l((_vm.items),function(item,index){return _c('div',{key:item.key,staticClass:"ms-OverflowSet-item item"},[_c('VLink',{staticClass:"overflowLinks",attrs:{"href":item.href}},[_vm._v(_vm._s(item.name))])],1)}),_c('div',{staticClass:"ms-OverflowSet-overflowButton overflowButton"},[_c('VIconButton',{staticClass:"overflowButton",attrs:{"icon-name":"More"}})],1)],2)}
var OverflowSetvue_type_template_id_da450304_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/OverflowSet/OverflowSet.vue?vue&type=template&id=da450304&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OverflowSet/OverflowSet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var OverflowSetvue_type_script_lang_js_ = ({
  components: {
    VIconButton: IconButton,
    VLink: Link
  },
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overflowItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/OverflowSet/OverflowSet.vue?vue&type=script&lang=js&
 /* harmony default export */ var OverflowSet_OverflowSetvue_type_script_lang_js_ = (OverflowSetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/OverflowSet/OverflowSet.vue?vue&type=style&index=0&lang=scss&
var OverflowSetvue_type_style_index_0_lang_scss_ = __webpack_require__("00db");

// CONCATENATED MODULE: ./src/components/OverflowSet/OverflowSet.vue






/* normalize component */

var OverflowSet_component = normalizeComponent(
  OverflowSet_OverflowSetvue_type_script_lang_js_,
  OverflowSetvue_type_template_id_da450304_render,
  OverflowSetvue_type_template_id_da450304_staticRenderFns,
  false,
  null,
  null,
  null
  
)

OverflowSet_component.options.__file = "OverflowSet.vue"
/* harmony default export */ var OverflowSet = (OverflowSet_component.exports);
// CONCATENATED MODULE: ./src/components/OverflowSet/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProgressIndicator/ProgressIndicator.vue?vue&type=template&id=1155cfdc&
var ProgressIndicatorvue_type_template_id_1155cfdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ProgressIndicator"},[_c('div',{staticClass:"ms-ProgressIndicator-itemName"},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]),_c('div',{staticClass:"ms-ProgressIndicator-itemProgress"},[_c('div',{staticClass:"ms-ProgressIndicator-progressTrack"}),_c('div',{staticClass:"ms-ProgressIndicator-progressBar",class:_vm.classObj,style:({ width: ((_vm.percentComplete < 0 ? 0 : _vm.percentComplete) + "%") })})]),_c('div',{staticClass:"ms-ProgressIndicator-itemDescription"},[_vm._v("\n    "+_vm._s(_vm.description)+"\n  ")])])}
var ProgressIndicatorvue_type_template_id_1155cfdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ProgressIndicator/ProgressIndicator.vue?vue&type=template&id=1155cfdc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProgressIndicator/ProgressIndicator.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProgressIndicatorvue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    percentComplete: {
      type: Number,
      default: null
    }
  },
  computed: {
    classObj: function classObj() {
      return {
        indeterminate: this.percentComplete == null,
        smoothTransition: this.percentComplete != null
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/ProgressIndicator/ProgressIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProgressIndicator_ProgressIndicatorvue_type_script_lang_js_ = (ProgressIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ProgressIndicator/ProgressIndicator.vue?vue&type=style&index=0&lang=scss&
var ProgressIndicatorvue_type_style_index_0_lang_scss_ = __webpack_require__("f4e0");

// CONCATENATED MODULE: ./src/components/ProgressIndicator/ProgressIndicator.vue






/* normalize component */

var ProgressIndicator_component = normalizeComponent(
  ProgressIndicator_ProgressIndicatorvue_type_script_lang_js_,
  ProgressIndicatorvue_type_template_id_1155cfdc_render,
  ProgressIndicatorvue_type_template_id_1155cfdc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ProgressIndicator_component.options.__file = "ProgressIndicator.vue"
/* harmony default export */ var ProgressIndicator = (ProgressIndicator_component.exports);
// CONCATENATED MODULE: ./src/components/ProgressIndicator/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchBox/SearchBox.vue?vue&type=template&id=c3dfd030&scoped=true&
var SearchBoxvue_type_template_id_c3dfd030_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-SearchBox-container",class:_vm.className},[_c('div',{staticClass:"ms-SearchBox root",class:_vm.classObj},[_c('div',{staticClass:"ms-SearchBox-iconContainer iconContainer"},[_c('VIcon',{attrs:{"icon-name":"Search"}})],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchQuery),expression:"searchQuery"}],ref:"searchInput",staticClass:"ms-SearchBox-field field",attrs:{"placeholder":_vm.placeholder,"type":"text"},domProps:{"value":(_vm.searchQuery)},on:{"blur":_vm.onBlur,"focus":_vm.onFocus,"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.onSearch($event)},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();$event.stopPropagation();},"input":function($event){if($event.target.composing){ return; }_vm.searchQuery=$event.target.value}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasText),expression:"hasText"}],staticClass:"ms-SearchBox-clearButton clearButton",on:{"click":_vm.onClear}},[_c('VIcon',{attrs:{"icon-name":"Clear"}})],1),(_vm.clear)?_c('div',{staticStyle:{"clear":"both"}}):_vm._e()])])}
var SearchBoxvue_type_template_id_c3dfd030_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SearchBox/SearchBox.vue?vue&type=template&id=c3dfd030&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchBox/SearchBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SearchBoxvue_type_script_lang_js_ = ({
  components: {
    VIcon: Icon
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    value: {
      type: String,
      default: ''
    },
    underlined: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isActive: false,
      searchQuery: this.value
    };
  },
  computed: {
    hasText: function hasText() {
      return this.searchQuery && this.searchQuery.length > 0;
    },
    isDisabled: function isDisabled() {
      return this.$attrs.disabled != null;
    },
    classObj: function classObj() {
      var obj = {};
      obj['is-disabled'] = this.isDisabled;
      obj['is-underlined'] = this.underlined;
      obj['has-text'] = this.hasText;
      obj['can-clear'] = this.hasText;
      obj['is-active'] = this.isActive;
      return obj;
    }
  },
  watch: {
    searchQuery: function searchQuery() {
      this.onChange();
    }
  },
  methods: {
    onClear: function onClear() {
      this.searchQuery = '';
      this.$refs.searchInput.focus();
    },
    onBlur: function onBlur() {
      this.isActive = false;
      this.$emit('onBlur', this.searchQuery);
    },
    onFocus: function onFocus() {
      this.isActive = !this.isDisabled;
      this.$emit('onFocus', this.searchQuery);
    },
    onChange: function onChange() {
      this.$emit('input', this.searchQuery);
      this.$emit('onChange', this.searchQuery);
    },
    onSearch: function onSearch() {
      this.$emit('onSearch', this.searchQuery);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SearchBox/SearchBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var SearchBox_SearchBoxvue_type_script_lang_js_ = (SearchBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SearchBox/SearchBox.vue?vue&type=style&index=0&id=c3dfd030&lang=scss&scoped=true&
var SearchBoxvue_type_style_index_0_id_c3dfd030_lang_scss_scoped_true_ = __webpack_require__("18cf");

// CONCATENATED MODULE: ./src/components/SearchBox/SearchBox.vue






/* normalize component */

var SearchBox_component = normalizeComponent(
  SearchBox_SearchBoxvue_type_script_lang_js_,
  SearchBoxvue_type_template_id_c3dfd030_scoped_true_render,
  SearchBoxvue_type_template_id_c3dfd030_scoped_true_staticRenderFns,
  false,
  null,
  "c3dfd030",
  null
  
)

SearchBox_component.options.__file = "SearchBox.vue"
/* harmony default export */ var SearchBox = (SearchBox_component.exports);
// CONCATENATED MODULE: ./src/components/SearchBox/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Shimmer/Shimmer.vue?vue&type=template&id=0cff7e00&scoped=true&
var Shimmervue_type_template_id_0cff7e00_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Shimmer-container root"},[_c('div',{staticClass:"ms-Shimmer-shimmerWrapper shimmerWrapper"},[_c('div',{staticClass:"ms-ShimmerElementsGroup root"},[_c('div',{staticClass:"ms-ShimmerLine-root root",staticStyle:{"width":"100%","min-width":"auto"}},[_c('svg',{staticClass:"ms-ShimmerLine-topLeftCorner topLeftCorner",attrs:{"width":"2","height":"2"}},[_c('path',{attrs:{"d":"M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z"}})]),_c('svg',{staticClass:"ms-ShimmerLine-topRightCorner topRightCorner",attrs:{"width":"2","height":"2"}},[_c('path',{attrs:{"d":"M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z"}})]),_c('svg',{staticClass:"ms-ShimmerLine-bottomRightCorner bottomRightCorner",attrs:{"width":"2","height":"2"}},[_c('path',{attrs:{"d":"M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z"}})]),_c('svg',{staticClass:"ms-ShimmerLine-bottomLeftCorner bottomLeftCorner",attrs:{"width":"2","height":"2"}},[_c('path',{attrs:{"d":"M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z"}})])])])])])}
var Shimmervue_type_template_id_0cff7e00_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Shimmer/Shimmer.vue?vue&type=template&id=0cff7e00&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Shimmer/Shimmer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Shimmervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/Shimmer/Shimmer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Shimmer_Shimmervue_type_script_lang_js_ = (Shimmervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Shimmer/Shimmer.vue?vue&type=style&index=0&id=0cff7e00&lang=scss&scoped=true&
var Shimmervue_type_style_index_0_id_0cff7e00_lang_scss_scoped_true_ = __webpack_require__("3bf0");

// CONCATENATED MODULE: ./src/components/Shimmer/Shimmer.vue






/* normalize component */

var Shimmer_component = normalizeComponent(
  Shimmer_Shimmervue_type_script_lang_js_,
  Shimmervue_type_template_id_0cff7e00_scoped_true_render,
  Shimmervue_type_template_id_0cff7e00_scoped_true_staticRenderFns,
  false,
  null,
  "0cff7e00",
  null
  
)

Shimmer_component.options.__file = "Shimmer.vue"
/* harmony default export */ var Shimmer = (Shimmer_component.exports);
// CONCATENATED MODULE: ./src/components/Shimmer/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner/Spinner.vue?vue&type=template&id=01a4f5b7&
var Spinnervue_type_template_id_01a4f5b7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Spinner"},[_c('div',{staticClass:"ms-Spinner-circle",class:_vm.classObj,style:(_vm.styleObj)}),(_vm.size >= 2)?_c('div',{staticClass:"ms-Spinner-label"},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e()])}
var Spinnervue_type_template_id_01a4f5b7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Spinner/Spinner.vue?vue&type=template&id=01a4f5b7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner/Spinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
var SPINNER_SIZE = {
  0: {
    size: '12px',
    name: 'xSmall'
  },
  1: {
    size: '16px',
    name: 'small'
  },
  2: {
    size: '20px',
    name: 'Medium'
  },
  3: {
    size: '28px',
    name: 'Large'
  }
};
/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String,
      default: null
    },
    size: {
      type: Number,
      default: 2,
      validator: function validator(value) {
        return SPINNER_SIZE[value] != null;
      }
    }
  },
  computed: {
    classObj: function classObj() {
      var size = SPINNER_SIZE[this.size];
      var obj = {};
      obj["ms-Spinner--".concat(size.name)] = true;
      return obj;
    },
    styleObj: function styleObj() {
      var size = SPINNER_SIZE[this.size];
      var style = {};
      style.width = size.size;
      style.height = size.size;
      return style;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Spinner/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Spinner_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Spinner/Spinner.vue?vue&type=style&index=0&lang=scss&
var Spinnervue_type_style_index_0_lang_scss_ = __webpack_require__("7ff5");

// CONCATENATED MODULE: ./src/components/Spinner/Spinner.vue






/* normalize component */

var Spinner_component = normalizeComponent(
  Spinner_Spinnervue_type_script_lang_js_,
  Spinnervue_type_template_id_01a4f5b7_render,
  Spinnervue_type_template_id_01a4f5b7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Spinner_component.options.__file = "Spinner.vue"
/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./src/components/Spinner/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpinButton/SpinButton.vue?vue&type=template&id=231add6e&
var SpinButtonvue_type_template_id_231add6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-SpinButton"},[(_vm.label)?_c('VLabel',{staticClass:"ms-SpinButton-label"},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('div',{staticClass:"ms-SpinButton-container"},[_c('input',{staticClass:"ms-SpinButton-input",attrs:{"type":"text"},domProps:{"value":_vm.value},on:{"blur":_vm.onBlur}}),_c('div',{staticClass:"ms-SpinButton-icons"},[_c('VIconButton',{staticClass:"ms-SpinButton-button",attrs:{"icon-name":"ChevronUpSmall"},nativeOn:{"click":function($event){return _vm.onIncrement($event)}}}),_c('VIconButton',{staticClass:"ms-SpinButton-button",attrs:{"icon-name":"ChevronDownSmall"},nativeOn:{"click":function($event){return _vm.onDecrement($event)}}})],1)])],1)}
var SpinButtonvue_type_template_id_231add6e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SpinButton/SpinButton.vue?vue&type=template&id=231add6e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpinButton/SpinButton.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SpinButtonvue_type_script_lang_js_ = ({
  props: {
    label: {
      type: String,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: null
    }
  },
  methods: {
    onBlur: function onBlur(event) {
      var value = event.target.value ? Number(event.target.value) : null;
      var newValue = this.validate(value);
      if (isNaN(newValue)) newValue = null;
      this.$emit('input', newValue);
      event.target.value = newValue;
    },
    validate: function validate(value) {
      if (value == null) return value;
      var min = this.min,
          max = this.max;
      if (min != null && value < min) return min;
      if (max != null && value > max) return max;
      return value;
    },
    onIncrement: function onIncrement() {
      var step = this.step,
          max = this.max,
          value = this.value;
      var newValue = Math.min(value + step, max == null ? Infinity : max);
      this.$emit('input', newValue);
    },
    onDecrement: function onDecrement() {
      var step = this.step,
          min = this.min,
          value = this.value;
      var newValue = Math.max(value - step, min == null ? -Infinity : min);
      this.$emit('input', newValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpinButton/SpinButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SpinButton_SpinButtonvue_type_script_lang_js_ = (SpinButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SpinButton/SpinButton.vue?vue&type=style&index=0&lang=scss&
var SpinButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("dede");

// CONCATENATED MODULE: ./src/components/SpinButton/SpinButton.vue






/* normalize component */

var SpinButton_component = normalizeComponent(
  SpinButton_SpinButtonvue_type_script_lang_js_,
  SpinButtonvue_type_template_id_231add6e_render,
  SpinButtonvue_type_template_id_231add6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SpinButton_component.options.__file = "SpinButton.vue"
/* harmony default export */ var SpinButton = (SpinButton_component.exports);
// CONCATENATED MODULE: ./src/components/SpinButton/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slider/Slider.vue?vue&type=template&id=572224c6&scoped=true&
var Slidervue_type_template_id_572224c6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Slider root ms-Slider-enabled",class:_vm.rootClass},[(_vm.label)?_c('label',{staticClass:"ms-Label titleLabel root",attrs:{"for":_vm.id}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('div',{staticClass:"ms-Slider-container container"},[_c('button',{staticClass:"ms-Slider-slideBox slideBox ms-Slider-showValue ms-Slider-showTransitions showTransitions",attrs:{"id":_vm.id,"type":"button","role":"slider"},on:{"mousedown":_vm.onMouseDown,"touchstart":_vm.onTouchStart,"mouseup":_vm.onMouseUp,"touchend":_vm.onTouchEnd,"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }_vm.setValue(1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.setValue(1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }_vm.setValue(-1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.setValue(-1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"home",undefined,$event.key,undefined)){ return null; }_vm.setValue(0, _vm.min)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"end",undefined,$event.key,undefined)){ return null; }_vm.setValue(0, _vm.max)}]}},[_c('div',{ref:"sliderLine",staticClass:"ms-Slider-line line"},[_c('span',{staticClass:"ms-Slider-thumb thumb",style:(_vm.thumbStyle)}),_c('span',{staticClass:"ms-Slider-active lineContainer activeSection",style:(_vm.activeStyle)}),_c('span',{staticClass:"ms-Slider-inactive lineContainer inactiveSection",style:(_vm.inactiveStyle)})])]),(_vm.showValue)?_c('label',{staticClass:"ms-Label ms-Slider-value valueLabel root"},[_vm._v("\n      "+_vm._s(_vm.value)+"\n    ")]):_vm._e()])])}
var Slidervue_type_template_id_572224c6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Slider/Slider.vue?vue&type=template&id=572224c6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slider/Slider.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    },
    showValue: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isDragging: false,
      renderedValue: this.defaultValue
    };
  },
  computed: {
    id: function id() {
      return 'Slider' + this._uid;
    },
    rootClass: function rootClass() {
      var obj = {
        'ms-Slider-row': !this.vertical,
        'rootIsHorizontal': !this.vertical,
        'ms-Slider-column': this.vertical,
        'rootIsVertical': this.vertical,
        'rootIsEnabled': !this.disabled,
        'rootIsDisabled': this.disabled
      };
      return obj;
    },
    activeStyle: function activeStyle() {
      var obj = {};
      obj[this.vertical ? 'height' : 'width'] = this.thumbOffsetPercent + '%';
      return obj;
    },
    inactiveStyle: function inactiveStyle() {
      var obj = {};
      obj[this.vertical ? 'height' : 'width'] = 100 - this.thumbOffsetPercent + '%';
      return obj;
    },
    thumbOffsetPercent: function thumbOffsetPercent() {
      var value = this.isDragging ? this.renderedValue : this.value;
      return (value - this.min) / (this.max - this.min) * 100;
    },
    thumbStyle: function thumbStyle() {
      var obj = {};
      obj[this.vertical ? 'bottom' : 'left'] = this.thumbOffsetPercent + '%';
      return obj;
    }
  },
  methods: {
    onMouseDown: function onMouseDown() {
      if (this.disabled) return;
      this.isDragging = true;
      window.addEventListener('mousemove', this.onMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
    onMouseUp: function onMouseUp() {
      this.isDragging = false;
      window.removeEventListener('mousemove', this.onMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
    onTouchStart: function onTouchStart() {
      if (this.disabled) return;
      this.isDragging = true;
      window.addEventListener('touchmove', this.onMove);
      window.addEventListener('touchend', this.onMouseUp);
    },
    onTouchEnd: function onTouchEnd() {
      this.isDragging = false;
      window.removeEventListener('touchmove', this.onMove);
      window.addEventListener('touchend', this.onMouseUp);
    },
    onMove: function onMove(event) {
      var steps = (this.max - this.min) / this.step;
      var sliderPositionRect = this.$refs.sliderLine.getBoundingClientRect();
      var sliderLength = !this.vertical ? sliderPositionRect.width : sliderPositionRect.height;
      var stepLength = sliderLength / steps;
      var currentSteps;
      var distance;

      if (!this.vertical) {
        var left = this.getPosition(event);
        distance = left - sliderPositionRect.left;
        currentSteps = distance / stepLength;
      } else {
        var bottom = this.getPosition(event);
        distance = sliderPositionRect.bottom - bottom;
        currentSteps = distance / stepLength;
      }

      var currentValue;
      var renderedValue;

      if (currentSteps > Math.floor(steps)) {
        renderedValue = currentValue = this.max;
      } else if (currentSteps < 0) {
        renderedValue = currentValue = this.min;
      } else {
        renderedValue = this.min + this.step * currentSteps;
        currentValue = this.min + this.step * Math.round(currentSteps);
      }

      this.renderedValue = renderedValue;
      this.$emit('input', currentValue);
      event.preventDefault();
      event.stopPropagation();
    },
    getPosition: function getPosition(event) {
      var currentPosition = 0;

      switch (event.type) {
        case 'mousedown':
        case 'mousemove':
          currentPosition = !this.vertical ? event.clientX : event.clientY;
          break;

        case 'touchstart':
        case 'touchmove':
          currentPosition = !this.vertical ? event.touches[0].clientX : event.touches[0].clientY;
          break;
      }

      return currentPosition;
    },
    setValue: function setValue(diff) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value;
      var newValue = Math.min(this.max, Math.max(this.min, value + diff));
      this.$emit('input', newValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Slider/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var Slider_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Slider/Slider.vue?vue&type=style&index=0&lang=scss&
var Slidervue_type_style_index_0_lang_scss_ = __webpack_require__("ba82");

// EXTERNAL MODULE: ./src/components/Slider/Slider.vue?vue&type=style&index=1&id=572224c6&lang=scss&scoped=true&
var Slidervue_type_style_index_1_id_572224c6_lang_scss_scoped_true_ = __webpack_require__("6db6");

// CONCATENATED MODULE: ./src/components/Slider/Slider.vue







/* normalize component */

var Slider_component = normalizeComponent(
  Slider_Slidervue_type_script_lang_js_,
  Slidervue_type_template_id_572224c6_scoped_true_render,
  Slidervue_type_template_id_572224c6_scoped_true_staticRenderFns,
  false,
  null,
  "572224c6",
  null
  
)

Slider_component.options.__file = "Slider.vue"
/* harmony default export */ var Slider = (Slider_component.exports);
// CONCATENATED MODULE: ./src/components/Slider/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextField/TextField.vue?vue&type=template&id=59ff20cd&scoped=true&
var TextFieldvue_type_template_id_59ff20cd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-TextField root",class:_vm.rootClass},[_c('div',{staticClass:"ms-TextField-wrapper wrapper"},[(_vm.label)?_c('VLabel',{attrs:{"required":_vm.required}},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]):_vm._e(),_c('div',{staticClass:"ms-TextField-fieldGroup fieldGroup",class:{ 'invalid': _vm.errorMessage }},[_c(_vm.component,{tag:"component",staticClass:"ms-TextField-field field",attrs:{"id":"TextField","value":_vm.value,"disabled":_vm.disabled,"placeholder":_vm.placeholder,"readonly":_vm.readOnly,"required":_vm.required,"rows":"4","type":"text","aria-invalid":"false"},on:{"input":function($event){_vm.$emit('input', $event.target.value || '')}}})],1)],1),(_vm.errorMessage)?_c('span',[_c('div',{attrs:{"aria-live":"assertive"}},[_c('p',{staticClass:"ms-TextField-errorMessage errorMessage"},[_c('span',[_vm._v(_vm._s(_vm.errorMessage))])])])]):_vm._e()])}
var TextFieldvue_type_template_id_59ff20cd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TextField/TextField.vue?vue&type=template&id=59ff20cd&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TextField/TextField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TextFieldvue_type_script_lang_js_ = ({
  components: {
    VLabel: Label
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    multiline: {
      type: Boolean,
      default: false
    },
    underlined: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    component: function component() {
      return this.multiline ? 'textarea' : 'input';
    },
    rootClass: function rootClass() {
      return {
        'is-disabled': this.disabled,
        'rootIsDisabled': this.disabled,
        'is-required': this.required,
        'rootIsRequiredLabel': this.required,
        'multiline': this.multiline,
        'rootIsMultiline': this.multiline,
        'underlined': this.underlined,
        'rootIsUnderlined': this.underlined
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/TextField/TextField.vue?vue&type=script&lang=js&
 /* harmony default export */ var TextField_TextFieldvue_type_script_lang_js_ = (TextFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TextField/TextField.vue?vue&type=style&index=0&id=59ff20cd&lang=scss&scoped=true&
var TextFieldvue_type_style_index_0_id_59ff20cd_lang_scss_scoped_true_ = __webpack_require__("2b2b");

// CONCATENATED MODULE: ./src/components/TextField/TextField.vue






/* normalize component */

var TextField_component = normalizeComponent(
  TextField_TextFieldvue_type_script_lang_js_,
  TextFieldvue_type_template_id_59ff20cd_scoped_true_render,
  TextFieldvue_type_template_id_59ff20cd_scoped_true_staticRenderFns,
  false,
  null,
  "59ff20cd",
  null
  
)

TextField_component.options.__file = "TextField.vue"
/* harmony default export */ var TextField = (TextField_component.exports);
// CONCATENATED MODULE: ./src/components/TextField/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"ef1a2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toggle/Toggle.vue?vue&type=template&id=438568c5&scoped=true&
var Togglevue_type_template_id_438568c5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Toggle root",class:_vm.classObj},[(_vm.label || _vm.$slots.default)?_c('VLabel',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e(),_c('div',{staticClass:"ms-Toggle-innerContainer container"},[_c('button',{staticClass:"ms-Toggle-background pill",attrs:{"id":_vm.id},on:{"click":_vm.onClick}},[_c('div',{staticClass:"ms-Toggle-thumb thumb"})]),_c('VLabel',{staticClass:"ms-Toggle-stateText text",attrs:{"for":_vm.id}},[(_vm.value)?_vm._t("onText",[_vm._v("\n        "+_vm._s(_vm.onText)+"\n      ")]):_vm._t("offText",[_vm._v("\n        "+_vm._s(_vm.offText)+"\n      ")])],2)],1)],1)}
var Togglevue_type_template_id_438568c5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Toggle/Toggle.vue?vue&type=template&id=438568c5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toggle/Toggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Togglevue_type_script_lang_js_ = ({
  components: {
    VLabel: Label
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    onText: {
      type: String,
      default: ''
    },
    offText: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id: function id() {
      return 'Toggle' + this._uid;
    },
    classObj: function classObj() {
      var obj = {};
      obj['is-active'] = this.value;
      obj['is-disabled'] = this.disabled;
      return obj;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) return;
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Toggle/Toggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Toggle_Togglevue_type_script_lang_js_ = (Togglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Toggle/Toggle.vue?vue&type=style&index=0&id=438568c5&lang=scss&scoped=true&
var Togglevue_type_style_index_0_id_438568c5_lang_scss_scoped_true_ = __webpack_require__("27f4");

// CONCATENATED MODULE: ./src/components/Toggle/Toggle.vue






/* normalize component */

var Toggle_component = normalizeComponent(
  Toggle_Togglevue_type_script_lang_js_,
  Togglevue_type_template_id_438568c5_scoped_true_render,
  Togglevue_type_template_id_438568c5_scoped_true_staticRenderFns,
  false,
  null,
  "438568c5",
  null
  
)

Toggle_component.options.__file = "Toggle.vue"
/* harmony default export */ var Toggle = (Toggle_component.exports);
// CONCATENATED MODULE: ./src/components/Toggle/index.js


// CONCATENATED MODULE: ./src/components.js

























// CONCATENATED MODULE: ./src/index.js

var Fabric = {
  install: function install(Vue, options) {
    for (var key in components_namespaceObject) {
      Vue.component(key, components_namespaceObject[key]);
    }
  }
};
/* harmony default export */ var src = (Fabric);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fed7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f5b1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("d5bf61a8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
});
//# sourceMappingURL=office-ui-fabric-vue.umd.js.map