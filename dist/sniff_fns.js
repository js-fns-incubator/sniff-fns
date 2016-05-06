(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sniffFns"] = factory();
	else
		root["sniffFns"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Browsers
	var isChrome = __webpack_require__(1);
	var isChromeMobile = __webpack_require__(4);
	var isFF = __webpack_require__(6);
	var isOpera = __webpack_require__(7);
	var isSafari = __webpack_require__(8);
	var isIE = __webpack_require__(9);
	var whichBrowser = __webpack_require__(10);
	var whichBrowserVersion = __webpack_require__(11);

	// OSes
	var isAndroid = __webpack_require__(5);
	var isAndroidMobile = __webpack_require__(12);
	var isBB = __webpack_require__(13);
	var isIphone = __webpack_require__(14);
	var isIpad = __webpack_require__(15);
	var isMac = __webpack_require__(16);
	var isWindows = __webpack_require__(17);
	var isWP = __webpack_require__(18);
	var isMobile = __webpack_require__(19);
	var whichOs = __webpack_require__(20);

	var sniffFns = {
	    isAndroid: isAndroid,
	    isMobileAndroid: isAndroidMobile,
	    isBb10: isBB,
	    browser: {
	      isChrome: isChrome,
	      isChromeMobile: isChromeMobile,
	      isFirefox: isFF,
	      isOpera: isOpera,
	      isSafari: isSafari,
	      isIE: isIE,
	      whichBrowser: whichBrowser,
	      whichBrowserVersion: whichBrowserVersion
	    },
	    isIphone: isIphone,
	    isIpad: isIpad,
	    isMac: isMac,
	    isWindows: isWindows,
	    isWindowsPhone: isWP,
	    isMobile: isMobile,
	    whichOs: whichOs
	}

	module.exports = sniffFns;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);
	var isEdge = __webpack_require__(3);

	var isChrome = function(str) {
	  return testString(str, 'chrome') && !isEdge(str);
	}

	module.exports = isChrome;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isEdge = function(str) {
	  return testString(str, 'edge');
	}

	module.exports = isEdge;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);
	var isChrome = __webpack_require__(1);
	var isAndroid = __webpack_require__(5);

	var isChromeMobile = function(str){
	  return (isChrome(str) && isAndroid(str)) || testString(str, 'CriOS');
	}

	module.exports = isChromeMobile;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isAndroid = function (str) {
	  return testString(str, '; android');
	};

	module.exports = isAndroid;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isFirefox = function(str){
	  return testString(str, 'firefox');
	}

	module.exports = isFirefox;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isOpera = function(str){
	  return testString(str, 'OPR/') || testString(str, 'opera');
	}

	module.exports = isOpera;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);
	var isChrome = __webpack_require__(1);
	var isAndroid = __webpack_require__(5);

	var isSafari = function(str){
	  return testString(str, 'safari') && testString(str, 'apple') && !(isChrome(str) && isAndroid(str));
	}

	module.exports = isSafari;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isIE = function(str){
	  return testString(str, 'MSIE') || // Common IE pattern
	    testString(str, 'Trident/7'); // IE11
	}

	module.exports = isIE;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isChrome = __webpack_require__(1);
	var isChromeMobile = __webpack_require__(4);
	var isFF = __webpack_require__(6);
	var isOpera = __webpack_require__(7);
	var isSafari = __webpack_require__(8);
	var isIE = __webpack_require__(9);

	var whichBrowser = function (str) {
	  if (isOpera(str)) {
	    return 'opera'
	  } else if (isChromeMobile(str)) {
	    return 'chrome mobile'
	  } else if (isChrome(str)) {
	    return 'chrome'
	  } else if (isFF(str)) {
	    return 'firefox'
	  } else if (isSafari(str)) {
	    return 'safari'
	  } else if (isIE(str)) {
	    return 'ie'
	  } else {
	    return 'unknown browser'
	  }
	};

	module.exports = whichBrowser;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var whichBrowser = __webpack_require__(10);

	var whichBrowserVersion = function (str) {
	  var capturedVersion
	  switch (whichBrowser(str)) {
	    case 'chrome':
	      capturedVersion = str.match(/Chrome\/(\d+)\./);
	      return capturedVersion ? parseInt(capturedVersion[1]) : null;

	    case 'chrome mobile':
	      capturedVersion = str.match(/(?:Chrome|CriOS)\/(\d+)\./);
	      return capturedVersion ? parseInt(capturedVersion[1]) : null;

	    case 'firefox':
	      capturedVersion = str.match(/Firefox\/(\d+)\./);
	      return capturedVersion ? parseInt(capturedVersion[1]) : null;

	    case 'ie':
	      capturedVersion = str.match(/MSIE\s(\d+)\./);
	      if (capturedVersion) {
	        return parseInt(capturedVersion[1]);
	      } else {
	        return /Trident\/7/.test(str) ? 11 : null;
	      }

	    case 'safari':
	      capturedVersion = str.match(/Version\/(\d+)\./);
	      if (capturedVersion) {
	        return parseInt(capturedVersion[1]);
	      } else {
	        capturedVersion = str.match(/Safari\/(\d+)\./);
	        if (capturedVersion) {
	          return parseInt(capturedVersion[1]) < 412 ? 1 : 2;
	        } else {
	          return null
	        }
	      }

	    case 'opera':
	      capturedVersion = str.match(/Version\/(\d+)\./);
	      return capturedVersion ? parseInt(capturedVersion[1]) : null;

	    default:
	      return null
	  }
	};

	module.exports = whichBrowserVersion;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);
	var sniffAndroid = __webpack_require__(5);

	var isAndroidMobile = function(str){
	  return sniffAndroid(str) && testString(str, 'mobile');
	}

	module.exports = isAndroidMobile;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isBB = function(str){
	  return testString(str, 'bb10');
	}

	module.exports = isBB;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2)

	var isIphone = function(str){
	  return testString(str, 'iphone;') || testString(str, 'ipod touch;')
	};

	module.exports = isIphone;



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2)

	var isIpad = function(str){
	  return testString(str, 'ipad;')
	};

	module.exports = isIpad;



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2)

	var isMac = function(str){
	  return testString(str, 'mac os')
	};

	module.exports = isMac;



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2)
	var isWindowsPhone = __webpack_require__(18)

	var isWindows = function(str) {
	  return testString(str, 'windows') && !isWindowsPhone(str)
	};

	module.exports = isWindows;



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);

	var isWindowsPhone = function(str) {
	  if (testString(str, 'windows phone') || testString(str, 'iemobile')) {
	    return parseFloat(str.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || true;
	  } else {
	    return false;
	  }
	};

	module.exports = isWindowsPhone;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var testString = __webpack_require__(2);
	var isAndroidMobile = __webpack_require__(12);
	var isIphone = __webpack_require__(14);
	var isIpad = __webpack_require__(15);
	var isWP = __webpack_require__(18);
	var isBB = __webpack_require__(13);

	var isMobile = function(str){
	  return isAndroidMobile(str) || isIphone(str) || isWP(str) || isBB(str);
	};

	module.exports = isMobile;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isAndroid = __webpack_require__(5);
	var isAndroidMobile = __webpack_require__(12);
	var isBB = __webpack_require__(13);
	var isIphone = __webpack_require__(14);
	var isMac = __webpack_require__(16);
	var isWindows = __webpack_require__(17);
	var isWP = __webpack_require__(18);

	var whichOs = function (str) {
	  if (isAndroid(str)) {
	    return 'android'
	  } else if (isBB(str)) {
	    return 'blackberry'
	  } else if (isIphone(str)) {
	    return 'iphone'
	  } else if (isWP(str)) {
	    return 'windows mobile'
	  } else if (isMac(str)) {
	    return 'mac'
	  } else if (isWindows(str)) {
	    return 'windows'
	  } else {
	    return 'unknown os'
	  }
	};

	module.exports = whichOs;


/***/ }
/******/ ])
});
;