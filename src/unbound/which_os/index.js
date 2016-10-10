var isAndroid = require('../is_android')
var isBlackberry = require('../is_blackberry')
var isIphone = require('../is_iphone')
var isMac = require('../is_mac')
var isLinux = require('../is_linux')
var isWindows = require('../is_windows')
var isWindowsPhone = require('../is_windows_phone')

module.exports = function whichOS (str) {
  if (isAndroid(str)) {
    return 'android'
  } else if (isBlackberry(str)) {
    return 'blackberry'
  } else if (isIphone(str)) {
    return 'iphone'
  } else if (isWindowsPhone(str)) {
    return 'windows mobile'
  } else if (isLinux(str)) {
    return 'linux'
  } else if (isMac(str)) {
    return 'mac'
  } else if (isWindows(str)) {
    return 'windows'
  } else {
    return undefined
  }
}
