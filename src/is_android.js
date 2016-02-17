var testString = require('./test_string');

var isAndroid = function (str) {
  return testString(str, '; android');
};

module.exports = isAndroid;
