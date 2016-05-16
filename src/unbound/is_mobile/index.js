var isAndroidMobile = require('../is_android_mobile')
var isIphone = require('../is_iphone')
var isWindowsPhone = require('../is_windows_phone')
var isBlackberry = require('../is_blackberry')

module.exports = function isMobile (str) {
  return isAndroidMobile(str) ||
    isIphone(str) ||
    isWindowsPhone(str) ||
    isBlackberry(str)
}
