var testString = require('./test_string')
var isAndroid = require('./is_android')

var isLinux = function(str) {
  return testString(str, 'linux') && !isAndroid(str);
};

module.exports = isLinux;

