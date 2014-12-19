/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var userAgent = __webpack_require__(2);

	// describe('isToday', function() {
	//   beforeEach(function() {
	//     this.clock = sinon.useFakeTimers(
	//       new Date(2014, 8 /* starts from 0 */, 25).getTime()
	//     );
	//   });

	//   afterEach(function() {
	//     this.clock.restore();
	//   });

	//   it('returns true if passed is weekend', function() {
	//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 25));
	//     expect(result).to.be.true;
	//   });

	//   it('returns false if passed date is not today', function() {
	//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 26));
	//     expect(result).to.be.false;
	//   });

	//   it('allows to pass string', function() {
	//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).toString());
	//     expect(result).to.be.true;
	//   });
	// });

	describe('userAgent', function(){
	  it('return userAgent information in lowercase', function(){
	    var userAgentString = true;

	    expect(userAgent).to.be.true;
	  });
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Returns user agent string converted to lowercase
	 * @returns {string}
	 */
	var userAgent = function(){
	  return navigator.userAgent.toLowerCase()
	}

	module.exports = userAgent;


/***/ }
/******/ ])