var testString = require('./test_string');
var isAndroidMobile = require('./sniff_android_mobile');
var isIphone = require('./sniff_iphone');
var isIpad = require('./sniff_ipad');
var isWP = require('./sniff_windows_phone.js');
var isBB = require('./sniff_blackberry');

var isMobile = function(str){
  return isAndroidMobile(str) || isIphone(str) || isIpad(str) || isWP(str) || isBB(str);
};

module.exports = isMobile;
