const isAndroidMobile = require('../is_android_mobile')
const isIphone = require('../is_iphone')
const isWindowsPhone = require('../is_windows_phone')
const isBlackberry = require('../is_blackberry')

module.exports = function isMobile (str) {
  return isAndroidMobile(str) ||
    isIphone(str) ||
    isWindowsPhone(str) ||
    isBlackberry(str)
}
