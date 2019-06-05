<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tparagraphs: '3',\n\t\t\tsentences: '4',\n\t\t\tlolSpeak: ''\n\t\t}\n\t},\n\tcreated() {\n\t\tthis.getLolSpeak();\n\t},\n\tmethods: {\n\t\tgetLolSpeak() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/', {\n\t\t\t\tparagraphs: this.paragraphs,\n\t\t\t\tsentences: this.sentences\n\t\t\t}).then(({ data }) => {\n\t\t\t\tthis.lolSpeak = data.loltext;\n\t\t\t}).catch(error => {\n\t\t\t});\n\t\t}\n\t}\n});\n\n\n//# sourceURL=webpack:///./src/js/components/LolSpeakGenerator.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"px-6 py-3\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"flex flex-col w-3/4 mx-auto my-6 items-center\" },\n      [\n        _c(\"div\", { staticClass: \"flex mb-4\" }, [\n          _c(\"div\", { staticClass: \"flex flex-col w-1/2 mx-4\" }, [\n            _c(\"label\", { staticClass: \"mb-2\", attrs: { for: \"paragraphs\" } }, [\n              _vm._v(\"Number of paragraphs\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.paragraphs,\n                  expression: \"paragraphs\"\n                }\n              ],\n              staticClass: \"p-2 bg-gray-200 text-lg rounded\",\n              attrs: { type: \"number\", id: \"paragraphs\", value: \"paragraphs\" },\n              domProps: { value: _vm.paragraphs },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.paragraphs = $event.target.value\n                }\n              }\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"flex flex-col w-1/2 mx-4\" }, [\n            _c(\"label\", { staticClass: \"mb-2\", attrs: { for: \"sentences\" } }, [\n              _vm._v(\"Number of sentences\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.sentences,\n                  expression: \"sentences\"\n                }\n              ],\n              staticClass: \"p-2 bg-gray-200 text-lg rounded\",\n              attrs: { type: \"number\", id: \"sentences\", value: \"sentences\" },\n              domProps: { value: _vm.sentences },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.sentences = $event.target.value\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            staticClass:\n              \"border-solid border-2 border-indigo-700 py-6 px-8 rounded hover:bg-indigo-700 text-indigo-700 hover:text-white\",\n            on: { click: _vm.getLolSpeak }\n          },\n          [_vm._v(\"Generate\")]\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"section\",\n      { staticClass: \"leading-relaxed\" },\n      _vm._l(_vm.lolSpeak, function(paragraph) {\n        return _c(\"p\", {\n          staticClass: \"my-3\",\n          domProps: { textContent: _vm._s(paragraph) }\n        })\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/js/components/LolSpeakGenerator.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _components_LolSpeakGenerator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LolSpeakGenerator.vue */ \"./src/js/components/LolSpeakGenerator.vue\");\n\n\n// Components\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('lol-speaker', _components_LolSpeakGenerator_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst app = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n\tel: '#app'\n});\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/LolSpeakGenerator.vue":
/*!*************************************************!*\
  !*** ./src/js/components/LolSpeakGenerator.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4& */ \"./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4&\");\n/* harmony import */ var _LolSpeakGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LolSpeakGenerator.vue?vue&type=script&lang=js& */ \"./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LolSpeakGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/js/components/LolSpeakGenerator.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/js/components/LolSpeakGenerator.vue?");

/***/ }),

/***/ "./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_LolSpeakGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./LolSpeakGenerator.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/js/components/LolSpeakGenerator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_LolSpeakGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/js/components/LolSpeakGenerator.vue?");

/***/ }),

/***/ "./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4&":
/*!********************************************************************************!*\
  !*** ./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/LolSpeakGenerator.vue?vue&type=template&id=87c8b2a4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LolSpeakGenerator_vue_vue_type_template_id_87c8b2a4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/js/components/LolSpeakGenerator.vue?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/css/styles.css ./src/js/app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/css/styles.css */\"./src/css/styles.css\");\nmodule.exports = __webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/css/styles.css_./src/js/app.js?");

/***/ })

/******/ });
=======
!function(e){function t(t){for(var n,s,l=t[0],p=t[1],i=t[2],c=0,f=[];c<l.length;c++)s=l[c],a[s]&&f.push(a[s][0]),a[s]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var p=r[l];0!==a[p]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={0:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=p;o.push([14,1]),r()}({14:function(e,t,r){r(15),e.exports=r(34)},15:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(12),o=r.n(a),s={data:()=>({paragraphs:"3",sentences:"4",lolSpeak:""}),created(){this.getLolSpeak()},methods:{getLolSpeak(){o.a.post("/",{paragraphs:this.paragraphs,sentences:this.sentences}).then(({data:e})=>{this.lolSpeak=e.loltext}).catch(e=>{})}}},l=r(13),p=Object(l.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-6"},[r("div",{staticClass:"flex flex-col w-3/4 mx-auto my-6 items-center"},[r("div",{staticClass:"flex mb-4"},[r("div",{staticClass:"flex flex-col w-1/2 mx-4"},[r("label",{attrs:{for:"paragraphs"}},[e._v("Number of paragraphs")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.paragraphs,expression:"paragraphs"}],attrs:{type:"number",id:"paragraphs",value:"paragraphs"},domProps:{value:e.paragraphs},on:{input:function(t){t.target.composing||(e.paragraphs=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"flex flex-col w-1/2 mx-4"},[r("label",{attrs:{for:"sentences"}},[e._v("Number of sentences")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.sentences,expression:"sentences"}],attrs:{type:"number",id:"sentences",value:"sentences"},domProps:{value:e.sentences},on:{input:function(t){t.target.composing||(e.sentences=t.target.value)}}})])]),e._v(" "),r("button",{staticClass:"border-solid border-2 border-gray-600 py-6 px-8 rounded hover:bg-gray-600 hover:text-white",on:{click:e.getLolSpeak}},[e._v("Generate")])]),e._v(" "),r("section",{staticClass:"leading-relaxed"},e._l(e.lolSpeak,function(t){return r("p",{domProps:{textContent:e._s(t)}})}),0)])},[],!1,null,null,null).exports;n.a.component("lol-speaker",p);new n.a({el:"#app"})}});
>>>>>>> 963e577c45bda125144018b52a8037b9a2dbd2a1
