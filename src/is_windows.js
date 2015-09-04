var testString = require('./test_string')
var isWindowsPhone = require('./is_windows_phone')

var isWindows = function(str) {
  return testString(str, 'windows') && !isWindowsPhone(str)
};

module.exports = isWindows;

