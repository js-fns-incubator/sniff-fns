var testString = require('./test_string');

var isWindowsPhone = function(str) {
  if (testString(str, 'windows phone') || testString(str, 'iemobile')) {
    return parseFloat(str.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || true;
  } else {
    return false;
  }
};

module.exports = isWindowsPhone;
