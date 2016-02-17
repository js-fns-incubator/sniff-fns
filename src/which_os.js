var isAndroid = require('./is_android');
var isAndroidMobile = require('./is_android_mobile');
var isBB = require('./is_blackberry');
var isIphone = require('./is_iphone');
var isMac = require('./is_mac');
var isWindows = require('./is_windows');
var isWP = require('./is_windows_phone');

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
