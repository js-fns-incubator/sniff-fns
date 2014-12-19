var testString = require('./test_string')

var isAndroid = function(str){
  if (testString(str, 'android')) {
    return parseFloat(str.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || true
  } else {
    return false
  }
};

module.exports = isAndroid;
