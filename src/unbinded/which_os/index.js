const isAndroid = require('../is_android')
const isBlackberry = require('../is_blackberry')
const isIphone = require('../is_iphone')
const isMac = require('../is_mac')
const isWindows = require('../is_windows')
const isWindowsPhone = require('../is_windows_phone')

module.exports = function whichOS (str) {
  if (isAndroid(str)) {
    return 'android'
  } else if (isBlackberry(str)) {
    return 'blackberry'
  } else if (isIphone(str)) {
    return 'iphone'
  } else if (isWindowsPhone(str)) {
    return 'windows mobile'
  } else if (isMac(str)) {
    return 'mac'
  } else if (isWindows(str)) {
    return 'windows'
  } else {
    return undefined
  }
}
