(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["sniffFns"] = factory();
	else
		root["sniffFns"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var isChrome = __webpack_require__(1);
	var isChromeMobile = __webpack_require__(2);
	var isAndroid = __webpack_require__(3);
	var isAndroidMobile = __webpack_require__(4);
	var isBB = __webpack_require__(5);
	var isFF = __webpack_require__(6);
	var isOpera = __webpack_require__(7);
	var isSafari = __webpack_require__(8);
	var isIphone = __webpack_require__(9);
	var isIpad = __webpack_require__(10);
	var isMac = __webpack_require__(11);
	var isWP = __webpack_require__(12);
	var isMobile = __webpack_require__(13);

	var sniffFns = {
	    isAndroid: isAndroid,
	    isMobileAndroid: isAndroidMobile,
	    isBb10: isBB,
	    browser: {
	      isChrome: isChrome,
	      isChromeMobile: isChromeMobile,
	      isFirefox: isFF,
	      isOpera: isOpera,
	      isSafari: isSafari
	    },
	    isIphone: isIphone,
	    isIpad: isIpad,
	    isMac: isMac,
	    isWindowsPhone: isWP,
	    isMobile: isMobile
	}

	module.exports = sniffFns;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);

	var isChrome = function(str){
	  return testString(str, 'chrome');
	}

	module.exports = isChrome;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);
	var isChrome = __webpack_require__(1);
	var isAndroid = __webpack_require__(3);

	var isChromeMobile = function(str){
	  return (isChrome(str) && isAndroid(str)) || testString(str, 'CriOS');
	}

	module.exports = isChromeMobile;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14)

	var isAndroid = function(str){
	  if (testString(str, 'android')) {
	    return parseFloat(str.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || true
	  } else {
	    return false
	  }
	};

	module.exports = isAndroid;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);
	var sniffAndroid = __webpack_require__(3);

	var isAndroidMobile = function(str){
	  return sniffAndroid(str) && testString(str, 'mobile');
	}

	module.exports = isAndroidMobile;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);

	var isBB = function(str){
	  return testString(str, 'bb10');
	}

	module.exports = isBB;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);

	var isFirefox = function(str){
	  return testString(str, 'firefox');
	}

	module.exports = isFirefox;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);

	var isOpera = function(str){
	  return testString(str, 'OPR/') || testString(str, 'opera');
	}

	module.exports = isOpera;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);
	var isChrome = __webpack_require__(1);
	var isAndroid = __webpack_require__(3);

	var isSafari = function(str){
	  return testString(str, 'safari') && testString(str, 'apple') && !(isChrome(str) && isAndroid(str));
	}

	module.exports = isSafari;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14)

	var isIphone = function(str){
	  return testString(str, 'iphone;') || testString(str, 'ipod touch;')
	};

	module.exports = isIphone;



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14)

	var isIpad = function(str){
	  return testString(str, 'ipad;')
	};

	module.exports = isIpad;



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14)

	var isMac = function(str){
	  return testString(str, 'mac os')
	};

	module.exports = isMac;



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);

	var isWindowsPhone = function(str) {
	  if (testString(str, 'windows phone') || testString(str, 'iemobile')) {
	    return parseFloat(str.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || true;
	  } else {
	    return false;
	  }
	};

	module.exports = isWindowsPhone;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(14);
	var isAndroidMobile = __webpack_require__(4);
	var isIphone = __webpack_require__(9);
	var isIpad = __webpack_require__(10);
	var isWP = __webpack_require__(12);
	var isBB = __webpack_require__(5);

	var isMobile = function(str){
	  return isAndroidMobile(str) || isIphone(str) || isWP(str) || isBB(str);
	};

	module.exports = isMobile;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Test string if it contains other string
	 * @param  {string} str
	 * @param  {string} test
	 * @returns {boolean}
	 */
	var testString = function(str, test){
	  return RegExp(test.toLowerCase()).test(str.toLowerCase())
	}

	module.exports = testString;


/***/ }
/******/ ])
});
