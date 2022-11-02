/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/APICONTROL.js":
/*!***************************!*\
  !*** ./src/APICONTROL.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _UICONTROL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UICONTROL */ "./src/UICONTROL.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchWeatherData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searcData, searchFrom) {
    var URL, fetchCurrent, fetchForecast, current, forecast;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            URL = 'https://api.openweathermap.org/data/2.5';
            if (!(searchFrom == 'cityName')) {
              _context.next = 10;
              break;
            }
            _context.next = 4;
            return fetch("".concat(URL, "/weather?q=").concat(searcData, "&appid=").concat("dd1cd76f3bbbb7204b9e9286b0ba60e8", "&units=metric"));
          case 4:
            fetchCurrent = _context.sent;
            _context.next = 7;
            return fetch("".concat(URL, "/forecast?q=").concat(searcData, "&appid=").concat("dd1cd76f3bbbb7204b9e9286b0ba60e8", "&units=metric"));
          case 7:
            fetchForecast = _context.sent;
            _context.next = 17;
            break;
          case 10:
            if (!(searchFrom == 'coords')) {
              _context.next = 17;
              break;
            }
            _context.next = 13;
            return fetch("".concat(URL, "/weather?lat=").concat(searcData[0], "&lon=").concat(searcData[1], "&appid=").concat("dd1cd76f3bbbb7204b9e9286b0ba60e8", "&units=metric"));
          case 13:
            fetchCurrent = _context.sent;
            _context.next = 16;
            return fetch("".concat(URL, "/forecast?lat=").concat(searcData[0], "&lon=").concat(searcData[1], "&appid=").concat("dd1cd76f3bbbb7204b9e9286b0ba60e8", "&units=metric"));
          case 16:
            fetchForecast = _context.sent;
          case 17:
            _context.next = 19;
            return fetchCurrent.json();
          case 19:
            current = _context.sent;
            _context.next = 22;
            return fetchForecast.json();
          case 22:
            forecast = _context.sent;
            (0,_UICONTROL__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(current, forecast);
          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function fetchWeatherData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./src/UICONTROL.js":
/*!**************************!*\
  !*** ./src/UICONTROL.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDisplay": () => (/* binding */ clearDisplay),
/* harmony export */   "displayWeather": () => (/* binding */ displayWeather),
/* harmony export */   "getCityName": () => (/* binding */ getCityName),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "setDom": () => (/* binding */ setDom)
/* harmony export */ });
/* harmony import */ var _APICONTROL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APICONTROL */ "./src/APICONTROL.js");


//DOM elements
var setDom = {
  nameField: document.querySelector('.city-name-input'),
  nameBtn: document.querySelector('.city-name-button'),
  geoBtn: document.querySelector('.geo-btn'),
  displayLocation: document.querySelector('.display-location'),
  displayWeather: document.querySelector('.display-weather'),
  cityError: document.querySelector('.city-error'),
  locationError: document.querySelector('.location-error')
};

// Get location from device
var getCoordinates = function getCoordinates() {
  // successfully got location
  var success = function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    (0,_APICONTROL__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)([lat, lon], 'coords');
  };

  // location is disabled
  var error = function error() {
    clearDisplay();
    setDom.locationError.style.display = 'block';
  };

  //method and options
  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true
  });
};

//get city name input from UI
function getCityName() {
  //check if city name has letters
  if (!/[a-zA-Z]/.test(setDom.nameField.value)) {
    clearDisplay();
    setDom.cityError.style.display = 'block';
  } else {
    (0,_APICONTROL__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(setDom.nameField.value, 'cityName');
  }
}
var clearDisplay = function clearDisplay() {
  setDom.nameField.value = '';
  setDom.displayLocation.innerHTML = '';
  setDom.displayWeather.innerHTML = '';
  setDom.cityError.style.display = 'none';
  setDom.locationError.style.display = 'none';
};

//method to show days of the week
var weekday = function weekday(value) {
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (value > 6) {
    value = value - 7;
  }
  return weekdays[value];
};

// display Weather data
var displayWeather = function displayWeather(current, forecast) {
  clearDisplay();

  //check for errors in weather or forecast responses
  if (current.cod != 200 || forecast.cod != 200) {
    setDom.cityError.style.display = 'block';
    return;
  }

  //responses don't have errors
  // current weather
  //city name
  var name = current.name;
  //country code
  var country = current.sys.country;
  //icon and description
  var _current$weather$ = current.weather[0],
    icon = _current$weather$.icon,
    main = _current$weather$.main;
  //temp in celsius
  var temp = current.main.temp;
  //temp in fahrenheit
  var ferhTemp = temp * 9 / 5 + 32;
  // tomorrow (forecast API)
  var day1 = weekday(new Date().getDay() + 1);
  var day1_icon = forecast.list[8].weather[0].icon;
  var day1_description = forecast.list[8].weather[0].main;
  var day1_temp = forecast.list[8].main.temp;
  var day1_ferhTemp = day1_temp * 9 / 5 + 32;
  // day after (forecast API)
  var day2 = weekday(new Date().getDay() + 2);
  var day2_icon = forecast.list[16].weather[0].icon;
  var day2_description = forecast.list[16].weather[0].main;
  var day2_temp = forecast.list[16].main.temp;
  var day2_ferhTemp = day2_temp * 9 / 5 + 32;

  //display fetched location
  setDom.displayLocation.innerHTML = "Weather in ".concat(name, ", ").concat(country);

  //display fetched data from weather & forecast APIs
  var weatherEl = document.createElement('div');
  weatherEl.innerHTML = "<div class=\"display-container\">\n  <div class=\"data-section flex current\">".concat(Math.round(temp), " C</div>\n        <div class=\"data-section\">\n          <img\n            src=\"http://openweathermap.org/img/wn/").concat(icon, "@2x.png\"\n            class=\"icon\"\n          />\n          <h4>").concat(main, "</h4>\n        </div>\n        <button class=\"units-btn flex\">Metric</button>\n        </div>\n        <div class=\"display-days\">\n        <div class=\"data-section\">\n          <h4>").concat(day1, "</h4>\n          <div class=\"flex\">\n            <div class=\"day1-temp\">").concat(Math.round(day1_temp), " C</div>\n            <div>\n              <img\n                src=\"http://openweathermap.org/img/wn/").concat(day1_icon, "@2x.png\"\n                class=\"icon\"\n              />\n              <h5>").concat(day1_description, "</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"data-section\">\n          <h4>").concat(day2, "</h4>\n          <div class=\"flex\">\n            <div class=\"day2-temp\">").concat(Math.round(day2_temp), " C</div>\n            <div>\n              <img\n                src=\"http://openweathermap.org/img/wn/").concat(day2_icon, "@2x.png\"\n                class=\"icon\"\n              />\n              <h5>").concat(day2_description, "</h5>\n            </div>\n          </div>\n        </div>\n      </div>");
  setDom.displayWeather.appendChild(weatherEl);

  //change between celsius and fahrenheit with button click
  document.querySelector('.units-btn').addEventListener('click', function (e) {
    if (e.target.innerHTML == 'Metric') {
      e.target.innerHTML = 'Imperial';
      document.querySelector('.current').innerHTML = "".concat(Math.round(ferhTemp), " F");
      document.querySelector('.day1-temp').innerHTML = "".concat(Math.round(day1_ferhTemp), " F");
      document.querySelector('.day2-temp').innerHTML = "".concat(Math.round(day2_ferhTemp), " F");
    } else if (e.target.innerHTML == 'Imperial') {
      e.target.innerHTML = 'Metric';
      document.querySelector('.current').innerHTML = "".concat(Math.round(temp), " C");
      document.querySelector('.day1-temp').innerHTML = "".concat(Math.round(day2_temp), " C");
      document.querySelector('.day2-temp').innerHTML = "".concat(Math.round(day2_temp), " C");
    }
  });
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sriracha&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --main-bg: #e8ecf2;\r\n  --light-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8);\r\n  --dark-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);\r\n  --light-shadow-color: rgba(255, 255, 255, 0.8);\r\n  --dark-shadow-color: rgba(0, 0, 0, 0.25);\r\n  --secondary-font: #0000ff;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Sriracha', cursive;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-text-size-adjust: none;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: var(--main-bg);\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n}\r\n.container,\r\n.data-section {\r\n  flex-direction: column;\r\n  border-radius: 10px;\r\n  box-shadow: var(--light-shadow), var(--dark-shadow);\r\n}\r\n.container {\r\n  flex-wrap: wrap;\r\n  background-color: var(--main-bg);\r\n  gap: 20px;\r\n  width: 100%;\r\n  max-width: 450px;\r\n  padding: 20px;\r\n}\r\n.name-form {\r\n  width: 100%;\r\n}\r\n.city-name-input,\r\n.geo-btn,\r\n.units-btn {\r\n  width: 100%;\r\n  border: 4px solid var(--main-bg);\r\n  padding: 5px 20px;\r\n  font-size: 20px;\r\n  border-radius: 50px;\r\n  box-shadow: var(--light-shadow), var(--dark-shadow);\r\n}\r\n.city-name-input {\r\n  background-color: var(--light-shadow-color);\r\n  outline: none;\r\n}\r\n.city-name-input:focus {\r\n  border: 4px solid var(--dark-shadow-color);\r\n}\r\n.city-name-button {\r\n  color: var(--secondary-font);\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  transform: translate(-130%, -15%);\r\n  /* transform: translate(-70%, -15%); */\r\n  font-size: 40px;\r\n}\r\n.city-name-button:active {\r\n  transform: translate(-130%, -13%);\r\n}\r\n.geo-btn,\r\n.units-btn {\r\n  gap: 10px;\r\n  cursor: pointer;\r\n  transition: all;\r\n  transition-duration: 250ms;\r\n  background-color: var(--main-bg);\r\n  color: var(--secondary-font);\r\n  margin: auto;\r\n}\r\n.geo-btn:hover,\r\n.units-btn:hover {\r\n  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6),\r\n    1px 1px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n.geo-btn:active,\r\n.units-btn:active {\r\n  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6),\r\n    1px 1px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 1),\r\n    inset 2px 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.display-container {\r\n  display: grid;\r\n  gap: 15px;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n}\r\n.display-days {\r\n  margin-top: 15px;\r\n  display: grid;\r\n  gap: 15px;\r\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\r\n}\r\n.display-weather,\r\n.display-weather:first-child {\r\n  width: 100%;\r\n}\r\n.data-section {\r\n  background-color: rgba(192, 208, 231, 0.5);\r\n  text-align: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  padding: 5px;\r\n}\r\n.current {\r\n  font-size: 40px;\r\n}\r\n.icon {\r\n  margin-top: -20px;\r\n  margin-bottom: -30px;\r\n}\r\n.units-btn {\r\n  max-height: 55px;\r\n}\r\n.day1-temp,\r\n.day2-temp {\r\n  flex-basis: 50%;\r\n}\r\n.city-error {\r\n  margin-top: 15px;\r\n}\r\n.city-error,\r\n.location-error {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  color: #ff0000;\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,uDAAuD;EACvD,+CAA+C;EAC/C,8CAA8C;EAC9C,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;EAChC,6CAA6C;EAC7C,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,gCAAgC;AAClC;AACA;;;;;EAKE,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;EACtB,mBAAmB;EACnB,mDAAmD;AACrD;AACA;EACE,eAAe;EACf,gCAAgC;EAChC,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,WAAW;AACb;AACA;;;EAGE,WAAW;EACX,gCAAgC;EAChC,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,mDAAmD;AACrD;AACA;EACE,2CAA2C;EAC3C,aAAa;AACf;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,iCAAiC;EACjC,sCAAsC;EACtC,eAAe;AACjB;AACA;EACE,iCAAiC;AACnC;AACA;;EAEE,SAAS;EACT,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,gCAAgC;EAChC,4BAA4B;EAC5B,YAAY;AACd;AACA;;EAEE;kCACgC;AAClC;AACA;;EAEE;;wCAEsC;AACxC;AACA;EACE,aAAa;EACb,SAAS;EACT,2DAA2D;AAC7D;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,2DAA2D;AAC7D;AACA;;EAEE,WAAW;AACb;AACA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');\r\n\r\n:root {\r\n  --main-bg: #e8ecf2;\r\n  --light-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8);\r\n  --dark-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);\r\n  --light-shadow-color: rgba(255, 255, 255, 0.8);\r\n  --dark-shadow-color: rgba(0, 0, 0, 0.25);\r\n  --secondary-font: #0000ff;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Sriracha', cursive;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-text-size-adjust: none;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: var(--main-bg);\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n}\r\n.container,\r\n.data-section {\r\n  flex-direction: column;\r\n  border-radius: 10px;\r\n  box-shadow: var(--light-shadow), var(--dark-shadow);\r\n}\r\n.container {\r\n  flex-wrap: wrap;\r\n  background-color: var(--main-bg);\r\n  gap: 20px;\r\n  width: 100%;\r\n  max-width: 450px;\r\n  padding: 20px;\r\n}\r\n.name-form {\r\n  width: 100%;\r\n}\r\n.city-name-input,\r\n.geo-btn,\r\n.units-btn {\r\n  width: 100%;\r\n  border: 4px solid var(--main-bg);\r\n  padding: 5px 20px;\r\n  font-size: 20px;\r\n  border-radius: 50px;\r\n  box-shadow: var(--light-shadow), var(--dark-shadow);\r\n}\r\n.city-name-input {\r\n  background-color: var(--light-shadow-color);\r\n  outline: none;\r\n}\r\n.city-name-input:focus {\r\n  border: 4px solid var(--dark-shadow-color);\r\n}\r\n.city-name-button {\r\n  color: var(--secondary-font);\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  transform: translate(-130%, -15%);\r\n  /* transform: translate(-70%, -15%); */\r\n  font-size: 40px;\r\n}\r\n.city-name-button:active {\r\n  transform: translate(-130%, -13%);\r\n}\r\n.geo-btn,\r\n.units-btn {\r\n  gap: 10px;\r\n  cursor: pointer;\r\n  transition: all;\r\n  transition-duration: 250ms;\r\n  background-color: var(--main-bg);\r\n  color: var(--secondary-font);\r\n  margin: auto;\r\n}\r\n.geo-btn:hover,\r\n.units-btn:hover {\r\n  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6),\r\n    1px 1px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n.geo-btn:active,\r\n.units-btn:active {\r\n  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6),\r\n    1px 1px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 1),\r\n    inset 2px 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.display-container {\r\n  display: grid;\r\n  gap: 15px;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n}\r\n.display-days {\r\n  margin-top: 15px;\r\n  display: grid;\r\n  gap: 15px;\r\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\r\n}\r\n.display-weather,\r\n.display-weather:first-child {\r\n  width: 100%;\r\n}\r\n.data-section {\r\n  background-color: rgba(192, 208, 231, 0.5);\r\n  text-align: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  padding: 5px;\r\n}\r\n.current {\r\n  font-size: 40px;\r\n}\r\n.icon {\r\n  margin-top: -20px;\r\n  margin-bottom: -30px;\r\n}\r\n.units-btn {\r\n  max-height: 55px;\r\n}\r\n.day1-temp,\r\n.day2-temp {\r\n  flex-basis: 50%;\r\n}\r\n.city-error {\r\n  margin-top: 15px;\r\n}\r\n.city-error,\r\n.location-error {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  color: #ff0000;\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UICONTROL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UICONTROL */ "./src/UICONTROL.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


var startApp = function startApp() {
  (0,_UICONTROL__WEBPACK_IMPORTED_MODULE_0__.clearDisplay)();
  _UICONTROL__WEBPACK_IMPORTED_MODULE_0__.setDom.geoBtn.addEventListener('click', _UICONTROL__WEBPACK_IMPORTED_MODULE_0__.getCoordinates);
  _UICONTROL__WEBPACK_IMPORTED_MODULE_0__.setDom.nameBtn.addEventListener('click', _UICONTROL__WEBPACK_IMPORTED_MODULE_0__.getCityName);
  _UICONTROL__WEBPACK_IMPORTED_MODULE_0__.setDom.nameField.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      (0,_UICONTROL__WEBPACK_IMPORTED_MODULE_0__.getCityName)();
    }
  });
};
startApp();
})();

/******/ })()
;
//# sourceMappingURL=bundlef043f8bf33a6b4d4c302.js.map