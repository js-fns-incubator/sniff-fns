var testString = require('./test_string');
var isAndroidMobile = require('./is_android_mobile');
var isIphone = require('./is_iphone');
var isIpad = require('./is_ipad');
var isWP = require('./is_windows_phone.js');
var isBB = require('./is_blackberry');

var isMobile = function(str){
  return isAndroidMobile(str) || isIphone(str) || isWP(str) || isBB(str);
};

module.exports = isMobile;
