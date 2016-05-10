const isWindowsPhone = require('../is_windows_phone')

module.exports = function isWindows (str) {
  return /windows/i.test(str) && !isWindowsPhone(str)
}
